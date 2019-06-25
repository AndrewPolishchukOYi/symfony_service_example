import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodComponent } from './containers/food/food.component';

import { CaloriesCalculatorComponent } from './components/calories-calculator/calories-calculator.component';
import { MaterialUiModule } from '../shared';
import { CaloriesService } from './services/calories.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './components/history/history.component';
import { QueryHistoryService } from './services/query-history.service';

@NgModule({
  declarations: [FoodComponent, CaloriesCalculatorComponent, HistoryComponent],
  imports: [
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule
  ],
  providers: [
    CaloriesService,
    QueryHistoryService
  ]
})
export class FoodModule { }
