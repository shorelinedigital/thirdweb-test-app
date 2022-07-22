import TwitterLogo from "../images/twitterlogo.png"
import DiscordLogo from "../images/discordlogo.png"
import OpenseaLogo from "../images/opensealogo.png"
import GithubLogo from "../images/githublogo.png"


export default function Socials() {
    return(
        <div className="flex flex-col ">
            <img src={TwitterLogo} className="w-[40px] py-[10px] hover:scale-105 transition cursor-pointer "></img>
            <img src={DiscordLogo} className="w-[40px] py-[10px] hover:scale-105 transition cursor-pointer"></img>
            <img src={OpenseaLogo} className="w-[40px] py-[10px] hover:scale-105 transition cursor-pointer"></img>
            <img src={GithubLogo} className="w-[40px] py-[10px] hover:scale-105 transition cursor-pointer "></img>
        </div>
    )
}