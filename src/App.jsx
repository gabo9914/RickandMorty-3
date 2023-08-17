import { useEffect, useState } from 'react'
import './components/css/App.css'
import { getRamdomDimension } from './utils/functionUtil'
import axios from 'axios'
import LocationForm from './components/locationForm'
import LocationInfo from './components/locationInfo'
import ResidentList from './components/residentList'
import Pagination from './components/Pagination'

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
    <main className='main flex flex-col items-center gap-2 min-h-screen text-white'>
      <LocationForm handleSubmit= {handleSubmit}/>
      <LocationInfo currentLocation = {currentLocation}/>
      <ResidentList residents = {currentLocation?.residents ?? []}/>
    </main>
  )
}

export default App
