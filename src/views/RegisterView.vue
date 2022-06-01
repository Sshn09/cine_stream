<template> 
    <section class="form list_img"> 
        <article 
			v-for="(item, idx) in cmpFilmList" 
			:key="`item-film-${idx}`"
			@click="$emit('onDisplayFilm', item)"
		>
			<FilmItem 
				:item="item"
			/>
		</article>
        <form action="/formulaire" method="post">
                <!-- <label for="name">Nom :</label>
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
            </div> -->

            <div
				v-for="(item, idx) in cmpFormValue" 
				:key="`item-${idx}`"
			>
				<label :for="idx">
					{{item.label}}
				</label>
				<input 
				:type="idx"
				:name="idx"
				:required="item.required"
				v-model="item.value"
				>
			</div>
        </form>
    </section>
</template>

<script>
	/* 
		[IMPORT] Child
	*/
	//
    import FilmItem from '../components/item/FilmItem.vue'

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'RegisterView',

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
							{
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sqLowacltbZLoCa4KYye64RvvdQ.jpg",
								title: "Uncharted",
								description: "Nathan Drake, voleur astucieux et intrépide, est recruté par le chasseur de trésors chevronné Victor « Sully » Sullivan pour retrouver la fortune de Ferdinand Magellan, disparue il y a 500 ans.",
								date: "16/02/2022",
								type: "Action, Aventure",
								times: "1h56" ,
								link: "./page_film/Uncharted.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iKKlWGWwHZxbMaxm6QUL6QYaH5y.jpg",
								title: "Matrix Resurretcions" ,
								description: "Dix-huit ans après les événements de Matrix Revolutions, Thomas A. Anderson (alias Neo) ne se souvient plus de rien et mène une vie d'apparence normale à San Francisco. ",
								date: "22/12/2021",
								type: "Science-Fiction, Action, Aventure",
								times: "2h28",
								link: "./page_film/Matrix.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8ITQyhyoBcFvrSJWmz6OykMElfp.jpg",
								title: "Scream" ,
								description: "Vingt-cinq ans après que la paisible ville de Woodsboro a été frappée par une série de meurtres violents, un nouveau tueur revêt le masque de Ghostface et prend pour cible un groupe d’adolescents." ,
								date: "14/01/2022",
								type: "Horreur, Mystère, Thriller",
								times: "1h54",
								link: "./page_film/scream.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lnOs1M73TTEG82Y0EYP6YXBut3k.jpg",
								title: "The King's Man" ,
								description: "En 1902, l'aristocrate Orlando, duc d'Oxford, perd sa femme Emily lors d'une mission humanitaire en Afrique du Sud lors de la seconde guerre des Boers ; leur jeune fils Conrad assiste lui aussi à sa mort." ,
								date: "29/12/2021",
								type: "Action, Aventure, Thriller, Mystère",
								times: "1h54",
								link: "./page_film/Kingsman.html"
							},
						],
						cmpFormContent: {
                            nom: undefined,
                            prenom:undefined,
							email: undefined,
							password: undefined,
                            ville: undefined
						},
						cmpFormValue: {
                            nom:{
                                label:"Votre Nom",
                                placeholder:"Votre nom",
                                value:undefined,
                                required:true,
                            },
                            prenom:{
                                label:"Votre Prenom",
                                placeholder:"Votre prenom",
                                value:undefined,
                                required:true,
                            },
							email:{
								label:"Votre Email",
								placeholder: "Adresse email valide",
								value: undefined,
								required:true,
								min:5
							},
							password:{
								label:"Votre mot de passe",
								placeholder: "minimum 5 caractere",
								value: undefined,
								required: true,
								min: 8
							}
						}
					}
				},
			//
			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
				methods:{},
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
</style>
