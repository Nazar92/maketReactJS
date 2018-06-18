import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './thirdSection.css';


const ContainerFluid  = (
  <Grid fluid={true}>

  </Grid>
);



class ThirdSection extends Component {
  render() {
    return (
   <div className="thirdSection">
    <div className="thirdSectionTop">
      <div className="contentConteiner">
        <Grid>
          {/* <div className="row"> */}
            <div className="thirdSectionTopTitle col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <img className="thirdSectionTopTitleIMG" alt="img" src="media/log.png" />
              <h3 className="thirdSectionTopTitleDECS">
              FULLY SUPORTED TEMPLATE</h3>
              <p className="thirdSectionLine"></p>
            
              <p className="thirdSectionTopDesc">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Suspendisse malesuada sodales risus, 
                a adipiscing lorem commodo vitae. 
                Ut semper semper lacus. Suspendisse 
                convallis vel tellus at consectetur. 
                Aenean risus arcu
              </p>
              <input className="thirdButton" type="button" value="READ MORE" />
            </div>
          {/* </div>  */}
        </Grid>
      </div>   
    </div>
    <div className="thirdSectionBottom">
      <div className="contentContainer">
        <Grid>
          {/* <div className="row"> */}
            <ul className="thirdSectionBottomList col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <li className="thirdSectionBottomItem col-lg-4 col-md-4 col-sm-4 col-xs-9">
                <img className="BottomItemIMG" alt="img" src="media/Rectangle 22.png" />
                <h3 className="BottomItemTitle">FULLY LAYERRED PSD</h3>
                <p className="BottomItemLine"></p>
                <p className="BottomItemDesc">
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                </p>
                <a href=""> Check this out > </a>
              </li>
              <li className="thirdSectionBottomItem col-lg-4 col-md-4 col-sm-4 col-xs-9">
                <img className="BottomItemIMG" alt="img" src="media/Rectangle 23.png" />
                <h3 className="BottomItemTitle">FULL COMPATIBILITY</h3>
                <p className="BottomItemLine"></p>
                <p className="BottomItemDesc">
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                </p>
                <a href=""> Check this out > </a>
              </li>
              <li className="thirdSectionBottomItem col-lg-4 col-md-4 col-sm-4 col-xs-9">
                <img className="BottomItemIMG" alt="img" src="media/4.png" />
                <h3 className="BottomItemTitle">VERY GRATE MODULES</h3>
                <p className="BottomItemLine"></p>
                <p className="BottomItemDesc">
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                </p>
                <a href=""> Check this out > </a>
              </li>
            </ul>
          {/* </div> */}
        </Grid>       
      </div>
    </div>
   </div>

    );
  }
}

export default ThirdSection;
