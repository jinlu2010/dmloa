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
		 				<uni-icons type="plus" size="32" color="white" @tap="NewTask"></uni-icons>
		 			</view>			
		 		</view>
		 	</view>
		</view>
		<view class="place"></view>
		<view class="tabbar">
			<view class="bgtab"></view>
			<view class="tab-title">
				<view @tap="change(0)" :class="{active:btncontent == 0}">待分配任务</view>
				<view @tap="change(1)" :class="{active:btncontent == 1}">已分配任务</view>
			</view>
		</view>
		
		<view class="tab-content" :class="{tab:btncontent == 0}">
			<view class="list">
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">劳动节海报设计</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="AssignTask">分配</button>
							<button class="btnblue">删除</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">客户电话回访</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="AssignTask">分配</button>
							<button class="btnblue">删除</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">下午15点品牌研讨会</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="AssignTask">分配</button>
							<button class="btnblue">删除</button>
						</view>
					</view>
				</view>
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left project-left">
							<text class="title">老山禅logo设计</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="AssignTask">分配</button>
							<button class="btnblue">删除</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tab-content" :class="{tab:btncontent == 1}">
			<view class="choicetime">
				<button class="calendar-button" type="button" @click="open" v-model="info.date">
					{{info.date}}<uni-icons type="arrowdown" size="12" color="#004343" class="pl20"></uni-icons>
				</button>	
				<uni-calendar ref="calendar" :selected="info.selected" :showMonth="false" :date="info.date" :insert="false" :lunar="false" :range="false" @confirm="confirm" />
			</view>
			<view class="list-layout">
				<view class="list assign">
					<view class="list-item-container rightlist">
						<view class="list-item-content">
							<view class="list-content-left">
								<text class="title">办理入职培训</text>
								<text class="note">To 徐会香</text>
							</view>
							<view class="list-content-middle">
								<text class="note">进行中</text>
								<text class="date grey">2020.5.30</text>
							</view>
							<view class="list-content-right">
								<button class="btngreen" @tap="EditTask">修改</button>
							</view>
						</view>
					</view>
					<view class="list-item-container rightlist">
						<view class="list-item-content">
							<view class="list-content-left">
								<text class="title">办理入职培训</text>
								<text class="note">To 徐会香</text>
							</view>
							<view class="list-content-middle">
								<text class="note">进行中</text>
								<text class="date grey">2020.5.30</text>
							</view>
							<view class="list-content-right">
								<button class="btngreen" @tap="EditTask">修改</button>
							</view>
						</view>
					</view>
					<view class="list-item-container rightlist">
						<view class="list-item-content">
							<view class="list-content-left">
								<text class="title">办理入职培训</text>
								<text class="note">To 徐会香</text>
							</view>
							<view class="list-content-middle">
								<text class="note">进行中</text>
								<text class="date grey">2020.5.30</text>
							</view>
							<view class="list-content-right">
								<button class="btngreen" @tap="EditTask">修改</button>
							</view>
						</view>
					</view>
					<view class="list-item-container rightlist">
						<view class="list-item-content">
							<view class="list-content-left">
								<text class="title">办理入职培训</text>
								<text class="note">To 徐会香</text>
							</view>
							<view class="list-content-middle">
								<text class="note">已完成</text>
							</view>
							<view class="list-content-right">
							</view>
						</view>
					</view>
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	
	export default {
		components: {
			uniIcons,
			uniCalendar,
			uniList,
		},
		data() {
			return {
				titleText:"分配任务",
				imgUrl:"../../../static/image/userface.png",
				showCalendar: true,
				info: {
					date: new Date().toISOString().slice(0, 10),
					selected: []
				},
				btncontent: 0,
				screenWidth:0,
				screenHeight:0,
				dateHeight:'',
			}
		},
		methods: {
			onLoad(){
				var that=this;
				uni.getSystemInfo({
					success:function(res){
						this.screenWidth=res.screenWidth;
						this.screenHeight=res.screenHeight;
						that.dateHeight=this.screenHeight+"rpx";
					}
				})
			},
			open() {
				this.$refs.calendar.open()
			},
			confirm(e) {
				var choosetime=e.fulldate;
				this.info.date=choosetime;
			},
			change(e) {
			     this.btncontent = e;
			},
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			Detail: function() {
				uni.navigateTo({
					url: '../../detail/detail',
				})
			},
			NewTask: function() {
				uni.navigateTo({
					url: 'newtask',
				})
			},
			AssignTask: function() {
				uni.navigateTo({
					url: 'assigntask',
				})
			},
			EditTask: function() {
				uni.navigateTo({
					url: 'edittask',
				})
			},
		}	
	}
</script>

<style>

</style>
