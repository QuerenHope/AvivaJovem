import './style.css'
import img1 from '../../assets/imgs/Mosaico01.jpg'
import img2 from '../../assets/imgs/Mosaico02.jpg'
import img3 from '../../assets/imgs/Mosaico03.jpg'
import img4 from '../../assets/imgs/Mosaico07.jpg'
import img5 from '../../assets/imgs/Mosaico08.jpg'
import img6 from '../../assets/imgs/Mosaico05.jpg'
import img7 from '../../assets/imgs/Mosaico10.jpg'
import img8 from '../../assets/imgs/Mosaico06.jpg'
import img9 from '../../assets/imgs/Mosaico04.jpg'
import img10 from '../../assets/imgs/Mosaico09.jpg'




const Galery = () => {

  return (
    <div className="galery">
        <div className="column column_1">
            <img src={img1} alt="foto avica" />
            <img src={img2} alt="" />
        </div>
        <div className="column column_2">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="column column_2">
            <img src={img6} alt="" />
            <img src={img9} alt="" />
        </div>
        <div className="column column_3">
            <img src={img7} alt="" />
            <img src={img8} alt="" />
        </div>
        <div className="column column_3">
            <img src={img10} alt="" />
            <img src={img5} alt="" />
        </div>
    </div>
  )
}

export default Galery
