'use client'
import React, { useEffect, useRef, useState } from 'react'
import Card from '../../../../public/icons/credit-card.png'
import Image from 'next/image'
export default function Index({ setCardNumber }) {
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)
    const [firstOtp, setFirstOtp] = useState('')
    const [secondOtp, setSecondOtp] = useState('')
    const [thirdOtp, setThirdOtp] = useState('')
    const [fourthOtp, setFourthOtp] = useState('')

    useEffect(() => {
        if (firstOtp.length === 4) {
            secondRef.current?.focus()
        }
    }, [firstOtp])
    useEffect(() => {
        if (secondOtp.length === 4) {
            thirdRef.current?.focus()
        }
        else if (secondOtp.length === 0) {
            firstRef.current?.focus()
        }
    }, [secondOtp])

    useEffect(() => {
        if (thirdOtp.length === 4) {
            fourthRef.current?.focus()
        }
        else if (thirdOtp.length === 0) {
            secondRef.current?.focus()
        }
    }, [thirdOtp])
    useEffect(() => {
        if (fourthOtp.length === 0) {
            thirdRef.current?.focus()
        }
    }, [fourthOtp])

    useEffect(() => {
        firstRef.current?.blur()
        secondRef.current?.blur()
        thirdRef.current?.blur()
        fourthRef.current?.blur()

    }, [])

    useEffect(() => {

        if (firstOtp.length === 4 && secondOtp.length === 4 && thirdOtp.length === 4 && fourthOtp.length === 4) {
            setCardNumber(firstOtp.concat(secondOtp, thirdOtp, fourthOtp))
        }
        else {
            setCardNumber(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstOtp, secondOtp, thirdOtp, fourthOtp])

    return (
        <section className='flex items-center gap-2  border border-silver rounded-md relative '>
            <Image src={Card} alt='' className='absolute hidden xl:block right-[-40px] w-[30px] top-[8px]' />
            <input tabIndex={4} value={fourthOtp} maxLength={4} ref={fourthRef} type='text' className='w-[100%] text-center  outline-none   h-[48px] rounded-lg'
                onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    setFourthOtp(value);
                }} />
            -
            <input tabIndex={3} value={thirdOtp} maxLength={4} ref={thirdRef} type='text' className='w-[100%] text-center  outline-none    h-[48px] rounded-lg'
                onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    setThirdOtp(value);
                }} />
            -
            <input tabIndex={2} value={secondOtp} maxLength={4} ref={secondRef} type='text' className='w-[100%] text-center  outline-none    h-[48px] rounded-lg'
                onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    setSecondOtp(value);
                }} />
            -
            <input tabIndex={1} value={firstOtp} maxLength={4} ref={firstRef} type='text' className='w-[100%] text-center outline-none   h-[48px] rounded-lg'
                onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    setFirstOtp(value);
                }} />
        </section>
    )
}
