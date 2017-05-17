/**
 * Created by barisatamer on 5/16/17.
 */
import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './ConfirmDialog/confirm-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import {PromptDialogComponent} from './PromptDialog/prompt-dialog.component';
import {AddLocationDialogComponent} from "./AddLocationDialog/add-location-dialog.component";

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<ConfirmDialog>;

    dialogRef = this.dialog.open(ConfirmDialog);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  public prompt(title: string, message: string, promptPlaceholder: string): Observable<string> {
    let dialogRef: MdDialogRef<PromptDialogComponent>;

    dialogRef = this.dialog.open(PromptDialogComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.promptPlaceholder = promptPlaceholder;

    return dialogRef.afterClosed();
  }

  public addLocation(): Observable<any> {
    let dialogRef: MdDialogRef<AddLocationDialogComponent>;

    dialogRef = this.dialog.open(AddLocationDialogComponent);
    return dialogRef.afterClosed();
  }
}

/*
 The service will act as a wrapper for MdDialog to simplify the process of
 calling the dialog and subscribing to it. What it will do is create
 an Instance of MdDialog with our custom component (ConfirmDialog).
 Then it will set any public properties it needs to by setting
 the properties on the componentInstance object. It will return
 the observable afterClosed() to the caller so they can subscribe to it.
 It will emit an event when ever the dialog is closed as the
 name would suggest.
 */
