import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'myAngularTest';

  //cars: Observable<Car[]>;
  cars: Car[];

  make: string;
  model: string;
  miles: number;

  constructor (private transportationService: TransportationService) {
    //this.cars = this.transportationService.getCars();
    /* this.transportationService.getCars().subscribe(res =>{
      console.log(res);
      this.cars = res;
    }); */
  }

  ngOnInit(): void {
    this.transportationService.getCars().subscribe(res =>{
      console.log(res);
      this.cars = res;
    });
  }

  addCar(){
    const newCar:Car = {make: this.make, model: this.model, miles: this.miles};
    this.transportationService.addCar(newCar);
  }
}
