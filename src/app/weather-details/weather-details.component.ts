import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  details=[];
  chart:any;

  constructor(private weatherservice:WeatherService) { }

  ngOnInit(): void {
    this.weatherservice.getWeatherDetails().subscribe((data)=>{

     //filtering the five days forecast
      for(let i=0;i<data['list'].length;i+=8)
        {
          this.details.push(data['list'][i]);
        }
    });
  }

}
