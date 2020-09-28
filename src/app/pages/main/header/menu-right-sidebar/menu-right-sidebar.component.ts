import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import { AppService } from '../../../../utils/services/app.service';
// import {LayoutStore} from '../../layout.store';
// import {removeListeners, removeSubscriptions} from '../../../../utils/services/helpers';

@Component({
  selector: 'app-menu-right-sidebar',
  templateUrl: './menu-right-sidebar.component.html',
  styleUrls: ['./menu-right-sidebar.component.scss']
})
export class MenuRightSidebarComponent implements OnInit {
  public user: { firstName: string; lastName: string; image: string; };
  private skin: string;
  private logoSkin: string;
  // private subscriptions = [];
  // private listeners = [];
  shown: boolean;

  // @Output() bgColor: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('dropdownMenu', { static: false }) dropdownMenu;
  // @ViewChild('test', { static: false }) test;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hideDropdownMenu();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private appService: AppService,
    // private layoutStore: LayoutStore,

  ) { }

  ngOnInit(): void {
    this.user = this.appService.user;
    // this.renderer.addClass(this.elementRef.nativeElement, 'control-sidebar');

    // this.subscriptions.push(this.layoutStore.sidebarRightSkin.subscribe((value: string) => {
    //   if (this.skin !== value) {
    //     this.renderer.removeClass(this.elementRef.nativeElement, `control-sidebar-${this.skin}`);
    //   }
    //   this.skin = value;
    //   this.renderer.addClass(this.elementRef.nativeElement, `control-sidebar-${value}`);
    // }));
  }

  toggleRightSidebarClick() {
    if (this.dropdownMenu.nativeElement.classList.contains('show')) {
      this.hideDropdownMenu();
    } else {
      this.showDropdownMenu();
    }
  }

  showDropdownMenu() {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
    this.shown = true;    
  }

  hideDropdownMenu() {
    this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
    this.shown = false;
  }

  bgColor(value: string) {
    // this.renderer.addClass(this.elementRef.nativeElement, 'control-sidebar');
    console.log(this.elementRef.nativeElement.offsetParent);
    
      if (this.skin !== value) {
        this.renderer.removeClass(this.elementRef.nativeElement.offsetParent, `${this.skin}`);
      }
      this.skin = value;
      this.renderer.addClass(this.elementRef.nativeElement.offsetParent, `${value}`);
  }

  logoBgColor(value: string) {
    console.log(this.elementRef.nativeElement.offsetParent);
    
      if (this.logoSkin !== value) {
        this.renderer.removeClass(this.elementRef.nativeElement.offsetParent, `${this.logoSkin}`);
      }
      this.logoSkin = value;
  }

  logout() {
    this.appService.logout();
  }

  // ngOnDestroy() {
  //   this.listeners = removeListeners(this.listeners);
  //   this.subscriptions = removeSubscriptions(this.subscriptions);
  // }
}
