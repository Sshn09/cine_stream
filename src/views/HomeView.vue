<template>
	<div 
		class="home-view-component"
	>
		<section
			class="flex-container"
		>
			<article 
				v-for="(item, idx) in cmpFilmList" 
				:key="`item-film-${idx}`"
				class="flex-item"
			>
				<FilmItem 
					:item="item"
				/>
			</article>
			
		</section>
			<button 
                @click="formulaire()"
            >
                Cliquez ici pour commencer
            </button>
			<button id="connexion" 
                @click="connexion()"
            >
                Connexion
            </button>
	</div>
	

</template>


<script>
	/* 
		[IMPORT] Child
	*/
		import FilmItem from '../components/item/FilmItem.vue'
	//

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'HomeView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: { FilmItem },
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return {
						cmpFilmList: [
							{ title: `Akira` },
							{ title: `Wayne's World` },
							{ title: `Daryl` },
							{ title: `Qui veut la peau de Roger Rabbit` },
							{ title: `Le guide du voygeur Intercalactique` },
						]
					}
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
				methods:{ 
					formulaire(){
						this.$router.push('/Formulaire');
					},
					connexion(){
						this.$router.push('/Connexion');
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
					[HOOK] Mounted
					Called after the instance has been mounted
				*/
					mounted: async function(){},
				//

				/* 
					// Called synchronously after the instance has been initialized
					created: async function(){},

					// Called synchronously after the instance is created
					created: async function(){},

					// Called right before the mounting begins
					beforeMount: async function(){},

					// Called after the instance has been mounted
					mounted: async function(){},

					// Called when data changes
					beforeUpdate: async function(){},

					// Called after a data change
					updated: async function(){},

					// Called when a kept-alive component is activated
					

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
<style scoped>
.flex-container{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.flex-item{
	width: var(--flex-item-width);
	border: 0.1rem solid red;
	text-align: center;
    margin: 2rem auto;
}

</style>
