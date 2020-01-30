import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: any = '';
  long: any = '';

  constructor(private geolocation: Geolocation) {
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // let location = resp.coords.latitude + ', ' + resp.coords.longitude;
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
      // console.log('LAT', resp.coords.latitude + ' <br> LONG', resp.coords.longitude);
      console.log(this.lat + ', ' + this.long);
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  // ngOnInit() {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // let location = resp.coords.latitude + ', ' + resp.coords.longitude;
  //     this.lat = resp.coords.latitude;
  //     this.long = resp.coords.longitude;
  //     // console.log('LAT', resp.coords.latitude + ' <br> LONG', resp.coords.longitude);
  //     console.log(this.lat + ', ' + this.long);
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });
  // }






}
