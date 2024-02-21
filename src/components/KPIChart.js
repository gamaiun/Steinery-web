import React, { useEffect, useRef } from "react"
import Chart from "chart.js/auto"
import styled from "styled-components"
import { Chart as ChartJS, LineElement, Tooltip, Legend } from "chart.js"
import { registerables } from "chart.js/auto"
ChartJS.register(...registerables, LineElement, Tooltip, Legend)

const MyFirstCSVChart = ({ data, labels, datasetLabel }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    let myChartInstance = null // Variable to keep track of the chart instance

    if (chartRef.current && data.length) {
      const ctx = chartRef.current.getContext("2d")
      const windowColors = {
        blue: "rgba(75, 192, 192, 1)",
        red: "rgba(255, 99, 132, 1)",
        velvet: {
          gradient: ["rgba(183, 33, 255,0.25)"],
        },
      }
      new Chart(ctx, {
        type: "line", // This denotes the type of chart we're creating
        data: {
          labels: labels, // Your x-axis labels (e.g., dates, categories)
          datasets: [
            {
              //label: datasetLabel, // Label for the dataset
              data: data, // Your dataset

              //   borderColor: "rgb(75, 192, 192)",
              tension: 0.1,

              fill: true,
              backgroundColor: windowColors.velvet.gradient,
              borderColor: windowColors.blue,
            },
          ],
        },
        options: {
          maintainAspectRatio: true,

          aspectRatio: 4, // Adjust based on your desired height-to-width ratio
          // other options...

          plugins: {
            legend: {
              display: false, // This will hide the legend
            },
            title: {
              display: true,
              text: datasetLabel, // You can also pass this as a prop if needed
              font: {
                size: 18,
              },
            },
            // Add other options like legend, tooltips here
          },
          // Here, you can define options to customize your chart
          // For example, you might want to add title, adjust scales, etc.
          scales: {
            y: {
              beginAtZero: false, // This ensures that y-axis starts at 0
            },
          },
        },
      })
    }
  }, [data, labels, datasetLabel]) // This effect runs when `data` or `labels` change

  return <canvas ref={chartRef} />
}

const AppContainer = styled.div`
  width: 1200px;
  //  height: width/3;
  padding-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 1000px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-top: 30px;
    margin: 0 auto;
  }

  @media (max-width: 890px) {
    width: 700px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-top: 30px;
    margin: 0 auto;
  }

  @media (max-width: 627px) {
    width: 430px;
    padding-bottom: 20px;
    margin-bottom: 0px;
    padding-left: 0px;
    margin: 0 auto;
  }

  @media (max-width: 420px) {
    width: 350px;
    padding-bottom: 10px;
    margin-bottom: 0px;
    padding-left: 0px;
    margin: 0 auto;
  }
`

const KPIChart = ({ data, labels, datasetLabel }) => {
  return (
    <AppContainer>
      <MyFirstCSVChart
        data={data}
        labels={labels}
        datasetLabel={datasetLabel}
      />
    </AppContainer>
  )
}

export default KPIChart
