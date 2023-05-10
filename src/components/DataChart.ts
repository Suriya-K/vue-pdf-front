export const data = {
  labels: ["hello", "o", "suck"] as string[],
  datasets: [
    {
      label: "",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
};
