import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Img/pexels-abby-chung-371167-1106468.jpg";
import img2 from "../Img/pexels-nitin-arya-386173-1029141.jpg";
import img3 from "../Img/pexels-pixabay-301920.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className='relative top-24 ' id='home'>
        <Carousel responsive={responsive}>
          <div className=''>
            <img src={img3} className='w-full h-96' alt='' />
          </div>
          <div>
            <img src={img2} className='w-full h-96' alt='' />
          </div>
          <div>
            <img src={img1} className='w-full h-96' alt='' />
          </div>
        </Carousel>
        <NavLink to='/test'>
          <button className='px2 py-2 bg-blue-500 text-white rounded-lg mx-2 '>
            Start Now
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
