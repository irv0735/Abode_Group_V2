import { Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import {
  Navigation,
  Landing,
  Pacific,
  SanJose,
  Caribbean,
  FullList,
  Guide,
  PropertyDetails,
} from "./pages";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Landing />} />
          <Route path="/pacific" element={<Pacific />} />
          <Route path="/sanjose" element={<SanJose />} />
          <Route path="/caribbean" element={<Caribbean />} />
          <Route path="/all-properties" element={<FullList />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/property-details" element={<PropertyDetails />} />
        </Route>
        <Footer />
      </Routes>
    </>
  )     
}

export default App;
