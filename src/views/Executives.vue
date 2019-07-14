<template>
  <v-container class="Executives">
    <h1 class="heading grey--text">Executives Page</h1>

    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="` ${person.role} ${person.name}`">
          <v-card class="text-xs-center mx-auto my-3" max-width="250" style="border-radius: 20px;">
            <v-responsive class="pb-4 pt-2">
              <v-avatar size="120" :class="`pin lighten-2 ${person.color}`">
                <v-img
                  max-width="114"
                  max-height="114"
                  contain
                  :src="person.avatar"
                  :lazy-src="person.avatar"
                  :alt="` ${person.role} ${person.name}`"
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
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          fixed
          right
          bottom
          small
          fab
          class="mb-4"
          @click="onLoadPastExecutives()"
          router
          to="/pastExecs"
        >
          <v-icon>fas fa-history</v-icon>
        </v-btn>
      </template>
      <span>Past Presidents And Vices.</span>
    </v-tooltip>
  </v-container>
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
          name: "Abdulkadir 0. Sheriff",
          role: "President",
          color: "primary",
          avatar: "/avatar-6.jpeg"
        },
        {
          name: "Ofori Theresa",
          color: "error",
          role: "Vice President",
          avatar: "/avatar-7.jpeg"
        },
        {
          name: "Kwesi O. A. Gyebi",
          color: "error",
          role: "Financial Secretary",
          avatar: "/avatar-12.jpeg"
        },
        {
          name: "Agyekum Zelda N.Frema",
          color: "primary",
          role: "General Secretery",
          avatar: "/avatar-17.jpeg"
        },
        {
          name: "Dennis Appiah Nkansah",
          color: "black",
          role: "Public Relations Officer",
          avatar: "/avatar-8.jpeg"
        },
        {
          name: "Abdallah Hinda",
          color: "black",
          role: "Organizing Secretery",
          avatar: "/avatar-9a.jpeg"
        },
        {
          name: "Ahmed S. Bukari",
          color: "error",
          role: "Dept. Organizing Secretary",
          avatar: "/avatar-16.jpeg"
        },
        {
          name: "Abdullah Ahmed A.Faid",
          color: "error",
          role: "Head of Academics",
          avatar: "/avatar-10a.jpeg"
        },

        {
          name: "Juanita Mireluaa Sefa",
          color: "black",
          role: "Economics Administrator",
          avatar: "/avatar-13.jpeg"
        },
        {
          name: "Dennis Sunten",
          color: "info",
          role: "Health Director",
          avatar: "/avatar-14.jpeg"
        },
        {
          name: "Christel Ayangba",
          color: "success",
          role: "Women's Commisioner",
          avatar: "/avatar-11.jpeg"
        },
        {
          name: "Zulaiha Naadu Ali",
          color: "primary",
          role: "Deputy Women's Commissioner",
          avatar: "/avatar-15.jpeg"
        },

        {
          name: "Owusu Lois Asomaniwaa",
          color: "info",
          role: "Welfare Committee Chair",
          avatar: "/avatar-19.jpeg"
        },
        {
          name: "Owusu Lois Asomaniwaa",
          color: "info",
          role: "Dept. Welfare Committee Chair",
          avatar: "/avatar-19.jpeg"
        },
        {
          name: "Damoah A. Kofi",
          color: "black",
          role: "Head of Sports",
          avatar: "/avatar-18a.jpeg"
        },
        {
          name: "Eunice Efua Aidoo",
          color: "success",
          role: "Deputy Head of Sports",
          avatar: "/avatar-20.jpeg"
        }
      ]
    };
  },
  methods: {
    onLoadPastExecutives() {
      this.$router.push("/pastExecs");
    }
  }
};
</script>



<style lang="scss" scoped>
.pin {
  border-radius: 50% 50% 50% 0;
  border: 4px solid #fff;

  transform: rotate(-45deg);
}

.pin-inner {
  transform: rotate(45deg);
}
</style>