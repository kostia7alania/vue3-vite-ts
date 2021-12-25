<template>
    <transition name="modal">
        <div class="modal-mask" @close="$emit('close')">
            <div class="modal-wrapper">
                <!-- default slot -->
                <slot v-if="$slots.default" />
                <!-- or named slot -->
                <div v-else class="modal-container">
                    <div class="modal-header">
                        <slot name="header"></slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, } from 'vue'

export default defineComponent({
    name: 'VCustomModal',
    emits: ['close']
})
</script>

<style scoped lang="scss">
.modal-mask {
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    @apply tw-fixed tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full tw-top-0 tw-left-0;
}

// .modal-wrapper {
// //
// }

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-body {
    @apply tw-mx-7;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from,
.modal-leave-to {
    @apply tw-opacity-0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>