import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items: any[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    console.log('ngOnInit');
    // this.items = this.apiService.getItems();
    this.getData();
  }

  /*async getData() {
    this.items = await this.apiService.getItems();
    console.log('items value:', this.items);
  } catch(e) {
    console.log(e);
  }

   /*this.apiService.getItems().then(data => {
    console.log('items:', data);
    this.items = data;
   }).catch(err => {
    console.log('error:',err);
   });
  }*/
  getData(){
    this.apiService.getItems().then(data => {
      console.log('items: ', data);
    this.apiService.checkTotal(data).then(val => {
      console.log(val);
      if(val){
        this.items = data;
        
      }
    })
    })
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}