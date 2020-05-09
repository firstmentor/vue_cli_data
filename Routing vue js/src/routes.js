//importing Components
import Home from './views/Home.vue'
import About from './views/About.vue'
import Blog from './views/Blog.vue'
import Content from './views/Content.vue'


export default [

  
    { path:"/",Component: Home},
    { path:"/about",Component: About},
    { path:"/blog",Component: Blog},
    { path:"/content",Component: Content}
  
  ];