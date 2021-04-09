import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http:HttpClient) { }

  getWeatherDetails(){
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517');
  }
}
