<template>
  <el-aside :span='8'>
    <el-menu :default-openeds="['/context']" router :default-active='$route.path' >
      <template v-for="(item, index) in menuData">
        <el-submenu :index="item.path" :key="index" v-if="item.menuShow && item.children && item.children.length > 1">
          <template slot="title"><i :class="item.menuIcon"></i>{{ item.menuName }}</template>
          <el-menu-item v-for="(itemChild, index) in item.children" :index="itemChild.path" :key="index">
            <span v-if="itemChild.menuShow">{{itemChild.menuName}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :key="index" :index="item.children[0].path" v-else-if="item.menuShow">
          {{item.children[0].menuName}}
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'LeftMenu',
  props: ['menuData'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
.el-aside {
  background-color: rgba(212, 226, 250, 0.315);
}
.el-aside {
  color: darkgray;
}
</style>
