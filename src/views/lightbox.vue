<template>
  <div class="gallery mt-4 mx-4">
    <h1 class="subheading grey--text">Gallery page</h1>

    <v-layout>
      <v-flex xs12 sm10 offset-sm1 lg8 offset-lg2>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex v-for="(image, index) in images" :key="image.id" xs4 d-flex>
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="image.src"
                    :lazy-src="image.src"
                    @click="openGallery(index)"
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
              <LightBox
                :images="images"
                ref="lightbox"
                :show-caption="true"
                :show-light-box="false"
              ></LightBox>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import LightBox from "@/components/LightBox";
import siteLoading from "@/siteloading.gif";
import images from "@/dummy";
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
  },
  components: {
    LightBox
  },
  data() {
    return {
      images,
      siteLoading
    };
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    }
  }
};
</script>

