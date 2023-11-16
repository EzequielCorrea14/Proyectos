import React from 'react'
import video from './images/video2.mp4'

const Background = () => {
  return (
    <div>
        <video onload="mostrarVideo()" id="videoFondo" muted autoplay loop>
            <source id="mostrarVideo" src={video}/>
        </video>
    </div>
  )
}

export default Background