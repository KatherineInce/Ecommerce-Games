import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
//utils
import {getDetailsById} from '../utils/api'
//styles
import '../styles/Details.css'
//components
import Rating from '../components/Rating'
const Details = () => {
  const [detail,setDetail] = useState({})
  const {type,id} = useParams()
  const getApiDetails = async _ => {
    let response = await getDetailsById(type,id)
    setDetail(response)
}
  useEffect(() => {
    getApiDetails()
  }, [])
  
  return (
    <div className='wrapper'>
        <div className='detail__header'>
            <div className='detail__header__img'>
                <img src={detail.img} alt="" />
                <div className='detail__header__price'>
                    <span>{detail.price > 0 ? `${detail.price} USD` : 'FREE'}</span>
                    <button>Buy now</button>
                </div>
            </div>
            <div className='detail__header__content'>
                <h3>{detail.name}</h3>
                <Rating qty={detail.rated}/>
                <hr />
                <h4>Synopsis</h4>
                <p>{detail.description}</p>
                {detail.platforms && detail.platforms.length > 0 && 
                <div>
                    <h4>Platforms</h4>
                    <ul>{detail.platforms.map(platform=>
                        <li>{platform}</li>
                    )}</ul>
                </div>
                }
            </div>
           { detail.trailer ?
            <iframe
                src={detail.trailer}>
            </iframe>
            :<div className='detail__header__novideo'>No Video Available</div>}
        </div>
        <div className='detail__body'>
            <h4>Also would like you</h4>
            <div>
                {detail.similar &&
                    detail.similar.map(item=>
                        <img src={item} alt="" />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Details