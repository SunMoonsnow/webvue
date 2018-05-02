<template>
	<div class="search">
		<!-- S 头部logo跟导航栏 -->
		<HeaderTab></HeaderTab>
		<!-- E 头部logo跟导航栏 -->
	
		<!-- S 搜索框 -->
		<Lookingfor></Lookingfor>
		<!-- E 搜索框 -->

		<!-- S 热门歌曲 -->
		<Prompt></Prompt>
		<!-- S 热门歌曲 -->


	</div>
</template>

<script>
//导入头部组件HeaderTab
import HeaderTab from '@/components/HeaderTab.vue';

//载入搜索栏
import Lookingfor from '@/components/base/lookingfor/Lookingfor';

//载入热门歌曲
import Prompt from '@/components/base/prompt/Prompt';
	export default {
		data(){
			return {

			}

		},
		methods:{

		},
		components:{
			HeaderTab,
			Lookingfor,
			Prompt
		
		}

	}
	
</script>

<style lang="scss">

</style>