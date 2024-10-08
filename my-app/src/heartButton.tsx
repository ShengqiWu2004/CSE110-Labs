import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from "./themeContext";
import 'font-awesome/css/font-awesome.min.css'
export function ClickCounter() {
 const [clicked, setClicked] = useState(false);

 const handleClick = () => {
    setClicked(!clicked);
 };

 const theme = useContext(ThemeContext);
 return (
    <div>
      <button
        onClick={handleClick}
      >
        <i className = "fa fa-heart" style = {{color: clicked ? 'red' : '#D3D3D3'}}/>
      </button>
    </div>
  );
}
