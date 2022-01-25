import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { SecurityComponent } from './security/security.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SecurityComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SecurityComponent,
  ]

})
export class SecurityModule { }
