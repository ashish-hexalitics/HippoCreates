import { useState } from "react";
import Loading from "../Loader/index";
import Pagination from "./Pagination";
import { renderColumns } from "./renderColumns"; // Adjust the path as necessary

// enum Actions {
//   DELETE = "delete",
//   UPDATE = "update",
//   CREATE = "create",
// }

export interface IAction {
  handleDelete?: (row: any) => void;
  handleUpdate?: (row: any) => void;
  handleClone?: (row: any) => void;
}
export interface IColumns {
  name?: string;
  Header: string;
  Actions?: string[];
  colName: string;
}
// Actions?: ["Edit", "Delete"],

interface ITableProps {
  data: any[];
  columns: IColumns[];
  loading: boolean;
  rowsPerPage?: number;
  handleDelete?: (row: any) => void;
  handleUpdate?: (row: any) => void;
  handleClone?: (row: any) => void;
}

function Table({
  data,
  columns,
  loading,
  rowsPerPage = 5,
  handleClone,
  handleDelete,
  handleUpdate,
}: ITableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const actions:IAction = {
    handleDelete,
    handleUpdate,
    handleClone,
  };

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
                    <th
                      key={key}
                      scope="col"
                      className="px-6 py-4 whitespace-nowrap"
                    >
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
                        <td
                          key={colKey}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {renderColumns(column, row, actions)}
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
