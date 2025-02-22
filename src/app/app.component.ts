import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerMenuComponent } from './components/banner-menu/banner-menu.component';
import { BoasVindasComponent } from './components/boas-vindas/boas-vindas.component';
import { FormAgendarComponent } from './components/form-agendar/form-agendar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerMenuComponent, BoasVindasComponent, FormAgendarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agendamentodetransacoes-frontend';
}
