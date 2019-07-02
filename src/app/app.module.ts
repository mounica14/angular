import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { ChocolateDetailComponent } from './chocolate-detail/chocolate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChocolatesComponent,
    ChocolateDetailComponent
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
