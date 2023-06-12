import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './app-listing-page.component.html',
  styleUrls: ['./app-listing-page.component.css']
})
export class AppListingPageComponent implements OnInit{
  listings:Listing[] = []

  constructor(){

  }
  ngOnInit():void{
    this.listings = fakeListings
  }
}

