import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './pageNotFoundComponent';

const routes : Routes = [
  {
      path :'',
      loadChildren : './component/shared/shared.module#SharedModule',
  },
  {
      path : '**',
      component: PageNotFoundComponent

  }
]
 
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}