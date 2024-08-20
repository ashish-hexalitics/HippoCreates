import React from "react";
import { IColumns, IAction } from "./index";
import { icons } from "../../../Icons/constant";

const {
  MdOutlineEdit,
  AiOutlineDelete,
  BsCopy,
  MdOutlineMarkEmailRead,
  MdOutlineMarkEmailUnread,
} = icons;

export const renderColumns = (
  column: IColumns,
  row: any,
  actions: IAction
): React.ReactNode => {
  switch (column.colName) {
    case "Default":
      return (
        <p className="font-medium">{column.name ? row[column.name] : ""}</p>
      );
    case "Actions":
      return (
        <div className="flex space-x-2 items-center">
          <MdOutlineEdit
            onClick={() => actions.handleUpdate?.(row)}
            className="text-lg font-bold text-gray-500 hover:text-[#3f9997]"
          />
          <AiOutlineDelete
            onClick={() => actions.handleDelete?.(row)}
            className="text-lg font-bold text-gray-500 hover:text-red-400"
          />
          <BsCopy
            onClick={() => actions.handleClone?.(row)}
            className="text-lg font-bold text-gray-500 hover:text-blue-400"
          />
        </div>
      );
    case "Status":
      return (
        <div className="relative flex items-center">
          {column.name && row[column.name] === true ? (
            <div className="relative group">
              <MdOutlineMarkEmailRead className="text-lg font-bold text-[#3f9997]" />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3 p-2 bg-[#3f9997] text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Verified
              </div>
            </div>
          ) : (
            <div className="relative group">
              <MdOutlineMarkEmailUnread className="text-lg font-bold text-orange-400" />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3 p-2 bg-orange-400 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Pending
              </div>
            </div>
          )}
        </div>
      );
    default:
      return <></>;
  }
};
