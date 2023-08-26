
   var gonggao = `
     <br>
    
    <p style="transform:translate(0px,8px);">公告</p>
    <p style="font-size:15px;">SANKU是GJ-C的子版本</p>
    <p style="font-size:15px;">开发这么个软件并不难</p>
    <p style="font-size:15px;">他妈的难的是离线变在线</p>
   `;
   document.getElementById("gonggao").innerHTML = gonggao;
   
   
   var yx = `
   
    <a href="https://s.readlo.com/?id=2c9fe67689b87c0a0189f7e42fe20449">
     <div class="yxapp">
       <p style="font-size:10px;transform:translate(0px,30px);display: flex;align-items: center;  justify-content: center; ">SK冒险记</p>
       <p style="font-size:13px;transform:translate(0px,65px);color:#777;text-align:center;">作者:SANKU</p>
      </div> 
      <p style="font-size:9px;transform:translate(0px,20px);color:#888;text-align:center;width:100%;">目前作者正在上学，这个小游戏是作者用scratch抽空制作的，当然软件也一样</p>
   </a>
    
    <br>
    <a href="https://s.readlo.com/?id=2c9fe676729e8e3001729e97b3850003">
     <div class="yxapp">
       <p style="font-size:10px;transform:translate(0px,30px);display: flex;align-items: center;  justify-content: center; ">植物大战僵尸3.0</p>
       <p style="font-size:13px;transform:translate(0px,65px);color:#777;text-align:center;">作者:刘嘉*</p>
      </div> 
      <p style="font-size:9px;transform:translate(0px,20px);color:#888;text-align:center;width:100%;">使用scratch制作的植物大战僵尸，与原版根本没有区别！</p>
   </a>
    
    <br>
    <a href="https://s.readlo.com/?id=2c9fe67673c13be30173ec83ba5617d2">
     <div class="yxapp">
       <p style="font-size:10px;transform:translate(0px,30px);display: flex;align-items: center;  justify-content: center; ">2D我的世界</p>
       <p style="font-size:13px;transform:translate(0px,65px);color:#777;text-align:center;">作者:未知</p>
      </div> 
      <p style="font-size:9px;transform:translate(0px,20px);color:#888;text-align:center;width:100%;">玩够了3D我的世界(minecraft)玩玩2D的吧！</p>
   </a>
   `;
   document.getElementById("yx").innerHTML = yx;
   
   
   
   document.getElementById("jcgx").innerHTML = `
   
    <div onclick="jcys()" style="background: url('./img/caos.png');background-size:90%;border-radius:7px; box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);width:86%;height:29px;text-align:center;margin:0 auto;">
      <p style="transform:translate(0px,6px);font-size:15px;">检查更新</p>
    </div>
   `;
   
   
     function jcys(){
       wc.alert("已是最新版本");
     }
        
     function jc(){
       wc.alert("检查到最新版本");
     }
   
