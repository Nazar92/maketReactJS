import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
    <div className="headerSection">
      <div className="contentConteiner">
        <div className="container-fluid">
          <div className="row">
            <div className="headerLogo">
              <img src="media/Elena.png" alt="img" />
            </div>
            <div className="headerMenu">
              <ul className="headerMenuList">
                <li className="headerMenuItem">
                  <a href="">HOME</a>
                </li>
                <li className="headerMenuItem">
                  <a href="">SERVICES</a>
                </li>
                <li className="headerMenuItem">
                  <a href="">FEATURES</a>
                </li>
                <li className="headerMenuItem">
                  <a href="">CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="headerTop">
              <h1>HAVE A GOOD DAY</h1>
            </div>
            <div className="headerCenter">
              <ul className="headerCenterList">
                <li className="headerCenterSide"></li>
                <li className="headerCenterDesc"><p>JUST FOR YOU ON THEMEFOREST</p></li>
                <li className="headerCenterSide"></li>
              </ul> 
            </div>
            <div className="headerBottom">
              <input className="headerBottomButton" type="button" value="GET YOUR COPY NOW" />
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default Header;
