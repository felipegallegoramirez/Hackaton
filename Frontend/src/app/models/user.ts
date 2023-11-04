export class User{
    id: string="";
    name: string = '';
    email: string = '';
    password: string = '';
    publication: string[] = [];
    follows: string[] = [];
    followers: string[] = [];
    permissions: number[] = [];

    constructor(
        name: string = '',
        email: string = '',
        password: string = '',
        publication: string[] = [],
        follows: string[] = [],
        followers: string[] = [],
        permissions: number[] = []
      ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.publication = publication;
        this.follows = follows;
        this.followers = followers;
        this.permissions = permissions;
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