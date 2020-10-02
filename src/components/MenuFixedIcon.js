import React from "react"


const MenuFixedIcon = ({ handleShow, noDisplay }) => {
  return (
    <>
      <div
        onClick={handleShow}
        style={{
          background: `var(--menu-img)`,
          transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
          transition: `0.4s`,
          height: "30px",
          width: "30px",
          zIndex: `300`,
        }}
        className="menu-fixed d-none d-md-block"
      ></div>
    </>
  )
}

export default MenuFixedIcon
