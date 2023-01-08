import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTripsComponent } from './content-trips.component';

describe('ContentTripsComponent', () => {
  let component: ContentTripsComponent;
  let fixture: ComponentFixture<ContentTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
