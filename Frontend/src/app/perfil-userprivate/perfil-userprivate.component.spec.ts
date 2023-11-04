import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUserprivateComponent } from './perfil-userprivate.component';

describe('PerfilUserprivateComponent', () => {
  let component: PerfilUserprivateComponent;
  let fixture: ComponentFixture<PerfilUserprivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUserprivateComponent]
    });
    fixture = TestBed.createComponent(PerfilUserprivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
