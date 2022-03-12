import Navbar from '../components/Navbar'
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] m1-[1rem] py-[3rem] absolute top-10 left-10 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`
}

export default function Home(){
  return (
  <div className={style.wrapper}>
    {/*navbar*/}
    <Navbar />
    <div className ={style.main}>
      {/*map*/}
      <Map />
    </div>
    
    <div className={style.rideRequestContainer}>
      <div className={style.rideRequest}>
        {/* location selector */}
        <LocationSelector />
        {/* confirm ride */}
      </div>
    </div>

  </div>)
}