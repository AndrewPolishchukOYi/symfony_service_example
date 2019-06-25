import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class QueryHistoryService {

  constructor(private httpClient: HttpClient) { }

  getHistory() {
    return this.httpClient.get(`${environment.apiEndpoint}/queries-history`);
  }
}
