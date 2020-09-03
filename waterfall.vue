<template>
	<view class="waterfall">
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159726893&di=bdb75cae901348e199bad76c845cb31e&imgtype=0&src=http%3A%2F%2Fimg.meishubaby.com%2Fp%2F2016-12-12%2F8dd90afc603a039bd4716980c92fe792.jpg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159726891&di=60f0fbd5f1169714346fdc6705cd2f2d&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fspider202061%2F483%2Fw750h1333%2F20200601%2F4d32-iumkapv9138427.jpg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159948074&di=f972e43703e66b211d530e98ec4b0bbf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F08%2F20150708085647_jsJYa.jpeg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159726867&di=0ed854bcb7016ccf984e783a84c192c2&imgtype=0&src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F201903%2F25%2F171556cp3hezcddoynclht.jpg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159726863&di=518f98fca0c6dce907d5db581e99bd4f&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F01%2F20140601135641_s8y8r.jpeg"></image>
		<image mode="widthFix" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2406642421,804954115&fm=26&gp=0.jpg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159726849&di=2db468d8be922072fb0d3b112920672c&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110707%2F5252423_124848394546_2.jpg"></image>
		<image mode="widthFix" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=249692511,4045322243&fm=26&gp=0.jpg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159948073&di=e2d61a22e0dcae0a72dce33e294e2783&imgtype=0&src=http%3A%2F%2Fpic.haixia51.com%2Fpic%2F%3Fp%3D%2Fqianqianhua%2F20180519%2F02%2F1526667449-uzcvHGhBei.jpg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159929745&di=f4947de7060caa0a447ef411e7080d52&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201508%2F13%2F20150813081331_RVf5u.thumb.700_0.jpeg"></image>
		<image mode="widthFix" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2093406191,1828545140&fm=26&gp=0.jpg"></image>
		<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591159948078&di=ad476ff8aaf0fc76804963a991f7f0cb&imgtype=0&src=http%3A%2F%2Fwww.lucydraw.com%2Fdata%2Fupload%2Fd%2Ffile%2Fsumiao%2Fsumiaojiaocheng%2F2015-08-31%2Fd3d25eb24bbcec42572934bfd0bab2b0.jpg"></image>
	</view>
</template>

<script>
    
	export default {
		data() {
			return {
				list:[],
			}
		}
	}
</script>
<style>
	.waterfall{
		width:100vw;
		height: auto;
		-moz-column-count:2;
		-webkit-column-count:2;
		column-count:2;   
		-moz-column-gap: 2vw;
		-webkit-column-gap: 2vw;
		column-gap: 2vw;
		width: 96vw;
		margin:2vw auto;
	}
	.waterfall image{
		position:relative;
		width: 47vw;
		-moz-page-break-inside: avoid;
		-webkit-column-break-inside: avoid;
		break-inside: avoid;
	}
</style>
