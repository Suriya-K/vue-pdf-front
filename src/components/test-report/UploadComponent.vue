<template></template>

<script lang="ts">
import * as d3 from 'd3';
const usage_code = {
    NU001: "vit_a",
    NU005: "vit_c",
    NU006: "vit_d",
    NU007: "vit_e",
    NU017: "biotin",
    NU009: "folate",
    NU011: "iron",
    NU013: "omg3",
    NU016: "zinc",
    SK013: "alopecia",
    SK018: "premature_gray",
    SK012: "psoriasis",
    SK011: "dry_skin",
    SS004: "insomnia",
    LV007: "premature_menopause",
    SK019: "minoxidil",
    SK020: "finasteride",
    SK0201: "dutasteride",
} as any;

var recommen_reference: any = [];
var info_reference: any = [];
var input_data: any = [];
var extract_data: any = {
    vit_a: "",
    vit_c: "",
    vit_d: "",
    vit_e: "",
    biotin: "",
    folate: "",
    iron: "",
    omg3: "",
    zinc: "",
    alopecia: "",
    premature_gray: "",
    psoriasis: "",
    dry_skin: "",
    insomnia: "",
    premature_menopause: "",
    minoxidil: "",
    finasteride: "",
    dutasteride: "",
};
var recom_data: any = {
    rec_vit_a: "",
    rec_vit_c: "",
    rec_vit_d: "",
    rec_vit_e: "",
    rec_biotin: "",
    rec_folate: "",
    rec_iron: "",
    rec_omg3: "",
    rec_zinc: "",
    rec_alopecia: "",
    rec_premature_gray: "",
    rec_psoriasis: "",
    rec_dry_skin: "",
    rec_insomnia: "",
    rec_premature_menopause: "",
};
var info_data: any = {
    info_vit_a: "",
    info_vit_c: "",
    info_vit_d: "",
    info_vit_e: "",
    info_biotin: "",
    info_folate: "",
    info_iron: "",
    info_omg3: "",
    info_zinc: "",
    info_alopecia: "",
    info_premature_gray: "",
    info_psoriasis: "",
    info_dry_skin: "",
    info_insomnia: "",
    info_premature_menopause: "",
}
var summary_data: any = [];

export default {
    data() {
        return {
            summary_data
        }
    },
    async mounted() {
        await this.assignReference();
        this.emitEventChanged();
    },
    methods: {
        async loadRecommandReference(): Promise<void> {
            const recom_tsv: d3.DSVRowArray<string> = await d3.tsv('/recommen_reference.tsv');
            for await (const element of recom_tsv) {
                recommen_reference.push(element);
            }
            recommen_reference.forEach((data: any) => {
                // low_rec medhigh_rec
                if (usage_code[data.code]) {
                    if (extract_data[usage_code[data.code]] + "_rec" in data) {
                        recom_data["rec_" + usage_code[data.code]] =
                            data[extract_data[usage_code[data.code]] + "_rec"];
                    }
                    if ("med" + extract_data[usage_code[data.code]] + "_rec" in data) {
                        recom_data["rec_" + usage_code[data.code]] =
                            data["med" + extract_data[usage_code[data.code]] + "_rec"];
                    }
                    if (extract_data[usage_code[data.code]] + "high_rec" in data) {
                        recom_data["rec_" + usage_code[data.code]] =
                            data[extract_data[usage_code[data.code]] + "high_rec"];
                    }
                }
            });
        },
        async loadData() {
            const data_tsv = await d3.tsv('/sample_input.tsv');
            for await (const data of data_tsv) {
                input_data.push(data);

            }
            input_data.forEach((data: any) => {
                if (usage_code[data.code] in extract_data) {
                    extract_data[usage_code[data.code]] = data["interpret.3scale"];
                    // SK020 finasteride & dutasteride use same value
                    extract_data['dutasteride'] = extract_data['finasteride'];
                }
            });

        },
        async loadInfoReference() {
            const info_tsv = await d3.tsv('/info_reference.tsv');
            for await (const element of info_tsv) {
                info_reference.push(element);
            }
            info_reference.forEach((data: any) => {
                if ("info_" + usage_code[data.gfs_code] in info_data) {
                    info_data["info_" + usage_code[data.gfs_code]] = data.text_thai;
                }
            });
        },
        async assignReference(): Promise<void> {
            await this.loadData();
            await this.loadRecommandReference();
            await this.loadInfoReference();
            //data["interpret.3scale"]
            summary_data.push(extract_data);
            summary_data.push(recom_data);
            summary_data.push(info_data);
            // console.log(summary_data);
        },
        emitEventChanged(): void {
            this.$emit("uploaded", this.summary_data);
        }
    }
}
</script>