
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSampleTableComponent } from './ngx-sample-table.component';

describe('NgxSampleTableComponent', () => {
  let component: NgxSampleTableComponent;
  let fixture: ComponentFixture<NgxSampleTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSampleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSampleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
