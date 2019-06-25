import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialUiModule } from './modules/shared';
import { AppComponent } from './app-component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent, FooterComponent } from './layout';
import { FoodModule } from './modules/food/food.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialUiModule,
    FoodModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
