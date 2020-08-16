<template>
	<view class="main">
		
		<view class="form">
			<form>
				<view class="cu-form-group margin-top">
					<view class="title">姓名</view>
					<input placeholder="请输入姓名" name="input"></input>
					<text class='cuIcon-people text-black'></text>
				</view>
				<view class="cu-form-group">
					<view class="title">电话</view>
					<input placeholder="请输入电话" name="input"></input>
					<text class='cuIcon-phone text-black'></text>
				</view>
				<view class="cu-form-group">
					<view class="title">性别</view>
					<picker @change="sexChange" :value="sexIndex" :range="sexList">
						<view class="picker">
							{{sexIndex>-1?sexList[sexIndex]:'请选择性别'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">年龄</view>
					<picker @change="ageChange" :value="ageIndex" :range="ageList">
						<view class="picker">
							{{ageIndex>-1?ageList[ageIndex]:'请选择年龄'}}
						</view>
					</picker>
				</view>
			</form>
		</view>
		
		<view style="margin-top: 20rpx;">
			<view class="padding-xl">
				<button class="cu-btn block bg-orange lg round">
					   立  即  预  约
				</button>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {},
			ageSelectShow: false,
			ageIndex: -1,
			ageList: ['1岁','2岁','3岁','4岁','5岁','6岁','7岁','8岁'],
			sexIndex: -1,
			sexList: ['公主','王子','保密']
		}
	},
	methods: {
		ageConfirm(v) {
			console.log(v)
			this.ageSelectShow = false
		},
		ageChange(v) {
			console.log(v)
			this.ageIndex = v.detail.value
			
		},
		sexChange(v) {
			console.log(v)
			this.sexIndex = v.detail.value
			
		}
	}
}
</script>

<style>
	page{
		height: 100%;
	}
	.form{
		width: 90%;
		margin: 0 auto;
		margin-top: 200rpx;
		padding-top: 8rpx;
		padding-left: 50rpx;
		padding-right: 30rpx;
		background-color: #FFFFFF;
		opacity: 0.8;
		border-radius: 20rpx;
		box-shadow: 10px 10px 5px #888888;
	}
.main {
	width: 100%;
	height: 100%;
	background-image: url(https://s1.ax1x.com/2020/08/09/aohKQU.png);
	position:fixed;
	background-size:100% 100%;
	
}
.header-bg{
	width: 100%;
	height: 100%;
	position:fixed; 
	background-size:100% 100%;
	z-index: -1;
}
</style>
