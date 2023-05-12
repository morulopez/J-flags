import { useEffect, useRef, useState } from "react";
import { typeF,animationsF } from "./interface";
import objAudio from "./objectAudio";
export function useJflagHook(){

    const audioRef=useRef<HTMLAudioElement>(null);

    const [audio,setAudio]=useState<string>("");

    const [showSound,setShowSound]=useState<boolean>(false);

    const [showAnimation,setShowAnimation]=useState<animationsF|"">("");

    const setAnimation = (animation:animationsF|undefined) =>{

        useEffect(()=>{

            animation ? setShowAnimation(animation) : setShowAnimation("show");

        },[animation])

    }

    const checkAudio = (audio:boolean|undefined,type:typeF)=>{

        if(audio){

            useEffect(()=>{

                setAudio(objAudio[type]);

                setShowSound(true);

            },[audio,type])

        }

    }

    return {audioRef,audio,showSound,showAnimation,checkAudio,setAnimation}

}