import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/model/budget-item.model';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetitem: BudgetItem[]
  @Output() deletebutton: EventEmitter<any> = new EventEmitter<any>()
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  delete(item: BudgetItem) {
    this.deletebutton.emit(item)
  }
  onCardClick(item: BudgetItem) {
    const dialogref = this.dialog.open(EditItemComponent, {
      width: '500px',
      data: item
    })
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        // this.budgetitem[this.budgetitem.indexOf(item)] = result
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
