import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { isMobile } from "react-device-detect";

import img1 from "../imgs/img1.jpeg";
import img2 from "../imgs/img2.jpeg";
import img3 from "../imgs/img3.jpeg";
import img4 from "../imgs/img4.jpeg";
import GreenOverlayImage from "../Components/ImgOverlay";
import { FullList } from "../FullList";
import { BtnStyle, BtnStyleSmall } from "../MUIStyles";

const featuredCampaigns = [
  {
    title: "Report your rent hike",
    blurb:
      "Scotland's housing crisis is only getting worse - but MSPs have their heads in the sand. Use this tool to email them and make sure they can't ignore the impact rent hikes are having on tenants.",
    id: "act/renthikes",
  },
  {
    title: "Stamp out cowboy landlords",
    blurb:
      "The Edinburgh Regulatory Committee will be meeting soon to vote on a key package of measures around PRS enforcement - they need to hear from tenants demanding they pass it.",
    id: "act/edregcttee",
  },
];

const features = [
  {
    text: "Pressure councillors to vote for a key motion",
    image: img1,
  },
  {
    text: "Respond en masse to a consultation or survey",
    image: img2,
  },
  {
    text: "Pile pressure on a member defence target",
    image: img3,
  },
  {
    text: "Shower politicians with personalised member stories",
    image: img4,
  },
];

export default function TenantShout() {
  return (
    <section className="homeChild" id="firstChild">
      <Box
        sx={{
          width: "90%",
          margin: "50px auto",
          marginTop: isMobile && "100px",
        }}
      >
        <Grid container spacing={2} alignItems={"center"}>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <center>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  width: "75%",
                  padding: "12px",
                }}
              >
                <h1>{FullList[1].title}</h1>

                <p>{FullList[1].desc}</p>

                <Button sx={BtnStyle} href={FullList[1].link} target="_blank">
                  Go to TenantShout
                </Button>
              </Box>

              {/*

// "Featured Campaigns" section was herebut it looks like shit so commented out for someone to make nice
<h4 style={{textAlign: 'left'}}>Featured campaigns:</h4>

<Grid container spacing={1} justifyContent={"space-around"} alignItems={"center"}>

    {featuredCampaigns.map((camp) =>  
      <Grid xs={6} item>

          <Card sx={{padding: '3px'}}>
<h4>{camp.title}</h4>
<p>{camp.blurb}</p>
<Button sx={BtnStyleSmall}  target="_blank">Take action</Button>
          </Card>


        </Grid>
    )}


</Grid>
*/}
            </center>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {features.map((feature, idx) => (
                //long horizontal cards on desktop
                //stubby vertical ones on mobile

                <Grid
                  item
                  key={idx}
                  sx={{ width: "100%" }}
                  xs={isMobile ? 6 : 12}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      width: "100%",
                      margin: "0",
                      height: isMobile ? 200 : 100,
                      alignItems: "center",
                    }}
                  >
                    {/* Left side: the image */}

                      <GreenOverlayImage
                        src={feature.image}
                        alt={feature.text}
                        height={"130px"}
                        width={"100%"}
                      />


                    {/* Right side: text content */}
                    <Box
                      sx={{ display: "flex", flexDirection: "column", flex: 1 }}
                    >
                      <CardContent>
                        <p
                          style={{ margin: 0, textAlign: isMobile && "center" }}
                        >
                          {" "}
                          {feature.text}
                        </p>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
