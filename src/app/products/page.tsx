import Link from 'next/link'



export default function page(){
    const product = 10000
    return (
        <>
        <h1>Products.......</h1>
        <Link href={`/products/${product}`} replace>Detail of product {product}</Link>
        </>
    )
}

// export const metadata = {
//     title: "Products",
//     description: "Generated by create next app",
//   };