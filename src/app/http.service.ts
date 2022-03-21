import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //injecting HttpClient allows us to interact with external domain api calls...like Create, Get, Read and Update.
  constructor(private http: HttpClient) { }

 //lets test this service class and write a function that will be accessible to other components
 myMethod(){
    return console.log('This is dependency injection ');
 } 

 getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

}
