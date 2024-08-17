import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 alt="Logo" style={logoStyle}>RateThatFilm</h2>
      </Link>
      <nav>
        <ul style={navLinksStyle}>
          <li style={navLinkStyle}><Link to="/" style={navLinkTextStyle}>Home</Link></li>
          <li style={navLinkStyle}><Link to="/contact" style={navLinkTextStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  padding: "10px 20px",
  color: "#000000",
  borderBottom: "2px solid #ccc",
};

const logoStyle = {
  color: "#000000",
};

const navLinksStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "flex",
};

const navLinkStyle = {
  marginLeft: "40px",
};

const navLinkTextStyle = {
  color: "#000000",
  textDecoration: "none",
};

export default Header;