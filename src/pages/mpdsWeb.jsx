import * as React from "react"
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
                    MPDS Web allows user to easily manage and access the status of all the processes of each patient. Connected to Mpds Wounds.
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
                          <p style={detail}>React Development &#x1F4BB; Logo Design &#128311; Illustration &#127912; </p>
                      </div>
                  </div>
              </section>

            <section className="pt-3">
                <img src={mpdsAndroidFinalSection} alt="Mpds To the Moon Illustration"/>
            </section>

            <section className="position-relative pt-3 row">
              <p className="position-absolute font-scale px-5" style={{color: "#fff", marginLeft: 'auto',
marginRight: 'auto',
left: 0,
right: 0,
top: '50%',
  transform: 'translateY(-50%)',
textAlign: 'center'}}>
                  As a sequel for the mobile app, Mpds Web was born to be a 
                  "plus extension" of patient's management. Created for the web, React.JS was my main tool to 
                  replicate what the prototype brought. The journey 
                  beginned in 2018.
                </p>
                <img src={spaceBackground} alt="Space Background"/>
                
            </section>

            <section className="pt-3 row">
                <img src={login} alt="Login UI"/>
            </section>

            <section className="pt-3 row">
                <img src={fourScreens} alt="UI MPDS Web"/>
            </section>

            <section className="row pt-3">
                <p className="col-md-7 col-12" style={briefCase}>
                  UI oriented, I took advantage of the top libraries in the "Web Dev Scene" to build all 
                  the prototype components and to make sure the responsive aspect of 
                  the app perform in all the major devices. Thinking of cross-browser 
                  support and scability, the UI tests were also a weighty objective.
                </p>
                <div className="col-md-5 col-12" >
                  <img src={api} alt="API Illustration"/>
                </div>
              </section>

            <section className="row pt-3">
                <div className="col-5" >
                  <img src={security} alt="Security Illustration"/>
                </div>
              <p className="col-7" style={briefCase}>
                It was a great experience for the "Dev" Team to bring to life a brotherhood of apps, both developed in such different tech environments.
                Later, I was back to collaborate with the Marketing team to define and design the identity of the product: now limited to logo, illustrations and landing page. 
              </p>
            </section>

            <section className="pt-3 row">
                <img src={site} alt="Site UI"/>
            </section>

            <section className="row pt-3">
                <div className="position-relative">
                  <img src={downloadTheApp} alt="Download App Illustration"/>
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
