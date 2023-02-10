import React from 'react'
import loading from './loading.gif'

const Spinner = ()=>{

    return (
        <div className='text-center my-3 mx-auto' style={{height:"100px", width:"100px"}} >
            <img src={loading} alt="loading" />
      </div>
    )
}

export default Spinner