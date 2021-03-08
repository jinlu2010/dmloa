<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">账户名</view>
					<input name="taskname" placeholder="请输入您的账户名" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">重设密码</view>
					<input name="taskname" placeholder="请输入新的密码" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">确认密码</view>
					<input name="taskname" placeholder="请输入确认新密码" class="input"/>
				</view>
				
			</view>
			<button class="btngreen btnform" @click="Login">立即修改</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			Login: function() {
				uni.navigateTo({
					url: 'login',
				})
			}
		}
	}
</script>

<style>

</style>
