import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './mode/Style';
import { FaChessKnight, FaInfo, FaCloudSun } from "react-icons/fa";

const Navbar = () => {

  const [mode, setMode] = useState(true);

  return (
    <>  
      {mode === true ? '' : (<Style path={`./whitemode.css`} />)}

      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            ♣︎ <small>CompanyLogo</small>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div class="nav-links">
          <NavLink exact to="/" activeClassName="active">
            <FaChessKnight /> Home
          </NavLink>{' '}
          <NavLink exact to="/about" activeClassName="active">
            <FaInfo /> About
          </NavLink>
          <NavLink activeClassName="active" onClick={() => setMode(!mode)}>
            <FaCloudSun /> Swich Mode
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;