import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GooglePlacesService } from '../../services/google.places.service'
import { ActivatedRoute } from '@angular/router';
import { TYPES } from '../../shared/types.const';
import { TypeSelectedService } from 'src/app/services/type-selected.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit{

  latitude: number = 0;
  longitude: number = 0;
  type: string = "";
  defaultImg: string = "";
  items: any = [];
  
  constructor(private route: ActivatedRoute,
              private googlePlacesService: GooglePlacesService,
              private typeSelected: TypeSelectedService) {
  }
  
  ngOnInit(): void {
    
    //get de parameter type from url
    this.type = this.route.snapshot.paramMap.get('type');
    //call service to send the type to other components
    this.typeSelected.setType(this.type);

    this.setImgDefault();
    this.getPosition();
    
  }

  //get the client location, for complete de nearby search
  getPosition(){
    if (navigator.geolocation) { //check if geolocation is available
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        
        //when the location was charge, execute de service
        this.getItems();
      });
    }
  }

//call service to get the results
  getItems(){
    this.googlePlacesService.getItems(this.longitude, this.latitude, this.type)
        .then(response => {
          //set the response to list for iterating in the view and generate the cards
          this.items = response;
        });
  }

  //set a default image, because some cases the items haven't image
  setImgDefault(){
    switch(this.type){
      case TYPES.CAFE.id:
        this.defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo2CnVpCU_dRgBRobFsSGsaF_9KfCJ_8Tgw6ekQ9mcVzI12PsP&usqp=CAU";
        break;
      case TYPES.RESTAURANT.id:
        this.defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOcRC1_r3DPA8yrzSA4zKIl_lFkBYKRx30_t1dwcqec8z5p2Nh&usqp=CAU";
        break;
      case TYPES.BAR.id:
        this.defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcS-whh-Uuvip-rMLbKJcyO0HwyperkGofTpVnyILzrqXWoRSb&usqp=CAU";
        break;
      default:
        this.defaultImg = "https://cdn-thumbnailer-properties.inmokey.com/p/400x300_bgDDDDDD/us-east-1/9/1/p-450591-280120010602-675881.jpg";
    }
  }

}
