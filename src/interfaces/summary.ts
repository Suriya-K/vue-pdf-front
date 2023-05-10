export interface ExtractData {
  vit_a: string;
  vit_c: string;
  vit_d: string;
  vit_e: string;
  biotin: string;
  folate: string;
  iron: string;
  omg3: string;
  zinc: string;
  alopecia: string;
  premature_gray: string;
  psoriasis: string;
  dry_skin: string;
  insomnia: string;
  premature_menopause: string;
  minoxidil: string;
  finasteride: string;
  dutasteride: string;
}

export interface VitaminNeeded {
  vit_a: string;
  vit_c: string;
  vit_d: string;
  vit_e: string;
  biotin: string;
  folate: string;
  iron: string;
  omg3: string;
  zinc: string;
}

export interface HairRisk {
  alopecia: string;
  premature_gray: string;
  psoriasis: string;
  dry_skin: string;
  insomnia: string;
  premature_menopause: string;
}

export interface ResponseToMedicine {
  minoxidil: string;
  finasteride: string;
  dutasteride: string;
}

export interface Recommended {
  category: string;
  code: string;
  high: string;
  low: string;
  low_rec: string;
  med: string;
  medhigh_rec: string;
  number: string;
  property: string;
  trait: string;
}

export interface Info {
  gfs_code: string;
  text_thai: string;
}

export interface InputData {
  code: string;
  "interpret.3scale": string;
}
