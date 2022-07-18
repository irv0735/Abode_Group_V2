import { Link } from "react-router-dom";
import bedIcon from "../../assets/svg/bedIcon.svg";
import bathtubIcon from "../../assets/svg/bathtubIcon.svg";
import pacificApartment from "../../assets/photos/pacific-apartment.jpg";

const propertyData = [
  {
    id: 1,
    name: "Pacific Two Bedroom",
    location: "Coco, Guanacaste Province, Costa Rica",
    guestCount: 3,
    bedrooms: 2,
    beds: 3,
    baths: 2,
    rate: 100,
    link: "https://www.airbnb.com/rooms/52828836?guests=1&adults=1&s=67&unique_share_id=f5a499d1-e395-460c-b1ee-c4ce2809fac0",
    photos: [
      {
        id: 1,
        imageUrl:
          "https://a0.muscache.com/im/pictures/ebbd0bba-94d1-49e1-b5e2-c815df6fe2bd.jpg?im_w=1200",
      },
      {
        id: 2,
        imageUrl:
          "https://a0.muscache.com/im/pictures/95e9f9cc-ce6f-4cf3-b265-8debcab8a75d.jpg?im_w=720",
      },
      {
        id: 3,
        imageUrl:
          "https://a0.muscache.com/im/pictures/89edb218-380e-446c-a449-81cf1634bfd2.jpg?im_w=720",
      },
    ],
  },
];

function Pacific() {
  return (
    <div className="category">
      <h1 className="pageHeader">Pacific Properties</h1>
      <div className="property-resize">
        <ul className="categoryListings">
          {propertyData.map((property) => (
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
        </ul>
      </div>
    </div>
  );
}

export default Pacific;
