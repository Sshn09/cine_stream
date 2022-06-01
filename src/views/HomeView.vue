<template>
	<section 
		class="home-view-component flex-container list_img"
	>
		
		<!-- liste des films -->
		<article 
			v-for="(item, idx) in cmpFilmList" 
			:key="`item-film-${idx}`"
			@click="$emit('onDisplayFilm', item)"
		>
			<FilmItem 
				:item="item"
			/>
		</article>
	</section>
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

					props: {

				},
			//

				computed :{

				},
			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return {
						/* cmpFilmList: [
							{ title: `Uncharted`, icon: require('@/assets/image/uncharted.png') },
							{ title: `Matrix Ressurections`, icon: require('@/assets/image/matrix.png') },
							{ title: `Scream`, icon: require('@/assets/image/scream.png') },
							{ title: `The King's Man`, icon: require('@/assets/image/kingsman.png') },
						] */
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
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/SPjRgbWp9UekHL1mi1QzOkk3RL.jpg",
								title: "Adieu Monsieur Haffmann" ,
								description: "Paris 1941. François Mercier est un homme ordinaire qui n’aspire qu’à fonder une famille avec la femme qu’il aime, Blanche. Il est aussi l’employé d’un joaillier talentueux, M. Haffmann." ,
								date: "12/01/2022",
								type: "Drame, Histoire",
								times: "1h55",
								link: "./page_film/adieumonsieurhaffman.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fTQF4IZnY3bd8RM0dMzywJW3ot7.jpg",
								title: "Clifford" ,
								description: "Emily a du mal à s'intégrer au sein de son école. Par hasard, elle découvre un petit chiot rouge qu'elle nomme Clifford. Par magie, ce dernier subit une poussée de croissance et devient un chien gigantesque qui va attirer l’attention de généticiens cupides..." ,
								date: "01/12/2021",
								type: "Familial, Aventure, Fantastique",
								times: "1h36",
								link: "./page_film/Clifford.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kaqCExbRELkJ7qJhFrvCHX5q9aD.jpg",
								title: "Mystère" ,
								description: "Stéphane décide d'emménager dans les belles montagnes du Cantal afin de renouer avec sa fille de 8 ans, Victoria, mutique depuis la disparition de sa maman." ,
								date: "03/02/2021",
								type: "Aventure, Familial, Drame",
								times: "1h24",
								link: "./page_film/mystere.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3BHdG1DuDubI0en18EFWd3Rvqjl.jpg",
								title: "Harry Potter et le Prince de sang-mêlé" ,
								description: "Voldemort a renforcé son emprise sur le monde des sorciers aussi bien que sur celui des Moldus, et Poudlard n’est plus un endroit sûr. Harry est d’ailleurs persuadé que le danger rôde à l’intérieur ..." ,
								date: "15/07/2009",
								type: "Aventure, Fantastique",
								times: "2h33",
								link: "./page_film/harrypotterVI.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gdUJ6ECIHNE5M2HImGaBOfb8jR2.jpg",
								title: "Intouchables" ,
								description: "À la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison … Bref la personne la moins adaptée pour le job." ,
								date: "02/11/2011",
								type: "Drame, Comédie",
								times: "1h52",
								link: "./page_film/intouchables.html"
							},
							{
							
							
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qseURFLjRBCqFCNCKmS2uwM9IOj.jpg",
								title: "Mourir peut attendre" ,
								description: "James Bond a quitté les services secrets et coule des jours heureux en Jamaïque. Mais sa tranquillité est de courte durée car son vieil ami Felix Leiter de la CIA débarque pour solliciter son aide " ,
								date: "06/10/2021",
								type: "Aventure, Action, Thriller",
								times: "2h43",
								link: "./page_film/mourir_peut_attendre.html"
							},
							{
							
								
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vOvB1JL9ecUYuAKyivP5zenYxa9.jpg",
								title: "Hop" ,
								description: "Robbie est un lapin adolescent dont le père dirige une chocolaterie secrète qui produit chaque année les délicieuses confiseries pour les fêtes de Pâques." ,
								date: "06/07/2011",
								type: "Animation, Comédie, Familial",
								times: "1h35",
								link: "./page_film/hop.html"
							},
							{
							
								
								icon: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ch3rHjFc61tLpbgsXbhKFz9kEFN.jpg",
								title: "La panthère des neiges" ,
								description: "Au coeur des hauts plateaux tibétains, le photographe Vincent Munier entraîne l’écrivain Sylvain Tesson dans sa quête de la panthère des neiges." ,
								date: "15/01/2021",
								type: "Documentaire",
								times: "1h32",
								link: "./page_film/la_panthere_des_neiges.html"
							}
						],
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
/* .flex-container{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
} */
/* .flex-item{
	width: var(--flex-item-width);
	border: 0.1rem solid red;
	text-align: center;
    margin: 2rem auto;
} */
</style>
