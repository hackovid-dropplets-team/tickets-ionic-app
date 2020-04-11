import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, ActivationStart } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public noMenu = true;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Puc ajudar?',
      url: '',
      icon: 'mail'
    },
    {
      title: 'Necessito',
      url: '/my-needs',
      icon: 'mail'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService,
    public appService: AppService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.loadUser();
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof ActivationStart) {
        this.noMenu = !!event.snapshot.data.noMenu;
      }
    });
  }

  loadUser() {
    this.authService.getUser().subscribe(user => {
      this.appService.user = user;
    }, error => {
      this.appService.user = undefined;
    });
  }

  logout() {
    this.authService.logout().subscribe(res =>  {
      this.appService.user = undefined;
    });
  }
}
