"use client"
import React, { useEffect, useState } from "react";
import { cart_data } from "../_utils/types";

import CreditModal from "./CreditModal";

type Props = {
    data : cart_data[]
}

const CartTable: React.FC<Props> = ({ data }) => {

    const [isShow, setIsShow] = useState<boolean>(false);
    const [cartData, setData] = useState<cart_data[]>(data);
    const [total, setTotal] = useState<number>(data.reduce((acc, current) => acc + current.price, 0))

    const toggleModal = () => {
        if (isShow) { setIsShow(false) }
        else { setIsShow(true) }
    }

    const after_pay = () => {
        setTotal(0)
        setData([])
    }

    useEffect(() => {
        setTotal(cartData.reduce((acc, current) => acc + current.price, 0))
    },[cartData])

    useEffect(() => {
        setData(data)
    }, [data])

    return (
    <div className="pt-16">
    <div className="m-[auto] whitespace-nowrap overflow-auto w-[90%] top-0 pt-8 bg-white">
        <table className="table-auto w-[100%]">
            <thead className=" sticky top-0 z-10 ">
            <tr className="bg-gray-200">
                <th className="sticky left-0  bg-white border ">商品名</th>
                <th className="px-4 py-2 border ">画像</th>
                <th className="px-4 py-2 border ">商品数</th>
                <th className="px-4 py-2 border ">値段</th>
            </tr>
            </thead>
            <tbody>
            {cartData.map((res, i) => {
                return (
                <tr key={i}>
                    <td className=" px-4 py-2 sticky left-0 z-[2] bg-slate-100 border ">
                        {res.name}
                    </td>
                    <td className="flex justify-center"><img src={res.image_path} alt="" className="h-[150px]" /></td>
                    <td className=" px-4 py-2 border ">{res.count}</td>
                    <td className=" px-4 py-2 border ">{res.price}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        
        { total > 0 ? 
        <>
            <h1 className="text-2xl pt-6 text-center"> 商品 : {total} 円</h1>
            <h1 className="text-2xl text-center"> 配送料 : 660 円</h1>
            <hr />
            <h1 className="text-3xl p-6 text-center"> 合計 : {total + 660} 円</h1>
            <div className="flex justify-center m-3">
                <button className="p-4 text-white bg-blue-700 rounded-lg px-6" onClick={toggleModal}>購入する</button>
            </div>
        </>
            :
            <h1 className="text-center p-6"><a href="/products" className="text-3xl">買い物をする</a></h1>
        }
    </div>
    { isShow && <CreditModal toggleModal={toggleModal} after_pay={after_pay} />}
    </div>
    )
}

export default CartTable;