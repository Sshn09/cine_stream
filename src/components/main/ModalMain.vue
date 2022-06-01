<template>
        <figure class="modale" role="groupe">
        <button aria-label="closed">
            <span class="material-icons"></span>
        </button>
        <img 
            :src="cmpContent.icon" :alt="cmpContent.title"
            @click="$emit('onCloseModal')"
        >
        <figcaption class="desc">
            <h3> {{cmpContent.title}} </h3>
            <p>
                <b>Description : </b>{{cmpContent.description}}
            </p>
            <time itemprop="datePublished" class="date"><b>Sortie : </b>{{cmpContent.date}}</time>
            <p itemprop="keywords" class="genre"><b>Genre : </b>{{cmpContent.type}}</p>
            <time itemprop="duration" class="duree"><b>Durée : </b>{{cmpContent.times}}</time>
            
        </figcaption>
        <a href="./liste_film.html" type="button" class="vplus">Aller au synopsis</a>
    </figure>
</template>

<script>
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'ModalMain',

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
					cmpContent: function(){
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
