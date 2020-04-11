import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyVolunteeringPage } from './my-volunteering.page';

describe('MyVolunteeringPage', () => {
  let component: MyVolunteeringPage;
  let fixture: ComponentFixture<MyVolunteeringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVolunteeringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyVolunteeringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
