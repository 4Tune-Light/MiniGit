<template>
  <div>
    <h1 style="text-decoration: underline">{{name}} Readme</h1>
    <div v-html="readme">{{readme}}</div>
  </div>
</template>

<script>
	import axios from 'axios'
	import marked from 'marked'

	export default {
		name: 'Readme',
		data() {
			return {
				readme: '',
				name: this.$route.params.repo
			}
		},
		created() {
			axios.get(`https://api.github.com/repos/${this.$route.params.username}/${this.$route.params.repo}/readme`)
				.then(res => this.readme = marked(atob(res.data.content)))
				.catch(err => this.console.log(err))
		}
	}
</script>