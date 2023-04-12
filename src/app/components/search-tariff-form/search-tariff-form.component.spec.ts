import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTariffFormComponent } from "./search-tariff-form.component";

describe('SearchTariffFormComponent', () => {
  let component: SearchTariffFormComponent;
  let fixture: ComponentFixture<SearchTariffFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTariffFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTariffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('internetSpeedHandler() set works correctly', () => {
    component.selectedSpeed = 0;

    component.internetSpeedHandler(16);

    expect(component.selectedSpeed).toEqual(16);
  });

  it('internetSpeedHandler() unset works correctly', () => {
    component.selectedSpeed = 16;

    component.internetSpeedHandler(16);

    expect(component.selectedSpeed).toEqual(0);
  });
});
