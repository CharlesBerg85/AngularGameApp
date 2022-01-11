import { Component, OnInit } from '@angular/core';
import { Signup } from '../models/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: Signup = new Signup();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit Successful: ' , this.model);
  }
}
