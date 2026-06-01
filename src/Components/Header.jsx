import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(3, 24, 17, 0.78)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        color: "white",
        zIndex: 50,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "76px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            onClick={() => scrollTo("hero")}
            sx={{
              cursor: "pointer",
              fontFamily: "Bebas Neue",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            TENANT ACT
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {[
              ["Tools", "showcase"],
              ["TenantShout", "firstChild"],
              ["Get involved", "contact"],
            ].map(([label, id]) => (
              <Button
                key={label}
                onClick={() => scrollTo(id)}
                sx={{
                  color: "white",
                  fontFamily: "Bebas Neue",
                  fontSize: "1.15rem",
                  letterSpacing: "0.04em",
                  opacity: 0.88,
                  "&:hover": {
                    opacity: 1,
                    background: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                {label}
              </Button>
            ))}

            <Button
              onClick={() => scrollTo("contact")}
              sx={{
                ml: 1,
                color: "white",
                border: "1px solid rgba(255,255,255,0.55)",
                borderRadius: "4px",
                px: 2.5,
                py: 1,
                fontFamily: "Bebas Neue",
                fontSize: "1.05rem",
                letterSpacing: "0.04em",
                "&:hover": {
                  borderColor: "white",
                  background: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Get in touch
            </Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  background: "#061b13",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.15)",
                  mt: 1,
                },
              }}
            >
              {[
                ["Tools", "showcase"],
                ["TenantShout", "firstChild"],
                ["Get involved", "contact"],
              ].map(([label, id]) => (
                <MenuItem
                  key={label}
                  onClick={() => scrollTo(id)}
                  sx={{ justifyContent: "flex-end" }}
                >
                  <Typography
                    sx={{ fontFamily: "Bebas Neue", fontSize: "1.4rem" }}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
