import { useContext } from "react";

import { PropertiesContext } from "../../contexts/properties.context";
// import { UserContext } from "../../contexts/user.context";

import { PropertyCard } from "../../components/index";

function SanJose() {
  const { propertiesMap } = useContext(PropertiesContext);
  // const { currentUser } = useContext(UserContext);

  return (
    <div className="category">
      <h1 className="pageHeader">Properties</h1>
      <div className="property-resize">
        <ul className="categoryListings ">
          {Object.keys(propertiesMap).filter((title) => title === 'central').map((unit) => {
            return (
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
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SanJose;