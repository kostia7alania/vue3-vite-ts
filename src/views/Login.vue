<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-h-96">
    <div class="sm:tw-w-60">
      <img
        class="tw-w-full"
        src="@/assets/img/logo-alertix.png"
        alt="Alertix Logo"
      />
      <div class="tw-mt-10">
        <div>Username or email</div>
        <input
          v-model="form.username"
          class="tw-w-full tw-border-2 tw-border-indigo-100"
        />
      </div>
      <div>
        <div>Password</div>
        <input
          v-model="form.password"
          class="tw-w-full tw-border-2 tw-border-indigo-100"
        />
      </div>
      <div class="tw-mt-4">
        <button
          :disabled="isLoading"
          class="
            tw-py-3 tw-w-full tw-rounded-md tw-bg-green-500
            hover:tw-bg-red-100
            tw-text-white
            hover:tw-text-black
          "
          @click="submit"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref, Ref } from 'vue';

import { store } from '@/store/store';

interface ILogin {
  username?: string;
  password?: string;
}
interface ISetup {
  form: Ref<ILogin>;
  isLoading: Ref<boolean>;
  submit: () => void;
}

export default defineComponent({
  name: 'Login',
  setup(): ISetup {
    const form: Ref<ILogin> = ref({});
    const isLoading: Ref<boolean> = ref(false);

    const submit = async () => {
      isLoading.value = true;
      try {
        await store.dispatch('auth/LOGIN', form.value);
      } catch (e) {
        console.log({ e }); // <-- call here errorHandler
      } finally {
        isLoading.value = false;
      }
    };
    return { form, submit, isLoading };
  },
});
</script>
