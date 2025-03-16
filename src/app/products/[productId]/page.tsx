import exp from "constants";
import { Metadata } from "next";

type Props = {
    params:Promise<{productId:string}>;
}

export const generateMetadata = async({params}:Props):Promise<Metadata>=>{
    const {productId} = await params
    return ({
        title:`Product ${productId}`
    })
}
function getRandomInt(count:number){
    return Math.floor(Math.random()*count)
}
export default async function ProductDetials({params}:Props){
    const productId = (await params).productId

    const random = getRandomInt(2)
    console.log(random)
    if (random === 1){
        throw new Error("Error loading review")
    }
    return (
        <>
        <h1>Products Detials.......</h1>
        {productId}
        </>
    )
}
