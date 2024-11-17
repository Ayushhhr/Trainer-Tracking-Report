import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmBoxInitializerService {
  private layoutType: string = 'NONE';
  private animationIn: string = 'NONE';
  private animationOut: string = 'NONE';
  private buttonPosition: string = 'right';

  constructor() {}

  setLayoutType(layoutType: string) {
    this.layoutType = layoutType;
  }

  setAnimationIn(animationIn: string) {
    this.animationIn = animationIn;
  }

  setAnimationOut(animationOut: string) {
    this.animationOut = animationOut;
  }

  setButtonPosition(buttonPosition: string) {
    this.buttonPosition = buttonPosition;
  }

  getConfig() {
    return {
      layoutType: this.layoutType,
      animationIn: this.animationIn,
      animationOut: this.animationOut,
      buttonPosition: this.buttonPosition
    };
  }
}
