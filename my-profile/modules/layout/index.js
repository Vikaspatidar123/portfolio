import Nav from "./Nav"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
    </div>
  )
}

export default Layout
