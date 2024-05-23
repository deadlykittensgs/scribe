import React from 'react'

export default function FileDisplay(props) {
    const {handleAudioReset, file, audioStream} = props
  return (
    <main className='flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 md: gap-5 justify-center w-fit max-w-full mx-auto '>

<h1 className='font-semibold text-4xl ms: text-6xl pb-20'>Your <span className='text-blue-400 bold'>File</span>
     </h1>
     <div className='flex flex-col text-left mx-auto my-4'>
        <h3 className='font-semibold'>Name</h3>
        <p>{file.name}</p>
     </div>
     <div className='flex items-center justify-between gap-4 '>
        <button onClick={handleAudioReset} className=' px-3 font-medium gap-2 flex items-center text-slate-400 hover:text-blue-600 duration-200'>Reset</button>
        <button className='px-3 font-medium gap-2 flex items-center specialBtn py-2 rounded-lg text-blue-400'> <p>Transcribe</p>
        <i className="fa-solid fa-pen-fancy"></i>
        </button>
     </div>

    </main>
  )
}
