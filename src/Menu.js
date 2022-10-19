import React from "react";
import "./Menu.css";

function Menu() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterFunction() {
    let input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  return (
    <div className="Menu">
      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">
          Dropdown
        </button>
        <div id="myDropdown" className="dropdown-content">
          <input
            type="text"
            placeholder="Search.."
            id="myInput"
            onKeyUp={filterFunction}
          />
          <a href="#about" rel="noreferrer">
            About
          </a>
          <a href="#base" rel="noreferrer">
            Base
          </a>
          <a href="#blog" rel="noreferrer">
            Blog
          </a>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
          <a href="#custom" rel="noreferrer">
            Custom
          </a>
          <a href="#support" rel="noreferrer">
            Support
          </a>
          <a href="#tools" rel="noreferrer">
            Tools
          </a>
        </div>
      </div>
    </div>
  );
}
export default Menu;
