import React,{useEffect,useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{
    const [Data,setData]=useState({
    Company:'',
    Description:''
})
const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('https://api.randomuser.me/?results=25')
            .then(res=>{
                console.log("IM in the api");
                let companyData = res.city;
                setData({Company:companyData, Description:companyData})
                console.log(Data.Company)
                setColorsData(res.city)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>{Data.Company}</h1>
            <p>{Data.Description}</p>
            <Colors data={colorsData}/>

            <Colors/>
        </>
    )
}


export default Home;