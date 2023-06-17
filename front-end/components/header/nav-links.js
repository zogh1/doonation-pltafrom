import React, { useContext } from "react";
import Link from "next/link";
import { SearchContext } from "../../context/search-context";

const NavLinks = ({ extraClassName }) => {
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);

  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };

  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li className="dropdown">
        <Link href="/index">
          <>  <Link href="/index">
            <a>Home</a>
            </Link>
        
          </>
        </Link>
   
      </li>
      <li className="dropdown">
        <Link href="/causes">
          <>
            <a>Causes</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/causes">
              <a>Causes</a>
            </Link>
          </li>
          <li>
            <Link href="/AddDonation">
              <a>AddDonationRequest</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/events">
          <>
            <a>Events</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/event-details">
              <a>Event Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/news">
          <>
            <a>News</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>Pages</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/volunteers">
              <a>Volunteers</a>
            </Link>
          </li>

          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
       <li className="dropdown">
        <Link href="#">
          <>
            <a><i class="fas fa-user"></i></a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
         
          <li>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </li>
          <li>
            <Link href="/editprofile">
              <a>Edit Profile</a>
            </Link>
          </li>
          
          <li>
            <Link href="/index">
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="search-btn search-toggler" onClick={handleSearchClick}>
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavLinks;
