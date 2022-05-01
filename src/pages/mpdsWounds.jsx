import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import mpdsAndroidFirstSection from '../images/mpdsAndroidProject/mpdsAndroidBegin.svg';
import mpdsWoundsLogo from '../images/techsIcons/mpdsWoundsLogo.svg';
import wifiMachine from '../images/lottie/wifi_machine.json';
import f3mLogo from '../images/techsIcons/f3m.svg';
import fraunhoferLogo from '../images/techsIcons/fraunhoferLogo.svg';
import mpdsWoundsHistoryBackground from '../images/mpdsAndroidProject/history.svg';
import mpdsWoundsPatientList from '../images/mpdsAndroidProject/patientList.png';
import mpdsWoundsScreenShootsApp from '../images/mpdsAndroidProject/screenShootsApp.png';
import downloadTheApp from '../images/mpdsAndroidProject/downloadTheApp.svg';
import cardsEmptyState from '../images/lottie/cards.json';
import lottie from "lottie-web";
import MajorButton from '../components/MajorButton';
import Layout from '../components/Layout';

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Noto Sans, sans-serif"
}

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
const MpdsWoundsPage = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#wifiMachine"),
      animationData: wifiMachine
    });
    lottie.loadAnimation({
      container: document.querySelector("#cardsEmptyState"),
      animationData: cardsEmptyState
    });
  }, []);

  return (
    <>
      <div className="bg-primary">
        <Layout>
          <div style={pageStyles} className="container mt-3 mt-md-4 pb-4">
              <section>
                  <img src={mpdsWoundsLogo} width="250" alt="Mpds Wounds Logo"/>
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
                          <img src={fraunhoferLogo} className="my-md-0 mx-lg-4 mt-3" width="100" alt="Mpds Wounds Logo"/>
                      </div>
                      <div className="px-5">
                          <p style={detailsCase}>My Role</p>
                          <p style={detail}>Android Development &#128241; Logo Design &#128311; Illustration &#127912; </p>
                      </div>
                  </div>
              </section>

              <section className="pt-3">
                  <img src={mpdsAndroidFirstSection} alt="Mpds World Illustration"/>
              </section>

              <section className="row pt-3">
                <div className="position-relative col-12 col-md-6">
                  <p className="position-absolute" style={{color: "#fff"}}>Entre RecyclerViews, ConstraintLayouts e Webbviews, 
                  Sobre orientacao de Gestor de negócio e UX/UI designer, fiquei encarregado do desenvolvimento de todos aspetos de layout,</p>
                  <img src={mpdsWoundsHistoryBackground} alt=""/>
                </div>
                
                <img src={mpdsWoundsPatientList} alt="" className="col-12 col-md-6"/>

              </section>

              <section className="row pt-3 ">
                <img src={mpdsWoundsScreenShootsApp} alt=""/>
              </section>

              <section className="row pt-3">
                <p className="col-12 col-md-6 order-md-0 order-1" style={briefCase}>
                  The MpDS app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, 
                  through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.
                </p>
                <div className="col-12 col-md-6 " >
                  <div id="cardsEmptyState" style={{background: '#efefea'}}/>
                </div>
              </section>

              <section className="row pt-3">
                <div className="col-12 col-md-6">
                  <div id="wifiMachine" style={{background: '#daf1f3'}}/>
                </div>
                <p className="col-12 col-md-6 order-md-0 order-1" style={briefCase}>
                    The MpDS app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, 
                    through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.
                </p>
              </section>

              <section className="row pt-3">
                <div className="col-md-6 col-12">
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/fU0UvvScXkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-6 col-12">
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/nDxhJGgn7us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </section>
              
              <section className="row pt-3 d-none d-xl-block">
                <div className="position-relative">
                  <img src={downloadTheApp} alt="Mpds World Goodbye"/>
                  <div  className="position-absolute" style={{right: 150, top: 120, }}>
                    <a href="https://mpds.f3m.pt/en/wounds/">
                      <MajorButton></MajorButton>
                    </a>
                  </div>
                </div>
              </section>

              <section className="row pt-3 d-block d-xl-none">
                <div  className="text-center" style={{right: 150, top: 120, }}>
                    <a href="https://mpds.f3m.pt/en/wounds/">
                      <button class="learn-more">
                        <span class="circle w-100" aria-hidden="true">
                          <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Learn More</span>
                      </button>
                    </a>
                  </div>
              </section>


          </div>
        </Layout>
      </div>
     
    </>
    
  )
}

export default MpdsWoundsPage
