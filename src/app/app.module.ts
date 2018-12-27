import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {DialogueWiseModule} from 'dialogue-wise';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DialogueWiseModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
