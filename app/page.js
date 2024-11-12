"use client"
import NavBar from "./components/Navbar";

import Customer from "./components/Customer";
import Technicians from "./components/Technicians";
import Assistance from "./components/Assistance";
import Avoid from "./components/Avoid";
import Helppage from "./components/Helppage";

import PrinterSetup from "./services/content/PrinterSetup";

import FooterSection from "./components/FooterSection";
import JivoChat from "./Jivochat";
import ContentSetup from "./components/ContentSetup";
import Lader from "./components/Lader";
import SliderNav from "./components/SliderNav";


function Home() {
  return (
    <>

      <NavBar />
      <PrinterSetup/>
      <SliderNav/>
      <Lader/>
  
     
      <ContentSetup/>
      <Customer/>

      {/* <PrinterSetup/>
      <Technicians/>
      <Assistance/>
      <Avoid/> */}
      {/* <Helppage/> */}
      {/* <Customer/> */}
      <FooterSection/>
      <JivoChat/>


    </>

  )
}
export default Home;