<template>
    <div class="tw-px-4 tw-pt-15 tw-pb-10 md:tw-p-15 xl:tw-p-17.5 gray-shadow-1">
        <div
            class="tw-flex tw-justify-between tw-items-center md:tw-items-start xl:tw-items-center tw-flex-col xl:tw-flex-row tw-gap-4"
        >
            <div class="topic-title tw-text-center">{{ $t('Fill the contact form') }}</div>
            <div class="topic-description tw-hidden md:tw-block">*{{ $t('Required fields') }}</div>
        </div>
        <!-- form inputs -->
        <div class="tw-mt-8 md:tw-mt-15 xl:tw-mt-17">
            <div class="tw-flex tw-items-center tw-gap-x-10 tw-flex-col xl:tw-flex-row tw-gap-y-4">
                <VInput v-model.trim="form.name" :placeholder="$t('Name')" required />
                <VInput v-model.trim="form.surname" :placeholder="$t('Surname')" required />
            </div>

            <div
                class="tw-flex tw-items-center tw-gap-x-10 tw-mt-4 xl:tw-mt-6 tw-flex-col xl:tw-flex-row tw-gap-y-4"
            >
                <VInput v-model.trim="form.phone" :placeholder="$t('Phone')" />
                <VInput v-model.trim="form.email" :placeholder="$t('Email')" required />
            </div>
            <div
                class="tw-flex tw-items-center tw-gap-x-10 tw-mt-4 xl:tw-mt-6 tw-flex-col xl:tw-flex-row tw-gap-y-4"
            >
                <VInput
                    v-model.trim="form.company"
                    class="tw-basis-1/2"
                    :placeholder="$t('Company name')"
                />
                <!--
                  <VSelect
                  v-model="form.office"
                  class="tw-basis-1/2"
                  :placeholder="$t('Offices you want to contact') + '*'"
                  :items="['Office 1', 'Office 2', 'Office 3']"
                  />
                -->
                <VCountries
                    v-model:country="form.country_id"
                    class="tw-basis-1/2 tw-w-full"
                    key-label="title"
                    key-value="id"
                    :placeholder="$t('Offices you want to contact') + '*'"
                    is-select
                />
            </div>
            <div class="tw-mt-4 xl:tw-mt-6">
                <VTextarea v-model="form.message" :placeholder="$t('Your message') + '*'" />
            </div>
        </div>
        <!-- upload doc -->
        <div class="tw-my-6">
            <div class="tw-my-6">
                <VFilePicker v-model="form.cv_document">
                    {{ $t('Upload other documents') }}
                    <br class="lg:tw-hidden" />
                    ({{ $t('eg portfolio references') }})
                </VFilePicker>
            </div>
        </div>
        <!-- checks -->
        <div
            class="tw-flex tw-justify-between tw-flex-col lg:tw-flex-row tw-items-center tw-gap-15 tw-mt-4 md:tw-mt-12 lg:tw-mt-12"
        >
            <div class="tw-text-sm tw-max-w-2xl">
                <VCheckbox v-model="agreement1">
                    <span>
                        *{{ $t('I have read and understood that my personal data will be processed for contact purposes as described in the') }}
                        <span
                            class="tw-text-orange-1"
                        >{{ $t('Privacy notice for clients and external experts') }}.</span>
                    </span>
                </VCheckbox>
                <VCheckbox
                    v-model="agreement2"
                    class="tw-mt-6"
                    :label="$t('I agree to receive from CIVITTA information related to the services it offers')"
                />
            </div>
            <div>
                <VButton
                    text="Send"
                    variant="blue"
                    class="tw-w-[311px] lg:tw-w-[244px]"
                    @click="postContactForm"
                />
                <div
                    class="topic-description tw-text-center tw-mt-4 tw-block md:tw-hidden"
                >*{{ $t('Required fields') }}</div>
            </div>
        </div>

        <VCustomModal v-if="isSent" @close="isSent = false">
            <div
                class="alert-modal bg-contact-alert tw-relative tw-bg-white tw-m-auto tw-rounded-3xl"
            >
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
                            <img src="@/assets/images/team/bg-contact-alert-cartoon.png" />
                        </div>
                        <div
                            class="tw-text-center tw-max-w-sm tw-mt-10"
                        >{{ $t('Your form has been successfully send') }}!</div>
                    </div>
                </div>
            </div>
        </VCustomModal>
    </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref, } from 'vue';
import { useI18n } from 'vue-i18n'
import { useToast } from "vue-toastification";

import { useVuex } from '@/store/store'


export default defineComponent({
    name: "ContactForm",
    components: {
        VCheckbox: defineAsyncComponent(() => import("@/components/ui/VCheckbox.vue")),
        VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
        VInput: defineAsyncComponent(() => import("@/components/ui/VInput.vue")),
        VTextarea: defineAsyncComponent(() => import("@/components/ui/VTextarea.vue")),
        // VSelect: defineAsyncComponent(() => import("@/components/ui/VSelect.vue")),
        VCustomModal: defineAsyncComponent(() => import("@/components/ui/VCustomModal.vue")),
        VCountries: defineAsyncComponent(() => import("@/components/ui/VCountries.vue")),
        VFilePicker: defineAsyncComponent(() => import("@/components/ui/VFilePicker.vue")),
    },
    setup() {
        const store = useVuex()
        const toast = useToast();
        const { t } = useI18n({ useScope: 'global' });

        const agreement1 = ref(false)
        const agreement2 = ref(false)

        const getNewForm = () => ({
            name: '',
            surname: '',
            email: '',
            phone: '',
            company: '',
            country_id: '',
            message: '',
            cv_document: '',
        })

        const form = ref(getNewForm())
        const isSent = ref(false)

        const getFormToSubmit = () => {
            const data = new FormData();
            Object.entries(form.value).forEach(([key, value]) => {
                data.append(key, value);
            })
            return data
        }

        const postContactForm = async () => {
            if (!isValid.value) return toast.info(t('Please fill required fields'), { timeout: 2000 });
            try {
                (await store.dispatch('contacts/POST_CONTACTS', getFormToSubmit()))
                isSent.value = true
                form.value = getNewForm()
            } catch (err) {
                // @ts-ignore
                toast.error(Object.values(err?.response?.data?.errors)?.[0]?.[0] || "Something went wrong...", { timeout: 2000 });
                console.error({ err })
            }
        }

        const isValid = computed(() => {
            const propsExept = ['phone', 'company']
            return Object.values(form.value).filter(e => !propsExept.includes(e)).every(e => e) && agreement1.value
        })



        return {
            form,
            agreement1,
            agreement2,
            isSent,
            isValid,
            postContactForm
        }
    }

});
</script>



<style lang="scss" scoped>
.alert-modal {
    // width: 620px;
    // height: 420px;
    @apply tw-w-3/4 md:tw-w-[620px] md:tw-h-[420px];
}

.bg-contact-alert {
    background-image: url("@/assets/images/team/bg-contact-alert.png");
    background-repeat: no-repeat;
    background-position: center right;
    background-size: cover;
}
</style>