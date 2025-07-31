import { fakerIT } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
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
  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
