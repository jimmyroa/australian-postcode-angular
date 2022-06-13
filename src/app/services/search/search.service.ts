import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  
  //API Connection constants:
  private apiProxy= '/suburbs.json';//temporal solution CORS frontend
  private apiRadius= '/radius.json';//


  constructor(private http:HttpClient) { }


  //GET SUBURBS BY POSTCODE:
  getSuburbsByPostCode(postcode:number){
    console.log(this.apiProxy + postcode);
    return this.http.get<any>(`${this.apiProxy}`, {
      params: { postcode }
    });
  }

  //GET SUBURBS WITHIN 4KM OF THE POSTCODE SELECTED: 
  getSuburbsByRadius4km(latitude:number, longitude:number, distance:number){
    return this.http.get<any>(`${this.apiRadius}`, {
      params: { latitude, longitude, distance }
    });
 }




}
