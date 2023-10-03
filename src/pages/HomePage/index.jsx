import About from "../../components/About"
import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import Counterdate from "../../components/Countdate"
import Galery from "../../components/Galery"
import Footer from "../../components/Footer"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Counterdate />
      <Galery />
      <Footer />
    </div>
  )
}

export default HomePage
