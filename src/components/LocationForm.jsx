import './css/App.css'
const LocationForm = ({ handleSubmit }) => {
  return (
    <header className=" flex flex-col  imageHeader w-screen m-0">
        <img className='image-logo sm: w-screen' src="./images/Logo-min.png"/>
      <form className=' flex justify-center' onSubmit={handleSubmit}>
        <input
          className=" w-60 text-black sm:box-input"
          min={1}
          id="newLocation"
          max={126}
          placeholder="Type a location id ..."
          required
          type="number"
        />
        <button className=' w-35 bg-green-400 sm:box-buttom'>Search</button>
      </form>
    </header>
  );
};
export default LocationForm;
