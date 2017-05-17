/**
 * Created by barisatamer on 5/17/17.
 */
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-location-dialog',
  template: `
    <div>
      <p md-dialog-title>Add a Location</p>

      <md-input-container class="example-full-width">
        <input mdInput placeholder="Name" value="" #inputName>
      </md-input-container>

      <table class="example-full-width" cellspacing="0"><tr>
        <td>
          <md-input-container  >
            <input mdInput placeholder="Latitude" value="" #inputLatitude type="number">

          </md-input-container>
        </td>
        <td>
          <md-input-container>
            <input mdInput placeholder="Longitude" value="" #inputLongitude type="number">
          </md-input-container>
        </td>
      </tr>
      </table>

      <md-input-container class="example-full-width">
        <input mdInput placeholder="Thumbnail URL" value="" #inputThumbnailUrl>
      </md-input-container>
     
      
      <div class="button-row" style="float:right">
        
        <button type="button" md-raised-button
                (click)="dialogRef.close([inputName.value, inputLatitude.valueAsNumber, inputLongitude.valueAsNumber, 
                inputThumbnailUrl.value])">Add</button>
        
      </div>

    </div>
  `,
  styles: [`
    .example-full-width {
      width: 100%;
    }
  `]
})
export class AddLocationDialogComponent {

  constructor(public dialogRef: MdDialogRef<AddLocationDialogComponent>) {}

}
