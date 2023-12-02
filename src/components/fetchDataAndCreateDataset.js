const fetchDataAndCreateDataset = async () => {
  const endpoint = process.env.GATSBY_CONTENTFUL_SPACE_ID
  const apiKey = process.env.GATSBY_CONTENTFUL_DELIVERY_TOKEN

  const query = `
      query MyQuery {
        contentfulCornfieldPages(resultPoints: {}) {
          resultPoints
          tradeNumber
        }
      }
    `

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error("Failed to fetch Contentful data")
    }

    const data = await response.json()
    console.log("Fetched Data:", data) // Log the fetched data

    // Process the data and create a dataset
    const dataset = data.data.contentfulCornfieldPages.map(
      ({ resultPoints, tradeNumber }) => {
        return {
          resultPoints: resultPoints,
          tradeNumber: tradeNumber,
          // Add more fields as needed
        }
      }
    )

    return dataset
  } catch (error) {
    console.error("Error fetching Contentful data:", error)
    return null
  }
}

export default fetchDataAndCreateDataset
