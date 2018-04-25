<template>
	<div class="index">
		<HeaderTab></HeaderTab>
		<div class="sliders">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slider" v-for="(s,i) in slider" :key="i">
						<img :src="s.picUrl">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//导入头部组件HeaderTab
   import HeaderTab from '@/components/HeaderTab.vue';


   //导入轮播图插件swiper
   import Swiper from 'swiper';
   //导入swiper的样式
   import 'swiper/dist/css/swiper.min.css';

   //引入jsonp
   import jsonp from 'jsonp';

   //导入api接口地址文件
   import api from '@/api/indexApi.js';



	export default {

		data(){
			return {
				slider:[]
			}

		},
		mounted:function(){
			jsonp(api.bannerApi,{param:'jsonpCallback'},(err,data)=>{
				this.slider = data.data.slider;
				this.$nextTick(function(){
					let mySwiper = new Swiper('.swiper-container',{

					});
				});
				
			});
		},
		methods:{

		},
		components:{
			HeaderTab,
			
		}

	}
	
</script>

<style lang="scss">
.index{
	.sliders{
		margin-top:10px;
		img{
			width:100%;
		}
	}
}


</style>