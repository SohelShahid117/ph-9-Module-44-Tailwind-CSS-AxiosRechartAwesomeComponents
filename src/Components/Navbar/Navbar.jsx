import React from "react";
import Link from "../Link/Link";
//44-2 Responsive Navbar Using React And Tailwind

const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/products", name: "Products" },
  ];

  return (
    <nav>
      <ul className="flex">
        {/* {routes.map((routeee) => (
          <li className="mr-10">
            <a href={routeee.path}>{routeee.name}</a>
          </li>
        ))} */}
        {routes.map((routi) => (
          <Link routi={routi} key={routi.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
