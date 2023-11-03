import React from 'react'
import Image from '../asset/react-logo.png'
export default function Nav() {
  return (
    <div className="w-[550px] h-[91px] bg-neutral-800 flex font-['Inter']">
      <img
        src={Image}
        alt=""
        width={'29PX'}
        className="items-start justify-start flex-col w-[28px] h-[29px] ml-[26px] mr-[7px] my-[31px]"
      />
      <h3 className="text-cyan-300 text-[23px] font-bold my-[31px] mr-auto">
        ReactFacts
          </h3>
          <h4 className="text-right text-blue-100 text-base font-semibold mt-[38px] mr-[27px]">React Course - Project 1</h4>
    </div>
  )
}
