import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/MpdsWoundsPreview.svg';
import MpdsWebPreview from '../images/MpdsWebPreview.svg';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.svg';
import PrismaProduzEsocialPreview from '../images/PrismaProduzEsocialPreview.svg';
import Sarges from '../images/sargesPreview.svg';
import Layout from '../components/Layout';
import Ai from '../images/techsIcons/ai.svg';
import Affinity from '../images/techsIcons/affinity.svg';
import CSS from '../images/techsIcons/css3.svg';
import HTML from '../images/techsIcons/html5.svg';
import JS from '../images/techsIcons/js.svg';
import Bootstrap from '../images/techsIcons/bootstrap.svg';
import Figma from '../images/techsIcons/figma.svg';
import Git from '../images/techsIcons/git.svg';
import Kotlin from '../images/techsIcons/Kotlin.svg';
import Material from '../images/techsIcons/materialui.svg';
import Ps from '../images/techsIcons/ps.svg';
import ReactIcon from '../images/techsIcons/react.svg';
import Sass from '../images/techsIcons/sass.svg';
import Uxpin from '../images/techsIcons/uxpin.svg'
import Storybook from '../images/techsIcons/storybook.svg';
import Chromatic from '../images/techsIcons/chromatic.svg'
import Tooltip from '@mui/material/Tooltip';

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Noto Sans, sans-serif"
  //fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  fontFamily: "Work Sans, sans-serif",
  fontWeight: 500,
  fontSize: 24
}
const subHeadingStyles = {
  fontFamily: "Work Sans, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  paddingTop: 30,
  paddingBottom: 15
}

const linkStyle = {
  background: "#3D3B9D",
  paddingLeft: 16,
  fontFamily: "Work Sans, sans-serif",
  fontWeight: 600,
  fontSize: 16
}


// markup
const IndexPage = () => {
  return (
  <>
    <div className="bg-primary">
     
      <Layout>
        <div className="container mt-3 mt-md-4">
          <main style={pageStyles}>
            <h2 style={headingStyles} className="px-2 pb-3 pt-2">Olá! My name is Pedro Baltazar Relvas! Whether serving as a UI designer or 
            UI developer, my goal is to create an end product that brings efficiency and work meaning to the user. 
            Mostly experienced in the healthcare niche, I enjoy collaborate with a cross-functional team who strives 
            for a simple aesthetic solution, usability, and continuity. &#128241; &#x1F4BB; &#x2728; </h2>

            <h5 style={subHeadingStyles} className="px-2 text-center pt-0 ">Designing and coding with:</h5>
        
          <div class="d-flex justify-content-center flex-wrap">
            <Tooltip title="Kotlin" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={Kotlin} className="px-2"/></div> 
            </Tooltip>
            <Tooltip title="HTML 5" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={HTML} className="px-2"/> </div> 
            </Tooltip>
            
            <Tooltip title="CSS 3" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={CSS} className="px-2"/> </div> 
            </Tooltip>
            
            <Tooltip title="Javascript" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={JS} className="px-2"/> </div> 
            </Tooltip>
            
            <Tooltip title="React.JS" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={ReactIcon} className="px-2"/> </div> 
            </Tooltip>
            
            <Tooltip title="Bootstrap" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={Bootstrap} className="px-2" /></div>  
            </Tooltip>
            
            <Tooltip title="Sass" arrow placement="top">
              <div className="my-auto pb-2"><img width="50" src={Sass} className="px-2" /></div>  
            </Tooltip>
            
            <Tooltip title="Material" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={Material} className="px-2" /></div>  
            </Tooltip>
            
            <Tooltip title="Git" arrow  placement="top">
              <div className="my-auto pb-2"><img width="50" src={Git} className="px-2" /></div>
            </Tooltip>
            
            <Tooltip title="Storybook" arrow  placement="top">
              <div className="my-auto pb-2"><img height="34" src={Storybook} className="px-2" /></div>  
            </Tooltip>
            
            <Tooltip title="Chromatic" arrow  placement="top">
            <div className="my-auto pb-2" ><img width="50" src={Chromatic} className="px-2" /></div>
            </Tooltip>
          </div>

          <div class="d-flex justify-content-center mt-3">
            <Tooltip title="Figma" arrow  placement="top">
              <div className="my-auto"><img height="34" className="px-2" src={Figma} /> </div> 
            </Tooltip>
            <Tooltip title="UXPin" arrow  placement="top">
            <div className="my-auto"><img width="50" className="px-2" src={Uxpin} /> </div> 
            </Tooltip>
            <Tooltip title="Adobe AI" arrow  placement="top">
            <div className="my-auto"><img width="50" className="px-2" src={Ai} /></div>  
            </Tooltip>
            <Tooltip title="Adobe PS" arrow  placement="top">
            <div className="my-auto"><img width="50" className="px-2" src={Ps} /></div>  
            </Tooltip>
            <Tooltip title="Affinity" arrow  placement="top">
            <div className="my-auto"><img width="50" className="px-2" src={Affinity} /> </div> 
            </Tooltip>
          </div>

            <div className="container mt-5">
              <div className="row">
              <div className="col-12 col-md-9">
                <div className="row">
                  <div className="col-12">
                      <div className="position-relative">
                        <a href="./mpdsWounds" class="stretched-link d-block py-2" style={linkStyle}>MpDS Wounds</a>
                        <img src={MpdsWoundsPreview} alt="Mpds Wounds Preview"/>
                      </div>
                    </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <div className="position-relative">
                          <a href="./prismaEsocialProduz" class="stretched-link d-block py-2" style={linkStyle}>Prisma, Produz and Esocial</a>
                          <img src={PrismaProduzEsocialPreview} alt="Prisma Produz Esocial Preview"/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="position-relative">
                          <a href="./sarges" class="stretched-link d-block py-2" style={linkStyle}>Sarges</a>
                          <img src={Sarges} alt="Sarges Preview"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-12 col-md-3 mt-3 mt-md-0">
                  <div className="position-relative">
                    <a href="./mpdsWeb"  class="stretched-link d-block py-2" style={linkStyle}>MpDS Web</a>
                    <img src={MpdsWebPreview} className="d-none d-md-block" alt="Mpds Web Preview"/>
                    <img src={SmMpdsWebPreview} className="d-md-none" alt="Mpds Web Preview"/>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        
        
        </Layout>
        
      </div>
    </>
  )
}

export default IndexPage
