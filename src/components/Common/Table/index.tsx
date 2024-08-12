import  { useState } from 'react';
import Loading from "../Loader/index";
import Pagination from './Pagination';

interface IColumns {
  name: string;
  Header: string;
}

interface ITableProps {
  data: any[];
  columns: IColumns[];
  loading: boolean;
  rowsPerPage?: number; // Optional prop to control rows per page
}

function Table({ data, columns, loading, rowsPerPage = 5 }: ITableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <div className="flex flex-col overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead className="bg-[#3f9997] text-white uppercase text-xs font-semibold tracking-wider">
                <tr>
                  {columns.map((column: IColumns, key: number) => (
                    <th key={key} scope="col" className="px-6 py-4 whitespace-nowrap">
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {loading && (
                  <tr>
                    <td colSpan={columns.length} className="px-6 py-4">
                      <Loading />
                    </td>
                  </tr>
                )}
                {Array.isArray(currentData) &&
                  !loading &&
                  currentData.map((row: any, key: number) => (
                    <tr
                      key={key}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-200"
                    >
                      {columns.map((column: IColumns, colKey: number) => (
                        <td key={colKey} className="px-6 py-4 whitespace-nowrap">
                          {row[column.name]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default Table;
