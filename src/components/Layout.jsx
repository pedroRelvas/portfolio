import * as React from "react"
import { Box } from "@mui/material"
import Footer from "./Footer"
import theme from '../../themes/mui-theme'

const Layout = ({children}) => {
  return (
    <Box sx={{
      /* background: "url(/bg-rising-planet.png)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', */
      bgcolor: theme.palette.primary.main }}>
      {children}
      <Footer></Footer>
    </Box>
  )
}

export default Layout