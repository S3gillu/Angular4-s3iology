import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, Route, } from '@angular/router';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   
            { path: '', redirectTo : "login", pathMatch:"full" },
            { path: 'login',component: LoginComponent },
            { path: 'signup',component: SignupComponent }
        
    
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SharedRoutingModule {

}
