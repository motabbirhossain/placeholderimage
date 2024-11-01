import { useState } from 'react'
import './App.css'

function App() {

    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(200);
    const [imageSrc, setImageSrc] = useState('');

    const generatePlaceholder = () => {

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');

        // Fill the background with a light gray color
        context.fillStyle = '#cccccc';
        context.fillRect(0, 0, width, height);

        // Set the text properties
        context.fillStyle = '#000000';
        context.font = '40px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        // Draw the text
        const text = `${width}x${height}`;
        context.fillText(text, width / 2, height / 2);

        // Convert the canvas to a data URL and set it as the image source
        const dataURL = canvas.toDataURL('image/png');
        setImageSrc(dataURL);
    };

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = `placeholder-${width}x${height}.png`;
        link.click();
    };


  return (
      <section className="placeholder-gene">
          <div className="row">
              <div className="placeholder-gene__top">
                  <h1 className="placeholder-gene__top__text">Placeholder Image Generator</h1>
              </div>
              <div className="placeholder-gene__middle">
                  <div className="placeholder-gene__middle__group">
                      <label htmlFor="width">Width:</label>
                      <input type="number" id="width" value={width}
                             onChange={(e) => setWidth(Number(e.target.value))}/>
                  </div>
                  <div className="placeholder-gene__middle__group">
                      <label htmlFor="height">Height:</label>
                      <input type="number" id="height" value={height}
                             onChange={(e) => setHeight(Number(e.target.value))}/>
                  </div>
                  <button className='placeholder-gene__btn btn btn-info' onClick={generatePlaceholder}>Generate Placeholder</button>
              </div>
              <div className="placeholder-gene__bottom">
                  {imageSrc && (
                      <div className="placeholder-gene__bottom__box">
                          <button className='placeholder-gene__btn btn btn-primary' onClick={downloadImage}>Download Image</button>
                          <img src={imageSrc} alt="Placeholder"/>
                      </div>
                  )}
              </div>
          </div>
      </section>
  )
}

export default App
