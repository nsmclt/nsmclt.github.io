
    document.write(`

<div id="popu1" style="position: fixed; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 999;">

    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -65%);width: 70vw; margin-left:calc(50% - 50vw);margin-right: calc(50% - 50vw);margin: 0 auto; height: 205px; background-color: #ffffff; padding: 10px;border-radius:12px;">

       <p style="text-align:center;transform:translate(0px,0px);color:#000">提示</p>

       <div style="width: 63vw; margin-left:calc(50% - 50vw);margin-right: calc(50% - 50vw);margin: 0 auto;font-size:12px;transform:translate(0px,-5px);">

       感谢您使用GJ-C,以下为用户交流群,欢迎加入!

       <p onclick="copyText('724469660')" style="font-size:12px;color:#000;transform:translate(0px,10px);">一群: 724469660</p>

       <p onclick="copyText('737977468')" style="font-size:12px;color:#000;transform:translate(0px,0px);">二群: 737977468</p>

       

       <div style="width: 63vw; margin-left:calc(50% - 50vw);margin-right: calc(50% - 50vw);margin: 0 auto;font-size:12px;transform:translate(0px,15px);text-align:center;">

         <button onclick="document.getElementById('popu1').style.display='none'" style="box-shadow:0 1px 2px rgba(0,0,0,0.15);border:0px solid;color:#fff;border-radius:30px;width:100%;height:30px;font-size:11px;background-color:#1E9fff;">确定</button>

         <button onclick="document.getElementById('popu1').style.display='none'" style="border:0px solid;color:grey;border-radius:30px;width:100%;height:30px;font-size:11px;background-color:#fff;">取消</button>

       </div>

    </div>

    </div> `);

    
