import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  filterCountries(filter: any){
    let value = filter.value
    if(value != "any"){
      this.router.navigate(['region', value])
    }
    else{
      this.router.navigate([''])
    }
  }

}
