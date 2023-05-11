import React from "react";
import { typeF, animationsF } from "./interface";
import error from "./assets/error-s.mp3";
import info from "./assets/info-s.mp3";
import success from "./assets/success-s.mp3";
import warning from "./assets/warning-s.mp3";

export class JFlagClass {
  private objAudio: { [key in typeF]: string } = {
    warning,
    error,
    info,
    success,
  };
  private audioRef: React.RefObject<HTMLAudioElement>;
  private audio: string = "";
  private showSound: boolean = false;
  private showAnimation: animationsF | "" = "";
    typeF: any;

  constructor(type: typeF, sound: boolean | undefined, animation: animationsF | undefined) {
    this.audioRef = React.createRef<HTMLAudioElement>();

    if (sound) {
      this.audio = this.objAudio[type];
      this.showSound = true;
      setTimeout(() => {
        this.playSound();
      }, 500);
    }
    this.showAnimation = animation ? animation : "show";
  }

  playSound() {
    if (this.audioRef.current) {
      this.audioRef.current.play();
    }
  }

  getAudioRef() {
    return this.audioRef;
  }

  getAudio() {
    return this.audio;
  }

  getShowSound() {
    return this.showSound;
  }

  getShowAnimation() {
    return this.showAnimation;
  }
}

export function useJflagHook(type: typeF, sound: boolean | undefined, animation: animationsF | undefined) {
  const jFlagClass = new JFlagClass(type, sound, animation);

  return {
    audioRef: jFlagClass.getAudioRef(),
    audio: jFlagClass.getAudio(),
    showSound: jFlagClass.getShowSound(),
    getShowAnimation: jFlagClass.getShowAnimation.bind(jFlagClass), // Proporciona un método público para acceder a showAnimation
  };
}
