import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosComponent } from './certificados.component';

describe('CertificadosComponent', () => {
  let component: CertificadosComponent;
  let fixture: ComponentFixture<CertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
