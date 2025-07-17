import { Box, Grid, Typography, Button} from "@mui/material";
import React from "react";
import { FullList } from "../FullList";
import { isMobile } from "react-device-detect";
import { BtnStyleSmall } from "../MUIStyles";

const Showcase = () => {
  return (
    <section
      className="homeChild"
      id="showcase"
      style={{ position: "relative" }}
    >
      <div
        style={{
          zIndex: "5",
          height: "100%",
          width: "100%",
          position: "absolute",
          pointerEvents: "none",
          background: `linear-gradient(
      to bottom,
      rgba(0,0,0,0)   0%,
      rgba(0,0,0,0.5) 10%,
      rgba(0,0,0,0.5) 90%,
      rgba(0,0,0,0)   100%
    )`,
        }}
      />
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "10px",
          zIndex: "6",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontFamily: "Bebas Neue",
            fontSize: !isMobile ? "4rem" : "2.5rem",
            marginTop: !isMobile ? "200px" : "60px",
            lineHeight: !isMobile ? "3.5rem" : "2.5rem",
            marginBottom: !isMobile ? "0" : "60px",
          }}
        >
          Digital tools for organising and campaigning
        </Typography>

        <Box sx={{ width: !isMobile ? "60%" : "95%", margin: "0 auto" }}>
          {FullList.slice(0, 10).map((item, index) => {
            return (
              <Grid
                container
                spacing={!isMobile ? 6 : 0}
                sx={{ margin: "20px 0" }}
                flexDirection={index % 2 ? "row-reverse" : "row"}
              >
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: "10px",
                      // backgroundColor: "white",
                      height: "100%",

                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      flexDirection: "column",
                      padding: !isMobile ? "0 20px" : "0 10px",
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "0",
                        fontFamily: "Bebas Neue",
                        fontSize: !isMobile ? "3rem" : "2rem",
                        color: "white",
                        lineHeight: !isMobile ? "2.5rem" : "1.7rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        margin: "0",
                        fontSize: !isMobile ? "1rem" : "0.8rem",
                        fontFamily: "Roboto",
                        color: "white",
                      }}
                    >
                      {item.desc}
                    </Typography>

                    <center>
                      <Button sx={{...BtnStyleSmall, marginTop: '20px'}}
                      target="_blank"
                      href={item.link}
                      >Go to tool</Button>
                    </center>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <img
                    src={item.img}
                    width="100%"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "4px solid white",
                    }}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </div>
    </section>
  );
};

export default Showcase;
