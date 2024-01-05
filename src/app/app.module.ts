import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitToTextComponent } from './digit-to-text/digit-to-text.component';
import { DigitToTextPipe } from './digit-to-text/digit-to-text.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DigitToTextComponent,
    DigitToTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DigitToTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
