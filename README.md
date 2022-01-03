# Advinow Components

This component library makes use of following technologies

- TurboRepo (fast build system)
- Tailwindcss (utility first css framework)
- Storybook (tool to build ui components in isolation)

# Usage

To use this library

- first install the component library using

```
yarn add advinow-component-library
or
npm i advinow-component-library
```

- import the css file

```tsx
// index.tsx
import 'advinow-components/dist/main.css'
```

- import the component from lib

```tsx
import React from 'react'
import { Alert } from 'advinow-components'

function App() {
  return (
    <div className='App'>
      <Alert />
    </div>
  )
}

export default App
```

# Dev Flow

Run at the root of the project

```
yarn
```

In order to start development

```
yarn dev
```

This will start the development server that runs webpack build and also the CRA server to test the components live. Since the dev start the webpack in watch mode the changes made on the library will be reflected immediately on CRA

However, It is not recommended to create the component using this follow of making changes on packages/advinow-core-ui and seeing the reflection on CRA because first its slow and second we are using storybook for building components in isolation

The recommended workflow would be to start the storybook server along with the dev server using this command inside the
packages/advinow-core-ui

```
yarn storybook
```

This will spin up the storybook server where we can see the live changes to individual component as we are working; in isolation
