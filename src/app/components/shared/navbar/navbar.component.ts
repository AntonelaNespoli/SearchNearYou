import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeSelectedService } from 'src/app/services/type-selected.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  constructor(private router: Router, private typeSelected: TypeSelectedService) {}

  // call set initial values and navigate to home component
  goBack(){
    this.typeSelected.setInitialValues();
    this.router.navigate(['home']);
  }

  //return the correct title depends the option chosen
  getTitle() {
    return this.typeSelected.getTitle()
  }

  //return the flag, is true when option was chosen
  getOptionWasChosen() {
    return this.typeSelected.getOptionWasChosen()
  }
}
