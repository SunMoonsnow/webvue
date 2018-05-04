<template>
	<div class="prompt">
		<div class="hotkey">
			<h2>热门歌曲</h2>
			<div class="hotkey-list">
				<span>病变</span>
				<span>说散就散</span>
				<span>体面</span>
				<span>空空如也</span>
				<span>牧马城市</span>
				<span>红昭愿</span>
				<span>烟火里的尘埃</span>
				<span>云长</span>
				<span>离人愁</span>
				<span>像我这样的人</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {

			}

		},
		methods:{

		},
		components:{
		
		}

	}
	
</script>

<style lang="scss">
.hotkey{
	margin-top: 30px;
	padding:0 20px;
	h2{
		color: #676767;
	    font-size: 15px;
	    text-indent: 5px;
	}
	.hotkey-list{
		color: #676767;
    	display: flex;
    	flex-wrap: wrap;
    	span{
    		padding: 4px 6px;
		    background-color: #121212;
		    margin: 5px;
		    border-radius: 8px;
		    font-size: 14px;
    	}
	}
}

</style>