import Films from "@/views/Films/Index"
import Nowplaying from "@/views/Films/Nowplaying"
import ComingSoon from "@/views/Films/ComingSoon"
import Detail from "@/views/Films/Detail"

var film=[ {
    path:'/films',
    component:Films,
    children:[
      {path:'nowplaying',component:Nowplaying},
      {path:'comingSoon',component:ComingSoon}
    ]
},
{
  path:'/film/:filmId',
  component:Detail
},]
export default film
