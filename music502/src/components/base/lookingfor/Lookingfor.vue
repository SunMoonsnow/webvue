<template>
	<div class="search">
		<div class="search-content">
			<input type="text" placeholder="搜索歌曲、歌手">
			<i></i>
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
.search-content{
	padding: 8px 0;
    text-align: center;
    background-color: #121212;
    margin: 0 5px;
    margin-top: 25px;
    border-radius: 8px;
    position: relative;
    margin-bottom: 20px;
    &::before{
    	
    	content: "";
	    display: inline-block;
	    width: 22px;
	    height: 22px;
    	background:url(./search.png) no-repeat;
	    background-size: 100% 100%;
	    vertical-align: middle;
	    margin-right: 5px
    }
    input{
    	width: 220px;
	    height: 20px;
	    font-size: 14px;
	    line-height: 20px;
	    background-color: transparent;
	    border: 0;
	    outline: 0;
	    color: #676767;
    }
    i{
    	display: inline-block;
	    width: 22px;
	    height: 22px;
	    background:url(./delete.png) no-repeat;
	    background-size: 100% 100%;
	    vertical-align: middle;
	    position: absolute;
	    right: 10px;
    }
}
</style>