import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCoinsComponent } from './views/table-coins/table-coins.component';
import { InfoCoinComponent } from './views/info-coin/info-coin.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableCoinsComponent,
    InfoCoinComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
