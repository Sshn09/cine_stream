<template>
	<header 
		class="header-main-component"
	>
		<h1>{{ cmpTitle }}</h1>
		<h2>{{cmpSubTitle}}</h2>
		<div id=rep>
		<p>{{cmpPara}}</p>
		</div>

		<img :src="require('@/assets/logo5.png')" :alt="cmpTitle">
	</header>
</template>

<script>
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'HeaderMain',

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
						dafault: () => {},
					}
				},
			//

			/*
                [VUE] computed => https://bit.ly/3KSrvau
                Used to use objet preperties from parent child
            */
				computed: {
					cmpTitle: function(){
						if( this.item && this.item.title){
							return this.item.title;
						}
						else { 
							return undefined 
						}
					},
						cmpSubTitle: function(){
						if( this.item && this.item.subtitle){
							return this.item.subtitle;
						}
						else { 
							return undefined 
						}
					},
						cmpPara: function(){
						if( this.item && this.item.para){
							return this.item.para;
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
