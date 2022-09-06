export class Employee {
  constructor(
    public id = 0,
    public name = '',
    public surname = '',
    public position = '',
    // public birthday: Date
  ) {  }
  clone() {return new Employee(this.id, this.name,this.surname, this.position);}
}
