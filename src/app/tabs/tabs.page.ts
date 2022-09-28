import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  ionViewWillLeave(){
    console.log('TabsPage ionViewWillLeave')
  }

  ionViewDidLeave(){
    console.log('TabsPage ionViewDidLeave')
  }
  
}
