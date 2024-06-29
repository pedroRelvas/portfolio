import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import { ThemeProvider, Typography, Stack, Box} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import theme from '../../themes/mui-theme'
import ProjectHeader from '../components/ProjectHeader';
import ProjectSection from '../components/ProjectSection';
import mpdsAndroidFinalSection from '../images/mpdsAndroidProject/mpdsAndroidFinal.svg';
import login from '../images/mpdsWeb/login.png';
import fourScreens from '../images/mpdsWeb/4screens.png';
import site from '../images/mpdsWeb/site.png';
import api from '../images/mpdsWeb/api.svg';
import security from '../images/mpdsWeb/security.svg';
import downloadTheApp from '../images/mpdsAndroidProject/downloadTheApp.svg';

// markup
const MpdsWeb = () => {
  return (
  <>
    <ThemeProvider theme={theme}>
      <LayoutProject
          header={
              <ProjectHeader
                  projectTitle='Mpds Web' 
                  entities='F3M' 
                  year='2018 - 2019'
              ></ProjectHeader>
          }
          firstProjectStep={
          <>
            <ProjectSection topic="The Beginning">
              <Typography variant="pRegularText" component='p'>
                  MPDS Web allows user to easily manage and access the status of all the processes of each patient and it is connected to Mpds Wounds. As a sequel for the mobile app, Mpds Web was born to be a "plus extension" of patient's management. Created for the web, React.JS was my main tool to replicate what the prototype brought. The journey beginned in 2018.
              </Typography>

              <Box textAlign='center'>
                  <img width="850" src={mpdsAndroidFinalSection} alt="Mpds To the Moon Illustration"/>
              </Box>

              
              <Box textAlign='center'>
                <img src={login} alt="Login UI"/>
              </Box>

              <Typography variant="pRegularText" component='p'>
                UI oriented, I took advantage of the top libraries in the "Web Dev Scene" to build all the prototype components and to make sure the responsive aspect of the app perform in all the major devices. Thinking of cross-browser support and scability, the UI tests were also a weighty objective.
              </Typography>

              <Box textAlign='center'>
                    <img src={fourScreens} alt="UI MPDS Web"/>
              </Box>

              <Box textAlign='center'>
                <img src={api} alt="API Illustration"/>
              </Box>


              <Box textAlign='center'>
                <img src={security} alt="Security Illustration"/>
              </Box>

           <Typography variant="pRegularText" component='p'>
              It was a great experience for the "Dev" Team to bring to life a brotherhood of apps, both developed in such different tech environments.
              Later, I was back to collaborate with the Marketing team to define and design the identity of the product: now limited to logo, illustrations and landing page. 
            </Typography>

            <Box textAlign='center'>
            <img src={site} alt="Site UI"/>
            </Box>

            <Box textAlign='center'>
              <img src={downloadTheApp} alt="Download App Illustration"/>
            </Box>


              <div  className="position-absolute" style={{right: 150, top: 120, }}>
                <a href="https://mpds.f3m.pt/en/mpds-web-en/">
                
                </a>
              </div>
      

</ProjectSection>
</>
          }
      />
    </ThemeProvider>
  </> )}

export default MpdsWeb









/* import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import mpdsAndroidFinalSection from '../images/mpdsAndroidProject/mpdsAndroidFinal.svg';
import spaceBackground from '../images/mpdsWeb/spaceBackground.png';
import login from '../images/mpdsWeb/login.png';
import fourScreens from '../images/mpdsWeb/4screens.png';
import mpdsLogo from '../images/mpdsWeb/mpdsLogo.svg';
import f3mLogo from '../images/techsIcons/f3m.svg';
import site from '../images/mpdsWeb/site.png';
import api from '../images/mpdsWeb/api.svg';
import security from '../images/mpdsWeb/security.svg';
import downloadTheApp from '../images/mpdsAndroidProject/downloadTheApp.svg';
import MajorButton from '../components/MajorButton';
import Layout from '../components/Layout';
import Container from '@mui/material/Container';
*/
