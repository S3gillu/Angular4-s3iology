import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
    //throw new Error('Method Not Implemented.');
  }

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [ '',[Validators.required, Validators.minLength(4),Validators.maxLength(15)]],
      password: [ '',[Validators.required, Validators.minLength(6),Validators.maxLength(20)]]
    })
  }


  submitForm(value: any) {
    if(this.loginForm != null)
    console.log(value)
    this.loginForm.reset()
  }

}
