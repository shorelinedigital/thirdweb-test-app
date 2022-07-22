import TwitterLogo from "../images/twitterlogo.png"
import DiscordLogo from "../images/discordlogo.png"
import OpenseaLogo from "../images/opensealogo.png"
import GithubLogo from "../images/githublogo.png"

export default function Footer() {

    return(
        <div className="flex flex-col items-center mt-10">
            <h5 className="font-main text-[30px] pt-5 text-[#3C3C3C]">All Rights Reserved Memories 2022</h5>
            <p className="text-[12px] p-2 text-[#3C3C3C]">Contract: 0x21f489637912f7BdEd53707686a520B7E7645f2A</p>

            <div className="flex flex-row gap-4 mt-5 ">
            <img src={TwitterLogo} className="w-[40px]  hover:scale-105 transition cursor-pointer "></img>
            <img src={DiscordLogo} className="w-[40px]  hover:scale-105 transition cursor-pointer"></img>
            <img src={OpenseaLogo} className="w-[40px]  hover:scale-105 transition cursor-pointer"></img>
            <img src={GithubLogo} className="w-[40px]  hover:scale-105 transition cursor-pointer"></img>
            </div>

        </div>
    )
}