import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';



@NgModule({
  declarations: [
    SmallCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SmallCardComponent]
})
export class SharedModule { }
