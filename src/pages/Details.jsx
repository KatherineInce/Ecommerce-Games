import {useEffect, useState} from 'react'
import {useParams,Link} from 'react-router-dom'

//styles
import '../styles/Details.css'
//components
import Rating from '../components/Rating'
import Loading from '../components/Loading'
import Button from '../components/Button'
import Input from '../components/Input'

//context
import {useContextData} from '../context'

const Details = () => {
  const {loading,order,validUser,detailsData,getDetailsById,addProduct} =  useContextData()
  const {id} = useParams()
  const [qty,setQty] = useState(1)
  const hideModal = _ =>{
    document.querySelector('#cartModal').modal('hide')
  }
  const addToCart = () => {
    if(qty > 0)
    {    
        let productAdded = order.filter(item=> item.id === id)
        // console.log(productAdded)
        if(productAdded.length > 0)
        {
            addProduct(order.map(item => {
                if(item.id === id)
                {
                    return {
                        ...item,
                        qty: parseInt(item.qty) + parseInt(qty)
                    }
                }
                else
                {
                    return {...item}
                }
            })) 
        }
        else{
            addProduct([...order,{
                id:id,
                img: detailsData.img,
                name: detailsData.name,
                price: detailsData.price,
                qty:qty
            }])
        }
    }
  }
  useEffect(() => {
    getDetailsById(id)
  }, [])
  
  return (
    <div className='wrapper'>
    {loading ? <Loading/>:
    <>
    <div className='detail__header'>
            <div className='detail__header__img'>
                <img src={detailsData.img} alt="" />
                <div className='detail__header__price'>
                    <span>{detailsData.price > 0 ? `${detailsData.price} USD` : 'FREE'}</span>
                    <Button target='#cartModal'>Buy now</Button>
                    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adding To Cart</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                              validUser.id ? <Input classCustom="number" text="Select quantity of this product" type="number" placeholder="qty" value={qty} action={setQty}/>
                                :
                              <div>You must login first <Link onClick={hideModal} to="/user">go to login</Link></div>
                            }
                        </div>
                        {validUser.id && <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={addToCart} data-bs-dismiss="modal">Add Cart</button>
                        </div>}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='detail__header__content'>
                <h3>{detailsData.name}</h3>
                <Rating qty={detailsData.rated}/>
                <hr />
                <h4>Synopsis</h4>
                <p>{detailsData.description}</p>
                {detailsData.platforms && detailsData.platforms.length > 0 && 
                <div>
                    <h4>Platforms</h4>
                    <ul>{detailsData.platforms.map(platform=>
                        <li>{platform}</li>
                    )}</ul>
                </div>
                }
            </div>
           { detailsData.trailer ?
            <iframe
                src={detailsData.trailer}>
            </iframe>
            :<div className='detail__header__novideo'>No Video Available</div>}
        </div>
        <div className='detail__body'>
            <h4>You would also like</h4>
            <div>
                {detailsData.similar &&
                    detailsData.similar.map(item=>
                        <img src={item} alt="" />
                    )
                }
            </div>
        </div>
    </>
    }
        
    </div>
  )
}

export default Details