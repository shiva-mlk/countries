import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CountryCard from '@/components/CountryCard.vue'

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}))

describe('CountryCard', () => {
  const mockCountry = {
    name: 'Germany',
    population: 81770900,
    region: 'Europe',
    capital: 'Berlin',
    flags: { png: 'germany-flag.png', svg: '' },
    alpha3Code: 'DEU',
    topLevelDomain: [],
    subregion: '',
    nativeName: '',
    languages: []
  }

  it('renders country details correctly', () => {
    const wrapper = mount(CountryCard, {
      props: { country: mockCountry }
    })

    expect(wrapper.text()).toContain('Germany')
    expect(wrapper.text()).toContain('Berlin')
    expect(wrapper.text()).toContain('Europe')
    expect(wrapper.text()).toContain('81,770,900') 
  })
})