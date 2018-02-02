<template>
	<div class="my-tabs">
      <div class="tabs-bar">
        <div class="tabs-bar-nav">
          <div class="tabs-tab" v-for="tab in tabList"
          :class="[tabIndex == tab.index ? 'tabs-active' : '']"
          @click="changeTab(tab)">
            {{tab.name}}
          </div>
        </div>
      </div>
      <div class="tabs-content">
        <slot></slot>
      </div>
  </div>
</template>
<script type="text/javascript">
	export default {
	  name: 'MyTabs',
	  props:
	  {
	    tabList: Array,
	    tabIndex: Number
	  },
	  data () {
	    return {
	    }
	  },
	  methods: {
	    changeTab: function (tab) {
	      this.$emit('changeTab', tab)
	    }
	  },
	  components: {
	     myTabs
	  }
	}
</script>