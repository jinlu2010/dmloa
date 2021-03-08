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
			 			<uni-icons type="plus" size="32" color="white" @tap="NewProject"></uni-icons>
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
			<!--没有数据-->
			<!--<view class="none-content">
				<text>还没有待分配项目</text>
			</view>-->
			<!--创建好项目后，大模块负责人看到的界面，由大模块负责人创建小模块-->
			<view class="list">
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌调研</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="NewSmallModule">创建小模块</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌定位</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="NewSmallModule">创建小模块</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌塑造</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="NewSmallModule">创建小模块</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-品牌团队</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="NewSmallModule">创建小模块</button>
						</view>
					</view>
				</view>
			</view>
			<!--创建大模块后，小模块负责人看到的界面，由小模块负责人创建工单-->
			<!--<view class="list">
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-问卷调查</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen">创建工单</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-Logo设计</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen">创建工单</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">花开声音 H003-人事招聘</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen">创建工单</button>
						</view>
					</view>
				</view>
			</view>-->
		</view>
		<view class="tab-content" :class="{tab:btncontent == 1}">
			<view class="list">
				<view class="list-item-container rightlist" @tap="BigModuleing">
					<view class="list-item-content">
						<text class="title teamkpi">花开声音 H002</text>
						<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
						<text class="righttext">已完成70%</text>
					</view>
				</view>
				<view class="list-item-container rightlist" @tap="BigModuleing">
					<view class="list-item-content">
						<text class="title teamkpi">马灯部落 M001</text>
						<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
						<text class="righttext">已完成50%</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tab-content" :class="{tab:btncontent == 2}">
			<view class="list">
				<view class="list-item-container rightlist" @tap="BigModuleed">
					<view class="list-item-content">
						<text class="title teamkpi">老山禅 L001</text>
						<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
						<text class="righttext">已完成</text>
					</view>
				</view>
				<view class="list-item-container rightlist" @tap="BigModuleed">
					<view class="list-item-content">
						<text class="title teamkpi">芝麻官 Z002</text>
						<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
						<text class="righttext">已终止</text>
					</view>
				</view>
			</view>
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
			BigModuleing: function() {
				uni.navigateTo({
					url: 'bigmoduleing',
				})
			},
			BigModuleed: function() {
				uni.navigateTo({
					url: 'bigmoduleed',
				})
			},
			NewProject: function() {
				uni.navigateTo({
					url: 'newproject',
				})
			},
			NewSmallModule:function(){
				uni.navigateTo({
					url: 'newsmallmodule',
				})
			}
		}
	}
</script>

<style>

</style>
