import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { SignIn, SanJose, Pacific, Caribbean, Guide } from "./pages";
import FullList from "./pages/FullList/FullList";
import Navigation from "./pages/Navigation/Navigation";
import Landing from "./pages/Landing/Landing";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";

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
          <Route path="/guide" element={<Guide />} />
          <Route path="/property-details" element={<PropertyDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
