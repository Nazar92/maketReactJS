import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './footer.css';


const ContainerFluid  = (
  <Grid fluid={true}>

  </Grid>
);



class Footer extends Component {
  render() {
    return (
    <div className="footerSection">
      <div className="contentConteiner">
        <div className="footerTop">
          <div className="footerTopTitle">
            <img className="footerTopTitleIMG" alt="img" src="media/star.png" />
            <h4 className="footerTopTitleDESC"> THIS TEMPLATE WAS FEATURED ON </h4>
            <div className="footerTopLine"></div>
          </div>
        </div>
        <div className="footerBottom">
          <Grid>
            <ul className="footerBottomList col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <li className="footerBottomItem col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <img alt="img" src="media/TechCrunch.png" />
              </li>
              <li className="footerBottomItem col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <img alt="img" src="media/Promail.png" />
              </li>
              <li className="footerBottomItem col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <img alt="img" src="media/Mashable.png" />
              </li>
              <li className="footerBottomItem col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <img alt="img" src="media/atlaspix.png" />
              </li>
            </ul>
          </Grid>
        </div>
      </div>
      <div className="lastSection">
      <Grid>
        <div className="contentConteiner">
          <div className="lastSectionLeft">
            <p>Elenea © copyright 2013 - Unsubscribe here</p>
          </div>
          <div className="lastSectionRight">
            <ul className="lastSectionRightList">
              <li className="lastSectionRightItem">
              <img alt="img" src="media/gogle.png" />
              </li>
              <li className="lastSectionRightItem">
              <img alt="img" src="media/facebook.png" />
              </li>
              <li className="lastSectionRightItem">
              <img alt="img" src="media/twitter.png" />
              </li>
            </ul>
          </div>
        </div>
      </Grid>  
      </div>
    </div>
    
    

    );
  }
}

export default Footer;
