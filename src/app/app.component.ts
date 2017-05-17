import {Component, OnInit} from '@angular/core';
import {DialogsService} from './Dialogs/dialogs.service';
import {LocationService} from './LocationService/location.service';
import {Location} from './Location';
import {MdDialog, MdDialogRef} from '@angular/material';
import {LocationDetailDialogComponent} from './Dialogs/LocationDetailDialog/location-detail-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  locations: Location[] = [];

  private selectedLocation: Location;

  constructor(private locationService: LocationService, private dialogsService: DialogsService, public dialog: MdDialog) {
  }

  ngOnInit(): void {

    this.locationService.getLocations()
      .then(locations => this.locations = locations );
  }

  openAddLocationDialog() {

    this.dialogsService
      .addLocation()
      .subscribe(res => {
        if(res) {
          this.add(res[0], res[1], res[2], res[3]);
        }
      });
  }

  add(name: string, latitude: number, longitude: number, imgUrl: string): void {
    name = name.trim();
    imgUrl = imgUrl.trim();

    if (!name) {
      return;
    }
    this.locationService.create(name, latitude, longitude, imgUrl)
      .then(location => {
        this.locations.push(location);
      });
  }

  delete(): void {

    this.locationService
      .delete(this.selectedLocation.id)
      .then(() => {
        this.locations = this.locations.filter(h => h !== this.selectedLocation);
      });
  }

  showDetail(myLocation: Location): void {

    let dialogRef: MdDialogRef<LocationDetailDialogComponent>;
    dialogRef = this.dialog.open(LocationDetailDialogComponent);
    dialogRef.componentInstance.myLocation = myLocation;
  }
}
