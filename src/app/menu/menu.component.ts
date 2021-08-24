import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;
  sticky: boolean = false;
  menuPosition: any;
  


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


  ngOnInit(): void {
   // this.isUserLoggedIn =this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop
}



}
