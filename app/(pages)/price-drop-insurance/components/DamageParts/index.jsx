import { Button } from "@/common";
import React, { useState, useEffect } from "react";
import { api } from "@/api";
import { useAxios } from "@/hooks";
import { Checkbox } from "antd";
import MoadalDamaged from "./components/MoadalDamaged";


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  setCalculateBox,
  activeTab,
  calculatePrice,
  buttonLoading,
  setButtonLoading,
  calculateBox,
  getChart,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  const [depreciation, setDepreciation] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const [selectedDamages, setSelectedDamages] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isBodyReplaced, setIsBodyReplaced] = useState(false);
  const [disabledStates, setDisabledStates] = useState({
    allDisabled: false,
    lastDisabled: false,
  });

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const closeModal = () => {
    setOpen(false);
  };
  const depreciationList = () => {
    setButtonLoading(true);
    useAxios
      .get(api.car.depreciation)
      .then((res) => {
        setButtonLoading(false);
        setDepreciation(res.data);
      })
      .catch((err) => {
        setButtonLoading(false);
      });
  };
  useEffect(() => {
    depreciationList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelection = (defectedPartId, accidentCoefficient) => {
    setSelectedOption({ defectedPartId, accidentCoefficient });
  };
  const handleConfirm = () => {
    if (selectedOption) {
      setSelectedDamages((prev) => {
        if (
          prev.find(
            (damage) => damage.defectedPartId === selectedOption.defectedPartId
          )
        ) {
          return prev;
        }
        return [...prev, selectedOption];
      });
    }
  };
  useEffect(() => {
    if (calculateBox.details && calculateBox.details.length > 0) {
      calculatePrice();

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculateBox]);

  const handleCheckboxChange = (checked, item, index) => {
    if (item.parameter.includes("خودرو (تعویض)")) {
      if (checked) {
        setSelectedDamages([
          { defectedPartId: item.id, accidentCoefficient: "EXTREME" },
        ]);
        console.log(selectedDamages);
        if (item.parameter.includes("اتاق خودرو (تعویض)")) {
          setDisabledStates({ allDisabled: true, lastDisabled: false });
        }
        if (item.parameter.includes("موتور خودرو (تعویض)")) {
          setDisabledStates({ lastDisabled: true });
        }
      } else {
        setDisabledStates({ allDisabled: false, lastDisabled: false });
        setSelectedDamages([]);
      }
      return;
    }

    if (item.parameter.includes("موتور")) {
      setDisabledStates((prev) => ({ ...prev, lastDisabled: checked }));
    }

    if (selectedOption !== null || item.parameter.includes("خودرو (تعویض)"))
      setSelectedDamages((prev) => {
        if (checked) {
          return [
            ...prev,
            { defectedPartId: item.id, accidentCoefficient: "EXTREME" },
          ];
        } else {
          return prev.filter((damage) => damage.defectedPartId !== item.id);
        }
      });

    // Open modal for non-replacement items
    if (!item.parameter.includes("خودرو (تعویض)")) {
      setSelectedOption(null);
      setItem(item);
      setOpen(true);
    }
  };


  return (
    <>
      <section className="">
        {open && (
          <MoadalDamaged
            handleSelection={handleSelection}
            selectedOption={selectedOption}
            item={item}
            open={open}
            closeModal={closeModal}
            handleConfirm={handleConfirm}
          />
        )}
        <section
          className={`${activeTab === 2 ? "visible" : "hidden"} mt-6 bg-[#fcfcfc] p-4 rounded-lg grid grid-cols-1 gap-8`}
        >
          <h2 className="mr-4">نقاط آسیب دیده</h2>
          {depreciation.map((item, index) => {
            const isSelected = selectedDamages.some(
              (damage) => damage.defectedPartId === item.id
            );

            const checkboxValue =
              open && !isSelected && !item.parameter.includes("خودرو (تعویض)")
                ? false
                : isSelected;
            return (
              <label
                key={item.id}
                className={`${(disabledStates.allDisabled &&
                  !item.parameter.includes("اتاق خودرو")) ||
                  (disabledStates.lastDisabled &&
                    index === depreciation.length - 1)
                  ? "text-gray-400"
                  : "text-[#505050]"
                  } w-full h-auto bg-white flex items-center gap-4 p-4 shadow-sm rounded-lg cursor-pointer`}
              >
                <Checkbox
                  checked={checkboxValue}
                  onChange={(e) => {
                    console.log(e.target.checked);
                    handleCheckboxChange(e.target.checked, item, index);
                  }}
                  disabled={
                    (disabledStates.allDisabled &&
                      !item.parameter.includes("اتاق خودرو")) ||
                    (disabledStates.lastDisabled &&
                      index === depreciation.length - 1)
                  }
                />
                <span>{item.parameter}</span>
              </label>
            );
          })}
        </section>

        <section
          className={`${activeTab === 2 ? "visible" : "hidden"} flex mb-5 justify-center gap-4`}
        >
          <Button
            onClick={() => {
              const newDetails = [...selectedDamages];
              setCalculateBox((prev) => ({
                ...prev,
                details: newDetails,
              }));

              getChart();
            }}
            loading={buttonLoading}
            className="mt-10 w-full text-xs"
          >
            محاسبه افت قیمت بیمه
          </Button>
        </section>
      </section>
    </>
  );
}
