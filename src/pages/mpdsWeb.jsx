import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
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

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Noto Sans, sans-serif"
  //fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const briefCase = {
  fontFamily: "Work Sans, sans-serif",
  fontSize: 30,
  fontWeight: 500,
  paddingRight: 75
}

const detailsCase = {
  fontFamily: "Work Sans, sans-serif",
  fontSize: 14,
  color: "#5a498f",
  fontWeight: 700
}

const detail = {
  fontSize: 14,
  color: "#5a498f",
  fontWeight: 600
}

// markup
const MpdsWebPage = () => {
  return (
  <>
    <div className="bg-primary">
     
      <Layout>

        <div style={pageStyles} className="container mt-3 mt-md-4 pb-4">
              <section>
                  <img src={mpdsLogo} width="250" alt="Mpds Wounds Logo"/>
                  <p className="pt-4" style={briefCase}>
                      The MpDS app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, 
                      through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.
                  </p>
              </section>

              <section className="pt-4">
                  <div class="d-flex p-2 bd-highlight">
                      <div className="pr-5">
                          <p style={detailsCase}>Company</p>
                          <img src={f3mLogo} width="100" alt="Mpds Wounds Logo"/>
                      </div>
                      <div className="px-5">
                          <p style={detailsCase}>My Role</p>
                          <p style={detail}>Android Development &#128241; Logo Design &#128311; Illustration &#127912; </p>
                      </div>
                  </div>
              </section>

            <section className="pt-3">
                <img src={mpdsAndroidFinalSection} alt="Mpds World Goodbye"/>
            </section>

            <section className="pt-3 row">
                <img src={spaceBackground} alt="Mpds"/>
            </section>

            <section className="pt-3 row">
                <img src={login} alt="Mpds"/>
            </section>

            <section className="pt-3 row">
                <img src={fourScreens} alt="Mpds"/>
            </section>

            <section className="row pt-3">
                <p className="col-6" style={briefCase}>
                  The MpDS app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, 
                  through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.
                </p>
                <div className="col-6" >
                  <img src={api} alt="Mpds"/>
                </div>
              </section>

            <section className="row pt-3">
                <div className="col-6" >
                  <img src={security} alt="Mpds"/>
                </div>
              <p className="col-6" style={briefCase}>
                  The MpDS app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, 
                  through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.
                
              </p>
            </section>

            <section className="pt-3 row">
                <img src={site} alt="Mpds"/>
            </section>

            <section className="row pt-3">
                <div className="position-relative">
                  <img src={downloadTheApp} alt="Mpds World Goodbye"/>
                  <div  className="position-absolute" style={{right: 150, top: 120, }}>
                    <a href="https://mpds.f3m.pt/en/mpds-web-en/">
                    <MajorButton></MajorButton>
                    </a>
                  </div>
                </div>
            </section>
        </div>

      </Layout>
    </div>
    </>
  )
}

export default MpdsWebPage
