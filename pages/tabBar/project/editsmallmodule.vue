<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">项目小模块</view>
					<uni-icons type="plus" size="24" color="#999" class="right pt4" @tap="NewSmallModule"></uni-icons>
					<view class="form-list">
						<view class="form-list-item" @tap="EditSmallModuleDetail">
							<text class="title">Logo设计</text>
							<text class="title">金鹭</text>
							<text class="title">2020-12-31</text>
							<uni-icons type="arrowright" size="18" color="#CCC" class="right pt10"></uni-icons>
						</view>
						<view class="form-list-item" @tap="EditSmallModuleDetail">
							<text class="title">VI设计</text>
							<text class="title">金鹭</text>
							<text class="title">2020-12-31</text>
							<uni-icons type="arrowright" size="18" color="#CCC" class="right pt10"></uni-icons>
						</view>
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
				array1: [{name:'张小小'},{name:'印雪梅'}],
				index1: 0,
				array2: [{name:'延期'},{name:'终止'}],
				index2: 0,
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
			EditSmallModuleDetail:function(){
				uni.navigateTo({
					url: 'editsmallmoduledetail',
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
