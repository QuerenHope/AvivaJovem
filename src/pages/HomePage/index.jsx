import About from "../../components/About"
import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import Counterdate from "../../components/Countdate"
import Galery from "../../components/Galery"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Counterdate />
      <Galery />
    </div>
  )
}

export default HomePage
