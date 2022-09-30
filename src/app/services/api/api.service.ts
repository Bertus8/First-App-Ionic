import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: Product[] = [
    {id: 1, name: 'p1', description: 'Lorem lorem', price:30},
    {id: 2, name: 'p2', description: 'Lorem lorem', price:25},
    {id: 3, name: 'p3', description: 'Lorem lorem', price:20}
  ];

  constructor() { }

  getItems(): Promise<any> {
    //return this.items;
    return new Promise((resolve,reject) =>{
      let items: any[] = [];
      /*for(let i = 0; i < this.items.length; i++){
        if(this.items[i].price <= 25) {
          items.push(this.items[i]);
        }
      }*/
      items = this.items.filter(x => x.price <= 25);
      if (items.length > 0) {
        resolve(items);
      }else{
        reject('High price');
      }
    });
  }

  checkTotal(data): Promise<any>{
    return new Promise((resolve, reject)=>{
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        const element = data[i].price;
        }
        if (sum<=50) {
          resolve(true);
        }else{
          reject('No list');

        }
    })
  }

  getItem(id) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
