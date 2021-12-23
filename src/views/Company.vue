<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <!--   
      <section>
      <PageTopSection theme="blue" class="min-h-400px">
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Story of OÜ Primelight</div>
      <div
      class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
      >OÜ Primelight challenges the traditional norms of management consulting, providing quality advisory talent that delivers results at a value for money price point. We help our clients from private companies to governments and non-profits to challenge their own industries by becoming more innovative, efficient and dynamic.</div>
      </PageTopSection>
      </section>
    -->

    <!--
      --------
      @Section #1
      -------- 
    -->
    <section class="tw-my-30 tw-px-20">
      <div class="topic-title tw-flex tw-justify-center">
        <div class="tw-max-w-3xl tw-text-center">We combine traditional consulting model</div>
      </div>
      <div class="tw-flex tw-flex-wrap tw-gap-x-10 tw-gap-y-14 tw-mt-20">
        <!-- card #1 -->
        <div class="basis-333px tw-w-full h-510px tw-shrink tw-grow">
          <CompanyCardInfoAnim
            title="Fact-Based management consultigs"
            description="We are always looking for young talents from our local markets who want to develop professionally by doing meaningful projects in their home countries and internationally. If you are a student or a recent graduate, we offer various internship and entry-level positions that will best suit your needs."
            image="students-and-graduates"
            theme="orange"
          />
        </div>
        <!-- card #2 -->
        <div class="basis-333px tw-w-full h-510px tw-shrink tw-grow">
          <CompanyCardInfoAnim
            title="Experiences Team"
            description="We use methodologies and approaches of the traditional consulting toolkit, with a focus on analytical rigor and fact-based problem-solving. Our prior consulting experience in over 10 000 projects and extensive network allows us to make use of the best industry and functional practices. "
            image="experienced-professionals"
            theme="orange"
          />
        </div>
        <!-- card #3 -->
        <div class="basis-333px tw-w-full h-510px tw-shrink tw-grow">
          <CompanyCardInfoAnim
            title="Practical and Iimpact-Oriented"
            description="We truly believe that anyone can become a management consultant and apply relevant knowledge to drive change in organizations and make an impact on society."
            image="experienced-professionals"
            theme="orange"
          />
        </div>
      </div>
      <div class="tw-flex tw-flex-wrap tw-gap-x-10 tw-gap-y-14 tw-mt-14">
        <!-- card #1 -->
        <div class="tw-w-2/3 basis-333px h-510px tw-shrink-0 tw-grow">
          <CompanyCardInfoAnim
            title="Bold And Innovative"
            description="We are always looking for young talents from our local markets who want to develop professionally by doing meaningful projects in their home countries and internationally. If you are a student or a recent graduate, we offer various internship and entry-level positions that will best suit your needs."
            image="students-and-graduates"
            theme="blue"
          />
        </div>
        <!-- card #2 -->
        <div class="basis-400px h-510px tw-shrink tw-grow-0">
          <CompanyCardInfoAnim
            title="Flexible And Efficient Model"
            description="We use methodologies and approaches of the traditional consulting toolkit, with a focus on analytical rigor and fact-based problem-solving. Our prior consulting experience in over 10 000 projects and extensive network allows us to make use of the best industry and functional practices. "
            image="experienced-professionals"
            theme="orange"
          />
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #2
      -------- 
    -->

    <section class="tw-bg-gray-4 tw-relative">
      <div class="tw-py-30">
        <div class="tw-flex tw-justify-between tw-px-20 tw-gap-10">
          <!-- left -->
          <div class="tw-flex-1">
            <div class="topic-title">OÜ Primelight - The Challengeʳ Advisory</div>
            <div class="tw-pt-6 topic-description">
              <p
                class="tw-mt-2"
              >We started our journey in Estonia — home of the world’s most digitally advanced society (e-Estonia) and a world-class start-up ecosystem. We noticed that in small countries it’s not easy to access competitive and high-quality management consulting services: local companies are too small to offer everything clients need, while international companies are not easy to access, either lacking a local presence or asking for higher prices to cover their high overhead costs. As our company grew, we understood that our approach is fit not only for small countries but for bigger countries as well.</p>
              <p
                class="tw-mt-2"
              >Taking advantage of our unique origin and experience, we took a Challenger approach in the management consulting sector to bridge that gap. We decided to mix smart people with lean processes and structures, thus creating the leading company in Central and Eastern Europe.</p>
              <p
                class="tw-mt-2"
              >Until today, we have exported our business model to Emerging Europe as well as to the Nordics, and now we are present in 17 European countries. We have been developing our company based on the “one company” principle — so that even our smaller local offices are able to serve big projects in multiple areas.</p>
            </div>
            <div class="tw-font-semibold tw-text-xl tw-mt-6">Our main tenets for success:</div>

            <ul
              class="tw-mt-2 tw-ml-5 tw-text-base tw-font-medium tw-list-disc tw-leading-7 topic-description"
            >
              <li>We challenge our competitors — we deliver more value, at scale.</li>
              <li>We challenge our clients — we are not afraid to ask the tough questions and help clients to challenge themselves or their own industries.</li>
              <li>We challenge ourselves — we like unconventional projects</li>
            </ul>
          </div>
          <!-- right -->
          <div class="tw-flex tw-flex-wrap tw-flex-1 tw-gap-10 tw-mt-20">
            <div class="tw-flex tw-flex-col tw-mt-20 tw-gap-10">
              <CardInfo number="18" label="National branches" icon="branches" />
              <CardInfo number="29" label="Offices" icon="consultations" />
            </div>
            <div class="tw-flex tw-flex-col tw-gap-10">
              <CardInfo number="350+" label="Consultants" icon="offices" />
              <CardInfo number="150+" label="Software Developers" icon="softGroup" />
            </div>
          </div>
        </div>
      </div>
      <div class="tw-absolute tw-right-0 tw-top-0">
        <BgPatternChallenge />
      </div>
    </section>

    <!--
      --------
      @Section #3
      --------
      Where are we located
      --------
    -->
    <WhereWeLocated class="tw-py-28" />

    <!--
      --------
      @Section #2
      --------
    -->
    <section class="tw-bg-gray-4 tw-pt-7 tw-pb-52 tw-relative">
      <div class="tw-px-20 tw-gap-10">
        <!-- top -->
        <div class="tw-flex tw-justify-between tw-gap-10">
          <div class="tw-flex-1 topic-title">Our history</div>
          <div
            class="tw-flex-1 topic-description"
          >OÜ Primelight was established as an alliance of consulting companies in the Baltic States (OÜ Primelight, Innopolis, and Advisio). From its roots in the Baltics, OÜ Primelight has expanded in a puzzle-like fashion through organic growth, mergers, and acquisitions. Today, our company employs over 300 consultants in 18 countries, with about half of the employees working outside the Baltics.</div>
        </div>
        <!-- bottom -->
        <div class="tw-mt-20">
          <!-- row 1 -->
          <img src="@/assets/images/subway.png" alt="subway" />
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #5
      --------
      Interested In cooperation?
      --------
    -->
    <section class="tw-mb-60 tw-mt-7 tw-mx-20">
      <Cooperation title="Contact us and find out how we can work together" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'Company',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    CompanyCardInfoAnim: defineAsyncComponent(() => import('@/components/company/CompanyCardInfoAnim.vue')),
    CardInfo: defineAsyncComponent(() => import("@/components/services/CardInfo.vue")),
    BgPatternChallenge: defineAsyncComponent(() => import("@/components/patterns/BgPatternChallenge.vue")),
    WhereWeLocated: defineAsyncComponent(() => import("@/components/services/WhereWeLocated.vue")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
  },
});


</script>


<style lang="scss" scoped>
.basis-400px {
  flex-basis: 400px;
}
</style>