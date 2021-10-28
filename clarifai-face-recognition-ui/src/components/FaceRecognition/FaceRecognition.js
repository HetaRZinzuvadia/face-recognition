import React from 'react'
import './FaceRecognition.css'

export default function FaceRecognition ({ imageUrl, box }) {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        {imageUrl && <img id='input-image' alt='image-to-detect' src={imageUrl} width='500px' height='auto'/>}
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
}
