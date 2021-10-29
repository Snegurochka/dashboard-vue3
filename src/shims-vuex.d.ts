import { Store } from 'vuex'
import { RootState } from './interfaces/interfaces'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<RootState>
	}
}

// Vuex@4.0.0-beta.1 is missing the typing for `useStore`. See https://github.com/vuejs/vuex/issues/1736
declare module 'vuex' {
	export function useStore(key?: string): Store<RootState>
}