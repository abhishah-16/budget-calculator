import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/model/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  budgetitem: BudgetItem[] = []
  totalbudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newitem: BudgetItem) {
    this.budgetitem.push(newitem)
    this.totalbudget += newitem.amount
  }
  delteItem(item: BudgetItem) {
    let index = this.budgetitem.indexOf(item)
    this.budgetitem.splice(index, 1)
    this.totalbudget -= item.amount
  }
  updateItem(updateEvent: UpdateEvent) {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.budgetitem[this.budgetitem.indexOf(updateEvent.old)] = updateEvent.new;

    // update the total budget
    this.totalbudget -= updateEvent.old.amount;
    this.totalbudget += updateEvent.new.amount;
  }
}
