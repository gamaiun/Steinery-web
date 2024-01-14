import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Chart as ChartJS, LineElement, Tooltip, Legend } from "chart.js"
import { registerables } from "chart.js/auto"
ChartJS.register(...registerables, LineElement, Tooltip, Legend)

const Chart = ({ points, trades }) => {
  const chartRef = useRef(null)
  let myChart = useRef(null)

  useEffect(() => {
    // Ensure that points is an array
    if (!Array.isArray(points) || points.length === 0) {
      console.error("Invalid points data:", points)
      return
    }

    // Initialize the cumulative sum with the starting point at y = 500
    let cumulativeSum = 500
    const cumulativeSumData = [500] // Start with the initial value of 500

    // Accumulate values from points starting from the first point
    points.forEach(point => {
      cumulativeSum += point
      cumulativeSumData.push(cumulativeSum)
    })

    // Adjust trades array to align with the number of data points
    const tradesArray = Array.from(
      { length: cumulativeSumData.length },
      (_, i) => i.toString()
    )

    const windowColors = {
      blue: "rgba(75, 192, 192, 1)",
      red: "rgba(255, 99, 132, 1)",
      velvet: {
        gradient: ["rgba(183, 33, 255,0.25)"],
      },
    }

    const config = {
      type: "line",
      options: {
        plugins: {
          legend: {
            display: false, // This will hide the legend
          },
          title: {
            display: true,
            text: "100 Trades",
            color: "white", // Set the color of the title
            font: {
              size: 20, // You can adjust the size or other font properties
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "black", // Change x-axis labels to black
            },
            title: {
              display: true,
              text: "Trades",
              color: "black",
            },
          },
          y: {
            ticks: {
              color: "black", // Change x-axis labels to black
            },
            title: {
              display: true,
              text: "Points",
              color: "black",
            },
          },
        },
      },
      data: {
        // labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        labels: tradesArray.map((_, i) => i.toString()),

        datasets: [
          {
            label: "MY CURRENT POSITION",
            fill: true,
            backgroundColor: windowColors.velvet.gradient,
            borderColor: windowColors.blue,
            data: cumulativeSumData,
          },
        ],
      },
    }

    const ctx = chartRef.current.getContext("2d")

    // Destroy existing chart instance if it exists
    if (myChart.current) {
      myChart.current.destroy()
    }

    // Create a new chart instance
    myChart.current = new ChartJS(ctx, config)

    // Cleanup function to destroy chart instance when component unmounts or data changes
    return () => {
      if (myChart.current) {
        myChart.current.destroy()
      }
    }
  }, [points, trades])

  return (
    <div>
      <canvas ref={chartRef} id="canvas" />
    </div>
  )
}

/* width: 1200px;
  height: 100px;
  margin-bottom: 500px;
  grid-column: span 2;
  padding-right: 60px;
` */
const AppContainer = styled.div`
  width: 1200px;
  padding-bottom: 80px;
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

const App = ({ points, trades }) => {
  return (
    <AppContainer>
      <Chart points={points} trades={trades} />
    </AppContainer>
  )
}

export default App
