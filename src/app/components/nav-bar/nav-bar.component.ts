import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public variables:any = document.querySelector(':root')
  public day:number = 0 
  dayNightMode: string = "light_mode"
  dayNightModeTemplate: string = "Light Mode"

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.dayNightMode = "dark_mode"
    this.dayNightModeTemplate = "Dark Mode"
    if(this.day == 0){
      this.day = 1
      this.variables.style.setProperty("--day-night-mode-bg", "rgb(255, 255, 255)")
      this.variables.style.setProperty("--day-night-mode-components", "rgb(255, 255, 255)")
      this.variables.style.setProperty("--day-night-mode-shadow", "2px 2px 3px .5px gray")
      this.variables.style.setProperty("--day-night-mode-text", "rgb(0, 0, 0)")
    }
    else{
      this.dayNightMode = "light_mode"
      this.dayNightModeTemplate = "Light Mode"
      this.day = 0
      this.variables.style.setProperty("--day-night-mode-bg", "hsl(207, 26%, 17%)")
      this.variables.style.setProperty("--day-night-mode-components", "hsl(209, 23%, 22%)")
      this.variables.style.setProperty("--day-night-mode-shadow", "2px 2px 3px .5px black")
      this.variables.style.setProperty("--day-night-mode-text", "rgb(255, 255, 255)")
    }
  }

}
