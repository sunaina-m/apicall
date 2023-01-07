import React from "react";

const Pagina =({npage ,setcurrentPage ,currentPage})=>{
    const pages = []
    for(let i=1; i<=npage; i++){
       pages.push(i)
    }
  console.log('disj', pages)
    const nextPage = () => {
        if(currentPage !== npage) setcurrentPage(currentPage + 1)
}
const prevPage = () => {
    if(currentPage !== 1) setcurrentPage(currentPage - 1)
}
    return(
        <>
        <div  className="box">
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a onClick={prevPage} href="#"> Previous</a>
                </li>
                {pages.map(value => (
                <li key={value} >
                    <button onClick={() => setcurrentPage(value)}> {value}</button>
                </li>
                ))}
                <li className="page-item">
                      <a onClick={nextPage} href="#">Next</a>
                </li>
            </ul>
         </div>
       
        </>
    )
}
export default Pagina;