"use client"

import React, { useEffect, useState } from 'react'
import { cart_data } from '../_utils/types'
import { DeleteCookies, TakeoutData } from '../_lib/cookie'
import CartTable from './CartTable'

function page() {

    const [cartData, setCardData] = useState<cart_data[]>([])

    useEffect(() => {
        const TakeOutData = async () => {
            const cart_data = await TakeoutData()
            setCardData(cart_data)
        }
        TakeOutData();
    }, [])

    return (
        <div className='bg-gray-100 h-[100vh]'>
            <CartTable data={cartData} />
        </div>
    )
}

export default page
