import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Country } from 'src/app/country';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries!: Country[]
  country!: Country
  name!: any
  filter!: any

  constructor(
    private httpService: HttpService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('country:search')
      this.filter = params.get('country:filter')

      this.httpService.getCountries(this.name, this.filter).subscribe((data: Country[]) =>{
        this.countries = data
      })
    })
  }

  countryDetails(country: any){
    this.router.navigate(["details", country.name.common])
  }
}