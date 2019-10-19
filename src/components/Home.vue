<template>
	<div>
		<form v-on:submit="submitUsername">
			<label for="username" >GitHub Username</label>
			<input v-model="username" type="text" name="username" required />
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				username: ''
			}
		},
		methods: {
			submitUsername(e) {
				e.preventDefault()
				this.$router.push('/repositories/'+ this.username)
			}
		}
	}
</script>

<style scoped>
	div {
		display: flex; 
		justify-content: center; 
		margin-top: 100px
	}

	form {
		flex-direction: column;
		display: flex; 
		width: 400px;
		padding: 30px 50px;
	}

	label {
		font-weight: bold; 
		margin-bottom: 10px
	}
</style>