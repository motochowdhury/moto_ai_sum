import React, { useState } from 'react'

const home = () => {
    const [loading, setLoading] = useState()
  return (
    <div>
        <div>
            {/* there will be a local server in this system, we will close it at any time if we dont need it more. we can also take all the server in the hole telegramme for our local services, we can also take everything in the hole priority */}
            {loading && 
            <div>
                hello world, it's working??
                <div>
                    <img src="" alt="" />
                </div>
                {/* this button will done all the functional work in one click, we can call it main switch, this will be very powerful and dangerous. we also add an warning massage for this field so that no anybody can confirm before click this process. this will be fine in this services. */}
                <div>
                    <button>submit</button>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default home