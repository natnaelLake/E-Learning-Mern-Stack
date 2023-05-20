import {React,useState} from 'react'
import { Pagination } from 'react-bootstrap'
function Paging({currentPage,firstPage,prevPage,nextPage,lastPage,coursePerPage,paginate,totalPage}) {
  const [pageChange,setPageChange] = useState(1)
  const pagesArray = [];
  let loopConst = 0;
  // if((Math.ceil(totalPage/coursePerPage)-pageChange) === 0 ){
  //  loopConst =  pageChange + 
  // }else{
  //   loopConst = Math.ceil(totalPage/coursePerPage)-pageChange
  // }
  for(let i = 0;i<=Math.ceil(totalPage/coursePerPage)-pageChange;i++){
    pagesArray.push(pageChange+i)
  }
  return (
    <div>
        <Pagination className="justify-content-center " >
        {currentPage > 1 ? <Pagination.First onClick = {()=>{firstPage(1);setPageChange(1)}}/> : <Pagination.First disabled />}
        { currentPage > 1 ? <Pagination.Prev onClick = {()=>{prevPage(currentPage - 1 );setPageChange(currentPage -1)}}/> :<Pagination.Prev disabled />}
        {pagesArray.map((page) => (
          <div>
            <Pagination.Item onClick = {()=>{paginate(page);}}>{page}</Pagination.Item>
          </div>
        ))}
        {currentPage < Math.ceil(totalPage / coursePerPage) ? <Pagination.Next onClick = {()=>{nextPage(currentPage + 1);setPageChange(currentPage + 1)}}/> : <Pagination.Next disabled/>}
        {currentPage < Math.ceil(totalPage / coursePerPage)-4 ? <Pagination.Last onClick = {()=>{lastPage(Math.ceil(totalPage / coursePerPage)-4);setPageChange(Math.ceil(totalPage / coursePerPage)-4)}}/> :<Pagination.Last disabled/>}
      </Pagination>
    </div>
  )
}

export default Paging;