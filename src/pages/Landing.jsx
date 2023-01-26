import ItemListContainer from '../components/ItemListContainer'
import {useContextData} from '../context'

const Landing = () => {
  const {validUser} = useContextData()

  return (
    <div className='wrapper'>
      <ItemListContainer greetings={validUser.username ? validUser.username : 'Guest'}/>
    </div>
  )
}

export default Landing