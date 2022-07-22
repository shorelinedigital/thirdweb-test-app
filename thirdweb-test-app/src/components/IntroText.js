import React from "react"

import Popup from "./Popup";




export default function IntroText() {



    return(
        <div className="max-w-[570px] mt-[125px] px-20  ml-[50px] animate-fadeIn">
            <h2 className="font-main text-[100px] text-[#3C3C3C]">Memories</h2>
            <p className="text-[18px] font-text text-[#474747e3] ml-[10px] mb-[20px] font-medium ">The offical summer vibes photo collection digitized in unique one of a kind NFTs. Featuring neo-nostolgic places and moments throughout the years.</p>
            <p className="text-[15px] font-text text-[#474747e3] ml-[10px] mb-[20px] font-bold ">100/100 | 0.05 ETH</p>
            
            <Popup />
        </div>
    )
}