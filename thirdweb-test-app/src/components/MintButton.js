import { useNFTDrop, useClaimNFT, useAddress} from '@thirdweb-dev/react'

import MintBtnPop from '../images/MintBtnPop.png'


export default function MintButton(props) {
  const nftDrop = useNFTDrop("0x305066fDb2F7c9D5Aa75cC1A625d6b21c838e544")
  const address = useAddress();
  // Now you can use the nft drop contract in the rest of the component
  
 

    const {
      mutate: claimNft,
      isLoading,
      error,
    } = useClaimNFT(nftDrop);
  
    if (error) {
      console.error("failed to claim nft", error);
    } 

    if (isLoading) {
      //console.log('loading')
      props.passData(isLoading)
     
    }
    
   

    return (
      <img disabled={isLoading}
           onClick={() => claimNft({to: address, quantity: props.inputNum})}
           src={MintBtnPop}
           className="w-[170px] active:opacity-75 hover:scale-105 transition cursor-pointer "
           > 
      </img>
    );
  
}
