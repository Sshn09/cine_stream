<template>
	<div id="app" :class="cmpMainTheme">
      <HeaderMain
		:item="cmpHeaderContent"
		/>
		<transition>
			<section
				class="modal-window"
				v-if="modalContent !== undefined"
			>
				<article>
					<h1>I'm a Modal</h1>
					{{modalContent}}

					<button
						@click="modalContent = undefined"
					>
						close
					</button>
				</article>
			</section>
		</transition>

		<ul class="list-container">
			<li
				v-for="(item,idx) of cmpFilmList"
				:key="idx"
			>
				<button
					@click="modalContent = item"
				>
					{{item.title}}
				</button>
			</li>
		</ul>

		<main>
			<router-view :key="$route.name" />
		</main>

      <FooterMain
		:item="cmpFooterContent"
		/>
	</div>
</template>

<script>

      import HeaderMain from './components/main/HeaderMain.vue';
      import FooterMain from './components/main/FooterMain.vue';
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
				components: { HeaderMain, FooterMain },
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data: function() {
					return {
						cmpMainTheme: 'medium-theme',
						cmpHeaderContent: {
							title: 'Stream Cine',
							subtitle: 'Prêt à regarder? Remplissez le formulaire proposé dans cette page',
							para: 'Tous les mois profitez de toutes les nouveautés série et cinéma. A partir du mois prochain on vous propose tous les classiques du cinéma. Où que vous soyez. Tous les films en VO, VOST, VF et plus doptions',
							image: '@/assets/logo5.png',
						},
						modalIsActive: false,
						modalContent: undefined,
						cmpFilmList: [
							{ 
							title: `Uncharted`,
							icon: require('@/assets/image/uncharted.png'),
							content:'dsdscd',
							id:0
							},							
							{
							title: `Matrix Ressurections`,
							icon: require('@/assets/image/matrix.png'),
							content:'sdcsd',
							id:1
							},
							{
							title: `Scream`,
							icon: require('@/assets/image/scream.png'),
							content: 'sjsjs',
							id:2
							},
							{
							title: `The King's Man`,
							icon: require('@/assets/image/kingsman.png'),
							content: 'sksk',
							id:3
							},
						],
						cmpFooterContent: ' Stream Cine - All rights reserved for educational purposes only'
					}
				},
			//

			/*
				[VUE] Computed => https://bit.ly/3u92MZv
				Used to check 'data' sub-properties or 'props' before use it
			*/
				methods: {
					/* 
						[UI] initUserInterface()
						Used to define main HTML tags height
					*/
						initUserInterface: async function() {
							window.addEventListener('resize', () => {
								if (window.innerWidth <= 600) { this.cmpMainTheme = "small-theme" }
								else if (window.innerWidth > 600 && window.innerWidth < 1200) { this.cmpMainTheme = "medium-theme" }
								else if (window.innerWidth >= 1200) { this.cmpMainTheme = "large-theme" }
							})
						},
					//
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
							this.initUserInterface();
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
<style src="@/assets/css/main.css"></style>
<style scoped></style>
<style>
/*.list-container{
	position: relative;
	z-index: 1;
}*/
.modal-window{
	background: #00000096;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	transition: opacity .3s;
	display: flex;
	flex-direction: column;
}
.modal-window article{
	position: relative;
	background: white;
	width: 50%;
	height: 50%;
	margin: auto;
	border-radius: 10px;
	padding: 20px;
}
.modal-window article button{
	position: absolute;
	bottom: 100%;
	right: 0;
}
/*.is-active{
	z-index: 2;
	opacity: 1;
}*/
.v-enter-active,
.v-leave-active{
	transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to{
	opacity: 0;
}
</style>