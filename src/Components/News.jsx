import React, { useEffect, useState } from 'react'
import NewsCards from './NewsCards'


export default function News() {
    useEffect(() => {
      fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-11-06&sortBy=publishedAt&apiKey=15ceef4994a1486391d790577f23e0cc").then((val)=>val.json()).then((resp)=>{
        return( 

            console.log(resp.articles),
            setData(resp.articles)
        )
      })
      
    
     
    }, [])
    const [data, setData] = useState([])
    
    
  return (
<>
<div className="container">
    <div className="row">
        {
            data.map((res)=>
            {
                return(
                    <div className="col-md-4">
                        <NewsCards 
                        author={res.author} 
                        desc={res.description.slice(0,200)} 
                        img={res.urlToImage}
                         tit={res.title}
                         url={res.url}
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
