
# J-flags

A React library designed to display messages or components when an event occurs on the page, such as inserting data into an API, deleting or updating it, a successful or failed login, when sending an email, clicking a button, or any element of your app, etc. The usage is up to you.


## Installation

Install J-flags with npm

```bash
   npm i j-flags
```
    
## Usage/Examples

```javascript
import { JFlag } from 'j-flags';

function App() {
  return <JFlag 
            text="Hello this is a message"
            sound={true}
            typeF="info"
            animation="fadein"
         />
}

// You can pass a component props instead of a text.

function MyComponent(){
   return(
      <h1>Hi from a component</h1>
   )
}

// He you have to raplace text for component or use both.

function App() {
  return <JFlag 
            component={<MyComponent/>}
            sound={true}
            typeF="info"
            animation="fadein"
         />
}



```


## Documentation

# J-Flags

Each JFlag component has a series of props, some of which are mandatory and some are not.

## Mandatory Props

Every component must have the `typeF` prop, as this prop tells our component the type of JFlag it will load. It only accepts strings and the available options in this first version are ['warning', 'info', 'success', 'error'].

Example:
```jsx
<JFlag typeF="warning" />
```
Also, each component must include one or both of the following mandatory props:

text which only accepts string parameters.
For example, you can insert 
```jsx 
<JFlag text="This is a message"/>
```
, but not 
```jsx
<JFlag text={true}/>
```
or 
```jsx
<JFlag text={<Component/>}/> 
```
as this prop is used to insert a text string into our component.

component prop which accepts only React components as its value.
Example:
```jsx
<JFlag component={<MyComponent/>}/>
```
Using 
```jsx
<JFlag component="This is a text"/> 
```
would be incorrect and cause an error.

Optional Props
sound prop allows a sound to be played when our component appears 
```jsx
<JFlag sound={true} />
```
This prop is not mandatory but if we want to add it, it only accepts boolean values and defaults to false if not specified.

animation prop adds a small animation to our component when it appears. This prop is not mandatory but if added, it only accepts string values. The options available in this first version are ['fadeIn', 'rightToLeft', 'topToDown', 'appears', 'glow', 'show'].
Example:
```jsx
<JFlag animation="fadeIn" />
```

Styling
We can pass our own styles via props. Each <JFlag/> component comes with predefined styles:
```jsx
.flag{
    color:#fff;
    padding:20px;
    right:10px;
    top:10px;
    position:fixed;
    text-align:center;
    min-width:200px;
    border-radius:4px;
    opacity:0;
}
```
Depending on the typeF we choose, it will have one background color or another. 
For example
```jsx
<JFlag typeF="success" /> 
```
would have a background:
```jsx
.success{
    background-color:#4BB543;
}
```
We can replace this with our own inline styles. For this, we use the customStyles prop and the value would be as follows:
```jsx
<JFlag typeF="success" customStyles={{ 'fontSize': '24px', 'backgroundColor': 'blue' }}/>
```
In this way, we would be overwriting the background #4BB543 with our own and we would be giving a size of 24px to the font.

That's all for now, until new updates.

## Development Stack

This project uses the following technologies and tools:

- **TypeScript**: to provide static types to our JavaScript code.
- **Storybook**: for developing and testing UI components in isolation.
- **Rollup**: for bundling our library and making it ready for distribution.

## Contributing

If you wish to contribute to this project, you will need a working knowledge of these technologies. Please refer to the respective documentation of each technology to get started. Contributions are welcomed and greatly appreciated.

[![GitHub](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/morulopez/J-flags.git)

...

## Repository

The source code for this package is available at [GitHub](https://github.com/morulopez/J-flags.git).