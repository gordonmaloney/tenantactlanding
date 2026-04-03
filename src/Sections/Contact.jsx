import React, {useRef} from "react";
import useIsVisible from "../useIntersection";  
import { Button, Box } from "@mui/material";
import { FullList } from "../FullList";
import Footer from "../Components/Footer";
import { BtnStyle } from "../MUIStyles";
import { isMobile } from "react-device-detect";

export const Contact = () => {
  
  const encodedNumber = "NDQ3OTAzNzAwNzUx";
  //this is just Gordon's whatsapp in base64 so scrapers don't spam me
  const msg = "Hey! I'd like to chat about TenantAct. "


  const handleWAClick = () => {
    const phone = atob(encodedNumber);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

   // create a ref
    const targetParagraph = useRef();
    // send ref to our hook to return true or false based on visibility of ref in view
    const targetParagraphVisible = useIsVisible(targetParagraph);
  
    const menuItem = document.getElementById("contactMenuItem");
  
    if(targetParagraphVisible === true) {
      menuItem.style.backgroundColor = "white";
      menuItem.style.color = "rgb(9, 124, 53)";
    } else if (targetParagraphVisible === false && menuItem != null) {
      menuItem.style.backgroundColor = "";
      menuItem.style.color = "";
  }
  
  return (
    <section
      ref={targetParagraph}
      className="homeChild"
      id="contact"
      style={{ position: "relative" }}
    >
      <Box sx={{ width: "90%", margin: "50px auto", marginTop: isMobile && "-50px" }}>
        <center>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: isMobile ? "80%" : "55%",
              padding: "12px",
            }}
          >
            <h1 style={{marginTop: '0'}}>GET INVOLVED</h1>

            <p style={{padding: '0 5vw'}}>
              TenantAct is built and maintained by volunteers - if you want to
              help in anyway, please get in touch and let's chat. Use the button below to message us on Whatsapp:
            </p>

            <Button sx={BtnStyle} onClick={() => handleWAClick()} target="_blank">
              Get in touch
            </Button>
          </Box>
        </center>
      </Box>

      <Footer />
    </section>
  );
};
