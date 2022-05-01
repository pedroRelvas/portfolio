import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import EsocialFirstIlus from '../images/prismaEsocialProduz/esocialIlust1.svg';
import EsocialSecondIlus from '../images/prismaEsocialProduz/esocialIlust2.svg';
import PrismaFirstIlus from '../images/prismaEsocialProduz/prismaIlust1.svg';
import PrismaSecondIlus from '../images/prismaEsocialProduz/prismaIlust2.svg';
import ProduzFirstIlus from '../images/prismaEsocialProduz/produzIlust1.svg';
import ProduzSecondIlus from '../images/prismaEsocialProduz/produzIlust2.svg';
import f3mLogo from '../images/techsIcons/f3m.svg';
import downloadTheApp from '../images/mpdsAndroidProject/downloadTheApp.svg';
import MajorButton from '../components/MajorButton';
import PrismaLogin from '../images/prismaEsocialProduz/prismaLogin.png';
import PrismaLogo from '../images/prismaEsocialProduz/prismaLogo.svg';
import ProduzLogo from '../images/prismaEsocialProduz/produzLogo.svg';
import EsocialLogo from '../images/prismaEsocialProduz/esocialLogo.svg';
import AllThree from '../images/prismaEsocialProduz/allThree.png';
import Layout from '../components/Layout';


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
const PrismaProduzESocialPage = () => {
  return (
  <>
    <div className="bg-primary">
      <Layout>
        <div style={pageStyles} className="container mt-3 mt-md-4 pb-4">
            <section>
                <img src={PrismaLogo} className="pb-4 pb-md-0" width="250" alt="Prisma Logo"/>
                <img src={ProduzLogo} className="mx-md-5 pb-4 pb-md-0" width="250" alt="Produz Logo"/>
                <img src={EsocialLogo} className="pt-md-4 pt-lg-0" width="250" alt="eSocial Logo"/>
                <p className="pt-4" style={briefCase}>
                   Prisma: Software for the optics sector management;<br/>
                   Produz: Software management for the textile industry;<br/>
                   eSocial: Software management of IPSS (Elderly Care, Child Care, etc);
                </p>
            </section>

            <section className="pt-4 pt-md-2 pt-lg-4">
                <div class="d-flex p-2 bd-highlight">
                    <div className="pr-5">
                        <p style={detailsCase}>Company</p>
                        <img src={f3mLogo} width="100" alt="F3M Logo"/>
                    </div>
                    <div className="px-5">
                        <p style={detailsCase}>My Role</p>
                        <p style={detail}>Front-End Development &#x1F4BB; Logo Design &#128311; Illustration &#127912;</p>
                    </div>
                </div>
            </section>

            <section className="pt-3 row">
              <img src={PrismaLogin} className="d-md-none"  alt="Prisma Login"/>
              <div className="col-4">
                <img src={EsocialFirstIlus} className="d-none d-md-block" alt="eSocial Illustration"/>
              </div>
              <div className="col-4">
                <img src={PrismaFirstIlus} className="d-none d-md-block" alt="Prisma Illustration"/>
              </div>
              <div className="col-4">
                <img src={ProduzFirstIlus} className="d-none d-md-block" alt="Produz Illustration"/>
              </div>
                
            </section>

            <section>
                <p className="pt-4" style={briefCase}>
                  Three large-scale products in one development base. 
                  Three different areas sharing the same space.
                  A huge exercise of flexibility between dev teams and business managers.
                </p>
            </section>

            <section className="pt-3 row">
              <img src={PrismaLogin} className="d-none d-md-block" alt="Prisma Login"/>
            </section>

            <section className="pt-md-3 row">
              <img src={AllThree} alt="All Three UI Screens"/>
            </section>

            <section className="row pt-3">
              <p className="col-12 col-md-6" style={briefCase}>
                In this products I: 
                <ul>
                <li>designed and built components (UI oriented); </li>  
                <li>collaborated with the Marketing Team to define and design the identity of the products;</li>
                <li>participated in usability tests;</li>
                <li>prototyped several features;</li>
                <li>visual tested on multiple browsers and devices;</li>
                <li>co-developed component libraries and design systems;</li>
                <li>designed logos and icons.</li>
                </ul>
              </p>
              <div className="col-12 col-md-6" >
                <img src={PrismaSecondIlus} alt="Prisma Second Illustration"/>
              </div>
            </section>

            <section className="row pt-3">
              <div className="col-12 col-md-6 order-md-0 order-1">
                <img src={ProduzSecondIlus} alt="Produz Second Illustration"/>
              </div>
              <div className="col-12 col-md-6" >
                <img src={EsocialSecondIlus} alt="eSocial Second Illustration"/>
              </div>
            </section>

            <section className="row pt-3">
              <div className="col-12 col-md-6">
                <iframe className="w-100" height="315" src="https://www.youtube.com/embed/1xWoAVe1ZwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-12 col-md-6">
                <iframe className="w-100" height="315" src="https://www.youtube.com/embed/N8vfrCBFaYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
              </div>
            </section>
            
            <section className="row pt-3 d-none d-xl-block">
              <div className="position-relative">
                <img src={downloadTheApp} alt="Mpds World Goodbye"/>
                <div  className="position-absolute" style={{right: 150, top: 120, }}>
                  <a href="https://www.f3m.pt/pt/home">
                    <MajorButton></MajorButton>
                  </a>
                </div>
              </div>
            </section>

            <section className="row pt-3 d-block d-xl-none">
              <div  className="text-center" style={{right: 150, top: 120, }}>
                  <a href="https://www.f3m.pt/pt/home">
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

export default PrismaProduzESocialPage
