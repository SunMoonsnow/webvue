<template>
  <transition name="playSong">
    <div class="play-song">
      <!-- S 歌曲播放头部 -->
      <div class="header">
          <h1><i @click="back"></i>{{getCurSong.musicData.singer[0].name}}</h1>
          <span>{{getCurSong.musicData.songname}}</span>
      </div>
      <!-- E 歌曲播放头部 -->

      <!-- S 歌曲播放封面-->
      <div class="thumb playing" >
        <img :src="'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + getCurSong.musicData.albummid +'.jpg?max_age=2592000'">
      </div>
      <!-- E 歌曲播放封面-->

      <!-- S 歌曲播放选择按钮-->
      <div class="opt-btn">
        <a href="javascript:void(0);" class="mode"></a>
        <a href="javascript:void(0);" class="prev"></a>
        <a href="javascript:void(0);" class="playPause play" @click="playOrPause()"></a>
        <a href="javascript:void(0);" class="next"></a>
        <a href="javascript:void(0);" class="like"></a>
      </div>
      <!-- E 歌曲播放选择按钮-->

      <!-- S 歌曲播放背景-->
      <div class="bg-album">
        <img :src="'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + getCurSong.musicData.albummid +'.jpg?max_age=2592000'">
      </div>
      <!-- E 歌曲播放背景-->
   
    </div>
  </transition>
</template>

<script>
//引入jsonp
import jsonp from 'jsonp';
//引入api接口地址文件
import api from '@/api/songApi';

import {mapGetters,mapMutations} from 'vuex';

export default {
  name: '',
  data(){
    return {
    	smid:'',
    	mid:'',
    	src:''
    }
  },
  computed:{
    ...mapGetters([
      'getCurSong',
      'getPlayState',
      'getPlaySrc'
      
    ])
  },
 created(){
  	//获取路由参数 sid歌曲 mid , 专辑封面 mid
  	this.smid = this.$route.params.smid;
  	this.mid = this.$route.params.mid;

  	//1、获取vKey
  	var url = api.vKeyApi + `&songmid=${this.smid}&filename=C400${this.smid}.m4a`;
  	jsonp(url,{param:'callback'},(err,data)=>{
  		let vkey = data.data.items[0].vkey;

  		//2、使用 smid和vKey取得歌曲播放地址
  		this.src = `http://dl.stream.qqmusic.qq.com/C400${this.smid}.m4a?vkey=${vkey}&guid=7120953682&uin=0&fromtag=66`;

      //3、添加播放地址到vuex
      this.setSrc(this.src);
      console.log(this.getPlaySrc);
  	});

  },
  methods:{

    //返回上一级目录
      back(){
        this.$router.go(-1);
      },
      //切换暂停播放
      playOrPause(){

        //audio播放
        let audioNode = document.querySelector('.player');
        let thumbNode = document.querySelector('.thumb');
        let btnNode = document.querySelector('.playPause');
        if(!this.getPlayState){//播放
          thumbNode.style.animationPlayState = 'running';
          audioNode.play();
          btnNode.setAttribute('class','playPause play');
        }else{//暂停
          thumbNode.style.animationPlayState = 'paused';
          audioNode.pause();
          btnNode.setAttribute('class','playPause pause');
        }
        this.setPlayState(!this.getPlayState);
        

      },
      ...mapMutations({
        'setSrc':'setPlaySrc',
        'setPlayState':'setPlayState'
      })
   
    
  }
}
</script>

<style lang="scss">
.play-song {
  overflow-x: hidden;
  transition:all 0.3s cubic-bezier(0.25, 0.1, 0.07, 2.34);
  .header {
    text-align: center;
    color: #fff;
    position: relative;
    z-index: 999;
    h1{
      font-weight: 400;
      font-size: 22px;
      line-height: 55px;

      i{
        display: inline-block;
        width: 25px;
        height: 25px;
        padding: 15px;
        background: url(../assets/icon/arrow_down.png) no-repeat;
        background-size: 25px 25px;
        background-position: 50%;
        position: absolute;
        left: 0;

      }
    }
    span{
      font-size: 15px;
      text-align: center;
      color: #fff;
      

    }
  }
  .thumb {
    text-align: center;
    margin-top: 15px;
    position: relative;
    z-index: 999;
    animation:playCicle 10s linear infinite;
    @keyframes playCicle{
      0% {
      transform: rotateZ(0deg);
      }
      100% {
      transform: rotateZ(1turn);
      }
    }
    img{
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 10px solid #000;
    }
  }
  .opt-btn {
    display: flex;
    position: fixed;
    z-index: 999;
    bottom: 50px;
    width: 100%;
    justify-content: space-around;
    a{
      width:30px;
      height:30px;
    }

    .mode {
      background:url(../assets/icon/mode.png) no-repeat;
      background-size: 30px 30px;
    }
    .prev {
      background:url(../assets/icon/prev.png) no-repeat;
      background-size: 30px 30px;
    }
    .pause {
      background:url(../assets/icon/pause.png) no-repeat;
      background-size: 30px 30px;
    }
    .next {
      background:url(../assets/icon/next.png) no-repeat;
      background-size: 30px 30px;
    }
    .like {
      background:url(../assets/icon/like.png) no-repeat;
      background-size: 30px 30px;
    }
    .play {
      background:url(../assets/icon/play.png) no-repeat;
      background-size: 30px 30px;
    }

  }
  .bg-album {
    background: #000;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    transform-origin: center center;
    img {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
    }
  }
  .audio {

  }

}
.playSong-enter-active,.playSong-leave{
  transform:translate3d(0,0,0);
}
.playSong-enter,.playSong-leave-to{
  transform:translate3d(0,100vh,0);
}

</style>