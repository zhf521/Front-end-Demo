<template>
	<view class="out">
		<view class="row" v-for="item in listArr" :key="item.id" @click="clickItem(item.id)">
			<view class="title">
				{{item.title}}
			</view>
			<view class="content">
				{{item.body}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr:[]
			}
		},
		methods:{
			getData(){
				uni.request({
					url:"http://jsonplaceholder.typicode.com/posts",
					success:res=>{
						console.log(res)
						this.listArr=res.data
					}
				})
			},
			clickItem(e){
				console.log(e)
				uni.navigateTo({
					url:"/pages/detail/detail?id="+e
				})
			}
		},
		onLoad() {
			this.getData()
		}
	}
</script>

<style lang="scss">
.out{
	padding: 50rpx 30rpx;
	.row{
		padding:20rpx 0;
		border-bottom: 1px dotted lightseagreen;
		.title{
			font-size: 36rpx;
			padding-bottom: 15rpx;
			color:#333;
		}
		.content{
			font-size: 28rpx;
		}
	}
}
</style>
