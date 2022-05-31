export class Requisito {

  constructor(
    public descricao: string,
    public ecossistema:string,
    public projeto: string,
    public tipodeReq: string){

    }

  public listaRequisitos(){
   return [] = ['Produto', 'Interface', 'Plataforma'];
  }
}
