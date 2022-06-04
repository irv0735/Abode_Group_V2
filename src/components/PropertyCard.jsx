// import Grid from '@mui/material/Grid';
import bedroomPhoto from "../assets/photos/bedroom.webp";
import { Link } from "react-router-dom";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function PropertyCard(props) {
  return (
    // <>
    // <Grid item xs={12} sm={6}>
    //   <Grid
    //     container
    //     direction='row'
    //     spacing={2}
    //     justifyContent='space-around'
    //     alignItems='center'
    //   >
    //     <Grid item xs={4}>

    //     </Grid>
    //     <Grid item xs={8}>
    //       <Grid container>
    //         <Grid item xs={12}>
    //           <h1>{props.name}</h1>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <h3>{props.location}</h3>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <h4>Sleeps: {props.guestCount}</h4>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <h4>Bedrooms: {props.bedrooms}</h4>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <h4>Beds: {props.beds}</h4>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <h4>Baths: {props.baths}</h4>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <h4>Rate: ${props.rate}/night</h4>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <a href={props.abblink} target='none'>View on AirBnB</a>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
    // </>
    <li className="categoryListing">
      <div
        // to={`/all-properties/${props}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={bedroomPhoto}
          // alt={listing.name}
          className="categoryListingImg"
          alt='main'
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{props.location}</p>
          <p className="categoryListingName">{props.name}</p>
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
          </div>
          <a href={props.abblink} target="none" className="atag">
            View on AirBnB
          </a>
          <Link to="/property-details">
            <p className="atag">View property details</p>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default PropertyCard;
