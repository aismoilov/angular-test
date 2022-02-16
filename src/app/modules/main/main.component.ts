import { Component } from '@angular/core';
import { RequesterService } from '../../services/requester.service';
import { MobileOperator } from '../../typings';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  operators: MobileOperator[];

  constructor(private requester: RequesterService) {
    this.operators = requester.getAllOperators();
  }
}
