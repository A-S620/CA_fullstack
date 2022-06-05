import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormComponent } from './components/form/form.component';
import { PoemsComponent } from './components/poems/poems.component';
import { PoemComponent } from './components/poem/poem.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputFieldComponent,
    FormComponent,
    PoemsComponent,
    PoemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
