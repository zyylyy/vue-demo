<template>
	<div class="main">
		<el-container>
			<el-header>
				<de-header></de-header>
			</el-header>
			<el-container>
			    <el-aside width="200px">
			    	<de-nav></de-nav>
			    </el-aside>
				<el-container>
					<el-main>
						<de-breadcrumb></de-breadcrumb>
						<router-view/>
					</el-main>
				</el-container>
			</el-container>
			<el-footer>
				<de-footer></de-footer>
			</el-footer>
		</el-container>	    
	</div>
</template>
<script>

export default {
  name: 'DeMain'
}
</script>

<style>
    .main,.el-header,.el-footer{
    	padding: 0;
    }
</style>
