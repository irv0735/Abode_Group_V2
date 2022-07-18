import React from "react";
import ImageSlider from "../../components/Slider/ImageSlider";
import PROPERTY_DATA from "../../property-data";
import bedIcon from "../../assets/svg/bedIcon.svg";
import bathtubIcon from "../../assets/svg/bathtubIcon.svg";
import "./propertyDetails.css";

const unit = PROPERTY_DATA[0].units[0];

function PropertyDetails() {
  return (
    <div>
      <ImageSlider slides={unit.photos} />
      <div className="property-details-container">
        <div
          className="card-body card w-96 glass property-details-info"
          key={unit.id}
        >
          <div className="categoryListingDetails">
            <h2 class="card-title">{unit.name} </h2>
            <p>{unit.location}</p>
            <p className="categoryListingPrice">${unit.rate} per night</p>
            <div className="categoryListingInfoDiv">
              <img src={bedIcon} alt="Bed" />
              <p className="categoryListingInfoText">
                {unit.bedrooms > 1 ? `${unit.beds} Bedrooms` : "1 Bedroom"}
              </p>
              <img src={bathtubIcon} alt="Bath" />
              <p className="categoryListingInfoText">
                {unit.baths > 1 ? `${unit.baths} Bathrooms` : "1 Bathroom"}
              </p>
              <div class="card-actions justify-end">
                <a href={unit.abblink} class="btn btn-primary" target="none">
                  View On AirBnB
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="property-paragraph w-96 glass">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero labore
          quis veniam quae hic, animi quaerat praesentium soluta et ex sapiente
          sit inventore expedita pariatur, assumenda quia repudiandae facere ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim
          nisi dolores consequatur quae quo aliquid quia, numquam deserunt totam
          esse neque inventore sint vero quasi architecto, consequuntur
          distinctio! Vel. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Officia rerum, cupiditate similique suscipit mollitia quisquam
          obcaecati ut sit possimus unde repellendus voluptatum dolore pariatur
          qui dolorem, explicabo odit porro dolorum?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rem neque sint explicabo architecto nam
          autem necessitatibus, magni earum natus ullam. Dignissimos dolores
          sint corrupti nihil, inventore non enim quia saepe.
        </p>
      </div>
    </div>
  );
}

export default PropertyDetails;
