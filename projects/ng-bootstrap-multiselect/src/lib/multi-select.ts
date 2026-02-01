import { Component, Input, Output, EventEmitter, forwardRef, ContentChild, TemplateRef, ElementRef, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-multi-select',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollingModule],
  templateUrl: './multi-select.html',
  styleUrl: './multi-select.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent implements ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() optionLabel: string | null = null;
  @Input() optionValue: string | null = null;
  @Input() optionDisabled: string | null = null;
  @Input() placeholder: string = 'Select Items';
  @Input() scrollHeight: string = '200px';
  @Input() filter: boolean = false;
  @Input() filterBy: string | null = null;
  @Input() filterPlaceholder: string = 'Search';
  @Input() display: 'comma' | 'chip' = 'comma';
  @Input() maxSelectedLabels: number = 3;
  @Input() selectedItemsLabel: string = '{0} items selected';
  @Input() showHeader: boolean = true;
  @Input() disabled: boolean = false;
  @Input() emptyMessage: string = 'No results found';
  @Input() group: boolean = false;
  @Input() optionGroupLabel: string | null = null;
  @Input() optionGroupChildren: string | null = null;
  @Input() loading: boolean = false;
  @Input() loadingIcon: string = 'bi-arrow-repeat';
  @Input() virtualScroll: boolean = false;
  @Input() virtualScrollItemSize: number = 43;
  @Input() virtualScrollOptions: any = {};
  @Input() label: string | null = null;
  @Input() floatLabelVariant: 'over' | 'in' | 'on' = 'on';
  @Input() iftaLabel: boolean = false;
  @Input() showClear: boolean = false;
  @Input() size: 'small' | 'large' | null = null;
  @Input() fluid: boolean = false;
  @Input() variant: 'outlined' | 'filled' = 'outlined';
  @Input() invalid: boolean = false;
  @Input() ariaLabel: string | null = null;
  @Input() ariaLabelledBy: string | null = null;
  @Input() ariaDescribedBy: string | null = null;

  @Output() onChange = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();
  @Output() onFilter = new EventEmitter<any>();
  @Output() onPanelShow = new EventEmitter<any>();
  @Output() onPanelHide = new EventEmitter<any>();

  @ContentChild('item') itemTemplate?: TemplateRef<any>;
  @ContentChild('group') groupTemplate?: TemplateRef<any>;
  @ContentChild('header') headerTemplate?: TemplateRef<any>;
  @ContentChild('footer') footerTemplate?: TemplateRef<any>;
  @ContentChild('selectedItems') selectedItemsTemplate?: TemplateRef<any>;

  @ViewChild('filterInput') filterInput?: ElementRef<HTMLInputElement>;

  value: any[] = [];
  overlayVisible: boolean = false;
  filterValue: string = '';
  focusedOptionIndex: number = -1;
  isFocused: boolean = false;

  onModelChange: any = (_: any) => { };
  onModelTouched: any = () => { };

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) { }

  get filteredOptions(): any[] {
    const opts = this.options || [];
    if (!this.filterValue || !this.filter) return opts;

    const search = this.filterValue.toLowerCase();

    if (this.group && this.optionGroupChildren) {
      return opts.map(group => {
        const children = (group as any)[this.optionGroupChildren!] || [];
        const filteredChildren = children.filter((child: any) =>
          this.getOptionLabel(child).toLowerCase().includes(search)
        );

        if (filteredChildren.length > 0) {
          return { ...group, [this.optionGroupChildren!]: filteredChildren };
        }
        return null;
      }).filter(group => group !== null);
    }

    return opts.filter(option => {
      const label = this.getOptionLabel(option).toLowerCase();
      return label.includes(search);
    });
  }

  get selectedOptions(): any[] {
    const opts = this.options || [];
    if (!this.value) return [];

    if (this.group && this.optionGroupChildren) {
      let flatOptions: any[] = [];
      opts.forEach(group => {
        const children = (group as any)[this.optionGroupChildren!] || [];
        flatOptions.push(...children);
      });
      return flatOptions.filter(opt => this.isSelected(opt));
    }

    return opts.filter(opt => this.isSelected(opt));
  }

  get selectedLabels(): string {
    const selected = this.selectedOptions;
    if (selected.length === 0) return '';
    if (selected.length <= this.maxSelectedLabels) {
      return selected.map(opt => this.getOptionLabel(opt)).join(', ');
    }
    return this.selectedItemsLabel.replace('{0}', selected.length.toString());
  }

  getOptionLabel(option: any): string {
    if (this.optionLabel && option && typeof option === 'object') {
      return (option as any)[this.optionLabel];
    }
    return option?.toString() || '';
  }

  getOptionValue(option: any): any {
    if (this.optionValue && option && typeof option === 'object') {
      return (option as any)[this.optionValue];
    }
    return option;
  }

  isOptionDisabled(option: any): boolean {
    if (this.optionDisabled && option && typeof option === 'object') {
      return (option as any)[this.optionDisabled];
    }
    return false;
  }

  getGroupLabel(group: any): string {
    if (this.optionGroupLabel && group) {
      return (group as any)[this.optionGroupLabel];
    }
    return '';
  }

  getGroupChildren(group: any): any[] {
    if (this.optionGroupChildren && group) {
      return (group as any)[this.optionGroupChildren] || [];
    }
    return [];
  }

  isSelected(option: any): boolean {
    if (!this.value) return false;
    const val = this.getOptionValue(option);
    return this.value.some(v => JSON.stringify(v) === JSON.stringify(val));
  }

  toggleOverlay() {
    if (this.disabled || this.loading) return;
    this.overlayVisible ? this.hide() : this.show();
  }

  show() {
    this.overlayVisible = true;
    this.isFocused = true;
    this.onPanelShow.emit();
    this.cdr.markForCheck();
    setTimeout(() => {
      if (this.filter && this.filterInput) {
        this.filterInput.nativeElement.focus();
        this.cdr.markForCheck();
      }
    }, 0);
  }

  hide() {
    this.overlayVisible = false;
    this.isFocused = this.value && this.value.length > 0;
    this.onPanelHide.emit();
    this.focusedOptionIndex = -1;
    this.cdr.markForCheck();
  }

  clearSelections(event: Event) {
    event.stopPropagation();
    this.updateModel([]);
  }

  onOptionClick(option: any) {
    if (this.isOptionDisabled(option)) return;

    const val = this.getOptionValue(option);
    let newValue = [...(this.value || [])];
    const index = newValue.findIndex(v => JSON.stringify(v) === JSON.stringify(val));

    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(val);
    }

    this.updateModel(newValue);
  }

  unselect(event: Event, option: any) {
    event.stopPropagation();
    this.onOptionClick(option);
  }

  toggleAll(event: any) {
    const checked = event.target.checked;
    let newValue: any[] = [];

    if (checked) {
      if (this.group) {
        this.options.forEach(group => {
          this.getGroupChildren(group).filter(opt => !this.isOptionDisabled(opt)).forEach(opt => {
            newValue.push(this.getOptionValue(opt));
          });
        });
      } else {
        newValue = this.options
          .filter(opt => !this.isOptionDisabled(opt))
          .map(opt => this.getOptionValue(opt));
      }
    }

    this.updateModel(newValue);
  }

  isAllSelected(): boolean {
    if (!this.options || this.options.length === 0) return false;

    if (this.group) {
      let allOptions: any[] = [];
      this.options.forEach(group => {
        allOptions.push(...this.getGroupChildren(group).filter(opt => !this.isOptionDisabled(opt)));
      });
      if (allOptions.length === 0) return false;
      return allOptions.every(opt => this.isSelected(opt));
    }

    const enabledOptions = this.options.filter(opt => !this.isOptionDisabled(opt));
    if (enabledOptions.length === 0) return false;
    return enabledOptions.every(opt => this.isSelected(opt));
  }

  isPartiallySelected(): boolean {
    const selectedCount = this.selectedOptions.length;
    return selectedCount > 0 && !this.isAllSelected();
  }

  onFilterInput(event: any) {
    this.filterValue = event.target.value;
    this.onFilter.emit({ filter: this.filterValue });
  }

  updateModel(newValue: any[]) {
    this.value = newValue;
    this.onModelChange(this.value);
    this.onChange.emit({ value: this.value });
    this.cdr.markForCheck();
  }

  // ControlValueAccessor
  writeValue(value: any): void {
    this.value = value || [];
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.hide();
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (this.disabled || this.loading) return;

    switch (event.code) {
      case 'ArrowDown':
        this.moveFocus(1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.moveFocus(-1);
        event.preventDefault();
        break;
      case 'Enter':
      case 'Space':
        if (!this.overlayVisible) {
          this.show();
        } else if (this.focusedOptionIndex > -1) {
          this.onOptionClick(this.filteredOptions[this.focusedOptionIndex]);
        }
        event.preventDefault();
        break;
      case 'Escape':
        this.hide();
        event.preventDefault();
        break;
      case 'Tab':
        this.hide();
        break;
    }
  }

  moveFocus(direction: number) {
    if (!this.overlayVisible) {
      this.show();
      return;
    }

    const options = this.filteredOptions;
    if (options.length === 0) return;

    let nextIndex = this.focusedOptionIndex + direction;
    if (nextIndex < 0) nextIndex = options.length - 1;
    if (nextIndex >= options.length) nextIndex = 0;

    this.focusedOptionIndex = nextIndex;
  }

  isOptionFocused(index: number): boolean {
    return this.focusedOptionIndex === index;
  }
}
