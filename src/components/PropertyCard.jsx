// import Grid from '@mui/material/Grid';
import bedroomPhoto from "../assets/photos/bedroom.webp";
import { Link } from "react-router-dom";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function PropertyCard(props) {
  return (
    <div class="card w-96 glass">
      <figure>
        <img src={bedroomPhoto} alt="green iguana" />
      </figure>
      <div class="card-body">
        <div className="categoryListingDetails">
          <h2 class="card-title">{props.name}</h2>
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
            <div class="card-actions justify-end">
              <Link to={props.abblink} class="btn btn-primary">
                View On AirBnB
              </Link>
              <Link to="/property-details" class="btn btn-primary">
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
