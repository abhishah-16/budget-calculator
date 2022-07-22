import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/model/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem
  // isIncome: boolean = false;

  @Output() xbuttonclick: EventEmitter<any> = new EventEmitter<any>()
  @Output() cardclick: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  onDelete() {
    this.xbuttonclick.emit()
  }
  onCardclick() {
    this.cardclick.emit()
  }
}
