import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event , NavigationCancel, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCrudGit';


  showLoadingIndicator : boolean = true;
  constructor(private _router : Router){
      this._router.events.subscribe((routerEvent : Event) => {
          if(routerEvent instanceof NavigationStart){
            this.showLoadingIndicator = true;
            console.log(1);
          }

          if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel 
            || routerEvent instanceof NavigationError){
            this.showLoadingIndicator = false;
          }
      });
  }
}
