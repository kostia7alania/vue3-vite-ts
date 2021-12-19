<template>
  <div class="tw-flex tw-flex-wrap tw-gap-x-6 tw-gap-y-10 tw-mx-20">
    <!-- card #1 -->
    <div class="basis-333px w-444px h-444px">
      <CardInfoAnim
        title="Students and graduates"
        description="We are always looking for young talents from our local markets who want to develop professionally by doing meaningful projects in their home countries and internationally. If you are a student or a recent graduate, we offer various internship and entry-level positions that will best suit your needs."
        image="students-and-graduates"
        theme="orange"
      />
    </div>
    <!-- card #2 -->
    <div class="basis-333px w-444px h-444px">
      <CardInfoAnim
        title="Experienced professionals"
        description="We truly believe that anyone can become a management consultant and apply relevant knowledge to drive change in organizations and make an impact on society."
        image="experienced-professionals"
        theme="blue"
      />
    </div>

    <!-- card #3 -->
    <div class="tw-flex-1 tw-grow-1 tw--my-4 tw-pl-8 tw-rounded-4xl">
      <div class="tw-font-semibold tw-text-2xl tw-leading-6 tw-rounded-4xl">
        <h2 class="topic-title">Who should join our team?</h2>

        <div class="tw-mt-6 topic-description">
          <div
            class="tw-text-base topic-description"
          >Our success lies in the talented and passionate team of professionals who make OÜ Primelight a great place to work.</div>
          <div class="tw-font-semibold tw-text-xl tw-mt-6">The way we work:</div>

          <ul class="tw-mt-2 tw-ml-5 tw-text-base tw-font-medium tw-list-disc tw-leading-7">
            <li>International teams and projects</li>
            <li>Non-hierarchical work environment</li>
            <li>Impactful and meaningful projects</li>
            <li>Focus on employee growth and mentorship</li>
            <li>Competitive remuneration and training packages</li>
          </ul>
          <VButton
            v-if="isShownButton"
            class="tw-mt-10 tw-text-base tw-font-semibold"
            text="Apply now"
            variant="blue"
            width="244px"
            height="48px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, } from 'vue';


export default defineComponent({
  name: "WhoJoinToTeam",
  components: {
    CardInfoAnim: defineAsyncComponent(() => import("@/components/services/CardInfoAnim.vue")),
    VButton: defineAsyncComponent(() => import('@/components/ui/VButton.vue')),
  },
  props: {
    isShownButton: { type: Boolean, default: false },
  },
  emits: ['click'],
});
</script>


