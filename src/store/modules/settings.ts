export const settings: object = {
  state: () => ({
    IS_NAV_SLIM: false,
    LOCALE: 'en',
    SCREEN_WIDTH: 111,
  }),
  getters: {
    IS_SM: (stateLocal: any) => stateLocal.SCREEN_WIDTH < 768,
  },
  mutations: {
    SET_IS_NAV_SLIM: (state: any, value: boolean) =>
      (state.IS_NAV_SLIM = value),
    SET_LOCALE: (state: any, locale: string) => (state.LOCALE = locale),
    SET_SCREEN_WIDTH: (state: any, value: number) =>
      (state.SCREEN_WIDTH = value),
    SET_IS_DARK: (state: any, value: boolean) => (state.IS_DARK = value),
  },
  namespaced: true,
};
