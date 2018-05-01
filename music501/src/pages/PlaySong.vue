<template>
  <div class="play-song">
    <!-- S 歌曲播放头部 -->
    <div class="header">
        <h1><i></i>薛之谦</h1>
        <span>演员</span>
    </div>
    <!-- E 歌曲播放头部 -->

    <!-- S 歌曲播放封面-->
    <div class="thumb">
      <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000">
    </div>
    <!-- E 歌曲播放封面-->

    <!-- S 歌曲播放选择按钮-->
    <div class="opt-btn">
      <a href="javascript:void(0);" class="mode"></a>
      <a href="javascript:void(0);" class="prev"></a>
      <a href="javascript:void(0);" class="pause"></a>
      <a href="javascript:void(0);" class="next"></a>
      <a href="javascript:void(0);" class="like"></a>
    </div>
    <!-- E 歌曲播放选择按钮-->

    <!-- S 歌曲播放背景-->
    <div class="bg-album">
      <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000">
    </div>
    <!-- E 歌曲播放背景-->

   	<div class="audio">
  		<audio class="" ="player" :src="src" autoplay="autoplay"></audio>
  	</div>
  </div>
</template>

<script>
//引入jsonp
import jsonp from 'jsonp';
//引入api接口地址文件
import api from '@/api/songApi';

export default {
  name: '',
  data(){
    return {
    	smid:'',
    	mid:'',
    	src:''
    }
  },
  created(){
  	//获取路由参数 smid歌曲 mid , 专辑封面 mid
  	this.smid = this.$route.params.smid;
  	this.mid = this.$route.params.mid;

  	//1、获取vKey
  	let url = api.vKeyApi + `&songmid=${this.smid}&filename=C400${this.smid}.m4a`;

  	jsonp(url,{param:'callback'},(err,data)=>{
  		let vkey = data.data.items[0].vkey;
  		
  		//2、使用 smid和vKey取得歌曲播放地址
  		this.src = `http://dl.stream.qqmusic.qq.com/C400${this.smid}.m4a?vkey=${vkey}&guid=7120953682&uin=0&fromtag=66`;
  	});

  	
  },
  methods:{
    
  }
}
</script>

<style lang="scss">
.play-song {
  overflow-x: hidden;
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
        background: url(../assets/icon/arrow_down) no-repeat;
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
    animation:playCicle 5s linear infinite;
    @keyframes playCicle
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(1turn);
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

    .mode {
      background:url(../assets/icon/mode) no-repeat;
      background-size: 30px 30px;
    }
    .prev {
      background:url(../assets/icon/prev) no-repeat;
      background-size: 30px 30px;
    }
    .pause {
      background:url(../assets/icon/pause) no-repeat;
      background-size: 30px 30px;
    }
    .next {
      background:url(../assets/icon/next) no-repeat;
      background-size: 30px 30px;
    }
    .like {
      background:url(../assets/icon/like) no-repeat;
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
</style>