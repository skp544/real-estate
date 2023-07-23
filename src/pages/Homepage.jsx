import { AreaProperties, Feature, Header, HomeFinder } from "../components";

const Homepage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center overflow-hidden">
      <Header hamburger={false} />
      <HomeFinder />
      <AreaProperties />
      <Feature />
    </div>
  );
};

export default Homepage;
