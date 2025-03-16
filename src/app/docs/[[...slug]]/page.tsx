export default async function ProductDetials({params}:{
    params:Promise<{slug:string[]}>
}
){
    const {slug} = (await params)
    console.log(slug)
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("delay")
        }, 2000)
    })

    return (
        <>
        <h1>Products Detials.......{slug}</h1>
        </>
    )
}