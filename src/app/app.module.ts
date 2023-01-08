import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigTitleComponent } from './components/big-title/big-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from "./pages/home/HomeComponent";
import { ContentTripsComponent } from './pages/content-trips/content-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
