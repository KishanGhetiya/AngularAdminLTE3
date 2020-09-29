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
  private accentSkin: string;
  private logoSkin: string;
  private SideBarSkin: string;
  private sideBarNavLink: string;
  isnavbarBorder = false;
  isBodySmallText = false;
  isNavbarSmallText = false;
  isSidebarNavSmallText = false;
  isFooterSmallText = false;
  isSidebarNavFlat = false;
  isSidebarNavLegacy = false;
  isSidebarNavCompact = false;
  isSidebarNavChildIndent = false;
  isMainSidebarDisable = false;
  isBrandSmallText = false;
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
    // console.log(this.elementRef.nativeElement.__ngContext__[4]);
      if (this.skin !== value) {
        this.renderer.removeClass(this.elementRef.nativeElement.offsetParent, `${this.skin}`);
      }
      this.skin = value;
      this.renderer.addClass(this.elementRef.nativeElement.offsetParent, `${value}`);
  }

  accentColor(value: string) {    
    if (this.accentSkin !== value) {
      this.renderer.removeClass(this.elementRef.nativeElement.offsetParent, `${this.accentSkin}`);
    }
    this.accentSkin = value;
    this.renderer.addClass(this.elementRef.nativeElement.offsetParent, `${value}`);
  }

  darkSideBarBgColor(value: string, value2: string) {
    if (this.sideBarNavLink !== value) {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][36], `${this.sideBarNavLink}`);
    }
    if (this.SideBarSkin !== value2) {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][26], `${this.SideBarSkin}`);
    }
    this.sideBarNavLink = value;
    this.SideBarSkin = value2;
    this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][36], `${value}`);
    this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][26], `${value2}`);
  }

  lightSideBarBgColor(value: string, value2: string) {
    if (this.sideBarNavLink !== value) {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][36], `${this.sideBarNavLink}`);
    }
    if (this.SideBarSkin !== value2) {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][26], `${this.SideBarSkin}`);
    }
    this.sideBarNavLink = value;
    this.SideBarSkin = value2;
    this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][36], `${value}`);
    this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][26], `${value2}`);
  }

  logoBgColor(value: string) {
    if (this.logoSkin !== value) {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][22], `${this.logoSkin}`);
    }
    this.logoSkin = value;
    this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][22], `${value}`);
  }

  clearOptions () {
    this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][22], `${this.logoSkin}`);
  }

  navbarBorder() { 
    this.isnavbarBorder = !this.isnavbarBorder
    var value = 'navbar-border';
    if (this.isnavbarBorder) {
      this.renderer.addClass(this.elementRef.nativeElement.offsetParent, `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.offsetParent, `${value}`);
    }
  }

  bodySmallText() {
    this.isBodySmallText = !this.isBodySmallText
    var value = 'body-small-text';
    if (this.isBodySmallText) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[3][20], `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[3][20], `${value}`);
    }
  }

  navbarSmallText() {
    this.isNavbarSmallText = !this.isNavbarSmallText
    var value = 'navbar-small-text';
    if (this.isNavbarSmallText) {
      this.renderer.addClass(this.elementRef.nativeElement.offsetParent, `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.offsetParent, `${value}`);
    }
  }

  sidebarNavSmallText() {
    this.isSidebarNavSmallText = !this.isSidebarNavSmallText
    var value = 'sidenavbar-small-text';
    if (this.isSidebarNavSmallText) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][33], `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][33], `${value}`);
    }
  }

  footerSmallText() {
    this.isFooterSmallText = !this.isFooterSmallText
    var value = 'text-sm';
    if (this.isFooterSmallText) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][3][14][0], `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][3][14][0], `${value}`);
    }
  }

  sidebarNavFlat() {
    this.isSidebarNavFlat = !this.isSidebarNavFlat
    var value = 'nav-flat';
    if (this.isSidebarNavFlat) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
    }
  }

  sidebarNavLegacy() {
    this.isSidebarNavLegacy = !this.isSidebarNavLegacy
    var value = 'nav-legacy';
    var value2 = 'active';
    var value3 = 'bg-primary';
    if (this.isSidebarNavLegacy) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][36], `${value2}`);
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][36], `${value3}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][36], `${value2}`);
    }
  }

  sidebarNavCompact() {
    this.isSidebarNavCompact = !this.isSidebarNavCompact
    var value = 'nav-compact';
    if (this.isSidebarNavCompact) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
    }
  }

  sidebarNavChildIndent() {
    this.isSidebarNavChildIndent = !this.isSidebarNavChildIndent
    var value = 'nav-child-indent';
    if (this.isSidebarNavChildIndent) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][34], `${value}`);
    }
  }

  mainSidebarDisable() {
    this.isMainSidebarDisable = !this.isMainSidebarDisable
    // var value = 'sidebar-disable';
    // if (this.isMainSidebarDisable) {
    //   this.renderer.addClass(this.elementRef.nativeElement, `${value}`);
    // } else {
    //   this.renderer.removeClass(this.elementRef.nativeElement, `${value}`);
    // }
  }

  brandSmallText() {
    this.isBrandSmallText = !this.isBrandSmallText
    var value = 'text-sm';
    if (this.isBrandSmallText) {
      this.renderer.addClass(this.elementRef.nativeElement.__ngContext__[4][22], `${value}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.__ngContext__[4][22], `${value}`);
    }
  }

  logout() {
    this.appService.logout();
  }

  // ngOnDestroy() {
  //   this.listeners = removeListeners(this.listeners);
  //   this.subscriptions = removeSubscriptions(this.subscriptions);
  // }
}
