import { useRef, useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BtnStyle } from "./Shared";
import genericImg from "./bg.jpeg"

import { FullList } from "./FullList";
import FeatureCards from "./FeatureCards";
import Footer from "./Footer";

export const Landing = () => {

return <div>
	
	<div className="homeContainer" >

<section className="homeChild" id="hero">
<div className="landingBG">
        <div className="landingCont">
          <div className="landingHeader"></div>

          <div className="landingDialogue">
            
			<p>digital tools for campaigning and organising</p>
     
              <Button   onClick={() => {
    const el = document.getElementById('firstChild')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }} sx={BtnStyle}>
                See tools
              </Button>
          </div>
        </div>
      </div>
</section>



<section className="homeChild" id="firstChild">


<Box sx={{width: '90%', margin: '50px auto'}}>



<FeatureCards />


</Box>


</section>



<section className="homeChild" id="contact" style={{position: 'relative'}}>


<Box sx={{width: '90%', margin: '50px auto'}}>


<center>
<Box
sx={{backgroundColor:  'white',  borderRadius: '10px',  width: '75%', padding: "12px"}}
>
  
<h1>GET INVOLVED</h1>

<p>get involved pitch</p>

<Button sx={BtnStyle} href={FullList[1].link} target="_blank">button</Button>

</Box>
</center>

</Box>



<Footer />

</section>
</div></div>;

};
