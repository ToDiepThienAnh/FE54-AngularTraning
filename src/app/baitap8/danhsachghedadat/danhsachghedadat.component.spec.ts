import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachghedadatComponent } from './danhsachghedadat.component';

describe('DanhsachghedadatComponent', () => {
  let component: DanhsachghedadatComponent;
  let fixture: ComponentFixture<DanhsachghedadatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachghedadatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachghedadatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
