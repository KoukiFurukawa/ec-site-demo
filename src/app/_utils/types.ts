export type product_data = {
    ID: number,
    name: string,
    category: string,
    manufacturer: string,
    price: number,
    image_path: string | null,
    stock: number,
    description: string | null,
    created_at: string,
    updated_at: string
}

export type cart_data = {
    name : string,
    price : number,
    image_path : string | null
    count : number,
}