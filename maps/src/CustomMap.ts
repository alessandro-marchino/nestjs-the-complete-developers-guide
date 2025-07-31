/// <reference types="@types/google.maps" />

import { type Company } from './Company';
import { type User } from './User';

export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    this.map = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      },
      title: `User: ${user.name}`
    });
  }
  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      },
      title: `Company: ${company.companyName}\n${company.catchPhrase}`
    });
  }
}
