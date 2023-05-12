import type { Meta, StoryObj } from '@storybook/react';
import { JFlag } from '../components';
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
  const styles = {
    fontSize:'22px',
    color:'#fff',
    textTransform:'capitalize'
  } 
  return(
    <>
      <span style={styles}>message sent successfully</span>
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
              component={<TestComponent/>}
              typeF="success" 
              sound={true}
              animation="rightToLeft"
            /> : ''
    }
    </>
  )
}
export const Primary: Story = {
  render: () => miComponenent()
};