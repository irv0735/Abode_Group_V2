// import Grid from '@mui/material/Grid';
// import bedroomPhoto from "../../assets/photos/bedroom.webp";
import { Link } from "react-router-dom";
import bedIcon from "../../assets/svg/bedIcon.svg";
import bathtubIcon from "../../assets/svg/bathtubIcon.svg";

function PropertyCard(props) {
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={props.photos[0].imageUrl} alt="green iguana" className="card-photo"/>
      </figure>
      <div className="card-body">
        <div className="categoryListingDetails">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.location}</p>
          <p className="categoryListingPrice">${props.rate} per night</p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="Bed" />
            <p className="categoryListingInfoText">
              {props.beds > 1 ? `${props.beds} Bedrooms` : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="Bath" />
            <p className="categoryListingInfoText">
              {props.baths > 1 ? `${props.baths} Bathrooms` : "1 Bathroom"}
            </p>
            <div className="card-actions justify-end">
              <a href={props.abblink} className="btn btn-primary" target="none">
                View On AirBnB
              </a>
              <Link to="/property-details" className="btn btn-primary">
                View property details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
