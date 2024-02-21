import React, { useEffect, useState } from "react"
import { csv } from "d3-fetch"
import MyChart from "../components/MyChart"
import KPIChart from "../components/KPIChart"
const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    dates: [],
    balance: [],
    AvrAbsDevs: [],
    AbsDevFromAvrRet: [],
    //kpi: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const dataUrl =
        "https://raw.githubusercontent.com/gamaiun/Steinery-web/master/TradingPerformance0.2.csv"
      const data = await csv(dataUrl)

      // Process data to extract 'Date' as labels and 'Balance' as numeric data points
      const dates = data.map(d => d.Date)
      const balance = data.map(d => +d.Balance) // Ensure Balance is numeric
      const AvrAbsDevs = data.map(d => +d.AvrAbsDevs)
      const AbsDevFromAvrRet = data.map(d => d.AbsDevFromAvrRet)
      //const kpi = data.map(d => +d.KPi)
      setChartData({ dates, balance, AvrAbsDevs, AbsDevFromAvrRet })
    }

    fetchData()
  }, [])

  // Only render MyChart if there is data
  return chartData.dates.length > 0 ? (
    <>
      <MyChart
        data={chartData.balance}
        labels={chartData.dates}
        datasetLabel="Balance"
      />
      <MyChart
        data={chartData.AvrAbsDevs}
        labels={chartData.dates}
        datasetLabel="Average Absolute Deviation"
      />
      <MyChart
        data={chartData.AbsDevFromAvrRet}
        labels={chartData.dates}
        datasetLabel="Absolute Deviation From Avrage Return"
      />
    </>
  ) : (
    <p>Loading chart...</p>
  )
}

export default ChartComponent
