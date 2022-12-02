import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "./CarouselMain.scss"
import sliderBgOne from "../../../assets/carousel/slider-bg1.jpg"
import sliderBgTwo from "../../../assets/carousel/slider-bg2.jpg"

function CarouselMain() {
  return (
    <div>
      <Carousel infiniteLoop autoPlay={true} showThumbs={false}>
        <div className="image">
          <img src={sliderBgOne} />
        </div>
        <div className="image">
          <img src={sliderBgTwo} />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselMain
