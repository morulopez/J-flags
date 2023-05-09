import React from "react";
import {FlgasProps} from "./interface";
import { useJflagHook } from "./customHooks";
import { checkReactElement } from "./errorControl";

import "./flag.css";

const JFlag = (props:FlgasProps)=>{
    checkReactElement(props);
    const {text,typeF,sound,animation,component,customStyles} = props;
    const { audioRef, audio, showSound, showAnimation } = useJflagHook(typeF,sound, animation);
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