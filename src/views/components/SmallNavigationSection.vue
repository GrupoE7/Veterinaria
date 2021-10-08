<template>
  <div class="wrapper">
    <div id="menu">
      <div class="md-layout">
        
        
      </div>
      
    </div>
    <!-- end menu -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsive: false
    };
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 500) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>
