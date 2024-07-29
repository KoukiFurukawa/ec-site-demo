"use client"
import React, { useState } from 'react'
import StandardTable from './ProductTable'
import { product_data } from '../_utils/types'

const tmp_data: product_data[] = [
    {
        ID: 1,
        name: "フライ返し",
        category: "調理",
        manufacturer: "ダイヤモンド",
        price: 300,
        image_path: "/フライパン.png",
        stock: 10,
        description: "焦げついていても大丈夫",
        created_at: "2023-06-20 16:04:59.778851",
        updated_at: "2023-06-20 16:04:59.778867"
    },
    {
        ID: 2,
        name: "包丁",
        category: "調理",
        manufacturer: "ダイヤモンド",
        price: 3000,
        image_path: "包丁.png",
        stock: 5,
        description: "よく切れる",
        created_at: "2023-06-20 16:04:59.780814",
        updated_at: "2023-06-20 16:04:59.780858"
    },
    {
        ID: 3,
        name: "やかん",
        category: "調理",
        manufacturer: "真珠",
        price: 1500,
        image_path: "/ヤカン.png",
        stock: 2,
        description: null,
        created_at: "2023-06-20 16:04:59.782000",
        updated_at: "2023-06-20 16:04:59.782008"
    },
    {
        ID: 4,
        name: "電動ドリル",
        category: "工具",
        manufacturer: "サファイア",
        price: 4500,
        image_path: "/ドリル.png",
        stock: 12,
        description: null,
        created_at: "2023-06-20 16:04:59.782527",
        updated_at: "2023-06-20 16:04:59.782532"
    }
]

export default function page() {

    const [productData, setProductData] = useState<product_data[]>(tmp_data)
    const update_productData = (data: product_data[]): void => {
        setProductData(data)
    }

    return (
        <div className='bg-gray-100'>
            <StandardTable data={productData} update_productData={update_productData} />
        </div>
    )
}
