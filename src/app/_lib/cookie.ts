"use server"

import { cookies } from "next/headers"
import { cart_data } from "../_utils/types";

export const AddProduct = (data : cart_data) => {

    const saved_data = cookies().get("data");

    if (saved_data)
    {
        let cart_data: cart_data[] = JSON.parse(saved_data.value)
        cart_data.push(data);
        cookies().set("data", JSON.stringify(cart_data))
    }
    else
    {
        cookies().set('data', JSON.stringify([data]));
    }
}

export const TakeoutData = (): cart_data[] => {
    const saved_data = cookies().get("data");
    let cart_data: cart_data[] = []
    if (saved_data)
    {
        cart_data = JSON.parse(saved_data.value)
    }
    return cart_data
}

export const DeleteCookies = () =>
{
    cookies().set("data", "", { expires: new Date(0) });
}