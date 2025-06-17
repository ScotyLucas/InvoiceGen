import { NavLink } from "react-router-dom";
import "../CSS/Navbar2.css"; // opcionális, ha van saját stílusod

const Navbar2 = () => {
  const items = [
    { label: "Home", path: "/" },
    { label: "Create Invoice", path: "/create-invoice" }
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {items.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar2;