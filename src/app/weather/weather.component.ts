import { Component } from '@angular/core';
import { Place } from '../place';
import { PressureService } from '../services/pressure.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(public serv: PressureService){}

  Places: Place [] = [
  {
    name: "Paris",
    alttitude: 50
  },
  {
    name: "London",
    alttitude: 150
  },
  {
    name: "New York",
    alttitude: 175
  },
  {
    name: "Berlin",
    alttitude: 250
  },
]

  Set(){
    this.serv.setData(this.Places);
  }

  GetInfo(){
    this.serv.getInfoAboutPressure();
  }

}
