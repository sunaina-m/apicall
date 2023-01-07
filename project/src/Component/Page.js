import React, { useEffect, useState } from 'react'
import Pagina from '../Component/Pagina'

const Page = () => {
  const [data, setData] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [currentPost] = useState(5)

  useEffect(() => {

    const fetchingData = fetch("https://fakestoreapi.com/products?")
    fetchingData.then((getdata) => {
      getdata.json().then((result) => {
        setData(result)
      })
    })
  }, [])
  console.log(data)
  const lastindexPost = currentPage * currentPost;
  const firstindexPost = lastindexPost - currentPost;
  const current = data.slice(firstindexPost, lastindexPost)
const npage= Math.ceil(data.length/currentPost);
  
console.log(current)
  return (
    <>
      <br></br>
      <h1>API data</h1>
      
        <div className='cards'>
          <div className='card'>

          
            {
              current && current.length > 0 ?
                current.map(value =>
                <div className='innercard'>
                  <ul key={value.id}>
                    <li>Id:{value.id}</li><br/>
                    <li>Title:{value.title}</li><br/>
                    <li>Description:{value.description}</li><br/>
                  </ul>
                  </div>
                )
                : 'looding......'
                
          
            }
           
          </div>
        </div>
        <Pagina
          npage={npage}
         setcurrentPage={setcurrentPage}
         currentPage = {currentPage}
        
        />
      <br></br>
     
    </>
  )
}
export default Page;
