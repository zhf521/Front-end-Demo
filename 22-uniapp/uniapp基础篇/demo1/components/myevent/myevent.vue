<template>
	<view>
		{{title}}
		<view>
			<input type="text" placeholder="请输入..." @input="oninput">
		</view>
	</view>
</template>

<script>
	export default {
		name:"myevent",
		props:{
			title:{
				type:String,
				default:'默认标题'
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			oninput(e){
				// console.log(e.detail.value)
				this.$emit("myenv",e.detail.value)
			}
		}
	}
</script>

<style lang="scss">

</style>