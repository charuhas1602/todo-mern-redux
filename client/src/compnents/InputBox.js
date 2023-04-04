import React, { useState } from 'react'

const InputBox = () => {

    const [input, setInput] = useState("")
    return (
        <div className='flex align-baseline my-5 justify-center'>
            <input type="text" name="" id="" value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter todo here...!'
                className='outline-none focus:outline-none border-0 border-b-2 w-[60%] mt-10' />
            <button className='bg-neutral-300 p-2 rounded-md mx-2 text-gray-900 disabled:cursor-not-allowed disabled:bg-neutral-500 self-end disabled:[display:none]' disabled={input ? false : true}>Add Todo</button>
        </div>
    )
}

export default InputBox