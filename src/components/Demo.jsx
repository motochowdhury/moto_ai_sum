import { useState,useEffect } from "react";
// Icons
import {linkIcon,loader,tick,copy} from '../assets';
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article,setArticle] = useState({
    url: '',
    summary: ''
  })

  const [getSummary, {error, isFatching}] = useLazyGetSummaryQuery();

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {data} = await getSummary({articleUrl: article.summary})

    if(data?.summary) {
      const newArticle = {...article, summary: data.summary}

      setArticle(newArticle)
      console.log(newArticle)
    }
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
    </section>
  )
}

export default Demo


// need to recover my self
// Can i get well tommorow?
// the code is nothing for me at this time, we are taking to go for our local sources, it can be a local formula to takes our security.we can formula we can do something to our services. we have to takes our formula to hole security. we can start our local formula those which we don't can be a hole solutions to create a mutablity, it can be a hole genaretion. those who want all the files to do everything with our local system. it can be a hole solutions to create all the thing with our formula, this will be a hole source int the solutions to makes all the thing for the famoliarity to curious local formal to the thing. our security in the hole source made all the courve. may be all the hole solutions. in the way to made curiosioty all the printig protential. this is the way to call the faculty to do something for the server. in the way to the local server,