<template>
	<view>
		<view class="detail">
			<view class="title">
				{{objData.title}}
			</view>
			<view class="content">
				{{objData.body}}
			</view>
		</view>
		<view class="comments">
			<view class="text">
				评论
			</view>
			<view class="row" v-for="item in comments" :key="item.id">
				<view class="top">
					<view class="name">
						{{item.name}}
					</view>
					<view class="email">
						{{item.email}}
					</view>
				</view>
				<view class="body">
					{{item.body}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objData:{},
				id:1,
				comments:[]
			}
		},
		onLoad(e) {
			this.id=e.id
			this.getDetail()
			this.getComments()
		},
		methods:{
			getDetail(){
				uni.showLoading({
					title:"数据加载中...",
					mask:true
				})
				uni.request({
					url:"http://jsonplaceholder.typicode.com/posts/"+this.id,
					success:res=>{
						console.log(res)
						this.objData=res.data
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			getComments(){
				uni.request({
					url:`http://jsonplaceholder.typicode.com/posts/${this.id}/comments`,
					success:res=>{
						this.comments=res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.detail{
	padding:40rpx;
	.title{
		font-size: 48rpx;
		color:#000;
		padding-bottom: 20rpx;
	}
	.content{
		font-size: 30rpx;
		color:#666;
		padding-bottom:60rpx;
	}
}
.comments{
	padding: 30rpx;
	background-color: #f4f4f4;
	.text{
		font-size: 46rpx;
		margin-bottom: 30rpx;
	}
	.row{
		border-bottom: 1rpx solid #e8e8e8;
		.top{
			display: flex;
			justify-content: space-between;
			font-size: 22rpx;
			color:#999;
			padding-bottom: 15rpx;
		}
		.body{
			font-size: 28rpx;
			color:#555;
		}
	}
}
</style>
