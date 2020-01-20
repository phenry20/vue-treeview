<template lang="pug">
  #app
    .header
      h1 Tree View
      p A simple treeview component for Vuejs Apps
    .body
      div
        .expand-menu
          a(@click="expand") Expand All
          a(@click="collapse") Collapse All
        tree-view(:tree.sync="tree", :editable="true", :expanded="expanded")
      router-view
    .footer
      h5 MIT Licensed | Copyright &copy; 2019 Liang-Shih Lin
        a(href="https://github.com/ll931217/vue-treeview", target="_blank").source Source
</template>

<script>
import Tree from './tree.json'

export default {
  name: 'App',
  data () {
    return {
      tree: Tree,
      expanded: true
    }
  },
  methods: {
    collapse () {
      this.expanded = false
      console.log('[Collapse] Expanded:', this.expanded)
    },
    expand () {
      this.expanded = true
      console.log('[Expand] Expanded:', this.expanded)
    }
  }
}
</script>

<style lang="sass">
body
  background-color: #4a5259
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  width: 100vw
  overflow: hidden
  overflow-y: scroll

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: white
  min-width: 400px

  h1, p
    text-align: center
  
  h1
    margin-bottom: 0

  h5
    display: flex
    justify-content: space-around
    margin-right: 1em

    a.source
      &:link, &:active, &:visited
        color: orange
        text-decoration: none
      &:hover
        text-decoration: underline

  img
    height: 300px
    width: 400px
    border-radius: 10px
  
  .body
    display: grid
    grid-template-rows: auto
    grid-template-columns: 1fr 1fr
    grid-column-gap: 2em

    .expand-menu
      color: orange
      cursor: pointer
      display: flex
      justify-content: space-between
      margin-bottom: 1em

      a:link, a:active, a:visited
        text-decoration: none
      a:hover
        text-decoration: underline
</style>
