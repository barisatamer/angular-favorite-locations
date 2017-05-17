import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

// Material Support
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
  MdDialogModule, MdInputModule, MdGridListModule, MdTabsModule
} from '@angular/material';

import {DialogsModule} from './Dialogs/dialogs.module';
import {LocationService} from './LocationService/location.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';
import {LocationDetailDialogComponent} from './Dialogs/LocationDetailDialog/location-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdGridListModule,
    MdTabsModule,
    DialogsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [LocationService],
  bootstrap: [AppComponent],
  entryComponents: [LocationDetailDialogComponent],

})
export class AppModule { }
