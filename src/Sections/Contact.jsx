import React from "react";
import { Button, Box } from "@mui/material";
import { FullList } from "../FullList";
import Footer from "../Components/Footer";
import { BtnStyle } from "../MUIStyles";

export const Contact = () => {
  
  
  const encodedNumber = "NDQ3OTAzNzAwNzUx";
  const msg = "Hey! I'd like to chat about TenantAct. "


  const handleWAClick = () => {
    const phone = atob(encodedNumber);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };
  
  return (
    <section
      className="homeChild"
      id="contact"
      style={{ position: "relative" }}
    >
      <Box sx={{ width: "90%", margin: "50px auto" }}>
        <center>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "75%",
              padding: "12px",
            }}
          >
            <h1>GET INVOLVED</h1>

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
