import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitarAgendamentoResponse } from '../../dtos/modelos.dto';
import { HttpClientModule } from '@angular/common/http';
import { ImovelService } from './service.form-agendar';

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

  constructor(private imovelService: ImovelService) {}

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  private carregarAgendamentos(): void {
    debugger
    this.imovelService.listarAgendamentos().subscribe({
      next: (dados) => {
        this.agendamentos = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar agendamentos:', erro);
      }
    });
  }
}
