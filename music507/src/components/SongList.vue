<template>
	<!-- S 列表 -->
	<div class="song-list-add" v-show="showState" @click.stop.self="close()">
		<!-- S 列表操作区 -->
	  	<div class="list-operator">
	  	 	<span class="play-mode">
		  	 	<i></i>
		  	 	顺序播放
	  	 	</span>
	  	 	<span class="delete-all"></span>
	  	</div>
		<!-- E 列表操作区 -->

		<!-- S 歌曲播放列表 -->
		<div class="song-wrapper">
			<div class="content">
				<div class="list-con">
					<div class="songs">
						<ul>
						<router-link :to="'/singer/' + song.musicData.songmid +'/'+ song.musicData.albummid" tag="div" v-for="(song,k) in getPlayList" :key="song.musicData.songid"  @click.native="modifyPlayInfo(song,k)">	
							<li :class="{active:getCurSongIndex == k}">
								<span class="song-name cur" >{{song.musicData.songname}}</span> 
								<span class="song-operator">
									<i class="icon-op icon-favorate"></i> 
									<i class="icon-op icon-delete"></i>
								</span>
							</li>
						</router-link>	
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- E 歌曲播放列表 -->
		<div class="close-list" @click="close()">关闭列表</div>
	</div>
	<!-- E 列表 -->
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
	export default {
		data(){
			return {

			}

		},
		props:{
			showState:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			...mapGetters([
				'getPlayList',
				'getCurSongIndex'
			])
		},
		methods:{
			//关闭歌曲列表弹出层
			close(){
				this.$emit('closesonglist',false);
			},
			//修改播放信息
			modifyPlayInfo(song,i){
				this.setCurSong(song);
				this.setCurSongIndex(i);
			},
			...mapMutations({
				'setCurSong':'setCurSong',
				'setCurSongIndex':'setCurSongIndex'
			})

		},
		components:{
		
		}

	}
	
</script>

<style lang="scss">
.song-list-add{
	position: fixed;
    left: 0;
    top: 0;
    z-index: 1001;
    width: 100%;
    height: 100vh;
    background: rgba(6,5,6,.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition:all .3s cubic-bezier(0.82, 0.28, 0.15, 1.01);
	.list-operator{
	    display: flex;
	    align-items: center;
	    height:60px;
	    background: #060506;
	    padding-left:25px;
	    .play-mode{
		    flex: 1;
		    font-size: 13px;
		    color: #8e8e8e;
		    line-height: 25px;
		    i{
		    	display: inline-block;
			    width: 25px;
			    height: 25px;
			    background: url(../assets/icon/mode.png) no-repeat;
			    background-size: 100% 100%;
			    vertical-align: middle;
			    margin-top: -2px;
		    }
	    }
	    .delete-all{
		    width: 18px;
		    height: 18px;
		    margin-right: 20px;
		    background: url(../assets/icon/delete_all.png) no-repeat;
		    background-size: 100% 100%;
	    }
	}
    .song-wrapper{
    	overflow: hidden;
    	background: #060506;
		height:300px;

		.songs{
			li{
				display: flex;
			    line-height: 30px;
			    padding: 2px 20px 2px 50px;
			    color:#fff;
			    .song-name{
			    	flex: 1;
    				position: relative;
    				font-size: 12px;
    				&::before{
    					content: "";
					    display: inline-block;
					    position: absolute;
					    left: -20px;
					    top: 50%;
					    margin-top: -6px;
					    width: 13px;
					    height: 13px;
    				}
			    }
			    &.active{
			    	.song-name{
			    		&::before{
			    			background: url(../assets/icon/play.png) no-repeat;
					    	background-size: 100% 100%;
			    		}
			    	}
			    }

			    .song-operator{
			    	display: flex;
			    	align-items: center;
			    	.icon-op{
			    		width: 15px;
					    height: 15px;
					    display: inline-block;
			    	}
			    	.icon-favorate{
			    		width: 13px;
					    height: 13px;
		    		    background: url(../assets/icon/like.png) no-repeat;
					    background-size: 100% 100%;
					    margin-right: 10px;
			    	}
			    	.icon-delete{
			    		background: url(../assets/icon/delete_red.png) no-repeat;
    					background-size: 100% 100%;
			    	}
			    }
			}
		}
    }

    .close-list{
    	line-height: 50px;
	    background: #101010;
	    color: #3e3d3d;
	    font-size: 15px;
	    text-align: center;
    }
}

// 转场动画
.songlist-enter-active,.songlist-leave{
	transform:translate3d(0,0,0);
}
.songlist-enter,.songlist-leave-to{
	transform:translate3d(0,100%,0);
}

</style>