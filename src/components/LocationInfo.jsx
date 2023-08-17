import './css/App.css'
const LocationInfo = ({ currentLocation }) => {
  return (
    <section className=" info-location w-screen  flex flex-col items-center gap-2">
      <h2 className=' font-bold text-xl '>{currentLocation?.name}</h2>
      <ul className=" flex  gap-10 mb-2">
        <li className=' border-2'>Type: {currentLocation?.type}</li>
        <li className=' border-2'>Dimension: {currentLocation?.dimension}</li>
        <li className=' border-2'>Population: {currentLocation?.residents.length}</li>
      </ul>
    </section>
  );
};
export default LocationInfo;
