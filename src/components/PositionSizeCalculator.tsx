import React, { useEffect } from "react"

const PositionSizeCalculator = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.src =
      "https://www.cashbackforex.com/Content/remote/remote-widgets.js"
    script.async = true

    // Function to initialize the widget after the script is loaded
    script.onload = () => {
      if ((window as any).RemoteCalc) {
        ;(window as any).RemoteCalc({
          Url: "https://www.cashbackforex.com",
          TopPaneStyle:
            "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzNDM1NDAgMCUsICMyNDI4MzEgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWJvdHRvbTogbm9uZTs=",
          BottomPaneStyle:
            "YmFja2dyb3VuZDogIzE1MTgxZDsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7",
          ButtonStyle:
            "YmFja2dyb3VuZDogIzM0MzU0MDsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==",
          TitleStyle:
            "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
          TextboxStyle:
            "YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7",
          ContainerWidth: "665",
          DefaultInstrument: "[TecDE30]",
          HighlightColor: "rgba(0,0,0,1.0)",
          IsDisplayTitle: false,
          IsShowChartLinks: true,
          IsShowEmbedButton: true,
          CompactType: "large",
          Calculator: "position-size-calculator",
          ContainerId: "position-size-calculator-711681",
        })
      }
    }

    // Append script to body
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div id="position-size-calculator-711681" />
}

export default PositionSizeCalculator
