import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/MpdsWoundsPreview.svg';
import MpdsWebPreview from '../images/MpdsWebPreview.svg';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.svg';
import PrismaProduzEsocialPreview from '../images/PrismaProduzEsocialPreview.svg';
import Sarges from '../images/sargesPreview.svg';
import Layout from '../components/Layout'

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
            <h2 style={headingStyles} className="px-2 pb-4 pt-2 py-md-4">Olá! My name is Pedro Baltazar Relvas! Whether serving as a UI designer or 
            UI developer, my goal is to create an end product that brings efficiency and work meaning to the user. 
            Mostly experienced in the healthcare niche, I enjoy collaborate with a cross-functional team who strives 
            for a simple aesthetic solution, usability, and continuity. &#128241; &#x1F4BB; &#x2728; </h2>
            <div className="container">
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
