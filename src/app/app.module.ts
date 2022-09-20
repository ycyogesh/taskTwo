import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinputComponent } from './userinput/userinput.component';
import { UsertasksComponent } from './usertasks/usertasks.component';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent,
    UsertasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
