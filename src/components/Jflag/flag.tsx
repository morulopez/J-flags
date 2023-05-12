import React from "react";
import {FlagsProps} from "./interface";
import { checkReactElement } from "./errorControl";
import { useJflagHook } from "./customHooks";
import "./flag.css";

const JFlag = (props:FlagsProps)=>{
    checkReactElement(props);
    const {text,typeF,sound,animation,component,customStyles} = props;
    const {audioRef,audio,showSound,showAnimation,checkAudio,setAnimation} = useJflagHook();
    setAnimation(animation);
    checkAudio(sound,typeF);

    return (
        <>
            <div className={`flag ${typeF} ${showAnimation}`} style={customStyles}>
                {text}
                {component}
            </div>
            {
                showSound ? (
                    <audio ref={audioRef} autoPlay>
                        <source src={audio} type="audio/mpeg"/>
                    </audio>
                )
                :''
            }
        </>
  )
}

export default JFlag;