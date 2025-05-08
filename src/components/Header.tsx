import React from "react";
import { Link } from "react-router-dom";

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: "/main", label: "Main" },
  { path: "/some", label: "Some" },
];

const Header: React.FC = () => {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{ textDecoration: "none", color: "#333" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
