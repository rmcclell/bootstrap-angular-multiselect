import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectComponent } from './multi-select';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  const options = [
    { name: 'Option 1', val: 1 },
    { name: 'Option 2', val: 2 },
    { name: 'Option 3', val: 3 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectComponent, FormsModule, ScrollingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.options = options;
    component.optionLabel = 'name';
    component.optionValue = 'val';
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show placeholder when no value is selected', () => {
    fixture.detectChanges();
    const placeholder = fixture.debugElement.query(By.css('.text-muted'));
    expect(placeholder.nativeElement.textContent).toContain('Select Items');
  });

  it('should toggle overlay on click', () => {
    fixture.detectChanges();
    const trigger = fixture.debugElement.query(By.css('.form-select'));
    trigger.nativeElement.click();
    fixture.detectChanges();
    expect(component.overlayVisible).toBe(true);
    expect(fixture.debugElement.query(By.css('.dropdown-menu.show'))).toBeTruthy();

    trigger.nativeElement.click();
    fixture.detectChanges();
    expect(component.overlayVisible).toBe(false);
  });

  it('should select an option when clicked', () => {
    fixture.detectChanges();
    component.show();
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('.dropdown-item'));
    items[0].nativeElement.click();
    fixture.detectChanges();

    expect(component.value).toContain(1);
    expect(component.isSelected(options[0])).toBe(true);
  });

  it('should unselect an option when clicked again', () => {
    fixture.detectChanges();
    component.value = [1];
    component.show();
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('.dropdown-item'));
    items[0].nativeElement.click();
    fixture.detectChanges();

    expect(component.value).not.toContain(1);
    expect(component.isSelected(options[0])).toBe(false);
  });

  it('should filter options', () => {
    fixture.detectChanges();
    component.filter = true;
    component.show();
    fixture.detectChanges();

    const filterInput = fixture.debugElement.query(By.css('input[type="text"]'));
    filterInput.nativeElement.value = 'Option 2';
    filterInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.filteredOptions.length).toBe(1);
    expect(component.filteredOptions[0].name).toBe('Option 2');
  });

  it('should select all options when header checkbox is clicked', () => {
    fixture.detectChanges();
    component.show();
    fixture.detectChanges();
    const selectAllCheckbox = fixture.debugElement.query(By.css('.dropdown-header input[type="checkbox"]'));
    selectAllCheckbox.nativeElement.click();
    selectAllCheckbox.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.value.length).toBe(3);
    expect(component.isAllSelected()).toBe(true);
  });

  it('should update label correctly with maxSelectedLabels', () => {
    fixture.detectChanges();
    component.writeValue([1, 2]);
    component.maxSelectedLabels = 1;
    fixture.detectChanges();

    expect(component.selectedLabels).toContain('2 items selected');
  });

  it('should support grouping', () => {
    const freshFixture = TestBed.createComponent(MultiSelectComponent);
    const freshComponent = freshFixture.componentInstance;
    const groupedOptions = [
      { label: 'G1', items: [{ name: 'O1', val: 1 }, { name: 'O2', val: 2 }] },
      { label: 'G2', items: [{ name: 'O3', val: 3 }] }
    ];
    freshComponent.options = groupedOptions;
    freshComponent.group = true;
    freshComponent.optionGroupLabel = 'label';
    freshComponent.optionGroupChildren = 'items';
    freshComponent.optionLabel = 'name';
    freshComponent.optionValue = 'val';
    freshFixture.detectChanges();

    expect(freshComponent.filteredOptions.length).toBe(2);
    expect(freshComponent.getGroupLabel(groupedOptions[0])).toBe('G1');
    const children = freshComponent.getGroupChildren(groupedOptions[0]);
    expect(children.length).toBe(2);
    expect(freshComponent.getOptionLabel(children[0])).toBe('O1');
  });

  it('should show loading spinner when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.animation-spin'));
    expect(spinner).toBeTruthy();
    expect(spinner.nativeElement.classList).toContain('bi-arrow-repeat');
  });

  it('should show custom loading icon', () => {
    component.loading = true;
    component.loadingIcon = 'bi-gear';
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.animation-spin'));
    expect(spinner.nativeElement.classList).toContain('bi-gear');
  });

  it('should prevent overlay toggle when loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const trigger = fixture.debugElement.query(By.css('.form-select'));
    trigger.nativeElement.click();
    fixture.detectChanges();
    expect(component.overlayVisible).toBe(false);
  });

  it('should render virtual scroll viewport when virtualScroll is true', () => {
    component.virtualScroll = true;
    component.options = Array.from({ length: 100 }, (_, i) => ({ name: 'Item ' + i, val: i }));
    component.optionLabel = 'name';
    component.optionValue = 'val';
    fixture.detectChanges();

    // Virtual scroll is inside the overlay, so we need to show it
    component.show();
    fixture.detectChanges();

    const viewport = fixture.debugElement.query(By.css('cdk-virtual-scroll-viewport'));
    expect(viewport).toBeTruthy();
  });

  it('should show label when label input is provided', () => {
    component.label = 'My Label';
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.floating-label'));
    expect(label).toBeTruthy();
    expect(label.nativeElement.textContent).toBe('My Label');
  });

  it('should apply floating classes when has value', () => {
    component.label = 'My Label';
    component.value = [1];
    fixture.detectChanges();
    const wrapper = fixture.debugElement.query(By.css('.form-select'));
    expect(wrapper.nativeElement.classList).toContain('has-value');
  });

  it('should apply variant-on class', () => {
    component.label = 'My Label';
    component.floatLabelVariant = 'on';
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.multi-select-container'));
    expect(container.nativeElement.classList).toContain('variant-on');
  });

  it('should apply variant-over class', () => {
    component.label = 'My Label';
    component.floatLabelVariant = 'over';
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.multi-select-container'));
    expect(container.nativeElement.classList).toContain('variant-over');
  });

  it('should apply variant-in class', () => {
    component.label = 'My Label';
    component.floatLabelVariant = 'in';
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.multi-select-container'));
    expect(container.nativeElement.classList).toContain('variant-in');
  });

  it('should apply variant-iftalabel class', () => {
    component.iftaLabel = true;
    component.label = 'My Label';
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.multi-select-container'));
    expect(container.nativeElement.classList).toContain('variant-iftalabel');
    expect(container.nativeElement.classList).toContain('form-floating');
  });

  it('should show clear icon when showClear is true and has value', () => {
    component.showClear = true;
    component.value = [1];
    fixture.detectChanges();
    const clearIcon = fixture.debugElement.query(By.css('.clear-icon'));
    expect(clearIcon).toBeTruthy();
  });

  it('should clear selection when clear icon is clicked', () => {
    component.showClear = true;
    component.value = [1];
    fixture.detectChanges();
    const clearIcon = fixture.debugElement.query(By.css('.clear-icon'));
    clearIcon.nativeElement.click();
    fixture.detectChanges();
    expect(component.value.length).toBe(0);
  });

  it('should be visible when initialized with value and showClear is true', () => {
    component.showClear = true;
    component.value = [1];
    fixture.detectChanges();
    const clearIcon = fixture.debugElement.query(By.css('.clear-icon'));
    expect(clearIcon).toBeTruthy();
  });

  it('should apply form-select-sm when size is small', () => {
    component.size = 'small';
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('.form-select'));
    expect(select.nativeElement.classList).toContain('form-select-sm');
  });

  it('should apply form-select-lg when size is large', () => {
    component.size = 'large';
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('.form-select'));
    expect(select.nativeElement.classList).toContain('form-select-lg');
  });

  it('should apply w-100 class when fluid is true', () => {
    component.fluid = true;
    fixture.detectChanges();
    const dropdown = fixture.debugElement.query(By.css('.dropdown'));
    expect(dropdown.nativeElement.classList).toContain('w-100');
  });

  it('should apply variant-filled class when variant is filled', () => {
    component.variant = 'filled';
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('.form-select'));
    expect(select.nativeElement.classList).toContain('variant-filled');
  });

  it('should not show overlay when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('.form-select'));
    select.nativeElement.click();
    fixture.detectChanges();
    expect(component.overlayVisible).toBe(false);
  });

  it('should have tabindex -1 when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('.form-select'));
    expect(select.nativeElement.getAttribute('tabindex')).toBe('-1');
  });

  it('should apply is-invalid class when invalid is true', () => {
    component.invalid = true;
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('.form-select'));
    expect(select.nativeElement.classList).toContain('is-invalid');
  });

  it('should update value via writeValue', () => {
    const newValue = [1, 2];
    component.writeValue(newValue);
    fixture.detectChanges();
    expect(component.value).toEqual(newValue);
  });

  it('should call onModelChange when value changes', () => {
    const spy = vi.fn();
    component.registerOnChange(spy);
    component.onOptionClick(component.options[0]);
    expect(spy).toHaveBeenCalledWith([component.getOptionValue(component.options[0])]);
  });

  describe('Accessibility', () => {
    it('should have correct ARIA roles', () => {
      const trigger = fixture.debugElement.query(By.css('.form-select'));
      expect(trigger.nativeElement.getAttribute('role')).toBe('combobox');
      expect(trigger.nativeElement.getAttribute('aria-haspopup')).toBe('listbox');
    });

    it('should toggle aria-expanded when overlay visibility changes', () => {
      const trigger = fixture.debugElement.query(By.css('.form-select'));
      expect(trigger.nativeElement.getAttribute('aria-expanded')).toBe('false');

      component.overlayVisible = true;
      fixture.detectChanges();
      expect(trigger.nativeElement.getAttribute('aria-expanded')).toBe('true');
    });

    it('should apply custom aria labels', () => {
      component.ariaLabel = 'Custom Label';
      component.ariaLabelledBy = 'label-id';
      component.ariaDescribedBy = 'desc-id';
      fixture.detectChanges();

      const trigger = fixture.debugElement.query(By.css('.form-select'));
      expect(trigger.nativeElement.getAttribute('aria-label')).toBe('Custom Label');
      expect(trigger.nativeElement.getAttribute('aria-labelledby')).toBe('label-id');
      expect(trigger.nativeElement.getAttribute('aria-describedby')).toBe('desc-id');
    });
  });
});
