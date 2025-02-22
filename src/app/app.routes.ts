import { Routes } from '@angular/router';
import { BoasVindasComponent } from './components/boas-vindas/boas-vindas.component';
import { FormAgendarComponent } from './components/form-agendar/form-agendar.component';
import { ExtratoAgendamentosComponent } from './components/extrato-agendamentos/extrato-agendamentos.component';

export const routes: Routes = [
    { path: 'inicio', component: BoasVindasComponent },
    { path: 'agendar', component: FormAgendarComponent },
    { path: 'extrato-agendamento', component: ExtratoAgendamentosComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redireciona para 'buscar-imovel' por padrão
    { path: '**', redirectTo: 'inicio' } // Redireciona qualquer rota inválida
];
