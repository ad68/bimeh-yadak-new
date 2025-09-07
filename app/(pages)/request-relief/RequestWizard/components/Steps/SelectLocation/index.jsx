import dynamic from "next/dynamic";
import { useMemo } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ latData, setLatData, longData, setLongData }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const Map = useMemo(
        () =>
            dynamic(
                () => import("@/(pages)/request-relief/RequestWizard/components/Map"),
                {
                    loading: () => <p>A map is loading</p>,
                    ssr: false,
                },
            ),
        [],
    );
    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <Map
        setLongData={setLongData}
        setLatData={setLatData}
        latData={latData}
        longData={longData}
    />
}
