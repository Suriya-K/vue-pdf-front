export const data = {
  labels: [
    "Alopecia",
    "Premature Gray",
    "Psoriasis",
    "Dry Skin",
    "Insomnia",
    "Premature Menopause",
  ] as string[],
  datasets: [
    {
      borderColor: "#f2a41f",
      data: [3, 1, 3, 2, 2, 2],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    tooltip: false,
  },
  scales: {
    r: {
      pointLabels: {
        font: {
          size: 12,
        },
      },
      min: 0,
      max: 3,
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        z: 1,
        callback: (value: any) => {
          if(value === 1) {return 'L'};
          if(value === 2) {return 'M'};
          if(value === 3) {return 'H'};
          return ''; 
        },
      },
    },
  },
};
