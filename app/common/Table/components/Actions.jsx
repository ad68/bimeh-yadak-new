import React from "react";
import Delete from '../icons/delete.svg'
import Edit from '../icons/edit.svg'
import Map from '../icons/map.svg'
import Image from "next/image";
import { Button } from "@/common";
function Index({ actions, setDeleteId, setRowData, rowItem, showDeleteModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      {actions && (
        <td className="w-[140px] rounded-xl justify-center items-center gap-1 border-[3px] border-white text-center">
          <section className="flex justify-center items-center gap-2">
            {actions.map((item, index) => (
              <section key={index}>
                {item.type === "edit" && (
                  <button
                    onClick={() => {
                      setRowData(rowItem)
                      item.onClick();
                    }}
                    className="text-xs bg-[whitesmoke] mr-2 flex justify-center items-center hover:bg-[#dfeaff] text-white transition-all  w-[30px] h-[30px]  rounded-full"
                  >
                    <Image className="w-[20px] h-[20px]" src={Edit} alt="" />
                  </button>
                )}
                {item.type === "pdf" && (
                  <Button
                    onClick={() => {
                      setRowData(rowItem)
                      item.onClick();
                    }}
                    outlined={true}
                    className="h-[40px]"
                  >
                    دانلود PDF
                  </Button>
                )}
                {item.type === "map" && (
                  <button
                    onClick={() => {
                      setRowData(rowItem)
                      item.onClick();
                    }}
                    className="text-xs bg-[whitesmoke] mr-2 flex justify-center items-center hover:bg-[#ffd5d5] text-white transition-all  w-[30px] h-[30px]  rounded-full"
                  >
                    <Image className="w-[20px] h-[20px]" src={Map} alt="" />
                  </button>
                )}
                {item.type === "delete" && (
                  <button
                    onClick={() => {
                      showDeleteModal();
                      setDeleteId(rowItem?.id);
                    }}
                    className="text-md flex m-auto justify-center items-center  rounded-full hover:bg-[#ffdfdf] transition-all  w-[30px] h-[30px] bg-[whitesmoke] font-normal text-red-500 "
                  >
                    <Image src={Delete} className="w-[20px] h-[20px]" alt="" />
                  </button>
                )}
              </section>
            ))}
          </section>

        </td>
      )}
    </>
  );
}

export default React.memo(Index);
