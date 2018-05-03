export const getPlaySrc = (state) => {
	//获取当前播放地址
	return state.playSrc;
}
export const getCurSong = (state)=>{
	//获取当前歌曲信息
	return state.curSong;
}
export const getPlayState = (state)=>{
	return state.playState;
}
