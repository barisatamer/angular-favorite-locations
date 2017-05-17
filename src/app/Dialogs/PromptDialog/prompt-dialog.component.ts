/**
 * Created by barisatamer on 5/16/17.
 */
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'prompt-dialog',
  template: `
    <div>
      <p md-dialog-title>{{ title }}</p>
      <p>{{ message }}</p>
      
      <md-input-container class="example-full-width">
        <input mdInput placeholder={{promptPlaceholder}} value="" #promptInputValue>
      </md-input-container>

      <div class="button-row" style="float:right">
        <button type="button" md-raised-button
                (click)="dialogRef.close(promptInputValue.value)">OK</button>
        <button type="button" md-button
                (click)="dialogRef.close(false)">Cancel</button>
      </div>
      
    </div>
  `,
  styles: [`
    .example-full-width {
      width: 100%;
    }
    `]
})
export class PromptDialogComponent {

  public title: string;
  public message: string;
  public promptPlaceholder: string;
  public promptValue: string;

  constructor(public dialogRef: MdDialogRef<PromptDialogComponent>) {}

}
