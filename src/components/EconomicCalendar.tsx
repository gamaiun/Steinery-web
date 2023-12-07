import React, { useEffect } from "react"

const EconomicCalendar: React.FC = () => {
  useEffect(() => {
    // Check if document is defined (for Gatsby server-side rendering)
    if (typeof document !== "undefined") {
      // Dynamically load the TradingView script
      const script = document.createElement("script")
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-events.js"
      script.async = true
      script.innerHTML = JSON.stringify({
        width: "610",
        height: "900",
        colorTheme: "dark",
        isTransparent: false,
        locale: "en",
        importanceFilter: "-1,0,1",
        countryFilter: "us,eu,de,gb",
      })

      // Append the script to a specific div within the component
      const scriptContainer = document.querySelector(
        ".tradingview-widget-container__widget"
      )
      if (scriptContainer) {
        scriptContainer.appendChild(script)
      }

      // Cleanup function to remove the script
      return () => {
        if (scriptContainer) {
          scriptContainer.removeChild(script)
        }
      }
    }
  }, [])

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track markets on TradingView</span>
        </a>
      </div>
    </div>
  )
}

export default EconomicCalendar
