import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/shared/models/signup';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: Signup = new Signup();
  errorMessage: string;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.createUserWithEmailAndPassword(this.model.email, this.model.password)
      .then(() => {
        console.log('User created successfully: ', this.model.email);
      })
      .catch(error => {
        console.log('Error creating user: ', error);
        this.errorMessage = error.message;
      });
  }
}
