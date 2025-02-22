import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoAgendamentosComponent } from './extrato-agendamentos.component';

describe('ExtratoAgendamentosComponent', () => {
  let component: ExtratoAgendamentosComponent;
  let fixture: ComponentFixture<ExtratoAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtratoAgendamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtratoAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
