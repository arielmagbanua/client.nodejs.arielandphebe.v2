// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

// Utilities
import {
  mount,
  createLocalVue
} from '@vue/test-utils';

// import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld';

// describe('HelloWorld.vue', () => {
//   it('Welcome Message Test', () => {
//     const msg = 'Welcome to Vuetify';
//     const wrapper = shallowMount(HelloWorld, {});
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

const localVue = createLocalVue();

describe('HelloWorld.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('Welcome Message Test', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify
    });
    expect(wrapper.text()).toMatch(msg)
  });
});
