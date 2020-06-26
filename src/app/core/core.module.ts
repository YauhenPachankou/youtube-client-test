import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  exports: [
    HeaderComponent,
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule
  ]
})
export class CoreModule {}
