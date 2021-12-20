<template>
  <div>
    <div
      class="tw-modal-container tw-bg-blue-1 tw-text-gray-1 tw-fixed tw-right-0 tw-left-0 tw-top-22 tw-bottom-0 tw-z-50 tw-overflow-y-auto tw-flex tw-items-center"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal -->
      <!-- <Contacts class="tw-modal-content tw-py-4 tw-text-left tw-px-6" /> -->
      <div class="tw-flex tw-flex-col tw-justify-between tw-h-full tw-w-full tw-z-10 tw-mt-5">
        <div>
          <slot class="tw-modal-content" />
        </div>
        <div class="tw-mb-9">
          <button @click="$emit('close')">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.4" cx="28" cy="28" r="27.25" stroke="#FDFDFD" stroke-width="1.5" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.293 22.2926C22.4805 22.1051 22.7348 21.9998 23 21.9998C23.2652 21.9998 23.5195 22.1051 23.707 22.2926L28 26.5856L32.293 22.2926C32.3852 22.1971 32.4956 22.1209 32.6176 22.0685C32.7396 22.0161 32.8708 21.9885 33.0036 21.9873C33.1364 21.9862 33.2681 22.0115 33.391 22.0618C33.5139 22.1121 33.6255 22.1863 33.7194 22.2802C33.8133 22.3741 33.8875 22.4857 33.9378 22.6086C33.9881 22.7315 34.0134 22.8632 34.0123 22.996C34.0111 23.1288 33.9835 23.26 33.9311 23.382C33.8787 23.504 33.8025 23.6143 33.707 23.7066L29.414 27.9996L33.707 32.2926C33.8892 32.4812 33.99 32.7338 33.9877 32.996C33.9854 33.2582 33.8802 33.509 33.6948 33.6944C33.5094 33.8798 33.2586 33.985 32.9964 33.9873C32.7342 33.9895 32.4816 33.8888 32.293 33.7066L28 29.4136L23.707 33.7066C23.5184 33.8888 23.2658 33.9895 23.0036 33.9873C22.7414 33.985 22.4906 33.8798 22.3052 33.6944C22.1198 33.509 22.0146 33.2582 22.0123 32.996C22.01 32.7338 22.1108 32.4812 22.293 32.2926L26.586 27.9996L22.293 23.7066C22.1055 23.5191 22.0002 23.2648 22.0002 22.9996C22.0002 22.7344 22.1055 22.4801 22.293 22.2926Z"
                fill="#FDFDFD"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="tw-absolute tw-bottom-0 tw-left-0">
        <BgPatternMobileMenu />
      </div>
    </div>

    <!-- Modal -->
    <div
      class="the-modal tw-fixed tw-w-full tw-h-full tw-top-22 tw-left-0 tw-flex tw-items-center tw-justify-center"
    >
      <div
        class="tw-absolute tw-w-full tw-h-full tw-bg-gray-900 tw-opacity-50 tw-z-40"
        @click="close"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineAsyncComponent,
  defineComponent,
  onMounted,
  onUnmounted,
  SetupContext,
  // ComponentPropsOptions,
} from 'vue'

interface IKeyboardEvent {
  keyCode: number
}

export default defineComponent({
  name: 'HeaderModal',
  components: {
    BgPatternMobileMenu: defineAsyncComponent(() => import('@/components/patterns/BgPatternMobileMenu.vue'))
  },
  emits: ['close'],
  setup(_, { emit }: SetupContext) {
    const close = () => {
      emit('close')
    }

    const keydownHandler = ({ keyCode }: IKeyboardEvent): void => {
      if ([27, 13].includes(keyCode)) close()
    }

    onMounted(() => {
      // document.body.classList.add('tw-overflow-hidden')
      document.addEventListener('keydown', keydownHandler)
    })

    onUnmounted(() => {
      // document.body.classList.remove('tw-overflow-hidden')
      document.removeEventListener('keydown', keydownHandler)
    })
    return {
      close,
    }
  },
})
</script>

<style lang="scss">
.the-modal {
  transition: opacity 0.25s ease;
}
</style>
