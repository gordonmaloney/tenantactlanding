import { useRef, useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { BtnStyle } from "./Shared";
import genericImg from "./bg.jpeg"

import { FullList } from "./FullList";


export const Landing = () => {
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
