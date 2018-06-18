import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './secondSection.css';

const ContainerFluid  = (
  <Grid fluid={true}>

  </Grid>
);


class SecondSection extends Component {
  render() {
    return (
    <div className="secondSection">
      <div className="secondSectionTop">
        <Grid>
          <div className="ContainerFluid">
            <div className="content-Conteiner">
              <ul className="secondSectionTopList col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <li className="secondSectionItem col-lg-4 col-md-4 col-sm-4 col-xs-9">
                  <img src="media/user-group copy.png" alt="img" />
                  <h3 className="secondItemTitle">PROFFESIONAL</h3>
                  <p className="line"></p>
                  <p className="secondItemDesc">
                    Lorem ipsum dolor sit amet consectetur elit. 
                  </p>
                </li>
                <li className="secondSectionItem col-lg-4 col-md-4 col-sm-4 col-xs-9">
                  <img src="media/heart.png" alt="img" />
                  <h3 className="secondItemTitle">AMATEURS</h3>
                  <p className="line"></p>
                  <p className="secondItemDesc">
                    Lorem ipsum dolor sit amet consectetur elit. 
                  </p>
                </li>
                <li className="secondSectionItem col-lg-4 col-md-4 col-sm-4 col-xs-9">
                  <img src="media/headset.png" alt="img" />
                  <h3 className="secondItemTitle">FOR EVERYONE</h3>
                  <p className="line"></p>
                  <p className="secondItemDesc">
                    Lorem ipsum dolor sit amet consectetur elit. 
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </div> 
      <div className="secondSectionBottom">
              <Grid>
                <ul className="secondSectionBottomList col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <li className="secondSectionBottomItem col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img src="media/Rectangle 2.png" alt="img" />
                    <h3 className="secondSectionBottomTitle">RESPONSIVE EMAIL TEMPLATE</h3>
                    <p className="BottomLine"></p>
                    <p className="secondBottomDesc">
                      Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit. 
                      Donec interdum mollis
                    </p>
                    <input className="secondBottomBut" type="button" value="READ MORE" />
                  </li>  
                  <li className="secondSectionBottomItem col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img src="media/Rectangle 3.png" alt="img" />
                    <h3 className="secondSectionBottomTitle">RESPONSIVE EMAIL TEMPLATE</h3>
                    <p className="BottomLine"></p>
                    <p className="secondBottomDesc">
                      Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit. 
                      Donec interdum mollis
                    </p>
                    <input className="secondBottomBut" type="button" value="READ MORE" />
                  </li> 
                </ul>
              </Grid>
            </div>
    </div>
        

    );
  }
}

export default SecondSection;
