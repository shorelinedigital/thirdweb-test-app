import Reel1 from "../images/film reel.png"
import Reel2 from '../images/film reel2.png'

export default function Reel() {
    return(
      <div className="bg-reel-image bg-cover h-[100vh]  " >
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
      
    </div>
    )
}