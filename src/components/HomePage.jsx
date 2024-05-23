import React, {useState, useEffect, useRef}from 'react'







export default function HomePage(props) {
const {setAudioStream, setFile} = props


const{recordingStatus, setrecordingStatus} = useState('inactive')
const {audioChunks, setAudioChunks} = useState([])
const {duration, setDuration} = useState(0)

const mediaRecorder = useRef(null)

const mimiType = 'audio/webm'


async function startRecording () {
    let tempStream
    console.log("start Recording")
try {
    const streamData = navigator.mediaDevices({
        audio: true,
        video: false,
    })
    tempStream = streamData
} catch (err) {
    console.log(err.message)
    return
    
}

// create new media recorder instance using the stream 
const media = new MediaRecorder(tempStream,{type: mimeType})

mediaRecorder.current = media

mediaRecorder.current.start()
let audioChunks = []
mediaRecorder.current.ondataavalible =(event) => {
    if (typeof event.data === 'undefined'){return}
    if (event.data === 0){return}
    localAudioChunks.push(event.data)
}
}
 
  return (
    <main className='flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 md: gap-5 justify-center '>
     
     <h1 className='font-semibold text-5xl ms: text-7xl pb-20'>Free<span className='text-blue-400 bold'>Scribe</span>
     </h1>
     <h3 className='font-medium md:text-lg'> Record<span 
     className='text-blue-400'>&rarr;</span>Transcribe<span 
     className='text-blue-400'>&rarr;</span>Translate</h3>

     <button className=' specialBtn px-4 py-2 rounded-xl flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
        <p className='text-base text-blue-400'>Record</p>
        <i className="fa-solid fa-microphone-lines"></i>
     </button>
     <p>or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>upload
      <input onChange={(e) => {
        const tempFile = e.target.files[0]
        setFile(tempFile)
      }} className='hidden' type='file' accept='.mp3,.wave'/>
     </label>a mp3 file</p>
     <p className='italic text-slate-400'>Free now Free Forever</p>
</main>
  )
}
 