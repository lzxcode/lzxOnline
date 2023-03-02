<script setup>
import CustomComponent from '/components/autoScroll/autoScroll.vue'
</script>

# 自动循环滚动

用于内容的自动循环滚动

# 基础用法

通过 height 属性设置滚动高度，若不设置则默认 200px

<CustomComponent>
 <div class='div'>
  <div>1</div>
 <div>2</div>
 <div>3</div>
 <div>4</div>
 <div>5</div>
 <div>6</div>
 <div>7</div>
 </div>
</CustomComponent>

# API

# 属性

| 属性名 |    说明    |   类型 | 默认值 |
| ------ | :--------: | -----: | ------ |
| height | 滚动的高度 | string | 200    |
| mode | 滚动模式 | string | auto    |

<style>
  tbody{
    width:100%
  }
  .div div{
      text-align:center;
       background-color:aqua;
       margin-top:10px;
       height:40px
  }
</style>
