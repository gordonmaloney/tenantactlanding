import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BtnStyle } from "../MUIStyles";
import { FullList } from "../FullList";

const Hero = () => {
  return (
    <section className="homeChild" id="hero">
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          color: "white",
          background:
            "linear-gradient(90deg, rgba(3,24,17,0.96) 0%, rgba(3,24,17,0.82) 42%, rgba(3,24,17,0.35) 100%)",
        }}
      >
        <Box
          className="landingBG"
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.95,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "92%",
            maxWidth: "1400px",
            margin: "0 auto",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="header"
            sx={{
              height: "78px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bebas Neue",
                fontSize: "2rem",
                letterSpacing: "0.04em",
              }}
            >
              TENANT ACT
            </Typography>

            <Stack
              direction="row"
              spacing={4}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                fontFamily: "Bebas Neue",
              }}
            >
              <a href="#firstChild">Tools</a>
              <a href="#showcase">Showcase</a>
              <a href="#contact">Get involved</a>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              alignItems: "center",
              gap: 6,
              pb: 8,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Bebas Neue",
                  fontSize: { xs: "6rem", md: "10rem", lg: "13rem" },
                  lineHeight: 0.82,
                  letterSpacing: "-0.03em",
                  textShadow: "0 20px 60px rgba(0,0,0,0.35)",
                }}
              >
                TENANT
                <br />
                ACT
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  maxWidth: "560px",
                  fontSize: { xs: "1.25rem", md: "1.6rem" },
                  lineHeight: 1.2,
                }}
              >
                Digital tools for tenant organising, campaigning and collective
                action.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
                <Button
                  onClick={() => {
                    const el = document.getElementById("firstChild");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    ...BtnStyle,
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                  }}
                >
                  Explore the tools
                </Button>

                <Button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.55)",
                    borderRadius: "4px",
                    px: 4,
                    py: 1.5,
                    fontFamily: "Bebas Neue",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  Get involved
                </Button>
              </Stack>

              <Typography sx={{ mt: 4, opacity: 0.85 }}>
                Built by Living Rent volunteers.
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,0.96)",
                  borderRadius: "22px",
                  p: 2,
                  boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
                  transform: "rotate(-1deg)",
                }}
              >
                <img
                  src={FullList[1].img}
                  alt={FullList[1].title}
                  style={{
                    width: "100%",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  right: "-30px",
                  bottom: "-35px",
                  width: "180px",
                  background: "white",
                  color: "#061b13",
                  borderRadius: "26px",
                  p: 2,
                  boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
                }}
              >
                <Typography
                  sx={{ fontFamily: "Bebas Neue", fontSize: "1.5rem" }}
                >
                  TAKE ACTION
                </Typography>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Report, map, contact and organise.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
