import ImageSlider from "../../components/Slider/ImageSlider";
import bedIcon from "../../assets/svg/bedIcon.svg";
import bathtubIcon from "../../assets/svg/bathtubIcon.svg";
import "./propertyDetails.css";
import caribbeanApartment from "../../assets/photos/caribbean-apartment.jpg";
import caribbeanApartmentLiv from "../../assets/photos/caribbean-aparment-liv.avif";
import caribbeanApartmentExt from "../../assets/photos/caribbean-apartment-ext.jpg";

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
        imageUrl: caribbeanApartment,
      },
      {
        id: 2,
        imageUrl: caribbeanApartmentLiv,
      },
      {
        id: 3,
        imageUrl: caribbeanApartmentExt,
      },
    ],
  },
];

function PropertyDetailsCaribbean() {
  return (
    <>
      {propertyData.map((property) => (
        <div>
          <ImageSlider slides={property.photos} />
          <div
            className="card-body card w-96 glass property-details-info"
            key={property.id}
          >
            <div className="categoryListingDetails">
              <h2 class="card-title">{property.name} </h2>
              <p>{property.location}</p>
              <p className="categoryListingPrice">${property.rate} per night</p>
              <div className="categoryListingInfoDiv">
                <img src={bedIcon} alt="Bed" />
                <p className="categoryListingInfoText">
                  {property.bedrooms > 1
                    ? `${property.beds} Bedrooms`
                    : "1 Bedroom"}
                </p>
                <img src={bathtubIcon} alt="Bath" />
                <p className="categoryListingInfoText">
                  {property.baths > 1
                    ? `${property.baths} Bathrooms`
                    : "1 Bathroom"}
                </p>
                <div class="card-actions justify-end">
                  <a
                    href={property.abblink}
                    class="btn btn-primary"
                    target="none"
                  >
                    Property Pending
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PropertyDetailsCaribbean;
