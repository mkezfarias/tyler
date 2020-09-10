import React from "react"

class CalendlyEmbed extends React.Component {
  constructor(props) {
    super(props)
  }
  calendlyScriptSrc = "https://assets.calendly.com/assets/external/widget.js"
  buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}/${eventName}`

  componentDidMount() {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", this.calendlyScriptSrc)
    head.appendChild(script)
  }

  componentWillUnmount() {
    const head = document.querySelector("head")
    const script = document.querySelector("script")
    head.removeChild(script)
  }
  render() {
    const { account, eventName } = this.props
    return (
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url={this.buildCalendlyUrl(account, eventName)}
          style={{
            minWidth: "290px",
            height: "1200px",
            zIndex: `1`,
            paddingBottom: 0,
          }}
        />
      </div>
    )
  }
}

export default CalendlyEmbed
