import React from "react";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        width: "100vw",
        marginTop: "50px",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "95%", padding: "10px 0", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={8} lg={9} xl={10}>
          <a
            href="https://www.livingrent.org/"
            style={{ color: "black" }}
            target="_blank"
          >
            Living Rent
          </a>{" "}
          is Scotland's tenants' and community union.
        </Grid>

        <Grid item xs={12} sm={4} lg={3} xl={2} justifyContent={"center"}>
          <center>
            <a
              href="https://www.livingrent.org/join"
              target="_blank"
              style={{ color: "black", textDecoration: 'underline' }}
            >
              Become a member today
            </a>
            <br />
            <br />

            <Box
              sx={{
                display: "flex",
                gap: 2,
                fontSize: "1.5rem",
                justifyContent: "space-around",
              }}
            >
              <a
                href="https://www.instagram.com/living_rent/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "black" }}
                />
              </a>
              <a
                href="https://x.com/Living_Rent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} style={{ color: "black" }} />
              </a>
              <a
                href="https://www.facebook.com/livingrentscotland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "black" }}
                />
              </a>
            </Box>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
