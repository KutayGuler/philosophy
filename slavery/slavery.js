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
    this.rights = person.rights;
    delete person.rights;
    return person;
  }
}

function enslavement() {
  let master = new Person();
  let slave = new Person();

  slave = master.enslave(slave);
  return master.rights.freedom;
}

module.exports = enslavement;