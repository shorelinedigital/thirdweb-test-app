import Reel1 from "../images/film reel.png"
import Reel2 from '../images/film reel2.png'
import Footer from "../components/Footer"


export default function Reel() {
    return(
      <div className="bg-reel-image bg-cover h-[120vh] overflow-x-hidden overflow-y-hidden " >
      <div className="animate-slideshow flex justify-center">
        <img src={Reel1}></img>
        <img src={Reel1}></img>
        <img src={Reel1}></img>
        </div>

      <div className="animate-slideshow2 flex justify-center">
        <img src={Reel2}></img>
        <img src={Reel2}></img>
        <img src={Reel2}></img>
        </div>
      <Footer />
    </div>
    )
}