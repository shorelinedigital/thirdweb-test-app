import React from "react";
import MainIMG from "../images/image 5.png"
import ETHLogo from "../images/image 7.png"


export default function IntroNFT() {
    return(
        <div className="p-[50px] mt-[20px] mr-[70px]">
            <img src={MainIMG} className="w-[400px] mb-[20px]"></img>
            <div className="flex gap-4 border-solid border-2 rounded-[15px] border-[#3C3C3C] justify-center items-center text-center ">

                <p className="text-[#3C3C3C] font-main text-[35px] ">#11</p>

                <h4 className="text-[#3C3C3C] pt-[6px] pb-[6px] pr-[60px] pl-[60px] font-main text-[35px] border-solid border-r-2  border-l-2  border-[#3C3C3C]">Title</h4>

                <div className="flex p-[10px] items-center border-[#3C3C3C] px-[10px] ">
                    <img src={ETHLogo} className="w-[25px]"></img>
                    <p className="text-[#3C3C3C] px-[5px] font-main text-[30px]">0.5</p>
                </div>

            </div>
        </div>
    )
}