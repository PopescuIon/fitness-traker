import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  
  maxDate:Date = new Date();
  /**
   *
   */
  constructor() { 
  }
  ngOnInit(): void {    
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  
  onSubmit(form:NgForm){
    console.log(form);
  }
}
