import Slider from '../component/Slider'
import NavHeader from '../component/NavHeader'
import ProductCard from '../component/ProductCard'
import Video from '../component/Video'

const HomePage = () => {
  return (
    <div>
        <NavHeader/>
        <Slider/>
        <ProductCard/>
        <Video/>
    </div>
  )
}

export default HomePage