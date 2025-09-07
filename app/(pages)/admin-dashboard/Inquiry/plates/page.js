"use client";
import React, { useEffect, useState } from "react";
import NoContent from "./components/NoContent";
import VehiclePlate from "./components/VehiclePlate";
import CreateEditPlate from "./components/Create_Edit_Plate";
import { useAxiosWithToken } from "@/hooks";
import { ComponentLoading, DeleteModal } from "@/common";
import Header from "./components/Header";
import { api } from "@/api";
import { usePlatesStore } from "@/store/dashboard/plates";
import { Pagination } from "antd";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const myDeleteModal = usePlatesStore((state) => state.deleteModal);
  const hideDeleteModal = usePlatesStore((state) => state.hideDeleteModal);
  const deleteId = usePlatesStore((state) => state.deleteId);
  const reloadPlateState = usePlatesStore((state) => state.reloadPlateState);

  // ─── States ─────────────────────────────────────────────────────────────────────
  /* const [sideBarShow, setSideBarShow] = useState(false); */
  const [plateList, setPlateList] = useState([]);
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  /* 
   const [modal, setModal] = useState(false); */
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getPlates = () => {
    setLoading(true);
    useAxiosWithToken
      .get(api.licensePlate.searchWithPagination + `?pageNo=${currentPage - 1}&pageSize=8`)
      .then((res) => {
        setPlateList(res?.data?.elements);
        setTotal(res?.data?.totalElements);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getPlates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadPlateState, currentPage]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <CreateEditPlate />
      <span className='hidden text-[28px] font-semibold text-[#505050] lg:block dark:text-white'>پلاک های من</span>
      <section className='mt-[33px] xl:mr-[87px] xl:mt-7 xl:w-[836px] 2xl:mr-[87px] 2xl:mt-7  2xl:w-[836px]  '>
        {total === 0 ? (
          <NoContent />
        ) : (
          <>
            <Header total={total} />
            {loading && <ComponentLoading />}
            {!loading && (
              <section className='mt-3 grid gap-[16px] xl:w-[836px] xl:grid-cols-2  xl:gap-4 2xl:w-[836px]  2xl:gap-4'>
                {plateList.map((item, index) => (
                  <VehiclePlate item={item} key={index} />
                ))}
              </section>
            )}
            {plateList.length > 0 && (
              <Pagination
                className='ltr sans mt-5 text-center'
                defaultCurrent={1}
                showSizeChanger={false}
                current={currentPage}
                pageSize={8}
                onChange={(value) => setCurrentPage(value)}
                total={total}
                rootClassName='dark:text-white'
              />
            )}
          </>
        )}
      </section>
      <DeleteModal open={myDeleteModal} onClose={hideDeleteModal} api={api.licensePlate.deletePlate} id={deleteId} onSuccess={getPlates}>
        آیا مایلید رکورد مورد نظر حذف شود؟
      </DeleteModal>
    </>
  );
}
