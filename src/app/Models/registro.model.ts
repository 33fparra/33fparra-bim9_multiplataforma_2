export class Registro{
  public format: string;
  public text: string;
  public type: string;
  public icon: string;
  public created: Date;

  constructor(format:string, text:string){
    this.format = format;
    this.text = text;

    this.created = new Date();
    this.determinarTipo();
  }

  private determinarTipo(){
    const inicioTexto = this.text.substring(0,4);
    switch(inicioTexto){
      case 'http':
        this.type = 'http';
        this.icon = 'earth-outline';
        break;
      case 'geo:':
        this.type = 'geo';
        this.icon = 'navigate-circle-outline';
        break;
      default:
        this.type = 'No reconocido';
        this.icon = 'create-outline';
        break;
    }
  }

}
