import React, {Component} from 'react';
import ReactSearchBox from 'react-search-box';
import Logo from '../src/images/Skate_Spot.jpg';
import {FaSearch} from 'react-icons/fa';
import Google from './Google.js'
import Facebook from './Facebook.js'
/*import {FaFacebookSquare} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';*/
import user from './Google.js'
import Account from './accountPage'
import displayName from './accountPage'

import {
  Link
} from 'react-router-dom'



export default class Header extends Component{

  render() {



    return(
      <div className="header_div">
      <h1 className="header_h1"> Skate Spot</h1>
          <ul className="header_ul">
              <li className="li_logo"><img src={Logo} alt="site_logo" className="logo" /></li>
              <li clasName="li_home"><Link to="/" className="home_link">Home</Link></li>
              <li className="li_spots"><Link to="/spots" className="spots_link">Spots</Link></li>
              <li className="li_community"><Link to="/community" className="community_link">Community</Link></li>
              <li className="li_input">
              <FaSearch className="header_icon"/>

              <input type="text" className="header_input" placeholder="Search"style={{height: "20px", width:"250px"}}/>

              </li>

              <li><button className="header_button"type="search" placeholder="search">search</button></li>
              <li><h3 className="loginHeader"> Log In</h3></li>
              <li className="GoogleLi"><Google/></li>
              <li className="AccountLi"><Link to="/account"><displayName/></Link></li>
          </ul>
      </div>
    )

  }
}
