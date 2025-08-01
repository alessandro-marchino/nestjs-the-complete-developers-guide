interface Reportable {
  summary: () => string;
}
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary: function() {
    return `Name: ${this.name}`;
  }
};
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary: function() {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
