import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/model/budget-item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  // @Input() item:dialogref
  constructor(
    public dialogref: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) { }

  ngOnInit(): void {
  }
  onSubmitted(updateitem: BudgetItem) {
    this.dialogref.close(updateitem)
  }
}
