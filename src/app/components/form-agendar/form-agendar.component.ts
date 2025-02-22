import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ImovelService } from './service.form-agendar';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-form-agendar',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule],
  providers: [ImovelService],
  templateUrl: './form-agendar.component.html',
  styleUrl: './form-agendar.component.css'
})
export class FormAgendarComponent {
  agendamentoForm: FormGroup;

  constructor(private fb: FormBuilder, private servico: ImovelService) {
    this.agendamentoForm = this.fb.group({
      contaOrigem: [null, [Validators.required, Validators.min(1)]],
      contaDestino: [null, [Validators.required, Validators.min(1)]],
      valor: [null, [Validators.required, Validators.min(0.01)]],
      dataTransferencia: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger
    if (this.agendamentoForm.valid) {
      this.servico.agendar(this.agendamentoForm.value).subscribe((response) => {
        console.log(response)
      });
    } else {
        console.log('Formulário inválido');
    }
  }
}
