<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	    return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      console.log("mobile");
      this.$router.replace('/mobile');
      const html = document.documentElement;
      const designWidth = 750;
				//const dpr = win.devicePixelRatio;	//dpr
				const refreshRem = () => {
					const clientWidth = html.clientWidth;
					if (clientWidth >= designWidth) { //给宽度一个最大值，如果设备的宽度已经超过设计稿的尺寸了，统一按一个值去算（传的第三个参数）
						html.style.fontSize = '100px';
					} else {
						//html.style.fontSize= 16 * clientWidth / 375 + 'px';
						html.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
					}
				};
				document.addEventListener('DOMContentLoaded', refreshRem);
    } else {
      console.log("pc");
      this.$router.replace("/pc");
    }
  }
}
</script>

<style>

</style>
