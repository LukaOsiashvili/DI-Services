import { Injectable } from '@angular/core';
import { Place } from '../place';


@Injectable({
  providedIn: 'root'
})
export class PressureService {

  constructor() { }

  temp: any;

  setData(object: any){
    this.temp = object;
    console.log("Data Is Set");
    console.log(this.temp);
  }

  getInfoAboutPressure(){
    this.temp.forEach((place: Place)  => {
      
      if(place.alttitude > 200){
        console.log(place.name + " has low air pressure");
      }
      else if(place.alttitude < 200 && place.alttitude > 100){
        console.log(place.name + " has medium air pressure");
      }
      else{
        console.log(place.name + " has high air pressure");
      }
    });
  }

}
