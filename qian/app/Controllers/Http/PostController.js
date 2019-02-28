'use strict'

class PostController {
	//请求资源列表的时候，用index 方法
	index () {  //index 方法
		return `List of posts and qian weitao.`  //return一串文字  
	}

//创建 资源列表的时候，用store方法
   store (){
   	return `Post has been created`
   }
   //显示单个资源，用的控制器的方法是show
   show ({ params }){  // params 是路由的地址参数，从一个方法的cometasks对象参数中把它拿出来
     return `You are watching post ${ params.id }.`
   }
   //更新资源列表，用update方法
   update ({ params }){
   	return `Post ${ params.id } has been updated.` 
   }

   //删除资源请求，是用destroy方法
   destroy ({ params }){   //params是资源的Id
   	return `Post ${ params.id } has been removed.`
   }
   //创建资源需要添加一个表单，用create方法
   create (){ //返回一个创建资源用的表单
   	return `Create post.`
   }
   //edit方法, 根据路由地址中资源的id去从数据库中查询出某一个资源，把他们填充到编辑资源用的一个表单上，这样用户可以用表单来修改资源数据，
   //其次提交数据更新请求，会用update方法，得到更新之后的资源，然后把他们保存到数据库中
   edit ({ params }){
   	return `Editing post ${ params.id  }` 
   }
}

module.exports = PostController
