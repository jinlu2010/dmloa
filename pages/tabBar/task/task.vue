<template>
	<view>
		<view class="status-contents">
		 	<view class="status top-view">
		 		<view class="titles">
		 			<view class="UserFace">
						<image :src="imgUrl"></image>
					</view>
		 			<view class="titleText">{{titleText}}</view> 
		 			<view class="RightButton">
		 				<uni-icons type="contact" size="32" color="white" @tap="UserCenter"></uni-icons>
		 				<button class="calendar-button" type="button" @tap="open">{{info.date}}</button>
		 				<uni-calendar ref="calendar" :selected="info.selected" :showMonth="false" :date="info.date" :insert="false" :lunar="false" :range="false" @confirm="confirm" />
		 			</view>			
		 		</view>
		 	</view>
		</view>
		<view class="place"></view>
		<view class="bgcalendar"></view>
		<view class="calendar" >
			<view class="calendar_weeks">
				<view class="calendar_weeks-day">
					<text class="calendar_weeks-day-text">日</text>
				</view>
				<view class="calendar_weeks-day">
					<text class="calendar_weeks-day-text">一</text>
				</view>
				<view class="calendar_weeks-day">
					<text class="calendar_weeks-day-text">二</text>
				</view>
				<view class="calendar_weeks-day">
					<text class="calendar_weeks-day-text">三</text>
				</view>
				<view class="calendar_weeks-day">
					<text class="calendar_weeks-day-text">四</text>
				</view>
				<view class="calendar_weeks-day">
					<text class="calendar_weeks-day-text">五</text>
				</view>
				<view class="calendar_weeks-day">
					<text class="calendar_weeks-day-text">六</text>
				</view>
			</view>
			<view class="calendar_weeks">
				<view class="calendar_weeks-item">
					<uni-calendar-item>1</uni-calendar-item>
				</view>
				<view class="calendar_weeks-item">
					<uni-calendar-item>2</uni-calendar-item>
					<view class="dot">
						<view class="urgent"></view>
					</view>
				</view>
				<view class="calendar_weeks-item">
					<uni-calendar-item class="calendar-active">3</uni-calendar-item>
					<view class="dot">
						<view class="urgent"></view>
						<view class="full"></view>
					</view>
				</view>
				<view class="calendar_weeks-item">
					<uni-calendar-item>4</uni-calendar-item>
					<view class="dot">
						<view class="urgent"></view>
						<view class="full"></view>
					</view>
				</view>
				<view class="calendar_weeks-item">
					<uni-calendar-item class="calendar-urgent">5</uni-calendar-item>
					<view class="dot">
						<view class="urgent"></view>
					</view>
				</view>
				<view class="calendar_weeks-item">
					<uni-calendar-item>6</uni-calendar-item>
				</view>
				<view class="calendar_weeks-item">
					<uni-calendar-item>7</uni-calendar-item>
				</view>
			</view>
		</view>
		
		<view class="list task">
			<view class="list-item-container" @tap="Detail">
				<view class="list-item-content">
					<view class="list-content-left">
						<view class="dot">
							<view class="urgent"></view>
							<view class="full"></view>
						</view>
						<text class="title">品牌总监面试</text>
						<text class="note">From 徐会香</text>
					</view>
					<view class="list-content-right task-content-right">
						<button class="btngreen" @tap.stop="tapshow">进行中</button>
					</view>
				</view>
			</view>
			<view class="list-item-container" @tap="Detail">
				<view class="list-item-content">
					<view class="list-content-left">
						<view class="dot">
							<view class="urgent"></view>
							<view class="full"></view>
						</view>
						<text class="title">劳动节海报设计</text>
						<text class="note">From 金鹭</text>
					</view>
					<view class="list-content-right task-content-right">
						<image src="../../../static/image/icon05.png"></image>
					</view>
				</view>
			</view>
			<view class="list-item-container" @tap="Detail">
				<view class="list-item-content">
					<view class="list-content-left">
						<view class="dot"></view>
						<text class="title">咖啡馆LOGO设计验收</text>
						<text class="note">From 金鹭</text>
					</view>
					<view class="list-content-right task-content-right">
						<image src="../../../static/image/icon07.png"></image>
					</view>
				</view>
			</view>
			<view class="list-item-container" @tap="Detail">
				<view class="list-item-content">
					<view class="list-content-left">
						<view class="dot"></view>
						<text class="title">和美国团队视频会议</text>
						<text class="note">From 张小小</text>
					</view>
					<view class="list-content-right task-content-right">
						<image src="../../../static/image/icon06.png"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="mask" v-show="show"></view>
		<view class="popup" v-show="show">
			<view class="popup-content">
				<form @submit="formSubmit" @reset="formReset">
					<view class="form pl40">
						<view class="form-item">
							<view class="title">完成状态</view>
							<picker @change="bindPickerChange1" :value="index1" :range="array1" range-key="name">
								<view class="input">{{array1[index1].name}}
									<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
								</view>
							</picker>
						</view>
						
						<view class="form-item" v-show="finish">
							<view class="title">任务耗时</view>
							<picker @change="bindPickerChange2" :value="index2" :range="array2" range-key="name">
								<view class="input">{{array2[index2].name}}
									<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
								</view>
							</picker>
						</view>
						<view class="form-item" v-show="finish">
							<view class="title">上传文件</view>
							<button class="fileupload" @tap="clickFileUpload">附件</button>
						</view>
						
						<view class="form-item" v-show="delay">
							<view class="title">完成时间</view>
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="input">{{date}}
									<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
								</view>
							</picker>
						</view>
						
						<view class="form-item">
							<view class="title">备注说明</view>
							<view class="textarea popuptextarea">
								<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入内容" />
							</view>
						</view>	

						<button class="btnsubmit">提交</button>
						<view class="cancle">
							<uni-icons type="closeempty" size="24" color="#999999" class="pl20"  @tap="taphide"></uni-icons>
						</view>
					</view>
				</form>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'	
	
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
			uniCalendar,
			uniList,
		},
		data() {
			return {
				titleText:"我的任务",
				imgUrl:"../../../static/image/userface.png",
				showCalendar: true,
				info: {
					date: new Date().toISOString().slice(0, 10),
					selected: []
				},
				windowWith:0,
				windowHeight:0,
				dateWidth:'',
				dateHeight:'',
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				show : false,
				finish:true,
				delay:false,
				stop:false,
				array1: [{name:'完成'},{name: '改期'}, {name:'终止'}],
				index1: 0,
				array2: [{name:'1小时'},{name: '半小时'},{name: '十分钟'}],
				index2: 0,
				title: 'uploadFile',
			}
		},
		onLoad(){
			var that=this;
			uni.getSystemInfo({
				success:function(res){
					this.windowWith=res.windowWidth;
					this.windowHeight=res.windowHeight;
					that.dateWidth="width:"+(this.windowWith-30)/7*2+"rpx";
					that.dateHeight="height:"+this.windowHeight+"rpx";
				}
			})
		},
		methods:{
			open() {
				this.$refs.calendar.open()
			},
			confirm(e) {
				var choosetime=e.fulldate;
				this.info.date=choosetime;
			},
			bindPickerChange1: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index1 = e.detail.value
				if(this.index1==0){
					this.finish=true;
					this.delay=false;
					this.stop=false;
				}else if(this.index1==1){
					this.delay=true;
					this.finish=false;
					this.stop=false;
				}else{
					this.stop=true;
					this.finish=false;
					this.delay=false;
				}
			},
			bindPickerChange2: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index2 = e.detail.value
			},
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
			},
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			tapshow:function(){
				this.show = true
			},
			taphide:function(){
				this.show = false
			},
			clickFileUpload:function() {
				uni.navigateTo({
					url: 'fileUpload',
				})
			},
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			Detail: function() {
				uni.navigateTo({
					url: '../../detail/detail02',
				})
			},
		}
	}
</script>

<style>

</style>
