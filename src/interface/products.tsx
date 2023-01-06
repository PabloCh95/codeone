export interface product{
    createdAt: string,
    id: number, 
    image: string, 
    is_redemption: boolean, 
    points: number, 
    product: string
}

export interface arrayProducts{
    product:product[]
}