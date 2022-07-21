import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/model/budget-item.model';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  @Input() item:BudgetItem = new BudgetItem(null,'')
  @Output() formsubmit:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    // console.log(form.value)
    this.formsubmit.emit(form.value)
    form.reset()
  }
}
