<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">项目标题</view>
					<input name="taskname" placeholder="请输入项目标题" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">服务对象</view>
					<input name="taskname" placeholder="请输入服务对象" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">服务目的</view>
					<input name="taskname" placeholder="请输入服务目的" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">服务目标</view>
					<input name="taskname" placeholder="请输入服务目标" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">项目周期</view>
					<picker mode="date" :value="date1" :start="startDate" :end="endDate" @change="bindDateChange1">
						<view class="input">{{date1}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
							<text>至</text>
						</view>
					</picker>
					<picker mode="date" :value="date2" :start="startDate" :end="endDate" @change="bindDateChange2">
						<view class="input">{{date2}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">项目状态</view>
					<picker @change="bindPickerChange2" :value="index2" :range="array2" range-key="name">
						<view class="input">{{array2[index2].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">对接人</view>
					<input name="taskname" placeholder="请输入对接人" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">项目预算</view>
					<input name="taskname" placeholder="请输入项目预算" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">验收标准</view>
					<input name="taskname" placeholder="请输入验收标准" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">相关介绍</view>
					<view class="textarea">
						<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入相关介绍" />
					</view>
				</view>

			</view>
			<button class="btngreen btnform">保存</button>
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
				show : false,
				array1: [{name:'标准'},{name:'非标'}],
				index1: 0,
				array2: [{name:'紧急'},{name:'正常'}],
				index2: 1,
				date1: getDate({
					placeholder:"开始日期",
					format: true
				}),
				date2: getDate({
					placeholder:"结束日期",
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
			}
		},
		methods: {
			getDate(type) {
				const date = new Date();
			
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
			
				return `${year}-${month}-${day}`;
			},
			bindPickerChange1: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index1 = e.detail.value	
			},
			bindPickerChange2: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index2 = e.detail.value	
			},
			bindDateChange1: function(e) {
				this.date1 = e.detail.value
			},
			bindDateChange2: function(e) {
				this.date2 = e.detail.value
			},
			radioChange: function(e) {
				var checked = e.detail.value
				console.log(checked)
			},
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
			},
			tapshow:function(){
				this.show = true
			},
			taphide:function(){
				this.show = false
			},
			NewBigModule:function(){
				uni.navigateTo({
					url: 'newbigmodule',
				})
			},
			EditBigModule:function(){
				uni.navigateTo({
					url: 'editbigmodule',
				})
			}
		}
	}
</script>

<style>

</style>
