import { fakerIT } from '@faker-js/faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = fakerIT.company.name();
    this.catchPhrase = fakerIT.company.catchPhrase();
    this.location = {
      lat: fakerIT.location.latitude(),
      lng: fakerIT.location.longitude()
    };
  }
}
