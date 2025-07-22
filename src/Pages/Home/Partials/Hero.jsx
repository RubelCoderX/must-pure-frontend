import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/Images/banner1.jpg";
import img2 from "../../../assets/Images/banner-2.jpg";
import img3 from "../../../assets/Images/banner3.jpg";

export default function Hero() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
}
