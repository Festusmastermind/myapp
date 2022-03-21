import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //declare respective variables in typescript before usage..
  username: string = "KodeFix";
  name: string  = " ";
  clickCounter: number = 0;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
  }
  
  //exhibiting one-way data binding i.e from the component logic to the component template..
  countClick(){
    this.clickCounter +=1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }










}
