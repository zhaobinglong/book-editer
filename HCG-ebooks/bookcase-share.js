function load_file(a, b) {
	var c = document.createElement("script");
	c.setAttribute("src", a), c.setAttribute("async", "true"), c.setAttribute("defer", "defer"), c.onload = function() {
		b && b()
	}, document.head.appendChild(c)
}
function init_weinxin_share() {
	function a(a, b) {
		return Math.floor(Math.random() * (b - a + 1)) + a
	}
	if ("micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) {
		try {
			var b = weixin_check_ticket_7438
		} catch (c) {
			var b = ""
		}
		var d = "wx670c16e02a8f9931",
			e = a(100, 9e4);
		e = e.toString();
		var f = Math.floor((new Date).getTime() / 1e3);
		f = f.toString();
		var g = window.location.href,
			h = "jsapi_ticket=" + b + "&noncestr=" + e + "&timestamp=" + f + "&url=" + g;
		h = decodeURIComponent(h).split("#")[0];
		var i = new jsSHA(h, "TEXT"),
			j = i.getHash("SHA-1", "HEX"),
			k = ["checkJsApi", "updateAppMessageShareData", "updateTimelineShareData", "onMenuShareTimeline", "onMenuShareAppMessage", "shareAppMessage", "shareWechatMessage", "shareToExternalContact", "shareToExternalChat", "onMenuShareQQ", "onMenuShareWechat", "onMenuShareWeibo", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "hideOptionMenu", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"];
		wx.config({
			debug: !1,
			appId: d,
			timestamp: f,
			nonceStr: e,
			signature: j,
			jsApiList: k
		})
	}
}
function set_no_share_weixin() {
	try {
		wx.checkJsApi({
			jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "hideMenuItems", "hideAllNonBaseMenuItem", "hideOptionMenu"],
			success: function(a) {}
		}), bcSetInfo.hasOwnProperty("noShareWechat") && "1" == bcSetInfo.noShareWechat ? (wx.hideAllNonBaseMenuItem(), wx.hideOptionMenu()) : (wx.showOptionMenu(), wx.showAllNonBaseMenuItem())
	} catch (a) {
		wx.showOptionMenu(), wx.showAllNonBaseMenuItem()
	}
}
function set_weixin_share(a, b, c, d) {
	if ("micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) {
		var e = a,
			f = b,
			g = c,
			h = "https:" + d.replace(/^https?:/, "").replace(/\?[0-9]*/, "");
		e = "" == e ? g : e, f = "" == f ? e : f, f = f.replace(/<br>/g, "\n"), wx.ready(function() {
			set_no_share_weixin(), wx.onMenuShareWeibo({
				title: e,
				desc: "" == f ? e : f,
				link: g,
				imgUrl: h,
				success: function() {},
				cancel: function() {}
			}), wx.onMenuShareTimeline({
				title: e,
				link: g,
				imgUrl: h,
				success: function() {},
				cancel: function() {}
			}), wx.onMenuShareAppMessage({
				title: e,
				desc: f,
				link: g,
				imgUrl: h,
				success: function() {},
				cancel: function() {}
			}), wx.onMenuShareQQ({
				title: e,
				desc: f,
				link: g,
				imgUrl: h,
				success: function() {},
				cancel: function() {}
			}), wx.onMenuShareWeibo({
				title: e,
				desc: f,
				link: g,
				imgUrl: h,
				success: function() {},
				cancel: function() {}
			});
			try {
				wx.onMenuShareWechat({
					title: e,
					desc: f,
					link: g,
					imgUrl: h,
					success: function() {},
					cancel: function() {}
				})
			} catch (a) {}
			wx.invoke("shareAppMessage", {
				title: e,
				desc: f,
				link: g,
				imgUrl: h
			}, function(a) {
				"shareAppMessage:ok" == a.err_msg
			}), wx.invoke("shareWechatMessage", {
				title: e,
				desc: f,
				link: g,
				imgUrl: h
			}, function(a) {
				"shareWechatMessage:ok" == a.err_msg
			}), wx.invoke("shareToExternalContact", {
				title: e,
				desc: f,
				link: g,
				imgUrl: h
			}, function(a) {
				"shareToExternalContact:ok" == a.err_msg
			}), wx.invoke("shareToExternalChat", {
				title: e,
				desc: f,
				link: g,
				imgUrl: h
			}, function(a) {
				"shareToExternalChat:ok" == a.err_msg
			})
		}), wx.error(function(a) {})
	}
}
function set_minprogram_share(a) {
	var b = window.navigator.userAgent.toLowerCase();
	if ("micromessenger" == b.match(/MicroMessenger/i)) try {
		wx.miniProgram.getEnv(function(b) {
			b.miniprogram && wx.miniProgram.postMessage({
				data: {
					title: a
				}
			})
		})
	} catch (c) {
		console.log(c)
	}
}
function onBridgeReady() {
	WeixinJSBridge.call("hideOptionMenu")
}
if (!window.jsSHA) {
	var elem = document.createElement("script");
	elem.setAttribute("src", "https://book.yunzhan365.com/resourceFiles/js/check.js?" + (new Date).getTime()), document.head.appendChild(elem)
}
bcSetInfo.hasOwnProperty("noShareWechat") && "1" == bcSetInfo.noShareWechat && ("undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", onBridgeReady, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", onBridgeReady), document.attachEvent("onWeixinJSBridgeReady", onBridgeReady)) : onBridgeReady()), $(document).ready(function() {
	var a = bcSetInfo.caseLink;
	"" != bcUserInfo.domain && (a = "https://" + bcUserInfo.domain + "." + bcUserInfo.domainSuffix + "/bookcase/" + bcSetInfo.bookcaseLink + "/");
	try {
		"undefined" == typeof wx ? load_file("https://res2.wx.qq.com/open/js/jweixin-1.4.0.js", function() {
			init_weinxin_share(), set_weixin_share(bcSetInfo.title, bcSetInfo.desc, a, bcSetInfo.imgUrl), set_minprogram_share(bcSetInfo.title)
		}) : (init_weinxin_share(), set_weixin_share(bcSetInfo.title, bcSetInfo.desc, a, bcSetInfo.imgUrl), set_minprogram_share(bcSetInfo.title))
	} catch (b) {
		load_file("https://res2.wx.qq.com/open/js/jweixin-1.4.0.js", function() {
			init_weinxin_share(), set_weixin_share(bcSetInfo.title, bcSetInfo.desc, a, bcSetInfo.imgUrl), set_minprogram_share(bcSetInfo.title)
		})
	}
});