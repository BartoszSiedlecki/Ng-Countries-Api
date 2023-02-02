import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl = "https://restcountries.com/v3.1/all"
  public countryUrl = "https://restcountries.com/v3.1/name/"
  public filterUrl = "https://restcountries.com/v3.1/region/"

  constructor(private httpClient: HttpClient){ }

  getCountries(search?: string, filter?: string): Observable<any>{
    if(search){
      return this.httpClient.get(this.countryUrl + search)
    }
    if(filter){
      return this.httpClient.get(this.filterUrl + filter)
    }
    return this.httpClient.get(this.baseUrl)
  }
}
