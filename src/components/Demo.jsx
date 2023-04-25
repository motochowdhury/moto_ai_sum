import { useState,useEffect } from "react";
// Icons
import {linkIcon,loader,tick,copy} from '../assets';

const Demo = () => {
  const [article,setArticle] = useState({
    url: '',
    summary: ''
  })

  const handleSubmit = async(e) => {
    alert('submit');
  }


  return (
    <section className="mt-16 w-full max-w-xl ">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center"
        onSubmit={handleSubmit}
        >
          <img src={linkIcon} alt="" 
          className="absolute left-0 my-2 ml-3 w-5"
          />
          <input 
            type="url"
            value={article.url}
            onChange={(e)=>setArticle({...article, url: e.target.value})}
            placeholder="Enter a URL"
            required
            className="url_input peer"
          />
          <button 
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⮌
          </button>
        </form>
      </div>
    </section >
  )
}

export default Demo