import React from 'react';
import { isElement } from 'react-is';
import { FlgasProps,typeF as typeFInterface,animationsF} from "./interface";

export function checkReactElement(props:FlgasProps) {
    const {text,typeF,sound,animation,component,customStyles} = props;
    const VALID_TYPES: typeFInterface[] = ['warning', 'info', 'success', 'error'];
    const VALID_ANIMATION: animationsF[] = ['fadeIn','rightToLeft','topToDown','appears','glow','show'];
    if(text===undefined && component===undefined) 
        return createError('Both text and component props are undefined, a least one of them should be defined');
    if(typeof text!=="undefined" && typeof text!=="string") 
        return createError('Only allow string typeof for text prop');
    if(typeof customStyles!=="undefined" && typeof customStyles!=='object')
        console.error(`Styles prop should be a object like {{ 'fontSize': '24px', 'backgroundColor': 'blue' }}`)
    if(typeof component!=="undefined" && !isElement(component))
        return createError('Only allow React component typeof for component prop');
    if(typeof sound!=="undefined" && typeof sound!=="boolean") 
        return createError('sound Props should be boolean value');
    if(!VALID_TYPES.includes(typeF)) 
        return createError(`Only allow values as ${JSON.stringify(VALID_TYPES)} for typeF prop`);
    if(typeof animation!=="undefined" && !VALID_ANIMATION.includes(animation)) 
        return createError(`Only allow values as ${JSON.stringify(VALID_ANIMATION)} for animation prop`);
}

function createError(Mesagge:string){
    console.error(Mesagge);
    throw Error(Mesagge);
}