import { useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const residentesForPages = 20;

  const totalPages = Math.ceil(residents.length / residentesForPages);

  const sliceStart = (currentPage - 1) * residentesForPages;
  const sliceEnd = sliceStart + residentesForPages;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <section>
      <section className=" flex flex-col gap-3 sm:grid grid-cols-4 grid-rows-auto m-3">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
export default ResidentList;
