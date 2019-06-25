import { Component, OnInit } from '@angular/core';
import { CaloriesService } from '../../services/calories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calories-calculator',
  templateUrl: './calories-calculator.component.html',
  styleUrls: ['./calories-calculator.component.scss']
})
export class CaloriesCalculatorComponent implements OnInit {

  constructor(private caloriesService: CaloriesService) {
  }

  calculatorForm: FormGroup;
  calories;
  isNormal: boolean;
  onLoad = false;

  ngOnInit() {
    this.initForm();
  }

  private calculateCalories(query, calories) {
    this.togglePreloaer();
    this.caloriesService.calculateCalories(query, calories).subscribe(res => {
      const foods = res['foods'];
      this.calories = this.calculateFoodsCalories(foods);

      this.compareCalories();
      this.togglePreloaer();
    }, error => {
      alert('Invalid input data');
      this.togglePreloaer();

    });
  }

  private initForm() {
    this.calculatorForm = new FormGroup({
      query: new FormControl('', [Validators.required]),
      calories: new FormControl('', [Validators.required]),
    });
  }

  private compareCalories() {
    console.log(this.calculatorForm);
    console.log(this.calories);
    this.isNormal = this.calculatorForm.value.calories >= this.calories;
  }

  private calculateFoodsCalories(foods) {
    let total = 0;
    foods.forEach((item) => {
      total += item.nf_calories;
    });

    return total;
  }

  private togglePreloaer() {
    this.onLoad = !this.onLoad;
  }

  public onSubmit() {
    const {query, calories} = this.calculatorForm.value;

    this.calculateCalories(query, calories);
  }

}
