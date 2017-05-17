/**
 * Created by barisatamer on 5/16/17.
 */
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  template: `
    <div>
    <p md-dialog-title>{{ title }}</p>
    <p>{{ message }}</p>
          <button type="button" md-raised-button
                  (click)="dialogRef.close(true)">OK</button>
          <button type="button" md-button 
                  (click)="dialogRef.close(false)">Cancel</button>
    </div>
  `,
})

/*
Usage:
 this.dialogsService
 .confirm('Confirm Dialog', 'Are you sure you want to do this?')
 .subscribe(res => {
 this.result = res;
 console.log('Result is ' + res);
 });
 */
export class ConfirmDialog {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

  }
}
