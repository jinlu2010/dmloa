<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">项目标题</view>
					<input name="taskname" value="请输入项目标题" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">服务对象</view>
					<input name="taskname" value="请输入服务对象" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">服务目的</view>
					<input name="taskname" value="请输入服务目的" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">服务目标</view>
					<input name="taskname" value="请输入服务目标" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">项目周期</view>
					<picker mode="date" :value="date1" :start="startDate" :end="endDate" >
						<view class="input">2020-1-1<text>至</text></view>
					</picker>
					<picker mode="date" :value="date2" :start="startDate" :end="endDate" >
						<view class="input">2020-1-31</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">项目状态</view>
					<picker :value="index2" :range="array2" range-key="name">
						<view class="input">张小小</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">对接人</view>
					<input name="taskname" value="请输入对接人" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">项目预算</view>
					<input name="taskname" value="请输入项目预算" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">验收标准</view>
					<input name="taskname" value="请输入验收标准" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">相关介绍</view>
					<view class="textarea">
						<textarea @blur="bindTextAreaBlur" auto-height value="请输入相关介绍" />
					</view>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				
			}
		},
		methods: {
			

		}
	}
</script>

<style>

</style>
