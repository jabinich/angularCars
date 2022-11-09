import { Injectable } from '@angular/core';
import { Car } from './car';
import { HttpClient } from '@angular/common/http';
//import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
  honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
  bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};
 
  cars:Car[] = [this.subaru, this.honda, this.bmw];

  constructor(private http: HttpClient) { }

  //getCars() {
  //  return this.cars;
  //}

  getCars():Observable<Car[]> {
    //return this.http.get<Car[]>('/cars/');
    return this.http.get<Car[]>('http://localhost:3000/cars/');
  }

  addCar(car: Car){
    this.cars.push(car);
  }
}


