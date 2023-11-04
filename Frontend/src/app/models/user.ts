export class User{
    id: string="";
    name: string = '';
    email: string = '';
    password: string = '';
    publication: string[] = [];
    follows: follow[] = []
    followers: follower[] = []

    constructor(
        name: string = '',
        email: string = '',
        password: string = '',
        publication: string[] = [],
        follows: follow[] = [],
        followers: follower[] = []
      ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.publication = publication;
        this.follows = follows;
        this.followers = followers;
      }
  }

  export class UserSearch{
    id: string="";
    name: string="";
    constructor(
        name: string = '',
        id: string = '',
    ){
        this.id = id;
        this.name = name;

    }
  }

  export class follow{
    name: string =""
    idUser: string=""
    constructor(
      name: string ="",
      idUser: string=""
    ){
      this.name = name
      this.idUser = idUser
    }
  }

  export class follower{
    name: string =""
    idUser: string=""
    constructor(
      name: string ="",
      idUser: string=""
    ){
      this.name = name
      this.idUser = idUser
    }
  }