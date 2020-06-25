import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {}
