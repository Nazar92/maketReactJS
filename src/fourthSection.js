import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './fourthSection.css';


const ContainerFluid  = (
  <Grid fluid={true}>

  </Grid>
);



class FourthSection extends Component {
  render() {
    return (
   <div className="fourthSection">
    <div className="fourthSectionTop">
      <div className="contentConteiner">
        <Grid>
          <ul className="fourthSectionTopList col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <li className="fourthSectionTopItem col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="fourthSectionTopTitle ">
              <img className="fourthSectionTopTitleIMG" alt="img" src="media/fly.png" />
              <h3 className="fourthSectionTopTitleDECS">
                SEND IT NOW
              </h3>
              <p className="fourthSectionLine"></p>
            
              <p className="fourthSectionTopDesc">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Suspendisse malesuada sodales risus, 
                a adipiscing lorem. 
              </p>
              <input className="fourthButton" type="button" value="READ MORE" />
              </div>
            </li>
            <li className="fourthSectionTopItem col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="fourthSectionTopTitle ">
              <img className="fourthSectionTopTitleIMG" alt="img" src="media/pen.png" />
              <h3 className="fourthSectionTopTitleDECS">
                CERY NICE TO SEE
              </h3>
              <p className="fourthSectionLine"></p>
            
              <p className="fourthSectionTopDesc">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Suspendisse malesuada sodales risus, 
                a adipiscing lorem. 
              </p>
              <input className="fourthButton" type="button" value="READ MORE" />
              </div>
            </li>
          </ul>
        </Grid>
      </div>   
    </div>
    <div className="fourthSectionBottom ">
      <div className="contentConteiner">
      <Grid>
        <div className="fourthSectionBottomLeft col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img src="media/Rectangle 25.png" alt="img" />
        </div>
        <div className="fourthSectionBottomRight col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="fourthSectionBottomTitle ">
            <h3 className="fourthSectionTopTitleDECS">
              SEND IT NOW
            </h3>
            <p className="fourthBottomSectionLine"></p>
            <p className="fourthSectionBottomDesc">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Suspendisse malesuada sodales risus, 
              a adipiscing lorem. 
            </p>
            <input className="fourthButton" type="button" value="READ MORE" />
          </div>
        </div>

      </Grid>
      </div>
    </div>
   </div>

    );
  }
}

export default FourthSection;
