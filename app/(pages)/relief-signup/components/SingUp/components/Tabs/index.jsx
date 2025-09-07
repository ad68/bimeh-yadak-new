'use client'
import Step from './components/Step'
import Line from './components/Line'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ activeTab }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className="flex justify-center items-center mt-10 px-10 gap-1">
        <Step activeType={activeTab === 1 ? "active" : activeTab > 1 ? "passed" : "notActive"} stepNumber={1} />
        <Line />
        <Step activeType={activeTab === 2 ? "active" : activeTab > 2 ? "passed" : "notActive"} stepNumber={2} />
        <Line />
        <Step activeType={activeTab === 3 ? "active" : activeTab > 3 ? "passed" : "notActive"} stepNumber={3} />
        <Line />
        <Step activeType={activeTab === 4 ? "passed" : activeTab > 4 ? "passed" : "notActive"} stepNumber={4} />
    </section>;
}
