import { useState,useEffect } from "react";
// Icons
import {linkIcon,loader,tick,copy} from '../assets';

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl ">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center"
        onSubmit={()=>{}}
        >
          <img src={linkIcon} alt="" 
          className="absolute left-0 my-2 ml-3 w-5"
          />
          <input 
            type="url"
            value=""
            onChange={()=>{}}
            placeholder="Enter a URL"
            required
            className="url_input peer"
          />
        </form>
      </div>
    </section >
  )
}

export default Demo