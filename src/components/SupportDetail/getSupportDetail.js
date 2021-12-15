const supportsArr = {
    support1: {
      title: 'N-Color色板',
      time: '2021-08-12',
      content: `<p class="page">一、文件预设</p>
      <img src="../news/news1/1 (4).png" alt="" >
      <p>（1）尺寸设定：600*448 Pixel</p>
      <p>（2）色彩模式：RGB</p>
      <p>（3）分辨率72</p>
      <p>（4）建立N-Color色板：黑、蓝、绿、橙、红、黄、白（便于设计使用）</p>



      <p>指定为N-color色板</p>
      <p>方法1-载入我们提供的色表</p>
      <p>1.将我们提供的N-Color,存放置photoshop的颜色表资料夹中</p>
      <p>2.载入N-Color色板：</p>
      <p>点击【文件】→【存储为web所用格式】</p>
      <img src="../news/news1/1 (1).png" alt="" >

      <p>（1）颜色浮动视窗选择</p>
      <p>（2）载入色彩表</p>
      <p>（3）选择N-Color.act文件</p>
      <p>（4）显示N-Color七色表示成功</p>

      <p>方法2-自制色表</p>
      <p>1.画板绘制7色</p>
      <img src="../news/news1/1 (3).png" alt="" >
      <p>2.点击【文件】→【存储为web所用格式】</p>

      <p>3.存储颜色表至本地（如以下步骤）</p>
      <p>（1）设定参数</p>
      <p>（2）颜色浮动视窗选择</p> 
      <p>（3）存储为颜色表</p>
      <p>（4）保存命名为N-Color即可（建议保存）</p>
      <img src="../news/news1/1 (2).png" alt="" >
      `,
    },

  };
  
  function getSupportDetail(vm) {
    return supportsArr[vm.$route.params.id];
  }
  
  export default getSupportDetail;
  