import React from "react"
import MintButton from "./MintButton";




export default function IntroText() {
    return(
        <div className="max-w-[570px] mt-[125px] px-20  ml-[50px] animate-fadeIn">
            <h2 className="font-main text-[100px] text-[#3C3C3C]">Memories</h2>
            <p className="text-[18px] font-text text-[#3C3C3C ml-[10px] ">The offical sportz ballerz photo collection digitized in unique one of a kind NFTs. Featuring all the NPCs & Legendary characters throughout the years.</p>
            <MintButton />
        </div>
    )
}