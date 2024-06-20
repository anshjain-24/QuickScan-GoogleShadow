import React from 'react'
import { Rings } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>

            <Rings
                visible={true}
                height="500"
                width="80"
                color="#4fa94d"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    )
}

export default Loading