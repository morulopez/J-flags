import { useEffect, useRef, useState } from "react";
import { typeF,animationsF } from "./interface";
import error from "./assets/error-s.mp3";
import info from "./assets/info-s.mp3";
import success from "./assets/success-s.mp3";
import warning from "./assets/warning-s.mp3";

export function useJflagHook(){
    const objAudio:{[key in typeF]: string}={
        warning,
        error,
        info,
        success
    }
    const audioRef=useRef<HTMLAudioElement>(null);
    const [audio,setAudio]=useState<string>("");
    const [showSound,setShowSound]=useState<boolean>(false);
    const [showAnimation,setShowAnimation]=useState<animationsF|"">("");
    const setAnimation = (animation:animationsF|undefined) =>{
        useEffect(()=>{
            animation ? setShowAnimation(animation) : setShowAnimation("show");
        },[])
    }
    const checkAudio = (audio:boolean|undefined,type:typeF)=>{
        if(audio){
            useEffect(()=>{
                setAudio(objAudio[type]);
                setShowSound(true);
                setTimeout(()=>{
                    audioRef.current?.play()
                },500)
            },[])
        }
    }
    return {audioRef,audio,showSound,showAnimation,checkAudio,setAnimation}
}