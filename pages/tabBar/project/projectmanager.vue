<template>
	<view>
		<view class="status-contents">
			 <view class="status top-view">
			 	<view class="titles">
			 		<view class="UserFace">
						<image :src="imgUrl"></image>
					</view>
			 		<view class="titleText">{{titleText}}</view> 
			 		<view class="RightButton">
			 			<uni-icons type="contact" size="32" color="white" @tap="UserCenter"></uni-icons>
			 			<uni-icons type="plusempty" size="32" color="white"></uni-icons>
			 		</view>			
			 	</view>
			 </view>
		</view>
		<view class="place"></view>
		<view class="tabbar project">
			<view class="bgtab"></view>
			<view class="tab-title">
				<view @tap="change(0)" :class="{active:btncontent == 0}">待分配</view>
				<view @tap="change(1)" :class="{active:btncontent == 1}">进行中</view>
				<view @tap="change(2)" :class="{active:btncontent == 2}">已过期</view>
			</view>
		</view>
		
		<view class="tab-content" :class="{tab:btncontent == 0}">
			<!--创建好项目后，大模块负责人看到的界面，由大模块负责人创建小模块-->
			<view class="list">
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌调研</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen">创建小模块</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌定位</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen">创建小模块</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌塑造</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen">创建小模块</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌团队</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen">创建小模块</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tab-content" :class="{tab:btncontent == 1}">
			<uni-list>
				<uni-list-item title="花开声音 H002" rightText="已完成70%" />
				<uni-list-item title="马灯部落 M001" rightText="已完成70%" />
			</uni-list>
		</view>
		<view class="tab-content" :class="{tab:btncontent == 2}">			
			<uni-list>
				<uni-list-item title="老山禅 L001" rightText="已完成"/>
				<uni-list-item title="芝麻官 L002" rightText="已终止"/>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				titleText:"项目管理",
				imgUrl:"../../../static/image/userface.png",
				btncontent: 0,
			}
		},
		methods: {
			change(e) {
			     this.btncontent = e;
			},
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			NewProject: function() {
				uni.navigateTo({
					url: 'newtask',
				})
			},
			AssignProject: function() {
				uni.navigateTo({
					url: 'assigntask',
				})
			}
		}
	}
</script>

<style>

</style>
