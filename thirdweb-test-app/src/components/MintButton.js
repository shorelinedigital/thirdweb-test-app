import { useNFTDrop, useClaimNFT,} from '@thirdweb-dev/react'
import MintBtn from "../images/Mint Btn.png"


export default function MintButton() {
  const nftDrop = useNFTDrop("0x21f489637912f7BdEd53707686a520B7E7645f2A")

  // Now you can use the nft drop contract in the rest of the component
  
    const {
      mutate: claimNft,
      isLoading,
      error,
    } = useClaimNFT(nftDrop);
  
    if (error) {
      console.error("failed to claim nft", error);
    }
  
    return (
      <img disabled={isLoading}
           onClick={() => claimNft({to: "0xb14969b2eCA9733150fFF0C2e9b45844A25e371F", quantity: 1})}
           src={MintBtn}
           > 
      </img>
    );
  
}

