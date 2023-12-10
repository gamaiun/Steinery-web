// import { useStaticQuery } from "gatsby"
import "../components/layout.css"
import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import Footer from "../components/footer"
import LayoutTable from "../components/layoutable"
import Layout from "../components/layout"
// import Plan from "../components/plan"

export const query = graphql`
  query MyQuery {
    allPlanCsv {
      nodes {
        Balance
        Earnings
        Reinvest__100__
        Total_Earnings
        Week_end
        Withdrawal
        id
      }
    }
  }
`
const MyTable = ({ data }) => {
  const orderNodes = data.allPlanCsv.nodes

  return (
    <LayoutTable>
      <table>
        <thead>
          <tr>
            <th>Balance</th>
            <th>Earnings</th>
            <th>Reinvest</th>
            <th>Total_Earnings</th>
            <th>Week_end</th>
            <th>Loosing</th> {/* Ensure this field exists in your data */}
          </tr>
        </thead>
        <tbody>
          {orderNodes.map(node => (
            <tr key={node.id}>
              <td>{node.Balance}</td>
              <td>{node.Earnings}</td>
              <td>{node.Reinvest__100__}</td>
              <td>{node.Total_Earnings}</td>
              <td>{node.Week_end}</td>
              <td>{node.Withdrawal}</td>{" "}
              {/* Assuming Withdrawal is 'Loosing Trades' */}
            </tr>
          ))}
        </tbody>
      </table>
    </LayoutTable>
  )
}
const Planspage = ({ data }) => {
  return (
    <Layout>
      <Seo title="100 Trades Challenge" />
      <Wrapper>
        <HeroWrapper>
          <Text>
            <Title>Plan</Title>
            <MyTable data={data} /> {/* Pass the data prop to MyTable */}
            <br></br>
          </Text>
        </HeroWrapper>
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export default Planspage

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #6494e9 30.57%, #ffffff 90.38%);
`

const Title = styled.h1`
  text-align: center;
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 62px;
  color: #e9e99f;
  mix-blend-mode: normal;
  @media (max-width: 780px) {
    max-width: 500px;
    font-size: 20px;
    font-weight: bold;
  }
`

const Text = styled.h5`
  max-width: 500px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #011367;
  mix-blend-mode: normal;
  text-align: justify;
  @media (max-width: 780px) {
    max-width: 300px;
    font-size: 15px;
  }
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px 1;
  gap: 60px;
  padding: 135px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 0px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
// const AboutLayout = ({ children }) => {
//   return (
//     <>
//       <main>{children}</main>
//     </>
//   )
// }
