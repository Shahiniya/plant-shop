import img1 from '../../../../../assets/home-plants/img1.png'
import img2 from '../../../../../assets/home-plants/img2.png'
import img3 from '../../../../../assets/home-plants/img3.png'
import img4 from '../../../../../assets/home-plants/img4.png'
import img5 from '../../../../../assets/home-plants/img5.png'
import img6 from '../../../../../assets/home-plants/img6.png'
import img7 from '../../../../../assets/home-plants/img7.png'
import img8 from '../../../../../assets/home-plants/img8.png'
import img9 from '../../../../../assets/home-plants/img9.png'
import {useState} from 'react'
import './style.css'

const photoPlants =[
  {
    name:'Barberton Daisy',
    price:'199$',
    img: img1,
  },

      {
        name:'Barberton Daisy',
        price:'199$',
        img: img2,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img3,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img1,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img4,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img5,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img6,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img7,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img8,
      },
      {
        name:'Barberton Daisy',
        price:'199$',
        img: img9,
      },

]

const HomePlantsSection = () => {

  const [cards] = useState(photoPlants)

  return (
    <div>
      <div className="container2" >
<div className="categories" >
<div className="categoryBox" >
  <h1>House Plants</h1>
</div>
<div className="categorySale" ></div>
</div>
<div className="card-container" >
<div className="card" >
 {
  cards.map((card) => {
    return(
    <div key={card.id} >
    <img src={card.img} alt='plantPhoto' />
    <div>
    <h6>{card.name}</h6>
    <h5>{card.price}</h5>
    </div>
    
    </div>
   
   ) })
 }
</div>

</div>
      </div>
    </div>
  )
}

export default HomePlantsSection