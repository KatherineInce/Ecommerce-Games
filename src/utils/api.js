const getData = async (type) => {
   let url = `${import.meta.env.VITE_BASEURL}data.json`
   let response = await fetch(url)
   response = await response.json()
   return response[type]
}
const getDetailsById = async (type,id) =>{
  console.log()
   let datos = await getData(type)
   datos = datos.filter(data=> data.id.toString() === id)
   return datos[0]
}
export {getData,getDetailsById}