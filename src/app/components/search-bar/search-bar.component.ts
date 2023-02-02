import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/country';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  countries!: Country[];

  constructor(
    private httpService: HttpService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchCountries(form: NgForm){
    let name = form.value.search
    if(name){
      this.router.navigate(['/name', name])
    }
    else{
      this.router.navigate([''])
    }
  }
}
