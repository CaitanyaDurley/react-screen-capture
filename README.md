# react-screen-capture-v2

> A tiny React library which allows you to take a snapshot of part of the screen.
>
> This is a fork of Bunlong's [react-screen-capture](https://github.com/Bunlong/react-screen-capture).
> 
> My changes are to:
> 1. Support more recent react versions
> 2. Rewrite as a functional component
> 3. Restrict the capturable screen (namely to the children of the ScreenCapture component)
> 4. Clean up the code

[![NPM](https://img.shields.io/npm/v/react-screen-capture-v2.svg)](https://www.npmjs.com/package/react-screen-capture-v2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-screen-capture-v2
```

## Usage
```tsx
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
```

See the example react project in my [Github](https://github.com/CaitanyaDurley)

## License

MIT © [CaitanyaDurley](https://github.com/CaitanyaDurley)
