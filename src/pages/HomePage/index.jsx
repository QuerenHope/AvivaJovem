import About from "../../components/About"
import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import Counterdate from "../../components/Countdate"
import Galery from "../../components/Galery"
import Footer from "../../components/Footer"
import Form from "../../components/Form"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Counterdate />
      <About />
      <Galery />
      <Form />
      <About />
      <Footer />
    </div>
  )
}

export default HomePage
