import axios from 'axios';

    
  const IdDePrueba = 3

 export const getItem = async () => {
        const getData = await axios.get("../../JSON/DB.json")
        const response = getData.data
        return (response.filter((e)=> e.id === parseInt(IdDePrueba)))
    }

    
export const getData= async () => {
        const dataAxios = await axios.get("../../JSON/DB.json")
        const response = dataAxios
        return (response.data)
       }