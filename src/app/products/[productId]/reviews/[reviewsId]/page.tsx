import { notFound } from "next/navigation"

export default async function ProductDetials({params}:{
    params:Promise<{productId:string, reviewsId:string}>
}
){
    const productId = (await params).productId
    const reviewsId = (await params).reviewsId
    if (parseInt(reviewsId) > 1000){
        notFound();
    }
    return (
        <>
        <h1>Products Detials.......</h1>
        {productId}<br/>
        {reviewsId}
        </>
    )
}