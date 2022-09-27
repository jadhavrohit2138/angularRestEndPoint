import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataeCompComponent } from './updatae-comp.component';

describe('UpdataeCompComponent', () => {
  let component: UpdataeCompComponent;
  let fixture: ComponentFixture<UpdataeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdataeCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdataeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
