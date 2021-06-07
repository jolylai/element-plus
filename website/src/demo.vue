<template>
  <demo-block>
    <template #source>
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </template>

    <template #highlight>
      <pre><code class="language-html">&lt;el-progress :percentage=&quot;50&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; :format=&quot;format&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;

&lt;script&gt;
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`
      },
    },
  }
&lt;/script&gt;
</code></pre>
    </template>

    <div>
      <p>
        Progress 组件设置<code>percentage</code>属性即可，表示进度条对应的百分比，<strong>必填</strong>，必须在
        0-100。通过 <code>format</code> 属性来指定进度条文字内容。
      </p>
    </div>
  </demo-block>
</template>
<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
  },
}
</script>
