import { fakerIT } from '@faker-js/faker';

class User {
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
}
