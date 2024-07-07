# AnDs-npm-package

## an-imate-ika

_Try it!_

> npm install an-imate-ika

Then simply use it in your react or vite project!

### Here's how you can use it

import the only function (for now) in your .jsx file
> import { enableJumpingAnimation } from 'an-imate-ika

now you just need to create a function like you do when your button is clicked

```
 const handleButtonClick = () => {
    enableJumpingAnimation('your-button-id');
  };
```

### Here's the full example

```
import React from 'react';
import { enableJumpingAnimation } from 'an-imate-ika';

function App() {
  const handleButtonClick = () => {
    enableJumpingAnimation('your-button-id');
  };

  return (
    <div>
      <button id="your-button-id" onClick={handleButtonClick}>
        Jumping Button
      </button>
    </div>
  );
}

export default App;
```

#### Try adding some tailwind to the button for better look

### access this link ---->>> [tailwind](https://tailwindcss.com/docs/guides/vite)

```
import React from 'react';
import { enableJumpingAnimation } from 'an-imate-ika';

function App() {
  const handleButtonClick = () => {
    enableJumpingAnimation('your-button-id');
  };

  return (
    <div>
      <button id="your-button-id" onClick={handleButtonClick} className="px-6 py-3 bg-teal-800 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
        Jumping Button
      </button>
    </div>
  );
}

export default App;

```