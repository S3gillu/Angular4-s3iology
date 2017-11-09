import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  closeResult: string;
  genders = genders;

  ngOnInit() {
    //throw new Error('Method Not Implemented.');
  }
  refresh() { }

  signupForm: FormGroup

  constructor(fb: FormBuilder,  private modalService: NgbModal) {
    this.signupForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]*$/)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]*$/)]],
      email:   ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      contactno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      Confirmpassword:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    }, { validator: this.checkIfMatchingPasswords('password', 'Confirmpassword') });
  }
  submitForm1(value: any) {
    if (this.signupForm.valid)
      console.log(value)
    this.signupForm.reset()
    // this.signupForm.controls.genders.setValue(0)
  }

  checkPass: any;
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value || passwordConfirmationInput.invalid) {
        this.checkPass = true;
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        this.checkPass = false;
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }


  a(event) {
    var char = event.which;
    if (char > 31 && char != 32 && (char < 65 || char > 90) && (char < 97 || char > 122)) {
      return false;
    }
  }

  public restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

export const genders: any = ['Male', 'Female', 'Others'];

