import { useRef, useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BtnStyle } from "./Shared";
import genericImg from "./bg.jpeg"

import { FullList } from "./FullList";
import FeatureCards from "./FeatureCards";


export const Landing = () => {

return <div>
	
	<div className="homeContainer">

<section className="homeChild">
<div className="landingBG">
        <div className="landingCont">
          <div className="landingHeader"></div>

          <div className="landingDialogue">
            TenantAct swdvigrihveriv
            <br />
            <br />
              <Button   onClick={() => {
    const el = document.getElementById('feature')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }} sx={BtnStyle}>
                GET STARTED
              </Button>
          </div>
        </div>
      </div>
</section>



<section className="homeChild" id="feature">
<Box sx={{width: '90%', margin: '50px auto'}}>



<FeatureCards />
</Box>
</section>
</div></div>;

  const Project = ({ title, desc, link, img }) => {
    return (
			<Grid item xs={12} sm={6}>
				{console.log(title, img)}
				<a href={link} target="_blank">
					<div className="itemContainer">
						<div className="itemContained">
							{img ? (
								<img src={img} alt={title} className="screenshot" />
							) : (
								<img src={genericImg} alt={title} className="screenshot" />
							)}
						</div>
						<div className="itemContained itemExplainer">
							<div className="itemExplained">
								<span className="bebas header header3">{title}</span>
								<p className="desc_text">{desc}</p>
							</div>
						</div>
					</div>
				</a>
			</Grid>
		);
  };

  return (
		<div className="landing">
			<div className={`landingContainer`}>
				<div className="landingInner">
					<span className="bebas header header2">TenantAct</span>

					<p style={{ marginBottom: "40px", textAlign: 'center' }}>
						A suite of digital tools for Living Rent members to build power and fight
						for fair housing
					</p>

					<Grid
						spacing={2}
						container
						justifyContent={"space-around"}
						alignItems={"center"}
					>
						{FullList.filter((item) => item.title).map((item, index) => (
							<Grid item key={index}>
								<Project
									title={item.title}
									desc={item.desc}
									link={item.link}
									img={item.img}
								/>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	);
};
