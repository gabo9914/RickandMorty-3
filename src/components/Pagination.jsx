const Pagination = ({pages, setCurrentPage, currentPage}) => {
  return (
    <ul className=" list-none flex justify-center items-center gap-2 mb-2 cursor-pointer">
      {
        pages.map((page)=> <li className= {`${currentPage===page && "text-red-500" }`}  onClick={()=>setCurrentPage(page)} key={page}>{page}</li> )
      }
    </ul>
  );
};
export default Pagination;
