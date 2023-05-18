import Slider from '../component/Slider'
import NavHeader from '../component/NavHeader'
import ProductCard from '../component/ProductCard'
import Video from '../component/Video'
import Footer from '../component/Footer'

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