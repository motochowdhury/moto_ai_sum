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