class Person{
  constructor(owner) {
    this.owner = owner || null;
    this.rights = {
      freedom: this.owner == null ? true : false,
      otherRights: {}
    }
  }

  enslave(person) {
    person = new Person(this);
    this.rights = person.rights; // If everything (my slave) has belongs to me, his right is my right...
    delete person.rights;
    return person;
  }
}

function enslavement() {
  let master = new Person();
  let slave = new Person();

  slave = master.enslave(slave);
  return master.rights.freedom; // ...and it would be nonsense to speak of my having a right against myself.
}

module.exports = enslavement;
