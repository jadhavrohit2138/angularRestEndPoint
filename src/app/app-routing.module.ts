import { NgModule } from '@angular/core';
import { RouterModule, Routes,ParamMap } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { PostCompComponent } from './post-comp/post-comp.component';
import { UpdataeCompComponent } from './updatae-comp/updatae-comp.component';
import { DeleteCompComponent } from './delete-comp/delete-comp.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { GetDataButtonComponent } from './get-data-button/get-data-button.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  // { path: 'get',children:[{path:'id',component:GetByIdComponent}], component: FirstCompComponent},
  { path: 'home', component: ButtonsComponent },
  { path: '', redirectTo: "home" ,pathMatch:"full"},
  { path: 'home/get',component:GetDataButtonComponent},
  { path: 'home/get/name',component:FirstCompComponent},
  { path: 'home/get/id', component: GetByIdComponent },
  { path: 'home/post', component: PostCompComponent },
  { path: 'home/update', component: UpdataeCompComponent },
  { path: 'home/delete', component: DeleteCompComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule { }
