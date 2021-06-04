import faker from 'faker';

export class Company {
  companyName: string;
  companyPhrase: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }
}
