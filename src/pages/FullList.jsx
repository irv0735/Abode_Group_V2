import { PropertyCard } from "../components/index";

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

function FullList() {
  return (
    // <div>
    //   <br></br>
    //   <br></br>
    //   <br></br>
    //   <Grid
    //     container
    //     direction='row'
    //     spacing={2}
    //     justifyContent='space-around'
    //     alignItems='center'
    //   >
    //   {
    //     propertyData.map((property) => (
    //       <PropertyCard
    //         key={property.id}
    //         name={property.name}
    //         location={property.location}
    //         guestCount={property.guestCount}
    //         bedrooms={property.bedrooms}
    //         beds={property.beds}
    //         baths={property.baths}
    //         rate={property.rate}
    //         abblink={property.link}
    //       />
    //     ))
    //   }
    //   </Grid>
    // </div>
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>
      <>
        <main>
          <ul className="categoryListings">
            {propertyData.map((property) => (
              <PropertyCard
                key={property.id}
                name={property.name}
                location={property.location}
                guestCount={property.guestCount}
                bedrooms={property.bedrooms}
                beds={property.beds}
                baths={property.baths}
                rate={property.rate}
                abblink={property.link}
              />
            ))}
          </ul>
        </main>
      </>
    </div>
  );
}

export default FullList;
