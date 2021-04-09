import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherApplication';
  city:String;
  country:String;
  details=[];
  chart:any;
  constructor(private weatherservice:WeatherService){
  }

  ngOnInit(){
    this.weatherservice.getWeatherDetails().subscribe((data)=>{
      console.log(data);
     // this.details=data['list'];

     //filtering the five days forecast
      for(let i=0;i<data['list'].length;i+=8)
        {
          this.details.push(data['list'][i]);
        }
        this.city=data['city'].name;
        this.country=data['city'].country;
      
    });
  }
}
