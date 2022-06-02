export class Requisito {

  constructor(
    public user: any,
    public descricao: string,
    public ecossistema:string,
    public projeto: string,
    public tipodeReq: string){

    }

  public listaRequisitos(){
   return [] = ['Produto', 'Interface', 'Plataforma'];
  }
}
