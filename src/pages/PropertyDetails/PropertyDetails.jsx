import React from "react";
import ImageSlider from "../../components/Slider/ImageSlider";
import { SliderData } from "../../components/Slider/SliderData";
import PROPERTY_DATA from "../../property-data";
import bedIcon from "../../assets/svg/bedIcon.svg";
import bathtubIcon from "../../assets/svg/bathtubIcon.svg";
import "./propertyDetails.css";

const unit = PROPERTY_DATA[0].units[0];

function PropertyDetails() {
  return (
    <div>
      <ImageSlider slides={unit.photos} />
      <div
        class="card-body card w-96 glass property-details-info"
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
              <a href={unit.abblink} class="btn btn-primary">
                View On AirBnB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
