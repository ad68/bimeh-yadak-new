import React, { useState, useContext, useEffect, useMemo, useCallback } from 'react'
import { api } from '@/api';
import { consoleLog_BlackGreen, consoleLog_BlackOrange, consoleLog_Blue, consoleLog_green, consoleLog_Red, isEmptyObject, numberWithCommas } from '@/helper';
import { useAxios } from '@/hooks';
import moment from 'moment-jalaali';

import Chart from './components/Chart'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ resultData }) {
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [chartPriceList, setChartPriceList] = useState([])
    const [chartMonthList, setChartMonthList] = useState([])

    // ─── Global Variable ────────────────────────────────────────────────────────────
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const getChart = () => {
        useAxios
            .get(
                api.car.getPriceChart +
                `?carTypeId=${resultData?.typeId}&pageNo=0&pageSize=24`,
            )
            .then((res) => {
                let resultList = res.data.elements.reverse();
                let priceList = [];
                let monthList = [];
                resultList.forEach((item, index) => {
                    let m = moment(item.jalaliPriceDate, "jYYYY/jM/jD");
                    if (m.jDate() === 1) {
                        priceList.push(item.price);
                        monthList.push(m.jYear() + "/" + (m.jMonth() + 1));
                    }
                });

                setChartPriceList(priceList.slice(6, 12));
                setChartMonthList(monthList.slice(6, 12));

            })
            .catch((err) => { });
    };
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        getChart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <>
            <Chart chartPriceList={chartPriceList} chartMonthList={chartMonthList} />
        </>

    )
}
