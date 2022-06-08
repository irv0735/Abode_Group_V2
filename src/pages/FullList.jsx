import { useContext } from 'react';

import { PropertiesContext } from '../contexts/properties.context';

import { PropertyCard } from "../components/index";

function FullList() {
  const { propertiesMap } = useContext(PropertiesContext);

  return (
    <div className="category">
      <h1 className="pageHeader">Properties</h1>
      <>
        <ul className="categoryListings">
          {
            Object.keys(propertiesMap).map(
              (title) => {
                const units = propertiesMap[title];
                return (
                units.map((unit) =>
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
                ))
              }
            )
          }
        </ul>
      </>
    </div>
  );
}

export default FullList;
