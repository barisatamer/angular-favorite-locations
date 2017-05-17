/**
 * Created by barisatamer on 5/17/17.
 */

import {MdDialogRef} from '@angular/material';
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Location} from '../../Location';

declare var initMap: any;

@Component({
  selector: 'app-location-detail-dialog',
  templateUrl: 'location-detail-dialog.component.html'
})

export class LocationDetailDialogComponent implements OnInit, AfterViewInit{

  public myLocation: Location;

  constructor(public dialogRef: MdDialogRef<LocationDetailDialogComponent>) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onSelectChange($event): void{

    if ($event.index === 1) {
      initMap(this.myLocation.latitude, this.myLocation.longitude);
    }
  }
}

