"use client";
import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import MainFilter from "./MainFilter";
import Filters from "./Filters";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { ComponentLoading } from "@/common";
import { consoleLog_BlackYellow } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [filterType, setFilterType] = useState("2");
  const [productList, setProductList] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getCars = () => {
    setProductLoading(true);
    setProductList([]);
    useAxios
      .get(api.car.searchCarByPrice + `?pageSize=20&pageNo=0`)
      .then((res) => {
        setProductLoading(false);
        if (res.data.elements === null) {
          setProductList([]);
        } else {
          let arr = [];
          res.data.elements.forEach((item) => {
            if (arr.length < 10) {
              if (item.mongoId !== null) {
                arr.push(item);
              }
            }
          });
          setProductList(arr);
          /* setTotalCount(res.data.totalElements); */
        }
      })
      .catch((err) => {
        setProductLoading(false);
      });
  };
  useEffect(() => {
    getCars();
  }, []);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Filters setFilterType={setFilterType} filterType={filterType} />
      {productLoading ? <ComponentLoading /> : ""}
      <section
        className={
          filterType === "2"
            ? "mt-12 items-stretch gap-8 md:grid md:grid-cols-2"
            : "mt-12  items-stretch gap-8 md:grid md:grid-cols-1"
        }
      >
        {productList.map((item, index) => (
          <section key={index}>
            <Product
              pic={item.imageUrl}
              name={item.carFullName}
              brand={item.brandName}
              year={item.year}
              factoryPrice={item.price}
              deviceType={item.deviceType}
              price={item.price}
              id={item.mongoId}
              typeId={item.typeId}
            />
          </section>
        ))}
      </section>
      <section className="mt-10 text-center">
        {/*   <button className="inline-flex h-12 min-w-[137px] items-center justify-center rounded-md bg-blue text-white ">
          مشاهده بیشتر
        </button> */}
      </section>
      <section className="ltr text-center">
        {/*  <       
               defaultCurrent={1}
          onChange={(value) => setCurrentPage(value)}
          total={totalCount}
        /> */}
      </section>
    </>
  );
}
