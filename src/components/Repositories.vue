<template>
	<div>
		<h1>{{username}} Repositories</h1>
		<div v-bind:key="repo.id" v-for="repo in repos">
			<router-link :to="`/repositories/${username}/${repo.name}`">
				<h3>{{repo.name}}</h3>
			</router-link>
		</div> 
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Repositories',
		data() {
			return {
				repos: [],
				username: this.$route.params.username
			}
		},
		created() {
			axios.get(`https://api.github.com/users/${this.username}/repos`)
				.then(res => this.repos = res.data)
				.catch(err => this.console.log(err))
		}
	}
</script>

<style scoped>
	h1 {
		text-decoration: underline
	}

	a {
		text-decoration: none; color: black
	}
</style>