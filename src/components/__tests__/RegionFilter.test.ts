import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import RegionFilter from '@/components/RegionFilter.vue';
import { REGIONS } from '@/constants/constant';

describe('RegionFilter', () => {
  it('renders all region options from constants', () => {
    const wrapper = mount(RegionFilter, {
      props: {
        modelValue: ''
      }
    });

    const options = wrapper.findAll('option');
    
    expect(options).toHaveLength(REGIONS.length);
    expect(options[0]?.text()).toBe('All Regions');
    expect(options[1]?.text()).toEqual('Africa');
  });

  it('sets the correct selected value', () => {
    const wrapper = mount(RegionFilter, {
      props: {
        modelValue: 'Europe'
      }
    });

    const select = wrapper.find('select');
    expect((select.element as HTMLSelectElement).value).toBe('Europe');
  });

  it('emits update:modelValue when selection changes', async () => {
    const wrapper = mount(RegionFilter, {
      props: {
        modelValue: ''
      }
    });

    const select = wrapper.find('select');
    await select.setValue('Asia');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Asia']);
  });

  it('renders the dropdown arrow icon', () => {
    const wrapper = mount(RegionFilter, {
      props: {
        modelValue: ''
      }
    });

    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
    expect(svg.classes()).toContain('w-4');
    expect(svg.classes()).toContain('h-4');
  });

  it('has proper styling classes', () => {
    const wrapper = mount(RegionFilter, {
      props: {
        modelValue: ''
      }
    });

    const container = wrapper.find('div');
    expect(container.classes()).toContain('relative');
    
    const select = wrapper.find('select');
    expect(select.classes()).toContain('appearance-none');
    expect(select.classes()).toContain('rounded-lg');
    expect(select.classes()).toContain('shadow-md');
  });
});

