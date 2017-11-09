import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-router';
import { RouterModule } from '@angular/router';

import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({

    declarations: [
        SharedComponent,
        LoginComponent,
        SignupComponent,
        ForgetPasswordComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        
    ],
    providers: [AuthGuard]
})

export class SharedModule {

}