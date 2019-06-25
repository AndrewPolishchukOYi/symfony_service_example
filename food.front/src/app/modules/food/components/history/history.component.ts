import { Component, OnInit } from '@angular/core';
import { QueryHistoryService } from '../../services/query-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private queryHistoryService: QueryHistoryService) { }
  displayedColumns: string[] = ['id', 'query', 'calories', 'date'];
  history: any = [];

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.queryHistoryService.getHistory().subscribe((res) => {
      this.history = res;

      console.log(res);
    });
  }

}
