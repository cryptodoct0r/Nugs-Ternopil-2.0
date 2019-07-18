<template>
  <v-container class="gallery">
    <h1 class="heading grey--text">Image Gallery</h1>
    <LightBox
      :images="images"
      ref="lightbox"
      :show-caption="true"
      :show-light-box="false"
      :nThumbs="3"
    ></LightBox>

    <v-layout>
      <v-flex
        xs12
        sm10
        offset-sm1
        lg8
        offset-lg2
      >
        <v-card>
          <v-container
            grid-list-sm
            fluid
          >
            <v-layout
              row
              wrap
            >
              <v-flex
                v-for="(image, index) in images.slice(0, 21)"
                :key="image.id"
                xs4
                d-flex
              >
                <v-card
                  flat
                  tile
                  class="d-flex"
                >
                  <v-img
                    :data-src="image.src"
                    :src="image.src"
                    :lazy-src="image.src"
                    :alt="image.caption"
                    position="center center"
                    @click="openGallery(index)"
                    aspect-ratio="1.6"
                    class="grey lighten-2"
                    style="cursor: pointer;"
                  >
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
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
  </v-container>
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
  data () {
    return {
      images,

      siteLoading
    };
  },
  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index);
    }
  }
};
</script>

