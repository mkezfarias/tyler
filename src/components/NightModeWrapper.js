import React from "react"
import NightMode from "./NightMode"

const NightModeWrapper = ({ children }) => (
  <>
    {children}
    <NightMode />
  </>
)

export default NightModeWrapper
