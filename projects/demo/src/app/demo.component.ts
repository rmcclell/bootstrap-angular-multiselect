import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MultiSelectComponent } from 'ng-bootstrap-multiselect';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MultiSelectComponent],
  templateUrl: './demo.component.html',
  styleUrl: './app.scss',
  styles: [`
    .sidebar {
      box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
    .sidebar .nav-link {
      font-weight: 500;
      color: #333;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
    .sidebar .nav-link:hover {
      color: #0d6efd;
      background-color: rgba(0, 0, 0, .05);
    }
    pre {
      background-color: #f8f9fa;
      padding: 1rem;
      border-radius: 0.25rem;
      overflow-x: auto;
    }
    code {
      color: #d63384;
      font-size: 87.5%;
    }
    pre code {
      color: #212529;
    }
    kbd {
      background-color: #212529;
      color: #fff;
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
      font-size: 87.5%;
    }
  `]
})
export class DemoComponent {
  title = 'Bootstrap MultiSelect Demo';

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

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
      value: 'de',
      items: [
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Frankfurt', value: 'Frankfurt' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Munich', value: 'Munich' }
      ]
    },
    {
      label: 'USA',
      value: 'us',
      items: [
        { label: 'Chicago', value: 'Chicago' },
        { label: 'Los Angeles', value: 'Los Angeles' },
        { label: 'New York', value: 'New York' },
        { label: 'San Francisco', value: 'San Francisco' }
      ]
    },
    {
      label: 'Japan',
      value: 'jp',
      items: [
        { label: 'Kyoto', value: 'Kyoto' },
        { label: 'Osaka', value: 'Osaka' },
        { label: 'Tokyo', value: 'Tokyo' },
        { label: 'Yokohama', value: 'Yokohama' }
      ]
    }
  ];

  selectedCities: any[] = [];
  selectedCities2: any[] = [];
  selectedCities3: any[] = [];
  selectedCities4: any[] = [];
  selectedCities5: any[] = [];
  selectedCities6: any[] = [];
  selectedCities7: any[] = [];
  selectedCities8: any[] = [{ name: 'New York', code: 'NY' }];
  selectedCities9: any[] = [];
  selectedCities10: any[] = [];
  selectedCitiesSmall: any[] = [];
  selectedCitiesLarge: any[] = [];
  selectedGroupedCities: any[] = [];
  selectedCountries: any[] = [];
  selectedVirtualCities: any[] = [];
  virtualCities: any[] = [];
  isLoading: boolean = false;

  formGroup: FormGroup = new FormGroup({
    selectedCities: new FormControl<any[] | null>(null, Validators.required)
  });

  constructor() {
    for (let i = 0; i < 10000; i++) {
      this.virtualCities.push({ name: 'City ' + i, code: 'C' + i });
    }
  }
}
