<template>
  <el-container>
    <page-header></page-header>
    <el-container>
      <left-menu :menuData="menuDatas"></left-menu>
      <el-container direction='vertical'>
        <page-context></page-context>
        <page-footer></page-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import pageHeader from '@/components/common/Header'
import pageFooter from '@/components/common/Footer'
import leftMenu from '@/components/common/LeftMenu'
import pageContext from '@/components/common/Context'

export default {
  name: 'MainPage',
  components: {pageHeader, pageFooter, leftMenu, pageContext},
  data () {
    return {
      msg: 'Login CMS System',
      menuDatas: [
        {
          path: '/context',
          name: 'context',
          menuShow: true,
          menuName: '内容管理',
          menuIcon: 'el-icon-menu',
          children: [
            {
              path: '/context/manage',
              name: 'contextManage',
              menuShow: true,
              menuName: '内容编辑',
              menuIcon: ''
            },
            {
              path: '/deploy/history',
              name: 'deployHistory',
              menuShow: true,
              menuName: '发布历史',
              menuIcon: ''
            }
          ]
        },
        {
          path: '/system',
          name: 'system',
          menuShow: true,
          menuName: '系统管理',
          menuIcon: 'el-icon-setting',
          children: [
            {
              path: '/menu/manage',
              name: 'menuManage',
              menuShow: true,
              menuName: '菜单管理',
              menuIcon: ''
            },
            {
              path: '/module/manage',
              name: 'moduleManage',
              menuShow: true,
              menuName: '模块管理',
              menuIcon: ''
            },
            {
              path: '/person/info',
              name: 'personInfo',
              menuShow: true,
              menuName: '个人信息',
              menuIcon: ''
            }
          ]
        }
      ]
    }
  }
}
</script>
