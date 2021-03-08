<template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist" @tap="SmallModule">
				<view class="list-item-content">
					<text class="title teamkpi">品牌调研</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">已完成50%</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="SmallModule">
				<view class="list-item-content">
					<text class="title teamkpi">品牌定位</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">已完成50%</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="SmallModule">
				<view class="list-item-content">
					<text class="title teamkpi">品牌塑造</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">已完成50%</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="SmallModule">
				<view class="list-item-content">
					<text class="title teamkpi">品牌团队</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">已完成50%</text>
				</view>
			</view>
		</view>
		<view class="project-button">
			<button @tap="EditBigModule" class="btngreen">编辑项目大模块</button>
			<button @tap="EditProject" class="btngreen">编辑项目详情</button>
			<button @tap="ProjectDetail" class="btngreen">查看项目详情</button>
			<button class="btngreen">查看项目进度表</button>
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
			SmallModule:function(){
				uni.navigateTo({
					url: 'smallmoduleing',
				})
			},
			EditBigModule:function(){
				uni.navigateTo({
					url: 'editbigmodule',
				})
			},
			EditProject:function(){
				uni.navigateTo({
					url: 'editproject',
				})
			},
			ProjectDetail:function(){
				uni.navigateTo({
					url: 'projectdetail',
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
