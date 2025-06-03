import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosFormComponent } from './certificados-form.component';

describe('CertificadosFormComponent', () => {
  let component: CertificadosFormComponent;
  let fixture: ComponentFixture<CertificadosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificadosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
