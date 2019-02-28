'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/posts', 'PostController.index')  

Route.post('/posts', 'PostController.store')

Route.get('/posts/create','PostController.create')

/*Route.get('/posts/:id', ({ params }) =>{
	return `You are watching post ${ params.id }`   //return 一个字符模板
})*/
Route.get('/posts/:id','PostController.show')

/*Route.patch('/posts/:id', ({ params })=>{
	return `Post ${ params.id } has been updated.`
})*/
Route.patch('/posts/:id','PostController.update')

/*Route.delete('/posts/:id',({ params })=>{
	return `Post ${ params.id } has been removed.`
})*/
Route.delete('/posts/:id','PostController.destroy')

Route.get('/posts/:id/edit','PostController.edit')

//渲染 home.edge 试图的路径
/*Route.get('/home',({ view }) => {
	return view.render('home')
})
*/