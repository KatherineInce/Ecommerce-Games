import {useEffect} from 'react'
import {useContextData} from '../context'
import HistoryCard from './HistoryCard'

import '../styles/History.css'
const History = () => {
    const { historyByUser, getHistoryByUser, validUser} = useContextData()
    useEffect(() => {
        getHistoryByUser()
    }, [])
    
  return (
    <div className='history'>
        <h4>Previous Order of <span>{validUser.username}</span></h4>
        {historyByUser.map((order,index)=>
        <div>
            <h5>Order {index+1}</h5>
            {order.order.map(item=>
                <HistoryCard data={item}/>
            )}
            
        </div>)}
    </div>
  )
}

export default History