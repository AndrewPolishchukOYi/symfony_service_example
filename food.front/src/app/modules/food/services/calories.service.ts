import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CaloriesService {

  constructor(private httpClient: HttpClient) { }

  calculateCalories(query: string, calories) {
    const params = `?data=${query}&calories=${calories}`;

    return this.httpClient.get(`${environment.apiEndpoint}/search${params}`);
  }
}
