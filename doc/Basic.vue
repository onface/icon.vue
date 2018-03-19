<template>
	<div>
		<Icon type="up" />
		<Icon type="up-o" />
		<Icon type="up-of" />
		<Icon type="up-s" />
		<Icon type="up-sf" />
		<Icon type="onface" />
		<Icon type="info" />
		<Icon type="info-o" />
		<Icon type="info-of" />
		<Icon type="loading" />
		<Icon type="github" themes="demo" />
	</div>
</template>

<script>
import Icon from "icon.vue"
export default {
	components: { Icon }
}
</script>
<style scoped >
.fi--themes-demo {
    color: purple;
    font-size: 2em;
}
</style>
