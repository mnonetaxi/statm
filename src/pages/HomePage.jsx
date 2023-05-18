import Slider from '../components/Slider'
import NavHeader from '../components/NavHeader'
import ProductCard from '../components/ProductCard'
import Video from '../components/Video'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <NavHeader/>
        <Slider/>
        <ProductCard/>
        <Video/>
        <Footer/>
    </div>
  )
}

export default HomePage