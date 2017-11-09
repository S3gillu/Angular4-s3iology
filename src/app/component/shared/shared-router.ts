import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, Route, } from '@angular/router';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
   
            { path: '', redirectTo : "signup", pathMatch:"full" ,
              canActivate:[AuthGuard]
             },
            { path: 'login',component: LoginComponent },
            { path: 'signup',component: SignupComponent },
            { path: 'forgetPassword',component: ForgetPasswordComponent }
        
    
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SharedRoutingModule {

}
