import * as React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
const Layout = ({children}) => {
  return (
    <>
        <NavBar></NavBar>
        <main style={{height: '100vh'}}>{children}</main>
        <Footer></Footer>
    </>
  )
}

export default Layout