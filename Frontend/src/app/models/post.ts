export class Post {
    id:String="";
    title: string = '';
    user_id: string = '';
    data: IData[] = [];
    comentario: IComentario[] = [];
  
    constructor(
      title: string = '',
      user_id: string = '',
      data: IData[] = [],
      comentario: IComentario[] = []
    ) {
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
  