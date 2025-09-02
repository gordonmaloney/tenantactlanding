import { Box, Grid, Typography, Button } from "@mui/material";
import React, {useRef} from "react";
import useIsVisible from "../useIntersection";  
import { FullList } from "../FullList";
import { isMobile } from "react-device-detect";
import { BtnStyleSmall, BtnStyleTiny } from "../MUIStyles";

//This needs buttons for each tool incorporated someone, currently the text is an <a> tag but that isn't ideal

const Showcase = () => {

  // create a ref
  const targetParagraph = useRef();
  // send ref to our hook to return true or false based on visibility of ref in view
  const targetParagraphVisible = useIsVisible(targetParagraph);
 
  const menuItem = document.getElementById("showcaseMenuItem");
  
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
      id="showcase"
      style={{ position: "relative" }}
      key="showcase"
    >
      <div className="backgroundGradient" />
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
                alignItems={"center"}
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
                    <a target="_blank" href={item.link}>
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
                          lineHeight: !isMobile ? "1.2rem" : "0.9rem",
                          fontFamily: "Roboto",
                          color: "white",
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </a>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <a target="_blank" href={item.link}>
                    <img
                      src={item.img}
                      width="100%"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "10px",
                        border: "4px solid white",
                      }}
                    />
                  </a>
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
