//Если вы смогли расшифровать лоадер,добро пожаловать,иначе,пиздуй отсюдова 
var GradientDrawable = android.graphics.drawable.GradientDrawable;
var TextView = android.widget.TextView;
var Environment = android.os.Environment;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var GradientDrawable = android.graphics.drawable.GradientDrawable;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var path = android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe";
var sdcard = android.os.Environment.getExternalStorageDirectory();
var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var MediaPlayer = android.media.MediaPlayer();
var Runnable = java.lang.Runnable;
var Button = android.widget.Button;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var Gravity = android.view.Gravity;
var ScrollView = android.widget.ScrollView;
var MotionEvent = android.view.MotionEvent;
var BufferedReader = java.io.BufferedReader;
var ByteBuffer = java.nio.ByteBuffer;
var ByteOrder = java.nio.ByteOrder;
var InputStreamReader = java.io.InputStreamReader;
var PixelFormat = android.graphics.PixelFormat;
var Instrumentation = android.app.Instrumentation;
var Handler = android.os.Handler;
var View = android.view.View;
var Dialog = android.app.Dialog;
var Window = android.view.Window;
var SeekBar = android.widget.SeekBar;
var ColorStateList = android.content.res.ColorStateList;
var EditText = android.widget.EditText;
var Toast = android.widget.Toast;
var TextWatcher = android.text.TextWatcher;
var EditorInfo = android.view.inputmethod.EditorInfo;
var opengles = javax.microedition.khronos.opengles;
var Thread = java.lang.Thread;
var Color = android.graphics.Color;
var Process = android.os.Process;
var Canvas = android.graphics.Canvas;
var Semaphore = java.util.concurrent.Semaphore;
var Matrix = android.graphics.Matrix;
var Bitmap = android.graphics.Bitmap;
var PorterDuff = android.graphics.PorterDuff;
var Region = android.graphics.Region;
var TextureView = android.view.TextureView;
var Paint = android.graphics.Paint;
var AndroidHttpClient = android.net.http.AndroidHttpClient;
var ByteArrayOutputStream = java.io.ByteArrayOutputStream;
var Character = java.lang.Character;
var FileInputStream = java.io.FileInputStream;
var OutputStreamWriter = java.io.OutputStreamWriter;
var LinkMovementMethod = android.text.method.LinkMovementMethod;
var ListView = android.widget.ListView;
var ArrayAdapter = android.widget.ArrayAdapter;
var EmbossMaskFilter = android.graphics.EmbossMaskFilter;
var BitmapDrawable = android.graphics.drawable.BitmapDrawable;
var LinearGradient = android.graphics.LinearGradient;
var LightingColorFilter = android.graphics.LightingColorFilter;
var TimeUnit = java.util.concurrent.TimeUnit;
var Shader = android.graphics.Shader;
var Path = android.graphics.Path;
var AlertDialog = android.app.AlertDialog;
var CheckBox = android.widget.CheckBox;
var Array1 = java.lang.reflect.Array;
var ImageView = android.widget.ImageView;
var Byte = java.lang.Byte;
var Executors = java.util.concurrent.Executors;
var HttpGet = org.apache.http.client.methods.HttpGet;
var ImageView = android.widget.ImageView;
var BitmapFactory = android.graphics.BitmapFactory;
var LinearLayout = android.widget.LinearLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var MediaPlayer = android.media.MediaPlayer;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var sdcard = new android.os.Environment.getExternalStorageDirectory;
var createFromFile = android.graphics.Typeface.createFromFile;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var R = android.R;
var Style = R.style;
var cc8 = !1;
var isDev = !1;
var key = "";

function urlRequest(link) {  
let url = new java.net.URL(link);  
let con = url.openConnection(); 
con.setRequestMethod("GET");    
let br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream()));  
let result = "", str;    
while(str = br.readLine()){   
result += str;    
}  
return result; 
}   
var pth=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Music/";

var dialogTitle="Music player";  //заголовок диалога

var dplayer;
function Ml(a,b){ModPE.langEdit(a,b)}
function cp(){
Ml("menu.copyright",copytext);
}


function shwDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
try{
var builder=new android.app.AlertDialog.Builder(ctx);
builder.setTitle(dialogTitle);
var scroll = new android.widget.ScrollView(ctx); 
var list=new java.io.File(pth).list(); //получаем массив с названиями файлов из папки, путь к которой мы указали ранее
builder.setItems(list, new android.content.DialogInterface.OnClickListener({
onClick:function(dialog,which){

var player=new android.media.MediaPlayer();

player.setDataSource(pth+list[which]);

try{dplayer.stop();}catch(e){}

try{
player.prepare();

player.start();
dplayer=player;
dplayer.setLooping(cc8);
}
catch(e){print("Воспроизведение невозможно.");}

//builder.create().show();

}
}));
builder.create().show();
}catch(e){clientMessage(e);}
}
}));
}
function SETAIM(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var menuLayout = new android.widget.LinearLayout(ctx);
    var menuScroll = new android.widget.ScrollView(ctx);
    var menuLayout1 = new android.widget.LinearLayout(ctx);
    menuLayout.setOrientation(1);
    menuLayout1.setOrientation(1);
    menuScroll.addView(menuLayout);
    menuLayout1.addView(menuScroll);
    
                    var bZ = new TextView(ctx);
                bZ.setText((android.text.Html.fromHtml('<b><font color="white">CHANGE </font></b><b><font color="red">MUSIC</font></b>')));
                bZ.setTextColor(Color.WHITE);
                bZ.setTextSize(16);
                bZ.setTypeface(font);
bZ.setPadding(8, 8, 8, 8);
                
               
                bZ.setGravity(Gravity.CENTER);
             //   bZ.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4.200, ctx.getWindowManager().getDefaultDisplay().getHeight() / 15));
                bZ["setBackground"](exitbg);
                bZ["getBackground"]()["setAlpha"](150);
                bZ.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
           shwDialog();
                    }
                }));
      
                menuLayout.addView(bZ);
    var btton = new android.widget.Button(ctx);
      btton.setText('Stop');
      btton.setTypeface(font);
                      btton.setTextColor(Color.WHITE);
                      btton["setBackground"](exitbg);                btton["getBackground"]()["setAlpha"](150);
      btton.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      //Your Code Here...
        try{
     
      dplayer.stop();
           
      }catch(err){print("Operation denied.");}
      }
      }));
      menuLayout.addView(btton);
      
    var cch8 = new android.widget.Switch(ctx);
      cch8.setText('Repeat (beta)');
      cch8.setTypeface(font);
      cch8.setTextColor(Color.WHITE);
      cch8.setPadding(8, 8, 8, 8);
                      cch8["setBackground"](exitbg);                cch8["getBackground"]()["setAlpha"](150);
      
      cch8.setChecked(cc8);
      cch8.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc8){
      cc8= !0;

      
      try{
      dplayer.setLooping(true);
           print("Repeat activated."); }
      catch(err){print("Operation denied.");}
      
      //Your Code Here...
      }else{
      cc8 = !1;
      //Your Code Here...

      
            try{
      dplayer.setLooping(false);
            print("Repeat deactivated.");}
      catch(err){print("Operation denied.");}
      
      
      }
      cch8.setChecked(cc8);
      }
      }));
      menuLayout.addView(cch8);

    

       
SETAIM1 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 3.5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.4, !0);

SETAIM1.setAnimationStyle(R.style.Animation_Dialog);
SETAIM1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor('#c8000000')));  

 SETAIM1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 40, 31);
    }catch(error){
    }
    }}));
    };

function simulateKey(a) {
    let t = new Thread(new Runnable({
        run: function () {
            try {
                let inst = new Instrumentation;
                inst.sendKeyDownUpSync(a)
            } catch (e) {
                clientMessage(e)
            }
        }
    }));
    t.start()
}
var dir = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/ModdingZeper");
var path = sdcard + "/games/com.mojang/minecraftpe/";
var font = "AAEAAAAPAIAAAwBwRFNJRwAAAAEAAJ7kAAAACEdERUYBxQD7AACe7AAAACRHUE9TFO0wIQAAnxAAAAe8R1NVQkR2THUAAKbMAAAAIE9TLzJrCii8AAABeAAAAGBjbWFwBga+sQAABQAAAAPGZ2x5Ztm+LpgAAApgAAA6CGhlYWQVedwRAAAA/AAAADZoaGVhBf0DEwAAATQAAAAkaG10eILnFVwAAAHYAAADKGtlcm4I4yiKAABEaAAAUp5sb2Nh2XfK6AAACMgAAAGWbWF4cADVAEoAAAFYAAAAIG5hbWXYBStRAACXCAAAA1dwb3N0FeW6EAAAmmAAAASEAAEAAAADAYn1DYaAXw889QADA+gAAAAA2J3bhQAAAADbsLtn/tr/aAM4A1QAAAADAAIAAAAAAAAAAQAAA+j/OAAAA0z+2v/EAzgAAQAAAAAAAAAAAAAAAAAAAMoAAQAAAMoASQAKAAAAAAABAAAAAAAAAAAAAAAAAAAAAAADAf4B9AAFAAgCigJYAAAASwKKAlgAAAFeADIBLAAAAAAFAAAAAAAAAKAAAkcAAABCAAAAAAAAAABVS1dOAAAAICISAyD/OADIA+gAyAAAAAEAAAAAAfQCvAAAACAAAgHuAFwBGgAAAkcAFAIkADICIgAwAiQAMgHuADIB4AAyAiIAMAIuADIA5AA1AggAFAImADIBwwAyAskAMgJDADICIgAwAgoAMgIiADACJwAyAiIAMAIFACECJgAyAkcAFAL9ABQCJAAZAkYAEQIrACwCIgAwAPYALQImADICIgAwAhAAGQImADICIgAwAfwAFAIiADACIgAwAI4ADQCtAA0ApwAZALkACwDQACYCBAAhANgAMgGdABECswAQAXIAFAFyABQA5QAqAOUAIQDiACMA5wAPAPcAEQD3AA0BIQAUAd8AEQFzADIBcwANAK0ADQCsAAwCIgAwAgYAGQGXABkBzQAZAfMAGQG1ABkBdwAyAXcAFAJJAB0CLAAjAk4AMAJHABQCRwAUAkcAFAJHABQCRwAUAkcAFANDABQCIgAwAkcAIwHuADIB7gAyAe4AMgHuADIA5AA1AOT/3gDkAAsA5P/1AkMAMgIiADACIgAwAiIAMAIiADACMQAxAiIAMAM1ADACCgAyAigAMgImADICJgAyAiYAMgImADIC/QAUAv0AFAL9ABQC/QAUAkYAEQJGABECRgARAkYAEQHBABkCTwArAgIAKAJYABoBDwARAAD/MAAA";
var fontFile = new java.io.File(path + "/ModdingZeper.ttf");
if (!fontFile.exists()) {
    fontFile.createNewFile();
    var fileOutputStream = new java.io.FileOutputStream(fontFile);
    fileOutputStream.write(android.util.Base64.decode(font, 0));
    fileOutputStream.close()
};
var font = new android.graphics.Typeface.createFromFile(path + "/ModdingZeper.ttf");

function WriteToFile(a, b) {
    var c = new File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + a);
    if (File(c).exists()) {
        FIS = new java.io.FileInputStream(c);
        Builder = new java.lang.StringBuilder();
        while ((str = FIS.read()) != -1) {
            Builder.append(java.lang.Character(str))
        }
        textex = String(Builder.toString());
        FIS.close()
    }
    FileWriter = new java.io.PrintWriter(new java.io.BufferedWriter(new java.io.FileWriter(c)));
    FileWriter.write(b);
    FileWriter.close()
}

function getLoad(a, b) {
    var c = null;
    try {
        var d = new java.io.BufferedReader(new java.io.FileReader(a));
        var f;
        while ((f = d.readLine()) != null) {
            if (f.split(":")[0] == b) c = f.split(":")[1]
        }
    } catch (e) {
        clientMessage(e + " #" + e.lineNumber)
    }
    return c
}
var aim = (ent) => {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
        var a = 0.5 + Entity.getX(ent);
        var b = Entity.getY(ent);
        var c = 0.5 + Entity.getZ(ent);
        var len = Math.sqrt(x * x + y * y + z * z);
        var y = y / len;
        var pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch)
        }
    }
}

function createBind(n, o, p) {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var c = android.widget.LinearLayout.LayoutParams
                var d = new LinearLayout(ctx);
                d.setOrientation(1);
                var f = !1;
                var g = 0;
                var h = 0;
                var i = 0;
                var j = 0;
                var k = new android.view.View.OnTouchListener({
                    onTouch: function (a, b) {
                        try {
                            if (!f) return !1;
                            switch (b.getAction()) {
                            case android.view.MotionEvent.ACTION_DOWN:
                                g = i - b.getRawX();
                                h = j - b.getRawY();
                                break;
                            case android.view.MotionEvent.ACTION_MOVE:
                                i = (b.getRawX() + g);
                                j = (b.getRawY() + h);
                                eval(o + ".update(i,j,-1,-1);");
                                break;
                            case android.view.MotionEvent.ACTION_UP:
                            case android.view.MotionEvent.ACTION_CANCEL:
                                f = !1;
                                break
                            }
                        } catch (e) {
                            clientMessage("Error:" + e)
                        }
                        return !0
                    }
                });
                var l = new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(60);
                        f = !0;
                        return !0
                    }
                });
                
              
                
                var m = new TextView(ctx);
                m.setGravity(android.view.Gravity.CENTER);
                m.setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
                m.setTextSize(12);
                m.setText(n);
                m.setOnTouchListener(k);
                m.setOnLongClickListener(l);
                m.setTypeface(font);
                m["setBackground"](exitbg);
                m["getBackground"]()["setAlpha"](150);
                m.setPadding(8, 8, 8, 8);
                m.setLayoutParams(new android.widget.LinearLayout.LayoutParams(dip(40), dip(40)));
                m.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        try {
                            if (p == "hitbox") {
                                if (!hitbox) {
                                    hitbox = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    hitbox = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "car") {
                                if (!cda) {
                                    cda = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    cda = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "ai") {
                                if (!aimbot) {
                                    aimbot = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    aimbot = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "net") {
                                if (!behind) {
                                    behind = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    behind = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "over") {
                                if (!hover) {
                                    hover = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    hover = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "hitboost") {
                                if (!hitboost) {
                                    hitboost = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    hitboost = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "tspin") {
                                if (!tspin) {
                                    tspin = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    tspin = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "hitaim") {
                                if (!hitaim) {
                                    hitaim = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    hitaim = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "tpauraed") {
                                if (!tpauraed) {
                                    tpauraed = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    tpauraed = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "killauraed") {
                                if (!killauraed) {
                                    killauraed = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    killauraed = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "back") {
                                if (!back) {
                                    back = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    back = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "rndaura") {
                                if (!rndaura) {
                                    rndaura = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    rndaura = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "ziga") {
                                if (!ziga) {
                                    ziga = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    ziga = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "bowaim") {
                                if (!bowaim) {
                                    bowaim = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    bowaim = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "critical") {
                                if (!critical) {
                                    critical = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    critical = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "crit") {
                                if (!crit) {
                                    crit = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    crit = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "beh2") {
                                if (!beh2) {
                                    beh2 = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    beh2 = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "triggerso") {
                                if (!triggers) {
                                    triggers = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    triggers = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "aimot") {
                                if (!aimot) {
                                    aimot = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    aimot = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "trace") {
                                if (!trace) {
                                    trace = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    trace = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "Flight") {
                                if (!Flight) {
                                    Flight = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    Flight = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "sped") {
                                if (!sped) {
                                    sped = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    sped = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "fly") {
                                if (!fly) {
                                    fly = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    fly = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "wall") {
                                if (!wall) {
                                    wall = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    wall = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "scall") {
                                if (!scall) {
                                    scall = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    scall = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "jets") {
                                if (!jets) {
                                    jets = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    jets = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "jetpack") {
                                if (!jetpack) {
                                    jetpack = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    jetpack = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "aug") {
                                if (!aug) {
                                    aug = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    aug = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
if (p == "tower") {
                                if (!tower) {
                                    tower = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    tower = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "nuker") {
                                if (!nuker) {
                                    nuker = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    nuker = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                            if (p == "bloy") {
                                if (!bfly) {
                                    bfly = !0;
                                    m.setTextColor(android.graphics.Color.parseColor("#A800FF"))
                                } else {
                                    bfly = !1;
                                    m.setTextColor(android.graphics.Color.WHITE)
                                }
                            }
                        } catch (e) {
                            clientMessage(e + ".#" + e.lineNumber)
                        }
                    }
                }));
                d.addView(m);
                eval(o + "=new android.widget.PopupWindow(d,RelativeLayout.LayoutParams.WRAP_CONTENT,RelativeLayout.LayoutParams.WRAP_CONTENT);");
                eval(o + ".setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));");
                eval(o + ".setBackgroundDrawable(bge);");
                eval(o + ".setAnimationStyle(android.R.style.Animation_Translucent);");
                eval(o + ".showAtLocation(ctx.getWindow().getDecorView(),Gravity.LEFT|Gravity.TOP,0,0);")
            } catch (err) {
                clientMessage("An error occured:" + err + err.lineNumber)
            }
        }
    }))
}
var time3 = 0;
function Nuker() {
    time3++;
    if (time3 >= 3) {
        time3 = 0;
        for (var xx = getPlayerX() - 2; xx <= getPlayerX() + 2; xx++) {
            for (var zz = getPlayerZ() - 2; zz <= getPlayerZ() + 2; zz++) {
                for (var yy = getPlayerY() - 2; yy <= getPlayerY() + 2; yy++) {
                    Level["destroyBlock"](xx, yy, zz)
                }
            }
        }
    }
}


function genset() {
    new java.lang.Thread({
        run: function () {
            try {
                var a = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt");
                let readed = (new java.io.BufferedReader(new java.io.FileReader(a)));
                let data = new java.lang.StringBuilder();
                let string;
                while ((string = readed.readLine()) != null) data.append(string + "\n");
                var b = data.toString();
                if (b.includes("key_key.attack:-99") || !b.includes("key_key.attack:81")) {
                    b = b.replace("key_key.attack:-99", "key_key.attack:81");
                    b = b.replace("key_key.drop:81", "key_key.drop:-99");
                    var c = new java.io.FileOutputStream(a, !1);
                    c.write(b.getBytes());
                    c.close();
                    clientMessage("Settings replaced.Restarting your MCPE");
                    net.zhuoweizhang.mcpelauncher.ui.NerdyStuffActivity.forceRestart(ctx)
                }
            } catch (e) {
                clientMessage(e)
            }
        }
    }).start()
}
var delayed = !1;
var delay = 0;
var triggers = !1;
var CPS = 20;
var triggersbind = !1;

function inito() {
    try {
        var a = new android.app.Instrumentation;
        var b = new java.lang.Thread(new java.lang.Runnable({
            run() {
                try {
                    android.os.Looper.prepare();
                    new android.os.Handler().postDelayed(new java.lang.Runnable({
                        run() {
                            try {
                                var a = new android.app.Instrumentation;
                                if (triggers == !0 && Player.getPointedEntity() != -1 && confirmScreenSafe()) {
                                    if (delay != 0 && delayed == !1) {
                                        java.lang.Thread.sleep(delay);
                                        delayed = !0
                                    };
                                    a.sendKeyDownUpSync(45)
                                } else {
                                    delayed = !1
                                }
                                if (CPS <= 0) {
                                    CPS = 1
                                }
                                new android.os.Handler().postDelayed(this, 1000 / CPS)
                            } catch (e) {
                                clientMessage(e + ' at #' + e.lineNumber);
                                inito()
                            }
                        }
                    }), 1000 / CPS);
                    android.os.Looper.loop()
                } catch (e) {
                    clientMessage(e)
                }
            }
        }));
        b.start()
    } catch (e) {
        clientMessage(e)
    }
}
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Thread = java.lang.Thread;
var Runnable = java.lang.Runnable;
var Linear = android.widget.LinearLayout;
var LinearLayout = android.widget.LinearLayout;
var Button = android.widget.Button;
var Text = android.widget.TextView;
var Scroll = android.widget.ScrollView;
var Grid = android.widget.GridView;
var Check = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Edittext = android.widget.EditText;
var Radio = android.widget.RadioGroup;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var Gravity = android.view.Gravity;
var Image = android.widget.ImageView;
var GridLayout = android.widget.GridLayout;
var Gradient = android.graphics.drawable.GradientDrawable;
var Color = android.graphics.Color;
var sdcard = new android.os.Environment.getExternalStorageDirectory();
var createFromFile = android.graphics.Typeface.createFromFile;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var FileInputStream = java.io.FileInputStream;
var InputStreamReader = java.io.InputStreamReader;
var MediaPlayer = android.media.MediaPlayer();
var FileReader = java.io.FileReader;
var select = null;
var BufferedReader = java.io.BufferedReader;
var sdcard = new android.os.Environment.getExternalStorageDirectory();
var createFromFile = android.graphics.Typeface.createFromFile;
var KeyEvent = android.app.event.KeyEvent;
var KfM = android.app.KeyboardFocusManager;
var KVd = android.app.KeyEventDispatcher
var WRAP_CONTENT = RelativeLayout.LayoutParams.WRAP_CONTENT;
var disTance = 10;

function showCoordinateGUI() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var c = new LinearLayout(ctx);
                c.setOrientation(1);
                coords_txt_view = new TextView(ctx);
                coords_txt_view.setText(" null ");
                coords_txt_view.setPadding(3, 3, 3, 3);
                coords_txt_view.setTextColor(Color.WHITE);
                coords_txt_view.setBackground(bge);
                coords_txt_view.setTypeface(font);
                coords_txt_view.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        coords_txt_view.setBackground(bgss)
                    }
                }));
                coords_txt_view.setOnTouchListener(new android['view']['View'].OnTouchListener({
                    onTouch: function (a, b) {
                        try {
                            if (!moving) {
                                return !1
                            };
                            switch (b.getAction()) {
                            case MotionEvent.ACTION_DOWN:
                                dx = mPosX - b.getRawX();
                                dy = mPosY - b.getRawY();
                                break;
                            case MotionEvent.ACTION_MOVE:
                                mPosX = b.getRawX() + dx;
                                mPosY = b.getRawY() + dy;
                                coords_txt_menu.update(mPosX, mPosY - 15, -1, -1);
                                break;
                            case MotionEvent.ACTION_UP:
                                ;
                            case MotionEvent.ACTION_CANCEL:
                                moving = !1;
                                break
                            }
                        } catch (e) {
                            clientMessage(e)
                        };
                        return !0
                    }
                }));
                coords_txt_view.setOnLongClickListener(new android['view']['View'].OnLongClickListener({
                    onLongClick: function (a, b) {
                        moving = !0;
                        return !0
                    }
                }));
                c.addView(coords_txt_view);
                coords_txt_menu = new android.widget.PopupWindow(c, WRAP_CONTENT, WRAP_CONTENT);
                coords_txt_menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
                coords_txt_menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.TOP | Gravity.LEFT, 0, 0)
            } catch (e) {
                clientMessage(e + " #" + e.lineNumber)
            }
        }
    }))
}
var bg = new Gradient();
bg.setColor(Color.parseColor("#2C373B"));
var bgs = new Gradient();
bgs.setColor(Color.parseColor("#1D282A"));
var bge = new Gradient();
bge.setColor(Color.parseColor("#2C373B"));
var bgss = new Gradient();
bgss.setColor(Color.parseColor("#FF0000"));
var othcfg = new Gradient();
othcfg.setColor(Color.TRANSPARENT);
othcfg.setStroke(5, Color.parseColor("#A800FF"));
othcfg.setCornerRadius(32);
var othcfgs = new Gradient();
othcfgs.setColor(Color.parseColor("#A800FF"));



function HitAimAttacked(a, b) {
    if (a != null) {
        var c = Entity.getX(a) - getPlayerX(),
            anistyn = Entity.getY(a) - getPlayerY(),
            mosie = Entity.getZ(a) - getPlayerZ();
        b != null && b instanceof Array && (c = Entity.getX(a) - b[0], anistyn = Entity.getY(a) - b[1], mosie = Entity.getZ(a) - b[2]);
        Entity.getEntityTypeId(a) != 63 && (anistyn += 0.5);
        var d = 0.5 + Entity.getX(a),
            treveyon = Entity.getY(a),
            bryahna = 0.5 + Entity.getZ(a),
            halaina = Math.sqrt(c * c + anistyn * anistyn + mosie * mosie),
            anistyn = anistyn / halaina,
            lowanna = Math.asin(anistyn);
        lowanna = lowanna * 180 / Math.PI, lowanna = -lowanna;
        var e = -Math.atan2(d - (Player.getX() + 0.5), bryahna - (Player.getZ() + 0.5)) * (180 / Math.PI);
        lowanna < 89 && lowanna > -89 && Entity.setRot(Player.getEntity(), e, lowanna)
    }
}
var Utils = {
    modsCount: 0,
    pagesCount: 0,
    Velocity: {
        calculateSpeed: function () {
            return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2))
        }
    },
    Block: {
        isLiquid: function (a) {
            if (a >= 8 && a <= 11) {
                return !0
            };
            return !1
        }
    },
    Player: {
    pointedX:function(){return Player.getPointedBlockX();},
pointedY:function(){return Player.getPointedBlockY();},
pointedZ:function(){return Player.getPointedBlockZ();},
        onGround: function () {
            var a = getPlayerY();
            while (a > 1) a -= 1;
            if (Math.round(a * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return !0;
            if (Math.round(a * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return !0;
            return !1
        },
        overGround: function () {
            var a = getPlayerY();
            while (a > 2) a -= 2;
            if (Math.round(a * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return !![];
            if (Math.round(a * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return !![];
            return ![]
        },
        isInWater: function () {
            if (Utils["Block"]["isLiquid"](getTile(Entity["getX"](getPlayerEnt()), Entity["getY"](getPlayerEnt()) - 1.65, Entity["getZ"](getPlayerEnt())))) {
                return !0
            } else {
                return !1
            }
        },
        isOnWater: function () {
            if (Utils["Block"]["isLiquid"](getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ()))) {
                return !0
            };
            return !1
        },
        isOnGround: function () {
            var y = Entity["getY"](getPlayerEnt());
            while (y > 1) {
                y -= 1
            };
            if ((Math["round"](y * 100) >= 61 && Math["round"](y * 100) <= 63) && getTile(Entity["getX"](getPlayerEnt()), Entity["getY"](getPlayerEnt()) - 1.65, Entity["getZ"](getPlayerEnt())) != 0 && !Utils["Block"]["isLiquid"](getTile(Entity["getX"](getPlayerEnt()), Entity["getY"](getPlayerEnt()) - 1.65, Entity["getZ"](getPlayerEnt())))) {
                return !0
            };
            if ((Math["round"](y * 100) >= 11 && Math["round"](y * 100) <= 13) && getTile(Entity["getX"](getPlayerEnt()), Entity["getY"](getPlayerEnt()) - 1.65, Entity["getZ"](getPlayerEnt())) != 0 && !Utils["Block"]["isLiquid"](getTile(Entity["getX"](getPlayerEnt()), Entity["getY"](getPlayerEnt()) - 1.65, Entity["getZ"](getPlayerEnt())))) {
                return !0
            } else {
                return !1
            }
        },
        isCollidedHorizontally: function () {
            var x = Entity["getX"](getPlayerEnt());
            var z = Entity["getZ"](getPlayerEnt());
            var a = Math["round"](x - 0.5);
            var b = Math["round"](z - 0.5);
            while (x < 1) {
                x += 1
            };
            while (z < 1) {
                z += 1
            };
            while (x > 1) {
                x -= 1
            };
            while (z > 1) {
                z -= 1
            };
            if (Math["round"](x * 100) == 31) {
                x -= 0.01
            };
            if (Math["round"](z * 100) == 31) {
                z -= 0.01
            };
            if (Math["round"](x * 100) == 69) {
                x += 0.01
            };
            if (Math["round"](z * 100) == 69) {
                z += 0.01
            };
            if (Math["round"](x * 100) == 30) {
                a--
            };
            if (Math["round"](z * 100) == 30) {
                b--
            };
            if (Math["round"](x * 100) == 70) {
                a++
            };
            if (Math["round"](z * 100) == 70) {
                b++
            };
            if (getTile(a, Entity["getY"](getPlayerEnt()), b) == 0 && getTile(a, Entity["getY"](getPlayerEnt()) - 1, b) == 0) {
                return !1
            };
            if (Block["getDestroyTime"](getTile(a, Entity["getY"](getPlayerEnt()) - 1, b)) <= 0.1 && Block["getDestroyTime"](getTile(a, Entity["getY"](getPlayerEnt()), b)) <= 0.1) {
                return !1
            };
            if (Math["round"](x * 100) == 30 || Math["round"](x * 100) == 70) {
                return !0
            };
            if (Math["round"](z * 100) == 30 || Math["round"](z * 100) == 70) {
                return !0
            };
            return !1
        }
    }
};

function simulate(a) {
    let t = new Thread(new Runnable({
        run: function () {
            try {
                let inst = new android.app.Instrumentation;
                inst.sendKeyDownUpSync(a)
            } catch (e) {}
        }
    }));
    t.start()
}
var ChestScan = {
    blocks: 0,
    finished: !1,
    scanning: !1
};
var findTick = 0;
var groundMode = !0;
var drawBox = !0;
var cheted = !0;
var radius = 5;
var chests = new Array();
var fCheckerThread = null;
var newChests = new Array();

function findChests() {
    if (ChestScan.scanning == !0) return;
    ChestScan.finished = !1;
    ChestScan.scanning = !0;
    ChestScan.blocks = 0;
    var b = Math.round(getPlayerX());
    var c = Math.round(getPlayerZ());
    var d = radius;
    var f = 0;
    var g = new Array();
    var h = [!1, !1, !1, !1];
    var i = new java.lang.Runnable({
        run: function () {
            for (var x = b - d; x < b; x++) {
                for (var z = c; z < c + d; z++) {
                    java.lang.Thread.sleep(1);
                    for (var y = 0; y < 127; y++) {
                        try {
                            if (getTile(x, y, z) == xrayt) g.push([x, y, z]);
                            f++
                        } catch (e) {
                            clientMessage("Error:" + e + "#" + e.lineNumber)
                        }
                    }
                }
            }
            h[0] = !0
        }
    });
    var t = new java.lang.Thread(i);
    t.start();
    var j = new java.lang.Runnable({
        run: function () {
            for (var x = b; x < b + d; x++) {
                for (var z = c; z < c + d; z++) {
                    java.lang.Thread.sleep(1);
                    for (var y = 0; y < 127; y++) {
                        try {
                            if (getTile(x, y, z) == xrayt) g.push([x, y, z]);
                            f++
                        } catch (e) {
                            clientMessage("Error:" + e + "#" + e.lineNumber)
                        }
                    }
                }
            }
            h[1] = !0
        }
    });
    var k = new java.lang.Thread(j);
    k.start();
    var l = new java.lang.Runnable({
        run: function () {
            for (var x = b - d; x < b; x++) {
                for (var z = c - d; z < c; z++) {
                    java.lang.Thread.sleep(1);
                    for (var y = 0; y < 127; y++) {
                        try {
                            if (getTile(x, y, z) == xrayt) g.push([x, y, z]);
                            f++
                        } catch (e) {
                            clientMessage("Error:" + e + "#" + e.lineNumber)
                        }
                    }
                }
            }
            h[2] = !0
        }
    });
    var m = new java.lang.Thread(l);
    m.start();
    var n = new java.lang.Runnable({
        run: function () {
            for (var x = b; x < b + d; x++) {
                for (var z = c - d; z < c; z++) {
                    java.lang.Thread.sleep(1);
                    for (var y = 0; y < 127; y++) {
                        try {
                            if (getTile(x, y, z) == xrayt) g.push([x, y, z]);
                            f++
                        } catch (e) {
                            clientMessage("Error:" + e + "#" + e.lineNumber)
                        }
                    }
                }
            }
            h[3] = !0
        }
    });
    var o = new java.lang.Thread(n);
    o.start();
    var p = new java.lang.Runnable({
        run: function () {
            var a = !1;
            a = chests.length == 0;
            while (!h[0] || !h[1] || !h[2] || !h[3]) {
                java.lang.Thread.sleep(250);
                ChestScan.blocks = f;
                if (a) chests = g
            }
            fCheckerThread = null;
            chests = g;
            ChestScan.finished = !0;
            ChestScan.scanning = !1
        }
    });
    fCheckerThread = new java.lang.Thread(p);
    fCheckerThread.start()
}

function crosshairAimAt(d, e) {
    if (d != null) {
        var x = Entity.getX(d) - Entity.getX(Player.getEntity());
        var y = Entity.getY(d) - Entity.getY(Player.getEntity());
        var z = Entity.getZ(d) - Entity.getZ(Player.getEntity());
        if (e != null && posinstanceofArray) {
            x = Entity.getX(d) - e[0];
            y = Entity.getY(d) - e[1];
            z = Entity.getZ(d) - e[2]
        }
        if (Entity.getEntityTypeId(d) != 63) y += 0.5;
        let a = 0.5 + Entity.getX(d);
        let b = Entity.getY(d);
        let c = 0.5 + Entity.getZ(d);
        let len = Math.sqrt(x * x + y * y + z * z);
        let y = y / len;
        let pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        let yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch)
        }
    }
}
var aug = !1;
var augbind = !1;
var toggled = !1;
var last = 0;
var killtarget = -1;
var Rangek = 8;
var Mode = "Multi";
var KPS = 200;

function getNearestEntity(a) {
    var b = list;
    var c = a;
    var d = null;
    for (var i = 0; i < b.length; i++) {
        var x = Entity.getX(b[i]) - getPlayerX();
        var y = Entity.getY(b[i]) - getPlayerY();
        var z = Entity.getZ(b[i]) - getPlayerZ();
        var e = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (e < c && e > 0 && Entity.getHealth(b[i]) >= 1) {
            c = e;
            d = b[i]
        }
    }
    return d
};

function swing() {
    var a = new android.app.Instrumentation;
    if (aug == !0 && confirmScreenSafe()) {
        if (Mode == "Single") {
            var b = getNearestEntity(Rangek);
            if (b != -1 && isValid(b)) {
                Entity.setCollisionSize(b, getDistance(b) * 2 + 2, getDistance(b) * 2 + 2);
                a.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q)
            }
        };
        if (Mode == "Switch") {
            var b = getNearestEntity(Rangek);
            if (b != -1 && isValid(b)) {
                Entity.setCollisionSize(b, getDistance(b) * 2 + 2, getDistance(b) * 2 + 2);
                a.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q);
                Entity.setCollisionSize(b, 0.8, 1.8)
            }
        };
        if (Mode == "Multi") {
            let nearestEntities = [];
            var c = list;
            c.forEach(function (e) {
                if (e != getPlayerEnt() && e != -1) {
                    if (getDistance(e) <= Rangek) {
                        nearestEntities.push(e)
                    }
                }
            });
            if (nearestEntities.length != 0) {
                Entity.setCollisionSize(nearestEntities[last], getDistance(nearestEntities[last]) * 2 + 2, getDistance(nearestEntities[last]) * 2 + 2);
                a.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q);
                last++
            };
            var d = nearestEntities.length - 1;
            if (last > d) {
                last = 0
            };
            c.forEach(function (e) {
                Entity.setCollisionSize(e, 0.8, 1.8)
            })
        }
    }
};

function kilka() {
    try {
        var a = new java.lang.Thread(new java.lang.Runnable({
            run() {
                try {
                    android.os.Looper.prepare();
                    new android.os.Handler().postDelayed(new java.lang.Runnable({
                        run() {
                            try {
                                if (aug == !0) swing();
                                new android.os.Handler().postDelayed(this, 1000 / KPS)
                            } catch (e) {
                                clientMessage(e + ' at #' + e.lineNumber);
                                kilka()
                            }
                        }
                    }), 1000 / KPS);
                    android.os.Looper.loop()
                } catch (e) {
                    clientMessage(e)
                }
            }
        }));
        a.start()
    } catch (e) {
        clientMessage(e)
    }
};

function getDistance(a) {
    var x = Player.getX();
    var y = Player.getY();
    var z = Player.getZ();
    var b = Entity.getX(a);
    var c = Entity.getY(a);
    var d = Entity.getZ(a);
    var e = Math.pow(b - x, 2);
    var f = Math.pow(c - y, 2);
    var g = Math.pow(d - z, 2);
    return Math.sqrt(e + f + g)
};

function ELEVATORKA() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var b = new LinearLayout(ctx);
                b.setOrientation(1);
                var c = new Button(ctx);
                c.setText("UP");
                c.setTextSize(15);
                c.setTypeface(font);
                c.setTextColor(android.graphics.Color.parseColor("#A800FF"));
                c.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                c.setBackground(bge);
                c.setPadding(20, 10, 20, 10);
                c.setOnClickListener(new View.OnClickListener({
                    onClick: function (a) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, ELEVUP, 0);
                        setVelY(getPlayerEnt(), 0)
                    }
                }));
                b.addView(c);
                var d = new android.widget.TextView(ctx);
                d.setTextSize(5);
                d.setText(" ");
                d.setTextColor(android.graphics.Color.TRANSPARENT);
                d.setGravity(android.view.Gravity.CENTER);
                b.addView(d);
                var c = new Button(ctx);
                c.setText("DOWN");
                c.setTextSize(15);
                c.setTypeface(font);
                c.setTextColor(android.graphics.Color.parseColor("#A800FF"));
                c.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                c.setBackground(bge);
                c.setPadding(20, 10, 20, 10);
                c.setOnClickListener(new View.OnClickListener({
                    onClick: function (a) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, -ELEVDOWN, 0);
                        setVelY(getPlayerEnt(), 0)
                    }
                }));
                b.addView(c);
                ELEVATORKA1 = new PopupWindow(b, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                ELEVATORKA1.setBackgroundDrawable(new ColorDrawable(Color.parseColor('#bf000000')));
                ELEVATORKA1.setAnimationStyle(R.style.Animation_Translucent);
                ELEVATORKA1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0)
            } catch (err) {
                clientMessage(err)
            }
        }
    }))
}

function f4b() {
    ctx.runOnUiThread(new Runnable({
        run: function () {
            try {
                var c = new android.widget.RelativeLayout(ctx);
                var d = android.widget.LinearLayout(ctx);
                d.setGravity(Gravity.CENTER);
                d.setBackground(bge);
                c.addView(d);
                d.setGravity(android.view.Gravity.CENTER);
                var f = new Button(ctx);
                f.setText('F5');
                f.setTypeface(font);
                f.setTextSize(12);
                f.setPadding(8, 8, 8, 8);
                f.setGravity(android.view.Gravity.CENTER);
                f.setLayoutParams(new android.widget.LinearLayout.LayoutParams(dip(40), dip(40)));
                f.setBackground(bge);
                f.setTextColor(android.graphics.Color.WHITE);
                f.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        try {
                            simulateKey(135)
                        } catch (e) {
                            simulateKey(135)
                        }
                    }
                }));
                f['setOnTouchListener'](new android['view']['View'].OnTouchListener({
                    onTouch: function (a, b) {
                        try {
                            if (!moving1) {
                                return !1
                            };
                            switch (b['getAction']()) {
                            case android['view']['MotionEvent']['ACTION_DOWN']:
                                dx1 = mPosX1 - b['getRawX']();
                                dy1 = mPosY1 - b['getRawY']();
                                break;
                            case android['view']['MotionEvent']['ACTION_MOVE']:
                                mPosX1 = (b['getRawX']() + dx1);
                                mPosY1 = (b['getRawY']() + dy1);
                                f4of['update'](mPosX1, mPosY1 - 15, -1, -1);
                                postionhix = mPosX1;
                                postionhiy = mPosY1;
                                break;
                            case android['view']['MotionEvent']['ACTION_UP']:
                                ;
                            case android['view']['MotionEvent']['ACTION_CANCEL']:
                                moving1 = !1;
                                break
                            }
                        } catch (e) {};
                        return !0
                    }
                }));
                f['setOnLongClickListener'](new android['view']['View'].OnLongClickListener({
                    onLongClick: function (a, b) {
                        moving1 = !0;
                        return !0
                    }
                }));
                d.addView(f);
                f4of = new android.widget.PopupWindow(c, dip(40), dip(40));
                f4of.setAnimationStyle(android.R.style.Animation_Translucent);
                f4of.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, postionhix, postionhiy)
            } catch (err) {
                clientMessage("An error occured:" + err + "Line:(" + err.lineNumber + ")")
            }
        }
    }))
}

function isStateMode() {
    return !1
};

function onModTick() {
    if (Entity.getHealth(getPlayerEnt()) < 5) {
        Level.executeCommand(ggg, !0);
        Entity.setHealth(getPlayerEnt(), 5)
    }
}
var tick = 0;
var health = Entity.getHealth(getPlayerEnt());

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function () {
                    try {

                        if (triggers == !0) {
                            if (togle == !1) {
                                togle = !0;
                                inito()
                            }
                        }
                        if (aug == !0) {
                            if (ogle == !1) {
                                ogle = !0;
                                kilka()
                            }
                        }
                        if (isStateMode() == !1 && command == !0) {
                            onModTick()
                        }
                        if (cheted == !1) {
                            chests = [];
                            newChests = []
                        }
                        if (cheted) {
                            if (ChestScan.scanning == !1) findTick++;
                            if (findTick >= 33 * radius / 3) {
                                findTick = 0;
                                if (fCheckerThread == null) findChests();
                            }
                        }
                        if (sped == !0) {
                            for (var i = 1; i < 256; i++) {
                                Block.setFriction(i, 0.3)
                            }
                        }
                        if (sped == !1) {
                            for (var i = 1; i < 256; i++) {
                                Block.setFriction(i, 0.6000000238418579)
                            }
                        }
                        if (beh2 == !0) {
                            if (btarget != null && btarget != -1 && getDistance(btarget) <= 16) {
                                var x = Entity.getX(btarget);
                                var y = Entity.getY(btarget);
                                var z = Entity.getZ(btarget);
                                var a = Entity.getYaw(btarget) % 360 * Math.PI / 180;
                                var b = Entity.getPitch(btarget) % 180 * Math.PI / 90;
                                if (x != 0 && y != 0 && z != 0) {
                                    Entity.setPosition(getPlayerEnt(), (x + Math.sin(a) * gaps), y + Math.sin(b) * gaps, (z - Math.cos(a) * gaps));
                                    setVelY(getPlayerEnt(), 0)
                                }
                            }
                        }
                        if (aimbot == !0) {
                            if (aimtarget != -1) {
                                if (getDistance(aimtarget) <= intaim) {
                                    aim(aimtarget)
                                }
                            }
                        }
                        if (Flight == !0) {
                            setVelY(Player.getEntity(), -0.0000000000000000001);
                            let b = ((Entity.getPitch(Player.getEntity()) + 90) * Math.PI) / 180;
                            let a = ((Entity.getYaw(Player.getEntity()) + 90) * Math.PI) / 180;
                            let x = Math.sin(b) * Math.cos(a);
                            let y = Math.cos(b);
                            let z = Math.sin(b) * Math.sin(a);
                            setVelX(Player.getEntity(), x * speed);
                            setVelZ(Player.getEntity(), z * speed);
                            Entity.setPositionRelative(Player.getEntity(), 0, 0.00000000050, 0)
                        }
                        if (aimot == !0) {
                            Render.glSurface.requestRender()
                        }
                        if (trace == !0) {
                            Render.glSurface.requestRender()
                        }
                        if (cheted == !0) {
                            Render.glSurface.requestRender()
                        }
                    } catch (e) {
                        clientMessage("Error:" + e + "#" + e.lineNumber)
                    }
                    eval(rptask())
                }
            }), 1)
        }
    }))
}
rptask();
var cyan = "#00EDFF";
var cyanb = "#2C373B";
var cyans = "#1D282A";
var white = "#FFFFFF";
var black = "#000000";
var red = "#FF0000";
var green = "#51A100";
var yellow = "#FFED24";
var purple = "#A800FF";
var grey = "#212121";
var amber = "#FFBF00";
var orange = "#FFA500";
var i = 1;
var postionx = 0;
var postiony = 0;
var moving = !1;
var moving1 = !1;
var dx = 0;
var dx1 = 0;
var dy = 0;
var dy1 = 0;
var mPosX = 0;
var mPosX1 = 0;
var mPosY = 0;
var mPosY1 = 0;
var hitbox = !1;
var collisionbox = !1;
var colisionx = 7;
var colisiony = 10;
var distance = 6;
var postionhix = 0;
var postionhiy = 0;
var bindh = !1;
var aimbot = !1;
var sensitivity = 80;
var time = 13;
var head = !1;
var body = !0;
var postionaix = 0;
var postionaiy = 0;
var binda = !1;
var akb = !1;
var bindkb = !1;
var behind = !1;
var gapg = 2.1;
var distanc = 5;
var bindb = !1;
var targethud = !1;
var player = !1;
var mobs = !1;
var distancesss = 8;
var bindt = !1;
var cda = !1;
var bindcda = !1;
var hitboost = !1;
var hitboostbind = !1;
var hitaim = !1;
var hitaimbind = !1;
var Flight = !1;
var speed = 0.5;
var postionfx = 0;
var postionfy = 0;
var bindf = !1;
var fly = !1;
var postionflx = 0;
var postionfly = 0;
var bindfl = !1;
var wall = !1;
var wallbind = !1;
var tpauraed = !1;
var tpauraedbind = !1;
var scall = !1;
var scallbind = !1;
var killauraed = !1;
var killauraedbind = !1;
var hitxxx = 2.1;
hitTimer = hitxxx;
var back = !1;
var backbind = !1;
var rndaura = !1;
var rndaurabind = !1;
var bowaim = !1;
var bowaimbind = !1;
var baimRange = 150;
var critical = !1;
var criticalbind = !1;
var crit = !1;
var critbind = !1;
var vel = 1;
var i = 0;
var behindbind = !1;
var hover = !1;
var hoverbind = !1;
var tspin = !1;
var range = 3;
var spins = 2.1;
var targetsp = -1;
var fakeYaw = 0;
var tspinbind = !1;
var beh2 = !1;
var beh2bind = !1;
var gap = 2.1;
var gaps = 2;
var btarget = -1;
var aimtarget = -1;
var hittarget = -1;
var intaim = 3;
var time = 0;
var time = 2.0;
var jets = !1;
var jetsbind = !1;
var FOV = 1;
var jetpack = !1;
var jetpackbind = !1;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var f4 = !1;
var elev = !1;
var ELEVUP = 1.5;
var ELEVDOWN = 1.5;
var sped = !1;
var spedbind = !1;
var list = [];
var fakelist = [];
var started = !1;
var elist = !1;
var loxtimer = 0;
var active = !0;
var seo = 2;
var seob = 1.4;
var ses = 2;
var min = 0;
var max = 100000;
var full = !1;
var haste = !1;
var esped = !1;
var aimot = !1;
var ziga = !1;
var zigabind = !1;
var trace = !1;
var coordsGUI = !1;
var cortarget = -1;
var cheted = !1;
var xrayz = 0;
var xrayt = 56;
var texted = "";
var ocesp = "";
var command = !1;
var ggg = "/spawn"
var aimotbind = !1;
var togle = !1;
var ogle = !1;
var tracebind = !1;
var tower = !1;
var bindtw = !1;
var plbind = !1;
var nuker = !1;
var nukerbind = !1;
var bfly = !1;
var bflybind = !1;
var bunny = 10;
var screenChangeHook = (screen) => {
    sscreen = screen;
    if (screen.toString().indexOf("progress_screen") > -1) {
        Render.init();
    }
};
var askedForMessage = !1;
var sscreen = "";
var confirmScreenSafe = () => {
    if (sscreen == "hud_screen") {
        return !0
    } else {
        return !1
    }
}
var exitbg = new android["graphics"]["drawable"].GradientDrawable();
exitbg["setColor"](android["graphics"]["Color"]["parseColor"]("#1C1C1C"));
exitbg["setStroke"](5, android["graphics"]["Color"]["parseColor"]("#8B0000"));
exitbg["setCornerRadius"](15);

function confirmGameScreen() {
    if (confirmScreenSafe() || sscreen == "chat_screen" || sscreen == "survival_inventory_screen" || sscreen == "creative_inventory_screen" || sscreen == "small_chest_screen" || sscreen == "large_chest_screen") {
        return !0
    } else {
        return !1
    }
}

function aims(a, b) {
    if (a != null) {
        var c = Entity.getX(a) - getPlayerX();
        var d = Entity.getY(a) - getPlayerY();
        var e = Entity.getZ(a) - getPlayerZ();
        if (b != null && b instanceof Array) {
            c = Entity.getX(a) - b[0];
            d = Entity.getY(a) - b[1];
            e = Entity.getZ(a) - b[2]
        }
        if (Entity.getEntityTypeId(a) != 63) d += .5;
        var f = .5 + Entity.getX(a);
        var g = Entity.getY(a);
        var h = .5 + Entity.getZ(a);
        var i = Math.sqrt(c * c + d * d + e * e);
        var d = d / i;
        var j = Math.asin(d);
        j = j * 180 / Math.PI;
        j = -j;
        var k = -Math.atan2(f - (Player.getX() + .5), h - (Player.getZ() + .5)) * (180 / Math.PI);
        if (j < 89 && j > -89) {
            Entity.setRot(Player.getEntity(), k, j)
        }
    }
};
var clearName = (name) => {
    if (name != -1 && name != null && name != "" && name != undefined)
        return name.replace(/§1/g, "").replace(/§2/g, "").replace(/§3/g, "").replace(/§4/g, "").replace(/§5/g, "").replace(/§6/g, "").replace(/§7/g, "").replace(/§8/g, "").replace(/§9/g, "").replace(/§0/g, "").replace(/§a/g, "").replace(/§b/g, "").replace(/§c/g, "").replace(/§d/g, "").replace(/§e/g, "").replace(/§f/g, "").replace(/§l/g, "").replace(/§k/g, "").replace(/§o/g, "").replace(/§r/g, "").replace("[", "").replace("]", "").replace(" ", "")
    else return "0"
};

function setti() {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function () {
            try {
                GetTextj = new android.widget.PopupWindow();
                var b = new android.widget.LinearLayout(ctx);
                var c = new android.widget.EditText(ctx);
                var d = new android.app.Dialog(ctx);
                var f = new android.widget.Button(ctx);
                var g = new android.widget.Button(ctx);
                d.setContentView(b);
                b.setOrientation(android.widget.LinearLayout.VERTICAL);
                d.show();
                b.addView(c);
                b.addView(f);
                b.addView(g);
                c.setText("");
                c.setHint(ggg);
                f.setText("CLOSE&SAVE");
                g.setText("Cancel");
                f.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function (a) {
                        ggg = c.getText();
                        d.dismiss()
                    }
                });
                g.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function (a) {
                        d.dismiss()
                    }
                });
                GetTextj.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetTextj.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetTextj.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0)
            } catch (e) {}
        }
    })
}
var Render = {
    File: {
        Ingenious: android.os.Environment.getExternalStorageDirectory() + "/o/",
        getTextFromFile: function (a) {
            let readed = (new java.io.BufferedReader(new java.io.FileReader(a)));
            let data = new java.lang.StringBuilder();
            let string;
            while ((string = readed.readLine()) != null) data.append(string + "\n");
            return data.toString()
        }
    },
    getFloatBuffer: function (a) {
        var b = java.nio.ByteBuffer.allocateDirect(a.length * 4);
        b.order(java.nio.ByteOrder.nativeOrder());
        var c = b.asFloatBuffer();
        var c = b.asFloatBuffer();
        c.put(a);
        c.position(0);
        return c
    },
    getShortBuffer: function (a) {
        var b = java.nio.ByteBuffer.allocateDirect(a.length * 2);
        b.order(java.nio.ByteOrder.nativeOrder());
        var c = b.asShortBuffer();
        c.put(a);
        c.position(0);
        return c
    },
    renderer: null,
    glSurface: null,
    fov: 90,
    initted: !1,
    init: function () {
        let options = Render.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));
        options = options.split("\n");
        options.forEach(function (a) {
            let suboption = a.split(":");
            if (suboption[0] == "gfx_field_of_view") {
                Render.fov = suboption[1]
            }
        });
        this.renderer = new android.opengl.GLSurfaceView.Renderer({
            onSurfaceCreated: function (a, b) {
                var c = javax.microedition.khronos.opengles.GL10;
                a.glEnable(javax.microedition.khronos.opengles.GL10.GL_TEXTURE_2D);
                a.glShadeModel(javax.microedition.khronos.opengles.GL10.GL_SMOOTH);
                a.glClearColor(0, 0, 0, 0);
                a.glClearDepthf(1);
                a.glEnable(javax.microedition.khronos.opengles.GL10.GL_DEPTH_TEST);
                a.glDepthFunc(javax.microedition.khronos.opengles.GL10.GL_LEQUAL);
                a.glHint(javax.microedition.khronos.opengles.GL10.GL_PERSPECTIVE_CORRECTION_HINT, javax.microedition.khronos.opengles.GL10.GL_NICEST)
            },
            onSurfaceChanged: function (a, b, c) {
                var d = javax.microedition.khronos.opengles.GL10;
                a.glMatrixMode(d.GL_PROJECTION);
                a.glLoadIdentity();
                android.opengl.GLU.gluPerspective(a, Render.fov, b / c, 0.1, 100);
                a.glMatrixMode(d.GL_MODELVIEW);
                a.glLoadIdentity()
            },
            onDrawFrame: function (b) {
                var c = javax.microedition.khronos.opengles.GL10;
                b.glClear(c.GL_COLOR_BUFFER_BIT | c.GL_DEPTH_BUFFER_BIT);
                b.glLoadIdentity();
                b.glDisable(c.GL_LIGHTING);
                if (aimot == !0 || trace == !0 || cheted == !0) {
                    try {
                        var d = getYaw() % 360;
                        var f = getPitch() % 360;
                        var g = getPlayerX();
                        var h = getPlayerY() + 1;
                        var i = getPlayerZ();
                        var j = Math.sin(d / 180 * Math.PI);
                        var k = Math.cos(d / 180 * Math.PI);
                        var l = Math.sqrt(j * j + k * k) * Math.tan((f - 180) / 180 * Math.PI);
                        var m = g - j;
                        var n = i + k;
                        var o = h - l;
                        android.opengl.GLU.gluLookAt(b, g, h, i, m, o, n, 0, 1.0, 0);
                        let px = getPlayerX();
                        let py = getPlayerY();
                        let pz = getPlayerZ();
                        var p = list;
                        try {
                            p.forEach(function (a) {
                                let x = Entity.getX(a) - px;
                                let y = Entity.getY(a) - py;
                                let z = Entity.getZ(a) - pz;
                                let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
                                if (a != getPlayerEnt() && Entity.getEntityTypeId(a) == 63 && aimot == !0 && isValid(a)) {
                                    Render.drawBox(b, Entity.getX(a) - 0.5, Entity.getY(a) - 0.5, Entity.getZ(a) - 0.5, 0.9, 1.85, 0.9)
                                }
                                if (a != getPlayerEnt() && Entity.getEntityTypeId(a) == 63 && trace == !0 && isValid(a)) {
                                    Render.drawLine(b, Entity.getX(a) - 0.5, Entity.getY(a) - 0.5, Entity.getZ(a) - 0.5, getPlayerX(), 0, getPlayerZ())
                                }
                            });
                            if (cheted == !0) {
                                chests.forEach(function (a) {
                                    Render.drawBoxi(b, a[0] + 1 / 16, a[1] + 1, a[2] + 1 / 16, 1 / 16 * 15, 0.875, 1 / 16 * 15, ocesp)
                                })
                            }
                        } catch (e) {
                            clientMessage("Error:" + e + "#" + e.lineNumber)
                        }
                    } catch (e) {
                        clientMessage("RenderProblem:" + e)
                    }
                }
            }
        });
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function () {
                Render.glSurface = new android.opengl.GLSurfaceView(ctx);
                Render.glSurface.setZOrderOnTop(!0);
                Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
                Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
                Render.glSurface.setRenderer(Render.renderer);
                Render.glSurface.setRenderMode(0);
                ctx.getWindow().getDecorView().addView(Render.glSurface);
                Render.initted = !0
            }
        }))
    },
    drawBoxi(gl, x, y, z, xsize, ysize, zsize, targetu) {
        var GL10 = javax.microedition.khronos.opengles.GL10;
        var size = new Array(xsize, ysize, zsize);
        var vertices = [0, 0, 0, size[0], 0, 0, 0, 0, size[2], size[0], 0, size[2], 0, size[1], 0, size[0], size[1], 0, 0, size[1], size[2], size[0], size[1], size[2]];
        var vertexBuffer = Render.getFloatBuffer(vertices);
        var indices = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
        var indexBuffer = Render.getShortBuffer(indices);
        gl.glTranslatef(x, y, z);
        gl.glFrontFace(GL10.GL_CCW);
        gl.glEnable(GL10.GL_BLEND);
        gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
        gl.glLineWidth(4);
        if (targetu == "diamond") {
            gl.glColor4f(0, 1.0, 1.0, 0.5)
        }
        if (targetu == "chest") {
            gl.glColor4f(1, 0.6, 0.0, 0.5)
        }
        if (targetu == "zoloto") {
            gl.glColor4f(1.0, 1.0, 0.0, 0.5)
        }
        if (targetu == "iron") {
            gl.glColor4f(0.4, 0.4, 0.6, 0.5)
        }
        if (targetu == "spawner") {
            gl.glColor4f(0.1, 0.9, 0.1, 0.8)
        }
        if (targetu == "emerald") {
        gl.glColor4f(0.5, 0.3, 0.5, 0.8)
        }
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
        gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
        gl.glTranslatef(-x, -y, -z)
    },
    drawBox(gl, x, y, z, xsize, ysize, zsize) {
        var GL10 = javax.microedition.khronos.opengles.GL10;
        var size = new Array(xsize, ysize, zsize);
        var vertices = [0, 0, 0, size[0], 0, 0, 0, 0, size[2], size[0], 0, size[2], 0, size[1], 0, size[0], size[1], 0, 0, size[1], size[2], size[0], size[1], size[2]];
        var vertexBuffer = Render.getFloatBuffer(vertices);
        var indices = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
        var indexBuffer = Render.getShortBuffer(indices);
        gl.glTranslatef(x, y, z);
        gl.glFrontFace(GL10.GL_CCW);
        gl.glEnable(GL10.GL_BLEND);
        gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
        gl.glLineWidth(5);
        gl.glColor4f(0.1, 0.9, 0.1, 0.8);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
        gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
        gl.glTranslatef(-x, -y, -z)
    },
    drawBoxFilled(gl, x, y, z, xsize, ysize, zsize) {
        var GL10 = javax.microedition.khronos.opengles.GL10;
        var size = new Array(xsize, ysize, zsize);
        var vertices = [0, 0, 0, size[0], 0, 0, 0, 0, size[2], size[0], 0, size[2], 0, size[1], 0, size[0], size[1], 0, 0, size[1], size[2], size[0], size[1], size[2]];
        var vertexBuffer = Render.getFloatBuffer(vertices);
        var indices = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
        var indexBuffer = Render.getShortBuffer(indices);
        gl.glTranslatef(x, y, z);
        gl.glFrontFace(GL10.GL_CCW);
        gl.glEnable(GL10.GL_BLEND);
        gl.glEnable(GL10.GL_LINE_SMOOTH);
        gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
        gl.glLineWidth(5);
        gl.glColor4f(1, 1, 0, 0.8);
        gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
        gl.glDrawElements(GL10.GL_TRIANGLES, indices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
        gl.glDisable(GL10.GL_LINE_SMOOTH);
        gl.glTranslatef(-x, -y, -z)
    },
    drawLine: function (a, x, y, z, b, c, d) {
        let GL10 = javax.microedition.khronos.opengles.GL10;
        let size = new Array(b, c, d);
        let vertices = [0, 0, 0, b - x, c - y, d - z];
        let vertexBuffer = Render.getFloatBuffer(vertices);
        let indices = [0, 1];
        let indexBuffer = Render.getShortBuffer(indices);
        a.glTranslatef(x, y, z);
        a.glEnable(GL10.GL_BLEND);
        a.glDepthMask(!1);
        a.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
        a.glLineWidth(5);
        a.glColor4f(0.1, 0.9, 0.1, 0.8);
        a.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        a.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
        a.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
        a.glTranslatef(-x, -y, -z);
        a.glDepthMask(!0);
        a.glDisable(GL10.GL_LINE_SMOOTH)
    },
    drawLinei: function (a, x, y, z, b, c, d) {
        let GL10 = javax.microedition.khronos.opengles.GL10;
        let size = new Array(b, c, d);
        let vertices = [0, 0, 0, b - x, c - y, d - z];
        let vertexBuffer = Render.getFloatBuffer(vertices);
        let indices = [0, 1];
        let indexBuffer = Render.getShortBuffer(indices);
        a.glTranslatef(x, y, z);
        a.glEnable(GL10.GL_BLEND);
        a.glDepthMask(!1);
        a.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
        a.glLineWidth(5);
        a.glColor4f(2, 0.9, 0.1, 0.8);
        a.glEnableClientState(GL10.GL_VERTEX_ARRAY);
        a.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
        a.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
        a.glTranslatef(-x, -y, -z);
        a.glDepthMask(!0);
        a.glDisable(GL10.GL_LINE_SMOOTH)
    },
};

function sleep(a) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < a) {
        i++
    }
}

function confirmGameScreen() {
    if (confirmScreenSafe() || sscreen == "chat_screen" || sscreen == "survival_inventory_screen" || sscreen == "creative_inventory_screen" || sscreen == "small_chest_screen" || sscreen == "large_chest_screen") {
        return !0
    } else {
        return !1
    }
}
var isValid = (ent) => {
    if (Entity.getX(ent) != 0 && Entity.getY(ent) != 0 && Entity.getZ(ent) != 0) {
        return !0
    } else {
        return !1
    }
}

function scan() {
    var t = (new Date()).getTime();
    var f = new java.lang.Thread(new java.lang.Runnable({
        run() {
            try {
                android.os.Looper.prepare();
                fakelist = new Array();
                var g = "Only+";
                var h = !0;
                if (max > min) {
                    if (g == "Only+") {
                        for (var i = min; i <= max; i++) {
                            try {
                                if (Entity.getEntityTypeId(i) == 63) {
                                    if (i != Player.getEntity()) fakelist.push(i)
                                }
                            } catch (e) {
                                clientMessage(e+"@"+e.lineNumber);
                                break
                            }
                        }
                    };
                    var k = (new Date()).getTime();

                    function uniq_fast(a) {
                        var b = {};
                        var c = [];
                        var d = a.length;
                        var j = 0;
                        for (var i = 0; i < d; i++) {
                            var e = a[i];
                            if (b[e] !== 1) {
                                b[e] = 1;
                                c[j++] = e
                            }
                        }
                        return c
                    }
                    uniq_fast(fakelist);
                    list = fakelist;
                    if (h) clientMessage("ID FOUND PLAYER:" + list);
                    started = !1;
                    sleep(2500);
                    if (elist) {
                        started = !0;
                        scan()
                    }
                }
                android.os.Looper.loop()
            } catch (e) {
                clientMessage(e+"@"+e.lineNumber)
            }
        }
    }));
    f.start()
}

function toDirectionalVector(a, b, c) {
    a[0] = Math.cos(b) * Math.cos(c);
    a[1] = Math.sin(c);
    a[2] = Math.sin(b) * Math.cos(c)
}

function toDirectionalVector2(a, b, c) {
    a[0] = Math.cos(b) * Math.cos(c);
    a[1] = Math.sin(c);
    a[2] = Math.sin(b) * Math.cos(c)
}

function dip(a) {
    return Math.ceil(a * ctx.getResources().getDisplayMetrics().density)
}

function GU() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            try {
                var c = new android.widget.RelativeLayout(ctx);
                var d = new android.widget.LinearLayout(ctx);
                d.setOrientation(1);
                c.addView(d);
                var f = new Text(ctx);
                f.setText((android.text.Html.fromHtml('<b><font color="#A800FF">N</font></b><b><font color="white">iger</font></b><b><font color="#A800FF">H</font></b><b><font color="white">ack</font></b><b><font color="#A800FF">V</font></b><b><font color="white">1.0</font></b>')));
                f.setTextColor(Color.WHITE);
                f.setTextSize(15);
                f.setTypeface(font);
                f.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        menus();
                        i = 0;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(6)
                    }
                }));
                f['setOnTouchListener'](new android['view']['View'].OnTouchListener({
                    onTouch: function (a, b) {
                        try {
                            if (!moving) {
                                return !1
                            };
                            switch (b['getAction']()) {
                            case android['view']['MotionEvent']['ACTION_DOWN']:
                                dx = mPosX - b['getRawX']();
                                dy = mPosY - b['getRawY']();
                                break;
                            case android['view']['MotionEvent']['ACTION_MOVE']:
                                mPosX = (b['getRawX']() + dx);
                                mPosY = (b['getRawY']() + dy);
                                menue['update'](mPosX, mPosY - 15, -1, -1);
                                break;
                            case android['view']['MotionEvent']['ACTION_UP']:
                                ;
                            case android['view']['MotionEvent']['ACTION_CANCEL']:
                                moving = !1;
                                break
                            }
                        } catch (e) {};
                        return !0
                    }
                }));
                f['setOnLongClickListener'](new android['view']['View'].OnLongClickListener({
                    onLongClick: function (a, b) {
                        moving = !0;
                        return !0
                    }
                }));
                d.addView(f);
                menue = new android.widget.PopupWindow(c, 270, 110);
                menue.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 50, 50)
            } catch (e) {
                clientMessage('Menu Error(' + e.lineNumber + '):' + e)
            }
        }
    }))
}
GU();

function menus() {
    ctx.runOnUiThread(new Thread({
        run: function () {
            try {
                var c = new android.view.View.OnTouchListener({
                    onTouch: function (a, b) {
                        try {
                            moving = !0;
                            if (!moving) return !1;
                            switch (b.getAction()) {
                            case android.view.MotionEvent.ACTION_DOWN:
                                dx = mPosX - b.getRawX();
                                dy = mPosY - b.getRawY();
                                break;
                            case android.view.MotionEvent.ACTION_MOVE:
                                mPosX = (b.getRawX() + dx);
                                mPosY = (b.getRawY() + dy);
                                menu.update(mPosX, mPosY, -1, -1);
                                postionx = mPosX;
                                postiony = mPosY;
                                break;
                            case android.view.MotionEvent.ACTION_UP:
                            case android.view.MotionEvent.ACTION_CANCEL:
                                moving = !1;
                                break
                            }
                        } catch (e) {
                            clientMessage("Error:" + e)
                        }
                        return !0
                    }
                });
                var d = new Linear(ctx);
                d.setBackground(bge);
                d.setOrientation(1);
                var f = new Linear(ctx);
                f.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.WRAP_CONTENT));
                f.setBackground(bg);
                f.setOrientation(1);
                var g = new Scroll(ctx);
                g.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3.5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.830));
                var h = new Linear(ctx);
                h.setOrientation(1);
                var j = new Linear(ctx);
                j.setOrientation(1);
                j.setPadding(8, 8, 8, 8);
                j.setGravity(android.view.Gravity.CENTER);
                var k = new Linear(ctx);
                k.setOrientation(1);
                k.setPadding(8, 8, 8, 8);
                var l = new Linear(ctx);
                l.setOrientation(1);
                l.setPadding(8, 8, 8, 8);
                var m = new Linear(ctx);
                m.setPadding(8, 8, 8, 8);
                m.setBackground(bg);
                var n = new Linear(ctx);
                d.addView(f);
                d.addView(g);
                g.addView(h);
                d.addView(m);
                d.addView(n);
                h.addView(j);
                h.addView(k);
                h.addView(l);
                var o = new Linear(ctx);
                o.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, ctx.getWindowManager().getDefaultDisplay().getHeight() / 150));
                o.setBackground(bgss);
                f.addView(o);
                j.setVisibility(View.VISIBLE);
                k.setVisibility(View.GONE);
                l.setVisibility(View.GONE);
                var p = new Text(ctx);
                p.setText("Negrille");
                p.setTextSize(12);
                p.setTypeface(font);
                p.setTextColor(Color.WHITE);
                p.setGravity(Gravity.CENTER);
                p.setOnTouchListener(c);
                p.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, ctx.getWindowManager().getDefaultDisplay().getHeight() / 15));
                f.addView(p);
                var q = new TextView(ctx);
                q.setText((android.text.Html.fromHtml('<b><font color="white">HitBox:</font></b><b><font color="white">OFF</font></b>')));
                q.setTextColor(Color.WHITE);
                q.setTextSize(14);
                q.setTypeface(font);
                if (hitbox == !0) {
                    q.setText((android.text.Html.fromHtml('<b><font color="white">HitBox:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                q.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!hitbox) {
                            hitbox = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HitBox:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            hitbox = !1;
                            Entity.setCollisionSize(Player.getPointedEntity(), 1, 2);
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HitBox:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                q.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!bindh) {
                            bindh = !0;
                            createBind("H", "Hit", "hitbox")
                        } else {
                            bindh = !1;
                            eval("Hit.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(q);
               if(isDev == !0){
                var r = new android.widget.TextView(ctx);
                r.setText('X:' + colisionx);
                r.setPadding(10, 5, 10, 0);
                r.setTextSize(14);
                r.setTypeface(font);
                r.setTextColor(android.graphics.Color.WHITE);
                j.addView(r);
                var s = new android.widget.SeekBar(ctx);
                s.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                s.setMax(1500);
                s.setPadding(25, 15, 25, 15);
                s.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                s.setProgress(colisionx * 100);
                s.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        colisionx = s.getProgress() / 100;
                        r.setText(android.text.Html.fromHtml("<font color='White'>X:</font><font color='#A800FF'>" + colisionx + "</font>"))
                    }
                });
                j.addView(s);
                var u = new android.widget.TextView(ctx);
                u.setText('Y:' + colisiony);
                u.setPadding(10, 5, 10, 0);
                u.setTextSize(15);
                u.setTypeface(font);
                u.setTextColor(android.graphics.Color.WHITE);
                j.addView(u);
                var w = new android.widget.SeekBar(ctx);
                w.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                w.setMax(1500);
                w.setPadding(25, 15, 25, 15);
                w.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                w.setProgress(colisiony * 100);
                w.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        colisiony = w.getProgress() / 100;
                        u.setText(android.text.Html.fromHtml("<font color='White'>Y:</font><font color='#A800FF'>" + colisiony + "</font>"))
                    }
                });
                j.addView(w);};
                var x = new TextView(ctx);
                x.setText((android.text.Html.fromHtml('<b><font color="white">coord:</font></b><b><font color="white">OFF</font></b>')));
                x.setTextColor(Color.WHITE);
                x.setTextSize(14);
                x.setTypeface(font);
                if (cda == !0) {
                    x.setText((android.text.Html.fromHtml('<b><font color="white">coord:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!cda) {
                            cda = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">coord:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            cda = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">coord:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                x.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!bindcda) {
                            createBind('CD', 'CORD', 'car');
                            bindcda = !0
                        } else {
                            bindcda = !1;
                            eval("CORD.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(x);
                var y = new TextView(ctx);
                y.setText((android.text.Html.fromHtml('<b><font color="white">AimBot:</font></b><b><font color="white">OFF</font></b>')));
                y.setTextColor(Color.WHITE);
                y.setTextSize(14);
                y.setTypeface(font);
                if (aimbot == !0) {
                    y.setText((android.text.Html.fromHtml('<b><font color="white">AimBot:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                y.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!aimbot) {
                            aimbot = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">AimBot:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            aimbot = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">AimBot:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                y.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!binda) {
                            createBind('Aim', 'Bot', 'ai');
                            binda = !0
                        } else {
                            binda = !1;
                            eval("Bot.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(y);
               if(isDev ==!0){
                var z = new android.widget.TextView(ctx);
                z.setText('AIMRange:' + intaim);
                z.setPadding(10, 5, 10, 0);
                z.setTextSize(14);
                z.setTypeface(font);
                z.setTextColor(android.graphics.Color.WHITE);
                j.addView(z);
                var A = new android.widget.SeekBar(ctx);
                A.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                A.setMax(1500);
                A.setPadding(25, 15, 25, 15);
                A.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                A.setProgress(intaim * 100);
                A.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        intaim = A.getProgress() / 100;
                        z.setText(android.text.Html.fromHtml("<font color='White'>AimRange:</font><font color='#A800FF'>" + intaim + "</font>"))
                    }
                });
                j.addView(A);};
                var B = new TextView(ctx);
                B.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND:</font></b><b><font color="white">OFF</font></b>')));
                B.setTextColor(Color.WHITE);
                B.setTextSize(14);
                B.setTypeface(font);
                if (behind == !0) {
                    B.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                B.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!behind) {
                            behind = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            behind = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                B.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!behindbind) {
                            behindbind = !0;
                            createBind('Beh', 'hind', 'net')
                        } else {
                            behindbind = !1;
                            eval("hind.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(B);
                var C = new TextView(ctx);
                C.setText((android.text.Html.fromHtml('<b><font color="white">AKB:</font></b><b><font color="white">OFF</font></b>')));
                C.setTextColor(Color.WHITE);
                C.setTextSize(14);
                C.setTypeface(font);
                if (akb == !0) {
                    C.setText((android.text.Html.fromHtml('<b><font color="white">AKB:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                C.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!akb) {
                            akb = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">AKB:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            akb = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">AKB:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                j.addView(C);
                var D = new TextView(ctx);
                D.setText((android.text.Html.fromHtml('<b><font color="white">HOVERAURA:</font></b><b><font color="white">OFF</font></b>')));
                D.setTextColor(Color.WHITE);
                D.setTextSize(14);
                D.setTypeface(font);
                if (hover == !0) {
                    D.setText((android.text.Html.fromHtml('<b><font color="white">HOVERAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                D.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!hover) {
                            hover = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HOVERAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            hover = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HOVERAURA:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                D.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!hoverbind) {
                            hoverbind = !0;
                            createBind('Hov', 'hoverw', 'over')
                        } else {
                            hoverbind = !1;
                            eval("hoverw.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(D);
                var E = new TextView(ctx);
                E.setText((android.text.Html.fromHtml('<b><font color="white">HITBOOST:</font></b><b><font color="white">OFF</font></b>')));
                E.setTextColor(Color.WHITE);
                E.setTextSize(14);
                E.setTypeface(font);
                if (hitboost == !0) {
                    E.setText((android.text.Html.fromHtml('<b><font color="white">HITBOOST:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                E.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!hitboost) {
                            hitboost = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITBOOST:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            hitboost = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITBOOST:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                E.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!hitboostbind) {
                            hitboostbind = !0;
                            createBind('HBO', 'boost', 'hitboost')
                        } else {
                            hitboostbind = !1;
                            eval("boost.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(E);
                if (isDev == !0){
                var F = new android.widget.TextView(ctx);
                F.setText('BOOST:' + seo);
                F.setPadding(10, 5, 10, 0);
                F.setTextSize(14);
                F.setTypeface(font);
                F.setTextColor(android.graphics.Color.WHITE);
                j.addView(F);
               
                var G = new android.widget.SeekBar(ctx);
                G.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                G.setMax(1500);
                G.setPadding(25, 15, 25, 15);
                G.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                G.setProgress(seo * 100);
                G.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        seo = G.getProgress() / 100;
                        F.setText(android.text.Html.fromHtml("<font color='White'>BOOST:</font><font color='#A800FF'>" + seo + "</font>"))
                    }
                });
                j.addView(G);};
                var H = new TextView(ctx);
                H.setText((android.text.Html.fromHtml('<b><font color="white">TSpin:</font></b><b><font color="white">OFF</font></b>')));
                H.setTextColor(Color.WHITE);
                H.setTextSize(14);
                H.setTypeface(font);
                if (tspin == !0) {
                    H.setText((android.text.Html.fromHtml('<b><font color="white">TSpin:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                H.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!tspin) {
                            tspin = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TSpin:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            tspin = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TSpin:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                H.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!tspinbind) {
                            tspinbind = !0;
                            createBind('Spin', 'spinb', 'tspin')
                        } else {
                            tspinbind = !1;
                            eval("spinb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(H);
               if(isDev == !0) {
                var I = new android.widget.TextView(ctx);
                I.setText('Range:' + range);
                I.setPadding(10, 5, 10, 0);
                I.setTextSize(14);
                I.setTypeface(font);
                I.setTextColor(android.graphics.Color.WHITE);
                j.addView(I);
                var J = new android.widget.SeekBar(ctx);
                J.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                J.setMax(1500);
                J.setPadding(25, 15, 25, 15);
                J.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                J.setProgress(range * 100);
                J.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        range = J.getProgress() / 100;
                        I.setText(android.text.Html.fromHtml("<font color='White'>Range:</font><font color='#A800FF'>" + range + "</font>"))
                    }
                });
                j.addView(J);
                var K = new android.widget.TextView(ctx);
                K.setText('SPEED:' + spins);
                K.setPadding(10, 5, 10, 0);
                K.setTextSize(15);
                K.setTypeface(font);
                K.setTextColor(android.graphics.Color.WHITE);
                j.addView(K);
                var L = new android.widget.SeekBar(ctx);
                L.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                L.setMax(1500);
                L.setPadding(25, 15, 25, 15);
                L.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                L.setProgress(spins * 100);
                L.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        spins = L.getProgress() / 100;
                        K.setText(android.text.Html.fromHtml("<font color='White'>SPEED:</font><font color='#A800FF'>" + spins + "</font>"))
                    }
                });
                j.addView(L);};
                var M = new TextView(ctx);
                M.setText((android.text.Html.fromHtml('<b><font color="white">HITAIM:</font></b><b><font color="white">OFF</font></b>')));
                M.setTextColor(Color.WHITE);
                M.setTextSize(14);
                M.setTypeface(font);
                if (hitaim == !0) {
                    M.setText((android.text.Html.fromHtml('<b><font color="white">HITAIM:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                M.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!hitaim) {
                            hitaim = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITAIM:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            hitaim = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITAIM:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                M.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!hitaimbind) {
                            hitaimbind = !0;
                            createBind('HAim', 'haimb', 'hitaim')
                        } else {
                            hitaimbind = !1;
                            eval("haimb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(M);
                var N = new TextView(ctx);
                N.setText((android.text.Html.fromHtml('<b><font color="white">TpAURA:</font></b><b><font color="white">OFF</font></b>')));
                N.setTextColor(Color.WHITE);
                N.setTextSize(14);
                N.setTypeface(font);
                if (tpauraed == !0) {
                    N.setText((android.text.Html.fromHtml('<b><font color="white">TPAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                N.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!tpauraed) {
                            tpauraed = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TPAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            tpauraed = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TPAURA:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                N.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!tpauraedbind) {
                            tpauraedbind = !0;
                            createBind('Tpau', 'tpb', 'tpauraed')
                        } else {
                            tpauraedbind = !1;
                            eval("tpb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(N);
                if (isDev == !0){
                var O = new android.widget.TextView(ctx);
                O.setText('UPS:' + ses);
                O.setPadding(10, 5, 10, 0);
                O.setTextSize(15);
                O.setTypeface(font);
                O.setTextColor(android.graphics.Color.WHITE);
                j.addView(O);
                var P = new android.widget.SeekBar(ctx);
                P.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                P.setMax(1500);
                P.setPadding(25, 15, 25, 15);
                P.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                P.setProgress(ses * 100);
                P.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        ses = P.getProgress() / 100;
                        O.setText(android.text.Html.fromHtml("<font color='White'>UPS:</font><font color='#A800FF'>" + ses + "</font>"))
                    }
                });
                j.addView(P);};
                var Q = new TextView(ctx);
                Q.setText((android.text.Html.fromHtml('<b><font color="white">TPHIT:</font></b><b><font color="white">OFF</font></b>')));
                Q.setTextColor(Color.WHITE);
                Q.setTextSize(14);
                Q.setTypeface(font);
                if (killauraed == !0) {
                    Q.setText((android.text.Html.fromHtml('<b><font color="white">TPHIT:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                Q.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!killauraed) {
                            killauraed = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TPHIT:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            killauraed = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TPHIT:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                Q.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!killauraedbind) {
                            killauraedbind = !0;
                            createBind("thit", "thitb", "killauraed")
                        } else {
                            killauraedbind = !1;
                            eval("thitb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(Q);
                var R = new TextView(ctx);
                R.setText((android.text.Html.fromHtml('<b><font color="white">BACKAURA:</font></b><b><font color="white">OFF</font></b>')));
                R.setTextColor(Color.WHITE);
                R.setTextSize(14);
                R.setTypeface(font);
                if (back == !0) {
                    R.setText((android.text.Html.fromHtml('<b><font color="white">BACKAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                R.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!back) {
                            back = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BACKAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            back = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BACKAURA:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                R.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!backbind) {
                            backbind = !0;
                            createBind("bac", "bacb", "back")
                        } else {
                            backbind = !1;
                            eval("bacb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(R);
                if (isDev == !0){
                var S = new android.widget.TextView(ctx);
                S.setText('BBOOST:' + seob);
                S.setPadding(10, 5, 10, 0);
                S.setTextSize(15);
                S.setTypeface(font);
                S.setTextColor(android.graphics.Color.WHITE);
                j.addView(S);
                var T = new android.widget.SeekBar(ctx);
                T.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                T.setMax(1500);
                T.setPadding(25, 15, 25, 15);
                T.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                T.setProgress(seob * 100);
                T.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        seob = T.getProgress() / 100;
                        S.setText(android.text.Html.fromHtml("<font color='White'>BBOOST:</font><font color='#A800FF'>" + seob + "</font>"))
                    }
                });
                j.addView(T);};
                var U = new TextView(ctx);
                U.setText((android.text.Html.fromHtml('<b><font color="white">RNDAURA:</font></b><b><font color="white">OFF</font></b>')));
                U.setTextColor(Color.WHITE);
                U.setTextSize(14);
                U.setTypeface(font);
                if (rndaura == !0) {
                    U.setText((android.text.Html.fromHtml('<b><font color="white">RNDAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                U.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!rndaura) {
                            rndaura = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">RNDAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            rndaura = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">RNDAURA:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                U.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!rndaurabind) {
                            rndaurabind = !0;
                            createBind("rnd", "rndb", "rndaura")
                        } else {
                            rndaurabind = !1;
                            eval("rndb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(U);
                var V = new TextView(ctx);
                V.setText((android.text.Html.fromHtml('<b><font color="white">ZIGZAG:</font></b><b><font color="white">OFF</font></b>')));
                V.setTextColor(Color.WHITE);
                V.setTextSize(14);
                V.setTypeface(font);
                if (ziga == !0) {
                    V.setText((android.text.Html.fromHtml('<b><font color="white">ZIGZAG:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                V.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!ziga) {
                            ziga = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">ZIGZAG:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            ziga = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">ZIGZAG:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                V.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!zigabind) {
                            zigabind = !0;
                            createBind("zig", "zigb", "ziga")
                        } else {
                            zigabind = !1;
                            eval("zigb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(V);
                var W = new TextView(ctx);
                W.setText((android.text.Html.fromHtml('<b><font color="white">HITAU2:</font></b><b><font color="white">OFF</font></b>')));
                W.setTextColor(Color.WHITE);
                W.setTextSize(14);
                W.setTypeface(font);
                if (bowaim == !0) {
                    W.setText((android.text.Html.fromHtml('<b><font color="white">HITAU2:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                W.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!bowaim) {
                            bowaim = !0;
                            clientMessage("Thank to @ModerCoder");
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITAU2:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            bowaim = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITAU2:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                W.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!bowaimbind) {
                            bowaimbind = !0;
                            createBind("Aura2", "au2", "bowaim")
                        } else {
                            bowaimbind = !1;
                            eval("au2.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(W);
                var X = new TextView(ctx);
                X.setText((android.text.Html.fromHtml('<b><font color="white">CRITICAL:</font></b><b><font color="white">OFF</font></b>')));
                X.setTextColor(Color.WHITE);
                X.setTextSize(14);
                X.setTypeface(font);
                if (critical == !0) {
                    X.setText((android.text.Html.fromHtml('<b><font color="white">CRITICAL:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                X.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!critical) {
                            critical = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">CRITICAL:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            critical = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">CRITICAL:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                X.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!criticalbind) {
                            criticalbind = !0;
                            createBind("crit", "critb", "critical")
                        } else {
                            criticalbind = !1;
                            eval("critb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(X);
                var Y = new TextView(ctx);
                Y.setText((android.text.Html.fromHtml('<b><font color="white">CRITICALv2:</font></b><b><font color="white">OFF</font></b>')));
                Y.setTextColor(Color.WHITE);
                Y.setTextSize(14);
                Y.setTypeface(font);
                if (crit == !0) {
                    Y.setText((android.text.Html.fromHtml('<b><font color="white">CRITICALv2:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                Y.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!crit) {
                            crit = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">CRITICALv2:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            crit = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">CRITICALv2:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                Y.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!critbind) {
                            critbind = !0;
                            createBind("crit2", "crit2b", "crit")
                        } else {
                            critbind = !1;
                            eval("crit2b.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(Y);
                var Z = new TextView(ctx);
                Z.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND2:</font></b><b><font color="white">OFF</font></b>')));
                Z.setTextColor(Color.WHITE);
                Z.setTextSize(14);
                Z.setTypeface(font);
                if (beh2 == !0) {
                    Z.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND2:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                Z.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!beh2) {
                            beh2 = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND2:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            beh2 = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BEHIND2:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                Z.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!beh2bind) {
                            beh2bind = !0;
                            createBind("beh2", "beh2b", "beh2")
                        } else {
                            beh2bind = !1;
                            eval("beh2b.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(Z);
                if (isDev == !0){
                var bH = new android.widget.TextView(ctx);
                bH.setText('GAPv2:' + gaps);
                bH.setPadding(10, 5, 10, 0);
                bH.setTextSize(15);
                bH.setTypeface(font);
                bH.setTextColor(android.graphics.Color.WHITE);
                j.addView(bH);
                var bI = new android.widget.SeekBar(ctx);
                bI.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                bI.setMax(1500);
                bI.setPadding(25, 15, 25, 15);
                bI.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                bI.setProgress(gaps * 100);
                bI.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        gaps = bI.getProgress() / 100;
                        bH.setText(android.text.Html.fromHtml("<font color='White'>GAPv2:</font><font color='#A800FF'>" + gaps + "</font>"))
                    }
                });
                j.addView(bI);};
                if (isDev == !0){
                var bJ = new TextView(ctx);
                bJ.setText((android.text.Html.fromHtml('<b><font color="white">F5</font></b><b><font color="white"></font></b>')));
                bJ.setTextColor(Color.WHITE);
                bJ.setTextSize(14);
                bJ.setTypeface(font);
                bJ.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!f4) {
                            f4 = !0;
                            f4b()
                        } else {
                            f4 = !1;
                            f4of.dismiss()
                        }
                        return !0
                    }
                }));
                j.addView(bJ);
                var bK = new TextView(ctx);
                bK.setText((android.text.Html.fromHtml('<b><font color="white">PlSCAN:</font></b><b><font color="white">OFF</font></b>')));
                bK.setTextColor(Color.WHITE);
                bK.setTextSize(14);
                bK.setTypeface(font);
                if (elist == !0) {
                    bK.setText((android.text.Html.fromHtml('<b><font color="white">PLSCAN:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bK.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (confirmGameScreen()) {
                            if (!started) {
                                started = !0;
                                scan()
                            }
                        }
                        if (!elist) {
                            elist = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">PLSCAN:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            elist = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">PLSCAN:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                                bK.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!plbind) {
                            plbind = !0;
                            SETAIM();
                            
                        } else {
                            plbind = !1;
                            
                            
                        }
                        return !0
                    }
                }));
                j.addView(bK);
                if (isDev == !0){
                var bL = new android.widget.TextView(ctx);
                bL.setText('ScanR:' + max);
                bL.setPadding(10, 5, 10, 0);
                bL.setTextSize(15);
                bL.setTypeface(font);
                bL.setTextColor(android.graphics.Color.WHITE);
                j.addView(bL);
                var bM = new android.widget.SeekBar(ctx);
                bM.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                bM.setMax(1500);
                bM.setPadding(25, 15, 25, 15);
                bM.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                bM.setProgress(max / 100);
                bM.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        max = bM.getProgress() * 1000;
                        bL.setText(android.text.Html.fromHtml("<font color='White'>ScanR:</font><font color='#A800FF'>" + max + "</font>"))
                    }
                });
                j.addView(bM);};
                var bN = new TextView(ctx);
                bN.setText((android.text.Html.fromHtml('<b><font color="white">TRIGGERBOT:</font></b><b><font color="white">OFF</font></b>')));
                bN.setTextColor(Color.WHITE);
                bN.setTextSize(14);
                bN.setTypeface(font);
                if (triggers == !0) {
                    bN.setText((android.text.Html.fromHtml('<b><font color="white">TRIGGERBOT:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bN.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!triggers) {
                            triggers = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TRIGGERBOT:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            triggers = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TRIGGERBOT:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bN.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!triggersbind) {
                            triggersbind = !0;
                            createBind("Tr", "trb", "triggerso")
                        } else {
                            triggersbind = !1;
                            eval("trb.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(bN);
                if (isDev == !0){
                var bO = new android.widget.TextView(ctx);
                bO.setText('CPS:' + CPS);
                bO.setPadding(10, 5, 10, 0);
                bO.setTextSize(15);
                bO.setTypeface(font);
                bO.setTextColor(android.graphics.Color.WHITE);
                j.addView(bO);
                var bP = new android.widget.SeekBar(ctx);
                bP.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                bP.setMax(1500);
                bP.setPadding(25, 15, 25, 15);
                bP.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                bP.setProgress(CPS * 1);
                bP.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        CPS = bP.getProgress() / 1;
                        bO.setText(android.text.Html.fromHtml("<font color='White'>CPS:</font><font color='#A800FF'>" + CPS + "</font>"))
                    }
                });
                j.addView(bP);};
                var bQ = new TextView(ctx);
                bQ.setText((android.text.Html.fromHtml('<b><font color="white">ESP:</font></b><b><font color="white">OFF</font></b>')));
                bQ.setTextColor(Color.WHITE);
                bQ.setTextSize(14);
                bQ.setTypeface(font);
                if (aimot == !0) {
                    bQ.setText((android.text.Html.fromHtml('<b><font color="white">ESP:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bQ.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!aimot) {
                            aimot = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">ESP:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            aimot = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">ESP:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bQ.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!aimotbind) {
                            aimotbind = !0;
                            createBind("E", "Esp", "aimot")
                        } else {
                            aimotbind = !1;
                            eval("Esp.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(bQ);
                var bR = new TextView(ctx);
                bR.setText((android.text.Html.fromHtml('<b><font color="white">KILLAURA:</font></b><b><font color="white">OFF</font></b>')));
                bR.setTextColor(Color.WHITE);
                bR.setTextSize(14);
                bR.setTypeface(font);
                if (aug == !0) {
                    bR.setText((android.text.Html.fromHtml('<b><font color="white">KILLAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bR.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!aug) {
                            aug = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">KILLAURA:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            aug = !1;
                            Entity.setCollisionSize(Player.getPointedEntity(), 1, 2);
                            a.setText((android.text.Html.fromHtml('<b><font color="white">KILLAURA:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bR.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!augbind) {
                            augbind = !0;
                            createBind("K", "kill", "aug")
                        } else {
                            augbind = !1;
                            eval("kill.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(bR);
                var bS = new TextView(ctx);
                bS.setText((android.text.Html.fromHtml('<b><font color="white">TRACER:</font></b><b><font color="white">OFF</font></b>')));
                bS.setTextColor(Color.WHITE);
                bS.setTextSize(14);
                bS.setTypeface(font);
                if (trace == !0) {
                    bS.setText((android.text.Html.fromHtml('<b><font color="white">TRACER:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bS.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!trace) {
                            trace = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TRACER:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            trace = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TRACER:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bS.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!tracebind) {
                            tracebind = !0;
                            createBind("TL", "line", "trace")
                        } else {
                            tracebind = !1;
                            eval("line.dismiss()")
                        }
                        return !0
                    }
                }));
                j.addView(bS);};
                var bT = new TextView(ctx);
                bT.setText((android.text.Html.fromHtml('<b><font color="white">Flight:</font></b><b><font color="white">OFF</font></b>')));
                bT.setTextColor(Color.WHITE);
                bT.setTextSize(14);
                bT.setTypeface(font);
                if (Flight == !0) {
                    bT.setText((android.text.Html.fromHtml('<b><font color="white">Flight:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bT.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!Flight) {
                            Flight = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">Flight:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            Flight = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">Flight:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bT.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!bindf) {
                            bindf = !0;
                            createBind("Flight", "fln", "Flight")
                        } else {
                            bindf = !1;
                            eval("fln.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(bT);
              if (isDev == !0){  var bU = new TextView(ctx);
                bU.setText((android.text.Html.fromHtml('<b><font color="white">SPEED:</font></b><b><font color="white">OFF</font></b>')));
                bU.setTextColor(Color.WHITE);
                bU.setTextSize(14);
                bU.setTypeface(font);
                if (sped == !0) {
                    bU.setText((android.text.Html.fromHtml('<b><font color="white">SPEED:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bU.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!sped) {
                            sped = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">SPEED:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            sped = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">SPEED:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bU.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!spedbind) {
                            spedbind = !0;
                            createBind("Sph", "sb", "sped")
                        } else {
                            spedbind = !1;
                            eval("sb.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(bU);
                var bV = new TextView(ctx);
                bV.setText((android.text.Html.fromHtml('<b><font color="white">TapTp:</font></b><b><font color="white">OFF</font></b>')));
                bV.setTextColor(Color.WHITE);
                bV.setTextSize(14);
                bV.setTypeface(font);
                if (fly == !0) {
                    bV.setText((android.text.Html.fromHtml('<b><font color="white">TapTp:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bV.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!fly) {
                            fly = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TapTp:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            fly = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">TapTp:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bV.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!bindfl) {
                            bindfl = !0;
                            createBind("TapTp", "flyb", "fly")
                        } else {
                            bindfl = !1;
                            eval("flyb.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(bV);};
                        var tw = new TextView(ctx);
                tw.setText((android.text.Html.fromHtml('<b><font color="white">Tower:</font></b><b><font color="white">OFF</font></b>')));
                tw.setTextColor(Color.WHITE);
                tw.setTextSize(14);
                tw.setTypeface(font);
                if (tower == !0) {
                    tw.setText((android.text.Html.fromHtml('<b><font color="white">Tower:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                tw.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!tower) {
                            tower = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">Tower:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            tower = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">Tower:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                tw.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!bindtw) {
                            bindtw = !0;
                            createBind("Tow", "tew", "tower")
                        } else {
                            bindtw = !1;
                            eval("tew.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(tw);
                var bW = new TextView(ctx);
                bW.setText((android.text.Html.fromHtml('<b><font color="white">WALL:</font></b><b><font color="white">OFF</font></b>')));
                bW.setTextColor(Color.WHITE);
                bW.setTextSize(14);
                bW.setTypeface(font);
                if (wall == !0) {
                    bW.setText((android.text.Html.fromHtml('<b><font color="white">WALL:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bW.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!wall) {
                            wall = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">WALL:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            wall = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">WALL:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bW.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!wallbind) {
                            wallbind = !0;
                            createBind("Wall", "wallb", "wall")
                        } else {
                            wallbind = !1;
                            eval("wallb.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(bW);
                var bX = new TextView(ctx);
                bX.setText((android.text.Html.fromHtml('<b><font color="white">Scafold:</font></b><b><font color="white">OFF</font></b>')));
                bX.setTextColor(Color.WHITE);
                bX.setTextSize(14);
                bX.setTypeface(font);
                if (scall == !0) {
                    bX.setText((android.text.Html.fromHtml('<b><font color="white">scafold:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bX.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!scall) {
                            scall = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">scafold:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            scall = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">scafold:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bX.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!scallbind) {
                            scallbind = !0;
                            createBind("scaf", "scb", "scall")
                        } else {
                            scallbind = !1;
                            eval("scb.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(bX);
                var bY = new TextView(ctx);
                bY.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK2:</font></b><b><font color="white">OFF</font></b>')));
                bY.setTextColor(Color.WHITE);
                bY.setTextSize(14);
                bY.setTypeface(font);
                if (jets == !0) {
                    bY.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK2:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bY.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!jets) {
                            jets = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK2:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            jets = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK2:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bY.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!jetsbind) {
                            jetsbind = !0;
                            createBind("jet2", "jetb", "jets")
                        } else {
                            jetsbind = !1;
                            eval("jetb.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(bY);
                
                                var bf = new TextView(ctx);
                bf.setText((android.text.Html.fromHtml('<b><font color="white">BUNNYFLY:</font></b><b><font color="white">OFF</font></b>')));
                bf.setTextColor(Color.WHITE);
                bf.setTextSize(14);
                bf.setTypeface(font);
                if (bfly == !0) {
                    bf.setText((android.text.Html.fromHtml('<b><font color="white">BUNNYFLY:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bf.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!bfly) {
                            bfly = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BUNNYFLY:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            bfly = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">BUNNYFLY:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bf.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!bflybind) {
                            bflybind = !0;
                            createBind("BFly", "bfl", "bloy")
                        } else {
                            bflybind = !1;
                            eval("bfl.dismiss()")
                        }
                        return !0
                    }
                }));
                k.addView(bf);
                var bZ = new TextView(ctx);
                bZ.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK:</font></b><b><font color="white">OFF</font></b>')));
                bZ.setTextColor(Color.WHITE);
                bZ.setTextSize(14);
                bZ.setTypeface(font);
                if (jetpack == !0) {
                    bZ.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                bZ.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!jetpack) {
                            jetpack = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            jetpack = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">JETPACK:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                bZ.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!jetpackbind) {
                            jetpackbind = !0;
                            
                            createBind("jet", "jetob", "jetpack")
                        } else {
                            jetpackbind = !1;
                            eval("jetob.dismiss()")
                            
                        }
                        return !0
                    }
                }));
                k.addView(bZ);
                if (isDev == !0){
                var ca = new android.widget.TextView(ctx);
                ca.setText('JetSpeed:' + FOV);
                ca.setPadding(10, 5, 10, 0);
                ca.setTextSize(15);
                ca.setTypeface(font);
                ca.setTextColor(android.graphics.Color.WHITE);
                k.addView(ca);
                var t = new android.widget.SeekBar(ctx);
                t.getThumb().setColorFilter(Color.parseColor("#A800FF"), android.graphics.PorterDuff.Mode.SRC_IN);
                t.setMax(1500);
                t.setPadding(25, 15, 25, 15);
                t.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                t.setProgress(FOV * 100);
                t.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        FOV = t.getProgress() / 100;
                        ca.setText(android.text.Html.fromHtml("<font color='White'>JetSpeed:</font><font color='#A800FF'>" + FOV + "</font>"))
                    }
                });
                k.addView(t);};
                var cb = new TextView(ctx);
                cb.setText((android.text.Html.fromHtml('<b><font color="white">ELEVATOR:</font></b><b><font color="white">OFF</font></b>')));
                cb.setTextColor(Color.WHITE);
                cb.setTextSize(14);
                cb.setTypeface(font);
                if (elev == !0) {
                    cb.setText((android.text.Html.fromHtml('<b><font color="white">ELEVATOR:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                cb.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!elev) {
                            elev = !0;
                            ELEVATORKA();
                            a.setText((android.text.Html.fromHtml('<b><font color="white">ELEVATOR:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            elev = !1;
                            ELEVATORKA1.dismiss();
                            a.setText((android.text.Html.fromHtml('<b><font color="white">ELEVATOR:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                k.addView(cb);
                var cc = new TextView(ctx);
                cc.setText((android.text.Html.fromHtml('<b><font color="white">FULLBRIGHT:</font></b><b><font color="white">OFF</font></b>')));
                cc.setTextColor(Color.WHITE);
                cc.setTextSize(14);
                cc.setTypeface(font);
                if (full == !0) {
                    cc.setText((android.text.Html.fromHtml('<b><font color="white">FULLBRIGHT:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                cc.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!full) {
                            full = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">FULLBRIGHT:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            full = !1;
                            Entity.removeEffect(Player.getEntity(), 16);
                            a.setText((android.text.Html.fromHtml('<b><font color="white">FULLBRIGHT:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                l.addView(cc);
                cj = new TextView(ctx);
                cj.setText((android.text.Html.fromHtml('<b><font color="white">HASTE:</font></b><b><font color="white">OFF</font></b>')));
                cj.setTextColor(Color.WHITE);
                cj.setTextSize(14);
                cj.setTypeface(font);
                if (haste == !0) {
                    cj.setText((android.text.Html.fromHtml('<b><font color="white">HASTE:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                cj.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!haste) {
                            haste = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HASTE:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            haste = !1;
                            Entity.removeEffect(Player.getEntity(), 3);
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HASTE:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                l.addView(cj);
                jetsssui99 = new TextView(ctx);
                jetsssui99.setText((android.text.Html.fromHtml('<b><font color="white">HITINFO:</font></b><b><font color="white">OFF</font></b>')));
                jetsssui99.setTextColor(Color.WHITE);
                jetsssui99.setTextSize(14);
                jetsssui99.setTypeface(font);
                if (coordsGUI == !0) {
                    jetsssui99.setText((android.text.Html.fromHtml('<b><font color="white">HITINFO:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                jetsssui99.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!coordsGUI) {
                            coordsGUI = !0;
                            showCoordinateGUI();
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITINFO:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            coordsGUI = !1;
                            coords_txt_menu.dismiss();
                            a.setText((android.text.Html.fromHtml('<b><font color="white">HITINFO:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                l.addView(jetsssui99);
                if (isDev == !0) {
               
                cg = new TextView(ctx);
                cg.setText((android.text.Html.fromHtml('<b><font color="white">XRAY:</font></b><b><font color="white">OFF</font></b>')));
                cg.setTextColor(Color.WHITE);
                cg.setTextSize(14);
                cg.setTypeface(font);
                if (cheted == !0) {
                    cg.setText((android.text.Html.fromHtml('<b><font color="white">XRAY:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                cg.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!cheted) {
                            cheted = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">XRAY:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            cheted = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">XRAY:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                l.addView(cg);

                var cd = new android.widget.TextView(ctx);
                cd.setText(android.text.Html.fromHtml("<font color='White'>Radius:</font><font color='#f000f1'>" + radius + "</font>"));
                cd.setPadding(10, 5, 10, 0);
                cd.setTextSize(15);
                cd.setTypeface(font);
                cd.setTextColor(android.graphics.Color.WHITE);
                l.addView(cd);
                var ce = new android.widget.SeekBar(ctx);
                ce.getThumb().setColorFilter(Color.parseColor("#f000f1"), android.graphics.PorterDuff.Mode.SRC_IN);
                ce.setMax(1000);
                ce.setPadding(25, 15, 25, 15);
                ce.getProgressDrawable().setColorFilter(Color.WHITE, android.graphics.PorterDuff.Mode.SRC_IN);
                ce.setProgress(radius * 10);
                ce.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onProgressChanged: function (a) {
                        radius = ce.getProgress() / 10;
                        cd.setText(android.text.Html.fromHtml("<font color='White'>RADIUS:</font><font color='#f000f1'>" + radius + "</font>"))
                    }
                });
                l.addView(ce);
                var tabs9 = new Text(ctx);
                tabs9.setText("");
                tabs9.setTextSize(12);
                tabs9.setPadding(8, 8, 8, 8);
                tabs9.setTypeface(font);
                tabs9.setTextColor(Color.WHITE);
                tabs9.setGravity(Gravity.CENTER);
                l.addView(tabs9);
                var cg = new TextView(ctx);
                cg.setText((android.text.Html.fromHtml('<b><font color="white">TAP TO SELECT X-RAY T</font></b><b><font color="white"></font></b>')));
                cg.setTextColor(Color.WHITE);
                cg.setTextSize(14);
                if (xrayz == 1) {
                    xrayt = 56;
                    ocesp = "diamond"
                    tabs9.setText((android.text.Html.fromHtml('<b><font color="white">DIAMOND:</font></b><b><font color="white">56</font></b>')))
                }
                if (xrayz == 2) {
                    xrayt = 52;
                    ocesp = "spawner"
                    tabs9.setText((android.text.Html.fromHtml('<b><font color="white">SPAWNER:</font></b><b><font color="white">52</font></b>')))
                }
                if (xrayz == 3) {
                    xrayt = 14;
                    ocesp = "zoloto"
                    tabs9.setText((android.text.Html.fromHtml('<b><font color="white">ZOLOTO:</font></b><b><font color="white">14</font></b>')))
                }
                if (xrayz == 4) {
                    xrayt = 15;
                    ocesp = "iron"
                    tabs9.setText((android.text.Html.fromHtml('<b><font color="white">IRON:</font></b><b><font color="white">15</font></b>')))
                }
                if (xrayz == 5) {
                    xrayt = 54;
                    ocesp = "chest"
                    tabs9.setText((android.text.Html.fromHtml('<b><font color="white">chest:</font></b><b><font color="white">54</font></b>')));
                }
                      if (xrayz == 6) {
                            xrayt = 129;
                            ocesp = "emerald"
                            tabs9.setText((android.text.Html.fromHtml('<b><font color="white">emerald:</font></b><b><font color="white">129</font></b>')));
                            xrayz = 0
                        }
                cg.setTypeface(font);
                cg.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        xrayz++;
                        if (cheted == !0) {
                            cheted = !1
                        }
                        if (xrayz == 1) {
                            xrayt = 56;
                            ocesp = "diamond"
                            tabs9.setText((android.text.Html.fromHtml('<b><font color="white">DIAMOND:</font></b><b><font color="white">56</font></b>')))
                        }
                        if (xrayz == 2) {
                            xrayt = 52;
                            ocesp = "spawner"
                            tabs9.setText((android.text.Html.fromHtml('<b><font color="white">SPAWNER:</font></b><b><font color="white">52</font></b>')))
                        }
                        if (xrayz == 3) {
                            xrayt = 14;
                            ocesp = "zoloto"
                            tabs9.setText((android.text.Html.fromHtml('<b><font color="white">ZOLOTO:</font></b><b><font color="white">14</font></b>')))
                        }
                        if (xrayz == 4) {
                            xrayt = 15;
                            ocesp = "iron"
                            tabs9.setText((android.text.Html.fromHtml('<b><font color="white">IRON:</font></b><b><font color="white">15</font></b>')))
                        }
                        if (xrayz == 5) {
                            xrayt = 54;
                            ocesp = "chest"
                            tabs9.setText((android.text.Html.fromHtml('<b><font color="white">chest:</font></b><b><font color="white">54</font></b>')));
                            }
                        if (xrayz == 6) {
                            xrayt = 129;
                            ocesp = "emerald"
                            tabs9.setText((android.text.Html.fromHtml('<b><font color="white">emerald:</font></b><b><font color="white">129</font></b>')));
                            xrayz = 0
                        }
                    }
                }));
                l.addView(cg);};
                var ch = new TextView(ctx);
                ch.setText((android.text.Html.fromHtml('<b><font color="white">on low hp:</font></b><b><font color="white">OFF</font></b>')));
                ch.setTextColor(Color.WHITE);
                ch.setTextSize(14);
                ch.setTypeface(font);
                if (command == !0) {
                    ch.setText((android.text.Html.fromHtml('<b><font color="white">on low hp:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                ch.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!command) {
                            command = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">on low hp:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            command = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">on low hp:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                l.addView(ch);
                var ci = new TextView(ctx);
                ci.setText((android.text.Html.fromHtml('<b><font color="white">command</font></b><b><font color="white"></font></b>')));
                ci.setTextColor(Color.WHITE);
                ci.setTextSize(14);
                ci.setTypeface(font);
                ci.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        setti()
                    }
                }));
                l.addView(ci);
                var cj = new TextView(ctx);
                cj.setText((android.text.Html.fromHtml('<b><font color="white">GenSetting</font></b><b><font color="white"></font></b>')));
                cj.setTextColor(Color.WHITE);
                cj.setTextSize(14);
                cj.setTypeface(font);
                cj.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        genset();
                        clientMessage("GENERATE NORMAL PVP SETTING FOR CHEAT")
                    }
                }));
                l.addView(cj);
                if (isDev == !0) {
                                var nk = new TextView(ctx);
                nk.setText((android.text.Html.fromHtml('<b><font color="white">Nuker:</font></b><b><font color="white">OFF</font></b>')));
                nk.setTextColor(Color.WHITE);
                nk.setTextSize(14);
                nk.setTypeface(font);
                if (nuker == !0) {
                    nk.setText((android.text.Html.fromHtml('<b><font color="white">Nuker:</font></b><b><font color="#A800FF">ON</font></b>')))
                }
                nk.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        if (!nuker) {
                            nuker = !0;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">Nuker:</font></b><b><font color="#A800FF">ON</font></b>')))
                        } else {
                            nuker = !1;
                            a.setText((android.text.Html.fromHtml('<b><font color="white">Nuker:</font></b><b><font color="white">OFF</font></b>')))
                        }
                    }
                }));
                nk.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function (v, t) {
                        if (!nukerbind) {
                            nukerbind = !0;
                            
                            createBind("nuk", "nuks", "nuker")
                        } else {
                            nukerbind = !1;
                            eval("nuks.dismiss()")
                            
                        }
                        return !0
                    }
                }));
                l.addView(nk);};
                var ck = new Text(ctx);
                ck.setText("<<");
                ck.setTextSize(20);
                ck.setTypeface(font);
                ck.setTextColor(Color.WHITE);
                ck.setGravity(Gravity.CENTER);
                ck.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight() / 10));
                ck.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        i--;
                        if (i == 1) {
                            cl.setText("Combat");
                            j.setVisibility(View.VISIBLE);
                            k.setVisibility(View.GONE);
                            l.setVisibility(View.GONE)
                        }
                        if (i == 2) {
                            cl.setText("Movement");
                            j.setVisibility(View.GONE);
                            k.setVisibility(View.VISIBLE);
                            l.setVisibility(View.GONE)
                        }
                        if (i == 3) {
                            cl.setText("Other");
                            j.setVisibility(View.GONE);
                            k.setVisibility(View.GONE);
                            l.setVisibility(View.VISIBLE)
                        }
                        if (i < 0) {
                            cl.setText("Other");
                            j.setVisibility(View.GONE);
                            k.setVisibility(View.GONE);
                            l.setVisibility(View.VISIBLE);
                            i = 3
                        }
                    }
                }));
                m.addView(ck);
                var cl = new Text(ctx);
                cl.setText("Combat");
                cl.setTextSize(12);
                cl.setPadding(8, 8, 8, 8);
                cl.setTypeface(font);
                cl.setTextColor(Color.WHITE);
                cl.setGravity(Gravity.CENTER);
                cl.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4.200, ctx.getWindowManager().getDefaultDisplay().getHeight() / 15));
                m.addView(cl);
                var cm = new Text(ctx);
                cm.setText(">>");
                cm.setTextSize(20);
                cm.setTypeface(font);
                cm.setTextColor(Color.WHITE);
                cm.setGravity(Gravity.CENTER);
                cm.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight() / 10));
                cm.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function (a) {
                        i++;
                        if (i == 1) {
                            cl.setText("Combat");
                            j.setVisibility(View.VISIBLE);
                            k.setVisibility(View.GONE);
                            l.setVisibility(View.GONE)
                        }
                        if (i == 2) {
                            cl.setText("Movement");
                            j.setVisibility(View.GONE);
                            k.setVisibility(View.VISIBLE);
                            l.setVisibility(View.GONE)
                        }
                        if (i == 3) {
                            cl.setText("Other");
                            j.setVisibility(View.GONE);
                            k.setVisibility(View.GONE);
                            l.setVisibility(View.VISIBLE);
                            i = 0
                        }
                    }
                }));
                m.addView(cm);
                var o = new Linear(ctx);
                o.setLayoutParams(new LinearLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, ctx.getWindowManager().getDefaultDisplay().getHeight() / 90));
                o.setBackground(bgss);
                n.addView(o);
                menu = new android.widget.PopupWindow(d, ctx.getWindowManager().getDefaultDisplay().getWidth() / 3.5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 1.4, !0);
                menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, postionx, postiony);
                menu.setAnimationStyle(android.R.style.Animation_Toast)
            } catch (e) {
                clientMessage("Menu Error(" + e.lineNumber + "):" + e)
            }
        }
    }))
}

function update() {
    ctx.runOnUiThread(new Thread({
        run: function () {
            try {
                var a = new Linear(ctx);
                a.setBackground(bge);
                a.setOrientation(1);
                a.setPadding(8, 8, 8, 8);
                var b = new Text(ctx);
                b.setText("Мой первый чит,созданный при поддержке @Nosoh4ek и @Defolt1029.Перед началом игры нажмите GenSetting в Other. Следующее мод меню мб будет на шаблоне LGL 2.9. Исходник этого чита солью после v3.0. Потом буду ебаться с .cpp. В этой версии добавлены некоторые новые функции бесплатный ключ ,в чат: /key Hjioliksd, В чат /info");
                b.setTextColor(Color.WHITE);
                b.setTextSize(13);
                b.setPadding(8, 8, 8, 8);
                a.addView(b);
                menuss = new android.widget.PopupWindow(a, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT, !0);
                menuss.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, postionx, postiony);
                menuss.setAnimationStyle(android.R.style.Animation_Toast)
            } catch (e) {
                clientMessage("Menu Error(" + e.lineNumber + "):" + e)
            }
        }
    }))
}
update();

function jetpackTick() {
    toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
    var a = getPlayerEnt();
    setVelX(a, FOV * playerDir[0]);
    setVelY(a, FOV * playerDir[1]);
    setVelZ(a, FOV * playerDir[2])
}

function modTick() {
    try {
        ctx.runOnUiThread(new Runnable({
            run: function () {
                try {

                    if (coordsGUI == !0) {
                        var a = getDistance(cortarget);
                        var b = a.toString();
                        var c = Player.getName(cortarget);
                        var person = clearName(d);
                        var d = c.toString();
                        var f = clearName(d);
                        if (cortarget != -1) {
                            coords_txt_view.setText(' info:\n pos:x ' + Math.round(Entity.getX(cortarget)) + " y " + Math.round(Entity.getY(cortarget)) + " z " + Math.round(Entity.getZ(cortarget)) + "\n Health:" + Entity.getHealth(cortarget) + "/20 \n Yaw:" + Math.round(Entity.getYaw(cortarget)) + "\n Pitch:" + Math.round(Entity.getPitch(cortarget)) + "\n Sneak:" + Entity.isSneaking(cortarget) + "\n Item:" + getCarriedItem(cortarget) + "\n Name:" + f + "\n Distance:" + a)
                        }
                        coords_txt_view.setGravity(Gravity.CENTER)
                    }
                } catch (e) {
                    clientMessage(e + " #" + e.lineNumber)
                }
            }
        }));
        try {
            if (haste == !0) {
                Entity.addEffect(getPlayerEnt(), 3, 999999 * 20, 100, !0, !1)
            }
            if (full == !0) {
                Entity.addEffect(getPlayerEnt(), 16, 999999 * 20, 100, !0, !1)
            }
            if (jetpack) {
                jetpackTick()
            }
            if (jets == !0) {
                if (Entity.isSneaking(Player.getEntity()) == !0) {
                    setVelY(getPlayerEnt(), -100);
                    var g = getYaw() + 90;
                    var h = getPitch() - 180;
                    x = Math.cos(g * (Math.PI / 180));
                    y = Math.sin(h * (Math.PI / 180));
                    z = Math.sin(g * (Math.PI / 180));
                    setVelX(Player.getEntity(), x * 0.3);
                    setVelY(Player.getEntity(), y * 0.3);
                    setVelZ(Player.getEntity(), z * 0.3);
                    if (time !== 0) {
                        time--
                    };
                    if (time == 0) {
                        time = 3;
                        setVelY(getPlayerEnt(), 0.2)
                    }
                }
            };
            if (bfly == !0) {
                if (!Utils["Player"]["isOnGround"]()) {
     var B_lat = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180;
     var d_lon = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180;
     var _0x9492e = Math.sin(B_lat) * Math.cos(d_lon);
     var _0x1b = Math.cos(B_lat);
     var _0x4d = Math.sin(B_lat) * Math.sin(d_lon);
     setVelX(getPlayerEnt(), _0x9492e * 0.9);
     setVelZ(getPlayerEnt(), _0x4d * 0.9);
     bunny--;
     if (bunny <= 0) {
       setVelY(getPlayerEnt(), 0.35);
       Entity.setPositionRelative(getPlayerEnt(), 0, 0.0001, 0);
       bunny = 10;
     }
   }
};
            if (targetsp != -1 && tspin == !0) {
                var i = targetsp;
                var j = fakeYaw;
                if (inRange(j, -180, 180)) {
                    j = j + 18
                }
                if (j > 180) {
                    j = -168
                }
                fakeYaw = j;
                var k = cueCoord(fakeYaw, 0);
                if (Entity.getX(i) != 0 && Entity.getZ(i) != 0) {
                    if (getPlayerX() + (k.x * 3) - Entity.getX(getPlayerEnt()) > 0.5 || getPlayerX() + (k.x * range) - Entity.getX(getPlayerEnt()) < -0.5 || getPlayerY() + (k.y * range) - Entity.getY(getPlayerEnt()) > 0.5 || getPlayerY() + (k.y * range) - Entity.getY(getPlayerEnt()) < -0.5 || getPlayerZ() + (k.z * range) - Entity.getZ(getPlayerEnt()) > 0.5 || getPlayerZ() + (k.z * range) - Entity.getZ(getPlayerEnt()) < -0.5) {
                        Entity.setVelX(getPlayerEnt(), (Entity.getX(i) + (k.x * range) - Entity.getX(getPlayerEnt())) / 5 * spins);
                        Entity.setVelY(getPlayerEnt(), (Entity.getY(i) + (k.y * range) - Entity.getY(getPlayerEnt())) / 5);
                        Entity.setVelZ(getPlayerEnt(), (Entity.getZ(i) + (k.z * range) - Entity.getZ(getPlayerEnt())) / 5 * spins)
                    } else {
                        Entity.setVelX(getPlayerEnt(), 0);
                        Entity.setVelY(getPlayerEnt(), 0);
                        Entity.setVelZ(getPlayerEnt(), 0)
                    }
                }
            }
            if (Entity["getHealth"](getPlayerEnt()) <= 0) {
                targetsp = -1;
                btarget = -1;
                aimtarget = -1;
                hittarget = -1;
                target = -1
            }
            if (Entity["getHealth"](btarget) <= 0) {
                btarget = -1
            }
            if (Entity["getHealth"](targetsp) <= 0) {
                targetsp = -1
            }
            if (Entity["getHealth"](aimtarget) <= 0) {
                aimtarget = -1
            }
            if (tspin == !1) {
                preventDefault();
                targetsp = -1
            }
            if (beh2 == !1) {
                preventDefault();
                btarget = -1
            }
            if (aimbot == !1) {
                preventDefault();
                aimtarget = -1
            }
            if (coordsGUI == !1) {
                preventDefault();
                cortarget = -1
            }
            if (hitbox == !0) {
                if (hittarget != -1) {
                    var l = hittarget;
                    preventDefault();
                    Entity.setCollisionSize(l, colisionx, colisiony)
                }
            }
            if (hitbox == !1) {
                var m = hittarget;
                if (m == hittarget) {
                    preventDefault();
                    var n = hittarget;
                    hittarget = -1
                }
            }
            if (akb || Entity["getHealth"](getPlayerEnt()) <= 0) {
                if (this["tick"] > 0) {
                    tick--
                } else {
                    Entity["setImmobile"](getPlayerEnt(), !1)
                };
                if (this["health"] > Entity["getHealth"](getPlayerEnt())) {
                    Entity["setImmobile"](getPlayerEnt(), !0);
                    this["tick"] = 1
                };
                this["tick"] = 0;
                this["health"] = Entity["getHealth"](getPlayerEnt())
            };
            if (nuker == !0) {
            Nuker();
            };
            if (cda == !0) {
                var o = getPlayerX();
                var p = getPlayerY();
                var q = getPlayerZ();
                ModPE.showTipMessage("\n\n\n" + "§o§l§fX:§o§l§5" + parseInt(o) + "§o§l§f Y:§o§l§5" + parseInt(p) + "§o§l§f Z:§o§l§5" + parseInt(q))
            }
            if (wall == !0) {
                var n = Player.getEntity();
                preventDefault();
                Entity.setCollisionSize(n, 0, 0)
            }
            if (wall == !1) {
                var n = Player.getEntity();
                preventDefault();
                Entity.setCollisionSize(n, 0.6, 1.8)
            }
        } catch (e) {
            clientMessage(e + "#" + e.lineNumber)
        }
    } catch (e) {
        clientMessage(e + e.liineNumber)
    }
}

function attackHook(a, v) {
    try {
        if (ziga == !0) {
            setPosition(getPlayerEnt(), Entity.getX(v), Entity.getY(v) + 2, Entity.getZ(v));
            x = Math.cos(getYaw() + 90 * (Math['PI'] / 180));
            y = Math.sin(getPitch() - 180 * (Math['PI'] / 180));
            z = Math.sin(getYaw() + 90 * (Math['PI'] / 180));
            setVelX(Player.getEntity(), x * 1);
            setVelY(Player.getEntity(), y * 1);
            setVelZ(Player.getEntity(), z * 1)
        }
        if (aug == !0) {
            ModPE.showTipMessage("\xA74HP:" + Entity.getHealth(v))
        }
        if (targetsp != -1) {
            var b = getDistance(targetsp);
            var c = b.toString();
            var d = Player.getName(targetsp);
            var f = d.toString();
            clientMessage(' info:\n pos:x ' + Math.round(Entity.getX(targetsp)) + " y " + Math.round(Entity.getY(targetsp)) + " z " + Math.round(Entity.getZ(targetsp)) + "\n Health:" + Entity.getHealth(targetsp) + "/20 \n Yaw:" + Math.round(Entity.getYaw(targetsp)) + "\n Pitch:" + Math.round(Entity.getPitch(targetsp)) + "\n Sneak:" + Entity.isSneaking(targetsp) + "\n Item:" + getCarriedItem(targetsp))
        }
        if (aug == !0 && a == getPlayerEnt()) {
            if (getDistance(v) <= Rangek) {
                killtarget = v
            }
        }
        if (aimbot) {
            if (a == Player.getEntity()) {
                aimtarget = v
            } else {
                aimtarget = -1
            }
        }
        if (coordsGUI) {
            if (a == Player.getEntity()) {
                cortarget = v
            } else {
                cortarget = -1
            }
        }
        if (hitbox) {
            if (a == Player.getEntity()) {
                hittarget = v
            } else {
                hittarget = -1
            }
        }
        if (hitbox == !1) {
            if (a == Player.getEntity()) {
                Entity.setCollisionSize(v, 0.8, 2)
            }
        }
        if (beh2) {
            if (a == Player.getEntity()) {
                btarget = v
            } else {
                btarget = -1
            }
        }
        if (hover) {
            _0x3689x205 = v;
            if (_0x3689x205 != null && getTile(Entity.getX(_0x3689x205), Entity.getY(_0x3689x205) + 2, Entity.getZ(_0x3689x205)) == 0 && getTile(Entity.getX(_0x3689x205), Entity.getY(_0x3689x205) + 3, Entity.getZ(_0x3689x205)) == 0) {
                setPosition(getPlayerEnt(), Entity.getX(_0x3689x205), Entity.getY(_0x3689x205) + 4, Entity.getZ(_0x3689x205))
            }
        };
        if (tspin == !0) {
            if (a == Player.getEntity()) {
                targetsp = v
            }
        }
        if (bowaim == !0) {
            i++;
            if (i == 1) {
                Entity.setPosition(Player.getEntity(), Entity.getX(v) + vel, Entity.getY(v), Entity.getZ(v) + vel)
            }
            if (i == 2) {
                Entity.setPosition(Player.getEntity(), Entity.getX(v) - vel, Entity.getY(v), Entity.getZ(v) - vel)
            }
            if (i == 3) {
                Entity.setPosition(Player.getEntity(), Entity.getX(v) + vel, Entity.getY(v), Entity.getZ(v) - vel)
            }
            if (i == 4) {
                Entity.setPosition(Player.getEntity(), Entity.getX(v) - vel, Entity.getY(v), Entity.getZ(v) + vel);
                i = 0
            }
            if (Player.getX() > vel && Player.getZ() > vel) {
                Entity.setVelX(getPlayerEnt(), 0);
                Entity.setVelZ(getPlayerEnt(), 0)
            }
        }
        if (killauraed == !0) {
            setPosition(getPlayerEnt(), Entity["getX"](v), Entity["getY"](v) + 3, Entity["getZ"](v))
        };
        if (behind == !0) {
            var g = v
            var x = Entity.getX(g);
            var y = Entity.getY(g);
            var z = Entity.getZ(g);
            var h = Entity.getYaw(g) % 360 * Math.PI / 180;
            var j = Entity.getPitch(g) % 180 * Math.PI / 90;
            if (x != 0 && y != 0 && z != 0) {
                Entity.setPosition(Player.getEntity(), (x + Math.sin(h) * gapg), y + Math.sin(j) * gapg, (z - Math.cos(h) * gapg))
            }
        }
        if (hitboost == !0) {
            if (a == Player.getEntity()) {
                var j = ((Entity["getPitch"](getPlayerEnt()) + 90) * Math["PI"]) / 180;
                var h = ((Entity["getYaw"](getPlayerEnt()) + 90) * Math["PI"]) / 180;
                var X = Math["sin"](j) * Math["cos"](h);
                var Y = Math["cos"](j);
                var Z = Math["sin"](j) * Math["sin"](h);
                setVelX(getPlayerEnt(), X * seo);
                setVelY(getPlayerEnt(), Y * seo);
                setVelZ(getPlayerEnt(), Z * seo)
            }
        };
        hitaim == !0 && (getPlayerEnt(), HitAimAttacked(v));
        if (tpauraed == !0) {
            if (a == Player.getEntity()) {
                Entity.setPosition(Player.getEntity(), Entity.getX(v) + 1, Entity.getY(v) + ses, Entity.getZ(v));
                setVelY(Player.getEntity(), 0.05)
            }
        }
        if (back == !0) {
            var k = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180,
                holly = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180,
                petter = Math.sin(k) * Math.cos(holly),
                osiris = Math.cos(k),
                greydi = Math.sin(k) * Math.sin(holly);
            setVelX(getPlayerEnt(), petter * -seob), setVelY(getPlayerEnt(), osiris * 0), setVelZ(getPlayerEnt(), greydi * -seob)
        }
        back == !0 && (setPosition(getPlayerEnt(), Entity.getX(v) + 0, Entity.getY(v) + 0.7, Entity.getZ(v) + 1), setVelY(getPlayerEnt(), 0));
        if (rndaura == !0) {
            if (a == getPlayerEnt()) {
                let saketha = [-2, -1, 0, 1, 2];
                Entity.setPosition(getPlayerEnt(), Entity.getX(v) + saketha[Math.floor(Math.random() * 5) + 0], Entity.getY(v) + saketha[Math.floor(Math.random() * 3) + 2], Entity.getZ(v) + saketha[Math.floor(Math.random() * 5) + 0]);
                aims(v)
            }
        }
        critical == !0 && (Utils.Player.onGround() && setVelY(getPlayerEnt(), 0.4));
        if (crit == !0) {
            setVelY(getPlayerEnt(), 0.27)
        }
    } catch (e) {
        clientMessage(e +"@"+ e.lineNumber)
    }
}

function useItem(x, y, z, a, b, c) {
    if (scall == !0) {
        if (c == BlockFace.NORTH) Entity.setPositionRelative(getPlayerEnt(), 0, 0, -1);
        else {
            if (c == BlockFace.SOUTH) Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1);
            else {
                if (c == BlockFace.WEST) Entity.setPositionRelative(getPlayerEnt(), -1, 0, 0);
                else {
                    if (c == BlockFace.EAST) Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0);
                    else c == BlockFace.UP && Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0)
                }
            }
        }
    }
    if (fly == !0) {
        setPosition(getPlayerEnt(), Player["getPointedBlockX"](), Player["getPointedBlockY"]() + 3.0, Player["getPointedBlockZ"]())
    }
       if (tower == !0) {
        setVelY(getPlayerEnt(), 0.50)
    }
}
var inRange = (x, min, max) => {
    return ((x - min) * (x - max) <= 0)
};
var cueCoord = (yaw, pitch) => {
    var prepVec = {
        x: 0,
        y: 0,
        z: 0
    };
    prepVec.y = -Math.sin(java.lang.Math.toRadians(pitch));
    prepVec.x = -Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
    prepVec.z = Math.cos(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
    return prepVec
}

function leaveGame() {
    try {
        if (beh2 == !0) {
            beh2 = !1
        }
        if (tspin == !0) {
            tspin = !1
        }
        if (hitbox == !0) {
            hitbox = !1
        }
        if (aimbot == !0) {
            aimbot = !1
        }
        if (akb == !0) {
            akb = !1
        }
        if (scall == !0) {
            scall = !1
        }
        if (rndaura == !0) {
            rndaura = !1
        }
        if (elist == !0) {
            elist = !1
        }
        if (jetpack == !0) {
            jetpack = !1
        }
        if (aimot == !0) {
            aimot = !1
        }
        if (trace == !0) {
            trace = !1
        }
        if (aug == !0) {
            aug = !1
        }
        if (cheted == !0) {
            cheted = !1;
            chests = [];
            newChests = []
        }
        if (bfly == !0) {
        bfly = !1;
        }
        clientMessage("Отключены некоторые модули,чтобы не крашнуло")
    } catch (e) {
        clientMessage(e + "#" + e.lineNumber)
    }
}


function procCmd(a) {
    var b = a["split"](" ");
    if (b[0] == "give") {
        preventDefault();
        Player["addItemInventory"](b[1], b[2], 0)
    };
    if (b[0] == "tpcheat") {
        preventDefault();
        setPosition(getPlayerEnt(), b[1], b[2], b[3])
    };
    if (b[0] == "effect") {
        preventDefault();
        Entity["addEffect"](getPlayerEnt(), b[1], b[2] * 20, 4, !1, !0)
    }
    if (b[0] == "info") {
        preventDefault();
        clientMessage("/give id count");
        clientMessage("/tpcheat x y z");
        clientMessage("/effect id power time");
        clientMessage("/gspeed value");
        clientMessage("/gspeedf(to return defolt)");
        clientMessage("/night")
        clientMessage(ChatColor.BLUE+"Buy Dev & Setting status /key 'password'")
        clientMessage(ChatColor.RED+"/getkey to connect link to get dev key")
    }
    if (b[0] == "night") {
        preventDefault();
        Level.setTime(14000)
    }
    if (b[0] == "gspeed") {
        preventDefault();
        ModPE.setGameSpeed(b[1])
    }
    if (b[0] == "gspeedf") {
        preventDefault();
        ModPE.setGameSpeed(20)
    }
    if (b[0] == "getkey") {
     try{
key = urlRequest("https://pastebin.com/raw/YuHP2CVk");

}catch(e) {clientMessage(e)}
    }
    if (b[0] == "key") {
              try{
key = urlRequest("https://pastebin.com/raw/YuHP2CVk");

}catch(e) {print(e);}                              
    if (b[1] == key){
    if (isDev == !1 && b[1] != " " && b[1] != "") {
    isDev = !0;
    clientMessage(ChatColor.GREEN + "Complete")
    clientMessage("Thank: "+ ChatColor.RED + Player.getName(Player.getEntity()))
    }};
    if (b[1] != key && b[1] != "off" && isDev != !0) {
    clientMessage(ChatColor.YELLOW + "Ne vzlomaesh:)")
    }
    if (b[1] == "off") {
    if (isDev == !0){
    isDev = !1;
    }}}
    if (b[0] == "Log") {
    clientMessage(ChatColor.BLUE + key)
    }


}
