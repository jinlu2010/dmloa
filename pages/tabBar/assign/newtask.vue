<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">任务标题</view>
					<input name="taskname" placeholder="请输入任务内容" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">完成时间</view>
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="input">{{date}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">所属项目</view>
					<picker @change="bindPickerChange1" :value="index1" :range="array1" range-key="name">
						<view class="input">{{array1[index1].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">紧急程度</view>
					<picker @change="bindPickerChange2" :value="index2" :range="array2" range-key="name">
						<view class="input">{{array2[index2].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
	
				<view class="form-item">
					<view class="title">执行人</view>
					<radio-group>
						<view class="btnradio">
							<radio id="自己" value="自己" checked @tap="taphide">自己</radio>
							<radio id="他/多人" value="他/多人" @tap="tapshow">他/多人</radio>
						</view>
					</radio-group>
				</view>
				<view class="form-item other-radio" v-show="show">
					<view class="other-radio-item">
						<text>可执行人</text>
						<checkbox-group @change="checkboxChange">
							<label v-for="item in checkboxItems01" :key="item.name">
								<view class="btnotherradio">
									<checkbox :value="item.name" :checked="item.checked"></checkbox>
								</view>
								<view class="btnotherradio mr30">{{item.value}}</view>
							</label>
						</checkbox-group>
						<text>请其协助</text>
						<checkbox-group @change="checkboxChange">
							<label v-for="item in checkboxItems02" :key="item.name">
								<view class="btnotherradio">
									<checkbox :value="item.name" :checked="item.checked"></checkbox>
								</view>
								<view class="btnotherradio mr30">{{item.value}}</view>
							</label>
						</checkbox-group>
					</view>
				</view>
	
				<view class="form-item">
					<view class="title">特别提醒</view>
					<view class="textarea">
						<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入注意事项" />
					</view>
				</view>
			</view>
			<button class="btngreen btnform">立即分配</button>
			<text class="note pl60">注：如果只填写了任务标题，任务将会在待分配任务中显示。</text>
		</form>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'	
	
	function getDate(type) {
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
	}	
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				show : false,
				array1: [{name:'无项目'},{name: '老山禅'}, {name:'花开声音'}, {name:'苗颜净'}],
				index1: 0,
				array2: [{name:'紧急'},{name: '正常'}],
				index2: 1,
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				checkboxItems01: [{
						name: 'ison',
						value: '王伟峰',
					},
					{
						name: 'lucy',
						value: '金鹭'
					},
					{
						name: 'summy',
						value: '印雪梅',
					}
				],
				checkboxItems02: [{
						name: 'xuhuixiang',
						value: '徐会香',
					},
					{
						name: 'miaochong',
						value: '苗冲',
					},
					{
						name: 'zhangyuanfang',
						value: '张远方',
					}
				],
			}
		},
		methods: {
			bindPickerChange1: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index1 = e.detail.value	
			},
			bindPickerChange2: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index2 = e.detail.value	
			},
			bindDateChange: function(e) {
				this.date = e.detail.value
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
			}
		}
	}
</script>

<style>

</style>
