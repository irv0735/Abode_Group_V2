import { useContext } from "react";

import { PropertiesContext } from "../../contexts/properties.context";
// import { UserContext } from "../../contexts/user.context";

import { PropertyCard } from "../../components/index";
import "./full-list.css";

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
        </ul>
      </div>
    </div>
  );
}

export default FullList;
