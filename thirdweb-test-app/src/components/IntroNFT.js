import React from "react";
import MainIMG from "../images/image 5.png"
import ETHLogo from "../images/image 7.png"
import Socials from "./SocialLogos";


export default function IntroNFT() {
    return(
        
        <div className="flex flex-row">

            <div className="p-[50px] mt-[20px] mr-[35px] ">
                <img src={MainIMG} className="w-[400px] mb-[20px] hover:scale-[102%] transition"></img>
                <div className="flex  border-solid border-2 rounded-[15px] border-[#3C3C3C] justify-between items-center text-center hover:scale-[102%] transition ">

                    <p className="text-[#3C3C3C] font-main text-[25px] px-5 ">#11</p>

                    <h4 className="text-[#3C3C3C] pt-[6px] pb-[6px] pr-[40px] pl-[40px] font-main text-[20px] border-solid border-r-2  border-l-2  border-[#3C3C3C]">Italian Summer</h4>

                    <div className="flex p-[10px] items-center border-[#3C3C3C] pr-[10px] pl-[1px] ">
                        <img src={ETHLogo} className="w-[18px]"></img>
                        <p className="text-[#3C3C3C] px-[5px] font-main text-[20px]">0.05</p>
                    </div>

                </div>
            </div>

          <div className="flex items-center mr-[80px]">
            <Socials />
          </div>

        </div>
    )
}