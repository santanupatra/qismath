import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchnewPage } from './searchnew';

@NgModule({
  declarations: [
    SearchnewPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchnewPage),
  ],
})
export class SearchnewPageModule {}
