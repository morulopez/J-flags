import React from "react";
import {FlgasProps} from "./interface";
import { checkReactElement } from "./errorControl";
import { useEffect, useRef, useState } from "react";
import { typeF, animationsF } from "./interface";
import error from "./assets/error-s.mp3";
import info from "./assets/info-s.mp3";
import success from "./assets/success-s.mp3";
import warning from "./assets/warning-s.mp3";

import "./flag.css";

const JFlag = (props:FlgasProps)=>{
    checkReactElement(props);
    const {text,typeF,sound,animation,component,customStyles} = props;
    const objAudio: { [key in typeF]: string } = {
        warning,
        error,
        info,
        success
    }
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audio, setAudio] = useState<string>("");
    const [showSound, setShowSound] = useState<boolean>(false);
    const [showAnimation, setShowAnimation] = useState<animationsF | "">("");

    useEffect(() => {
        if (sound) {
            setAudio(objAudio[typeF]);
            setShowSound(true);
        }
    }, [typeF, sound]);
    useEffect(() => {
        animation ? setShowAnimation(animation) : setShowAnimation("show");
    }, [animation]);

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