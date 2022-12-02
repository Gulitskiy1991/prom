import Header from "./components/header/Header"
import CarouselMain from "./components/carousel/carousel-main/CarouselMain"
import CarouselProducts from "./components/carousel/carousel-products/CarouselProducts"
import "./App.scss"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <CarouselMain />
      <CarouselProducts />
    </div>
  )
}

export default App
