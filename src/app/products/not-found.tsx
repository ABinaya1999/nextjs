"use client";
import { usePathname } from "next/navigation"


export default  function NotFound(){
    const pathName = usePathname();
    console.log(pathName.split("/"))
    return (
        <>
        <h1>Not found.......</h1>
        </>
    )
}