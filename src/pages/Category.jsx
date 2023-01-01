import {useParams,Link} from 'react-router-dom'
import {useEffect,useState} from 'react'

//styles
import '../styles/Category.css'
//components
import Rating from '../components/Rating'
import Loading from '../components/Loading'

//context
import {useContextData} from '../context'

const Category = () => {
 const {loading,categoryData,getCategoryData} = useContextData()
 const {type} = useParams()

 useEffect(() => {
    getCategoryData(type)
 }, [type])
 
  return (
    <>
    {loading ? <Loading/>:

      <div className='category__wrapper'>
      {categoryData && categoryData.map(item=>
        <div className='customCard' key={item.id}>
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
    }
    </>
    
  )
}

export default Category