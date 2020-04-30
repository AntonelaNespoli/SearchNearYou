 import { Injectable } from '@angular/core';
 import {} from 'googlemaps';

@Injectable({
    providedIn: 'root'
})

export class GooglePlacesService {

  private service;
  
  constructor() {
    //create a service by PlacesService (Google Places API)
    this.service = new google.maps.places.PlacesService(document.createElement('div'));
  }

  //this service execute the nearbySearch
   getItems(longitude: number, latitude: number, type: string) {
    //create a geographic point with the latitude and longitude parameters
    const point = new google.maps.LatLng(latitude, longitude);

    //create a request for the search with the parameters requiers
    const request = {
        location: point,
        radius: '1000',
        type: [type]
    };
    
    //Return a promise with the result of nearby search
    return new Promise((resolve, reject) => {
        this.service.nearbySearch(request, (results, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK)
                resolve(results)
            else
                reject()
        })
    })
  }
}
