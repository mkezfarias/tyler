import React, { useState } from "react"

const NightMode = () => {
  const [dayMode, setDayMode] = useState(false)

  const toggleDayNight = () => {
    setDayMode(!dayMode)
  }
  let localStorageDay = window.localStorage.getItem("dayMode")
  return (
    <div className={dayMode ? "day" : "night"}>
      <div
        type="button"
        onClick={() => {
          window.localStorage.setItem("dayMode", !dayMode)
          toggleDayNight()
          console.log(localStorageDay)
        }}
      >
        {localStorageDay ? "Night Mode" : "Day Mode"}
      </div>
    </div>
  )
}

export default NightMode
