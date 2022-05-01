import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/MpdsWoundsPreview.svg';
import MpdsWebPreview from '../images/MpdsWebPreview.svg';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.svg';
import PrismaProduzEsocialPreview from '../images/PrismaProduzEsocialPreview.svg';
import Sarges from '../images/sargesPreview.svg';
import HTML5Logo from '../images/techsIcons/html5.svg';
import CSS3Logo from '../images/techsIcons/css3.svg';
import JSLogo from '../images/techsIcons/js.svg';
import KotlinLogo from '../images/techsIcons/kotlin.svg';
import GitLogo from '../images/techsIcons/git.svg';
import SassLogo from '../images/techsIcons/sass.svg';
import Layout from '../components/Layout'

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Noto Sans, sans-serif"
  //fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  fontFamily: "Work Sans, sans-serif",
  fontWeight: 500
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
            <h2 style={headingStyles} className="px-2 pb-4 pt-2 py-md-4">Pedro Baltazar Relvas 
            is a designer that codes and a developer that designs. Currently based in Braga and 
            developing health apps at F3M. 🎉🎉🎉</h2>
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
                          <a href="./prismaEsocialProduz" class="stretched-link d-block py-2" style={linkStyle}>MpDS Web</a>
                          <img src={PrismaProduzEsocialPreview} alt="Prisma Produz Esocial Preview"/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="position-relative">
                          <a href="./sarges" class="stretched-link d-block py-2" style={linkStyle}>MpDS Web</a>
                          <img src={Sarges} alt="Prisma Produz Esocial Preview"/>
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
          {/*  <div className="container-fluid g-0" style={sectionStyles}>
              <div className="container">
                <section className="px-4 pt-4 mt-5">
                <h3>My homeboys:</h3>
                  <div class="d-flex bd-highlight">
                      <div class="flex-fill bd-highlight">
                        <h5>Languages extensions</h5>
                          <img src={HTML5Logo} width="25" alt="HTML5"/>
                          <img src={CSS3Logo} width="25" alt="CSS3"/>
                          <img src={JSLogo} width="25" alt="Javascript"/>
                          <img src={KotlinLogo} width="25" alt="Kotlin"/>
                          <img src={GitLogo} width="25" alt="Git"/>
                          <img src={SassLogo} width="25" alt="Sass"/>
                      </div>
                      <div class="flex-fill bd-highlight">
                        <h5>Languages extensions</h5>
                        <img src={KotlinLogo} width="25" alt="Kotlin"/>
                          <img src={GitLogo} width="25" alt="Git"/>
                          <img src={SassLogo} width="25" alt="Sass"/>
                      </div>
                      <div class="flex-fill bd-highlight">
                        <h5>Languages extensions</h5>
                      </div>
                  </div>
                </section>
              </div>
          </div> */}
        </Layout>
      </div>
    </>
  )
}

export default IndexPage
