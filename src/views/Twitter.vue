<template>
  <section class="twitter">
    <v-container class="fill-height">
      <v-row dense>
        <tweet-card 
              id="507185938620219395"
              text="Sample Content"
              user="Evan You"
              username="evan_you"
              likes="123"
              shares="456"
            />
      </v-row>
    </v-container>
    <!-- <tweet-card></tweet-card> -->
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TweetCard from '@/components/TweetCard';

export default {
  name: 'home',
  components: {
    // HelloWorld
    'tweet-card': TweetCard
  },
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
}
</script>
