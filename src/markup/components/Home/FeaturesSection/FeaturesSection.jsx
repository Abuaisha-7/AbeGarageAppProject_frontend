import React from "react";
// import image
import img3 from '../../../../assets/images/misc/image-33.png';

const FeaturesSection = () => {
  return (
    <div>
      <section className="features-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-container">
                <h2>
                  Quality Service And <br /> Customer Satisfaction !!
                </h2>
                <div className="text">
                  We utilize the most recent symptomatic gear to ensure your
                  vehicle is fixed or adjusted appropriately and in an opportune
                  manner. We are an individual from Professional Auto Service, a
                  first className execution arrange, where free assistance
                  offices share shared objectives of being world-className car
                  administration focuses.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
                <img src={img3} alt="" style={{marginTop: '30px'}} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
