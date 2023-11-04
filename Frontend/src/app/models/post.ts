export class Post {
    _id:string="";
    title: string = '';
    username: string = '';
    user_id: string = '';
    data: IData[] = [];
    comentario: IComentario[] = [];
  
    constructor(
      title: string = '',
      user_id: string = '',
      username: string = '',
      data: IData[] = [],
      comentario: IComentario[] = []
    ) {
      this.username = username;
      this.title = title;
      this.user_id = user_id;
      this.data = data;
      this.comentario = comentario;
    }
  }


export  interface IData {
    ty: string;
    data: string;
  }
  
export  interface IComentario {
    text: string;
    date: string;
    user_id: string;
    user_name: string;
  }
  