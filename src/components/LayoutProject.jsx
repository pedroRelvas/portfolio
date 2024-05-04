import * as React from "react"
import { Container, Box } from "@mui/material"
import Footer from "./Footer"
import theme from '../../themes/mui-theme'

const LayoutProject = ({header, projectSteps, firstProjectStep, secondProjectStep, thirdProjectStep, fourthProjectStep}) => {
  return (
    <Box component="main" sx={{bgcolor: theme.palette.primary.main }}>
      {header}
      <Box sx={{bgcolor: '#283982' }}>
        <Container disableGutters maxWidth='lg'>
          {projectSteps}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#0B1231' }} py={5}>
        <Container disableGutters maxWidth='lg'>
          {firstProjectStep}
        </Container>
      </Box>
      <Box py={5}>
        <Container disableGutters maxWidth='lg' py={5}>
          {secondProjectStep}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#1E2647' }} py={5}>
        <Container disableGutters maxWidth='lg'>
          {thirdProjectStep}
        </Container>
      </Box>
      <Box py={5}>
        <Container disableGutters maxWidth='lg'>
          {fourthProjectStep}
        </Container>
      </Box>
      <Footer></Footer>
    </Box>
  )
}

export default LayoutProject