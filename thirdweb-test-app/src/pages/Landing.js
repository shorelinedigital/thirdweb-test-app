import Nav from '../components/Nav';
import IntroText from '../components/IntroText';
import IntroNFT from '../components/IntroNFT';


export default function Landing() {
    return(
      <div className="bg-landing-image bg-cover aspect-auto h-[100vh]">
        
            <Nav />
            <div className='flex justify-between'>
               <IntroText />
              <IntroNFT />
            </div>
        </div>
     
    )
}