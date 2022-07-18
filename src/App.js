import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { SignIn, SanJose, Pacific, Caribbean } from "./pages";
import FullList from "./pages/FullList/FullList";
import Navigation from "./pages/Navigation/Navigation";
import Landing from "./pages/Landing/Landing";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import PropertyDetailsPacific from "./pages/PropertyDetails/PropertyDetailsPacific.jsx";
import PropertyDetailsCaribbean from "./pages/PropertyDetails/PropertyDetailsCaribbean";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Landing />} />
          <Route path="/admin" element={<SignIn />} />
          <Route path="/pacific" element={<Pacific />} />
          <Route path="/sanjose" element={<SanJose />} />
          <Route path="/caribbean" element={<Caribbean />} />
          <Route path="/all-properties" element={<FullList />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route
            path="/property-details-pacific"
            element={<PropertyDetailsPacific />}
          />
          <Route
            path="/property-details-caribbean"
            element={<PropertyDetailsCaribbean />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
