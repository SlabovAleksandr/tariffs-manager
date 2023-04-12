import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffManagerComponent } from "./tariff-manager.component";

describe('TariffManagerComponent', () => {
  let component: TariffManagerComponent;
  let fixture: ComponentFixture<TariffManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
