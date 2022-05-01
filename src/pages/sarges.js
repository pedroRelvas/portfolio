import * as React from "react"
import "@popperjs/core/dist/umd/popper.min"
//import "bootstrap/dist/css/bootstrap.min.css"
//import "/css/main.min.css"
import "bootstrap/dist/js/bootstrap.min"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import Layout from '../components/Layout'
import ItBrokeMe from '../images/sarges/itBrokeMe.png';
import PortoCha from '../images/sarges/portoCha.png';
import Soldi from '../images/sarges/soldi.png';
import Wescz from '../images/sarges/wescz.png';
import SargesLogo from '../images/sarges/logo.svg';

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Noto Sans, sans-serif"
  //fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const briefCase = {
  fontFamily: "Work Sans, sans-serif",
  fontSize: 30,
  fontWeight: 500,
  paddingRight: 75
}

// markup
const SargesPage = () => {
  return (
  <>
    <div className="bg-primary">
      <Layout>
        <div className="container mt-3 mt-md-4" style={pageStyles}>
          <section>
                  <img src={SargesLogo} width="150" alt="Sarges Logo"/>
                  <p className="pt-4 pb-3" style={briefCase}>
                      The MpDS app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, 
                      through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.
                  </p>
            </section>
          <section className="row">
            <div className="col-12 col-md-6 col-lg-3">  
              <img src={PortoCha} className="img-fluid" alt="Mpds Wounds Logo"/>
              <iframe width="100%" height="135" className="mt-2" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1274570797&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </div>
            <div className="col-12 col-md-6 col-lg-3">  
              <img src={Wescz} className="img-fluid"  alt="Mpds Wounds Logo"/>
              <iframe width="100%" height="135" className="mt-2" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1049697826&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
            <div className="col-12 col-md-6 col-lg-3">  
              <img src={ItBrokeMe} className="img-fluid" alt="Mpds Wounds Logo"/>
              <iframe width="100%" height="135" className="mt-2" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1075024516&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
            <div className="col-12 col-md-6 col-lg-3">  
              <img src={Soldi} className="img-fluid"  alt="Mpds Wounds Logo"/>
              <iframe width="100%" height="135" className="mt-2" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1088778952&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </section>
          </div>
      </Layout>
    </div>
    </>
  )
}

export default SargesPage
