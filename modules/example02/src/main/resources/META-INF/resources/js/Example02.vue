<template>
	<div>
		<div class="form-group">
			<label>Please enter your name:</label>
			<input class="form-control" type="text" v-model="name">
		</div>
		<p>
			<b>Hello, {{ name }}</b>
		</p>
	</div>
</template>

<script>
export default {
    data() {
		return {
			name: 'User'
		}
	}
}
</script>
