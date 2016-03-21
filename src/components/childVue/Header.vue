<template>
	<div id="header">
		这里是header！----{{nowRoute}}
	</div>
</template>

<style>
	#header{
		border: solid 1px #000000;
	}
</style>

<script>
    export default {
      props: ['nowRoute']
    }
</script>