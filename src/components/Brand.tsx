import React from "react";
import Image  from "next/image";
const Brand = () => {
    return (<section className="w-full box-border sm:max-w-[1024px] sm:mx-auto relative z-20 top-24 sm:top-[-100px] lg:top-[-120px] text-center">
        <p className="sm:text-sm text-[#C4C4C4]  font-bold">AS SEEN ON</p>
        <div className="grid grid-cols-2  sm:grid-cols-5 gap-4 mt-8">
            <Image src="https://cdn.inito.com/inito_website/press/Logo_Bloomberg@2x.png" alt="bloomberg" width={100} height={100} className="w-10/12 mx-auto"/>
            <Image src="https://cdn.inito.com/inito_website/press/Logo_Forbes_India@2x.png" alt="bloomberg_2" width={100} height={100} className="w-10/12 mx-auto"/>

            <Image src="https://cdn.inito.com/inito_website/press/Logo_The_Week@2x.png" alt="bloomberg_3" width={100} height={100} className="w-10/12 mx-auto"/>

            <Image src="https://cdn.inito.com/inito_website/press/Logo_Washington@2x.png" alt="bloomberg_4" width={100} height={100} className="w-10/12 mx-auto"/>

            <Image src="https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@2x.png" alt="bloomberg_5" width={100} height={100} className="w-10/12 mx-auto"/>
        </div>
    </section>)
}
export default Brand;