import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, Renderer2, NgZone } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../../../utils/services/app.service'
import { MenuRightSidebarComponent } from './menu-right-sidebar/menu-right-sidebar.component';
// import {HeaderService} from './header.service';
// import {removeListeners, removeSubscriptions} from '../../../utils/services/helpers';
// import {LayoutStore} from '../layout.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // private isSidebarRightCollapsed: boolean;
  // private listeners = [];
  // private subscriptions = [];

  // @Input() isSidebarRightToggle = true;
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('sidebar') sidebar: MenuRightSidebarComponent;

  // @ViewChild('headerElement', { static: true }) private headerElement: ElementRef;
  // @ViewChild('sidebarRightToggleElement') private sidebarRightToggleElement: ElementRef;

  public searchForm: FormGroup;

  constructor(private appService: AppService, private elementRef: ElementRef,
    // private layoutStore: LayoutStore,
    // private headerService: HeaderService, private ngZone: NgZone,
    private renderer2: Renderer2, ) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null),
    });
  }

  ngAfterViewInit() {

  }


  logout() {
    this.appService.logout();
  }
}
