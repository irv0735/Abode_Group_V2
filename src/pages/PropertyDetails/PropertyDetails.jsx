import React from "react";
import ImageSlider from "../../components/Slider/ImageSlider";
import { SliderData } from "../../components/Slider/SliderData";
import PROPERTY_DATA from "../../property-data";

const unit = PROPERTY_DATA[0].units[0];

function PropertyDetails() {
  return (
    <main>
      <ImageSlider slides={unit.photos} />

      <div className="listingDetails" key={unit.id}>
        <p className="listingName">
          {unit.name} - ${unit.rate}
        </p>
        <p className="listingLocation">{unit.location}</p>

        <ul className="listingDetailsList">
          <li>{unit.bedrooms > 1 ? `${unit.beds} Bedrooms` : "1 Bedroom"}</li>
          <li>{unit.baths > 1 ? `${unit.baths} Bathrooms` : "1 Bathroom"}</li>
        </ul>

        <p className="listingLocationTitle">Calendar</p>

        {/*Calendar*/}
      </div>
    </main>
  );
}

export default PropertyDetails;
