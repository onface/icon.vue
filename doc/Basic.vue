<template>
	<div>
		<face-icon type="up" />
		<face-icon type="up-o" />
		<face-icon type="up-of" />
		<face-icon type="up-s" />
		<face-icon type="up-sf" />
		<face-icon type="onface" />
		<face-icon type="info" />
		<face-icon type="info-o" />
		<face-icon type="info-of" />
		<face-icon type="loading" />
		<face-icon type="github" themes="demo" />
	</div>
</template>

<script>
import Icon from "icon.vue"
require('vue').use(Icon)
export default {

}
</script>
<style scoped >
.fi--themes-demo {
    color: purple;
    font-size: 2em;
}
</style>
