"use client"
import React, {useEffect, useState} from "react";
import { product_data } from "../_utils/types";

import BuyModal from "./BuyModal";

type Props = {
    data : product_data[]
}

const StandardTable: React.FC<Props> = ({ data }) => {

    const [isShow, setIsShow] = useState<boolean>(false);
    const [name, setName] = useState<string>("")
    const [disc, setDisc] = useState<string | null>("")
    const [price, setPrice] = useState<number>(0)
    const [stock, setStock] = useState<number>(-1)
    const [imagePath, setImagePath] = useState<string | null>(null);

    const toggleModal = () => {
        if (isShow)
        {
            setIsShow(false)
        }
        else
        {
            setIsShow(true)
        }
    }

    return (
    <div>
    <div className="m-[auto] whitespace-nowrap overflow-auto h-[80vh] w-[90%] top-0 pt-16 bg-white">
        <table className="table-auto w-[100%]">
            <thead className=" sticky top-0 z-10 ">
            <tr className="bg-gray-200">
                <th className="sticky left-0  bg-white border ">ID</th>
                <th className="px-4 py-2 border ">画像</th>
                <th className="px-4 py-2 border ">商品名</th>
                <th className="px-4 py-2 border ">カテゴリー</th>
                <th className="px-4 py-2 border ">製造者</th>
                <th className="px-4 py-2 border ">値段</th>
                <th className="px-4 py-2 border ">在庫</th>
                <th className="px-4 py-2 border ">購入</th>
            </tr>
            </thead>
            <tbody>
            {data.map((res, i) => {
                return (
                <tr key={i}>
                    <td className=" px-4 py-2 sticky left-0 z-[2] bg-slate-100 border ">
                        {res.ID}
                    </td>
                    <td><img src="" alt="" /></td>
                    <td className=" px-4 py-2 border ">{res.name}</td>
                    <td className=" px-4 py-2 border ">{res.category}</td>
                    <td className=" px-4 py-2 border ">{res.manufacturer}</td>
                    <td className=" px-4 py-2 border ">{res.price}</td>
                    <td className=" px-4 py-2 border ">{res.stock}</td>
                    <td className=" px-4 py-2 border "><button onClick={() => {
                        setName(res.name)
                        setDisc(res.description)
                        setPrice(res.price)
                        setStock(res.stock)
                        setImagePath(res.image_path)
                        toggleModal()
                    }}>カートに追加</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </div>
    { isShow && <BuyModal toggleModal={toggleModal} name={name} disc={disc} stock={stock} price={price} image_path={imagePath}/>}
    </div>
    )
}

export default StandardTable;