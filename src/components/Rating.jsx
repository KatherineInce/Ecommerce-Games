//icons
import { IoIosStarOutline,IoIosStar } from "react-icons/io";

const Rating = ({qty}) => {
  return (
    <div>
        {[1,2,3,4,5].map(index => 
            index <= qty ?
            <IoIosStar style={{color: 'rgb(233, 233, 0)', fontSize:'25px'}}/>
            :
            <IoIosStarOutline style={{color: 'yellow', fontSize:'25px'}}/>
        )}
    </div>
  )
}

export default Rating