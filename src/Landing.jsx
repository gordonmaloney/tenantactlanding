import { useRef, useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BtnStyle } from "./MUIStyles";

import { FullList } from "./FullList";
import TenantShout from "./Sections/TenantShout";
import Footer from "./Components/Footer";
import Hero from "./Sections/Hero";
import { Contact } from "./Sections/Contact";
import Showcase from "./Sections/Showcase";

export const Landing = () => {
  return (
    <div>
      <div className="homeContainer">

        {
          //Each component is a <section> tag, which cause vertical scrolling  to snap
        }
        <Hero />
        <TenantShout />

        <Showcase />
        <Contact />

        {
          //NOTE whatever the last section is has to include the footer,  currently it's <Contact /> but if you change that, move the Footer accordingly
        }
      </div>
    </div>
  );
};
