import React, { useState } from 'react';
import ScreenCapture from 'react-screen-capture-v2';

const App = () => {
  const [on, setOn] = useState(false);
  const [img, setImg] = useState("");

  return (
    <>
      <button onClick={() => setOn(!on)}>
        Click here to toggle ScreenCapture
      </button>
      <h1>ScreenCapture is {on ? "on" : "off"}</h1>
      <h2>Only the following three paragraphs may be captured:</h2>
      <ScreenCapture
        on={on}
        onEndCapture={(b64: string) => setImg(b64)}
      >
        <div style={{border: '1px solid black', padding: '2px 10px'}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore laborum neque ipsa nulla rem est cum eveniet sed voluptates, perspiciatis inventore nemo ducimus accusantium temporibus, quisquam cumque earum! Velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore laborum neque ipsa nulla rem est cum eveniet sed voluptates, perspiciatis inventore nemo ducimus accusantium temporibus, quisquam cumque earum! Velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore laborum neque ipsa nulla rem est cum eveniet sed voluptates, perspiciatis inventore nemo ducimus accusantium temporibus, quisquam cumque earum! Velit.</p>
        </div>
      </ScreenCapture>
      <hr />
      <h2>Your screen capture will appear below:</h2>
      <img src={img} alt='The screen capture appears here' />
    </>
  );
}

export default App;