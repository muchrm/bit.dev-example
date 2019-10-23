import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { ListBtnComponent } from './list-btn/list-btn.component';



@NgModule({
  declarations: [ListItemComponent, ListBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [ListItemComponent, ListBtnComponent],
})
export class ListItemModule { }
