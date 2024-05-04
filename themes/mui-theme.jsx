import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      projectTitleHeader: { 
          fontSize: 40,
          color: '#fff',
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 500,
          textTransform: 'uppercase'
        },
      projectInfoHeader: { 
        fontSize: 28,
        color: '#0D6EFD',
        fontFamily: "Work Sans, sans-serif",
        textTransform: 'uppercase'
      },
      stepTitleHeader: {
        fontSize: 24,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
      },
      stepTitleHeader: {
        fontSize: 22,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
      },
      stepText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 600,
        fontFamily: "Work Sans, sans-serif"
      },
      miniTitle: {
        fontSize: 20,
        fontWeight: 700,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        lineHeight: 1.5,
        letterSpacing: '-.018em'
      },
      regularText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        lineHeight: 1.5,
        fontWeight: 400,
        letterSpacing: '-.018em'
      },
      cardCompanyHeader:{
        fontFamily: "Work Sans, sans-serif", 
        letterSpacing: '.1em',
        color: "#0d6efd"
      },
      cardProjectTitle:{
        fontFamily: "'Noto Sans', sans-serif", 
        letterSpacing: '.1em'
      },
      subjectText:{
        fontFamily: "'Noto Sans', sans-serif", 
        fontWeight: 400, 
        fontSize: 10,
        opacity: .7
      },
      // Disable h3 variant
      h3: undefined,
    },
    palette: {
        primary: {
            main: '#111E56',
            light: '#283982',
            dark: '#1A2241',
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#E0C2FF',
            light: '#F5EBFF',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#47008F',
        },
        action: {
            main: '#FFFFFF',
        }
    }
  });

  export default theme;