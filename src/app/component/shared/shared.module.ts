import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-router';
import { RouterModule } from '@angular/router';

import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule} from '@angular/forms';






@NgModule({

    declarations: [
        SharedComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        RouterModule,
        ReactiveFormsModule
       
    ],
    providers: []
})

export class SharedModule {

}