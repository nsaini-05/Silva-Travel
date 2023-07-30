import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { trigger, transition, animate, style } from '@angular/animations';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    SmallCardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SmallCardComponent, LoadingComponent]
})
export class SharedModule {
  static fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('300ms', style({ opacity: 0 }))
    ])
  ]);
 }
