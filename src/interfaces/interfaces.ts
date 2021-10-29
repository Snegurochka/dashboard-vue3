export interface RootState {
    products: IProduct[],
    products_end: boolean,
    product: IProduct,
}

export interface IProduct {
    id: number;
    id_category: number;
    id_seller: number;
    price: number;
    quantity: number;
    title: string;
    description: string;
}