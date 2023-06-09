import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProviderItemComponent } from "./provider-item.component";

const benefitMock = {
  "id": 1,
  "name": "No Contract",
  "description": "No minimum contract period required"
};

describe('ProviderItemComponent', () => {
  let component: ProviderItemComponent;
  let fixture: ComponentFixture<ProviderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTariffBenefitName() works correctly', () => {
    component.benefits = [benefitMock];

    const result = component.getTariffBenefitName(1);

    expect(result).toEqual(benefitMock.name);
  });
});
