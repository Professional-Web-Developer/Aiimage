import React from 'react'
import classes from './ImageGenerator.module.css'
import df from '../assets/react.svg'
const ImageGenerator = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        Ai Image 
        <span> Generator</span>
      </div>
      <div className={classes.Img_loading}>
        <div className={classes.image}>
          <img src={df} alt="" />
        </div>
      </div>
      <div className={classes.searchbox}>
        <input type="text" className={classes.search_input} placeholder='describe what you want to see' />
        <div>
          <button className={classes.generatebutton}>
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator