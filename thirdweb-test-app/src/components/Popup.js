import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MinusBtn from '../images/minus btn.png'
import PlusBtn from '../images/plus btn.png'
import MintBtn from "../images/Mint Btn.png"
import MintButton from "./MintButton";
import Spinner from "../images/spinner.png"

const { ethers } = require("ethers");
const provider = new ethers.providers.Web3Provider(window.ethereum)
 


export default function PopupFunc() {
  
 
  
  const contentStyle = { background: 'rgba(60, 60, 60, 0.84)', border: 'none', width: '450px', height: 'auto', borderRadius: '15px', position: 'relative',}
  const overlayStyle = {background: 'rgba(255, 255, 255, .45)'}
  
  const [inputNum, setInputNum] = React.useState(1)

  function plusOne() {
    setInputNum(prevNum => prevNum + 1)
  }

  function minusOne(){
    setInputNum(prevNum => Math.max(1, prevNum - 1))
  }

  const [loadingData, setLoadingData] = React.useState(false)
  

  const passData = (data) => {
    setLoadingData(data);
    
  };

  let loader;
  if (loadingData) {
    loader = <img className='animate-popup-spin' src={Spinner}></img>
  } else {
    loader = ''
  }
  

  return (
    
  <Popup trigger={<img src={MintBtn} className="w-[170px] active:opacity-75 hover:scale-105 transition cursor-pointer "></img>} {...{ contentStyle, overlayStyle  }} position="center" modal nested>
  { close => (
    <div className='flex flex-col items-center'>
      <button className="cursor-pointer absolute block py-[5px] px-[2px] leading-[20px] right-[-30px] top-[-35px] text-[40px] rounded-[18px]  border-none " onClick={close}>
          &times;
        </button>
    <h2 className='text-[#81D4F5] font-main text-[45px] mb-10 mt-5 '>Mint Memories</h2>
    <div>
       {loader}
     
    </div>
    <div className='flex mt-12 mb-2'>
      <img className='w-[60px] h-[60px] hover:scale-[102%] transition cursor-pointer mx-5' onClick={minusOne} src={MinusBtn}></img>
      <p className='rounded-[15px] font-text text-[#81D4F5] text-[35px] border-none text-center focus:outline-none px-2 pt-[4px] pb-2 w-[105px] h-[55px] bg-popup-items/[0.3] shadow-popup-shadow '>{inputNum}</p>
      <img className='w-[60px] h-[60px] hover:scale-[102%] transition cursor-pointer mx-5' onClick={plusOne} src={PlusBtn}></img>
    </div>
    <p className='font-main text-[#81D4F5] text-[25px] mb-4'>0.05eth</p>
    <MintButton 
       passData={passData}
      inputNum={inputNum}
    />
  
  </div>
  )}
  </Popup>
 

)};