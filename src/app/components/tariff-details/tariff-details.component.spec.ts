import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffDetailsComponent } from "./tariff-details.component";

const benefitMock = {
  "id": 1,
  "name": "No Contract",
  "description": "No minimum contract period required"
};

describe('TariffDetailsComponent', () => {
  let component: TariffDetailsComponent;
  let fixture: ComponentFixture<TariffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setTab() works correctly', () => {
    component.activeTab = 0;

    component.setTab(1);

    expect(component.activeTab).toEqual(1);
  });

  it('getTariffBenefitName() works correctly', () => {
    component.benefits = [benefitMock];

    const result = component.getTariffBenefitName(1);

    expect(result).toEqual(benefitMock.name);
  });
});
