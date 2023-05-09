import type { Meta, StoryObj } from '@storybook/react';
import JFlag from '../components/Jflag';
import React from 'react';
import { useState } from "react";


const meta: Meta<typeof JFlag> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Jflag',
    component: JFlag,
};

export default meta;
type Story = StoryObj<typeof JFlag>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

function TestComponent(){
  return(
    <>
      <h1>Hello I Am A Component</h1>
      <button>Press Button</button>
    </>
  )
}
function miComponenent(){
  const [show,setShow] = useState(false);
  const showFlag = ()=>{
    return setShow(!show);
  }
  return(
    <>
    
    <button onClick={showFlag}>Show/Hidden Flag</button>
    {
      show ? <JFlag 
              text='holaaaa'
              component={<TestComponent/>}
              typeF="success" 
              sound={true}
              animation="topToDown"
              customStyles={{ 'fontSize': '24px', 'backgroundColor': 'blue' }}
            /> : ''
    }
    </>
  )
}
export const Primary: Story = {
  render: () => miComponenent()
};