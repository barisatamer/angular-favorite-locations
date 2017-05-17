/**
 * Created by barisatamer on 5/16/17.
 */

import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import {Location} from '../Location';

@Injectable()
export class LocationService {

  private locationsUrl = 'api/locations'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getLocations(): Promise<Location[]> {

    return this.http.get(this.locationsUrl)
      .toPromise()
      .then(response => response.json().data as Location[])
      .catch(this.handleError);

  }

  create(name: string, latitude: number, longitude: number, imgUrl: string): Promise<Location> {
    return this.http
      .post(this.locationsUrl, JSON.stringify({name: name, latitude: latitude, longitude: longitude, imgUrl: imgUrl}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Location)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.locationsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
