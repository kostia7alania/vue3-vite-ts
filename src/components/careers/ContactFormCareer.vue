<template>
    <div class="tw-p-16 gray-shadow-1">
        <div class="tw-flex tw-justify-between tw-items-center">
            <div class="topic-title">Fill the contact form</div>
            <div class="topic-description">*Required fields</div>
        </div>
        <!-- form inputs -->
        <div class="tw-mt-16">
            <div class="tw-flex tw-items-center tw-gap-x-10">
                <VInput v-model="form.name" placeholder="Name*" />
                <VInput v-model="form.surname" placeholder="Surname*" />
            </div>

            <div class="tw-flex tw-items-center tw-gap-x-10 tw-mt-6">
                <VInput v-model="form.phone" placeholder="Phone" />
                <VInput v-model="form.email" placeholder="Email*" />
            </div>
            <div class="tw-flex tw-items-center tw-gap-x-10 tw-mt-6">
                <VInput v-model="form.companyName" class="tw-w-1/2" placeholder="Company name" />
                <VSelect
                    v-model="form.office"
                    class="tw-w-1/2"
                    placeholder="Preferred location*"
                    :items="['Office 1', 'Office 2', 'Office 3']"
                />
            </div>
            <div class="tw-mt-6">
                <VTextarea v-model="form.message" placeholder="Your message*" />
            </div>
        </div>
        <!-- past link -->
        <div class="tw-my-6">
            <VInput
                v-model="form.link"
                placeholder="Paste link to your online profile (e.g. LinkedIn) or upload your CV*"
            >
                <template #append>
                    <VButton
                        class="tw-w-full tw-text-base truncate tw-bg-white"
                        text="Upload CV"
                        variant="orange-1"
                        height="42px"
                        width="200px"
                    />
                </template>
            </VInput>
        </div>
        <!-- upload doc -->
        <div class="tw-my-6">
            <VFilePicker
                v-model="form.file"
                label="Upload other documents (e.g. portfolio, references)"
            />
        </div>
        <!-- checks -->
        <div class="tw-flex tw-justify-between tw-items-end tw-mt-10">
            <div class="tw-text-sm tw-max-w-3xl">
                <VCheckbox v-model="agreement1">
                    <span>
                        *I have read and understood that my personal data will be processed for the ongoing recruitment process, as described in the
                        <span
                            class="tw-text-orange-1"
                        >Privacy notice for applicants.</span>
                    </span>
                </VCheckbox>
                <VCheckbox v-model="agreement2" class="tw-mt-4">
                    <span>
                        I agree to the storage of my personal data to be contacted by OÜ Primelight for future employment opportunities, as described in the
                        <span
                            class="tw-text-orange-1"
                        >Privacy notice for applicants.</span>
                    </span>
                </VCheckbox>
                <VCheckbox v-model="agreement3" class="tw-mt-4">
                    <span>
                        I agree that OÜ Primelight shares my personal data internally, with other OÜ Primelight offices, as described in the
                        <span
                            class="tw-text-orange-1"
                        >Privacy notice for applicants.</span>
                    </span>
                </VCheckbox>
            </div>
            <div>
                <VButton text="Send" variant="blue" class="w-244px" @click="submitHandler" />
            </div>
        </div>
        <VCustomModal v-if="isSent" @close="isSent = false">
            <div class="alert-modal tw-relative tw-bg-white tw-m-auto tw-rounded-3xl">
                <div class="tw-h-full tw-relative tw-z-20 tw-pb-16">
                    <button class="tw-absolute tw-right-6 tw-top-6" @click="isSent = false">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="24" cy="24" r="23.25" stroke="#E8E7EA" stroke-width="1.5" />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.293 18.293C18.4806 18.1055 18.7349 18.0002 19 18.0002C19.2652 18.0002 19.5195 18.1055 19.707 18.293L24 22.586L28.293 18.293C28.3853 18.1975 28.4956 18.1213 28.6176 18.0689C28.7396 18.0165 28.8709 17.9889 29.0036 17.9878C29.1364 17.9866 29.2681 18.0119 29.391 18.0622C29.5139 18.1125 29.6255 18.1867 29.7194 18.2806C29.8133 18.3745 29.8876 18.4862 29.9379 18.6091C29.9881 18.732 30.0134 18.8636 30.0123 18.9964C30.0111 19.1292 29.9835 19.2604 29.9311 19.3824C29.8787 19.5044 29.8025 19.6148 29.707 19.707L25.414 24L29.707 28.293C29.8892 28.4816 29.99 28.7342 29.9877 28.9964C29.9854 29.2586 29.8803 29.5094 29.6948 29.6948C29.5094 29.8802 29.2586 29.9854 28.9964 29.9877C28.7342 29.99 28.4816 29.8892 28.293 29.707L24 25.414L19.707 29.707C19.5184 29.8892 19.2658 29.99 19.0036 29.9877C18.7414 29.9854 18.4906 29.8802 18.3052 29.6948C18.1198 29.5094 18.0146 29.2586 18.0124 28.9964C18.0101 28.7342 18.1109 28.4816 18.293 28.293L22.586 24L18.293 19.707C18.1056 19.5195 18.0002 19.2652 18.0002 19C18.0002 18.7349 18.1056 18.4805 18.293 18.293Z"
                                fill="#21242C"
                            />
                        </svg>
                    </button>
                    <div
                        class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full tw-font-semibold tw-text-2xl"
                    >
                        <div>
                            <SentSuccess />
                        </div>
                        <div
                            class="tw-text-center tw-max-w-sm tw-mt-10"
                        >Your form has been successfully send!</div>
                    </div>
                </div>
                <div class="tw-absolute tw-bottom-0">
                    <BgPatternContactSent />
                </div>
            </div>
        </VCustomModal>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref, } from 'vue';

export default defineComponent({
    name: "ContactFormCareer",
    components: {
        VCheckbox: defineAsyncComponent(() => import("@/components/ui/VCheckbox.vue")),
        VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
        VInput: defineAsyncComponent(() => import("@/components/ui/VInput.vue")),
        VTextarea: defineAsyncComponent(() => import("@/components/ui/VTextarea.vue")),
        VSelect: defineAsyncComponent(() => import("@/components/ui/VSelect.vue")),
        VCustomModal: defineAsyncComponent(() => import("@/components/ui/VCustomModal.vue")),
        BgPatternContactSent: defineAsyncComponent(() => import("@/components/patterns/BgPatternContactSent.vue")),
        SentSuccess: defineAsyncComponent(() => import("@/assets/icons/sent-success.svg")),
        VFilePicker: defineAsyncComponent(() => import("@/components/ui/VFilePicker.vue")),
    },
    setup() {

        const agreement1 = ref(false)
        const agreement2 = ref(false)
        const agreement3 = ref(false)

        const form = ref({
            office: undefined,
            name: undefined,
            surname: undefined,
            phone: undefined,
            email: undefined,
            companyName: undefined,
            message: undefined,
            file: undefined,
            link: undefined
        })
        const isSent = ref(false)

        const submitHandler = () => {
            isSent.value = true
        }

        return {
            form,
            agreement1,
            agreement2,
            agreement3,
            isSent,
            submitHandler
        }
    }

});
</script>



<style lang="scss" scoped>
.w-244px {
    width: 244px;
}
.alert-modal {
    width: 620px;
    height: 420px;
}
</style>