<template>
	<form action="/formulaire" method="post">
		<label for="name">Nom :</label>
		<input type="text" id="name" placeholder="Nom" name="user_name" required>
		<label for="prenom">Prénom :</label>
		<input type="text" id="prenom" placeholder="Prénom" name="user_prenom" required>
		<label for="mail">E-mail :</label>
		<input type="email" id="mail" placeholder="E-mail" name="user_mail" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$">
		<label for="pass">Password (8 characters minimum):</label>
		<input type="password" id="pass" placeholder="Mot de passe" name="password" minlength="8" required>
		<label for="ville">Ville :</label>
		<select id="ville" name="user_ville">
			<option>Paris</option>
			<option>Marseille</option>
			<option>Lille</option>
			<option>Lyon</option>
		</select>

		<input type="submit" value="Valider">

		<div id="connexion">
			<a class="bouton" href="page_connexion.html">Connexion</a>
		</div>

	</form>
</template>

<script>
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'RegisterForm',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {},
			//

            /*
                [VUE] Props => https://bit.ly/3KSrvau
                Used to inject values from parent componet
            */
				props: {
					item: {
						type: Object,
						required: true,
						default: () => undefined
					}
				},
			//

			/*
                [VUE] computed => https://bit.ly/3KSrvau
                Used to use objet preperties from parent child
            */
				computed: {
					cmpFormContent: function(){
						if( this.item ){
							return this.item;
						}
						else { 
							return undefined 
						}
					}
					
				},
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return { }
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
<style scoped></style>
