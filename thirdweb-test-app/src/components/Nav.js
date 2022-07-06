import Logo from "../images/Logo.png"
import ConnectBtn from "../images/Subtract.png"
import DisconnectBtn from "../images/Disconnect.png"
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';


export default function Nav() {
    const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
    return(
        <nav className="flex justify-between  items-center pt-5 font-main text-[#3C3C3C] text-2xl  ">

            <div className="flex justify-start items-center ml-10">
                <img src={Logo} alt="logo" className="w-[90px] h-[90px] cursor-pointer"></img>
                <h1 className="text-offblack ml-[15px] text-[30px] cursor-pointer">Sportz Ballerz</h1>

            </div>
                
            <div className="mr-10 flex " >
                
                {address ? (
                <>
                <div>
                <img src={DisconnectBtn} onClick={disconnectWallet} alt="disconnect-button"className="w-[150px] h-[41px] mx-10 cursor-pointer"></img>
                 
                </div>
                
             </>
              ) : (
                <img src={ConnectBtn} onClick={connectWithMetamask} alt="connect-button"className="w-[150px] h-[41px] mx-10 cursor-pointer"></img>
                )}
                
               

            </div>
        </nav>
    )
}