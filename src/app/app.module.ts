import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareService } from './share.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListviewComponent } from './listview/listview.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListviewComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})

export class AppModule { }
