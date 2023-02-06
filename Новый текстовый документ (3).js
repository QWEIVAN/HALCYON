var f = function () {
  var g = true;
  return function (h, i) {
    var j = g ? function () {
      if (i) {
        var k = i.apply(h, arguments);
        return i = null, k;
      }
    } : function () {};
    return g = false, j;
  };
}(), e = f(this, function () {
  var g = function () {
    var h = g.constructor('return /" + this + "/')().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}");
    return !h.test(e);
  };
  return g();
});
e();
var d = function () {
  var g = true;
  return function (h, i) {
    var j = g ? function () {
      if (i) {
        var k = i.apply(h, arguments);
        return i = null, k;
      }
    } : function () {};
    return g = false, j;
  };
}(), c = d(this, function () {
  var g;
  try {
    var h = Function('return (function() {}.constructor("return this")( ));');
    g = h();
  } catch (o) {
    g = window;
  }
  var i = g.console = g.console || {}, j = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (var k = 0; k < j.length; k++) {
    var l = d.constructor.prototype.bind(d), m = j[k], n = i[m] || l;
    l.__proto__ = d.bind(d), l.toString = n.toString.bind(n), i[m] = l;
  }
});
c(), ModPE.langEdit("menu.copyright", "© Mojang AB | §4H§falcyon");
const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), getWidth = ctx.getWindowManager().getDefaultDisplay().getWidth(), getHeight = ctx.getWindowManager().getDefaultDisplay().getHeight(), sdcard = android.os.Environment.getExternalStorageDirectory(), GradientDrawable = android.graphics.drawable.GradientDrawable, Color = android.graphics.Color, parseColor = Color.parseColor, HSV = Color.HSVToColor, TextView = android.widget.TextView, LinearLayout = android.widget.LinearLayout, RelativeLayout = android.widget.RelativeLayout, Gravity = android.view.Gravity, LayoutParams = LinearLayout.LayoutParams, PopupWindow = android.widget.PopupWindow, ScrollView = android.widget.ScrollView, OnClickListener = android.view.View.OnClickListener, File = java.io.File, View = android.view.View, BufferedReader = java.io.BufferedReader, FileReader = java.io.FileReader, FOS = java.io.FileOutputStream, fromHtml = android.text.Html.fromHtml;
var Halcyon = new Object({isDev: false, build: 16, totalModules: 0, mods: new Array}), errorMessage = g => {
  if (Halcyon.isDev) clientMessage("§f[§4H§f] §e" + g.toString() + " §f(§l§o§7" + g.lineNumber + "§r§f)");
}, ifont = "chsbcbsubbububbu";
createModule = (g, h, i) => {
  Halcyon.mods.push({name: g.split(","), state: h, category: i, settings: [], view: [null, null], bind: null, code: 0}), Halcyon.totalModules++;
}, getModule = g => {
  for (var h in Halcyon.mods) {
    if (Halcyon.mods[h].name[0] == g) return Halcyon.mods[h];
  }
}, getState = g => {
  return g.state[0];
}, getBindState = g => {
  return g.state[1];
}, getCode = g => {
  return g.code;
}, createSettings = (g, h, i, j) => {
  g.settings.push(new Object({name: h, type: i, values: i == "bool" ? j : j.split(",")}));
}, getSettings = (g, h, j) => {
  for (let k in g.settings) {
    if (g.settings[k].name == h) {
      if (g.settings[k].type == "bool") return g.settings[k].values;
      if (g.settings[k].type == "string") return g.settings[k].values[j];
      if (g.settings[k].type == "int") return g.settings[k].values[j];
    }
    ;
  }
}, associateModule = (g, h, i, j, k) => {
  try {
    createModule(g, h, i);
    if (j != 0) j.forEach(function (l) {
      createSettings(getModule(g.split(",")[0]), l.name, l.type, l.value);
    }); else {}
    ;
    getModule(g.split(",")[0]).code = k;
  } catch (l) {
    errorMessage(l);
  }
};
associateModule("HitBox,H", [false, false], "Combat", [{name: "X-Scale", type: "int", value: "10,0.1,15"}, {name: "Y-Scale", type: "int", value: "10,0.1,15"}, {name: "From EntityList", type: "bool", value: false}, {name: "Type", type: "string", value: "Pointed,Nearest,Pointed,All"}], {getNearestEntity(g) {
  var h = getModule("HitBox"), j = getSettings(h, "From EntityList", 0), k = getCode(getModule("EntityList")).list;
  if (j) var l = k; else var l = Server.getAllPlayers();
  var m = g, n = null;
  for (var o = 0; o < l.length; o++) {
    if (!getCode(getModule("ClickFriends")).isFriend(o)) {
      var p = Entity.getX(l[o]) - getPlayerX(), q = Entity.getY(l[o]) - getPlayerY(), r = Entity.getZ(l[o]) - getPlayerZ(), s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      s < m && s > 0 && Entity.getHealth(l[o]) >= 1 && (m = s, n = l[o]);
    }
  }
  return n;
}, tick() {
  var g = getModule("HitBox"), h = getSettings(g, "Type", 0);
  if (h == "Nearest") {
    if (getState(g) && confirmScreenSafe() && !opn) {
      let i = getSettings(g, "X-Scale", 0), j = getSettings(g, "Y-Scale", 0);
      getCode(g).getNearestEntity(15) != null && Entity.setCollisionSize(getCode(g).getNearestEntity(15), i, j);
    }
  }
}, attack(g, h) {
  var i = getModule("HitBox"), j = getSettings(i, "Type", 0);
  if (j == "Pointed") {
    if (!getCode(getModule("ClickFriends")).isFriend(h)) {
      if (getState(i)) {
        let k = getSettings(i, "X-Scale", 0), l = getSettings(i, "Y-Scale", 0);
        g == Player.getEntity() && Entity.setCollisionSize(h, k, l);
      } else g == Player.getEntity() && Entity.setCollisionSize(h, 0.7999999999992724, 1.7999999999999972);
    }
  }
}, toggle() {}}), associateModule("KillAura,K", [false, false], "Combat", [{name: "CPS", type: "int", value: "20,1,20"}, {name: "Range", type: "int", value: "4.2,0.1,8"}, {name: "From EntityList", type: "bool", value: true}, {name: "Mode", type: "string", value: "Multi,Single,Switch,Multi"}], {toggled: false, last: 0, target: -1, getNearestEntity(g) {
  var h = getModule("KillAura"), j = getSettings(h, "From EntityList", 0), k = getCode(getModule("EntityList")).list;
  if (j) var l = k; else var l = Server.getAllPlayers();
  var m = g, n = null;
  for (var o = 0; o < l.length; o++) {
    if (!getCode(getModule("ClickFriends")).isFriend(o)) {
      var p = Entity.getX(l[o]) - getPlayerX(), q = Entity.getY(l[o]) - getPlayerY(), r = Entity.getZ(l[o]) - getPlayerZ(), s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      s < m && s > 0 && Entity.getHealth(l[o]) >= 1 && (m = s, n = l[o]);
    }
  }
  return n;
}, attack(g, h) {
  var i = getModule("KillAura"), j = getSettings(i, "Range", 0);
  getState(i) && g == getPlayerEnt() && (getCode(i).getDistance(h) <= j && (target = h));
}, getDistance(g) {
  var h = Player.getX(), i = Player.getY(), j = Player.getZ(), k = Entity.getX(g), l = Entity.getY(g), m = Entity.getZ(g), n = Math.pow(k - h, 2), o = Math.pow(l - i, 2), p = Math.pow(m - j, 2);
  return Math.sqrt(n + o + p);
}, swing() {
  var g = getModule("KillAura"), h = getSettings(g, "CPS", 0), i = getSettings(g, "Range", 0), j = getSettings(g, "Mode", 0), k = getSettings(g, "From EntityList", 0), l = getState(g), m = new android.app.Instrumentation;
  if (l && confirmScreenSafe() && !opn) {
    if (j == "Single") {
      var n = getCode(g).getNearestEntity(i);
      n != -1 && getCode(getModule("EntityList")).isValid(n) && (Entity.setCollisionSize(n, getCode(g).getDistance(n) * 2 + 2, getCode(g).getDistance(n) * 2 + 2), m.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q));
    }
    ;
    if (j == "Switch") {
      var n = getCode(g).getNearestEntity(i);
      n != -1 && getCode(getModule("EntityList")).isValid(n) && (Entity.setCollisionSize(n, getCode(g).getDistance(n) * 2 + 2, getCode(g).getDistance(n) * 2 + 2), m.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q), Entity.setCollisionSize(n, 0.7999999999999545, 1.7999999999992724));
    }
    ;
    if (j == "Multi") {
      let r = [];
      var o = getCode(getModule("EntityList")).list;
      if (k) var p = o; else var p = Server.getAllPlayers();
      p.forEach(function (s) {
        s != getPlayerEnt() && !getCode(getModule("ClickFriends")).isFriend(s) && s != -1 && (getCode(g).getDistance(s) <= i && r.push(s));
      });
      r.length != 0 && (Entity.setCollisionSize(r[getCode(g).last], getCode(g).getDistance(r[getCode(g).last]) * 2 + 2, getCode(g).getDistance(r[getCode(g).last]) * 2 + 2), m.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q), getCode(g).last++);
      ;
      var q = r.length - 1;
      getCode(g).last > q && (getCode(g).last = 0);
      ;
      p.forEach(function (s) {
        Entity.setCollisionSize(s, 0.8000000000000114, 1.800000000000182);
      });
    }
    ;
  }
}, init() {
  try {
    var g = getModule("KillAura"), h = getSettings(g, "CPS", 0), i = getSettings(g, "Range", 0), j = getSettings(g, "Mode", 0), k = getSettings(g, "From EntityList", 0), l = getState(g), m = new java.lang.Thread(new java.lang.Runnable({run() {
      try {
        android.os.Looper.prepare(), (new android.os.Handler).postDelayed(new java.lang.Runnable({run() {
          try {
            if (getState(g)) getCode(g).swing();
            (new android.os.Handler).postDelayed(this, 1e3 / h);
          } catch (n) {
            errorMessage(n + " at #" + n.lineNumber), getCode(g).init();
          }
        }}), 1e3 / h), android.os.Looper.loop();
      } catch (n) {
        errorMessage(n);
      }
    }}));
    m.start();
  } catch (n) {
    errorMessage(n);
  }
}, toggle() {
  try {
    var g = getModule("KillAura");
    getCode(g).toggled == false && (getCode(g).init(), getCode(g).toggled = true);
  } catch (h) {
    errorMessage(h);
  }
}}), associateModule("AutoClicker,C", [false, false], "Combat", [{name: "CPS", type: "int", value: "20,1,20"}], {toggled: false, init() {
  try {
    var g = getModule("AutoClicker"), h = getSettings(g, "CPS", 0), i = getState(g), j = new android.app.Instrumentation, k = new java.lang.Thread(new java.lang.Runnable({run() {
      try {
        android.os.Looper.prepare(), (new android.os.Handler).postDelayed(new java.lang.Runnable({run() {
          try {
            var l = getModule("AutoClicker"), m = getSettings(l, "CPS", 0), n = getState(l), o = new android.app.Instrumentation;
            n && confirmScreenSafe() && !opn && o.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q), (new android.os.Handler).postDelayed(this, 1e3 / m);
          } catch (p) {
            errorMessage(p + " at #" + p.lineNumber), getCode(l).init();
          }
        }}), 1e3 / h), android.os.Looper.loop();
      } catch (l) {
        errorMessage(l);
      }
    }}));
    k.start();
  } catch (l) {
    errorMessage(l);
  }
}, toggle() {
  try {
    var g = getModule("AutoClicker");
    getCode(g).toggled == false && (getCode(g).init(), getCode(g).toggled = true);
  } catch (h) {
    errorMessage(h);
  }
}}), associateModule("TriggerBot,T", [false, false], "Combat", [{name: "CPS", type: "int", value: "12,1,20"}, {name: "First tap delay (ms)", type: "int", value: "0,1,150"}, {name: "Random CPS", type: "bool", value: false}, {name: "Minimal CPS", type: "int", value: "8,1,20"}, {name: "Maximal CPS", type: "int", value: "12,1,20"}], {toggled: false, delayed: false, random(g, h) {
  return Math.floor(Math.random() * (h - g + 1)) + g;
}, init() {
  try {
    var g = getModule("TriggerBot"), h = getSettings(g, "Random CPS", 0);
    if (!h) var i = getSettings(g, "CPS", 0); else var i = getCode(g).random(getSettings(g, "Minimal CPS", 0), getSettings(g, "Maximal CPS", 0));
    var j = getState(g), k = new android.app.Instrumentation, l = new java.lang.Thread(new java.lang.Runnable({run() {
      try {
        android.os.Looper.prepare(), (new android.os.Handler).postDelayed(new java.lang.Runnable({run() {
          try {
            var m = getModule("TriggerBot"), n = getSettings(m, "Random CPS", 0);
            if (!n) var o = getSettings(m, "CPS", 0); else var o = getCode(m).random(getSettings(m, "Minimal CPS", 0), getSettings(m, "Maximal CPS", 0));
            var p = getSettings(m, "First tap delay (ms)", 0), q = getState(m), r = new android.app.Instrumentation;
            if (q && confirmScreenSafe() && !opn && Player.getPointedEntity() != -1) {
              if (!getCode(getModule("ClickFriends")).isFriend(Player.getPointedEntity()) && getCode(getModule("SafeDistance")).checkTarget(Player.getPointedEntity())) {
                p != 0 && getCode(m).delayed == false && (java.lang.Thread.sleep(p), getCode(m).delayed = true);
                ;
                r.sendKeyDownUpSync(45);
              }
              ;
            } else getCode(m).delayed = false;
            (new android.os.Handler).postDelayed(this, 1e3 / o);
          } catch (s) {
            errorMessage(s + " at #" + s.lineNumber), getCode(m).init();
          }
        }}), 1e3 / i), android.os.Looper.loop();
      } catch (m) {
        errorMessage(m);
      }
    }}));
    l.start();
  } catch (m) {
    errorMessage(m);
  }
}, toggle() {
  try {
    var g = getModule("TriggerBot");
    getCode(g).toggled == false && (getCode(g).init(), getCode(g).toggled = true);
  } catch (h) {
    errorMessage(h);
  }
}}), associateModule("SafeDistance,SD", [false, false], "Combat", [{name: "Distance", type: "int", value: "3.6,0.1,8"}], {getDistance(g) {
  var h = Player.getX(), i = Player.getY(), j = Player.getZ(), k = Entity.getX(g), l = Entity.getY(g), m = Entity.getZ(g), n = Math.pow(k - h, 2), o = Math.pow(l - i, 2), p = Math.pow(m - j, 2);
  return Math.sqrt(n + o + p);
}, checkTarget(g) {
  var b3 = b, h = getModule("SafeDistance"), i = getSettings(h, "Distance", 0);
  return getState(h) ? getCode(h).getDistance(g) > i ? false : true : true;
}}), associateModule("AntiKnockback,AK", [false, false], "Combat", 0, {timing: 0, hp: 0, tick() {
  var g = getModule("AntiKnockback");
  getState(g) && confirmGameScreen() && !getState(getModule("X-Ray")) && (getCode(g).timing = 0, getCode(g).hp > Entity.getHealth(Player.getEntity()) && (getCode(g).timing = 1, setVelX(Player.getEntity(), 0), setVelY(Player.getEntity(), 0), setVelZ(Player.getEntity(), 0), Entity.setImmobile(Player.getEntity(), true)), getCode(g).timing == 0 && Entity.setImmobile(Player.getEntity(), false), getCode(g).hp = Entity.getHealth(Player.getEntity()), getCode(g).timing != 0 && getCode(g).timing--);
}}), associateModule("AimBot,A", [false, false], "Combat", [{name: "HeadLock", type: "bool", value: true}, {name: "Lock", type: "bool", value: true}, {name: "From EntityList", type: "bool", value: true}, {name: "Mode", type: "string", value: "Pointed,Pointed,Nearest"}, {name: "Distance", type: "int", value: "6,0.1,25"}], {rotating: false, target: -1, getDistance(g) {
  var h = Player.getX(), i = Player.getY(), j = Player.getZ(), k = Entity.getX(g), l = Entity.getY(g), m = Entity.getZ(g), n = Math.pow(k - h, 2), o = Math.pow(l - i, 2), p = Math.pow(m - j, 2);
  return Math.sqrt(n + o + p);
}, getNearestEntity(g) {
  var h = getModule("AimBot"), j = getSettings(h, "From EntityList", 0), k = getCode(getModule("EntityList")).list;
  if (j) var l = k; else var l = Server.getAllPlayers();
  var m = g, n = null;
  for (var o = 0; o < l.length; o++) {
    if (!getCode(getModule("ClickFriends")).isFriend(o)) {
      var p = Entity.getX(l[o]) - getPlayerX(), q = Entity.getY(l[o]) - getPlayerY(), r = Entity.getZ(l[o]) - getPlayerZ(), s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      s < m && s > 0 && Entity.getHealth(l[o]) >= 1 && (m = s, n = l[o]);
    }
  }
  return n;
}, avr() {
  var g = getModule("AimBot"), h = getSettings(g, "Lock", 0), i = getSettings(g, "Distance", 0), j = getSettings(g, "Mode", 0);
  if (getState(g)) {
    if (h || j == "Nearest") {
      if (j == "Nearest") getCode(g).target = getCode(g).getNearestEntity(i);
    }
    getCode(g).target != -1 && getCode(g).getDistance(getCode(g).target) <= i && !getCode(getModule("ClickFriends")).isFriend(getCode(g).target) ? (getCode(g).aim(getCode(g).target), getCode(g).rotating = true) : getCode(g).rotating = false;
  } else getCode(g).rotating = false;
}, aim(g) {
  var h = getModule("AimBot"), i = getSettings(h, "HeadLock", 0);
  if (g != null) {
    var j = Entity.getX(g) - getPlayerX();
    if (i) var k = Entity.getY(g) - getPlayerY(); else var k = Entity.getY(g) - 1 - getPlayerY();
    var l = Entity.getZ(g) - getPlayerZ();
    if (Entity.getEntityTypeId(g) != 63) k += 0.5;
    var m = 0.5 + Entity.getX(g), n = Entity.getY(g), o = 0.5 + Entity.getZ(g), p = Math.sqrt(j * j + k * k + l * l), k = k / p, q = Math.asin(k);
    q = q * 180 / Math.PI, q = -q;
    var r = -Math.atan2(m - (Player.getX() + 0.5), o - (Player.getZ() + 0.5)) * (180 / Math.PI);
    q < 89 && q > -89 && Entity.setRot(Player.getEntity(), r, q);
  }
}, attack(g, h) {
  var i = getModule("AimBot"), j = getSettings(i, "Distance", 0), k = getSettings(i, "Mode", 0);
  getState(i) && (g == Player.getEntity() && getCode(i).getDistance(h) <= j && k == "Pointed" && (getCode(i).aim(h), getCode(i).target = h));
}}), associateModule("TPAura,TA", [false, false], "Combat", [{name: "Expand", type: "int", value: "1,0.1,10"}], {attack(g, h) {
  var i = getModule("TPAura"), j = getSettings(i, "Expand", 0);
  getState(i) && (g == Player.getEntity() && (Entity.setPosition(Player.getEntity(), Entity.getX(h), Entity.getY(h) + j, Entity.getZ(h)), setVelY(Player.getEntity(), 0.0500000000001819)));
}}), associateModule("HitBoost,HB", [false, false], "Combat", [{name: "Velocity", type: "int", value: "1.3,0.1,5"}], {attack(g, h) {
  var i = getModule("HitBoost"), j = getSettings(i, "Velocity", 0);
  if (getState(i)) {
    if (g == Player.getEntity()) {
      var k = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180, l = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180, m = Math.sin(k) * Math.cos(l), n = Math.cos(k), o = Math.sin(k) * Math.sin(l);
      setVelX(getPlayerEnt(), m * j), setVelY(getPlayerEnt(), n * j), setVelZ(getPlayerEnt(), o * j);
    }
  }
}}), associateModule("Follow,F", [false, false], "Combat", [{name: "From EntityList", type: "bool", value: true}], {getNearestEntity(g) {
  var h = getModule("Follow"), j = getSettings(h, "From EntityList", 0), k = getCode(getModule("EntityList")).list;
  if (j) var l = k; else var l = Server.getAllPlayers();
  var m = g, n = null;
  for (var o = 0; o < l.length; o++) {
    if (!getCode(getModule("ClickFriends")).isFriend(o)) {
      var p = Entity.getX(l[o]) - getPlayerX(), q = Entity.getY(l[o]) - getPlayerY(), r = Entity.getZ(l[o]) - getPlayerZ(), s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      s < m && s > 0 && Entity.getHealth(l[o]) >= 1 && (m = s, n = l[o]);
    }
  }
  return n;
}, isLiquid(g) {
  if (g == 8 || g == 9 || g == 10 || g == 11) return true;
  return false;
}, isInWater() {
  var g = getModule("Follow");
  if (getCode(g).isLiquid(getTile(getPlayerX(), getPlayerY() - 1.8100000000004002, getPlayerZ()))) return true;
  return false;
}, onground: function () {
  var g = getModule("Follow"), h = getPlayerY();
  while (h > 1) h -= 1;
  if (Math.round(h * 100) >= 61 && Math.round(h * 100) <= 63 && getTile(getPlayerX(), getPlayerY() - 1.8100000000004002, getPlayerZ()) != 0 && !getCode(g).isLiquid(getTile(getPlayerX(), getPlayerY() - 1.8100000000004002, getPlayerZ()))) return true;
  if (Math.round(h * 100) >= 11 && Math.round(h * 100) <= 13 && getTile(getPlayerX(), getPlayerY() - 1.8100000000004002, getPlayerZ()) != 0 && !getCode(g).isLiquid(getTile(getPlayerX(), getPlayerY() - 1.8100000000004002, getPlayerZ()))) return true;
  return false;
}, tick(g, h) {
  var i = getModule("Follow");
  if (getState(i)) {
    var j = getCode(i).getNearestEntity(150);
    if (j != -1 && j != null) {
      let k = getPlayerX(), l = getPlayerZ(), m = Entity.getX(j), n = Entity.getZ(j);
      if (getCode(i).onground() && getPlayerY() - 1.6199999999998909 - (Entity.getEntityTypeId(j) == 63 ? Entity.getY(j) - 1.6199999999998909 : Entity.getY(j)) < -0.7999999999992724) setVelY(getPlayerEnt(), 0.4199999999999591);
      if (getCode(i).isInWater() && getPlayerY() - 1.6200000000008004 - (Entity.getEntityTypeId(j) == 63 ? Entity.getY(j) - 1.6200000000000045 : Entity.getY(j)) < -0.7999999999992724) setVelY(getPlayerEnt(), 0.2999999999992724);
      let o = Math.sqrt(Math.pow(k - m, 2) + Math.pow(l - n, 2));
      if (o <= 1) return;
      setVelX(getPlayerEnt(), -Math.max(-0.3500000000003638, Math.min(0.3500000000003638, (k - m) / o / 3))), setVelZ(getPlayerEnt(), -Math.max(-0.34999999999990905, Math.min(0.3500000000003638, (l - n) / o / 3)));
    }
  }
}}), associateModule("AttackParticles,AP", [false, false], "Combat", 0, {roundPart(g, h, j, k, l, m, n, o, p) {
  var bs = b;
  l = l / 2;
  !n && (n = 0);
  !o && (o = 0);
  !p && (p = 0);
  for (var q = 0; q < 2 * (Math.PI * l); q = q + 0.09999999999990905) {
    Level.addParticle(g, h + 0.5 + Math.sin(q) * l, j, k + 0.5 + Math.cos(q) * l, n, o, p, m);
  }
}, attack(g, h) {
  var i = getModule("AttackParticles");
  getState(i) && (g == Player.getEntity() && getCode(i).roundPart(ParticleType.crit, Entity.getX(h) - 0.5, Entity.getY(h), Entity.getZ(h) - 0.5, 1.2999999999992724, 1));
}}), associateModule("TargetSpin,TS", [false, false], "Combat", [{name: "Velocity", type: "int", value: "1,0.1,2"}, {name: "Range", type: "int", value: "2,0.1,5"}], {target: -1, fakeYaw: 0, inRange(g, h, i) {
  return (g - h) * (g - i) <= 0;
}, tick() {
  var g = getModule("TargetSpin"), h = getSettings(g, "Range", 0), i = getSettings(g, "Velocity", 0);
  if (getState(g) && getCode(g).target != -1) {
    var j = getCode(g).target, k = getCode(g).fakeYaw;
    getCode(g).inRange(k, -180, 180) && (k = k + 18);
    k > 180 && (k = -168);
    getCode(g).fakeYaw = k;
    var l = cueCoord(k, 0);
    Entity.getX(j) != 0 && Entity.getZ(j) != 0 && (getPlayerX() + l.x * 3 - Entity.getX(getPlayerEnt()) > 0.5 || getPlayerX() + l.x * h - Entity.getX(getPlayerEnt()) < -0.5 || getPlayerY() + l.y * h - Entity.getY(getPlayerEnt()) > 0.5 || getPlayerY() + l.y * h - Entity.getY(getPlayerEnt()) < -0.5 || getPlayerZ() + l.z * h - Entity.getZ(getPlayerEnt()) > 0.5 || getPlayerZ() + l.z * h - Entity.getZ(getPlayerEnt()) < -0.5 ? (Entity.setVelX(getPlayerEnt(), (Entity.getX(j) + l.x * h - Entity.getX(getPlayerEnt())) / 5 * i), Entity.setVelZ(getPlayerEnt(), (Entity.getZ(j) + l.z * h - Entity.getZ(getPlayerEnt())) / 5 * i)) : (Entity.setVelX(getPlayerEnt(), 0), Entity.setVelY(getPlayerEnt(), 0), Entity.setVelZ(getPlayerEnt(), 0)));
  }
}, attack(g, h) {
  var i = getModule("TargetSpin");
  getState(i) && (g == Player.getEntity() && (getCode(i).target = h));
}, toggle() {
  var g = getModule("TargetSpin");
  !getState(g) && (getCode(g).target = -1);
}}), associateModule("Behind,B", [false, false], "Combat", [{name: "From EntityList", type: "bool", value: true}, {name: "Mode", type: "string", value: "Nearest,Nearest,Pointed"}, {name: "Lock", type: "bool", value: true}, {name: "Range (Nearest)", type: "int", value: "10,0.1,25"}, {name: "Gap", type: "int", value: "3,0.1,8"}], {target: -1, getNearestEntity(g) {
  var h = getModule("Behind"), j = getSettings(h, "From EntityList", 0), k = getCode(getModule("EntityList")).list;
  if (j) var l = k; else var l = Server.getAllPlayers();
  var m = g, n = null;
  for (var o = 0; o < l.length; o++) {
    if (!getCode(getModule("ClickFriends")).isFriend(k[o])) {
      var p = Entity.getX(l[o]) - getPlayerX(), q = Entity.getY(l[o]) - getPlayerY(), r = Entity.getZ(l[o]) - getPlayerZ(), s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      s < m && s > 0 && Entity.getHealth(l[o]) >= 1 && (m = s, n = l[o]);
    }
  }
  ;
  return n;
}, avr() {
  var g = getModule("Behind"), h = getSettings(g, "Mode", 0), i = getSettings(g, "Lock", 0), j = getSettings(g, "Range (Nearest)", 0), k = getSettings(g, "Gap", 0);
  if (getState(g)) {
    if (i) {
      h == "Nearest" && (getCode(g).target = getCode(g).getNearestEntity(j));
      ;
      if (getCode(g).target != null && getCode(g).target != -1 && getCode(getModule("EntityList")).isValid(getCode(g).target)) {
        var l = Entity.getX(getCode(g).target), m = Entity.getY(getCode(g).target), n = Entity.getZ(getCode(g).target), o = Entity.getYaw(getCode(g).target) % 360 * Math.PI / 180, p = Entity.getPitch(getCode(g).target) % 180 * Math.PI / 90;
        l != 0 && m != 0 && n != 0 && (Entity.setPosition(getPlayerEnt(), l + Math.sin(o) * k, m + Math.sin(p) * k, n - Math.cos(o) * k), setVelY(getPlayerEnt(), 0));
      }
    }
  }
}, attack(g, h) {
  var i = getModule("Behind"), j = getSettings(i, "Mode", 0), k = getSettings(i, "Lock", 0), l = getSettings(i, "Gap", 0);
  if (getState(i)) {
    g == Player.getEntity() && j == "Pointed" ? getCode(i).target = h : getCode(i).target = -1;
    ;
    if (j == "Pointed" && !k) {
      if (getCode(i).target != null && getCode(i).target != -1 && getCode(getModule("EntityList")).isValid(getCode(i).target)) {
        var m = Entity.getX(getCode(i).target), n = Entity.getY(getCode(i).target), o = Entity.getZ(getCode(i).target), p = Entity.getYaw(getCode(i).target) % 360 * Math.PI / 180, q = Entity.getPitch(getCode(i).target) % 180 * Math.PI / 90;
        Entity.setPosition(getPlayerEnt(), m + Math.sin(p) * l, n + Math.sin(q) * l, o - Math.cos(p) * l), setVelY(getPlayerEnt(), 0);
      }
    }
  }
}, toggle() {
  var g = getModule("Behind"), h = getSettings(g, "Mode", 0), i = getSettings(g, "Range (Nearest)", 0);
  if (getState(g)) {
    if (h == "Nearest") {
      if (getCode(getModule("EntityList")).isValid(getCode(g).getNearestEntity(i))) getCode(g).target = getCode(g).getNearestEntity(i);
    }
    ;
  }
}}), associateModule("Flight,F", [false, false], "Movement", [{name: "Type", type: "string", value: "Mineplex,Crouch,Bounce,Mineplex,AirStack"}, {name: "Velocity", type: "int", value: "1.5,0.1,5"}], {timing: 10, isliquid: function (g) {
  var h = getModule("Flight");
  if (g == 8 || g == 9 || g == 10 || g == 11) return true;
  return false;
}, onground: function () {
  var g = getModule("Flight"), h = getPlayerY();
  while (h > 1) h -= 1;
  if (Math.round(h * 100) >= 61 && Math.round(h * 100) <= 63 && getTile(getPlayerX(), getPlayerY() - 1.8100000000000023, getPlayerZ()) != 0 && !getCode(g).isliquid(getTile(getPlayerX(), getPlayerY() - 1.8099999999999454, getPlayerZ()))) return true;
  if (Math.round(h * 100) >= 11 && Math.round(h * 100) <= 13 && getTile(getPlayerX(), getPlayerY() - 1.8099999999994907, getPlayerZ()) != 0 && !getCode(g).isliquid(getTile(getPlayerX(), getPlayerY() - 1.8099999999999454, getPlayerZ()))) return true;
  return false;
}, tick() {
  var g = getModule("Flight"), h = getSettings(g, "Type", 0), i = getSettings(g, "Velocity", 0);
  if (getState(g) && confirmScreenSafe()) {
    if (h == "Crouch") {
      if (Entity.isSneaking(Player.getEntity()) == true) {
        let j = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180, k = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180, l = Math.sin(j) * Math.cos(k), m = Math.cos(j), n = Math.sin(j) * Math.sin(k);
        setVelX(getPlayerEnt(), l * i), setVelY(getPlayerEnt(), 0.010000000000218279), setVelZ(getPlayerEnt(), n * i), Entity.setPositionRelative(getPlayerEnt(), 0, 0.0005000000001018634, 0);
      }
    }
    ;
    if (h == "Mineplex") {
      let o = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180, p = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180, q = Math.sin(o) * Math.cos(p), r = Math.cos(o), s = Math.sin(o) * Math.sin(p);
      setVelX(getPlayerEnt(), q * i), setVelY(getPlayerEnt(), 0), setVelZ(getPlayerEnt(), s * i);
    }
    ;
    if (h == "Bounce") {
      if (!getCode(g).onground()) {
        let t = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180, u = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180, v = Math.sin(t) * Math.cos(u), w = Math.cos(t), z = Math.sin(t) * Math.sin(u);
        setVelX(getPlayerEnt(), v * i), setVelZ(getPlayerEnt(), z * i), getCode(g).timing--, getCode(g).timing <= 0 && (setVelY(getPlayerEnt(), 0.34999999999990905), Entity.setPositionRelative(getPlayerEnt(), 0, 0.00009999999929277692, 0), getCode(g).timing = 10);
      }
    }
    ;
    h == "AirStack" && (Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 0.19000000000050932, Player.getZ()), setVelY(getPlayerEnt(), -0.20000000000004547));
  }
}, toggle() {
  var g = getModule("Flight");
  getState(g) && getSettings(g, "Type", 0) == "Mineplex" ? Entity.setPositionRelative(getPlayerEnt(), 0, 0.0500000000001819, 0) : (setVelX(Player.getEntity(), 0), setVelY(Player.getEntity(), -0.09999999999854481), setVelZ(Player.getEntity(), 0));
}}), associateModule("Speed,S", [false, false], "Movement", 0, {tick() {
  var g = getModule("Speed");
  getState(g) && (setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.099999999999909), setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.1000000000003638));
}}), associateModule("BunnyHop,BH", [false, false], "Movement", [{name: "Auto Move", type: "bool", value: true}, {name: "X-Velocity", type: "int", value: "0.8,0.1,2"}, {name: "Y-Velocity", type: "int", value: "0.5,0.1,1.5"}], {isLiquid(g) {
  if (g == 8 || g == 9 || g == 10 || g == 11) return true;
  return false;
}, isInWater() {
  var bS = b, g = getModule("BunnyHop");
  if (getCode(g).isLiquid(getTile(getPlayerX(), getPlayerY() - 1.8100000000013097, getPlayerZ()))) return true;
  return false;
}, onground: function () {
  var g = getModule("BunnyHop"), h = getPlayerY();
  while (h > 1) h -= 1;
  if (Math.round(h * 100) >= 61 && Math.round(h * 100) <= 63 && getTile(getPlayerX(), getPlayerY() - 1.8100000000004002, getPlayerZ()) != 0 && !getCode(g).isLiquid(getTile(getPlayerX(), getPlayerY() - 1.8100000000013097, getPlayerZ()))) return true;
  if (Math.round(h * 100) >= 11 && Math.round(h * 100) <= 13 && getTile(getPlayerX(), getPlayerY() - 1.8100000000004002, getPlayerZ()) != 0 && !getCode(g).isLiquid(getTile(getPlayerX(), getPlayerY() - 1.8099999999999454, getPlayerZ()))) return true;
  return false;
}, tick() {
  var g = getModule("BunnyHop"), h = getSettings(g, "Y-Velocity", 0), i = getSettings(g, "X-Velocity", 0), j = getSettings(g, "Auto Move", 0);
  if (getState(g) && getCode(g).onground()) {
    setVelY(getPlayerEnt(), +h);
    if (j) {
      var k = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180, l = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180, m = Math.sin(k) * Math.cos(l), n = Math.sin(k) * Math.sin(l), o = Math.cos(k);
      setVelZ(getPlayerEnt(), i * n), setVelX(getPlayerEnt(), i * m);
    }
  }
}}), associateModule("LongJump,L", [false, false], "Movement", [{name: "Velocity", type: "int", value: "2,0.1,3"}], {gui: null, jump() {
  var g = getModule("LongJump"), h = getSettings(g, "Velocity", 0);
  Entity.setPositionRelative(getPlayerEnt(), 0, 0.0500000000001819, 0), setVelX(Player.getEntity(), 0), setVelY(Player.getEntity(), 0), setVelZ(Player.getEntity(), 0);
  let i = (Entity.getPitch(getPlayerEnt()) + 90) * Math.PI / 180, j = (Entity.getYaw(getPlayerEnt()) + 90) * Math.PI / 180, k = Math.sin(i) * Math.cos(j), l = Math.sin(i) * Math.sin(j), m = Math.cos(i);
  setVelY(getPlayerEnt(), 0.46999999999934516), setVelZ(getPlayerEnt(), h * l), setVelX(getPlayerEnt(), h * k);
}, button() {
  var g = getModule("LongJump");
  uithread(() => {
    try {
      let i = false, j = 0, k = 0, l = 0, m = 0;
      var h = false;
      let n = new android.widget.TextView(ctx);
      n.setText(g.name[1]), n.setTextColor(-1), n.setTextSize(gs(14)), n.setTransformationMethod(null), n.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), n.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), n.setBackground(style.main()), n.setGravity(android.view.Gravity.CENTER), n.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (o, p) {
        try {
          i = true;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              n.setBackground(style.custom_corner("#2d2d2d", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)]));
              break;
            case android.view.MotionEvent.ACTION_UP:
              n.setBackground(style.main());
              if (!h) {
                if (confirmScreenSafe()) getCode(g).jump();
              }
              ;
              break;
            case android.view.MotionEvent.ACTION_CANCEL:
              break;
          }
          if (!i) return false;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              j = l - p.getRawX(), k = m - p.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              (p.getRawX() + j - l >= 3 || p.getRawX() + j - l <= -3 || p.getRawY() + k - m >= 3 || p.getRawY() + k - m <= -3) && (h = true, l = p.getRawX() + j, m = p.getRawY() + k, getCode(g).gui.update(l, m, -1, -1));
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              i = false, h = false;
              break;
          }
        } catch (q) {
          errorMessage(q);
        }
        return true;
      }})), getCode(g).gui = new android.widget.PopupWindow(n, gs(dip2px(50)), gs(dip2px(50))), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch (o) {
      errorMessage(o);
    }
  });
}, toggle() {
  var c4 = b, g = getModule("LongJump");
  getState(g) ? getCode(g).button() : getCode(g).gui.dismiss();
}}), associateModule("AirJump,A", [false, false], "Movement", [{name: "Velocity", type: "int", value: "0.4,0.1,1"}], {gui: null, jump() {
  var g = getModule("AirJump"), h = getSettings(g, "Velocity", 0);
  setVelY(getPlayerEnt(), +h);
}, button() {
  var g = getModule("AirJump");
  uithread(() => {
    try {
      let i = false, j = 0, k = 0, l = 0, m = 0;
      var h = false;
      let n = new android.widget.TextView(ctx);
      n.setText("J"), n.setTextColor(-1), n.setTextSize(gs(14)), n.setTransformationMethod(null), n.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), n.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), n.setBackground(style.main()), n.setGravity(android.view.Gravity.CENTER), n.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (o, p) {
        try {
          i = true;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              n.setBackground(style.custom_corner("#2d2d2d", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)]));
              break;
            case android.view.MotionEvent.ACTION_UP:
              n.setBackground(style.main());
              if (!h) {
                if (confirmScreenSafe()) getCode(g).jump();
              }
              ;
              break;
            case android.view.MotionEvent.ACTION_CANCEL:
              break;
          }
          if (!i) return false;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              j = l - p.getRawX(), k = m - p.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              (p.getRawX() + j - l >= 3 || p.getRawX() + j - l <= -3 || p.getRawY() + k - m >= 3 || p.getRawY() + k - m <= -3) && (h = true, l = p.getRawX() + j, m = p.getRawY() + k, getCode(g).gui.update(l, m, -1, -1));
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              i = false, h = false;
              break;
          }
        } catch (q) {
          errorMessage(q);
        }
        return true;
      }})), getCode(g).gui = new android.widget.PopupWindow(n, gs(dip2px(50)), gs(dip2px(50))), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch (o) {
      errorMessage(o);
    }
  });
}, toggle() {
  var g = getModule("AirJump");
  getState(g) ? getCode(g).button() : getCode(g).gui.dismiss();
}}), associateModule("Move,Mv", [false, false], "Movement", [{name: "Distance", type: "int", value: "5,0.1,50"}], {gui: null, playerDir: [0, 0, 0], jump() {
  var g = getModule("Move"), h = getSettings(g, "Distance", 0), i = getYaw() + 90, j = getPitch() - 180;
  x = Math.cos(i * (Math.PI / 180)), y = Math.sin(j * (Math.PI / 180)), z = Math.sin(i * (Math.PI / 180)), Entity.setPositionRelative(getPlayerEnt(), x * h, y * h, z * h);
}, button() {
  var g = getModule("Move");
  uithread(() => {
    try {
      let i = false, j = 0, k = 0, l = 0, m = 0;
      var h = false;
      let n = new android.widget.TextView(ctx);
      n.setText("Move"), n.setTextColor(-1), n.setTextSize(gs(14)), n.setTransformationMethod(null), n.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), n.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), n.setBackground(style.main()), n.setGravity(android.view.Gravity.CENTER), n.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (o, p) {
        try {
          i = true;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              n.setBackground(style.custom_corner("#2d2d2d", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)]));
              break;
            case android.view.MotionEvent.ACTION_UP:
              n.setBackground(style.main());
              if (!h) {
                if (confirmScreenSafe()) getCode(g).jump();
              }
              ;
              break;
            case android.view.MotionEvent.ACTION_CANCEL:
              break;
          }
          if (!i) return false;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              j = l - p.getRawX(), k = m - p.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              (p.getRawX() + j - l >= 3 || p.getRawX() + j - l <= -3 || p.getRawY() + k - m >= 3 || p.getRawY() + k - m <= -3) && (h = true, l = p.getRawX() + j, m = p.getRawY() + k, getCode(g).gui.update(l, m, -1, -1));
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              i = false, h = false;
              break;
          }
        } catch (q) {
          errorMessage(q);
        }
        return true;
      }})), getCode(g).gui = new android.widget.PopupWindow(n, gs(dip2px(75)), gs(dip2px(50))), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch (o) {
      errorMessage(o);
    }
  });
}, toggle() {
  var g = getModule("Move");
  getState(g) ? getCode(g).button() : getCode(g).gui.dismiss();
}}), associateModule("Glide,G", [false, false], "Movement", [{name: "Velocity", type: "int", value: "0.1,0.1,1"}, {name: "Mode", type: "string", value: "Down,Up,Down,No Y-Motion"}], {tick() {
  var g = getModule("Glide"), h = getSettings(g, "Mode", 0), i = getSettings(g, "Velocity", 0);
  if (getState(g)) {
    if (h == "Down") setVelY(getPlayerEnt(), -i);
    if (h == "Up") setVelY(getPlayerEnt(), i);
    if (h == "No Y-Motion") setVelY(getPlayerEnt(), 0);
  }
}}), associateModule("JetPack,Jp", [false, false], "Movement", [{name: "Velocity", type: "int", value: "1.3,0.1,15"}], {tick() {
  var g = getModule("JetPack"), h = getSettings(g, "Velocity", 0);
  if (getState(g)) {
    var i = getYaw() + 90, j = getPitch() - 180;
    x = Math.cos(i * (Math.PI / 180)), y = Math.sin(j * (Math.PI / 180)), z = Math.sin(i * (Math.PI / 180)), setVelX(Player.getEntity(), x * h), setVelY(Player.getEntity(), y * h), setVelZ(Player.getEntity(), z * h);
  }
}}), associateModule("Scaffold,Sf", [false, false], "Movement", 0, {item(g, h, i, j, k, l, m, n) {
  var o = getModule("Scaffold");
  if (getState(o)) {
    if (l == 2) Entity.setPositionRelative(getPlayerEnt(), 0, 0, -1); else {
      if (l == 3) Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1); else {
        if (l == 4) Entity.setPositionRelative(getPlayerEnt(), -1, 0, 0); else {
          if (l == 5) Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0); else l == 1 && Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0);
        }
      }
    }
  }
}}), associateModule("Jesus,Js", [false, false], "Movement", 0, {isLiquid(g) {
  if (g == 8 || g == 9 || g == 10 || g == 11) return true;
  return false;
}, isInWater() {
  var g = getModule("Jesus");
  if (getCode(g).isLiquid(getTile(getPlayerX(), getPlayerY() - 1.8099999999999454, getPlayerZ()))) return true;
  return false;
}, tick() {
  var g = getModule("Jesus");
  if (getState(g)) {
    if (getTile(getPlayerX(), getPlayerY() - 0.8000000000001819, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 0.8000000000001819, getPlayerZ()) <= 11) setVelY(getPlayerEnt(), 0.1999999999998181); else {
      if (getTile(getPlayerX(), getPlayerY() - 1.2999999999992724, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 1.300000000000182, getPlayerZ()) <= 11) setVelY(getPlayerEnt(), 0.0500000000001819); else {
        if (getTile(getPlayerX(), getPlayerY() - 1.6799999999998363, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 1.680000000000291, getPlayerZ()) <= 11) setVelY(getPlayerEnt(), 0.014999999999417923);
      }
    }
    getCode(g).isInWater() && setVelY(getPlayerEnt(), 0.1000000000003638);
  }
}}), associateModule("Tower,T", [false, false], "Movement", 0, {item(g, h, i, j, k, l, m, n) {
  var o = getModule("Tower");
  getState(o) && setVelY(getPlayerEnt(), 0.5);
}}), associateModule("TapTp,TT", [false, false], "Movement", 0, {item(g, h, i, j, k, l, m, n) {
  var o = getModule("TapTp");
  getState(o) && Entity.setPosition(Player.getEntity(), g, h + 0.09999999999990905, i);
}}), associateModule("InfiniteElytra,If", [false, false], "Movement", 0, {tick() {
  var g = getModule("InfiniteElytra");
  if (getState(g)) {
    if (Level.getTile(Entity.getX(Player.getEntity()), Entity.getY(Player.getEntity()) - 1, Entity.getZ(Player.getEntity())) == 0) {
      if (Player.getArmorSlot(1) == 444) {
        Entity.getVelX(Player.getEntity()) >= 0.5 && (Entity.getPitch(Player.getEntity()) <= -10 && (Entity.setPosition(Player.getEntity(), Entity.getX(Player.getEntity()) + 0.09999999999990905, Entity.getY(Player.getEntity()) + 0.25, Entity.getZ(Player.getEntity())), Entity.setVelX(Player.getEntity(), Entity.getVelX(Player.getEntity()) + 0.08999999999997499)));
        ;
        Entity.getVelZ(Player.getEntity()) >= 0.5 && (Entity.getPitch(Player.getEntity()) <= -10 && (Entity.setPosition(Player.getEntity(), Entity.getX(Player.getEntity()), Entity.getY(Player.getEntity()) + 0.25, Entity.getZ(Player.getEntity()) + 0.1000000000003638), Entity.setVelZ(Player.getEntity(), Entity.getVelZ(Player.getEntity()) + 0.08999999999991815)));
        ;
        Entity.getVelX(Player.getEntity()) <= -0.5 && (Entity.getPitch(Player.getEntity()) <= -10 && (Entity.setPosition(Player.getEntity(), Entity.getX(Player.getEntity()) - 0.10000000000002274, Entity.getY(Player.getEntity()) + 0.25, Entity.getZ(Player.getEntity())), Entity.setVelX(Player.getEntity(), Entity.getVelX(Player.getEntity()) - 0.09000000000014552)));
        ;
        Entity.getVelZ(Player.getEntity()) <= -0.5 && (Entity.getPitch(Player.getEntity()) <= -10 && (Entity.setPosition(Player.getEntity(), Entity.getX(Player.getEntity()), Entity.getY(Player.getEntity()) + 0.25, Entity.getZ(Player.getEntity()) - 0.09999999999990905), Entity.setVelZ(Player.getEntity(), Entity.getVelZ(Player.getEntity()) - 0.09000000000014552)));
      }
    }
  }
}}), associateModule("AutoSprint,AS", [false, false], "Movement", 0, {toggled: false, init() {
  try {
    var g = getModule("AutoSprint"), h = getState(g), i = new android.app.Instrumentation, j = new java.lang.Thread(new java.lang.Runnable({run() {
      try {
        android.os.Looper.prepare(), (new android.os.Handler).postDelayed(new java.lang.Runnable({run() {
          try {
            var k = getModule("AutoSprint"), l = getState(k), m = new android.app.Instrumentation;
            l && confirmScreenSafe() && !opn && (Entity.getVelX(getPlayerEnt()) != 0 || Entity.getVelZ(getPlayerEnt()) != 0) && m.sendKeyDownUpSync(113), (new android.os.Handler).postDelayed(this, 50);
          } catch (n) {
            errorMessage(n + " at #" + n.lineNumber), getCode(k).init();
          }
        }}), 50), android.os.Looper.loop();
      } catch (k) {
        errorMessage(k);
      }
    }}));
    j.start();
  } catch (k) {
    errorMessage(k);
  }
}, toggle() {
  try {
    var g = getModule("AutoSprint");
    getCode(g).toggled == false && (getCode(g).init(), getCode(g).toggled = true);
  } catch (h) {
    errorMessage(h);
  }
}}), associateModule("Elevator,E", [false, false], "Player", [{name: "Level", type: "int", value: "2,1,10"}], {gui: null, button() {
  var g = getModule("Elevator"), h = getSettings(g, "Level", 0);
  uithread(() => {
    try {
      let j = false, k = 0, l = 0, m = 0, n = 0;
      var i = false;
      let o = new android.widget.LinearLayout(ctx);
      o.setOrientation(1), o.setBackground(style.main());
      let p = new android.widget.TextView(ctx);
      p.setText("Up"), p.setTextColor(-1), p.setTextSize(gs(14)), p.setTransformationMethod(null), p.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(75)), gs(dip2px(50)))), p.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), p.setGravity(android.view.Gravity.CENTER), p.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (t, u) {
        try {
          j = true;
          switch (u.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              p.setBackground(style.custom_corner("#2d2d2d", [gs(20), gs(20), gs(20), gs(20), gs(0), gs(0), gs(0), gs(0)]));
              break;
            case android.view.MotionEvent.ACTION_UP:
              p.setBackground(style.main());
              !i && (confirmScreenSafe() && (Entity.setPositionRelative(Player.getEntity(), 0, getSettings(g, "Level", 0), 0), setVelY(Player.getEntity(), 0)));
              ;
              break;
            case android.view.MotionEvent.ACTION_CANCEL:
              break;
          }
          if (!j) return false;
          switch (u.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              k = m - u.getRawX(), l = n - u.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              (u.getRawX() + k - m >= 3 || u.getRawX() + k - m <= -3 || u.getRawY() + l - n >= 3 || u.getRawY() + l - n <= -3) && (i = true, m = u.getRawX() + k, n = u.getRawY() + l, getCode(g).gui.update(m, n, -1, -1));
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              j = false, i = false;
              break;
          }
        } catch (v) {
          errorMessage(v);
        }
        return true;
      }})), o.addView(p);
      let q = new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(2))), r = new android.widget.LinearLayout(ctx);
      r.setBackgroundColor(android.graphics.Color.parseColor(maincolor)), r.setLayoutParams(q), o.addView(r);
      let s = new android.widget.TextView(ctx);
      s.setText("Down"), s.setTextColor(-1), s.setTextSize(gs(14)), s.setTransformationMethod(null), s.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(75)), gs(dip2px(50)))), s.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), s.setGravity(android.view.Gravity.CENTER), s.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (t, u) {
        try {
          j = true;
          switch (u.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              s.setBackground(style.custom_corner("#2d2d2d", [gs(0), gs(0), gs(0), gs(0), gs(20), gs(20), gs(20), gs(20)]));
              break;
            case android.view.MotionEvent.ACTION_UP:
              s.setBackground(style.main());
              !i && (confirmScreenSafe() && (Entity.setPositionRelative(Player.getEntity(), 0, -getSettings(g, "Level", 0), 0), setVelY(Player.getEntity(), 0)));
              ;
              break;
            case android.view.MotionEvent.ACTION_CANCEL:
              break;
          }
          if (!j) return false;
          switch (u.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              k = m - u.getRawX(), l = n - u.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              (u.getRawX() + k - m >= 3 || u.getRawX() + k - m <= -3 || u.getRawY() + l - n >= 3 || u.getRawY() + l - n <= -3) && (i = true, m = u.getRawX() + k, n = u.getRawY() + l, getCode(g).gui.update(m, n, -1, -1));
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              j = false, i = false;
              break;
          }
        } catch (v) {
          errorMessage(v);
        }
        return true;
      }})), o.addView(s), getCode(g).gui = new android.widget.PopupWindow(o, -2, -2), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch (t) {
      errorMessage(t);
    }
  });
}, toggle() {
  var g = getModule("Elevator");
  getState(g) ? getCode(g).button() : getCode(g).gui.dismiss();
}}), associateModule("FieldOfView,Fv", [false, false], "Misc", [{name: "Angle", type: "int", value: "90,1,180"}], {tick() {
  var g = getModule("FieldOfView"), h = getSettings(g, "Angle", 0);
  getState(g) ? ModPE.setFov(h) : ModPE.resetFov();
}}), associateModule("Haste,He", [false, false], "Player", 0, {tick() {
  var g = getModule("Haste");
  getState(g) && Entity.addEffect(Player.getEntity(), 3, 5e6, 127, true, false);
}, toggle() {
  var g = getModule("Haste");
  !getState(g) && Entity.removeEffect(Player.getEntity(), 3);
}}), associateModule("AntiBadEffects,AB", [false, false], "Player", 0, {tick() {
  var g = getModule("AntiBadEffects");
  getState(g) && (Entity.removeEffect(Player.getEntity(), 2), Entity.removeEffect(Player.getEntity(), 4), Entity.removeEffect(Player.getEntity(), 7), Entity.removeEffect(Player.getEntity(), 9), Entity.removeEffect(Player.getEntity(), 15), Entity.removeEffect(Player.getEntity(), 17), Entity.removeEffect(Player.getEntity(), 18), Entity.removeEffect(Player.getEntity(), 19), Entity.removeEffect(Player.getEntity(), 20));
}}), associateModule("Twerk,T", [false, false], "Player", 0, {toggled: false, init() {
  try {
    var g = getModule("Twerk"), h = getState(g), i = new android.app.Instrumentation, j = new java.lang.Thread(new java.lang.Runnable({run() {
      try {
        android.os.Looper.prepare(), (new android.os.Handler).postDelayed(new java.lang.Runnable({run() {
          try {
            var k = getModule("Twerk"), l = getState(k), m = new android.app.Instrumentation;
            l && confirmScreenSafe() && !opn && m.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_SHIFT_LEFT), (new android.os.Handler).postDelayed(this, 50);
          } catch (n) {
            errorMessage(n + " at #" + n.lineNumber), getCode(k).init();
          }
        }}), 50), android.os.Looper.loop();
      } catch (k) {
        errorMessage(k);
      }
    }}));
    j.start();
  } catch (k) {
    errorMessage(k);
  }
}, toggle() {
  var d5 = b;
  try {
    var g = getModule("Twerk");
    getCode(g).toggled == false && (getCode(g).init(), getCode(g).toggled = true);
  } catch (h) {
    errorMessage(h);
  }
}}), associateModule("Derp,D", [false, false], "Player", 0, {tick() {
  var g = getModule("Derp");
  getState(g) && Entity.setRot(Player.getEntity(), getYaw() + 30, getPitch());
}}), associateModule("NoVoid,NV", [false, false], "Player", [{name: "Bypass", type: "bool", value: false}, {name: "Draw Pos", type: "bool", value: false}, {name: "Velocity", type: "int", value: "1,0.1,1.5"}], {lastpos: [0, 0, 0], list: [], falling() {
  var d9 = b, g = -1;
  if (Entity.getVelY(Player.getEntity()) <= g) return true;
  return false;
}, isfalling() {
  var g = -0.8999999999996362, h = 0;
  for (var j = getPlayerY(); j > 0; j--) {
    if (Level.getTile(getPlayerX(), j, getPlayerZ()) != 0) h++;
  }
  ;
  if (Entity.getVelY(Player.getEntity()) <= g && h == 0) return true;
  return false;
}, save() {
  var g = Player.getX(), h = Player.getZ();
  for (var j = 256; j > 0; j--) {
    if (Level.getTile(g, j, h) != 0) {
      Entity.setPosition(Player.getEntity(), g, j + 3, h);
      break;
    }
  }
}, tick() {
  var g = getModule("NoVoid"), h = getSettings(g, "Bypass", 0), i = getSettings(g, "Draw Pos", 0), j = getSettings(g, "Velocity", 0), k = [0, 8, 9, 10, 11, 30, 51, 53, 109];
  if (getState(g)) {
    k.indexOf(Level.getTile(Math.floor(getPlayerX()) + 0.5, getPlayerY() - 1.7999999999999545, Math.floor(getPlayerZ()) + 0.5)) == -1 && (getCode(g).lastpos = [Math.floor(getPlayerX()), Math.floor(getPlayerY()), Math.floor(getPlayerZ())], getCode(g).list.push(getCode(g).lastpos), getCode(g).list.length > 1 && getCode(g).list.splice(0, 1));
    if (i) Level.addParticle(ParticleType.happyVillager, getCode(g).lastpos[0] + 0.5, getCode(g).lastpos[1], getCode(g).lastpos[2] + 0.5, 0, -0.1000000000003638, 0, 5);
    if (getCode(g).isfalling()) !h ? Level.getTile(getCode(g).lastpos[0] + 0.5, getCode(g).lastpos[1] - 1, getCode(g).lastpos[2] + 0.5) != 0 && getCode(g).list.length > 1 ? (Entity.setPosition(Player.getEntity(), getCode(g).lastpos[0] + 0.5, getCode(g).lastpos[1], getCode(g).lastpos[2] + 0.5), setVelX(Player.getEntity(), 0), setVelY(Player.getEntity(), 0), setVelZ(Player.getEntity(), 0), notification("You have been returned.")) : (Entity.setPosition(Player.getEntity(), getCode(g).list[0][0] + 0.5, getCode(g).list[0][1], getCode(g).list[0][2] + 0.5), setVelX(Player.getEntity(), 0), setVelY(Player.getEntity(), 0), setVelZ(Player.getEntity(), 0), notification("You have been returned.")) : setVelY(Player.getEntity(), 1.2000000000007276);
  }
}}), associateModule("NoWeb,NW", [false, false], "Player", 0, {toggle() {
  var g = getModule("NoWeb");
  getState(g) ? (Block.setShape(30, 0, 0, 0, 0, 0, 0), Block.defineBlock(30, "Cobweb", [["web", 0]], 30, true, 0), Block.setShape(30, 0, 0, 0, 0, 0, 0)) : Block.setShape(30, 0, 0, 0, 1, 1, 1);
}}), associateModule("ElytraSpoofer,EF", [false, false], "Player", 0, {tick() {
  var g = getModule("ElytraSpoofer");
  getState(g) && Player.setArmorSlot(1, 444, 0);
}}), associateModule("FullBright,FB", [false, false], "Misc", 0, {tick() {
  var g = getModule("FullBright");
  getState(g) && Entity.addEffect(Player.getEntity(), 16, 5e6, 127, true, false);
}, toggle() {
  var g = getModule("FullBright");
  !getState(g) && Entity.removeEffect(Player.getEntity(), 16);
}}), associateModule("ClickFriends,CF", [false, false], "Misc", 0, {list: [], isFriend(g) {
  var h = getModule("ClickFriends");
  return getCode(h).list.indexOf(g) == -1 ? false : true;
}, attack(g, h) {
  var i = getModule("ClickFriends");
  getState(i) && (g == Player.getEntity() && (getCode(i).list.indexOf(h) == -1 ? (preventDefault(), getCode(i).list.push(h), customMessage(Entity.getNameTag(h) + "§r has §aadded§r to the friend list"), Entity.setNameTag(h, Entity.getNameTag(h) + "\n§r§a[FRIEND]")) : (preventDefault(), delete getCode(i).list[getCode(i).list.indexOf(h)], Entity.setNameTag(h, Entity.getNameTag(h).replace("\n§r§a[FRIEND]", "")), customMessage(Entity.getNameTag(h) + "§r has been §cremoved§r from the friend list"))));
  ;
}}), associateModule("FastEat,FE", [false, false], "Player", 0, {on: "Item['setProperties'](0x104,{'use_duration':0x1,'food':{'nutrition':0x4,'saturation_modifier':'low','is_meat':![]}}),Item['setProperties'](0x142,{'stack_by_data': true,'use_duration':0x1,'foil': false,'food':{'nutrition':0x4,'saturation_modifier':'supernatural','is_meat':![],'effects':[{'name':'regeneration','chance':0x1,'duration':0x5,'amplifier':0x1},{'name':'absorption','chance':0x1,'duration':0x78,'amplifier':0x0}],'enchanted_effects':[{'name':'regeneration','chance':0.66,'duration':0x1e,'amplifier':0x4},{'name':'absorption','chance':0.66,'duration':0x78,'amplifier':0x0},{'name':'resistance','chance':0.66,'duration':0x12c,'amplifier':0x0},{'name':'fire_resistance','chance':0.66,'duration':0x12c,'amplifier':0x0}]}}),Item['setProperties'](0x104,{'use_duration':0x1,'max_stack_size':0x1,'food':{'nutrition':0x6,'saturation_modifier':'normal','is_meat':![],'using_converts_to':'bowl'}}),Item['setProperties'](0x129,{'use_duration':0x1,'food':{'nutrition':0x5,'saturation_modifier':'normal','is_meat': false}}),Item['setProperties'](0x13f,{'use_duration':0x1,'food':{'nutrition':0x3,'saturation_modifier':'low','is_meat': true}}),Item['setProperties'](0x140,{'use_duration':0x1,'food':{'nutrition':0x8,'saturation_modifier':'good','is_meat': true}}),Item['setProperties'](0x15d,{'use_duration':0x1,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x2,'saturation_modifier':'poor','is_meat': true}}),Item['setProperties'](0x1cc,{'use_duration':0x1,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x2,'saturation_modifier':'poor','is_meat':!![]}}),Item['setProperties'](0x1cd,{'use_duration':0x1,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x1,'saturation_modifier':'poor','is_meat':!![]}}),Item['setProperties'](0x1ce,{'use_duration':0x1,'max_damage':0x0,'stacked_by_data':!![],'food':{'nutrition':0x1,'saturation_modifier':'poor','is_meat':!![],'effects':[{'name':'poison','duration':0x3c,'amplifier':0x3},{'name':'nausea','duration':0xf,'amplifier':0x1},{'name':'hunger','duration':0xf,'amplifier':0x2}]}}),Item['setProperties'](0x15e,{'use_duration':0x1,'max_damage':0x0,'stacked_by_data':!![],'food':{'nutrition':0x5,'saturation_modifier':'normal','eat_sound':'random.burp','is_meat': true}}),Item['setProperties'](0x1cf,{'use_duration':0x1,'max_damage':0x0,'stacked_by_data':!![],'food':{'nutrition':0x6,'saturation_modifier':'good','is_meat': true}}),Item['setProperties'](0x168,{'use_duration':0x1,'food':{'nutrition':0x2,'saturation_modifier':'poor','is_meat': false}}),Item['setProperties'](0x165,{'use_duration':0x1,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat':![]}}),Item['setProperties'](0x16b,{'use_duration':0x1,'food':{'nutrition':0x3,'saturation_modifier':'low','is_meat':!![]}}),Item['setProperties'](0x16c,{'use_duration':0x1,'food':{'nutrition':0x8,'saturation_modifier':'good','is_meat':!![]}}),Item['setProperties'](0x16d,{'use_duration':0x1,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat': true,'effects':[{'name':'hunger','chance':0.3,'duration':0x1e,'amplifier':0x0}]}}),Item .setProperties (0x16e,{'use_duration':0x1,'food':{'nutrition':0x6,'saturation_modifier':'normal','is_meat':!![]}}),Item['setProperties'](0x1a7,{'use_duration':0x1,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat':!![]}}),Item['setProperties'](0x1a8,{'use_duration':0x1,'food':{'nutrition':0x6,'saturation_modifier':'good','is_meat':!![]}}),Item['setProperties'](0x16f,{'use_duration':0x1,'food':{'nutrition':0x4,'saturation_modifier':'poor','is_meat':!![],'effects':[{'name':'hunger','chance':0.8,'duration':0x1e,'amplifier':0x0}]}}),Item['setProperties'](0x177,{'use_duration':0x1,'food':{'nutrition':0x2,'saturation_modifier':'good','is_meat':![],'effects':[{'name':'poison','chance':0x1,'duration':0x5,'amplifier':0x0}]}}),Item['setProperties'](0x187,{'use_duration':0x1,'food':{'nutrition':0x3,'saturation_modifier':'normal','is_meat': false},'seed':{'crop_result':'carrots','plant_at':'farmland'}}),Item['setProperties'](0x188,{'use_duration':0x1,'food':{'nutrition':0x1,'saturation_modifier':'low','is_meat': false},'seed':{'crop_result':'potatoes','plant_at':'farmland'}}),Item['setProperties'](0x189,{'use_duration':0x1,'food':{'nutrition':0x5,'saturation_modifier':'normal','is_meat': false}}),Item .setProperties (0x18a,{'use_duration':0x1,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat':![],'effects':[{'name':'poison','chance':0.6,'duration':0x5,'amplifier':0x0}]}}),Item['setProperties'](0x18c,{'use_duration':0x1,'food':{'nutrition':0x6,'saturation_modifier':'supernatural','is_meat':![]}}),Item['setProperties'](0x190,{'use_duration':0x1,'food':{'nutrition':0x8,'saturation_modifier':'low','is_meat': false}}),Item['setProperties'](0x19b,{'use_duration':0x1,'food':{'nutrition':0x3,'saturation_modifier':'low','is_meat': true}}),Item['setProperties'](0x19c,{'use_duration':0x1,'food':{'nutrition':0x5,'saturation_modifier':'normal','is_meat': true}}),Item['setProperties'](0x19d,{'use_duration':0x1,'max_stack_size':0x1,'food':{'nutrition':0xa,'saturation_modifier':'normal','using_converts_to':'bowl','is_meat': true}}),Item['setProperties'](0x1cb,{'use_duration':0x1,'food':{'nutrition':0x1,'saturation_modifier':'normal','is_meat': false}}),Item['setProperties'](0x1c9,{'use_duration':0x1,'food':{'nutrition':0x1,'saturation_modifier':'normal','is_meat': false}});", off: "Item['setProperties'](0x104,{'use_duration':0x20,'food':{'nutrition':0x4,'saturation_modifier':'low','is_meat': false}}),Item .setProperties (0x104,{'use_duration':0x20,'max_stack_size':0x1,'food':{'nutrition':0x6,'saturation_modifier':'normal','is_meat': false,'using_converts_to':'bowl'}}),Item['setProperties'](0x129,{'use_duration':0x20,'food':{'nutrition':0x5,'saturation_modifier':'normal','is_meat': false}}),Item .setProperties (0x13f,{'use_duration':0x20,'food':{'nutrition':0x3,'saturation_modifier':'low','is_meat':!![]}}),Item['setProperties'](0x140,{'use_duration':0x20,'food':{'nutrition':0x8,'saturation_modifier':'good','is_meat':!![]}}),Item .setProperties (0x15d,{'use_duration':0x20,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x2,'saturation_modifier':'poor','is_meat':!![]}}),Item .setProperties (0x1cc,{'use_duration':0x20,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x2,'saturation_modifier':'poor','is_meat':!![]}}),Item['setProperties'](0x1cd,{'use_duration':0x20,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x1,'saturation_modifier':'poor','is_meat':!![]}}),Item['setProperties'](0x1ce,{'use_duration':0x20,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x1,'saturation_modifier':'poor','is_meat':!![],'effects':[{'name':'poison','duration':0x3c,'amplifier':0x3},{'name':'nausea','duration':0xf,'amplifier':0x1},{'name':'hunger','duration':0xf,'amplifier':0x2}]}}),Item .setProperties (0x15e,{'use_duration':0x20,'max_damage':0x0,'stacked_by_data': true,'food':{'nutrition':0x5,'saturation_modifier':'normal','eat_sound':'random.burp','is_meat':!![]}}),Item['setProperties'](0x1cf,{'use_duration':0x20,'max_damage':0x0,'stacked_by_data':!![],'food':{'nutrition':0x6,'saturation_modifier':'good','is_meat':!![]}}),Item['setProperties'](0x168,{'use_duration':0x20,'food':{'nutrition':0x2,'saturation_modifier':'poor','is_meat':![]}}),Item['setProperties'](0x165,{'use_duration':0x20,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat': false}}),Item['setProperties'](0x16b,{'use_duration':0x20,'food':{'nutrition':0x3,'saturation_modifier':'low','is_meat': true}}),Item['setProperties'](0x16c,{'use_duration':0x20,'food':{'nutrition':0x8,'saturation_modifier':'good','is_meat': true}}),Item['setProperties'](0x16d,{'use_duration':0x20,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat': true,'effects':[{'name':'hunger','chance':0.3,'duration':0x1e,'amplifier':0x0}]}}),Item['setProperties'](0x16e,{'use_duration':0x20,'food':{'nutrition':0x6,'saturation_modifier':'normal','is_meat':!![]}}),Item .setProperties (0x1a7,{'use_duration':0x20,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat':!![]}}),Item['setProperties'](0x1a8,{'use_duration':0x20,'food':{'nutrition':0x6,'saturation_modifier':'good','is_meat':!![]}}),Item['setProperties'](0x16f,{'use_duration':0x20,'food':{'nutrition':0x4,'saturation_modifier':'poor','is_meat':!![],'effects':[{'name':'hunger','chance':0.8,'duration':0x1e,'amplifier':0x0}]}}),Item['setProperties'](0x177,{'use_duration':0x20,'food':{'nutrition':0x2,'saturation_modifier':'good','is_meat': false,'effects':[{'name':'poison','chance':0x1,'duration':0x5,'amplifier':0x0}]}}),Item['setProperties'](0x187,{'use_duration':0x20,'food':{'nutrition':0x3,'saturation_modifier':'normal','is_meat':![]},'seed':{'crop_result':'carrots','plant_at':'farmland'}}),Item['setProperties'](0x188,{'use_duration':0x20,'food':{'nutrition':0x1,'saturation_modifier':'low','is_meat': false},'seed':{'crop_result':'potatoes','plant_at':'farmland'}}),Item['setProperties'](0x189,{'use_duration':0x20,'food':{'nutrition':0x5,'saturation_modifier':'normal','is_meat':![]}}),Item['setProperties'](0x18a,{'use_duration':0x20,'food':{'nutrition':0x2,'saturation_modifier':'low','is_meat': false,'effects':[{'name':'poison','chance':0.6,'duration':0x5,'amplifier':0x0}]}}),Item .setProperties (0x18c,{'use_duration':0x20,'food':{'nutrition':0x6,'saturation_modifier':'supernatural','is_meat':![]}}),Item['setProperties'](0x190,{'use_duration':0x20,'food':{'nutrition':0x8,'saturation_modifier':'low','is_meat': false}}),Item['setProperties'](0x19b,{'use_duration':0x20,'food':{'nutrition':0x3,'saturation_modifier':'low','is_meat': true}}),Item['setProperties'](0x1c9,{'use_duration':0x20,'food':{'nutrition':0x1,'saturation_modifier':'normal','is_meat': true}}),Item['setProperties'](0x19c,{'use_duration':0x20,'food':{'nutrition':0x5,'saturation_modifier':'normal','is_meat':!![]}}),Item['setProperties'](0x19d,{'use_duration':0x20,'max_stack_size':0x1,'food':{'nutrition':0xa,'saturation_modifier':'normal','using_converts_to':'bowl','is_meat':!![]}}),Item['setProperties'](0x1cb,{'use_duration':0x20,'food':{'nutrition':0x1,'saturation_modifier':'normal','is_meat':![]}});", toggle() {
  var g = getModule("FastEat");
  getState(g) ? eval(getCode(g).on) : eval(getCode(g).off);
}}), associateModule("MyCollision,MC", [false, false], "Player", [{name: "X", type: "int", value: "0,0.1,10"}, {name: "Y", type: "int", value: "0,0.1,10"}], {toggle() {
  var g = getModule("MyCollision");
  getState(g) ? Entity.setCollisionSize(getPlayerEnt(), getSettings(g, "X", 0), getSettings(g, "Y", 0)) : Entity.setCollisionSize(getPlayerEnt(), 0.6000000000003638, 1.7999999999992724);
}}), associateModule("InfiniteAura,IA", [false, false], "Combat", [{name: "Range", type: "int", value: "100,1,100"}, {name: "Delay", type: "int", value: "10,1,20"}, {name: "From EntityList", type: "bool", value: true}], {aim(g) {
  if (g != null || g != -1) {
    var h = Entity.getX(g) - getPlayerX(), i = Entity.getY(g) - getPlayerY(), j = Entity.getZ(g) - getPlayerZ();
    if (Entity.getEntityTypeId(g) != 63) i += 0.5;
    var k = 0.5 + Entity.getX(g), l = Entity.getY(g), m = 0.5 + Entity.getZ(g), n = Math.sqrt(h * h + i * i + j * j), i = i / n, o = Math.asin(i);
    o = o * 180 / Math.PI, o = -o;
    var p = -Math.atan2(k - (Player.getX() + 0.5), m - (Player.getZ() + 0.5)) * (180 / Math.PI);
    o < 89 && o > -89 && Entity.setRot(Player.getEntity(), p, o);
  }
}, swing() {
  try {
    var g = new java.lang.Thread(new java.lang.Runnable({run() {
      try {
        var h = new android.app.Instrumentation;
        h.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_Q);
      } catch (i) {
        errorMessage(i);
      }
    }}));
    g.start();
  } catch (h) {
    errorMessage(h);
  }
}, getNearestEntity(g) {
  var h = getModule("InfiniteAura"), j = getSettings(h, "From EntityList", 0), k = getCode(getModule("EntityList")).list;
  if (j) var l = k; else var l = Server.getAllPlayers();
  var m = g, n = null;
  for (var o = 0; o < l.length; o++) {
    if (!getCode(getModule("ClickFriends")).isFriend(k[o])) {
      var p = Entity.getX(l[o]) - getPlayerX(), q = Entity.getY(l[o]) - getPlayerY(), r = Entity.getZ(l[o]) - getPlayerZ(), s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      s < m && s > 0 && Entity.getHealth(l[o]) >= 1 && (m = s, n = l[o]);
    }
  }
  ;
  return n;
}, lastpos: [0, 0, 0], oldrot: [0, 0], timing: 5, st: 0, tick() {
  try {
    var g = getModule("InfiniteAura"), h = getSettings(g, "Range", 0), i = getSettings(g, "Delay", 0), j = getCode(g).getNearestEntity(h);
    if (getState(g) && j != -1 && !opn) {
      if (getCode(getModule("EntityList")).isValid(j)) {
        getCode(g).timing--;
        if (getCode(g).timing == 1) {
          var k = Entity.getX(j), l = Entity.getY(j) + 1, m = Entity.getZ(j);
          setVelY(Player.getEntity(), -0.1000000000003638), Entity.setCollisionSize(j, 10, 10), Entity.setPosition(Player.getEntity(), k, l, m), getCode(g).aim(j), getCode(g).swing();
        }
        ;
        getCode(g).timing == 0 && (Entity.setPosition(Player.getEntity(), getCode(g).lastpos[0], getCode(g).lastpos[1], getCode(g).lastpos[2]), setVelY(Player.getEntity(), -0.1000000000003638), getCode(g).st == 1 ? (getCode(g).st = 0, setVelX(Player.getEntity(), 0.09999999999990905)) : (getCode(g).st++, setVelX(Player.getEntity(), -0.1000000000003638)), getCode(g).aim(j), getCode(g).timing = i);
      }
    }
  } catch (n) {
    errorMessage(n);
  }
}, toggle() {
  var g = getModule("InfiniteAura");
  getCode(g).lastpos[0] = Player.getX(), getCode(g).lastpos[1] = Player.getY(), getCode(g).lastpos[2] = Player.getZ();
}}), associateModule("EntityList,EL", [false, false], "Misc", [{name: "Maximal Range", type: "int", value: "100000,10000,1000000"}, {name: "Minimal Range", type: "int", value: "0,10000,1000000"}, {name: "Mode", type: "string", value: "Only +,Only +,Only -,All"}, {name: "Check ID", type: "bool", value: false}, {name: "Output", type: "bool", value: false}], {list: [], fakelist: [], isValid(g) {
  return Entity.getX(g) != 0 && Entity.getY(g) != 0 && Entity.getZ(g) != 0 ? true : false;
}, scan() {
  var g = (new Date).getTime(), h = new java.lang.Thread(new java.lang.Runnable({run() {
    try {
      android.os.Looper.prepare();
      var j = getModule("EntityList");
      getCode(j).fakelist = new Array;
      var k = getSettings(j, "Mode", 0), l = getSettings(j, "Output", 0), m = parseFloat(getSettings(j, "Minimal Range", 0)) + 1, n = parseFloat(getSettings(j, "Maximal Range", 0)) + 1;
      if (n > m) {
        if (k == "All") {
          for (var o = -n; o < m; o++) {
            try {
              if (confirmGameScreen()) {
                if (Entity.getEntityTypeId(o) == 63) {
                  if (o != Player.getEntity()) getCode(j).fakelist.push(o);
                }
              }
            } catch (r) {
              errorMessage(r);
              break;
            }
          }
          ;
          for (var o = m; o <= n; o++) {
            try {
              if (confirmGameScreen()) {
                if (Entity.getEntityTypeId(o) == 63) {
                  if (o != Player.getEntity()) getCode(j).fakelist.push(o);
                }
              }
            } catch (s) {
              errorMessage(s);
              break;
            }
          }
        }
        ;
        if (k == "Only +") for (var o = m; o <= n; o++) {
          try {
            if (confirmGameScreen()) {
              if (Entity.getEntityTypeId(o) == 63) {
                if (o != Player.getEntity()) getCode(j).fakelist.push(o);
              }
            }
          } catch (u) {
            errorMessage(u);
            break;
          }
        }
        ;
        if (k == "Only -") {
          for (var o = -n; o < m; o++) {
            try {
              if (confirmGameScreen()) {
                if (Entity.getEntityTypeId(o) == 63) {
                  if (o != Player.getEntity()) getCode(j).fakelist.push(o);
                }
              }
            } catch (v) {
              errorMessage(v);
              break;
            }
          }
          ;
        }
        ;
        var p = (new Date).getTime();
        if (l) customMessage("Scanned for " + (p - g) + "ms");
        function q(w) {
          var z = {}, A = [], B = w.length, C = 0;
          for (var D = 0; D < B; D++) {
            var E = w[D];
            z[E] !== 1 && (z[E] = 1, A[C++] = E);
          }
          return A;
        }
        q(getModule("EntityList").code.fakelist), getModule("EntityList").code.list = getModule("EntityList").code.fakelist;
        if (l) customMessage(getCode(j).list.length + " players founded!");
        getCode(j).started = false, sleep(1500);
        if (getState(j)) {
          getCode(j).started = true, getCode(j).scan();
          if (l) customMessage("Scan restarted");
        }
      }
      android.os.Looper.loop();
    } catch (w) {
      errorMessage(w);
    }
  }}));
  h.start();
}, started: false, button() {
  var g = getModule("EntityList");
  uithread(() => {
    try {
      let h = false, i = 0, j = 0, k = 0, l = 0, m = new android.widget.TextView(ctx);
      m.setText("Scan"), m.setTextColor(-1), m.setTextSize(gs(14)), m.setTransformationMethod(null), m.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), m.setBackground(style.custom_simple("#545454")), m.setGravity(android.view.Gravity.CENTER), m.setOnClickListener(new android.view.View.OnClickListener({onClick: function (n) {
        confirmGameScreen() && (!getCode(g).started ? (getCode(g).started = true, m.setTextColor(android.graphics.Color.GREEN), customMessage("Scan started"), getCode(g).scan(), m.setTextColor(-1)) : customMessage("Scan already started!"));
      }})), m.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (n, o) {
        try {
          if (!h) return false;
          switch (o.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              i = k - o.getRawX(), j = l - o.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              k = o.getRawX() + i, l = o.getRawY() + j, getCode(g).gui.update(k, l, -1, -1);
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              h = false;
              break;
          }
        } catch (p) {
          errorMessage(p);
        }
        return true;
      }})), m.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (n, o) {
        return ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(60), h = true, true;
      }})), getCode(g).gui = new android.widget.PopupWindow(m, gs(dip2px(75)), gs(dip2px(50))), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0), getCode(g).gui.update(ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2, -1, -1);
    } catch (n) {
      errorMessage(n);
    }
  });
}, attack(g, h) {
  var i = getModule("EntityList"), j = getSettings(i, "Check ID", 0);
  j && getState(i) && customMessage(h + " - " + Entity.getEntityTypeId(h));
}, toggle() {
  var g = getModule("EntityList");
  if (getState(g) && confirmGameScreen() && !getSettings(g, "Check ID", 0)) {
    if (!getCode(g).started) getCode(g).scan(); else {
      if (Halcyon.isDev) customMessage("Scan already started!");
    }
  }
}}), associateModule("ESP,E", [false, false], "Misc", [{name: "From EntityList", type: "bool", value: true}, {name: "Type", type: "string", value: "3D,3D"}], {render(g) {
  var h = getModule("ESP"), i = getSettings(h, "From EntityList", 0), j = getCode(getModule("EntityList")).list;
  if (getState(h)) {
    let l = getPlayerX(), m = getPlayerY(), n = getPlayerZ();
    if (i) var k = j; else var k = Server.getAllPlayers();
    k.forEach(function (o) {
      let p = Entity.getX(o) - l, q = Entity.getY(o) - m, r = Entity.getZ(o) - n, s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      o != getPlayerEnt() && Entity.getEntityTypeId(o) == 63 && getCode(getModule("EntityList")).isValid(o) && Render.drawBox(g, Entity.getX(o) - 0.5, Entity.getY(o) - 0.5, Entity.getZ(o) - 0.5, 0.900000000000091, 1.8500000000003638, 0.8999999999996362, getCode(getModule("ClickFriends")).isFriend(o));
    });
  }
}, toggle() {
  var e7 = b;
  !Render.initted && !Render_tracers.initted && Render.init();
}}), associateModule("TraceLines,TL", [false, false], "Misc", [{name: "From EntityList", type: "bool", value: true}], {render(g) {
  var h = getModule("TraceLines"), i = getSettings(h, "From EntityList", 0), j = getCode(getModule("EntityList")).list;
  if (getState(h)) {
    let l = getPlayerX(), m = getPlayerY(), n = getPlayerZ();
    if (i) var k = j; else var k = Server.getAllPlayers();
    k.forEach(function (o) {
      let p = Entity.getX(o) - l, q = Entity.getY(o) - m, r = Entity.getZ(o) - n, s = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(r, 2));
      o != getPlayerEnt() && Entity.getEntityTypeId(o) == 63 && getCode(getModule("EntityList")).isValid(o) && Render.drawLine(g, Entity.getX(o) - 0.5, Entity.getY(o) - 0.5, Entity.getZ(o) - 0.5, getPlayerX(), 0, getPlayerZ(), getCode(getModule("ClickFriends")).isFriend(o));
    });
  }
}, toggle() {
  !Render.initted && !Render_tracers.initted && Render.init();
}}), associateModule("FakeCam,FC", [false, false], "Misc", 0, {lastYaw: 0, lastPitch: 0, lastPos: [0, 0, 0], fakeEnt: -1, rotate() {
  var g = getModule("FakeCam"), h = Player.getX(), i = Player.getY(), j = Player.getZ();
  setVelY(getCode(g).fakeEnt, 0), !getCode(getModule("AimBot")).rotating && (getCode(g).lastYaw = Entity.getYaw(getPlayerEnt()) % 360 * Math.PI / 180, getCode(g).lastPitch = Entity.getPitch(getPlayerEnt()) % 180 * Math.PI / 90), getCode(g).lastpos = [h + Math.sin(getCode(g).lastYaw) * 4, i - 1.5, j - Math.cos(getCode(g).lastYaw) * 4], Entity.setPosition(getCode(g).fakeEnt, getCode(g).lastpos[0], getCode(g).lastpos[1], getCode(g).lastpos[2]);
}, aim() {
  var g = getModule("FakeCam");
  Entity.setRot(getCode(g).fakeEnt, 180, 0);
}, avr() {
  var g = getModule("FakeCam");
  if (getState(g) && confirmScreenSafe()) {
    if (getCode(g).fakeEnt != -1) ModPE.setCamera(getCode(g).fakeEnt), getCode(g).rotate(), getCode(g).aim(); else {
      var h = Player.getX(), i = Player.getY(), j = Player.getZ(), k = Entity.getYaw(Player.getEntity()) % 360 * Math.PI / 180;
      getCode(g).fakeEnt = spawnCow(getCode(g).lastpos[0], getCode(g).lastpos[1], getCode(g).lastpos[2], null), Entity.setCollisionSize(getCode(g).fakeEnt, 0, 0), ModPE.setCamera(getCode(g).fakeEnt), getCode(g).rotate(), getCode(g).aim();
    }
  }
}, toggle() {
  var g = getModule("FakeCam");
  if (getState(g)) {
    var h = Player.getX(), i = Player.getY(), j = Player.getZ(), k = Entity.getYaw(Player.getEntity()) % 360 * Math.PI / 180;
    getCode(g).fakeEnt = spawnCow(Player.getX() + 3, Player.getY() + 1, Player.getZ(), null), Entity.setCollisionSize(getCode(g).fakeEnt, 0, 0), Entity.setRenderType(getCode(g).fakeEnt, EntityRenderType.human), ModPE.setCamera(getCode(g).fakeEnt), getCode(g).rotate(), getCode(g).aim();
  } else ModPE.setCamera(Player.getEntity()), Entity.remove(getCode(g).fakeEnt), getCode(g).fakeEnt = -1;
}}), associateModule("Ambience,A", [false, false], "Misc", [{name: "Time", type: "int", value: "1000,100,24000"}, {name: "Mode", type: "string", value: "DayCycle,DayCycle,Static"}, {name: "Delay", type: "int", value: "20,1,40"}], {ticked: 0, avr() {
  var g = getModule("Ambience"), h = getSettings(g, "Mode", 0), i = getSettings(g, "Time", 0), j = parseFloat(getSettings(g, "Delay", 0));
  getState(g) && (h == "DayCycle" ? (getCode(g).ticked = parseFloat(getCode(g).ticked) + parseFloat(j), Level.setTime(getCode(g).ticked)) : Level.setTime(i));
}}), associateModule("Notifications,N", [true, false], "Misc", [{name: "Show time", type: "int", value: "20,1,100"}], {}), associateModule("Crasher,Cr", [false, false], "Misc", 0, {rand(g) {
  return Math.random() * g << 0;
}, tof() {
  return 1 == Math.random() * 2 << 0 ? true : false;
}, tick() {
  var g = getModule("Crasher");
  getState(g) && Entity.setPosition(Player.getEntity(), getCode(g).rand(1e5), 80, getCode(g).rand(1e5));
}}), associateModule("X-Ray,X", [false, false], "Misc", 0, {tick() {
  var g = getModule("X-Ray");
  getState(g) && (setVelX(getPlayerEnt(), 0), setVelY(getPlayerEnt(), 0), setVelZ(getPlayerEnt(), 0));
}, toggle() {
  Entity.setImmobile(getPlayerEnt(), false);
  var g = getModule("X-Ray");
  if (confirmGameScreen()) getState(g) ? (Entity.setImmobile(getPlayerEnt(), true), Block.setRenderLayer(1, 1), Block.setRenderLayer(2, 1), Block.setRenderLayer(3, 1), Block.setRenderLayer(87, 1), Block.setShape(1, 0, 0, 0, 0, 0, 0), Block.setShape(2, 0, 0, 0, 0, 0, 0), Block.setShape(3, 0, 0, 0, 0, 0, 0), Block.setLightLevel(16, 15), Block.setLightLevel(15, 15), Block.setLightLevel(56, 15), Block.setLightLevel(21, 15), Block.setLightLevel(73, 15), Block.setLightLevel(129, 15), Block.setLightLevel(153, 15)) : (Entity.setImmobile(getPlayerEnt(), false), Block.setRenderLayer(1, 0), Block.setRenderLayer(2, 0), Block.setRenderLayer(3, 0), Block.setRenderLayer(87, 0), Block.setLightLevel(16, 0), Block.setLightLevel(15, 0), Block.setLightLevel(56, 0), Block.setLightLevel(21, 0), Block.setLightLevel(73, 0), Block.setLightLevel(129, 0), Block.setLightLevel(153, 0), Block.setShape(1, 0, 0, 0, 1, 1, 1), Block.setShape(2, 0, 0, 0, 1, 1, 1), Block.setShape(3, 0, 0, 0, 1, 1, 1));
}}), associateModule("PingMeter,PM", [false, false], "Misc", [{name: "Update time", type: "int", value: "20,1,40"}], {ticked: 0, ping: 0, btn: new android.widget.TextView(ctx), gui: null, checkip(g) {
  var h = getModule("PingMeter"), i = new java.lang.Thread(new java.lang.Runnable({run() {
    try {
      var j = g, k = java.net.InetAddress.getByName(j), l = 0, m = (new java.util.GregorianCalendar).getTimeInMillis();
      k.isReachable(5e3) ? (l = (new java.util.GregorianCalendar).getTimeInMillis(), getCode(h).ping = l - m) : getCode(h).ping = -1;
    } catch (n) {
      if (Halcyon.isDev) customMessage(n);
    }
  }}));
  i.start();
}, button() {
  var g = getModule("PingMeter");
  uithread(() => {
    try {
      getCode(g).btn.setText("Ping: " + getCode(g).ping), getCode(g).btn.setTextColor(android.graphics.Color.WHITE), getCode(g).btn.setTextSize(gs(17)), getCode(g).btn.setGravity(android.view.Gravity.RIGHT), getCode(g).btn.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), getCode(g).btn.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), getCode(g).gui = new android.widget.PopupWindow(getCode(g).btn, -2, -2), getCode(g).gui.setTouchable(false), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 15, 5), getCode(g).gui.setTouchable(false);
    } catch (h) {
      errorMessage(h);
    }
  });
}, tick() {
  var g = getModule("PingMeter"), h = getSettings(g, "Update time", 0);
  getState(g) && (getCode(g).ticked <= 0 ? (getCode(g).checkip(Server.getAddress()), getCode(g).ticked = h) : getCode(g).ticked--, uithread(() => {
    try {
      getCode(g).gui != null && getCode(g).btn.setText(fromHtml("Ping: " + getCode(g).ping));
    } catch (i) {
      errorMessage(i);
    }
  }));
}, toggle() {
  var g = getModule("PingMeter");
  if (getState(g)) getCode(g).button(); else {
    if (getCode(g).gui != null) {
      if (getCode(g).gui.isShowing()) getCode(g).gui.dismiss();
    }
  }
}}), associateModule("Coordinates,Cr", [false, false], "Misc", 0, {ticked: 0, ping: 0, btn: new android.widget.TextView(ctx), gui: null, button() {
  var g = getModule("Coordinates");
  uithread(() => {
    try {
      getCode(g).btn.setText(android.text.Html.fromHtml('<font color="red">X:</font> ' + Math.round(Player.getX()) + " <font color='red'>Y:</font> " + Math.round(Player.getY()) + " <font color='red'>Z:</font> " + Math.round(Player.getZ()))), getCode(g).btn.setTextColor(android.graphics.Color.WHITE), getCode(g).btn.setTextSize(gs(17)), getCode(g).btn.setGravity(android.view.Gravity.RIGHT), getCode(g).btn.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), getCode(g).btn.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), getCode(g).gui = new android.widget.PopupWindow(getCode(g).btn, -2, -2), getCode(g).gui.setTouchable(false), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 15, 5), getCode(g).gui.setTouchable(false);
    } catch (h) {
      errorMessage(h);
    }
  });
}, tick() {
  var g = getModule("Coordinates");
  getState(g) && uithread(() => {
    try {
      getCode(g).gui != null && getCode(g).btn.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">X:</font> ' + Math.round(Player.getX()) + ' <font color="' + maincolor + '">Y:</font> ' + Math.round(Player.getY()) + ' <font color="' + maincolor + '">Z:</font> ' + Math.round(Player.getZ())));
    } catch (h) {
      errorMessage(h);
    }
  });
}, toggle() {
  var g = getModule("Coordinates");
  if (getState(g)) getCode(g).button(); else {
    if (getCode(g).gui != null) {
      if (getCode(g).gui.isShowing()) getCode(g).gui.dismiss();
    }
  }
}});
Halcyon.isDev && (associateModule("Fucker,BF", [false, false], "Player", 0, {tick() {
  var g = getModule("Fucker"), h = 6, i = [26, 122, 92, 54], j = Math.round(getPlayerX()), k = Math.round(getPlayerY()), l = Math.round(getPlayerZ());
  if (getState(g)) for (var m = j - h; m < j + h; m++) {
    for (var n = k - h; n < k + h; n++) {
      for (var o = l - h; o < l + h; o++) {
        if (i.indexOf(Level.getTile(m, n, o)) != -1) Level.setTile(m, n, o, 0, 0);
      }
    }
  }
}}), associateModule("TapMessage,TM", [false, false], "Misc", 0, {gui: null, say(g) {
  var h = new java.lang.Thread(new java.lang.Runnable({run() {
    try {
      var i = new android.app.Instrumentation;
      i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_T), java.lang.Thread.sleep(100), i.sendStringSync(g), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_ENTER), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_BACK), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_BACK), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_ESCAPE), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_ESCAPE);
    } catch (j) {
      errorMessage(j);
    }
  }}));
  h.start();
}, button() {
  var g = getModule("TapMessage");
  uithread(() => {
    try {
      let i = false, j = 0, k = 0, l = 0, m = 0;
      var h = false;
      let n = new android.widget.TextView(ctx);
      n.setText(g.name[1]), n.setTextColor(-1), n.setTextSize(gs(14)), n.setTransformationMethod(null), n.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), n.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), n.setBackground(style.main()), n.setGravity(android.view.Gravity.CENTER), n.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (o, p) {
        try {
          i = true;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              n.setBackground(style.custom_corner("#2d2d2d", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)]));
              break;
            case android.view.MotionEvent.ACTION_UP:
              n.setBackground(style.main());
              if (!h) {
                if (confirmScreenSafe()) getCode(g).say();
              }
              ;
              break;
            case android.view.MotionEvent.ACTION_CANCEL:
              break;
          }
          if (!i) return false;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              j = l - p.getRawX(), k = m - p.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              (p.getRawX() + j - l >= 3 || p.getRawX() + j - l <= -3 || p.getRawY() + k - m >= 3 || p.getRawY() + k - m <= -3) && (h = true, l = p.getRawX() + j, m = p.getRawY() + k, getCode(g).gui.update(l, m, -1, -1));
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              i = false, h = false;
              break;
          }
        } catch (q) {
          errorMessage(q);
        }
        return true;
      }})), getCode(g).gui = new android.widget.PopupWindow(n, gs(dip2px(50)), gs(dip2px(50))), getCode(g).gui.setAnimationStyle(android.R.style.Animation_Dialog), getCode(g).gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch (o) {
      errorMessage(o);
    }
  });
}, toggle() {
  var g = getModule("TapMessage");
  getState(g) ? getCode(g).button() : getCode(g).gui.dismiss();
}}), associateModule("SaintBypass <font color='#ffd900'>Premium</font>,+", [false, false], "Misc", 0, {old: 0, state: true, toggle() {
  var g = getModule("SaintBypass <font color='#ffd900'>Premium</font>");
  getState(g) ? getCode(g).old = getPlayerX() : setPosition(getPlayerEnt(), getCode(g).old, getPlayerY(), getPlayerZ());
}, tick() {
  var g = getModule("SaintBypass <font color='#ffd900'>Premium</font>");
  getState(g) && (getCode(g).state ? (setPosition(getPlayerEnt(), getPlayerX() + 4096, getPlayerY(), getPlayerZ()), getCode(g).state = !getCode(g).state) : (setPosition(getPlayerEnt(), getPlayerX() - 4096, getPlayerY(), getPlayerZ()), getCode(g).state = !getCode(g).state));
}}), associateModule("Blink,+", [false, false], "Misc", 0, {toggled: false, init() {
  try {
    var g = "param1=" + java.net.URLEncoder.encode("87845", "UTF-8"), h = new java.lang.Thread(new java.lang.Runnable({run() {
      try {
        android.os.Looper.prepare(), (new android.os.Handler).postDelayed(new java.lang.Runnable({run() {
          try {
            var i = getModule("Blink"), j = getState(i);
            if (j) {
              var k = new java.net.URL("http://localhost"), l = k.openConnection();
              l.setDoOutput(true), l.setDoInput(true), l.setRequestMethod("GET"), l.setRequestProperty("charset", "utf-8"), l.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:8.0) Gecko/20100101 Firefox/8.0"), l.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"), l.setRequestProperty("Content-Length", g), customMessage(this + " " + l.getResponseCode()), (new android.os.Handler).postDelayed(this, 100);
            }
          } catch (m) {
            errorMessage(m + " at #" + m.lineNumber), getCode(i).init();
          }
        }}), 100), android.os.Looper.loop();
      } catch (i) {
        errorMessage(i);
      }
    }}));
    h.start();
  } catch (i) {
    errorMessage(i);
  }
}, toggle() {
  try {
    var g = getModule("Blink");
    getCode(g).toggled == false && (getCode(g).init(), getCode(g).toggled = true);
  } catch (h) {
    errorMessage(h);
  }
}}));
;
var customMessage = g => {
  clientMessage("§4§lH§falcyon §7>§r " + g);
}, askedForMessage = false, sscreen = "", confirmScreenSafe = () => {
  return sscreen == "hud_screen" ? true : false;
};
function confirmGameScreen() {
  return confirmScreenSafe() || sscreen == "chat_screen" || sscreen == "survival_inventory_screen" || sscreen == "creative_inventory_screen" || sscreen == "small_chest_screen" || sscreen == "large_chest_screen" ? true : false;
}
var scale = 1, avr = () => {
  ctx.runOnUiThread({run() {
    try {
      (new android.os.Handler).postDelayed({run() {
        Halcyon.mods.forEach(g => {
          getCode(g).hasOwnProperty("avr") && getCode(g).avr();
        });
        if (getState(getModule("ESP")) || getState(getModule("TraceLines"))) Render.glSurface.requestRender();
        popup_menu != null && popup_menu.isShowing() ? opn = true : opn = false, eval(avr());
      }}, 1);
    } catch (g) {
      clientMessage(g);
    }
  }});
}, uithread = g => {
  ctx.runOnUiThread({run() {
    try {
      g();
    } catch (h) {
      errorMessage(h);
    }
    ;
  }});
}, gs = g => {
  return g * scale;
};
function sleep(g) {
  var h = (new Date).getTime(), j = 0;
  while ((new Date).getTime() - h < g) {
    j++;
  }
}
;
var filemanager = {select: function (g, h) {
  return new java.lang.File(g, h);
}, exists: function (g) {
  return g.exists();
}, isFile: function (g) {
  return g.isFile();
}, isDirectory: function (g) {
  return g.isDirectory();
}, create: function (g) {
  return g.createNewFile(), g;
}, del: function (g) {
  g.delete();
}, read: function (g) {
  var h = new java.io.BufferedReader(new java.io.FileReader(g)), i = new java.lang.StringBuilder, j;
  while ((j = h.readLine()) != null) {
    i.append(j), i.append("\n");
  }
  return i.toString();
}, readLine: function (g, h) {
  var i = new filemanager.read(g), j = i.split("\n");
  return j[h - 1];
}, readKey: function (g, h, j) {
  var k = 0, l = new filemanager.read(g), m = l.split("\n");
  for (var n = 0; n < m.length; n++) {
    var o = m[n].split(j);
    if (o[0] == h) {
      return o[1];
      k = 1;
      break;
    }
    if (!k) return "[Unknown]";
  }
}, write: function (g, h) {
  file.rewrite(g, new manager.read(g) + h);
}, rewrite: function (g, h) {
  var i = new java.io.FileOutputStream(g);
  i.write(new java.lang.String(h).getBytes());
}}, config = {dir: android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon/configs", createmaincfg() {
  var g = new java.io.File(config.dir, "main.ini");
  if (java.io.File(g).exists()) g.createNewFile();
  var h = "";
  Halcyon.mods.forEach((j, k, l) => {
    h = h + j.name[0] + ":" + getState(j) + "," + getBindState(j) + ":", j.settings.forEach(m => {
      if (m.type != "bool") h = h + m.name + "," + m.values[0] + ";"; else h = h + m.name + "," + m.values + ";";
    });
    if (!k != l.length) h = h + "\n";
  }), filemanager.rewrite(g, h);
}, createpath() {
  if (!java.io.File(config.dir).exists()) java.io.File(config.dir).mkdirs();
}, createmain() {
  var g = new java.io.File(config.dir, "default.cfg");
  if (java.io.File(g).exists()) g.createNewFile();
  var h = "";
  Halcyon.mods.forEach((j, k, l) => {
    h = h + j.name[0] + ":" + getState(j) + "," + getBindState(j) + ":", j.settings.forEach(m => {
      if (m.type != "bool") h = h + m.name + "," + m.values[0] + ";"; else h = h + m.name + "," + m.values + ";";
    });
    if (!k != l.length) h = h + "\n";
  }), filemanager.rewrite(g, h);
}, create(g) {
  try {
    var h = new java.io.File(config.dir, g + ".cfg");
    if (java.io.File(h).exists()) h.createNewFile();
    var i = "";
    Halcyon.mods.forEach((j, k, l) => {
      i = i + j.name[0] + ":" + getState(j) + "," + getBindState(j) + ":", j.settings.forEach(m => {
        if (m.type != "bool") i = i + m.name + "," + m.values[0] + ";"; else i = i + m.name + "," + m.values + ";";
      });
      if (!k != l.length) i = i + "\n";
    }), filemanager.rewrite(h, i), customMessage("§aConfig §7§l'" + g + "'§r§a successful saved!");
  } catch (j) {
    errorMessage(j);
  }
}, load(g) {
  try {
    var h = new java.io.File(config.dir, g + ".cfg");
    if (java.io.File(h).exists()) {
      uithread(() => {
        Halcyon.mods.forEach((j, k, l) => {
          if (j.state[0]) {
            if (getCode(j).toggle != undefined) getCode(j).toggle();
          }
          ;
          if (j.state[1]) {
            if (j.bind != null) {
              if (j.bind.isShowing()) j.bind.dismiss();
            }
          }
          if (getCode(j).gui != undefined && getCode(j).gui != null) {
            if (getCode(j).gui.isShowing()) getCode(j).gui.dismiss();
          }
          j.state[0] = false, j.state[1] = false;
        });
      });
      var i = String(filemanager.read(h)).split("\n");
      i.forEach((j, k, l) => {
        if (k != l.length - 1) {
          var m = j.split(":"), n = getModule(m[0]), o = m[1].split(",");
          if (m[2] != "") {
            var p = m[2].split(";"), q = [];
            p.forEach((r, s, t) => {
              s != t.length - 1 && q.push(r);
            }), p = q, p.forEach((r, s, t) => {
              var u = r.split(","), v = u[1] == "true" ? "bool" : "other", w = false;
              v == "bool" ? (w = u[1] == "true" ? true : false, n.settings[s].values = w) : v == "int" ? (w = parseFloat(u[1]), n.settings[s].values[0] = w) : (w = u[1], n.settings[s].values[0] = w);
            });
          }
          ;
          n.state[0] = o[0] == "true" ? true : false, n.state[1] = o[1] == "true" ? true : false;
          if (n.state[0]) {
            if (getCode(n).toggle != undefined) getCode(n).toggle();
          }
          ;
          getBindState(n) && bindbutton(n);
          ;
        }
      }), customMessage("§aConfig §7§l'" + g + "'§r§a successful loaded!");
    } else customMessage("§eConfig §7§l'" + g + "'§r§e does not exists!");
  } catch (j) {
    errorMessage(j);
  }
}};
config.createpath(), config.createmain();
var Render = {getFloatBuffer: function (g) {
  var h = java.nio.ByteBuffer.allocateDirect(g.length * 4);
  h.order(java.nio.ByteOrder.nativeOrder());
  var i = h.asFloatBuffer(), i = h.asFloatBuffer();
  return i.put(g), i.position(0), i;
}, getShortBuffer: function (g) {
  var h = java.nio.ByteBuffer.allocateDirect(g.length * 2);
  h.order(java.nio.ByteOrder.nativeOrder());
  var i = h.asShortBuffer();
  return i.put(g), i.position(0), i;
}, renderer: null, glSurface: null, fov: 90, initted: false, init() {
  let g = filemanager.read(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));
  g = g.split("\n"), g.forEach(function (h) {
    let i = h.split(":");
    i[0] == "gfx_field_of_view" && (Render.fov = i[1]);
  }), this.renderer = new android.opengl.GLSurfaceView.Renderer({onSurfaceCreated: function (h, i) {
    var j = javax.microedition.khronos.opengles.GL10;
    h.glEnable(javax.microedition.khronos.opengles.GL10.GL_TEXTURE_2D), h.glShadeModel(javax.microedition.khronos.opengles.GL10.GL_SMOOTH), h.glClearColor(0, 0, 0, 0), h.glClearDepthf(1), h.glEnable(javax.microedition.khronos.opengles.GL10.GL_DEPTH_TEST), h.glDepthFunc(javax.microedition.khronos.opengles.GL10.GL_LEQUAL), h.glHint(javax.microedition.khronos.opengles.GL10.GL_PERSPECTIVE_CORRECTION_HINT, javax.microedition.khronos.opengles.GL10.GL_NICEST);
  }, onSurfaceChanged: function (h, i, j) {
    var k = javax.microedition.khronos.opengles.GL10;
    h.glMatrixMode(k.GL_PROJECTION), h.glLoadIdentity(), android.opengl.GLU.gluPerspective(h, Render.fov, i / j, 0.1000000000003638, 100), h.glMatrixMode(k.GL_MODELVIEW), h.glLoadIdentity();
  }, onDrawFrame: function (h) {
    var i = javax.microedition.khronos.opengles.GL10;
    h.glClear(i.GL_COLOR_BUFFER_BIT | i.GL_DEPTH_BUFFER_BIT), h.glLoadIdentity(), h.glDisable(i.GL_LIGHTING);
    var j = getModule("ESP"), k = getModule("Tracers");
    if (confirmScreenSafe()) try {
      var l = getYaw() % 360, m = getPitch() % 360, n = getPlayerX(), o = getPlayerY() + 1, p = getPlayerZ(), q = Math.sin(l / 180 * Math.PI), r = Math.cos(l / 180 * Math.PI), s = Math.sqrt(q * q + r * r) * Math.tan((m - 180) / 180 * Math.PI), t = n - q, u = p + r, v = o - s;
      android.opengl.GLU.gluLookAt(h, n, o, p, t, v, u, 0, 1, 0);
      try {
        Halcyon.mods.forEach((w, z, A) => {
          if (getCode(w).hasOwnProperty("render")) getCode(w).render(h);
        });
      } catch (w) {
        errorMessage(w);
      }
    } catch (z) {
      errorMessage("RenderProblem: " + z);
    }
  }}), ctx.runOnUiThread(new java.lang.Runnable({run() {
    Render.glSurface = new android.opengl.GLSurfaceView(ctx), Render.glSurface.setZOrderOnTop(true), Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0), Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT), Render.glSurface.setRenderer(Render.renderer), Render.glSurface.setRenderMode(0), ctx.getWindow().getDecorView().addView(Render.glSurface), Render.initted = true;
  }}));
}, drawBox(g, h, i, j, k, l, m, n) {
  var o = javax.microedition.khronos.opengles.GL10, p = new Array(k, l, m), q = [0, 0, 0, p[0], 0, 0, 0, 0, p[2], p[0], 0, p[2], 0, p[1], 0, p[0], p[1], 0, 0, p[1], p[2], p[0], p[1], p[2]], r = Render.getFloatBuffer(q), s = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2], t = Render.getShortBuffer(s);
  g.glTranslatef(h, i, j), g.glFrontFace(o.GL_CCW), g.glEnable(o.GL_BLEND), g.glBlendFunc(o.GL_SRC_ALPHA, o.GL_ONE_MINUS_SRC_ALPHA), g.glLineWidth(5);
  if (!n) g.glColor4f(0.8999999999999773, 0.1000000000003638, 0.1000000000003638, 0.8000000000001819); else g.glColor4f(0.09999999999990905, 0.8999999999996362, 0.1000000000003638, 0.7999999999999545);
  g.glEnableClientState(o.GL_VERTEX_ARRAY), g.glVertexPointer(3, o.GL_FLOAT, 0, r), g.glDrawElements(o.GL_LINES, s.length, o.GL_UNSIGNED_SHORT, t), g.glTranslatef(-h, -i, -j);
}, drawBoxFilled(g, h, i, j, k, l, m, n) {
  var o = javax.microedition.khronos.opengles.GL10, p = new Array(k, l, m), q = [0, 0, 0, p[0], 0, 0, 0, 0, p[2], p[0], 0, p[2], 0, p[1], 0, p[0], p[1], 0, 0, p[1], p[2], p[0], p[1], p[2]], r = Render.getFloatBuffer(q), s = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2], t = Render.getShortBuffer(s);
  g.glTranslatef(h, i, j), g.glFrontFace(o.GL_CCW), g.glEnable(o.GL_BLEND), g.glEnable(o.GL_LINE_SMOOTH), g.glBlendFunc(o.GL_SRC_ALPHA, o.GL_ONE_MINUS_SRC_ALPHA), g.glLineWidth(5), g.glColor4f(1, 1, 0, 0.8000000000001819), g.glEnableClientState(o.GL_VERTEX_ARRAY), g.glVertexPointer(3, o.GL_FLOAT, 0, r), g.glDrawElements(o.GL_TRIANGLES, s.length, o.GL_UNSIGNED_SHORT, polyBuffer), g.glDisable(o.GL_LINE_SMOOTH), g.glTranslatef(-h, -i, -j);
}, drawLine: function (g, h, i, j, k, l, m, n) {
  let o = javax.microedition.khronos.opengles.GL10, p = new Array(k, l, m), q = [0, 0, 0, k - h, l - i, m - j], r = Render.getFloatBuffer(q), s = [0, 1], t = Render.getShortBuffer(s);
  g.glTranslatef(h, i, j), g.glEnable(o.GL_BLEND), g.glDepthMask(false), g.glBlendFunc(o.GL_SRC_ALPHA, o.GL_ONE_MINUS_SRC_ALPHA), g.glLineWidth(5);
  if (!n) g.glColor4f(0.8999999999996362, 0.1000000000003638, 0.1000000000003638, 0.7999999999992724); else g.glColor4f(0.09999999999990905, 0.8999999999996362, 0.1000000000003638, 0.8000000000000114);
  g.glEnableClientState(o.GL_VERTEX_ARRAY), g.glVertexPointer(3, o.GL_FLOAT, 0, r), g.glDrawElements(o.GL_LINES, s.length, o.GL_UNSIGNED_SHORT, t), g.glTranslatef(-h, -i, -j), g.glDepthMask(true), g.glDisable(o.GL_LINE_SMOOTH);
}}, Render_tracers = {File: {getTextFromFile: function (g) {
  let h = new java.io.BufferedReader(new java.io.FileReader(g)), i = new java.lang.StringBuilder, j;
  while ((j = h.readLine()) != null) i.append(j + "\n");
  return i.toString();
}}, Render: {getFloatBuffer: function (g) {
  let h = java.nio.ByteBuffer.allocateDirect(g.length * 4);
  h.order(java.nio.ByteOrder.nativeOrder());
  let i = h.asFloatBuffer();
  return i.put(g), i.position(0), i;
}, getShortBuffer: function (g) {
  let h = java.nio.ByteBuffer.allocateDirect(g.length * 2);
  h.order(java.nio.ByteOrder.nativeOrder());
  let i = h.asShortBuffer();
  return i.put(g), i.position(1), i;
}, renderer: null, glSurface: null, fov: 90, initted: false, init: function () {
  if (Render_tracers.Render.initted) {
    this.renderer = null;
    return;
  }
  let g = Render_tracers.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));
  g = g.split("\n"), g.forEach(function (h) {
    let i = h.split(":");
    i[0] == "gfx_field_of_view" && (Render_tracers.Render.fov = i[1]);
  }), this.renderer = new android.opengl.GLSurfaceView.Renderer({onSurfaceCreated: function (h, i) {
    let j = javax.microedition.khronos.opengles.GL10;
    h.glClearColor(0, 0, 0, 0), h.glShadeModel(j.GL_SMOOTH), h.glClearDepthf(1), h.glDisable(j.GL_DITHER), h.glEnable(j.GL_DEPTH_TEST), h.glDepthFunc(j.GL_LEQUAL), h.glHint(j.GL_PERSPECTIVE_CORRECTION_HINT, j.GL_NICEST);
  }, onSurfaceChanged: function (h, i, j) {
    sw = i, sh = j;
    let k = javax.microedition.khronos.opengles.GL10;
    h.glMatrixMode(k.GL_PROJECTION), h.glLoadIdentity(), android.opengl.GLU.gluPerspective(h, Render_tracers.Render.fov, i / j, -0.9899999999997817, 99.89999999999964), h.glMatrixMode(k.GL_MODELVIEW), h.glLoadIdentity();
  }, onDrawFrame: function (h) {
    let i = javax.microedition.khronos.opengles.GL10;
    h.glClear(i.GL_COLOR_BUFFER_BIT | i.GL_DEPTH_BUFFER_BIT), h.glLoadIdentity();
    if (confirmScreenSafe() && getPlayerEnt() != -1) {
      if (getState(getModule("TraceLines"))) try {
        h.glDisable(i.GL_LIGHTING);
        let m = getYaw() % 360, n = getPitch() % 360, o = getPlayerX(), p = getPlayerY() + 1, q = getPlayerZ(), r = Math.sin(m / 180 * Math.PI), s = Math.cos(m / 180 * Math.PI), t = Math.sqrt(r * r + s * s) * Math.tan((n - 180) / 180 * Math.PI), u = o - r, v = q + s, w = p - t;
        android.opengl.GLU.gluLookAt(h, o, p, q, u, w, v, 0, 1, 0);
        let z = Entity.getAll(), A = Server.getAllPlayers();
        var j = getPlayerX(), k = getPlayerY() + 1, l = getPlayerZ();
        getCode(getModule("TraceLines")).render(h);
      } catch (B) {
        clientMessage(B);
      }
    } else {}
  }}), ctx.runOnUiThread(new java.lang.Runnable({run: function () {
    Render_tracers.Render.glSurface = new android.opengl.GLSurfaceView(ctx), Render_tracers.Render.glSurface.setZOrderOnTop(true), Render_tracers.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0), Render_tracers.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT), Render_tracers.Render.glSurface.setRenderer(Render_tracers.Render.renderer), ctx.getWindow().getDecorView().addView(Render_tracers.Render.glSurface), Render_tracers.Render.initted = true;
  }}));
}, drawLine: function (g, h, i, j, k, l, m, n) {
  let o = javax.microedition.khronos.opengles.GL10, p = new Array(k, l, m), q = [0, 0, 0, k - h, l - i, m - j], r = Render_tracers.Render.getFloatBuffer(q), s = [0, 1], t = Render_tracers.Render.getShortBuffer(s);
  g.glTranslatef(h, i, j), g.glEnable(o.GL_BLEND), g.glDepthMask(false), g.glBlendFunc(o.GL_SRC_ALPHA, o.GL_ONE_MINUS_SRC_ALPHA), g.glLineWidth(3);
  if (!n) g.glColor4f(0.8999999999996362, 0.09999999999990905, 0.1000000000003638, 0.8000000000001819); else g.glColor4f(0.1000000000003638, 0.900000000000091, 0.1000000000003638, 0.8000000000001819);
  g.glEnableClientState(o.GL_VERTEX_ARRAY), g.glVertexPointer(3, o.GL_FLOAT, 0, r), g.glDrawElements(o.GL_LINES, s.length, o.GL_UNSIGNED_SHORT, t), g.glTranslatef(-h, -i, -j), g.glDisable(o.GL_LINE_SMOOTH);
}}}, pb = new android.widget.TextView(ctx), png = 0, pp = null, ppp = null, au7yn, hud = () => {
  uithread(() => {
    try {
      pb.setText("Ping: " + png), pb.setTextColor(android.graphics.Color.WHITE), pb.setTextSize(gs(17)), pb.setGravity(android.view.Gravity.RIGHT), pb.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), pb.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), ppp = new android.widget.PopupWindow(pb, -2, -2), ppp.setTouchable(false), ppp.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 15, 5), ppp.setTouchable(false);
    } catch (g) {
      errorMessage(g);
    }
  });
}, watermark = () => {
  uithread(() => {
    try {
      var g = new android.widget.TextView(ctx);
      g.setText(android.text.Html.fromHtml("Made by <font color='#ffd900'>au7yn</font>")), g.setTextColor(android.graphics.Color.WHITE), g.setTextSize(gs(17)), g.setGravity(android.view.Gravity.RIGHT), g.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), g.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK);
      var h = new android.widget.PopupWindow(g, -2, -2);
      h.setTouchable(false), h.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 15, 5), h.setTouchable(false);
    } catch (i) {
      errorMessage(i);
    }
  });
}, nots = [], lastindex = 0, moves = false, notification = (g, h) => {
  var h0 = b, i = getModule("Notifications");
  if (getState(i)) uithread(() => {
    try {
      var j = getSettings(i, "Show time", 0), k;
      h == undefined ? k = j : k = h;
      lastindex++, nots.push({tick: k, gui: null, index: lastindex, pos: {x: 0, y: gs(dip2px(15)) + 30 + lastindex * gs(dip2px(30))}});
      var l = nots.length - 1, m = nots[l].index, n = new LinearLayout(ctx);
      n.setOrientation(1), n.setBackground(style.custom_corner("#2d2d2d", [20, 20, 0, 0, 0, 0, 20, 20]));
      var o = new android.widget.TextView(ctx);
      o.setText(android.text.Html.fromHtml(g)), o.setTextColor(android.graphics.Color.WHITE), o.setTextSize(gs(17)), o.setGravity(android.view.Gravity.CENTER), o.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), o.setPadding(10, 10, 10, 10), o.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), n.addView(o), nots[l].gui = new android.widget.PopupWindow(n, -2, -2), nots[l].gui.setTouchable(false), nots[l].gui.setAnimationStyle(android.R.style.Animation_Translucent), nots[l].gui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, nots[l].pos.y), nots[l].gui.setTouchable(false);
    } catch (p) {
      errorMessage(p);
    }
  });
};
(() => {
  new java.lang.Thread(new java.lang.Runnable({run() {
    while (true) {
      uithread(() => {
        var h6 = b;
        nots.length != 0 && lastindex != 0 ? nots.forEach((g, h, j) => {
          g.tick--;
          g.tick <= 0 && g.gui != null && (g.gui.dismiss(), g.gui = null, nots.splice(0, 1), moves = true);
          ;
        }) : lastindex = 0;
      }), java.lang.Thread.sleep(50);
    }
  }})).start();
})();
var post = new android.widget.TextView(ctx), pos = () => {
  uithread(() => {
    try {
      post.setText(android.text.Html.fromHtml('<font color="red">X:</font> ' + Math.round(Player.getX()) + " <font color='red'>Y:</font> " + Math.round(Player.getY()) + " <font color='red'>Z:</font> " + Math.round(Player.getZ()))), post.setTextColor(android.graphics.Color.WHITE), post.setTextSize(gs(17)), post.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), post.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), pp = new android.widget.PopupWindow(post, -2, -2), pp.setTouchable(false), pp.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 15, 5), pp.setTouchable(false);
    } catch (g) {
      errorMessage(g);
    }
  });
}, seekbarsetting = g => {
  try {
    var h = g.values;
    let j = gs(10), k = gs(6), l = new LinearLayout(ctx);
    l.setOrientation(1), l.setPadding(j, k, j, k);
    let m = new TextView(ctx);
    m.setText(fromHtml("<font color='#e1e4eb'>" + g.name + ": </font><font color='green'>" + h[0] + "</font>")), m.setTextColor(android.graphics.Color.parseColor("#e1e4eb")), m.setTextSize(gs(15)), m.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), m.setPadding(0, 0, 0, gs(4)), m.setGravity(Gravity.LEFT), l.addView(m);
    var i = android.widget.SeekBar(ctx);
    return i.setMax(h[2] / h[1]), i.setPadding(gs(3), 0, 0, 0), i.getThumb().setColorFilter(android.graphics.Color.parseColor("#e1e4eb"), android.graphics.PorterDuff.Mode.SRC_IN), i.setProgress(h[0] / h[1]), i.setProgressTintList(new android.content.res.ColorStateList.valueOf(android.graphics.Color.parseColor("#e1e4eb"))), i.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (n, o, p) {
      m.setText(fromHtml(g.name + ": <font color='green'>" + Math.round(o * h[1] * 100) / 100 + "</font>")), h[0];
    }, onStopTrackingTouch: function (n) {
      h[0] = Math.round(n.getProgress() * h[1] * 100) / 100;
    }})), l.addView(i), l;
  } catch (n) {
    customMessage(n);
  }
}, booleansetting = g => {
  try {
    var h = g.values;
    let i = gs(10), j = gs(6), k = new LinearLayout(ctx);
    k.setOrientation(1), k.setPadding(i, j, i, j);
    let l = new TextView(ctx);
    if (g.values) l.setText(android.text.Html.fromHtml(g.name + ': <font color="green">true</font>')); else l.setText(android.text.Html.fromHtml(g.name + ': <font color="red">false</font>'));
    return l.setTextColor(android.graphics.Color.parseColor("#e1e4eb")), l.setTextSize(gs(15)), l.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), l.setPadding(0, 0, 0, gs(4)), l.setGravity(Gravity.LEFT), l.setOnClickListener(new OnClickListener({onClick(m) {
      ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(20), g.values = !g.values;
      if (g.values) l.setText(android.text.Html.fromHtml(g.name + ': <font color="green">true</font>')); else l.setText(android.text.Html.fromHtml(g.name + ': <font color="red">false</font>'));
    }})), k.addView(l), k;
  } catch (m) {
    errorMessage(m);
  }
}, stringsetting = g => {
  try {
    var h = g.values;
    let i = gs(10), j = gs(6), k = false, l = new LinearLayout(ctx);
    l.setOrientation(1), l.setPadding(i, j, i, j);
    function m(o) {
      let p = new android.widget.TextView(ctx);
      return p.setText(android.text.Html.fromHtml(h[0] == o ? '<font color="yellow"><b>' + o + "</b></font>" : o)), p.setTextColor(android.graphics.Color.parseColor("#e1e4eb")), p.setTextSize(h[0] == o ? gs(15) : gs(13)), p.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), p.setPadding(0, 0, 0, gs(3)), p.setGravity(Gravity.CENTER), p.setOnClickListener(new OnClickListener({onClick(q) {
        h[0] = o, n.setText(android.text.Html.fromHtml(g.name + ': <font color="yellow">' + h[0] + "</font>")), l.removeAllViews(), l.addView(n), h.forEach((r, s) => {
          if (s != 0) l.addView(m(r));
        });
      }})), p;
    }
    let n = new TextView(ctx);
    return n.setText(android.text.Html.fromHtml(g.name + ': <font color="yellow">' + h[0] + "</font>")), n.setTextColor(android.graphics.Color.parseColor("#e1e4eb")), n.setTextSize(gs(15)), n.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), n.setPadding(0, 0, 0, gs(4)), n.setGravity(Gravity.LEFT), n.setOnClickListener(new OnClickListener({onClick(o) {
      ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(10), k = !k, k ? h.forEach((p, q) => {
        if (q != 0) l.addView(m(p));
      }) : (l.removeAllViews(), l.addView(n));
    }})), l.addView(n), l;
  } catch (o) {
    errorMessage(o);
  }
}, mainbg = () => {
  let g = new android.graphics.drawable.GradientDrawable;
  return g.setColor(HSV([1, 100, 85])), g;
}, blackbg = () => {
  let g = new android.graphics.drawable.GradientDrawable;
  return g.setColor(HSV([0, 0, 0])), g.setAlpha(220), g;
}, x = 150, y = 100, sx = x, sy = y, settings = g => {
  uithread(() => {
    try {
      let k = false, l = 0, m = 0, n = new android.widget.LinearLayout(ctx);
      n.setOrientation(1), n.setBackground(style.main());
      let o = new android.widget.LinearLayout.LayoutParams(-2, -2);
      o.setMargins(gs(dip2px(10)), gs(dip2px(5)), gs(dip2px(10)), gs(dip2px(5)));
      var h = g.name[0][0], i = g.name[0].slice(1);
      let p = new android.widget.TextView(ctx);
      p.setText(android.text.Html.fromHtml('<font color="#d90000">' + h + '</font><font color="#ffffff">' + i + "</font>")), p.setTextColor(-1), p.setGravity(android.view.Gravity.CENTER), p.setLayoutParams(o), p.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), p.setTypeface(font), p.setTransformationMethod(null), p.setTextSize(gs(16)), p.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (u, v) {
        try {
          k = true;
          if (!k) return false;
          ;
          switch (v.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              l = sx - v.getRawX(), m = sy - v.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              sx = v.getRawX() + l, sy = v.getRawY() + m, j.update(sx, sy, -1, -1);
              break;
            case android.view.MotionEvent.ACTION_UP:
              ;
            case android.view.MotionEvent.ACTION_CANCEL:
              k = false;
              break;
          }
        } catch (w) {}
        ;
        return true;
      }})), n.addView(p), o = new android.widget.LinearLayout.LayoutParams(gs(dip2px(160)), gs(dip2px(2)));
      let q = new android.widget.LinearLayout(ctx);
      q.setBackgroundColor(android.graphics.Color.parseColor("#d90000")), q.setLayoutParams(o), n.addView(q), o = new android.widget.LinearLayout.LayoutParams(-1, -2);
      let r = new android.widget.LinearLayout(ctx);
      r.setOrientation(1), r.setLayoutParams(o), r.setBackground(style.custom_corner("#2d2d2d", [0, 0, 0, 0, 0, 0, 0, 0])), n.addView(r);
      let s = new android.widget.ScrollView(ctx);
      s.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), s.getLayoutParams().setMargins(gs(4), gs(5), gs(4), gs(5)), r.addView(s);
      let t = new android.widget.LinearLayout(ctx);
      t.setOrientation(1), t.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), t.getLayoutParams().setMargins(gs(4), gs(5), gs(4), gs(5)), s.addView(t);
      g.settings != 0 && g.settings.forEach(u => {
        u.type == "int" ? t.addView(seekbarsetting(u)) : u.type == "bool" ? t.addView(booleansetting(u)) : t.addView(stringsetting(u));
      });
      ;
      o = new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(2))), q = new android.widget.LinearLayout(ctx), q.setBackgroundColor(android.graphics.Color.parseColor("#d90000")), q.setLayoutParams(o), n.addView(q), o = new android.widget.LinearLayout.LayoutParams(-2, -2), o.setMargins(gs(dip2px(10)), gs(dip2px(5)), gs(dip2px(10)), gs(dip2px(5))), p = new android.widget.TextView(ctx);
      if (g.state[1]) p.setText(android.text.Html.fromHtml('Bind: <font color="green">' + getBindState(g) + "</font>")); else p.setText(android.text.Html.fromHtml('Bind: <font color="red">' + getBindState(g) + "</font>"));
      p.setTextColor(-1), p.setSingleLine(true), p.setGravity(android.view.Gravity.CENTER), p.setLayoutParams(o), p.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), p.setBackground(style.custom_corner("#545454", [0, 0, 0, 0, 20, 20, 20, 20])), p.setTypeface(font), p.setTransformationMethod(null), p.setTextSize(gs(16)), p.setOnClickListener(new OnClickListener({onClick(u) {
        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(60), g.state[1] = !g.state[1];
        if (g.state[1]) bindbutton(g); else g.bind.dismiss();
        if (g.state[1]) p.setText(android.text.Html.fromHtml('Bind: <font color="green">' + getBindState(g) + "</font>")); else p.setText(android.text.Html.fromHtml('Bind: <font color="red">' + getBindState(g) + "</font>"));
      }})), n.addView(p);
      var j = new android.widget.PopupWindow(n, -2, -2, true);
      j.setAnimationStyle(android.R.style.Animation_Dialog), j.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0), j.update(sx, sy, -1, -1);
    } catch (u) {
      errorMessage(u + u.lineNumber);
    }
  });
}, button_popup = null, button_view = null, button = () => {
  uithread(() => {
    try {
      button_view = new android.widget.TextView(ctx), Halcyon.isDev ? button_view.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">H</font><font color="#ffffff">alcyon - build ' + Halcyon.build + " Dev</font>")) : button_view.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">H</font><font color="#ffffff">alcyon - build ' + Halcyon.build + "</font>")), button_view.setTextColor(android.graphics.Color.WHITE), button_view.setTextSize(gs(17)), button_view.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), button_view.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), button_view.setGravity(android.view.Gravity.CENTER), button_view.setOnClickListener(new OnClickListener({onClick(g) {
        menu();
      }})), button_popup = new android.widget.PopupWindow(button_view, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT), button_popup.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, gs(15), gs(5));
    } catch (g) {
      errorMessage(g);
    }
  });
}, font = android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD), style = {custom_simple(g) {
  let h = new android.graphics.drawable.GradientDrawable;
  return h.setColor(android.graphics.Color.parseColor(g)), h;
}, custom_corner(g, h) {
  let i = new android.graphics.drawable.GradientDrawable;
  return i.setColor(android.graphics.Color.parseColor(g)), i.setCornerRadii([h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]]), i;
}, custom_corner_color(g, h, i, j) {
  let k = new android.graphics.drawable.GradientDrawable;
  return k.setColor(android.graphics.Color.parseColor(g)), k.setStroke(h, android.graphics.Color.parseColor(i)), k.setCornerRadii([j[0], j[1], j[2], j[3], j[4], j[5], j[6], j[7]]), k;
}, main() {
  let g = new android.graphics.drawable.GradientDrawable;
  return g.setColor(android.graphics.Color.parseColor("#545454")), g.setCornerRadius(gs(20)), g;
}, mainon() {
  let g = new android.graphics.drawable.GradientDrawable;
  return g.setColor(android.graphics.Color.parseColor(maincolor)), g.setCornerRadius(20), g;
}}, categories = [{name: "Combat", button: null, lay: null}, {name: "Movement", button: null, lay: null}, {name: "Player", button: null, lay: null}, {name: "Misc.", button: null, lay: null}], choosen = categories[0].name, dip2px = g => {
  return Math.ceil(g * ctx.getResources().getDisplayMetrics().density);
};
popup_menu = null;
var sbar = g => {
  let h = new android.widget.LinearLayout(ctx);
  h.setOrientation(0), h.setPadding(gs(15), gs(15), gs(15), 0), h.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-2, gs(dip2px(25) + 15)));
  let i = new android.widget.TextView(ctx);
  i.setText("[]"), i.setTextSize(gs(13)), i.setTextColor(0), i.setPadding(gs(5), gs(5), gs(5), gs(1)), i.setBackground(g.state[0] ? style.custom_corner_color("#a2a2a2", 4, "#a2a2a2", [gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5)]) : style.custom_corner_color("#2d2d2d", 4, "#a2a2a2", [gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5)])), i.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(20)), gs(dip2px(20)))), i.setOnClickListener(new android.view.View.OnClickListener({onClick: function (l) {
    g.state[0] = !g.state[0], i.setBackground(g.state[0] ? style.custom_corner_color("#a2a2a2", 4, "#a2a2a2", [gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5)]) : style.custom_corner_color("#2d2d2d", 4, "#a2a2a2", [gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5)]));
    if (getCode(g).hasOwnProperty("toggle")) getCode(g).toggle();
    getState(g) ? notification("<font color='green'>Enabled:</font> <font color='white'>" + g.name[0] + "</font>") : notification("<font color='red'>Disabled:</font> <font color='white'>" + g.name[0] + "</font>");
  }})), i.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick(l, m) {
    return ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(60), settings(g), true;
  }})), h.addView(i);
  let j = new android.widget.LinearLayout(ctx);
  j.setOrientation(1), j.setPadding(0, 0, 0, 5);
  let k = new android.widget.TextView(ctx);
  return k.setText(" " + g.name[0]), k.setTypeface(font), k.setTextColor(android.graphics.Color.parseColor("#e1e4eb")), k.setGravity(android.view.Gravity.LEFT), k.setPadding(gs(3), gs(1), gs(1), gs(1)), k.setSingleLine(false), k.setBackground(null), k.setTextSize(gs(14)), k.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), k.setOnClickListener(new android.view.View.OnClickListener({onClick: function (l) {
    g.state[0] = !g.state[0], i.setBackground(g.state[0] ? style.custom_corner_color("#a2a2a2", 4, "#a2a2a2", [gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5)]) : style.custom_corner_color("#2d2d2d", 4, "#a2a2a2", [gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5), gs(5)]));
    if (getCode(g).hasOwnProperty("toggle")) getCode(g).toggle();
    getState(g) ? notification("<font color='green'>Enabled:</font> <font color='white'>" + g.name[0] + "</font>") : notification("<font color='red'>Disabled:</font> <font color='white'>" + g.name[0] + "</font>");
  }})), k.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick(l, m) {
    var i4 = b;
    return ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(60), settings(g), true;
  }})), j.addView(k), h.addView(j), h;
}, bindbutton = g => {
  ctx.runOnUiThread({run() {
    try {
      let i = false, j = 0, k = 0, l = 0, m = 0;
      var h = false;
      let n = new android.widget.TextView(ctx);
      n.setText(g.name[1]), n.setTextColor(-1), n.setTextSize(gs(14)), n.setTransformationMethod(null), n.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), n.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), n.setBackground(g.state[0] ? style.mainon() : style.main()), n.setGravity(android.view.Gravity.CENTER), n.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (o, p) {
        try {
          i = true;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              n.setBackground(g.state[0] ? style.custom_corner("#a80000", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)]) : style.custom_corner("#2d2d2d", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)]));
              break;
            case android.view.MotionEvent.ACTION_UP:
              n.setBackground(g.state[0] ? style.mainon() : style.main());
              if (!h) {
                g.state[0] = !g.state[0];
                if (g.code.hasOwnProperty("toggle")) g.code.toggle();
                n.setBackground(g.state[0] ? style.mainon() : style.main()), getState(g) ? notification("<font color='green'>Enabled:</font> <font color='white'>" + g.name[0] + "</font>") : notification("<font color='red'>Disabled:</font> <font color='white'>" + g.name[0] + "</font>");
              }
              ;
              break;
            case android.view.MotionEvent.ACTION_CANCEL:
              break;
          }
          if (!i) return false;
          switch (p.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              j = l - p.getRawX(), k = m - p.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              (p.getRawX() + j - l >= 3 || p.getRawX() + j - l <= -3 || p.getRawY() + k - m >= 3 || p.getRawY() + k - m <= -3) && (h = true, l = p.getRawX() + j, m = p.getRawY() + k, g.bind.update(l, m, -1, -1));
              break;
            case android.view.MotionEvent.ACTION_UP:
            case android.view.MotionEvent.ACTION_CANCEL:
              i = false, h = false;
              break;
          }
        } catch (q) {
          errorMessage(q);
        }
        return true;
      }})), g.bind = new android.widget.PopupWindow(n, gs(dip2px(45)), gs(dip2px(45))), g.bind.setAnimationStyle(android.R.style.Animation_Dialog), g.bind.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    } catch (o) {
      errorMessage(o);
    }
  }});
}, optionsmcpe = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"), Options = {read: function () {
  var g = new java.io.BufferedReader(new java.io.FileReader(optionsmcpe)), h = "", i;
  while ((i = g.readLine()) != null) h += i + "\n";
  return h;
}, get: function (g) {
  var h = null;
  try {
    var i = new java.io.BufferedReader(new java.io.FileReader(optionsmcpe)), j;
    while ((j = i.readLine()) != null) {
      if (j.split(":")[0] == g) h = j.split(":")[1];
    }
  } catch (k) {
    errorMessage(k);
  }
  return h;
}, set: function (g, h) {
  try {
    var i = this.read();
    i = i.replace(this.get(g), h), new java.io.FileOutputStream(optionsmcpe).write(new String(i).getBytes());
  } catch (j) {
    errorMessage(j);
  }
}, arr: function () {
  var g = [];
  try {
    var h, j = (h = this.read()).split("\n");
    for (var k = 0; k < j.length - 1; k++) {
      g.push(j[k].split(":")[0]);
    }
  } catch (l) {
    errorMessage(l);
  }
  return g;
}}, cfg = () => {
  try {
    const i = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon/configs");
    let j = new LinearLayout(ctx);
    j.setOrientation(1);
    var g = "", h = [];
    function k(z) {
      try {
        h = [], z.listFiles().forEach(A => {
          A.getName().indexOf(".cfg") != -1 && A.getName() != "default.cfg" && h.push(A.getName().replace(".cfg", ""));
        });
      } catch (A) {
        errorMessage(A);
      }
    }
    ;
    function l(z) {
      var A = new TextView(ctx);
      return A.setText(fromHtml(g == z ? '<font color="green"><b>' + z + "</b></font>" : z)), A.setTextColor(android.graphics.Color.parseColor("#e1e4eb")), A.setTextSize(gs(12)), A.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), A.setGravity(Gravity.CENTER), A.setPadding(0, 0, 0, gs(3)), A.setOnClickListener(new OnClickListener({onClick(B) {
        g = z, s.removeAllViews(), k(i), h.forEach(C => {
          s.addView(l(C));
        });
      }})), A;
    }
    let m = new android.graphics.drawable.GradientDrawable;
    m.setColor(android.graphics.Color.parseColor("#545454")), m.setCornerRadii([gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)]);
    let n = new android.widget.TextView(ctx);
    n.setText("Configs"), n.setTextColor(-1), n.setTextSize(gs(14)), n.setPadding(gs(10), 0, 0, 0), n.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), j.addView(n);
    let o = new LinearLayout(ctx);
    o.setOrientation(0), o.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(90)))), o.getLayoutParams().setMargins(gs(10), gs(10), gs(10), gs(4)), o.setBackground(style.custom_corner_color("#2b2b2b", 8, "#545454", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)])), j.addView(o);
    let p = new android.widget.ScrollView(ctx);
    p.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1, 1)), o.addView(p);
    let q = new android.widget.LinearLayout(ctx);
    q.setBackgroundColor(android.graphics.Color.parseColor(maincolor)), q.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(2)), -1)), o.addView(q);
    let r = new LinearLayout(ctx);
    r.setOrientation(1), r.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1, 1)), r.setBackground(m), o.addView(r);
    let s = new LinearLayout(ctx);
    s.setOrientation(1), s.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), s.getLayoutParams().setMargins(gs(10), 8, gs(10), 8), p.addView(s), k(i), h.forEach(z => {
      s.addView(l(z));
    });
    let t = new android.widget.TextView(ctx);
    t.setText("Save"), t.setTextColor(-1), t.setTextSize(gs(14)), t.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), t.setGravity(android.view.Gravity.CENTER), t.setPadding(0, gs(10), 0, gs(10)), t.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1, 1)), t.setOnClickListener(new android.view.View.OnClickListener({onClick(z) {
      w.getText() != "" || g != "" ? (w.getText() != "" && g == "" && config.create(w.getText()), g != "" && config.create(g), notification("<font color='green'>Success!</font> <font color='white'>Config '" + w.getText() + "' saved!</font>"), g = "", s.removeAllViews(), k(i), h.forEach(A => {
        s.addView(l(A));
      })) : notification("<font color='red'>Error!</font> <font color='white'>Please, enter a valid name!</font>");
      ;
    }})), r.addView(t), q = new android.widget.LinearLayout(ctx), q.setBackgroundColor(android.graphics.Color.parseColor(maincolor)), q.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(2)))), r.addView(q);
    let u = new android.widget.TextView(ctx);
    u.setText("Load"), u.setTextColor(-1), u.setTextSize(gs(14)), u.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), u.setGravity(android.view.Gravity.CENTER), u.setPadding(0, gs(10), 0, gs(10)), u.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1, 1)), u.setOnClickListener(new android.view.View.OnClickListener({onClick(z) {
      g != "" ? (config.load(g), notification("<font color='green'>Success!</font> <font color='white'>Config '" + w.getText() + "' loaded!</font>"), g = "", s.removeAllViews(), k(i), h.forEach(A => {
        s.addView(l(A));
      })) : notification("<font color='red'>Error!</font> <font color='white'>Please, enter a valid name!</font>");
    }})), r.addView(u), q = new android.widget.LinearLayout(ctx), q.setBackgroundColor(android.graphics.Color.parseColor(maincolor)), q.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(2)))), r.addView(q);
    let v = new android.widget.TextView(ctx);
    v.setText("Delete"), v.setTextColor(-1), v.setTextSize(gs(14)), v.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), v.setGravity(android.view.Gravity.CENTER), v.setPadding(0, gs(10), 0, gs(10)), v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1, 1)), v.setOnClickListener(new android.view.View.OnClickListener({onClick(z) {
      if (g != "") {
        var A = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon/configs/" + g + ".cfg");
        A.delete(), g = "", s.removeAllViews(), k(i), h.forEach(B => {
          s.addView(l(B));
        });
      }
    }})), r.addView(v);
    let w = new android.widget.EditText(ctx);
    return w.setHint("New config name"), w.setHintTextColor(Color.parseColor("#a0a0a0")), w.setTextColor(-1), w.setTextSize(gs(14)), w.setPadding(gs(10), 0, 0, 0), w.setFocusable(true), w.setOnClickListener(new android.view.View.OnClickListener({onClick(z) {}})), w.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(30)))), w.getLayoutParams().setMargins(gs(10), gs(8), gs(10), gs(4)), w.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), w.setBackground(style.custom_corner_color("#2d2d2d", 4, "#a2a2a2", [gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20), gs(20)])), j.addView(w), j;
  } catch (z) {
    errorMessage(z);
  }
}, rest = () => {
  try {
    let g = ctx.getSystemService("alarm"), h = ctx.getPackageManager().getLaunchIntentForPackage(ctx.getPackageName());
    h.addFlags(335544320), g.set(3, android.os.SystemClock.elapsedRealtime() + 500, android.app.PendingIntent.getActivity(ctx, 0, h, 0)), new java.io.File(ctx.getFilesDir() + "/running.lock").delete(), new java.lang.Thread({run() {
      java.lang.Thread.sleep(500), java.lang.System.exit(0);
    }}).start();
  } catch (i) {}
}, unban = () => {
  let g = new LinearLayout(ctx);
  g.setOrientation(1);
  let h = new android.widget.TextView(ctx);
  h.setText("Fast Unban (CID)"), h.setTextColor(-1), h.setTextSize(gs(14)), h.setPadding(gs(10), 0, 0, 0), h.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), g.addView(h);
  var i = new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(30)));
  i.setMargins(gs(10), gs(4), gs(10), 0);
  let j = new android.widget.TextView(ctx);
  return j.setText("Unban"), j.setTextColor(-1), j.setTextSize(gs(14)), j.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), j.setBackground(style.main()), j.setGravity(android.view.Gravity.CENTER), j.setLayoutParams(i), j.setOnClickListener(new android.view.View.OnClickListener({onClick(k) {
    try {
      var l = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/clientId.txt");
      l.delete();
      var m = "xxxxxxxx".replace(/[xy]/g, n => {
        var o = 16 * Math.random() | 0;
        return ("x" === n ? o : 3 & o | 8).toString(16);
      });
      print("Restarting your launcher."), rest();
    } catch (n) {
      errorMessage(n);
    }
  }})), g.addView(j), g;
}, maincolor = "#FF0000", maincolor_hsv = 0, maincolor_hsv_saturation = 96, maincolor_hsv_h = 87, HSVtoRGB = (j, k, l) => {
  try {
    var m, n, o, u, w, z, A, B;
    u = Math.floor(j * 6), w = j * 6 - u, z = l * (1 - k), A = l * (1 - w * k), B = l * (1 - (1 - w) * k);
    switch (u % 6) {
      case 0:
        m = l, n = B, o = z;
        break;
      case 1:
        m = A, n = l, o = z;
        break;
      case 2:
        m = z, n = l, o = B;
        break;
      case 3:
        m = z, n = A, o = l;
        break;
      case 4:
        m = B, n = z, o = l;
        break;
      case 5:
        m = l, n = z, o = A;
        break;
    }
    return {r: Math.round(m * 255), g: Math.round(n * 255), b: Math.round(o * 255)};
  } catch (C) {
    errorMessage(C);
  }
}, updatecolors = () => {
  text_main.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">H</font><font color="#ffffff">alcyon - build ' + Halcyon.build + "</font>")), post.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">X:</font> ' + Math.round(Player.getX()) + ' <font color="' + maincolor + '">Y:</font> ' + Math.round(Player.getY()) + ' <font color="' + maincolor + '">Z:</font> ' + Math.round(Player.getZ()))), button_view.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">H</font><font color="#ffffff">alcyon - build ' + Halcyon.build + "</font>"));
}, colorchanger = () => {
  try {
    let n = new android.graphics.drawable.GradientDrawable;
    n.setColor(parseColor(maincolor)), n.setCornerRadius(20);
    let o = new android.graphics.drawable.GradientDrawable;
    o.setColor(HSV([0, maincolor_hsv_saturation, 0])), o.setCornerRadius(20);
    let p = new android.graphics.drawable.GradientDrawable;
    p.setColor(HSV([0, 0, maincolor_hsv_h])), p.setCornerRadius(20);
    let q = new LinearLayout(ctx);
    q.setOrientation(1);
    let r = new android.widget.TextView(ctx);
    r.setText("Color"), r.setTextColor(-1), r.setTextSize(gs(14)), r.setPadding(gs(10), 0, 0, 0), r.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), q.addView(r);
    var g = new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(30)));
    g.setMargins(gs(10), gs(4), gs(10), gs(4));
    let s = new LinearLayout(ctx);
    s.setOrientation(0), s.setLayoutParams(g), q.addView(s);
    var h = new TextView(ctx);
    h.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(20)), gs(dip2px(20)))), h.setBackground(n), h.setText("H"), h.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), h.setTextSize(gs(12)), h.setGravity(android.view.Gravity.CENTER), h.setTextColor(-1), h.getLayoutParams().setMargins(gs(7), 0, 0, 0), h.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), s.addView(h);
    var i = new android.widget.SeekBar(ctx);
    i.setMax(360), i.getThumb().setColorFilter(android.graphics.Color.parseColor("#e1e4eb"), android.graphics.PorterDuff.Mode.SRC_IN), i.setProgress(maincolor_hsv), i.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2)), i.setProgressTintList(new android.content.res.ColorStateList.valueOf(android.graphics.Color.parseColor("#e1e4eb"))), i.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (v, w, z) {
      maincolor = hsv2hex(w, maincolor_hsv_saturation, maincolor_hsv_h), maincolor_hsv = w, n.setColor(parseColor(maincolor)), h.setBackground(n), updatecolors();
    }})), s.addView(i);
    let t = new LinearLayout(ctx);
    t.setOrientation(0), t.setLayoutParams(g), q.addView(t);
    var j = new TextView(ctx);
    j.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(20)), gs(dip2px(20)))), j.setBackground(o), j.setText("S"), j.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), j.setTextSize(gs(12)), j.setGravity(android.view.Gravity.CENTER), j.setTextColor(-1), j.getLayoutParams().setMargins(gs(7), 0, 0, 0), j.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), t.addView(j);
    var k = new android.widget.SeekBar(ctx);
    k.setMax(100), k.getThumb().setColorFilter(android.graphics.Color.parseColor("#e1e4eb"), android.graphics.PorterDuff.Mode.SRC_IN), k.setProgress(maincolor_hsv_saturation), k.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2)), k.setProgressTintList(new android.content.res.ColorStateList.valueOf(android.graphics.Color.parseColor("#e1e4eb"))), k.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (v, w, z) {
      maincolor = hsv2hex(maincolor_hsv, w, maincolor_hsv_h), maincolor_hsv_saturation = w, o.setColor(HSV([0, maincolor_hsv_saturation, 0])), j.setBackground(o), n.setColor(parseColor(maincolor)), h.setBackground(n), updatecolors();
    }})), t.addView(k);
    let u = new LinearLayout(ctx);
    u.setOrientation(0), u.setLayoutParams(g), q.addView(u);
    var l = new TextView(ctx);
    l.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(20)), gs(dip2px(20)))), l.setBackground(p), l.setText("V"), l.setTypeface(android.graphics.Typeface.create("sans-serif", android.graphics.Typeface.BOLD)), l.setTextSize(gs(12)), l.setGravity(android.view.Gravity.CENTER), l.setTextColor(-1), l.getLayoutParams().setMargins(gs(7), 0, 0, 0), l.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), u.addView(l);
    var m = new android.widget.SeekBar(ctx);
    return m.setMax(100), m.getThumb().setColorFilter(android.graphics.Color.parseColor("#e1e4eb"), android.graphics.PorterDuff.Mode.SRC_IN), m.setProgress(maincolor_hsv_h), m.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2)), m.setProgressTintList(new android.content.res.ColorStateList.valueOf(android.graphics.Color.parseColor("#e1e4eb"))), m.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged: function (v, w, z) {
      maincolor = hsv2hex(maincolor_hsv, maincolor_hsv_saturation, w), maincolor_hsv_h = w, p.setColor(HSV([0, 0, maincolor_hsv_h])), l.setBackground(p), n.setColor(parseColor(maincolor)), h.setBackground(n), updatecolors();
    }})), u.addView(m), q;
  } catch (v) {
    errorMessage(v);
  }
};
function componentToHex(g) {
  var h = g.toString(16);
  return h.length == 1 ? "0" + h : h;
}
var hsv2hex = (g, i, j) => {
  var k = HSVtoRGB(g / 360, i / 100, j / 100);
  return "#" + componentToHex(k.r) + componentToHex(k.g) + componentToHex(k.b);
}, lay = new android.widget.LinearLayout(ctx), anim = new android.view.animation.ScaleAnimation(0, 1, 0, 1, gs(dip2px(162)), gs(dip2px(149)));
anim.setDuration(200), anim.setFillAfter(true);
var text_main, opn = false, menu = () => {
  uithread(() => {
    try {
      let z = false, A = 0, B = 0;
      var g = 0, h = new LinearLayout(ctx);
      lay = new android.widget.LinearLayout(ctx), lay.setOrientation(1), lay.setBackground(style.main()), h.addView(lay);
      let C = new android.widget.LinearLayout.LayoutParams(-2, -2);
      C.setMargins(gs(dip2px(10)), gs(dip2px(5)), gs(dip2px(10)), gs(dip2px(5))), text_main = new android.widget.TextView(ctx), Halcyon.isDev ? text_main.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">H</font><font color="#ffffff">alcyon - build ' + Halcyon.build + " Dev</font>")) : text_main.setText(android.text.Html.fromHtml('<font color="' + maincolor + '">H</font><font color="#ffffff">alcyon - build ' + Halcyon.build + "</font>")), text_main.setTextColor(-1), text_main.setGravity(android.view.Gravity.CENTER), text_main.setLayoutParams(C), text_main.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), text_main.setTypeface(font), text_main.setTransformationMethod(null), text_main.setTextSize(gs(16)), text_main.setOnTouchListener(new android.view.View.OnTouchListener({onTouch: function (U, V) {
        try {
          z = true;
          if (!z) return false;
          ;
          switch (V.getAction()) {
            case android.view.MotionEvent.ACTION_DOWN:
              A = x - V.getRawX(), B = y - V.getRawY();
              break;
            case android.view.MotionEvent.ACTION_MOVE:
              x = V.getRawX() + A, y = V.getRawY() + B, popup_menu.update(x, y, -1, -1);
              break;
            case android.view.MotionEvent.ACTION_UP:
              ;
            case android.view.MotionEvent.ACTION_CANCEL:
              z = false;
              break;
          }
        } catch (W) {}
        ;
        return true;
      }})), text_main.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick: function (U) {
        return popup_menu.update(x, y, -1, -1), true;
      }})), lay.addView(text_main), C = new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(2)));
      let D = new android.widget.LinearLayout(ctx);
      D.setBackgroundColor(android.graphics.Color.parseColor(maincolor)), D.setLayoutParams(C), lay.addView(D), C = new android.widget.LinearLayout.LayoutParams(-2, -2);
      let E = new android.widget.LinearLayout(ctx);
      E.setOrientation(1), E.setLayoutParams(C), E.setBackground(style.custom_corner("#2d2d2d", [0, 0, 0, 0, 0, 0, 0, 0])), lay.addView(E), C = new android.widget.LinearLayout.LayoutParams(-2, gs(dip2px(65)));
      let F = new android.widget.LinearLayout(ctx);
      F.setOrientation(0), F.setLayoutParams(C), E.addView(F), C = new android.widget.LinearLayout.LayoutParams(-2, gs(dip2px(65)));
      let G = new android.widget.LinearLayout(ctx);
      G.setOrientation(1), G.setLayoutParams(C), G.setBackground(choosen == "Combat" ? style.custom_simple(maincolor) : style.custom_simple("#373737"));
      let H = new android.widget.LinearLayout(ctx);
      H.setOrientation(1), H.setLayoutParams(C), H.setBackground(choosen == "Movement" ? style.custom_simple(maincolor) : style.custom_simple("#373737"));
      let I = new android.widget.LinearLayout(ctx);
      I.setOrientation(1), I.setLayoutParams(C), I.setBackground(choosen == "Player" ? style.custom_simple(maincolor) : style.custom_simple("#373737"));
      let J = new android.widget.LinearLayout(ctx);
      J.setOrientation(1), J.setLayoutParams(C), J.setBackground(choosen == "Misc" ? style.custom_simple(maincolor) : style.custom_simple("#373737"));
      let K = new android.widget.LinearLayout(ctx);
      K.setOrientation(1), K.setLayoutParams(C), K.setBackground(choosen == "Other" ? style.custom_simple(maincolor) : style.custom_simple("#373737")), F.addView(G), F.addView(H), F.addView(I), F.addView(J), F.addView(K);
      let L = new android.widget.LinearLayout(ctx);
      L.setOrientation(1), L.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(65)), -1)), L.setBackground(choosen == "Combat" ? style.custom_simple(maincolor) : style.custom_simple("#373737")), G.addView(L);
      var i = new android.widget.TextView(ctx);
      i.setText("a"), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), i.setTypeface(ifont), i.setTransformationMethod(null), i.setTextSize(gs(38)), i.setGravity(android.view.Gravity.CENTER), i.setPadding(0, gs(20), 0, gs(3)), i.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), i.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Combat", L.setBackground(style.custom_simple(maincolor)), M.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), O.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), L.addView(i);
      var j = new android.widget.TextView(ctx);
      j.setText("Combat"), j.setTextColor(android.graphics.Color.parseColor("#a2a2a2")), j.setTypeface(font), j.setTransformationMethod(null), j.setTextSize(gs(10)), j.setPadding(0, 0, 0, gs(5)), j.setGravity(android.view.Gravity.CENTER), j.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), j.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Combat", L.setBackground(style.custom_simple(maincolor)), M.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), O.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), L.addView(j);
      let M = new android.widget.LinearLayout(ctx);
      M.setOrientation(1), M.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(65)), -1)), M.setBackground(choosen == "Movement" ? style.custom_simple(maincolor) : style.custom_simple("#373737")), H.addView(M);
      var k = new android.widget.TextView(ctx);
      k.setText("b"), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), k.setTypeface(ifont), k.setTransformationMethod(null), k.setTextSize(gs(38)), k.setGravity(android.view.Gravity.CENTER), k.setPadding(0, gs(20), 0, gs(3)), k.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), k.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Movement", M.setBackground(style.custom_simple(maincolor)), L.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), O.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), M.addView(k);
      var l = new android.widget.TextView(ctx);
      l.setText("Movement"), l.setTextColor(android.graphics.Color.parseColor("#a2a2a2")), l.setTypeface(font), l.setTransformationMethod(null), l.setTextSize(gs(10)), l.setPadding(0, 0, 0, gs(5)), l.setGravity(android.view.Gravity.CENTER), l.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), k.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Movement", M.setBackground(style.custom_simple(maincolor)), L.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), O.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), M.addView(l);
      let N = new android.widget.LinearLayout(ctx);
      N.setOrientation(1), N.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(65)), -1)), N.setBackground(choosen == "Player" ? style.custom_simple(maincolor) : style.custom_simple("#373737")), I.addView(N);
      var n = new android.widget.TextView(ctx);
      n.setText("c"), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), n.setTypeface(ifont), n.setTransformationMethod(null), n.setTextSize(gs(38)), n.setGravity(android.view.Gravity.CENTER), n.setPadding(0, gs(20), 0, gs(3)), n.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), n.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Player", N.setBackground(style.custom_simple(maincolor)), L.setBackground(style.custom_simple("#373737")), M.setBackground(style.custom_simple("#373737")), O.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), N.addView(n);
      var q = new android.widget.TextView(ctx);
      q.setText("Player"), q.setTextColor(android.graphics.Color.parseColor("#a2a2a2")), q.setTypeface(font), q.setTransformationMethod(null), q.setTextSize(gs(10)), q.setPadding(0, 0, 0, gs(5)), q.setGravity(android.view.Gravity.CENTER), q.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), q.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Player", N.setBackground(style.custom_simple(maincolor)), L.setBackground(style.custom_simple("#373737")), M.setBackground(style.custom_simple("#373737")), O.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), N.addView(q);
      let O = new android.widget.LinearLayout(ctx);
      O.setOrientation(1), O.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(65)), -1)), O.setBackground(choosen == "Misc" ? style.custom_simple(maincolor) : style.custom_simple("#373737")), J.addView(O);
      var r = new android.widget.TextView(ctx);
      r.setText("e"), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), r.setTypeface(ifont), r.setTransformationMethod(null), r.setTextSize(gs(38)), r.setGravity(android.view.Gravity.CENTER), r.setPadding(0, gs(20), 0, gs(3)), r.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), r.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Misc", O.setBackground(style.custom_simple(maincolor)), L.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), M.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), O.addView(r);
      var s = new android.widget.TextView(ctx);
      s.setText("Misc"), s.setTextColor(android.graphics.Color.parseColor("#a2a2a2")), s.setTypeface(font), s.setTransformationMethod(null), s.setTextSize(gs(10)), s.setPadding(0, 0, 0, gs(5)), s.setGravity(android.view.Gravity.CENTER), s.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), s.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Misc", O.setBackground(style.custom_simple(maincolor)), L.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), M.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), O.addView(s);
      let P = new android.widget.LinearLayout(ctx);
      P.setOrientation(1), P.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(65)), -1)), P.setBackground(choosen == "Other" ? style.custom_simple(maincolor) : style.custom_simple("#373737")), K.addView(P);
      var t = new android.widget.TextView(ctx);
      t.setText("d"), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), t.setTypeface(ifont), t.setTransformationMethod(null), t.setTextSize(gs(38)), t.setGravity(android.view.Gravity.CENTER), t.setPadding(0, gs(20), 0, gs(3)), t.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), t.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Other", O.setBackground(style.custom_simple("#373737")), P.setBackground(style.custom_simple(maincolor)), L.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), M.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), P.addView(t);
      var u = new android.widget.TextView(ctx);
      u.setText("Other"), u.setTextColor(android.graphics.Color.parseColor("#a2a2a2")), u.setTypeface(font), u.setTransformationMethod(null), u.setTextSize(gs(10)), u.setPadding(0, 0, 0, gs(5)), u.setGravity(android.view.Gravity.CENTER), u.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), u.setOnClickListener(new android.view.View.OnClickListener({onClick: function (U) {
        choosen = "Other", P.setBackground(style.custom_simple(maincolor)), O.setBackground(style.custom_simple("#373737")), L.setBackground(style.custom_simple("#373737")), N.setBackground(style.custom_simple("#373737")), M.setBackground(style.custom_simple("#373737")), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), v(choosen);
      }})), P.addView(u), i.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), k.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), n.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), r.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), t.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), j.setTextColor(android.graphics.Color.parseColor(choosen == "Combat" ? "#ffffff" : "#a2a2a2")), l.setTextColor(android.graphics.Color.parseColor(choosen == "Movement" ? "#ffffff" : "#a2a2a2")), q.setTextColor(android.graphics.Color.parseColor(choosen == "Player" ? "#ffffff" : "#a2a2a2")), s.setTextColor(android.graphics.Color.parseColor(choosen == "Misc" ? "#ffffff" : "#a2a2a2")), u.setTextColor(android.graphics.Color.parseColor(choosen == "Other" ? "#ffffff" : "#a2a2a2")), C = new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(2))), D = new android.widget.LinearLayout(ctx), D.setBackgroundColor(android.graphics.Color.parseColor(maincolor)), D.setLayoutParams(C), E.addView(D);
      let Q = new android.widget.ScrollView(ctx);
      Q.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(323)), gs(dip2px(210)))), Q.getLayoutParams().setMargins(gs(4), gs(5), gs(4), gs(5)), E.addView(Q);
      let R = new android.widget.LinearLayout(ctx);
      R.setOrientation(0), R.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(323)), gs(dip2px(210)))), R.getLayoutParams().setMargins(gs(4), gs(5), gs(4), gs(5)), Q.addView(R);
      let S = new android.widget.LinearLayout(ctx);
      S.setOrientation(1), S.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(162)), -2)), R.addView(S);
      let T = new android.widget.LinearLayout(ctx);
      T.setOrientation(1), T.setLayoutParams(new android.widget.LinearLayout.LayoutParams(gs(dip2px(162)), -2)), R.addView(T);
      var v = U => {
        T.removeAllViews(), S.removeAllViews(), R.removeAllViews(), g = 0, U == "Other" ? (R.setOrientation(1), R.addView(cfg()), R.addView(unban())) : (R.setOrientation(0), R.addView(S), R.addView(T), Halcyon.mods.forEach(function (V) {
          V.category == U && (g == 0 ? (S.addView(sbar(V)), g++) : (g = 0, T.addView(sbar(V))));
        }));
      };
      v(choosen), C = new android.widget.LinearLayout.LayoutParams(-1, gs(dip2px(2))), D = new android.widget.LinearLayout(ctx), D.setBackgroundColor(android.graphics.Color.parseColor(maincolor)), D.setLayoutParams(C), lay.addView(D), C = new android.widget.LinearLayout.LayoutParams(-2, -2), C.setMargins(gs(dip2px(10)), gs(dip2px(5)), gs(dip2px(10)), gs(dip2px(5)));
      var w = new android.widget.TextView(ctx);
      w.setText(android.text.Html.fromHtml("Vk.com/nofairplay")), w.setTextColor(-1), w.setSingleLine(true), w.setGravity(android.view.Gravity.CENTER), w.setLayoutParams(C), w.setShadowLayer(1, 1, 1, android.graphics.Color.BLACK), w.setBackground(style.custom_corner("#545454", [0, 0, 0, 0, 20, 20, 20, 20])), w.setTypeface(font), w.setTransformationMethod(null), w.setTextSize(gs(16)), w.setOnClickListener(new android.view.View.OnClickListener({onClick(U) {
        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);
        let V = android.content.Intent, W = new V(ctx);
        W.setAction(android.content.Intent.ACTION_VIEW), W.setData(android.net.Uri.parse("https://vk.com/nofairplay")), ctx.startActivity(W), notification("Transfered to official group!");
      }})), lay.addView(w), popup_menu = new android.widget.PopupWindow(h, -2, -2, true), popup_menu.setFocusable(true), popup_menu.setAnimationStyle(android.R.style.Animation_Dialog), popup_menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, gs(100), gs(75)), popup_menu.update(x, y, -1, -1), popup_menu.setOnDismissListener(new android.widget.PopupWindow.OnDismissListener({onDismiss() {
        opn = true;
      }})), lay.startAnimation(anim);
    } catch (U) {
      errorMessage(U);
    }
  });
}, stclose = false, closetick = 0, anim1 = new android.view.animation.ScaleAnimation(1, 0, 1, 0, gs(dip2px(162)), gs(dip2px(130)));
anim1.setDuration(200), anim1.setFillAfter(true);
var close = () => {
  uithread(() => {
    let g = new TextView(ctx);
    g.setTextColor(0), g.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1)), g.setText("Poshol von iz moego koda :D"), g.setOnClickListener(new android.view.View.OnClickListener({onClick: function (i) {
      lay.startAnimation(anim1), stclose = true, h.dismiss();
    }}));
    var h = new android.widget.PopupWindow(g, -1, -1);
    h.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, 0, 0);
  });
}, ping_timer = 10, ping_meter = g => {
  var h = new java.lang.Thread(new java.lang.Runnable({run() {
    try {
      var i = g, j = java.net.InetAddress.getByName(i), k = 0, l = (new java.util.GregorianCalendar).getTimeInMillis();
      j.isReachable(5e3) ? (k = (new java.util.GregorianCalendar).getTimeInMillis(), png = k - l) : png = -1;
    } catch (m) {
      if (Halcyon.isDev) customMessage(m);
    }
  }}));
  h.start();
}, inlevel_status = 1;
new function () {
  ModPE.readData("ZWQ") != "" || Halcyon.isDev ? new java.lang.Thread({run() {
    net.zhuoweizhang.mcpelauncher.Utils.getPrefs(2).edit().putInt("safe_mode_counter", 0).commit();
    if (!java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon").exists()) java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon").mkdirs();
    var g = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon/icon-font.ttf");
    if (!g.exists()) {
      g.createNewFile();
      var h = new java.io.FileOutputStream(g);
      h.write(android.util.Base64.decode(ifont, 0)), h.close();
    }
    ;
    ifont = new android.graphics.Typeface.createFromFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon/icon-font.ttf");
    try {
      var i = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt");
      let q = new java.io.BufferedReader(new java.io.FileReader(i)), r = new java.lang.StringBuilder, s;
      while ((s = q.readLine()) != null) r.append(s + "\n");
      var j = r.toString();
      if (j.includes("key_key.attack:-99") || !j.includes("key_key.attack:81")) {
        j = j.replace("key_key.attack:-99", "key_key.attack:81"), j = j.replace("key_key.drop:81", "key_key.drop:-99");
        var k = new java.io.FileOutputStream(i, false);
        k.write(j.getBytes()), k.close(), customMessage("Settings replaced. Restarting your MCPE"), net.zhuoweizhang.mcpelauncher.ui.NerdyStuffActivity.forceRestart(ctx);
      }
    } catch (t) {
      customMessage(t);
    }
    scale = 2.2900000000000205 / ctx.getResources().getDisplayMetrics().density;
    var l = new java.io.File(config.dir, "main.ini"), m = "scale:" + scale + "\n", n = "";
    if (!java.io.File(l).exists()) l.createNewFile(), filemanager.rewrite(l, m); else {
      var o = String(filemanager.read(l)).split("\n");
      o.forEach((u, v, w) => {
        if (v != w.length - 1) {
          var z = u.split(":");
          if (z[0] == "scale") scale = parseFloat(z[1]);
        }
      });
    }
    button(), watermark(), avr();
    Halcyon.isDev ? (customMessage("Scale=" + scale), customMessage("Halcyon loaded successful! Total modules: " + Halcyon.totalModules)) : notification(ModPE.getLanguage() == "ru_RU" ? "Длинное нажатие по кнопке в меню, откроет меню настроек для модуля!" : "A long press on the button in the menu will open the settings menu for the module!");
    Halcyon.mods.forEach(function (u) {
      if (u.code.hasOwnProperty("toggle") && getState(u)) u.code.toggle();
    }), ModPE.removeData("ZWQ");
    try {
      var p = java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Halcyon");
      p.listFiles().forEach(u => {
        u.getName().indexOf(".nfp") != -1 && u.delete();
      });
    } catch (u) {
      errorMessage(u);
    }
  }}).start() : new java.lang.Thread({run() {
    java.lang.System.exit(0);
  }}).start();
};
var modTick = () => {
  try {
    Halcyon.mods.forEach(function (g) {
      if (g.code.hasOwnProperty("tick")) g.code.tick();
    });
  } catch (g) {
    errorMessage(g);
  }
  ;
}, attackHook = (g, h) => {
  try {
    Halcyon.mods.forEach(function (i) {
      if (i.code.hasOwnProperty("attack")) i.code.attack(g, h);
    });
  } catch (i) {
    errorMessage(i);
  }
}, entityHurtHook = (g, i, j) => {
  try {
    Halcyon.mods.forEach(function (k) {
      if (k.code.hasOwnProperty("hurt")) k.code.hurt(g, i, j);
    });
  } catch (k) {
    errorMessage(k);
  }
}, useItem = (g, h, i, j, k, l, m, n) => {
  try {
    Halcyon.mods.forEach(function (o) {
      var k0 = b;
      if (o.code.hasOwnProperty("item")) o.code.item(g, h, i, j, k, l, m, n);
    });
  } catch (o) {
    errorMessage(o);
  }
}, toDirectionalVector = (g, h, i) => {}, screenChangeHook = g => {
  sscreen = g;
}, chatHook = g => {
  var h = g.split(" ");
  if (g.charAt(0) == ".") {
    preventDefault();
    h[0] == ".e" && (h[1] == "max" && parseFloat(h[2]) && getModule("EntityList").settings[1].values[0] < h[2] ? (getModule("EntityList").settings[0].values[0] = parseFloat(h[2]), customMessage("EntityList: Maximal range - §a" + parseFloat(h[2])), getCode(getModule("EntityList")).scan()) : h[1] == "min" && parseFloat(h[2]) && h[2] < getModule("EntityList").settings[0].values[0] ? (getModule("EntityList").settings[1].values[0] = parseFloat(h[2]), customMessage("EntityList: Minimal range - §a" + parseFloat(h[2])), getCode(getModule("EntityList")).scan()) : customMessage('Usage: ".e <min/max> <value(only+ and smaller than max.)>"'));
    ;
    if (h[0] == ".scale") {
      scale = parseFloat(h[1]);
      var i = "scale:" + scale + "\n";
      filemanager.rewrite(new java.io.File(config.dir, "main.ini"), i);
    }
    ;
  }
}, say = g => {
  var h = new java.lang.Thread(new java.lang.Runnable({run() {
    try {
      var i = new android.app.Instrumentation;
      i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_T), java.lang.Thread.sleep(100), i.sendStringSync(g), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_ENTER), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_BACK), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_BACK), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_ESCAPE), i.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_ESCAPE);
    } catch (j) {
      errorMessage(j);
    }
  }}));
  h.start();
}, serverMessageReceiveHook = g => {
  var h = ["чит", "Чит", "хак", "Хак", "ЧИТ", "cheat", "Cheat", "CHEAT", "hack", "hak", "Hack", "HACK", "Hak"], i = {total: 0};
  h.forEach(j => {
    var ka = b;
    g.match(j) && i.total++;
  });
  i.total != 0 && notification("<font color='red'>Warning!</font> <font color='white'>Someone called you are hacker!</font>");
  ;
  i.total = 0, g.indexOf("Я свой (H)") != -1 && !askedForMessage && (say("Я тоже :)"), askedForMessage = true), Halcyon.mods.forEach(function (j) {
    if (j.code.hasOwnProperty("msg")) j.code.msg(g);
  });
}, deathHook = (g, h) => {
  var ke = b;
  Halcyon.mods.forEach(function (i) {
    if (i.code.hasOwnProperty("death")) i.code.death(g, h);
  });
}, cueCoord = (g, h) => {
  var i = {x: 0, y: 0, z: 0};
  return i.y = -Math.sin(java.lang.Math.toRadians(h)), i.x = -Math.sin(java.lang.Math.toRadians(g)) * Math.cos(java.lang.Math.toRadians(h)), i.z = Math.cos(java.lang.Math.toRadians(g)) * Math.cos(java.lang.Math.toRadians(h)), i;
}, vecCoord = (g, h, i) => {
  this.x = g, this.y = h, this.z = i;
};
