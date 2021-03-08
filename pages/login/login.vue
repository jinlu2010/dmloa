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
                let url = "http://47.100.125.167:7080/auth/login"; // 后端URL
                let data = {"account":this.login.account,"password":this.login.password} ;// 登录的Schema
				axios.post(url,data)
				//that.$axios.post(url,data)
                .then(function (res) {
                    console.log(res)
                    if(res.data.code == 0) {
                        alert('登陆成功');
                        let token = res.data.data.token; // 用户的token
                        localStorage.setItem('token', token); // 存储在本地，类似于cookie，后期用于登录验证
                    }
                })
                .catch(function (error) {
					console.log(error); // 接口异常了
                });
			},
		}
	}
</script>

<style>
page{
	background-color: #004343;
}
</style>
