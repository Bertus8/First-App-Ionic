import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  id=1

  constructor(private router: Router, public navCtrl: NavController) {}

  ngOnInit() {
    console.log('Tab1Page ngOnInit');
  }

  ionViewWillEnter() {
    console.log('Tab1Page ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('Tab1Page ionViewWillEnter');
  }
  
  ionViewWillLeave() {
    console.log('Tab1Page ionViewWillLeave');
    //update my cart
  }

  ionViewDidLeave() {
    console.log('Tab1Page ionViewWillLeave');
  }

  redirect(){
    const data = {name: 'abc', id: this.id};
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data)
      }
    };
   /* 
   this.navCtrl.navigateForward('/tabs/items/' + this.redirect,navData);*/
   //this.navCtrl.navigateForward('/tabs/items/' + this.id, navData);
   this.router.navigate(['/','tabs','tab1','item']);
    
  }
  ngOnDestroy(): void {
      console.log('Tab1Page ngOnDestroy')
  }
}

