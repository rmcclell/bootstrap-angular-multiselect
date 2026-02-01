import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-api-docs',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container-fluid">
      <div class="row">
        <!-- Side Navigation -->
        <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar position-sticky" style="top: 56px; height: calc(100vh - 56px); overflow-y: auto;">
          <div class="position-sticky pt-3">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>API Reference</span>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#properties">Properties</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#events">Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#methods">Methods</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#styling">Styling</a>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Main Content -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="py-4">
            <h1 class="mb-4">API Documentation</h1>
            
            <!-- Properties Section -->
            <section id="properties" class="mb-5">
              <h2 class="border-bottom pb-2 mb-3">Properties</h2>
              <p class="text-muted">Defines the input properties of the component.</p>
              
              <div class="table-responsive">
                <table class="table table-striped table-bordered">
                  <thead class="table-dark">
                    <tr>
                      <th style="width: 20%;">Name</th>
                      <th style="width: 20%;">Type</th>
                      <th style="width: 15%;">Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>options</code></td>
                      <td>any[]</td>
                      <td>null</td>
                      <td>An array of objects to display as the available options.</td>
                    </tr>
                    <tr>
                      <td><code>optionLabel</code></td>
                      <td>string</td>
                      <td>null</td>
                      <td>Name of the label field of an option when an arbitrary object is used.</td>
                    </tr>
                    <tr>
                      <td><code>optionValue</code></td>
                      <td>string</td>
                      <td>null</td>
                      <td>Name of the value field of an option when an arbitrary object is used.</td>
                    </tr>
                    <tr>
                      <td><code>optionDisabled</code></td>
                      <td>string</td>
                      <td>null</td>
                      <td>Name of the disabled field of an option.</td>
                    </tr>
                    <tr>
                      <td><code>placeholder</code></td>
                      <td>string</td>
                      <td>null</td>
                      <td>Default text to display when no option is selected.</td>
                    </tr>
                    <tr>
                      <td><code>disabled</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>When present, it specifies that the component should be disabled.</td>
                    </tr>
                    <tr>
                      <td><code>filter</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>When specified, displays an input field to filter the items.</td>
                    </tr>
                    <tr>
                      <td><code>filterPlaceholder</code></td>
                      <td>string</td>
                      <td>'Search'</td>
                      <td>Placeholder text for the filter input.</td>
                    </tr>
                    <tr>
                      <td><code>display</code></td>
                      <td>'comma' | 'chip'</td>
                      <td>'comma'</td>
                      <td>Defines how the selected items are displayed.</td>
                    </tr>
                    <tr>
                      <td><code>group</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Whether to display options as grouped when nested options are provided.</td>
                    </tr>
                    <tr>
                      <td><code>optionGroupLabel</code></td>
                      <td>string</td>
                      <td>null</td>
                      <td>Name of the label field of an option group.</td>
                    </tr>
                    <tr>
                      <td><code>optionGroupChildren</code></td>
                      <td>string</td>
                      <td>null</td>
                      <td>Name of the options field of an option group.</td>
                    </tr>
                    <tr>
                      <td><code>showToggleAll</code></td>
                      <td>boolean</td>
                      <td>true</td>
                      <td>Whether to show the header checkbox to toggle the selection of all items.</td>
                    </tr>
                    <tr>
                      <td><code>selectAllLabel</code></td>
                      <td>string</td>
                      <td>'Select All'</td>
                      <td>Label for the select all checkbox.</td>
                    </tr>
                    <tr>
                      <td><code>loading</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Whether the component is in loading state.</td>
                    </tr>
                    <tr>
                      <td><code>loadingIcon</code></td>
                      <td>string</td>
                      <td>'bi bi-arrow-repeat'</td>
                      <td>Icon to display in loading state.</td>
                    </tr>
                    <tr>
                      <td><code>virtualScroll</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Whether to use virtual scrolling for large datasets.</td>
                    </tr>
                    <tr>
                      <td><code>virtualScrollItemSize</code></td>
                      <td>number</td>
                      <td>38</td>
                      <td>Height of an item in the list for virtual scrolling.</td>
                    </tr>
                    <tr>
                      <td><code>label</code></td>
                      <td>string</td>
                      <td>null</td>
                      <td>Floating label text.</td>
                    </tr>
                    <tr>
                      <td><code>floatLabelVariant</code></td>
                      <td>'over' | 'in' | 'on'</td>
                      <td>'on'</td>
                      <td>Variant of the floating label.</td>
                    </tr>
                    <tr>
                      <td><code>iftaLabel</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Uses IFTA (Input Floating Top Aligned) label style.</td>
                    </tr>
                    <tr>
                      <td><code>showClear</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>When enabled, displays a clear icon to reset the value.</td>
                    </tr>
                    <tr>
                      <td><code>size</code></td>
                      <td>'small' | 'large' | null</td>
                      <td>null</td>
                      <td>Size of the component.</td>
                    </tr>
                    <tr>
                      <td><code>fluid</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>Spans the full width of its parent when enabled.</td>
                    </tr>
                    <tr>
                      <td><code>variant</code></td>
                      <td>'outlined' | 'filled'</td>
                      <td>'outlined'</td>
                      <td>Visual variant of the component.</td>
                    </tr>
                    <tr>
                      <td><code>invalid</code></td>
                      <td>boolean</td>
                      <td>false</td>
                      <td>When present, it specifies that the component should be styled as invalid.</td>
                    </tr>
                    <tr>
                      <td><code>ariaLabel</code></td>
                      <td>string | null</td>
                      <td>null</td>
                      <td>Defines a string value that labels an interactive element.</td>
                    </tr>
                    <tr>
                      <td><code>ariaLabelledBy</code></td>
                      <td>string | null</td>
                      <td>null</td>
                      <td>Identifier of the underlying input element.</td>
                    </tr>
                    <tr>
                      <td><code>ariaDescribedBy</code></td>
                      <td>string | null</td>
                      <td>null</td>
                      <td>Identifier of the element that describes the component.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Events Section -->
            <section id="events" class="mb-5">
              <h2 class="border-bottom pb-2 mb-3">Events</h2>
              <p class="text-muted">Defines the custom events emitted by the component.</p>
              
              <div class="table-responsive">
                <table class="table table-striped table-bordered">
                  <thead class="table-dark">
                    <tr>
                      <th style="width: 20%;">Name</th>
                      <th style="width: 30%;">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>onChange</code></td>
                      <td><code>&#123; value: any[] &#125;</code></td>
                      <td>Callback to invoke when value changes.</td>
                    </tr>
                    <tr>
                      <td><code>onFocus</code></td>
                      <td><code>Event</code></td>
                      <td>Callback to invoke when component receives focus.</td>
                    </tr>
                    <tr>
                      <td><code>onBlur</code></td>
                      <td><code>Event</code></td>
                      <td>Callback to invoke when component loses focus.</td>
                    </tr>
                    <tr>
                      <td><code>onShow</code></td>
                      <td>-</td>
                      <td>Callback to invoke when overlay panel becomes visible.</td>
                    </tr>
                    <tr>
                      <td><code>onHide</code></td>
                      <td>-</td>
                      <td>Callback to invoke when overlay panel becomes hidden.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Methods Section -->
            <section id="methods" class="mb-5">
              <h2 class="border-bottom pb-2 mb-3">Methods</h2>
              <p class="text-muted">Defines methods that can be accessed by the component reference.</p>
              
              <div class="table-responsive">
                <table class="table table-striped table-bordered">
                  <thead class="table-dark">
                    <tr>
                      <th style="width: 25%;">Name</th>
                      <th style="width: 25%;">Parameters</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>show()</code></td>
                      <td>-</td>
                      <td>Shows the overlay panel.</td>
                    </tr>
                    <tr>
                      <td><code>hide()</code></td>
                      <td>-</td>
                      <td>Hides the overlay panel.</td>
                    </tr>
                    <tr>
                      <td><code>toggleOverlay()</code></td>
                      <td>-</td>
                      <td>Toggles the visibility of the overlay panel.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Styling Section -->
            <section id="styling" class="mb-5">
              <h2 class="border-bottom pb-2 mb-3">Styling</h2>
              <p class="text-muted">The component uses Bootstrap 5 classes and custom CSS classes for styling.</p>
              
              <h5 class="mt-4 mb-3">CSS Classes</h5>
              <div class="table-responsive">
                <table class="table table-striped table-bordered">
                  <thead class="table-dark">
                    <tr>
                      <th style="width: 30%;">Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.dropdown</code></td>
                      <td>Container element.</td>
                    </tr>
                    <tr>
                      <td><code>.form-select</code></td>
                      <td>Trigger element that opens the overlay.</td>
                    </tr>
                    <tr>
                      <td><code>.dropdown-menu</code></td>
                      <td>Overlay panel containing the options.</td>
                    </tr>
                    <tr>
                      <td><code>.form-select-sm</code></td>
                      <td>Applied when size is 'small'.</td>
                    </tr>
                    <tr>
                      <td><code>.form-select-lg</code></td>
                      <td>Applied when size is 'large'.</td>
                    </tr>
                    <tr>
                      <td><code>.variant-filled</code></td>
                      <td>Applied when variant is 'filled'.</td>
                    </tr>
                    <tr>
                      <td><code>.is-invalid</code></td>
                      <td>Applied when invalid is true.</td>
                    </tr>
                    <tr>
                      <td><code>.w-100</code></td>
                      <td>Applied when fluid is true.</td>
                    </tr>
                    <tr>
                      <td><code>.badge</code></td>
                      <td>Chip element in chip display mode.</td>
                    </tr>
                    <tr>
                      <td><code>.clear-icon</code></td>
                      <td>Clear button icon.</td>
                    </tr>
                    <tr>
                      <td><code>.floating-label</code></td>
                      <td>Floating label element.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 class="mt-4 mb-3">Dependencies</h5>
              <ul>
                <li><strong>Bootstrap 5</strong> - Core styling framework</li>
                <li><strong>Bootstrap Icons</strong> - Icon library</li>
                <li><strong>Angular CDK Scrolling</strong> - Virtual scrolling support</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  `,
    styles: [`
    .sidebar {
      box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
    .sidebar .nav-link {
      font-weight: 500;
      color: #333;
      padding: 0.5rem 1rem;
    }
    .sidebar .nav-link:hover {
      color: #0d6efd;
      background-color: rgba(0, 0, 0, .05);
    }
    .sidebar-heading {
      font-size: .75rem;
      text-transform: uppercase;
    }
    code {
      color: #d63384;
      background-color: #f8f9fa;
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
      font-size: 87.5%;
    }
  `]
})
export class ApiDocsComponent {
}
