import { OrderStatus } from "./interfaces/order-status";

export class Order {
  private _orderStatus: OrderStatus = 'open';


  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }


  checkout(): void {
    if(this.isEmpty()){
      console.log('Seu pedido foi recebido.');
      return
    }

    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();

  }

    sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
};
