
import React from 'react';

export type typeF = "warning"|"info"|"success"|"error";
export type animationsF = "fadeIn"|"rightToLeft"|"topToDown"|"appears"|"glow"|"show";

export interface FlgasProps{
    text?:string | undefined;
    component?:React.ReactElement;
    typeF:typeF;
    sound?:boolean;
    animation?:animationsF;
    customStyles?:{}
}