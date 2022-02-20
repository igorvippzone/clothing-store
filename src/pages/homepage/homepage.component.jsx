import React from "react";
import Directory from "../../components/directory/directory.component";
import { Link } from "react-router-dom";

import "./homepage.style.scss";

const HomePage = () => {

return (
  <div className="homepage">
  <Link to="/shop">Shop</Link>
    <Directory />
  </div>
)
}
export default HomePage;
