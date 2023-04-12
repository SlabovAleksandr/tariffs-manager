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
});
