import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  public getCountryData(){
    return this.http.get("https://api.worldbank.org/V2/country", {
      params: {
        format: 'json',
        per_page: 300
      }
    })
  }
}
