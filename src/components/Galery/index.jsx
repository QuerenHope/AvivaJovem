import './style.css'
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'
import img4 from '../../assets/imgs/img4.png'
import img5 from '../../assets/imgs/img5.png'
import img6 from '../../assets/imgs/img6.png'

const Galery = () => {

  return (
    <div className="galery">
        <div className="column column_1">
            <img src={img1} alt="foto avica" />
            <img src={img5} alt="" />
        </div>
        <div className="column column_2">
            <img src={img6} alt="" />
            <img src={img3} alt="" />
        </div>
        <div className="column column_2">
            <img src={img1} alt="" />
            <img src={img6} alt="" />
        </div>
    </div>
  )
}

export default Galery
