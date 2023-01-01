import '../styles/HistoryCard.css'

const HistoryCard = ({data}) => {
  return (
    <div className='history-card'>
        <img src={data.img} alt="" />
        <label htmlFor="">{data.name}</label>
        <label htmlFor="">{data.qty}</label>
        <label htmlFor="">{data.price}</label>
    </div>
  )
}

export default HistoryCard