/**
 * Created by barisatamer on 5/16/17.
 */
import { DialogsService } from './dialogs.service';
import {
  MaterialModule, MdButtonModule, MdCardModule, MdDialogModule, MdDialogTitle, MdInputModule,
  MdToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

import { ConfirmDialog } from './ConfirmDialog/confirm-dialog.component';
import {PromptDialogComponent} from './PromptDialog/prompt-dialog.component';
import {AddLocationDialogComponent} from "./AddLocationDialog/add-location-dialog.component";

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdDialogModule,
    MdInputModule
  ],
  exports: [
    ConfirmDialog,
    PromptDialogComponent,
    AddLocationDialogComponent
  ],
  declarations: [
    ConfirmDialog,
    PromptDialogComponent,
    AddLocationDialogComponent
  ],
  providers: [
    DialogsService,
  ],
  entryComponents: [
    ConfirmDialog,
    PromptDialogComponent,
    AddLocationDialogComponent
  ],
})
export class DialogsModule { }
