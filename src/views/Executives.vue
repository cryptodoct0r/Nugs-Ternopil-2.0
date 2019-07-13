<template>
  <div class="team mt-4 mx-4">
    <h1 class="subheading grey--text">Executives Page</h1>

    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center mx-auto my-3" max-width="250" style="border-radius: 20px;">
            <v-responsive class="pb-4 pt-2">
              <v-avatar size="120" :class="`pin lighten-2 ${person.color}`">
                <v-img
                  max-width="114"
                  max-height="114"
                  :src="person.avatar"
                  :lazy-src="person.avatar"
                  :alt="person.name"
                  class="pin-inner"
                ></v-img>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions justify-space-around>
              <v-tooltip top>
                <v-btn fab color="grey" small slot="activator">
                  <v-icon small>message</v-icon>
                </v-btn>
                <span>Send a Message</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Nugs-Ternopil",
    titleTemplate: "%s - Executives",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "The men and women who are in charge of Nugs-Ternopil for the year 2019/2020"
      },
      {
        name: "Keywords",
        content:
          "Nugs-Ternopil executives, executives 2019/2020 year, nugsternopil executives 2019/2020"
      }
    ]
  },
  data() {
    return {
      team: [
        {
          name: "Sherif Usman",
          role: "President",
          color: "primary",
          avatar: "/avatar-6.jpeg"
        },
        {
          name: "Ofori Theresa",
          color: "error",
          role: "Vice-President",
          avatar: "/avatar-7.jpeg"
        },
        {
          name: "Boy 1",
          color: "black",
          role: "Vice-President",
          avatar: "/avatar-8.jpeg"
        },
        {
          name: "Abdallah Hind 1",
          color: "primary",
          role: "Vice-President",
          avatar: "/avatar-9.jpeg"
        },
        {
          name: "Abdallah Hinds 2",
          color: "black",
          role: "Vice-President",
          avatar: "/avatar-9a.jpeg"
        },
        {
          name: "Boy 2",
          color: "info",
          role: "Vice-President",
          avatar: "/avatar-10.jpeg"
        },
        {
          name: "Girl 2",
          color: "success",
          role: "Vice-President",
          avatar: "/avatar-11.jpeg"
        },
        {
          name: "Boy 3",
          color: "error",
          role: "Vice-President",
          avatar: "/avatar-12.jpeg"
        },
        {
          name: "Girl 3",
          color: "black",
          role: "Vice-President",
          avatar: "/avatar-13.jpeg"
        },
        {
          name: "Boy 4",
          color: "info",
          role: "Kungfu President",
          avatar: "/avatar-14.jpeg"
        },
        {
          name: "Girl 4",
          color: "primary",
          role: "Vice Kungfu President",
          avatar: "/avatar-15.jpeg"
        },
        {
          name: "Nana Something ",
          color: "error",
          role: "Financial Secretary",
          avatar: "/avatar-16.jpeg"
        },
        {
          name: "Zelda",
          color: "primary",
          role: "Socials",
          avatar: "/avatar-17.jpeg"
        },
        {
          name: "Nbia Gyang",
          color: "black",
          role: "Socials",
          avatar: "/avatar-18.jpeg"
        },
        {
          name: "Girl 19",
          color: "info",
          role: "Sales guru",
          avatar: "/avatar-19.jpeg"
        },
        {
          name: "Girl 20",
          color: "success",
          role: "Sales gurues",
          avatar: "/avatar-20.jpeg"
        }
      ]
    };
  }
};
</script>


<style lang="scss">
.pin {
  border-radius: 50% 50% 50% 0;
  border: 4px solid #fff;

  transform: rotate(-45deg);

  &.greentag {
    background-color: #3cd1c2;
  }
  &.yellowtag {
    background-color: orange;
  }
  &.redtag {
    background-color: tomato;
  }
}

.pin-inner {
  transform: rotate(45deg);
}
</style>