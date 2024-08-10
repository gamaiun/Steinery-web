import React, { useEffect, useState } from "react"
import { csv } from "d3-fetch"
import MyChart from "./MyChart"
import styled from "@emotion/styled"
//import KPIChart from "/KPIChart"
const ChartContent = () => {
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
      {/* <ChartContent points={points} trades={trades} /> */}
    </AppContainer>
  )
}

export default App
