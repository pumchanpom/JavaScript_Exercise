// Object, getter, setter, method

const dogFactory = (name, breed, weight) => {
    return {
      _name: String(name),
      _breed: String(breed),
      _weight: Number(weight) + ' kg',

      get name() {
        return this._name;
      },
      set name(newName) {
        this._name = newName;
      },

      get breed() {
        return this._breed;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },

      get weight() {
        return this._weight;
      },
      set weight(newWeight) {
        this._weight = newWeight;
      },

      bark() {
        return 'ruff! ruff!';
      }, 
      eatTooManyTreats() {
        this._weight += 1; 
      }
       
    }
}

const dogBumiboru = dogFactory('Bobby', 'Shiba Inu', 10);

console.log(dogBumiboru.name); // "Bobby"
console.log(dogBumiboru.breed); // "Shiba Inu"
console.log(dogBumiboru.weight); // 10