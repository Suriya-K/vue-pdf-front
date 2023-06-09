interface DcvHealth {
  code: string
  category: string
  group: string
  risk_disease: string
  important: number
  urgent: number
  disease_score: number
  supplement: string
  intro: string
  checkup: string
  risk_reduction: string
  sex_exclude: string
}

interface DcvHealthLists {
  sample?: Input
  health_lists?: DcvHealth[]
}

interface Input {
  sample_number: string
  sex: string
  sample_perc: number
}


  interface GroupNameList {
    name: string;
    score: string;
    checkup: string;
    risk_reduction: string;
    supplement: string;
}
  