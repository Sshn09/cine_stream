<template>
	<div 
		class="form-view-component"
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
        <section class="form">
        <form 
            action="#"
            @submit="onSubmit"
        >
            <!-- Directive v-model => input.value -->
            <div>
                <label for="name">Nom :</label>
                <input 
                    type="text" name="user_name" id="name" 
                    required minlength="5" placeholder="Nom"
                >
            </div>
            <div>
                <label for="prenom">Prénom :</label>
                <input 
                    type="text" name="user_prenom" id="prenom" 
                    required minlength="5" placeholder="Prénom"
                >
            </div>
            <div>
                <label for="mail">E-mail :</label>
                <input 
                    type="email" name="user_mail" id="mail" 
                    placeholder="E-mail" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$"
                >
            </div>
            <div>
                <label for="pass">Password (8 characters minimum) :</label>
                <input 
                    type="password" name="password" id="pass" 
                    required minlength="8" placeholder="Mot de passe"
                >
            </div>
            <label for="ville">Ville :</label>
            <select id="ville" name="user_ville">
                <option>Paris</option>
                <option>Marseille</option>
                <option>Lille</option>
                <option>Lyon</option>
            </select>

            <!-- Use cmpFormData for validation -->
            <button 
                type="submit"
            >
				Valider
            </button>
        </form>
        </section>
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
			name: 'FormView',

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
				methods:{ },
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
