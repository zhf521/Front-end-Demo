<template>
	<view>
		<scroll-view class="navscroll" scroll-x>
			<view class="item" :class="index==navIndex ? 'active' : ''" @click="clickNav(index,item.id)"
				v-for="(item,index) in newsNav" :key="item.id">
				{{item.classname}}
			</view>
		</scroll-view>
		<view class="content">
			<view class="row" v-for="item in news" :key="item.id">
				<NewsBox :item="item" @click.native="goDetail(item)" ></NewsBox>
			</view>
		</view>
		<view class="nodata" v-if="!news.length">
			<image src="../../static/images/nodata.png" mode="widthFix"></image>
		</view>
		<view class="loading" v-if="news.length">
			<view v-if="loading==1">
				数据加载中...
			</view>
			<view v-if="loading==2">
				没有更多了~~~
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsNav: [],
				navIndex: 0,
				currentPage: 1,
				news: [],
				currentId: 50,
				loading: 0, //0默认  1加载中  2没有更多了
			}
		},
		onLoad() {
			this.getNewsNav()
			this.getNewsData()
		},
		onReachBottom() {
			// console.log("到底部了")
			if (this.loading == 2) {
				return
			}
			this.currentPage++
			this.loading = 1
			this.getNewsData()
		},
		methods: {
			getNewsNav() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: (res) => {
						// console.log(res.data)
						this.newsNav = res.data
					}
				})
			},
			clickNav(index, id) {
				this.navIndex = index
				this.currentPage = 1
				this.news = []
				this.loading = 0
				this.currentId = id
				this.getNewsData()
			},
			getNewsData() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: this.currentId,
						page: this.currentPage
					},
					success: (res) => {
						// console.log(res.data)
						if (res.data.length == 0) {
							this.loading = 2
						}
						this.news = [...this.news, ...res.data]
					}
				})
			},
			goDetail(item){
				uni.navigateTo({
					url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.navscroll {
		height: 100rpx;
		background: #F7F8FA;
		white-space: nowrap;
		position: fixed;
		top: var(--window-top);
		left: 0;
		z-index: 10;

		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			display: block;
		}

		.item {
			font-size: 40rpx;
			display: inline-block;
			line-height: 100rpx;
			padding: 0 30rpx;
			color: #333;

			&.active {
				color: #31C27C;
			}
		}
	}

	.content {
		padding: 30rpx;
		padding-top: 130rpx;

		.row {
			border-bottom: 1px dotted #efefef;
			padding: 20rpx 0;
		}
	}

	.nodata {
		display: flex;
		justify-content: center;

		image {
			width: 360rpx;
		}
	}

	.loading {
		text-align: center;
		font-size: 26rpx;
		color: #888;
		line-height: 2em;
	}
</style>