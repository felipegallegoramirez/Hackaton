export class Sesion{

    name: string;
    id: string;
    token: string;

    constructor(
        id: string ="", 
        name: string ="", 
        token: string="", 
      ) {
      this.id = id
      this.name = name
      this.token = token
    }

  }