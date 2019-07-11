<template>
  <div class="projects mt-4 mx-4">
    <h1 class="subheading grey--text">Gallery page</h1>
    <v-layout>
      <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex v-for="n in 24" :key="n" xs4 d-flex>
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-layout fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
export default {
  metaInfo: {
    title: "Nugs-Ternopil",
    titleTemplate: "%s - Gallery",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "All the Picures from Nugs-Ternopil events and activities ready for viewing and downloading."
      },
      {
        name: "Keywords",
        content:
          "Nugs-Ternopil gallery, gallery, images, Pictures, pictures from Nugs-Ternopil events, images from nugs ternopil events, download nugsternopil photos"
      }
    ]
  }
};
</script>