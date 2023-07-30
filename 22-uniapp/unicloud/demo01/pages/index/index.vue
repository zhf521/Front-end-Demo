<template>
	<view class="home">
		<view class="row" v-for="(item,index) in userArr" :key="item._id">
			姓名：{{item.name}}
			性别：{{item.gender}}
		</view>
		<button @click="onUpdate">修改</button>
		<button type="warn" @click="onRemove">删除</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userArr:[]
			}
		},
		onLoad() {
		this.getData()
		},
		methods: {
			getData(){
				uniCloud.callFunction({
					name:'cloudDemoGet'
				}).then(res=>{
					console.log(res)
					this.userArr=res.result.data
				})
			},
			onUpdate(){
				uniCloud.callFunction({
					name:'CloudDemoUpdate'
				}).then(res=>{
					console.log(res)
				})
			},
			onRemove(){
				uniCloud.callFunction({
					name:"cloudDemoRemove"
				}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.row {
		border-bottom: 1px solid #ccc;
	}
</style>