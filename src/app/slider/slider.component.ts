import { Component, OnInit } from '@angular/core';
import { City } from '../models/City';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  index:number = 0;
  cities:City[];
  city:City;

  constructor() { }

  ngOnInit(): void {

    this.cities = [
      {
        city: 'Amritsar',
        country: 'India'
      },
      {
        city: 'Paris',
        country: 'France'
      },
      {
        city: 'Rome',
        country: 'Italy'
      },
      {
        city: 'Angelholm',
        country: 'Sweden'
      },
      {
        city: 'Stuttgart',
        country: 'Germany'
      },
    ]
    this.setCity()

  }

  setCity ():void {
    this.city = this.cities[this.index]
  }

  nextCity ():void {
    if(this.index >= 4){
      this.index = 0;
    }
    else{
      this.index += 1;
    }
    this.setCity()
  }

  previousCity ():void {
    if(this.index <= 0){
      this.index = 4;
    }
    else{
      this.index -= 1
    }
    this.setCity()
  }

}
