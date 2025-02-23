import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitarAgendamentoResponse, SolicitarCancelamentoAgendamentoRequest } from '../../dtos/modelos.dto';
import { HttpClientModule } from '@angular/common/http';
import { ImovelService } from './service.form-agendar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato-agendamentos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ImovelService],
  templateUrl: './extrato-agendamentos.component.html',
  styleUrls: ['./extrato-agendamentos.component.css'],
})
export class ExtratoAgendamentosComponent implements OnInit {
  agendamentos: SolicitarAgendamentoResponse[] = [];

  constructor(private imovelService: ImovelService, private router: Router) {}

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  private carregarAgendamentos(): void {
    this.imovelService.listarAgendamentos().subscribe({
      next: (dados) => {
        this.agendamentos = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar agendamentos:', erro);
        alert('Erro ao carregar agendamentos. Tente novamente mais tarde.');
      }
    });
  }

  cancelarAgendamento(id: number): void {
    const agendamento = this.agendamentos.find(a => a.id === id);
    if (!agendamento) {
      console.error('Agendamento não encontrado');
      alert('Agendamento não encontrado!');
      return;
    }
  
    const request: SolicitarCancelamentoAgendamentoRequest = {
      idAgendamento: agendamento.id,
    };
  
    this.imovelService.cancelar(request).subscribe({
      next: () => {
        this.carregarAgendamentos();
      },
      error: (erro) => {
        console.error('Erro ao cancelar agendamento:', erro);
        alert('Erro ao cancelar agendamento. Tente novamente mais tarde.');
      }
    });
  }
  
}
