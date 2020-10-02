import React from "react"
import NightMode from "./NightMode"

const NightModeWrapper = ({ children }) => (
  <div>
    {children}
    <NightMode />
  </div>
)

export default NightModeWrapper
