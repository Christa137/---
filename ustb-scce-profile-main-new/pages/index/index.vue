<template>
	
	<input type="text" v-model="value" placeholder="请输入内容" />
	<button @click="changeHandle">{{ sign }}</button>
	<div v-if='show'>
		<view class="content">
		
			<text >北京科技大学 · 计算机与通信工程学院</text>
			<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">教师明细</text>
			<fui-row margin-bottom="24rpx" gutter="16">
				<fui-col  v-for="(teacher,index) in teachers" :key="index" :span="12" >
					<view class="teacher-simple-card">
						<img @click="handleDetail(index)" :src="teacher.avatar" style="width: 100%; border-radius: 5px 5px 0px 0px;" />
						<text @click="handleDetail(index)" style="font-weight: bold; margin: 8px; ">{{teacher.name}}</text>
					</view>
				</fui-col>
			</fui-row>
		
		</view>
	</div>
	  
	<view class="content" v-if="!show">
		<div v-for="(teacher,index) in teachers">			
			<div v-if="teacher.name == valueInput || teacher.id == pictureId" > 
				
				<text style="margin-top: 16px; font-weight: bold; display: block; font-size: 24px">个人信息</text>
				<div class="main">
					<fui-row margin-bottom="24rpx" gutter="16">
						<fui-col @click="handleDetail(index)" :span="12" >
							<view class="teacher-simple-card" style="width: 210%;">
								<img :src="teacher.avatar" style="width: auto;height: 370rpx;border-radius: 5px 5px 0px 0px;" />
								<text style=" font-weight: bold; margin: 8px; ">{{teacher.name}}</text>
							</view>
						</fui-col>
					</fui-row>
				</div>
				<div class="aside">
					<text style="line-height: 2">
						系所：计算机科学与技术系\n
						职称：\n
						职务：\n
						办公地点：\n
						办公电话：\n
						电子邮箱：\n
					</text>
				</div>
				<div class="detail">
					<text style="line-height: 2">
						本科课程：\n
						研究生课程：\n
						科研方向：\n
						学术与社会兼职：\n
					</text>
				</div>
				
			</div>
		</div>
	</view>
	
</template>

<script>
	import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
	import fuiRow from "@/components/firstui/fui-row/fui-row.vue"
	import fuiCol from "@/components/firstui/fui-col/fui-col.vue"
	// import firstPage from "./firstPage.vue"
	export default {
		data(){
			return {
				valueInput:"",
				sign:"确定",
				value:"",
				show:true,
				pictureId:-1,
				teachers: [
					{
						id:0,
						avatar: "https://scce.ustb.edu.cn/attach/file/shiziduiwu/jiaoshixinxi/2018-12-19/cba1c821e0ffbb349ce54cae55b84f0a.jpg",
						name: "洪源",
						gender: "男"
					},
					{
						id:1,
						avatar: "https://scce.ustb.edu.cn/attach/file/shiziduiwu/jiaoshixinxi/2018-12-19/4ba326c6d52f9164daf35d0218b7d196.jpg",
						name: "崔晓龙",
						gender: "男"
					},
					{
						id:2,
						avatar: "https://scce.ustb.edu.cn/attach/file/shiziduiwu/jiaoshixinxi/2018-04-14/1b1e73ee12f429e7a659a5ceb0b93370.jpg",
						name: "胡堰",
						gender: "女"
					}
				]
			}
		},
		watch:{
			value(newVal,oldVal){
				this.valueInput = newVal;
			}
		},
		components:{
			// firstPage,
			fuiButton,
			fuiRow,
			fuiCol
		},
		methods:{
			changeHandle(){
				this.sign = (this.sign == "确定") ? "返回" : "确定";
				this.show = (this.show == true) ? false : true;
				this.pictureId = (this.sign == "返回") ? -1 : this.pictureId;
			},
			handleDetail(index) {
				console.log(index);
				
				// uni.request({
				//     url: "https://unidemo.dcloud.net.cn/api/news",                  
				//     method: 'post',
				//     dataType: 'json',
				// 	data: {
				// 		name: "xxx"
				// 	},
				//     success: (res) => {
				//         console.log(res.data);
				//     },
				// });
				
			    uni.request({
			        url: "https://unidemo.dcloud.net.cn/api/news",                  
			        method: 'get',
			        dataType: 'json',
			        success: (res) => {
			            console.log(res.data);
			        },
					fail: (err) => {
						console.log(res.data);
					}
			    });
				
				this.pictureId = index;
				console.log(this.pictureId);
				this.show = (this.sign == "确定") ? ((this.show == true) ? false : true) : 0;
				this.sign = (this.sign == "确定") ? "返回" : this.sign;
			}
		}
	}
</script>

<style>
	.content {
		padding: 8px
	}
	
	.teacher-simple-card {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		min-width: 45%;
		border-radius: 5px;
		box-shadow: 0 2px 4px 1px rgba(0,0,0,.15);
	}
	
	.aside {
	    float: right;
	    width: 58%;
	    height: 238px;
		margin-top: 13px;
		margin: 10px,2px,2px,2px;
		/* border: 5px solid #999;
	    box-sizing: border-box; */
	}
	.main {
	    float: left;
	    width: 40%;
	    height: 250px;
	    /* border: 5px solid #999;
	    box-sizing: border-box; */
	}
	
	.detail {
		width: 100%
	}
	
</style>
