const User = () => import('@/views/acl/user/list')
const Role = () => import('@/views/acl/role/list')
const RoleAuth = () => import('@/views/acl/role/roleAuth')
const Permission = () => import('@/views/acl/permission/list')
const Attr = () => import('@/views/product/attr/list')
const Trademark = () => import('@/views/product/trademark/list')
const Spu = () => import('@/views/product/spu/list')
const Sku = () => import('@/views/product/sku/list')
const Order = () => import('@/views/order/list')
const Login = () => import('@/views/login/index')
const ClientUser = () => import('@/views/user/index')
const Category = () => import('@/views/category/list')
const Test = () => import('@/views/test/list')
const Test2 = () => import('@/views/test/test')

export default {
  Test2:{
    path:'test/test',
    component:Test2
  },
  Test:{
    path:'test/list',
    component:Test
  },

  User: {
    component: User,
    path: 'user/list'
  },
  Role: {
    path: 'role/list',
    component: Role,
  },
  RoleAuth: {
    path: 'role/auth/:id',
    component: RoleAuth,
  },
  Permission: {
    path: 'permission/list',
    component: Permission,
  },
  Attr: {
    path: 'attr/list',
    component: Attr,
  },
  Trademark: {
    path: 'trademark/list',
    component: Trademark,
  },
  Spu: {
    path: 'spu/list',
    component: Spu,
  },
  Sku: {
    path: 'sku/list',
    component: Sku,
  },
  Order: {
    path: 'order/list',
    component: Order,
  },
  Login: {
    path: 'list',
    component: Login,
  },
  ClientUser: {
    path: 'list',
    component: ClientUser,
  },
  Category: {
    path: 'list',
    component: Category,
  }
}