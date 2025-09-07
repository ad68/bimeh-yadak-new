import React, { useState } from "react";
import Actions from "./Actions";
import moment from "moment-jalaali";
import DeleteModal from "../../DeleteModal";
import { Modal } from "@/common";
import { numberWithCommas } from "@/helper";
export default function Index({ cols, data, apiDel, getList, actions, setRowData }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [descriptionModal, setDescriptionModal] = useState(false)
  const [descriptionInfo, setDescriptionInfo] = useState("")
  const hideDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const showDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const renderCell = (type, value, conditions) => {

    if (type === "date") {
      return moment(value).format("jYYYY/jMM/jDD");
    } else if (type === "condition") {
      return conditions.find((el) => el.value === value)?.replace;
    }
    else if (type === "price") {
      return numberWithCommas(value);
    }
    else if (type === "description") {
      return <span onClick={() => { setDescriptionModal(true); setDescriptionInfo(value) }} className="text-blue cursor-pointer font-bold">نمایش</span>
    }
    else {
      return value;
    }

  };
  const getLevelsCount = (value) => {
    return value.split(".").length;
  };
  const getLevel = (value) => {
    return value.split(".");
  };

  return (
    <table className="rounded-xl text-sm overflow-hidden w-full h-auto">
      <thead className="bg-[#fff6d1] rounded-sm h-[40px]">
        <tr>
          {cols?.map((item, index) => (
            <th key={index} style={{ width: item?.width }} className="rounded-sm border-[3px] text-black border-white">
              {item.title}
            </th>
          ))}
          {actions && <th className="rounded-sm border-[3px] text-black border-white">عملیات</th>}
        </tr>
      </thead>
      <tbody className="rounded-xl w-full relative">
        {data.elements?.map((rowItem, rowIndex) => (
          <tr key={rowIndex} className={`${rowIndex % 2 !== 0 ? "bg-[#f8f8f8]" : "bg-none"} h-[40px] rounded-xl overflow-hidden`}>
            {cols?.map((colItem, colIndex) => (
              <td key={colIndex} className="w-[100px] rounded-xl border-[3px] border-white text-center">
                {colItem.render ? colItem.render(rowItem) :
                  getLevelsCount(colItem.field) === 1 ? renderCell(colItem.type, rowItem[colItem.field], colItem?.conditions, colItem?.render, rowItem) : getLevelsCount(colItem.field) === 2 ? renderCell(colItem.type, rowItem[getLevel(colItem.field)[0]][getLevel(colItem.field)[1]], colItem?.conditions, colItem?.render, rowItem) : ""
                }
              </td>
            ))}
            <Actions rowItem={rowItem} setRowData={setRowData} actions={actions} showDeleteModal={showDeleteModal} setDeleteId={setDeleteId} />
          </tr>
        ))}
      </tbody>
      <DeleteModal open={openDeleteModal} onClose={hideDeleteModal} api={apiDel} id={deleteId} onSuccess={getList}>
        آیا مایلید رکورد مورد نظر حذف شود؟
      </DeleteModal>
      <Modal onClose={() => setDescriptionModal(false)} open={descriptionModal}>
        {descriptionInfo ? <p className="text-center font-bold">{descriptionInfo}</p> : <p className="text-center text-red font-bold">موردی وجود ندارد</p>}
      </Modal>
    </table>
  );
}
