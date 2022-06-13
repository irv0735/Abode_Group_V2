import React from "react";
import ImageSlider from "../../components/Slider/Slider";
import { SliderData } from "../../components/Slider/SliderData";

const propertyData = [
  {
    id: 1,
    name: "Perfectly Located 2 Story Condo just for YOU!",
    location: "San Rafael de Escazú, San José Province, Costa Rica",
    guestCount: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1.5,
    rate: 87,
    link: "https://www.airbnb.com/rooms/52828836?guests=1&adults=1&s=67&unique_share_id=f5a499d1-e395-460c-b1ee-c4ce2809fac0",
  },
];

function PropertyDetails() {
  return (
    <main>
      <ImageSlider slides={SliderData} />

      {propertyData.map((property) => (
        <div className="listingDetails" key={property.id}>
          <p className="listingName">
            {property.name} - ${property.rate}
          </p>
          <p className="listingLocation">{property.location}</p>

          <ul className="listingDetailsList">
            <li>
              {property.bedrooms > 1
                ? `${property.beds} Bedrooms`
                : "1 Bedroom"}
            </li>
            <li>
              {property.baths > 1
                ? `${property.baths} Bathrooms`
                : "1 Bathroom"}
            </li>
          </ul>

          <p className="listingLocationTitle">Calendar</p>

          {/*Calendar*/}
        </div>
      ))}
    </main>
  );
}

export default PropertyDetails;
