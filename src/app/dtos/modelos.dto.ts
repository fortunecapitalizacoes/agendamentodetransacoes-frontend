export interface SolicitarAgendamentoRequest {
    contaOrigem: number;
    contaDestino: number;
    valor: number;
    dataTransferencia: string;
  }

  export interface SolicitarAgendamentoResponse {
    id: number;
    contaOrigem: string;
    contaDestino: string;
    valor: number;
    taxa: number;
    dataTransferencia: string;
    dataAgendamento: string;
    status: string;
  }