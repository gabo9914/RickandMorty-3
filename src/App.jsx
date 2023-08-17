import { useEffect, useState } from 'react';
import './components/css/App.css';
import { getRamdomDimension } from './utils/functionUtil';
import axios from 'axios';
import LocationForm from './components/LocationForm';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';


function App() {
  const [currentLocation, setCurrentLocation] = useState(null)
  const handleSubmit= (e)=>{
    e.preventDefault()
    const newLocation= e.target.newLocation.value

    fetchDimension(newLocation)
  }
  const fetchDimension= (idLocation)=>{
    const url= `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
    .get(url)
    .then(({data}) => setCurrentLocation(data))
    .catch((err) => console.log(err))
  }
  useEffect(() => {
    const ramdomDimension = getRamdomDimension(126);
    fetchDimension(ramdomDimension)
    }, [])
  

  return (
    <main className='min-h-screen w-screen text-white flex flex-col items-center gap-2 sm: main '>
      <LocationForm handleSubmit= {handleSubmit}/>
      <LocationInfo currentLocation = {currentLocation}/>
      <ResidentList residents = {currentLocation?.residents ?? []}/>
    </main>
  )
}

export default App
