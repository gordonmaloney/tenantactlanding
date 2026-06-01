import React from "react";
import { Button, Box, Grid, Typography, Stack } from "@mui/material";
import Footer from "../Components/Footer";
import { BtnStyle } from "../MUIStyles";
import img5 from "../imgs/img5.jpg";

export const Contact = () => {
  const encodedNumber = "NDQ3OTAzNzAwNzUx";
  const msg = "Hey! I'd like to chat about TenantAct. ";

  const handleWAClick = () => {
    const phone = atob(encodedNumber);
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section
      className="homeChild"
      id="contact"
      style={{ position: "relative" }}
    >
      <Box
        sx={{
          minHeight: "calc(100vh - 160px)",
          background: "#f7f4ec",
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ width: "92%", maxWidth: "1350px", margin: "0 auto" }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  color: "#07833d",
                  fontFamily: "Bebas Neue",
                  fontSize: "1.25rem",
                  mb: 1,
                }}
              >
                GET INVOLVED
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Bebas Neue",
                  fontSize: { xs: "4rem", md: "5.8rem" },
                  lineHeight: 0.9,
                  mb: 3,
                  color: "#061b13",
                }}
              >
                BUILT BY TENANTS.
                <br />
                FOR TENANTS.
              </Typography>

              <Typography
                sx={{
                  fontSize: "1.05rem",
                  lineHeight: 1.5,
                  maxWidth: "520px",
                  mb: 4,
                  color: "#061b13",
                }}
              >
                TenantAct is built and maintained by volunteers. If you want to
                help build tools, test ideas, or support campaigns, we’d love to
                hear from you.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                sx={{ mb: 4 }}
              >
                {[
                  ["Volunteer", "Help build tools"],
                  ["Contribute", "Code, design, test or write"],
                  ["Spread the word", "Tell others and help us grow"],
                ].map(([title, desc]) => (
                  <Box key={title}>
                    <Typography
                      sx={{
                        fontFamily: "Bebas Neue",
                        fontSize: "1.3rem",
                        color: "#061b13",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "#33433d" }}>
                      {desc}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Button sx={BtnStyle} onClick={handleWAClick}>
                Get in touch
              </Button>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  minHeight: { xs: 300, md: 520 },
                  borderRadius: "6px",
                  overflow: "hidden",
                  position: "relative",
                  background:
                    "linear-gradient(135deg, #082619 0%, #0b3d26 100%)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                }}
              >
                <img src={img5}
width="100%"
height="auto"
/>
</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </section>
  );
};
