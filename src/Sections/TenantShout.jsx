import React from "react";
import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import { isMobile } from "react-device-detect";

import img1 from "../imgs/img1.jpeg";
import img2 from "../imgs/img2.jpeg";
import img3 from "../imgs/img3.jpeg";
import img4 from "../imgs/img4.jpeg";
import { FullList } from "../FullList";
import { BtnStyle } from "../MUIStyles";

const features = [
  { text: "Map problems in your area", image: img1 },
  { text: "Find your neighbours", image: img2 },
  { text: "Share stories securely", image: img3 },
  { text: "Build stronger campaigns", image: img4 },
];

export default function TenantShout() {
  const tenantShout = FullList[1];

  return (
    <section className="homeChild" id="firstChild">
      <Box
        sx={{
          minHeight: "100vh",
          background: "#f7f4ec",
          color: "#061b13",
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ width: "92%", maxWidth: "1350px", margin: "0 auto" }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  color: "#07833d",
                  fontFamily: "Bebas Neue",
                  fontSize: "1.25rem",
                  letterSpacing: "0.04em",
                  mb: 1,
                }}
              >
                TENANTSHOUT
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Bebas Neue",
                  fontSize: { xs: "4rem", md: "6.5rem" },
                  lineHeight: 0.88,
                  letterSpacing: "-0.03em",
                  mb: 3,
                }}
              >
                REPORT.
                <br />
                CONNECT.
                <br />
                TAKE ACTION.
              </Typography>

              <Typography
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.45,
                  maxWidth: "520px",
                  mb: 3,
                }}
              >
                {tenantShout.desc}
              </Typography>

              <Stack spacing={1.2} sx={{ mb: 4 }}>
                {features.map((feature) => (
                  <Typography key={feature.text} sx={{ fontSize: "1rem" }}>
                    ✓ {feature.text}
                  </Typography>
                ))}
              </Stack>

              <Button sx={BtnStyle} href={tenantShout.link} target="_blank">
                Explore TenantShout
              </Button>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{ position: "relative", minHeight: { xs: 360, md: 540 } }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: { xs: "50px 0 auto 0", md: "40px 70px auto 40px" },
                    background: "white",
                    borderRadius: "22px",
                    p: 2,
                    boxShadow: "0 30px 90px rgba(0,0,0,0.18)",
                    transform: "rotate(-2deg)",
                  }}
                >
                  <img
                    src={tenantShout.img}
                    alt={tenantShout.title}
                    style={{
                      width: "100%",
                      borderRadius: "14px",
                      display: "block",
                    }}
                  />
                </Box>

                {!isMobile &&
                  features.slice(0, 3).map((feature, index) => {
                    const positions = [
                      { left: 0, top: 80 },
                      { right: 0, top: 180 },
                      { right: 60, bottom: 30 },
                    ];

                    return (
                      <Box
                        key={feature.text}
                        sx={{
                          position: "absolute",
                          ...positions[index],
                          width: "230px",
                          background: "white",
                          borderRadius: "14px",
                          p: 2,
                          boxShadow: "0 18px 50px rgba(0,0,0,0.14)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#07833d",
                            fontFamily: "Bebas Neue",
                            fontSize: "1rem",
                          }}
                        >
                          {index === 0
                            ? "PROBLEM REPORTED"
                            : index === 1
                              ? "ACTION READY"
                              : "JOINED NEARBY"}
                        </Typography>
                        <Typography sx={{ fontSize: "0.9rem" }}>
                          {feature.text}
                        </Typography>
                      </Box>
                    );
                  })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
}
