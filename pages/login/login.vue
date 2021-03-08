<template>
	<view>
		<view class="login-img">
			<image src="../../static/image/login.png"></image>
		</view>

		<view class="login-form">
			<uni-icons type="person-filled" size="24" color="#004343" class="title-left ml40"></uni-icons>
			<input name="account" v-model="login.account" placeholder="请输入账户名"/>
		</view>
		<view class="login-form">
			<uni-icons type="locked-filled" size="24" color="#004343" class="title-left ml40"></uni-icons>
			<input name="password" v-model="login.password" placeholder="请输入您的密码" type="password"/>
		</view>
		<view class="login-button" @tap="Login">
			<button>登 录</button>
		</view>
		
		<view class="forget" @tap="Forget">忘记密码？</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import axios from 'axios'
	
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				login:{
                    account:"",
                    password:""
                },
			}
		},
		methods: {
			Forget:function(){
				uni.navigateTo({
					url: 'forget',
				})
			},
			Login:function(){
                let that = this;
                let data = {"account":this.login.account,"password":this.login.password} // 登录的Schema
                this.axios.post('http://47.100.125.167:7080/auth/login', data)
                .then(res => {
                    console.log(res)
                    if(res.data.code == 0) {
						uni.showModal({
							title:"提示",
							content:res.data.message,
							showCancel:false
						});
						let token = res.data.data.token; // 用户的token
                        /**
                          存储在本地，类似于cookie，后期用于登录验证
                          token 会注册在axios的方法中，具体请看 main.js
                        */
                        localStorage.setItem('token', token); 
                        // 跳转登录后的页面， 或者弹出成功成功
                    } else {
						//that.message = res.data.message
						// 用户名密码错误， 前端进行处理
						uni.showModal({
							title:"提示",
							content:res.data.message,
							showCancel:false
						});
                    }
                })
			}
		}
	}
</script>

<style>
page{
	background-color: #004343;
}
</style>
