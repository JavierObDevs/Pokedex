import FormTrainer from "../components/shared/FormTrainer";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex justify-center flex-wrap content-evenly">
      <video muted loop autoPlay className="fixed z-0">
        <source src="./wallpaper.mp4" />
      </video>
      <h1 className="z-10 flex font-bold text-9xl justify-center content-center w-screen">
        <img className="w-80 -mt-8" src="./Logo.svg" alt="" />
      </h1>
      <h2 className="z-10 -mt-28 flex font-bold justify-center items-center flex-col w-screen text-2xl ml-20 mr-20 text-blue-950 ">
        Hi Trainer, To see the Pokemon's information, tell me your trainer name
      </h2>
      <FormTrainer/>
    </div>
  );
};

export default HomePage;
