<template>
	<div class="markfdown">
		<mavon-editor ref="md" style="height: 100%" :value="value" @change="changeMavonEditor" @imgAdd="imgAdd" @imgDel="imgDel"></mavon-editor>
	</div>
</template>
<script>

import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
	name: "editor",
    components: {
       mavonEditor,
    },
	data(){
		return {
			value: "mavonEditor",
			toolbars: {
				bold: true, // 粗体
				italic: true,// 斜体
				header: true,// 标题
				underline: true,// 下划线
				strikethrough: true,// 中划线
				mark: true,// 标记
				superscript: true,// 上角标
				subscript: true,// 下角标
				quote: true,// 引用
				ol: true,// 有序列表
				ul: true,// 无序列表
				link: true,// 链接
				imagelink: true,// 图片链接
				code: true,// code
				table: true,// 表格
				subfield: true,// 是否需要分栏
				fullscreen: true,// 全屏编辑
				readmodel: true,// 沉浸式阅读
				htmlcode: true,// 展示html源码
				help: true// 帮助
            },
		}
	},
	mounted(){

	},
	methods: {
		imgAdd(pos, $file){
			console.log(pos,$file,48)
			console.log('imgAdd')
			//this.$refs.md.$img2Url(pos, 1111)
		},
		imgDel(){
			console.log('imgDel')
		},
		changeMavonEditor(v,v2,v3){
			console.log(v)
			console.log(v2)
			console.log(v3)
		},
       // 绑定@imgAdd event
        $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           axios({
               url: 'server url',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
               $vm.$img2Url(pos, url);
           })
        }
	},
}
</script>
<style>
	.markfdown {
		margin: auto;
		width: 80%;
		height: 580px;
		margin-top: 5rem;
	}
</style>