<template>
	<div class="mini-player">
		<!-- S 歌曲封面 -->
   	<div class="thumb playing">
   		<img :src="'https://y.gtimg.cn/music/photo_new/T002R300x300M000'+ getCurSong.musicData.albummid +'.jpg'">
   	</div>
   	<!-- E 歌曲封面 -->

   	<div class="song-info">
   		<h3 v-text="getCurSong.musicData.songname"></h3>
   		<span v-text="getCurSong.musicData.singer[0].name"></span>
   	</div>
 
   	<div class="song-operator">
   		<a href="javascript:" class="play-paused pause"  @click="playOrPause()"></a>
   		<a href="javascript:" class="song-list"></a>
   	</div>


	<!-- S 播放 -->
    <div class="audio">
      <audio class="player" :src="getPlaySrc" autoplay="autoplay"></audio>
    </div>
    <!-- E 播放 -->

	</div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';

	export default {
		data(){
			return {

			}

		},
  		computed:{
		    ...mapGetters([
		      'getPlaySrc',
		      'getCurSong',
       		  'getPlayState'
		    ])
  		},
  		methods:{
  			playOrPause(){
		      //audio实现播放与暂停
		      let audioNode = document.querySelector(".player");
		      let albumNode = document.querySelector(".thumb.playing");
		      let opBtnNode = document.querySelector(".play-paused");
		      if(!this.getPlayState){ //播放
		        albumNode.style.animationPlayState = 'running';
		        audioNode.play();
		        opBtnNode.setAttribute('class','play-paused pause');
		      }else{ //暂停
		        albumNode.style.animationPlayState = 'paused';
		        audioNode.pause();
		        opBtnNode.setAttribute('class','play-paused play');
		      }

		      this.setPlayState(!this.getPlayState);
		    },
		    ...mapMutations({
		      'setSrc':'setPlaySrc',
		      'setPlayState':'setPlayState'
		    })
		},
		components:{
		
		}

	}
	
</script>

<style lang="scss">
.mini-player{
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background: #101010;
  display: flex;
  align-items: center;
  padding-left:18px;
  box-sizing: border-box;
  
  .thumb{
    &.playing{
      animation:playCicle 5s linear infinite;
    }
  	img{
  		width:45px;
  		height:45px;
  		border-radius: 50%;
  	}
  }
  .song-info{
  	flex:1;
  	margin-left:16px;
    overflow: hidden;
  	h3{
  		color: #fff;
  		font-size:16px;
  		font-weight: 400;
      overflow: hidden;
      white-space:nowrap;
      text-overflow:ellipsis;
  	}
  	span{
  		color: #ccc;
  		font-size:12px;
  	}
  }
  .song-operator{
  	margin-right:10px;
  	.play-paused,.song-list{
		width:30px;
		height:30px;	
		display: inline-block;
  	}
    .play-paused{
      margin-right:16px;
    }
  	.play{
  		 background:url(../assets/icon/play.png) no-repeat;
  		background-size:100% 100%;
  	}
    .pause{
    	background:url(../assets/icon/pause.png) no-repeat;
     
      background-size:100% 100%;
    }
  	.song-list{
		  background:url(../assets/icon/list.png) no-repeat;
  		background-size:100% 100%;
  	}
  }
}

@keyframes playCicle{
  from{
    transform:rotateZ(0deg);
  }
  to{
    transform:rotateZ(360deg);
  }
}
</style>