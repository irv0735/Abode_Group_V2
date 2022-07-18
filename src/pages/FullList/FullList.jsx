import { useContext } from "react";

import { PropertiesContext } from "../../contexts/properties.context";
// import { UserContext } from "../../contexts/user.context";

import { PropertyCard } from "../../components/index";
import "./full-list.css";
import caribbeanApartment from "../../assets/photos/caribbean-apartment.jpg";
import pacificApartment from "../../assets/photos/pacific-apartment.jpg";
import { Link } from "react-router-dom";
import bedIcon from "../../assets/svg/bedIcon.svg";
import bathtubIcon from "../../assets/svg/bathtubIcon.svg";

const propertyDataCaribbean = [
  {
    id: 1,
    name: "Gorgeous three bedroom apartment",
    location: "Limon, Limón Province, Costa Rica",
    guestCount: 3,
    bedrooms: 3,
    beds: 3,
    baths: 3,
    rate: 150,
    link: "https://www.airbnb.com/rooms/52828836?guests=1&adults=1&s=67&unique_share_id=f5a499d1-e395-460c-b1ee-c4ce2809fac0",
    photos: [
      {
        id: 1,
        imageUrl: caribbeanApartment,
      },
    ],
  },
];
const propertyDataPacific = [
  {
    id: 1,
    name: "Pacific Two Bedroom",
    location: "Coco, Guanacaste Province, Costa Rica",
    guestCount: 3,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    rate: 100,
    link: "https://www.airbnb.com/rooms/52828836?guests=1&adults=1&s=67&unique_share_id=f5a499d1-e395-460c-b1ee-c4ce2809fac0",
    photos: [
      {
        id: 1,
        imageUrl: pacificApartment,
      },
    ],
  },
];

function FullList() {
  const { propertiesMap } = useContext(PropertiesContext);
  // const { currentUser } = useContext(UserContext);

  return (
    <div className="category">
      <h1 className="pageHeader">Properties</h1>
      <div className="property-resize">
        <ul className="categoryListings ">
          {Object.keys(propertiesMap).map((title) => {
            const units = propertiesMap[title];
            return units.map((unit) => (
              <PropertyCard
                key={unit.id}
                name={unit.name}
                location={unit.location}
                guestCount={unit.guestCount}
                bedrooms={unit.bedrooms}
                beds={unit.beds}
                baths={unit.baths}
                rate={unit.rate}
                abblink={unit.link}
                photos={unit.photos}
              />
            ));
          })}
          {propertyDataPacific.map((property) => (
            <div className="card w-96 glass">
              <figure>
                <img
                  src={pacificApartment}
                  alt="green iguana"
                  className="card-photo"
                />
              </figure>
              <div className="card-body">
                <div className="categoryListingDetails">
                  <h2 className="card-title">{property.name}</h2>
                  <p>{property.location}</p>
                  <p className="categoryListingPrice">
                    ${property.rate} per night
                  </p>
                  <div className="categoryListingInfoDiv">
                    <img src={bedIcon} alt="Bed" />
                    <p className="categoryListingInfoText">
                      {property.beds > 1
                        ? `${property.beds} Bedrooms`
                        : "1 Bedroom"}
                    </p>
                    <img src={bathtubIcon} alt="Bath" />
                    <p className="categoryListingInfoText">
                      {property.baths > 1
                        ? `${property.baths} Bathrooms`
                        : "1 Bathroom"}
                    </p>
                    <div className="card-actions justify-end">
                      <a
                        href={property.abblink}
                        className="btn btn-primary"
                        target="none"
                      >
                        Property Pending
                      </a>
                      <Link
                        to="/property-details-pacific"
                        className="btn btn-primary"
                      >
                        View property details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {propertyDataCaribbean.map((property) => (
            <div className="card w-96 glass">
              <figure>
                <img
                  src={caribbeanApartment}
                  alt="green iguana"
                  className="card-photo"
                />
              </figure>
              <div className="card-body">
                <div className="categoryListingDetails">
                  <h2 className="card-title">{property.name}</h2>
                  <p>{property.location}</p>
                  <p className="categoryListingPrice">
                    ${property.rate} per night
                  </p>
                  <div className="categoryListingInfoDiv">
                    <img src={bedIcon} alt="Bed" />
                    <p className="categoryListingInfoText">
                      {property.beds > 1
                        ? `${property.beds} Bedrooms`
                        : "1 Bedroom"}
                    </p>
                    <img src={bathtubIcon} alt="Bath" />
                    <p className="categoryListingInfoText">
                      {property.baths > 1
                        ? `${property.baths} Bathrooms`
                        : "1 Bathroom"}
                    </p>
                    <div className="card-actions justify-end">
                      <a
                        href={property.abblink}
                        className="btn btn-primary"
                        target="none"
                      >
                        Property Pending
                      </a>
                      <Link
                        to="/property-details-caribbean"
                        className="btn btn-primary"
                      >
                        View property details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FullList;
