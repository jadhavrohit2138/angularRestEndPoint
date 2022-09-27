import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { TrimPipe } from './trim.pipe';
import { PostCompComponent } from './post-comp/post-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdataeCompComponent } from './updatae-comp/updatae-comp.component';
import { DeleteCompComponent } from './delete-comp/delete-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { GetDataButtonComponent } from './get-data-button/get-data-button.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    FirstCompComponent,
    TrimPipe,
    PostCompComponent,
    UpdataeCompComponent,
    DeleteCompComponent,
    PageNotFoundComponent,
    GetByIdComponent,
    GetDataButtonComponent,
    ButtonsComponent,
  ],
  providers: [],

  bootstrap: [ AppComponent ]
})
export class AppModule {}