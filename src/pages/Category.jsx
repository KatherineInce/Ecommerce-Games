import {useParams,Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
//utils
import {getData} from '../utils/api'
//styles
import '../styles/Category.css'
//components
import Rating from '../components/Rating'
const Category = () => {
 const {type} = useParams()
 const [data,setData] = useState([])
 const getApiData = async _ =>{
    let apiData = await getData(type)
    setData(apiData)
 }
 useEffect(() => {
    getApiData()
 }, [type])
 
  return (
    <div className='category__wrapper'>
    {data && data.map(item=>
        <div className='customCard'>
            <h3>{item.name}</h3>
            <img src={item.img}/>
            <div className='rating'>
                Rated:
                <Rating qty={item.rated}/>
                {item.rated}/5
            </div>
            {/* <p>{item.description}</p> */}
            <Link to={`/${type}/${item.id}`}>Details</Link>
        </div>
    )}
        
    </div>
  )
}

export default Category