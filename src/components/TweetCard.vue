<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="700" min-width="400">
    <v-card-title>
      <v-icon large left>mdi-twitter</v-icon>
      <span class="title font-weight-light">@{{ username }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">"{{ text }}"</v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <a class="like-tweet" :href="'https://twitter.com/intent/like?tweet_id=' + id">
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">{{ likes }}</span>
          </a>

          <a class="share-tweet" :href="'https://twitter.com/intent/retweet?tweet_id=' + id">
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">{{ shares }}</span>
          </a>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
a {
  &.like-tweet,
  &.share-tweet {
    text-decoration: none;
    color: white !important;
  }
}
</style>

<script>
export default {
  props: {
    id: String,
    text: String,
    user: String,
    username: String,
    likes: Number,
    shares: Number
  },

  data: () => ({
    
  })
};
</script>