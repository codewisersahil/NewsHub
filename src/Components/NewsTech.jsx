import React, { useEffect , useState} from 'react'
import NewCatCard from './NewCatCard'

export default function NewsTech() {
useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=15ceef4994a1486391d790577f23e0cc").then((val)=>val.json()).then((res)=>{
        return(
            console.log(res.articles),
            setData(res.articles)
        )
    })



}, [])
const[data, setData]= useState([])

return (
<>
<div className="container">
    <div className="row">
        {
            data.map((res)=>{
                return(
                   <div className="col-md-4">
                    <NewCatCard data
                     author={res.author} 
                     desc={res.description} 
                     img={res.urlToImage}
                      tit={res.title}
                    />
                   </div>


                    )
            })
        }
    </div>
</div>
</>
    )
}
