import { Box, Grid, Typography, Button, Card } from "@mui/material";
import React from "react";
import { FullList } from "../FullList";
import { BtnStyleSmall } from "../MUIStyles";

const Showcase = () => {
  return (
    <section
      className="homeChild"
      id="showcase"
      style={{ position: "relative" }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #031811 0%, #06120e 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 12 },

          // subtle dot texture
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage: `
              radial-gradient(rgba(11,180,91,0.55) 1.2px, transparent 1.2px)
            `,
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(circle at top right, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at top right, black 0%, transparent 72%)",
            pointerEvents: "none",
          },

          // soft green glow
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-15%",
            right: "-10%",
            width: "50%",
            height: "50%",
            background:
              "radial-gradient(circle, rgba(11,180,91,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          },
        }}
      >
        <Box sx={{ width: "92%", maxWidth: "1400px", margin: "0 auto" }}>
          <Grid container spacing={5} alignItems="end" sx={{ mb: 5 }}>
            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color: "#0bb45b",
                  fontFamily: "Bebas Neue",
                  fontSize: "1.2rem",
                  letterSpacing: "0.05em",
                  mb: 1,
                }}
              >
                THE TENANT ACT SUITE
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Bebas Neue",
                  fontSize: { xs: "3.4rem", md: "5.6rem" },
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                }}
              >
                TOOLS FOR ORGANISING
                <br />
                AND CAMPAIGNING
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.5,
                  opacity: 0.86,
                  maxWidth: "520px",
                }}
              >
                A suite of digital tools to help tenants organise, research,
                communicate and win.
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              gridTemplateColumns: { md: "repeat(5, 1fr)" },
              gap: 2.5,
              overflowX: { xs: "auto", md: "visible" },
              overflowY: "visible",
              scrollSnapType: { xs: "x mandatory", md: "none" },
              WebkitOverflowScrolling: "touch",
              pb: { xs: 2, md: 0 },
              mx: { xs: "-4%", md: 0 },
              px: { xs: "4%", md: 0 },

              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            {FullList.slice(0, 5).map((item) => (
              <Card
                key={item.title}
                component="a"
                href={item.link}
                target="_blank"
                sx={{
                  display: "block",
                  flex: { xs: "0 0 82%", sm: "0 0 48%", md: "unset" },
                  scrollSnapAlign: "center",
                  height: "100%",
                  background: "rgba(255,255,255,0.045)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "white",
                  borderRadius: "18px",
                  p: 2,
                  textDecoration: "none",
                  transition: "0.25s ease",
                  backdropFilter: "blur(8px)",

                  "&:hover": {
                    background: "rgba(255,255,255,0.08)",
                    borderColor: "#0bb45b",
                  },

                  "@media (hover: hover) and (pointer: fine)": {
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  },

                  "&:focus": {
                    outline: "none",
                  },

                  "&:focus-visible": {
                    outline: "3px solid #2d9cff",
                    outlineOffset: "3px",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 150,
                    background: "rgba(255,255,255,0.92)",
                    borderRadius: "12px",
                    mb: 2,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Bebas Neue",
                    fontSize: "2rem",
                    lineHeight: 0.95,
                    mb: 1.2,
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.35,
                    opacity: 0.82,
                    minHeight: "70px",
                  }}
                >
                  {item.desc}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontFamily: "Bebas Neue",
                    color: "#0bb45b",
                    fontSize: "1.2rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Open →
                </Typography>
              </Card>
            ))}
          </Box>

          <Typography
            sx={{
              display: { xs: "block", md: "none" },
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.9rem",
              textAlign: "center",
              mt: 1,
            }}
          >
            Swipe to explore tools →
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Button
              sx={{
                ...BtnStyleSmall,
                minWidth: "260px",
                border: "1px solid #0bb45b",
                background: "transparent",
                color: "white",
              }}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get involved
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Showcase;
