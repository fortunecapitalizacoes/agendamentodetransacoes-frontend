import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitarAgendamentoRequest, SolicitarAgendamentoResponse, SolicitarCancelamentoAgendamentoRequest } from '../../dtos/modelos.dto';


@Injectable({
  providedIn: 'root',
})
export class ImovelService {
  private readonly API_URL = 'api/agendamento';

  constructor(private http: HttpClient) {}

  listarAgendamentos(): Observable<SolicitarAgendamentoResponse[]> {
    return this.http.get<SolicitarAgendamentoResponse[]>(this.API_URL);
  }

  agendar(agendamento: SolicitarAgendamentoRequest): Observable<SolicitarAgendamentoResponse> {
    return this.http.post<SolicitarAgendamentoResponse>(this.API_URL, agendamento);
  }

  cancelar(agendamento: SolicitarCancelamentoAgendamentoRequest): Observable<string> {
    return this.http.post<string>(this.API_URL+"/cancelar", agendamento);
  }

}
