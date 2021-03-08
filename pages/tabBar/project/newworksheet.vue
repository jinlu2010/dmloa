<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">标题</view>
					<input name="taskname" placeholder="请输入任务工单标题" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">负责人</view>
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="input">{{array[index].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">日期</view>
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
				array: [{name:'张小小'},{name:'印雪梅'}],
				index: 0,
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
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value	
			},
			bindDateChange1: function(e) {
				this.date1 = e.detail.value
			},
			bindDateChange2: function(e) {
				this.date2 = e.detail.value
			},
			NewWorkSheet:function(){
				uni.navigateTo({
					url: 'newworksheet',
				})
			},
		}
	}
</script>

<style>

</style>
