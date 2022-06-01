<template>
	<div id="app">
      <HeaderMain
		:item="cmpHeaderContent"
		/>
		<transition>
			<ModalMain
				:item="modalContent"
				v-if="modalContent !== undefined"
				@onCloseModal="modalContent = undefined"
			/>
		</transition>
		<main>
			<router-view :key="$route.name" 
				@onDisplayFilm="openModal"
			/>
		</main>

		<FooterMain
			:item="cmpFooterContent"
			@onRegistrer="$router.push('/inscription')"
			@onLogin="$router.push('/connexion')"
		/>
		
	</div>
</template>

<script>
	import HeaderMain from './components/main/HeaderMain.vue';
	import FooterMain from './components/main/FooterMain.vue';
	import ModalMain from './components/main/ModalMain.vue';
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'app',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: { HeaderMain, FooterMain, ModalMain },
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data: function() {
					return {
						cmpMainTheme: 'large-theme',
						cmpHeaderContent: {
							title: 'Stream Cine',
							subtitle: 'Prêt à regarder? Remplissez le formulaire proposé dans cette page',
							para: 'Tous les mois profitez de toutes les nouveautés série et cinéma. A partir du mois prochain on vous propose tous les classiques du cinéma. Où que vous soyez. Tous les films en VO, VOST, VF et plus doptions',
							image: '@/assets/logo5.png',
						},
						modalIsActive: false,
						modalContent: undefined,
						
						cmpFooterContent: ' Stream Cine - All rights reserved for educational purposes only'
					}
				},
			//

			/*
				[VUE] Computed => https://bit.ly/3u92MZv
				Used to check 'data' sub-properties or 'props' before use it
			*/
				methods: {
					openModal: function(item) {
						console.log(item)
						this.modalContent = item
					}
				},
			//

			/*
				[VUE] Hooks => https://bit.ly/3s7AwEa
				Used for Vue.js component life cycle
			*/
				/* 
					[HOOK] Created
					Called synchronously after the instance is created
				*/
					created: async function(){},
				//


				/* 
					[HOOK] Mounted => https://bit.ly/3IHFa26
					Called after the instance has been mounted
				*/
					mounted: async function(){
						/* 
							[UI] initUserInterface()
							Used to define main HTML tags height
						*/
						//
					},
				//

				/* 
					// Called right before the mounting begins
					beforeMount: async function(){},

					// Called after the instance has been mounted
					mounted: async function(){},

					// Called when data changes
					beforeUpdate: async function(){},

					// Called after a data change
					updated: async function(){},

					// Called when a kept-alive component is activated
					activated: async function(){},

					// Called when a kept-alive component is deactivated
					deactivated: async function(){},

					// Called right before a component instance is unmounted
					beforeUnmount: async function(){},

					// Called after a component instance has been unmounted
					unmounted: async function(){},

					// Called when an error from any descendent component is captured
					errorCaptured: async function(){},

					// Called when virtual DOM re-render is tracked
					renderTracked: async function(){},

					// Called when virtual DOM re-render is triggered
					renderTriggered: async function(){},
				*/
			//
		}
	//
</script>
<style src="@/assets/css/style.css"></style>
<style scoped></style>
<style>

</style>