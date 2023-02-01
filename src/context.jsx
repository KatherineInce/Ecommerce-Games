import {useState,useContext,createContext} from 'react'
import {getFirestore,doc,getDoc,collection,query,getDocs,where, addDoc} from 'firebase/firestore'
const AppContext = createContext([])
export const useContextData = () => useContext(AppContext)
const context = ({children}) => {
    const db = getFirestore()
    const collectionProducts = collection(db,'products')
    const collectionUsers = collection(db,'users')
    const collectionOrders = collection(db,'orders')


    const [loading,setLoading] = useState(false)
    const [completedOrderId, setCompletedOrderId] = useState()
    const [order,setOrder] = useState([])
    const [historyByUser,setHistoryByUser] = useState([])
    const [categoryData,setCaregoryData] = useState([])
    const [detailsData,setDetailsData] = useState({})
    const [validUser,setValidUser] = useState({
        id:'',
        username:'',
    })
    const [registerValidation,setRegisterValidation] = useState({
        isInvalid: false,
        message: ''
    })
    const [loginValidation,setLoginValidation] = useState({
        isInvalid: false,
        message: ''
    })
    const [orderValidation,setOrderValidation] = useState({
        isInvalid: false,
        message: 'No products added to the cart'
    })
    const getCategoryData = async (type) => {
        setLoading(true)
        const filterProducts = query(collectionProducts, where('type','==',type))
        getDocs(filterProducts)
        .then(data => 
            setCaregoryData(data.docs.map(item=> ({id:item.id,...item.data()})))    
        )
        .catch(error=> setCaregoryData([]))
        .finally(()=> setLoading(false))
    }
    const getDetailsById = async (id) =>{
        setLoading(true)
        const queryDoc = doc(db,'products',id)
        getDoc(queryDoc)
        .then(data=> setDetailsData(data.data()))
        .catch(error=> setDetailsData({}))
        .finally(()=> setLoading(false))
    }
    const setRegisterUser = (registerdata) => {
        setLoading(true)
        // console.log(registerdata)
        const filterUser = query(collectionUsers, where('user','==', registerdata.user))
        getDocs(filterUser)
        .then(data=>{
            if(data.docs.length > 0)
            {
                setValidUser({
                    id:'',
                    username:'',
                })
                setRegisterValidation({
                    isInvalid: true,
                    message: `the user ${registerdata.user} already exist, try another username`
                })
            }
            else
            {
                addDoc(collectionUsers,registerdata)
                .then(resp => {
                    setValidUser({
                        id: resp.id,
                        username: registerdata.user,
                    })
                    setRegisterValidation({
                        isInvalid: false,
                        message: ''
                    })
                })
                .catch(error=>{
                    setRegisterValidation({
                    isInvalid: true,
                    message: 'something went wrong try again later'
                    })
                    setValidUser({
                        id:'',
                        username:'',
                    })
                })
            }
        })
        .catch(error=>{
            setRegisterValidation({
                isInvalid: true,
                message: 'something went wrong try again later'
            })
            setValidUser({
                id:'',
                username:'',
            })
        })
        .finally(()=>setLoading(false))
    }
    const setLogin = (user,pass) => {
        setLoading(true)
        const filterUser = query(collectionUsers, where('user','==', user),where('pass','==', pass))
        getDocs(filterUser)
        .then(data=>{
            if(data.docs.length > 0)
            {
                setValidUser({
                    id: data.docs[0].id,
                    username: user,
                })
                setLoginValidation({
                    isInvalid: false,
                    message: ''
                })
            }
            else{
                setValidUser({
                    id: '',
                    username: '',
                })
                setLoginValidation({
                    isInvalid: true,
                    message: 'invalid credentials'
                })
            }
        })
        .catch(error=>{
            setValidUser({
                id: '',
                username: '',
            })
            setLoginValidation({
                isInvalid: true,
                message: 'something went wrong please try later again'
            })
        })
        .finally(()=>setLoading(false))
    }
    const addProduct = product => {
        setOrder(product)
    }
    const saveOrders = _ => {
        setLoading(true)
        addDoc(collectionOrders,{id:validUser.id,order:order})
        .then(resp=> 
           {
                setCompletedOrderId(resp.id)
                addProduct([])
                setOrderValidation({
                isInvalid: false,
                message: 'No products added to the cart'
                })
            }
        )
        .catch(error=>setOrderValidation({
            isInvalid: true,
            message: 'Something failed, try again later'
        }))
        .finally(()=>setLoading(false))
    }
    const getHistoryByUser = _ => {
        const filterOrdersByUser = query(collectionOrders, where("id","==",validUser.id))
        getDocs(filterOrdersByUser)
        .then(data => {
            setHistoryByUser(data.docs.map(item=>{
                return({
                    id: item.id,
                    data: item.data()
                })
            }))
        })
        .catch(error=>setHistoryByUser([]))
    }
  return (
    <AppContext.Provider value={{
        loading,
        categoryData,
        detailsData,
        loginValidation,
        registerValidation,
        validUser,
        order,
        orderValidation,
        historyByUser,
        completedOrderId,
        getHistoryByUser,
        addProduct,
        setLogin,
        setOrder,
        getCategoryData,
        getDetailsById,
        setRegisterUser,
        saveOrders,
        setCompletedOrderId
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default context