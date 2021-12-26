<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <section>
      <PageTopSection theme="blue" class="min-h-400px tw-flex tw-flex-col tw-justify-end lg:tw-justify-center">
        <div class="tw-text-gray-1 tw-font-medium">
          <div class="tw-text-base xl:tw-text-lg tw-mt-15 lg:tw-mt-0">2021-10-11</div>
          <div
            class="tw-font-semibold tw-leading-10 tw-text-3xl xl:tw-text-5xl tw-mt-4 xl:tw-mt-5"
          >Innovating european smart city, green tech and health tech industries with urban tech line</div>
          <VButton
            class="tw-mt-8 tw-mb-12 tw-bg-white tw-border-0 tw-block lg:tw-hidden"
            variant="orange-1"
            text="Back"
            width="180px"
            @click="$router.push({ name: 'articles' })"
          />
        </div>
      </PageTopSection>
    </section>
    <!--
      --------
      @Section #1
      --------
      article
      --------
    -->
    <section class="px-16px-48px-80px tw-pt-16 tw-pb-20 xl:tw-pb-30">
      <div class="tw-flex">
        <div class="basis-333px tw-flex-grow-0 tw-hidden lg:tw-block">
          <VButton
            variant="orange-2"
            text="Back"
            width="180px"
            @click="$router.push({ name: 'articles' })"
          />
        </div>
        <div class="tw-flex-1 tw-font-medium tw-max-w-3xl">
          <div>In October, CIVITTA took over the leadership of the pan-European project URBAN TECH, which aims to find solutions to the challenges of both private and public sector organizations and develop new industrial value chains in the three emerging areas, helping to shape a healthy, smart and green urban environment of the future.</div>
          <div class="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-2">How will we do it?</div>
          <div class="tw-mb-6 tw-ml-6">
            <ul class="tw-list-disc">
              <li>Urban Tech will map 300 challenges in the areas of Health Tech, Smart City and GreenTech industries.</li>
              <li>The project will launch 3 Open Calls for start-ups and SMEs to provide solutions to one or more Challenges. Selected start-ups and SMEs will be invited to participate in 16 international industry hackathons which will identify 80 innovation projects selected for the incubation phase.</li>
              <li>80 businesses incubated in 8 technology parks will deliver minimal viable products (MVPs).</li>
              <li>30 products will be selected and rewarded with a grant for piloting and large-scale testing.</li>
              <li>20 tested and piloted products will be demonstrated to Challenge owners and investors.</li>
              <li>20 innovative solutions with the highest potential of commercialization receive GOING GLOBAL support.</li>
            </ul>
          </div>
          <div>
            <div
              class="tw-my-6"
            >The project is being implemented by 10 more partners from 9 countries: Tallinn Science Park Tehnopol, Turku Science and Technology Park in Finland, Innovation and Entrepreneurship Center at the University of Graz in Austria, Mälardalens University in Sweden, Energy Agency Energiesparverband in Austria, Karlsruhe Technology Region IT Network in CyberForum in Germany, Kaunas Science and Technology Park from Lithuania, Gdansk Science and Technology Park from Poland and communication agency LOBA from Portugal.</div>
            <div
              class="tw-mt-6"
            >Read more about the project and how you can contribute HERE and follow Urban Tech for project news and updates.</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

import PageTopSection from "@/components/services2/PageTopSection.vue"

export default defineComponent({
  name: 'Articles',
  components: {
    PageTopSection,
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))

    // const categories = ['All', 'Insights', 'Case studies', 'Career stories', 'Company news',]
    // const category = ref(categories[0])

    // return { category, categories }
  },
});
</script>

<style lang="scss" scoped>
::v-deep {
  .active-class {
    padding-left: 16px;
    padding-right: 16px;
    border-color: transparent;
  }
  .inactive-class {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>