import './css/App.css'
const LocationInfo = ({ currentLocation }) => {
  return (
    <section className=" info-location w-screen p-2  flex flex-col items-center gap-2">
      <h2 className=' font-bold text-xl '>{currentLocation?.name}</h2>
      <ul className=" flex  sm:gap-10 mb-2 text-center ">
        <li className=' border-2 mr-1'>Type: {currentLocation?.type}</li>
        <li className=' border-2 mr-1'>Dimension: {currentLocation?.dimension}</li>
        <li className=' border-2'>Population: {currentLocation?.residents.length}</li>
      </ul>
    </section>
  );
};
export default LocationInfo;
