import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { Country } from 'src/app/country';
import { HttpService } from '../services/http.service';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  name!: any
  myCountry!: Country
  currencyList: string[] = []
  languageList: string[] = []

  constructor(
    private httpService: HttpService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('id')
    })

    this.httpService.getCountries(this.name).subscribe((data: Country[]) =>{
      this.myCountry = data[0]
      let currencies = Object.keys(this.myCountry.currencies)
      let currenciesSize = Object.keys(this.myCountry.currencies).length
      for(let i=0; i<currenciesSize; i++){
        this.currencyList.push(currencies[i])
      }
      let languages = Object.values(this.myCountry.languages)
      let languagesSize = Object.keys(this.myCountry.languages).length
      for(let i=0; i<languagesSize; i++){
        this.languageList.push(languages[i])
      }
    })
  }

  backToHomePage(){
    this.router.navigate([""])
  }
}