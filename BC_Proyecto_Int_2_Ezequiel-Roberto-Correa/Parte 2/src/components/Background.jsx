import React from 'react'

const Background = () => {
  return (
    <div>
        <video onload="mostrarVideo()" id="videoFondo" muted autoplay loop>
            <source id="mostrarVideo" src="../images/video/video2.mp4"/>
        </video>
    </div>
  )
}

export default Background