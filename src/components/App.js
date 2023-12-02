// import React, { useEffect, useRef } from "react"
// import styled from "styled-components"
// import { Chart as ChartJS, LineElement, Tooltip, Legend } from "chart.js"
// import { Line } from "react-chartjs-2"
// import { registerables } from "chart.js/auto"
// import fetchDataAndCreateDataset from "./fetchDataAndCreateDataset"
// ChartJS.register(...registerables, LineElement, Tooltip, Legend)

// const Chart = () => {
//   const chartRef = useRef(null)

//   useEffect(() => {
//     const originalData = [
//       2048, 258, -194, 290, 56, 348, 70, 125, -79, 600, 70, 222,
//     ]
//     const cumulativeSumData = originalData.reduce((acc, value, index) => {
//       acc.push(index === 0 ? value : value + acc[index - 1])
//       return acc
//     }, [])

//     const windowColors = {
//       blue: "rgba(75, 192, 192, 1)",
//       red: "rgba(255, 99, 132, 1)",
//       velvet: {
//         gradient: ["rgba(107, 47, 86, 0.5)", "rgba(107, 47, 86, 1)"],
//       },
//     }

//     const config = {
//       type: "line",
//       options: {
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: "Trades",
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: "Points",
//             },
//           },
//         },
//         plugins: {
//           title: {
//             display: false, // Set display to false to hide the main chart title
//           },
//         },
//         tooltips: {
//           mode: "nearest",
//           intersect: false,
//           responsive: true,
//         },
//         hover: {
//           mode: "nearest",
//           intersect: false,
//         },
//         onHover: function onHover(evt, activeElements) {
//           if (!activeElements || !activeElements.length) return
//           var datasetIndex = activeElements[0]._datasetIndex
//           var activeDataset = this.data.datasets[datasetIndex]
//           // activeDataset.borderWidth = 5;
//           this.update()
//         },
//       },
//       data: {
//         labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
//         datasets: [
//           {
//             label: "MY CURRENT POSITION", // Set an empty string or a space
//             fill: true,
//             backgroundColor: windowColors.velvet.gradient,
//             borderColor: windowColors.blue,
//             data: cumulativeSumData,
//           },
//         ],
//       },
//     }

//     const ctx = chartRef.current.getContext("2d")
//     window.myLine = new ChartJS(ctx, config)

//     return () => {
//       window.myLine.destroy()
//     }
//   }, []) // Empty dependency array means this effect will run once after the initial render

//   return (
//     <div>
//       <canvas ref={chartRef} id="canvas" />
//     </div>
//   )
// }

// const AppContainer = styled.div`
//   width: 1200px;
//   height: 100px;
//   margin-bottom: 550px;
//   grid-column: span 2;
//   padding-right: 60px;
// `

// const App = () => {
//   return (
//     <AppContainer>
//       <Chart />
//     </AppContainer>
//   )
// }

// export default App

import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Chart as ChartJS, LineElement, Tooltip, Legend } from "chart.js"
// import { Line } from "react-chartjs-2"
import { registerables } from "chart.js/auto"

ChartJS.register(...registerables, LineElement, Tooltip, Legend)

const Chart = ({ points, trades }) => {
  const chartRef = useRef(null)
  // const tradesArray = Array.isArray(trades) ? trades : []

  useEffect(() => {
    // Ensure that points is an array
    const cumulativeSumData = points?.reduce((acc, value, index) => {
      const cumulativeValue =
        index === 0 ? value + 2048 : value + acc[index - 1]
      acc.push(cumulativeValue)
      return acc
    }, [])

    if (!cumulativeSumData) {
      console.error("Invalid points data:", points)
      return
    }
    // Ensure that trades is an array
    const tradesArray = Array.isArray(trades) ? trades : []

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
        scales: {
          x: {
            title: {
              display: true,
              text: "Trades",
            },
          },
          y: {
            title: {
              display: true,
              text: "Points",
            },
          },
        },
        // plugins: {
        //   title: {
        //     display: false,
        //   },
        // },
        // tooltips: {
        //   mode: "nearest",
        //   intersect: false,
        //   responsive: true,
        // },
        // hover: {
        //   mode: "nearest",
        //   intersect: false,
        // },
        // onHover: function onHover(evt, activeElements) {
        //   if (!activeElements || !activeElements.length) return
        //   var datasetIndex = activeElements[0]._datasetIndex
        //   var activeDataset = this.data.datasets[datasetIndex]
        //   this.update()
        // },
      },
      data: {
        // labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        labels: tradesArray.map((_, i) => (i + 1).toString()), // Start labels with 1

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
    window.myLine = new ChartJS(ctx, config)

    return () => {
      window.myLine.destroy()
    }
  }, [points, trades]) // Re-run the effect whenever points or trades change

  return (
    <div>
      <canvas ref={chartRef} id="canvas" />
    </div>
  )
}

const AppContainer = styled.div`
  width: 1200px;
  height: 100px;
  margin-bottom: 500px;
  grid-column: span 2;
  padding-right: 60px;
`

const App = ({ points, trades }) => {
  return (
    <AppContainer>
      <Chart points={points} trades={trades} />
    </AppContainer>
  )
}

export default App
