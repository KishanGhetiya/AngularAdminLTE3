import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRightSidebarComponent } from './menu-right-sidebar.component';

describe('MenuRightSidebarComponent', () => {
  let component: MenuRightSidebarComponent;
  let fixture: ComponentFixture<MenuRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
