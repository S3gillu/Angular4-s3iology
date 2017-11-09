import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  closeResult: string;
  ngOnInit():void {}
  forgetPasswordForm :  FormGroup;

  constructor(fb: FormBuilder , private modalService: NgbModal) {
    this.forgetPasswordForm = fb.group({
      forgetPassword : ['',[Validators.required]]
    })
   }
   submitForm(value: any) {
    if(this.forgetPasswordForm != null)
    console.log(value)
    this.forgetPasswordForm.reset()
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
