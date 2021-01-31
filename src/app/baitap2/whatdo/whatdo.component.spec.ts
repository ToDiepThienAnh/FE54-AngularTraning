import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatdoComponent } from './whatdo.component';

describe('WhatdoComponent', () => {
  let component: WhatdoComponent;
  let fixture: ComponentFixture<WhatdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
