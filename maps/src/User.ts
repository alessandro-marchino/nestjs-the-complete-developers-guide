import { fakerIT } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = fakerIT.person.firstName();
    this.location = {
      lat: fakerIT.location.latitude(),
      lng: fakerIT.location.longitude()
    };
  }
  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
