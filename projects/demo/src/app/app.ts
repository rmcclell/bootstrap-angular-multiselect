import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MultiSelectComponent } from 'ng-bootstrap-multiselect';
import { DemoComponent } from './demo.component';
import { ApiDocsComponent } from './api-docs.component';

export const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: 'demo', component: DemoComponent },
  { path: 'api', component: ApiDocsComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-dark bg-primary sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bootstrap MultiSelect</a>
        <div class="d-flex">
          <a routerLink="/demo" routerLinkActive="active" class="nav-link text-white me-3">Demo</a>
          <a routerLink="/api" routerLinkActive="active" class="nav-link text-white">API</a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .nav-link.active {
      font-weight: bold;
      text-decoration: underline;
    }
  `],
  styleUrl: './app.scss'
})
export class App {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  selectedCities: any[] = [];
  selectedCities2: any[] = [];
  selectedCities3: any[] = [];

  countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  groupedCities = [
    {
      label: 'Germany',
      code: 'DE',
      items: [
        { name: 'Berlin', value: 'Berlin' },
        { name: 'Frankfurt', value: 'Frankfurt' },
        { name: 'Hamburg', value: 'Hamburg' },
        { name: 'Munich', value: 'Munich' }
      ]
    },
    {
      label: 'USA',
      code: 'US',
      items: [
        { name: 'Chicago', value: 'Chicago' },
        { name: 'Los Angeles', value: 'Los Angeles' },
        { name: 'New York', value: 'New York' },
        { name: 'San Francisco', value: 'San Francisco' }
      ]
    },
    {
      label: 'Japan',
      code: 'JP',
      items: [
        { name: 'Kyoto', value: 'Kyoto' },
        { name: 'Osaka', value: 'Osaka' },
        { name: 'Tokyo', value: 'Tokyo' },
        { name: 'Yokohama', value: 'Yokohama' }
      ]
    }
  ];

  selectedCountries: any[] = [];
  selectedGroupedCities: any[] = [];
  selectedVirtualCities: any[] = [];
  selectedCities4: any[] = [];
  selectedCities5: any[] = [];
  selectedCities6: any[] = [];
  selectedCities7: any[] = [];
  selectedCities8: any[] = [{ name: 'New York', code: 'NY' }];
  selectedCities9: any[] = [];
  selectedCities10: any[] = [];
  selectedCitiesSmall: any[] = [];
  selectedCitiesLarge: any[] = [];
  virtualCities: any[] = [];
  isLoading: boolean = true;

  formGroup: FormGroup = new FormGroup({
    selectedCities: new FormControl<any[] | null>(null, Validators.required)
  });

  constructor() {
    for (let i = 0; i < 10000; i++) {
      this.virtualCities.push({ name: 'City ' + i, code: 'C' + i });
    }
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
