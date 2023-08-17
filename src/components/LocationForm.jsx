import './css/App.css'
const LocationForm = ({ handleSubmit }) => {
  return (
    <header className="imageHeader w-screen m-0">
      <div>
        <img className='image-logo' src="./images/Logo-min.png"/>
      </div>
      <form className=' flex justify-center' onSubmit={handleSubmit}>
        <input
          className=" box-input text-black"
          min={1}
          id="newLocation"
          max={126}
          placeholder="Type a location id ..."
          required
          type="number"
        />
        <button className='box-buttom  bg-green-400 '>Search</button>
      </form>
    </header>
  );
};
export default LocationForm;
