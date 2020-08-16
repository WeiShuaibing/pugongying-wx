<template>
	<view class="content">
		 <view class="wrap">
			<u-swiper :list="lunboList" name="url" :effect3d="true" height="300rpx"></u-swiper>
		 </view>
		
		 
		 <!-- 专业的素质美术教育-->
		<view class="bg-white ">
			<view class="cu-bar solid-bottom" style="margin-top: 20rpx;">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> <text class="text-bold text-black u-font-35">专业的素质美术教育</text>
				</view>
			</view>
			<view class="u-padding-25">
				{{suzhijiaoyu}}
			</view>
			<view class="padding">
				<u-image width="100%" height="300rpx" src="/static/1.png" border-radius="10rpx"></u-image>
			</view>
		</view>
		
		<!-- 课程体系 -->
		<view class="bg-white ">
			<view class="cu-bar solid-bottom" style="">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> <text class="text-bold text-black u-font-35">多样的课程体系</text>
				</view>
			</view>
			<view class="">
				<view class="" style="padding: 20rpx;">
					<u-row gutter="16">
						<u-col :span="5" :offset="1">
							<u-button plain size="medium" shape="circle" type="warning">素质美术</u-button>
						</u-col>
						<u-col :span="3">
							<u-button plain size="medium" shape="circle" type="warning">国画</u-button>
						</u-col>
					</u-row>
				</view>
				<view class="" style="padding: 20rpx;">
					<u-row gutter="16">
						<u-col :span="4">
							<u-button plain size="medium" shape="circle" type="warning">素描</u-button>
						</u-col>
						<u-col :span="4">
							<u-button plain size="medium" shape="circle" type="warning">动漫</u-button>
						</u-col>
						<u-col :span="4">
							<u-button plain size="medium" shape="circle" type="warning">书法</u-button>
						</u-col>
					</u-row>
				</view>
				<view class="" style="width: 95%;margin: 0 auto;height: 1000rpx;"><!-- 图片 -->
					<u-image width="100%" height="100%" src="/static/guohua.png"></u-image>
				</view>
			</view>
		</view>
		
		<!-- 师资力量 -->
		<view class="bg-white " style="margin-top: 30rpx;">
			<view class="cu-bar solid-bottom" style="margin-top: 20rpx;">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> <text class="text-bold text-black u-font-35">强大的师资力量</text>
				</view>
			</view>
			<view class="u-padding-25">
				{{shizililiang}}
			</view>
			<view class="padding">
				<u-image width="100%" height="300rpx" src="/static/1.png" border-radius="10rpx"></u-image>
			</view>
		</view>
		
		<!-- 学员作品展示 -->
		<view class="bg-white " style="margin-top: 30rpx;">
			<view class="cu-bar solid-bottom" style="margin-top: 20rpx;">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> <text class="text-bold text-black u-font-35">学员作品展示</text>
				</view>
			</view>
			<view class="">
				<scroll-view class="scroll-view_H" scroll-x="true" bindscroll="scroll" style="width: 100%" @scroll="scroll">
				  <view class="scroll-view-item_H" v-for="(item, index) in studentimgList" :key="index">
					  <u-image width="100%" border-radius="15" height="300rpx" :src="item.url"></u-image>
				  </view>
				 <!-- 
				  <view class="scroll-view-item_H">
					<u-image width="100%" border-radius="15" height="300rpx" :src="src"></u-image>
				  </view> -->
				</scroll-view>
			</view>
		</view>
		
		
		<!-- 联系我们 -->
		<view class="bg-white " style="margin-top: 30rpx;">
			<view class="cu-bar solid-bottom" style="margin-top: 20rpx;">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> <text class="text-bold text-black u-font-35">联系我们</text>
				</view>
			</view>
			<view class="u-padding-20">
				<text style="padding-left: 10rpx;font-weight: 600;font-size: 35rpx;">张老师：</text>
				<text style="font-size: 35rpx;color: #f37b1d;">12345678900</text>
			</view>
			<view>
				<text style="padding-left: 30rpx;font-weight: 600;font-size: 35rpx;">地址：</text>
				<text style="font-size: 35rpx;color: #f37b1d;padding-left: 10rpx;font-weight: 600;">郑州市金水区纬一路新闻大厦</text>
			</view>
			<view style="margin-top: 20rpx;padding: 0 20rpx;border-radius: 10rpx;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"><!-- 地图 -->
				<map id="map" 
				longitude="113.681376" 
				latitude="34.767212" 
				scale="12" 
				bindcontroltap="controltap"
				 :markers="markers" 
				 bindmarkertap="markertap" 
				 bindregionchange="regionchange" 
				 show-location style="width: 100%; height: 300px;"></map>
			</view>
			 
		</view>
		
		<view class="" style="height: 180rpx;"></view> <!-- 空白-->
		
		<!-- 底部操作条 -->
		<view class="cu-bar bg-white tabbar border shop" style="position: fixed;bottom: 0rpx;width: 100%;z-index: 1;">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<!-- <view class="cu-tag badge"></view> -->
				</view> 咨询
			</button>
			<view class="btn-group">
				<button @click="toAppointment" class="cu-btn bg-orange round shadow-blur" style="width: 100%;">立  即  预  约</button>
				<!-- <button class="cu-btn bg-red round shadow-blur">立即订购</button> -->
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
				lunboList: [],
				studentimgList: [],
				shizililiang: '', // 师资力量
				suzhijiaoyu: '', // 素质教育
				
				markers: [{
				      iconPath: "/static/map_icon.png",
				      id: 0,
				      latitude: 34.767212,
				      longitude: 113.681376,
				      width: 50,
				      height: 50
				    }]
			}
		},
		onLoad() {
			this.getLunboList()
			this.getStudentimgList()
			this.getHomeinfo()
		},
		methods: {
			getHomeinfo() {
				var that = this
				uni.request({
				    url: this.$BASE_HOME + '/system/homeinfo/list_wx', 
					method: 'GET',
					header: {
						
					},
				    success: (res) => {
						res.data.rows.forEach(item => {
							if (item.type === 'shizililiang' ) {
								that.shizililiang = item.text
							}
							if (item.type === 'suzhijiaoyu' ) {
								that.suzhijiaoyu = item.text
							}
						})
				    }
				});
			},
			toAppointment() {
				uni.navigateTo({
					url:'../appointment/appointment'
				})
			},
			getLunboList() {
				var that = this
				uni.request({
				    url: this.$BASE_HOME + '/system/lunbo/list_wx', 
					method: 'GET',
				    success: (res) => {
						var list = res.data.rows
				        list.forEach(item => {
							item.url = that.$BASE_HOME + item.url
						})
						that.lunboList = list
				    }
				});
			},
			getStudentimgList() {
				var that = this
				uni.request({
					url: this.$BASE_HOME + '/system/studentimg/list_wx',
					method: 'GET',
					success: (res) => {
						var list = res.data.rows
						list.forEach(item => {
							item.url = that.$BASE_HOME + item.url
						})
						that.studentimgList = list
					}
				})
			},
			scroll() {
				
			}
		}
	}
</script>

<style scoped>
	.wrap {
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	
	
	.page-section-spacing{
	  margin-top: 60rpx;
	}
	.scroll-view_H{
	  white-space: nowrap;
	}
	.scroll-view-item{
		width: 100%;
		height: 300rpx;
	}
	.scroll-view-item_H{
		display: inline-block;
		height: 300rpx;
		width: 75%;
		padding-left: 10rpx;
	}
</style>
