import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyNeedsPage } from './my-needs.page';

describe('MyNeedsPage', () => {
  let component: MyNeedsPage;
  let fixture: ComponentFixture<MyNeedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNeedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyNeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
