import {
  AreaProperties,
  Contact,
  Feature,
  Footer,
  Header,
  HomeFinder,
  RentPropertiesContainer,
  RentPropertiesFilter,
} from "../components";

const Homepage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center overflow-hidden">
      <Header hamburger={false} />
      <HomeFinder />
      <AreaProperties />
      <Feature />
      <RentPropertiesContainer />
      <RentPropertiesFilter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
