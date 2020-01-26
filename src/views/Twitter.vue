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
import TweetCard from '@/components/TweetCard';

export default {
  name: 'home',
  components: {
    'tweet-card': TweetCard
  },
  data() {
    return {
      tweets: []
    }
  },
  
  mounted() {

  }
}
</script>
