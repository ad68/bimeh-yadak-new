'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import 'react-multi-date-picker/styles/colors/purple.css'
import 'react-multi-date-picker/styles/layouts/mobile.css'
import { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
const DatePicker = dynamic(() => import('react-multi-date-picker'), {
    ssr: false,
})
const MyDatePicker = (props) => {
    const { value, onChange, error, style, ...rest } = props
    const [selectedDate, setSelectedDate] = useState(null)
    useEffect(() => {
        if (value) {
            setSelectedDate(
                new DateObject({
                    calendar: persian,
                    locale: persian_fa,
                    date: value,
                })
            )
        }
    }, [value])

    return (
        <DatePicker
            {...rest}
            style={{ ...style, height: "48px", width: "100%", minWidth: '50px !important' }}
            placeholder="روز / ماه / سال"
            inputClassName={`myRmdp-input ui-datepicker ${error ? 'border-red-500' : ''}`}
            calendar={persian}
            onChange={onChange}
            locale={persian_fa}
            value={selectedDate}
        />
    )
}

export default MyDatePicker
