import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BtnStyle } from "../MUIStyles";

const Hero = () => {
  return (
    <section className="homeChild" id="hero">
      <div className="landingBG">
        <div className="landingCont">
          <div className="landingHeader"></div>

          <div className="landingDialogue">
            <h1>Digital tools for organising<br/>
            and campaigning</h1>

            <Button
              onClick={() => {
                const el = document.getElementById("firstChild");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              sx={BtnStyle}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
