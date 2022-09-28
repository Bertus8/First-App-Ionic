import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {id: 1, name: 'p1', description: 'Lorem lorem', price:30},
    {id: 2, name: 'p22', description: 'Lorem lorem', price:25}
  ];

  constructor() { }

  getItems() {
    //this.items = [
      //{id: 1, name: 'p1', description: 'Lorem lorem', price:20},
      //{id: 2, name: 'p22', description: 'Lorem lorem', price:15}
    //];
    return this.items;
  }

  getItem(id) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
