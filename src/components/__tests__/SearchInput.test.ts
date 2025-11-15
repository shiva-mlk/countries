import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';
import { SEARCH_PLACEHOLDER } from '@/constants/constant';

describe('SearchInput', () => {
  it('renders input field with correct placeholder', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    });

    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe(SEARCH_PLACEHOLDER);
  });

  it('displays the correct value from modelValue prop', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: 'Germany'
      }
    });

    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).value).toBe('Germany');
  });

  it('emits update:modelValue when input changes', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    });

    const input = wrapper.find('input');
    await input.setValue('France');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['France']);
  });

  it('renders the search icon', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    });

    const iconContainer = wrapper.find('.absolute');
    expect(iconContainer.exists()).toBe(true);
  });

  it('has correct input type attribute', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    });

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('text');
  });

  it('has proper styling classes', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    });

    const container = wrapper.find('div.relative');
    expect(container.exists()).toBe(true);
    expect(container.classes()).toContain('shadow-md');
    expect(container.classes()).toContain('rounded-lg');

    const input = wrapper.find('input');
    expect(input.classes()).toContain('rounded-lg');
    expect(input.classes()).toContain('focus:outline-none');
  });

  it('updates input value correctly when typing', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    });

    const input = wrapper.find('input');
    await input.setValue('United Kingdom');

    const emittedEvents = wrapper.emitted('update:modelValue');
    expect(emittedEvents).toBeTruthy();
    expect(emittedEvents?.[emittedEvents.length - 1]).toEqual(['United Kingdom']);
  });
});

