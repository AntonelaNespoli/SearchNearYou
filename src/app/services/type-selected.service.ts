import { Injectable } from '@angular/core';
import { TYPES } from '../shared/types.const';

@Injectable({
  providedIn: 'root'
})
export class TypeSelectedService {

  title: string
  optionWasChosen: boolean;

  constructor() {
    this.setInitialValues()
  }

  //set initial values
  setInitialValues(){
    this.optionWasChosen = false;
    this.title = 'SearchNearYou'
  }

  //update values using the type
  setType(type: string) {
    this.title = TYPES[type.toUpperCase()].title
    this.optionWasChosen = true;
  }

  //return the correct title
  getTitle() {
    return this.title
  }

  //Return the flag, is true when option was chosen
  getOptionWasChosen() {
    return this.optionWasChosen
  }

}
