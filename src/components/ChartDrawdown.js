import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Chart as ChartJS, LineElement, Tooltip, Legend } from "chart.js"
import { registerables } from "chart.js/auto"

ChartJS.register(...registerables, LineElement, Tooltip, Legend)

const Chart = ({ points, trades }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!Array.isArray(points) || points.length === 0) {
      console.error("Invalid points data:", points)
      return
    }

    // Use the provided points data directly without accumulating
    const drawdownData = [0, ...points]
    // Adjust trades array to align with the number of data points
    const tradesArray = Array.from({ length: drawdownData.length }, (_, i) =>
      i.toString()
    )
    const ctx = chartRef.current.getContext("2d")

    const gradient = ctx.createLinearGradient(0, 0, 0, 400) // Adjust the gradient dimensions as needed
    gradient.addColorStop(0, "rgba(139, 198, 236, 1)") // Start color
    gradient.addColorStop(0.98, "rgba(149, 153, 226, 1)") // Middle color
    gradient.addColorStop(0.99, "rgba(255, 255, 255, 1)") // End color

    const config = {
      type: "line",
      options: {
        plugins: {
          legend: {
            display: false, // This will hide the legend
          },
          title: {
            display: true,
            text: "Max. Drawdown",
            color: "black", // Set the color of the title
            font: {
              size: 15, // You can adjust the size or other font properties
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Turns off the grid lines for the x-axis
            },
            ticks: {
              color: "black", // Change x-axis labels to black
            },
            title: {
              display: false,
              text: "",
            },
          },
          y: {
            grid: {
              display: false, // Turns off the grid lines for the x-axis
            },
            ticks: {
              color: "black", // Change x-axis labels to black
            },
            title: {
              display: true,
              text: "",
            },
          },
        },
      },
      data: {
        labels: tradesArray.map((_, i) => i.toString()),
        datasets: [
          {
            // label: " ",
            fill: false,
            backgroundColor: gradient,
            borderColor: gradient,
            data: drawdownData,
          },
        ],
      },
    }

    if (window.myLine) {
      window.myLine.destroy()
    }

    window.myLine = new ChartJS(ctx, config)

    return () => {
      if (window.myLine) {
        window.myLine.destroy()
      }
    }
  }, [points, trades])

  return (
    <div>
      <canvas
        ref={chartRef}
        id="canvas"
        style={{ height: "250px", width: "100%" }}
      />
    </div>
  )
}

const AppContainer = styled.div`
  width: 100%; // Make the width flexible
  padding-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding-bottom: 20px;
    padding: 20px 50px 20px; // Combine padding rules for brevity
  }

  @media (max-width: 890px) {
    padding: 30px 10px 20px;
  }

  // Adjust this media query as well, if needed
  @media (max-width: 420px) {
    padding-bottom: 10px;
    margin-bottom: 0px;
  }
`

const ChartDrawdown = ({ maxDrawdown, trades }) => {
  return (
    <AppContainer>
      <Chart points={maxDrawdown} trades={trades} />
    </AppContainer>
  )
}

export default ChartDrawdown
