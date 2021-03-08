<template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">LOGO设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">已完成50%</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">VIS手册设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">已完成10%</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">包装设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">截止2021-5-31</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">品牌手册设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext red">已逾期两天</text>
				</view>
			</view>
		</view>
		<view class="project-button">
			<button class="btngreen" @tap="EditSmallModule">编辑项目小模块</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			WorkSheet:function(){
				uni.navigateTo({
					url: 'worksheeting',
				})
			},
			EditSmallModule:function(){
				uni.navigateTo({
					url: 'editsmallmodule',
				})
			}
		}
	}
</script>

<style>
page{
	background-color: #EEEEEE;
}
</style>
