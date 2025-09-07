import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import {
  consoleLog_BlackGreen,
  consoleLog_BlackRed,
  consoleLog_BlackYellow,
  consoleLog_Blue,
  consoleLog_Pink,
  removeFromArray,
  sumOfArray,
} from "@/helper";
import { ComponentLoading } from "@/common";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ data, setSum, loading }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const [priceList, setPriceList] = useState([]);
  const [activeCollapse, setActiveCollapse] = useState();
 
  // ─── States ─────────────────────────────────────────────────────────────────────
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setSum(sumOfArray(priceList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceList]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const checkBoxHandleChange = (checked, value) => {
    let arr = [...priceList];
    if (checked === true) {
      arr.push(value);
    } else if (checked === false) {
      arr = removeFromArray(arr, value);
    }
    setPriceList(arr);
  };

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative mx-auto h-auto w-[90%] overflow-y-auto rounded-xl bg-[#F6F6FB] p-4 md:w-[80%] xl:h-[676px] xl:w-[602px]">
        {loading && <ComponentLoading type="cover" />}
        {data?.elements[0]?.dtos?.map((item, index) => (
          <ListItem
            activeCollapse={activeCollapse}
            setActiveCollapse={setActiveCollapse}
            checkBoxHandleChange={checkBoxHandleChange}
            key={index}
            index={index}
           
            data={item}
          />
        ))}
      </section>
    </>
  );
}
