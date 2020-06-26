import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core/core.module';
import { VideosModule } from 'src/app/videos/videos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    VideosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
