// reference: https://www.youtube.com/watch?v=dV_5BLKNCRY

// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

// Utilities
import {
  mount,
  createLocalVue
} from '@vue/test-utils';

import TweetCard from '@/components/TweetCard';

const localVue = createLocalVue();

describe('TweetCard.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('Tweet Card Basic Mounting', () => {
    const id = '1233243452143234';
    const text = 'Test Tweet!!!';
    const owner = {
      name: 'John Doe',
      profile_image_url: 'https://test.com/foo.png',
      screen_name: 'foo_tester',
      profile_url: 'https://twitter.com/foo_tester',
      media: []
    };

    const wrapper = mount(TweetCard, {
      propsData: {
        id,
        text,
        owner
      },
      localVue,
      vuetify
    });
    
    expect(wrapper.text()).toMatch(text);
    expect(wrapper.text()).toMatch(owner.name);
    expect(wrapper.text()).toMatch('@' + owner.screen_name);
  });
});
