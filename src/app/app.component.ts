import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  public _opened: boolean = false;
  public _show: boolean = true;

  sticky: boolean = false;
  menuPosition: any;
  isDisplay:boolean = true;

  constructor(public hardcodedAuthenticationService 
    : HardcodedAuthenticationService) { }

    @ViewChild('stickyMenu') menuElement!: ElementRef;
    @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

    mouseEnter(){
      this.isDisplay= false;
   }

   mouseLeave(){
      this.isDisplay = true;
   }


  public _toggleSidebar() {
    this._opened = !this._opened;
    
  }
}
