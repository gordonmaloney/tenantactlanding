import { Button } from "@mui/material";
import React from "react";



export const Header = () => {
  return (
    <div className="navBar">
        <span
          className="bebas header3 header"
          style={{ margin: 0, paddingLeft: "20px" }}
        >
          
        </span>

    
        <a href="https://www.livingrent.org" target="_blank">
          <span
            className="bebas header3 header NavBarLink"
            style={{ margin: 0, paddingRight: "20px" }}
          >
            Living Rent
          </span>
        </a>
    </div>
  );
};
