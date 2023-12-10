import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkActiveComponent } from './link-active.component';

describe('LinkActiveComponent', () => {
  let component: LinkActiveComponent;
  let fixture: ComponentFixture<LinkActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
