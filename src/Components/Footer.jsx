import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #061b13 0%, #03100b 100%)",
        color: "white",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        width: "100%",
      }}
    >
      <Box sx={{ width: "92%", maxWidth: "1400px", mx: "auto", py: 6 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontFamily: "Bebas Neue",
                fontSize: "3rem",
                lineHeight: 0.9,
                mb: 2,
              }}
            >
              TENANT
              <br />
              ACT
            </Typography>

            <Typography sx={{ opacity: 0.75, maxWidth: 280 }}>
              Digital tools for tenant power and collective action.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              sx={{ fontFamily: "Bebas Neue", fontSize: "1.3rem", mb: 1 }}
            >
              Navigation
            </Typography>

            <Stack spacing={0.8} sx={{ opacity: 0.75 }}>
              <a href="#showcase" style={linkStyle}>
                Tools
              </a>
              <a href="#firstChild" style={linkStyle}>
                TenantShout
              </a>
              <a href="#contact" style={linkStyle}>
                Get involved
              </a>
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography
              sx={{ fontFamily: "Bebas Neue", fontSize: "1.3rem", mb: 1 }}
            >
              Get in touch
            </Typography>

            <Typography sx={{ opacity: 0.75, mb: 2 }}>
              Built and maintained by volunteers.
            </Typography>

            <Stack direction="row" spacing={2.5} sx={{ fontSize: "1.4rem" }}>
              <a
                href="https://www.instagram.com/living_rent/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://x.com/Living_Rent"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://www.facebook.com/livingrentscotland/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              sx={{ fontFamily: "Bebas Neue", fontSize: "1.3rem", mb: 1 }}
            >
              Built by
            </Typography>

            <Typography sx={{ opacity: 0.75, mb: 2 }}>
              Living Rent is Scotland's tenants' and community union.
            </Typography>

            <a
              href="https://www.livingrent.org/join"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0bb45b",
                fontWeight: 700,
              }}
            >
              Become a member today
            </a>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            opacity: 0.6,
            fontSize: "0.85rem",
          }}
        >
          <span>© 2026 Tenant Act</span>
          <a
            href="https://www.livingrent.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            livingrent.org
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
