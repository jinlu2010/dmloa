<template>
	<view>
		<view class="status-contents">
			<view class="status top-view">
				<view class="titles">
					<uni-icons type="arrowleft" size="24" color="white" @tap="goBack()" class="title-left"></uni-icons>
					<image src="../../static/image/icon17.png" class="title-right" @tap="Message"></image>
				</view>
			</view>
		</view>
		<view class="place"></view>
		<view class="usercenter">
			<view class="bgusercenter">
				<view class="avatar">
					<image :src="userface"></image>
				</view>
				<view class="name">
					<text class="h1">金鹭</text>
					<text class="ml20 title">平面设计师</text>
				</view>
				<view class="score">
					<view>
						<text class="h1">10</text>
						<text class="title">今日得分</text>
					</view>
					<view>
						<text class="h1">104</text>
						<text class="title">本月得分</text>
					</view>
					<view>
						<text class="h1">B</text>
						<text class="title">上月评级</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="list usercenterlist">
			<view class="list-item-container usercenterlist-container" @tap="PersonalFlie">
				<view class="list-item-content">
					<image src="../../static/image/icon09.png"></image>
					<text class="title teamkpi">个人档案</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
			<view class="list-item-container usercenterlist-container" @tap="PositionlFlie">
				<view class="list-item-content">
					<image src="../../static/image/icon10.png"></image>
					<text class="title teamkpi">岗位说明</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
			<view class="list-item-container usercenterlist-container" @tap="Department">
				<view class="list-item-content">
					<image src="../../static/image/icon11.png"></image>
					<text class="title teamkpi">部门职能</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
			<view class="list-item-container usercenterlist-container" @tap="MyKPI">
				<view class="list-item-content">
					<image src="../../static/image/icon12.png"></image>
					<text class="title teamkpi">我的绩效</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
			<view class="list-item-container usercenterlist-container" @tap="Team">
				<view class="list-item-content">
					<image src="../../static/image/icon13.png"></image>
					<text class="title teamkpi">团队绩效</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
		</view>
		<view class="list usercenterlist mt30">
			<view class="list-item-container usercenterlist-container" @tap="Feedback">
				<view class="list-item-content">
					<image src="../../static/image/icon12.png"></image>
					<text class="title teamkpi">软件反馈</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
			<view class="list-item-container usercenterlist-container" @tap="Login">
				<view class="list-item-content">
					<image src="../../static/image/icon13.png"></image>
					<text class="title teamkpi">退出登录</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
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
				userface: "../../static/image/myphoto.jpg",
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			PersonalFlie:function(){
				uni.navigateTo({
					url: 'personalfile',
				})
			},
			PositionlFlie:function(){
				uni.navigateTo({
					url: 'positionfile',
				})
			},
			Department:function(){
				uni.navigateTo({
					url: 'department',
				})
			},
			Feedback:function(){
				uni.navigateTo({
					url: 'feedback',
				})
			},
			Message:function(){
				uni.navigateTo({
					url: 'message',
				})
			},
			MyKPI:function(){
				uni.navigateTo({
					url: 'mykpi',
				})
			},
			Team:function(){
				uni.navigateTo({
					url: 'team',
				})
			},
			Login:function(){
				uni.navigateTo({
					url: '../login/login',
				})
			}
		}
	}
</script>

<style>
	
</style>
