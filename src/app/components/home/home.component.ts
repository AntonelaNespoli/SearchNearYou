import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {


  constructor(private router: Router) {
  }

  //when the option was chosen in client, navigate to results and sent the type like a parameter
  chosenAnOption(type: string){
    this.router.navigate(['/results', type]);
  }
}
