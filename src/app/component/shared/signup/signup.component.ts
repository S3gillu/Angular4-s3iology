import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  genders= genders

  ngOnInit(): void {
    //throw new Error('Method Not Implemented.');
  }

  signupForm: FormGroup

  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.email],
      'address': [null, Validators.required],
      'contactno': [null, Validators.required],
      'dob': [null, Validators.required],
      'gender': [null, Validators.required]

    })
  }
  submitForm1(value: any) {
    console.log(value)
  }



}

export const genders = ['Male', 'Female', 'Not Specified'];
// https://codecraft.tv/courses/angular/forms/model-driven-validation/