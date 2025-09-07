"use client";
import { Checkbox } from "antd";
export default function Index({ state, setState, disabled, title }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  /*  const onChange = (e) => {
    console.log(e.target.checked);
  }; */
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Checkbox
        disabled={disabled}
        checked={state}
        onChange={(e) => setState(e.target.checked)}
      >
        {title}
      </Checkbox>
    </>
  );
}
