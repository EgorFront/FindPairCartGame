"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*libs*/
!function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i);
	}) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
	"use strict";
	function i(i, s, a) {
		function u(t, e, o) {
			var n,
			    s = "$()." + i + '("' + e + '")';return t.each(function (t, u) {
				var h = a.data(u, i);if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);var d = h[e];if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");var l = d.apply(h, o);n = void 0 === n ? l : n;
			}), void 0 !== n ? n : t;
		}function h(t, e) {
			t.each(function (t, o) {
				var n = a.data(o, i);n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
			});
		}a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = n.call(arguments, 1);return u(this, t, e);
			}return h(this, t), this;
		}, o(a));
	}function o(t) {
		!t || t && t.bridget || (t.bridget = i);
	}var n = Array.prototype.slice,
	    s = t.console,
	    r = "undefined" == typeof s ? function () {} : function (t) {
		s.error(t);
	};return o(e || t.jQuery), i;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : undefined, function () {
	function t() {}var e = t.prototype;return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
			    o = i[t] = i[t] || [];return o.indexOf(e) == -1 && o.push(e), this;
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
			    o = i[t] = i[t] || {};return o[e] = !0, this;
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];if (i && i.length) {
			var o = i.indexOf(e);return o != -1 && i.splice(o, 1), this;
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];if (i && i.length) {
			i = i.slice(0), e = e || [];for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n],
				    r = o && o[s];r && (this.off(t, s), delete o[s]), s.apply(this, e);
			}return this;
		}
	}, e.allOff = function () {
		delete this._events, delete this._onceEvents;
	}, t;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
	"use strict";
	function t(t) {
		var e = parseFloat(t),
		    i = t.indexOf("%") == -1 && !isNaN(e);return i && e;
	}function e() {}function i() {
		for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
			var i = u[e];t[i] = 0;
		}return t;
	}function o(t) {
		var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
	}function n() {
		if (!d) {
			d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var n = o(e);r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
		}
	}function s(e) {
		if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
			var s = o(e);if ("none" == s.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l],
				    c = s[f],
				    m = parseFloat(c);a[f] = isNaN(m) ? 0 : m;
			}var p = a.paddingLeft + a.paddingRight,
			    y = a.paddingTop + a.paddingBottom,
			    g = a.marginLeft + a.marginRight,
			    v = a.marginTop + a.marginBottom,
			    _ = a.borderLeftWidth + a.borderRightWidth,
			    z = a.borderTopWidth + a.borderBottomWidth,
			    I = d && r,
			    x = t(s.width);x !== !1 && (a.width = x + (I ? 0 : p + _));var S = t(s.height);return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
		}
	}var r,
	    a = "undefined" == typeof console ? e : function (t) {
		console.error(t);
	},
	    u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
	    h = u.length,
	    d = !1;return s;
}), function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
	"use strict";
	var t = function () {
		var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i],
			    n = o + "MatchesSelector";if (t[n]) return n;
		}
	}();return function (e, i) {
		return e[t](i);
	};
}), function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i);
	}) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
	var i = {};i.extend = function (t, e) {
		for (var i in e) {
			t[i] = e[i];
		}return t;
	}, i.modulo = function (t, e) {
		return (t % e + e) % e;
	};var o = Array.prototype.slice;i.makeArray = function (t) {
		if (Array.isArray(t)) return t;if (null === t || void 0 === t) return [];var e = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length;return e ? o.call(t) : [t];
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e);i != -1 && t.splice(i, 1);
	}, i.getParent = function (t, i) {
		for (; t.parentNode && t != document.body;) {
			if (t = t.parentNode, e(t, i)) return t;
		}
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t;
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;this[e] && this[e](t);
	}, i.filterFindElements = function (t, o) {
		t = i.makeArray(t);var n = [];return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!o) return void n.push(t);e(t, o) && n.push(t);for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
					n.push(i[s]);
				}
			}
		}), n;
	}, i.debounceMethod = function (t, e, i) {
		i = i || 100;var o = t.prototype[e],
		    n = e + "Timeout";t.prototype[e] = function () {
			var t = this[n];clearTimeout(t);var e = arguments,
			    s = this;this[n] = setTimeout(function () {
				o.apply(s, e), delete s[n];
			}, i);
		};
	}, i.docReady = function (t) {
		var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i;
		}).toLowerCase();
	};var n = t.console;return i.htmlInit = function (e, o) {
		i.docReady(function () {
			var s = i.toDashed(o),
			    r = "data-" + s,
			    a = document.querySelectorAll("[" + r + "]"),
			    u = document.querySelectorAll(".js-" + s),
			    h = i.makeArray(a).concat(i.makeArray(u)),
			    d = r + "-options",
			    l = t.jQuery;h.forEach(function (t) {
				var i,
				    s = t.getAttribute(r) || t.getAttribute(d);try {
					i = s && JSON.parse(s);
				} catch (a) {
					return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
				}var u = new e(t, i);l && l.data(t, o, u);
			});
		});
	}, i;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
	"use strict";
	function i(t) {
		for (var e in t) {
			return !1;
		}return e = null, !0;
	}function o(t, e) {
		t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
	}function n(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase();
		});
	}var s = document.documentElement.style,
	    r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
	    a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
	    u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
	    h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
	    d = o.prototype = Object.create(t.prototype);d.constructor = o, d._create = function () {
		this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;this[e] && this[e](t);
	}, d.getSize = function () {
		this.size = e(this.element);
	}, d.css = function (t) {
		var e = this.element.style;for (var i in t) {
			var o = h[i] || i;e[o] = t[i];
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
		    e = this.layout._getOption("originLeft"),
		    i = this.layout._getOption("originTop"),
		    o = t[e ? "left" : "right"],
		    n = t[i ? "top" : "bottom"],
		    s = parseFloat(o),
		    r = parseFloat(n),
		    a = this.layout.size;o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
	}, d.layoutPosition = function () {
		var t = this.layout.size,
		    e = {},
		    i = this.layout._getOption("originLeft"),
		    o = this.layout._getOption("originTop"),
		    n = i ? "paddingLeft" : "paddingRight",
		    s = i ? "left" : "right",
		    r = i ? "right" : "left",
		    a = this.position.x + t[n];e[s] = this.getXValue(a), e[r] = "";var u = o ? "paddingTop" : "paddingBottom",
		    h = o ? "top" : "bottom",
		    d = o ? "bottom" : "top",
		    l = this.position.y + t[u];e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
	}, d._transitionTo = function (t, e) {
		this.getPosition();var i = this.position.x,
		    o = this.position.y,
		    n = t == this.position.x && e == this.position.y;if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();var s = t - i,
		    r = e - o,
		    a = {};a.transform = this.getTranslate(s, r), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
		    o = this.layout._getOption("originTop");return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition();
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e);
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
			t.onTransitionEnd[e].call(this);
		}
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
			e.onEnd[i] = t.onTransitionEnd[i];
		}for (i in t.to) {
			e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		}if (t.from) {
			this.css(t.from);var o = this.element.offsetHeight;o = null;
		}this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
	};var l = "opacity," + n(a);d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t);
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t);
	};var f = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
			    o = f[t.propertyName] || t.propertyName;if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
				var n = e.onEnd[o];n.call(this), delete e.onEnd[o];
			}this.emitEvent("transitionEnd", [this]);
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
	}, d._removeStyles = function (t) {
		var e = {};for (var i in t) {
			e[i] = "";
		}this.css(e);
	};var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
		this.css(c);
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem();
		}), void this.hide()) : void this.removeElem();
	}, d.reveal = function () {
		delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
		    e = {},
		    i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal");
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
			return i;
		}
	}, d.hide = function () {
		this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
		    e = {},
		    i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
	}, d.destroy = function () {
		this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
	}, o;
}), function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
		return e(t, i, o, n, s);
	}) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, o, n) {
	"use strict";
	function s(t, e) {
		var i = o.getQueryElement(t);if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);var n = ++l;this.element.outlayerGUID = n, f[n] = this, this._create();var s = this._getOption("initLayout");s && this.layout();
	}function r(t) {
		function e() {
			t.apply(this, arguments);
		}return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
	}function a(t) {
		if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
		    i = e && e[1],
		    o = e && e[2];if (!i.length) return 0;i = parseFloat(i);var n = m[o] || 1;return i * n;
	}var u = t.console,
	    h = t.jQuery,
	    d = function d() {},
	    l = 0,
	    f = {};s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var c = s.prototype;o.extend(c, e.prototype), c.option = function (t) {
		o.extend(this.options, t);
	}, c._getOption = function (t) {
		var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
	}, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
	}, c.reloadItems = function () {
		this.items = this._itemize(this.element.children);
	}, c._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = e[n],
			    r = new i(s, this);o.push(r);
		}return o;
	}, c._filterFindItemElements = function (t) {
		return o.filterFindElements(t, this.options.itemSelector);
	}, c.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element;
		});
	}, c.layout = function () {
		this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
		    e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
	}, c._init = c.layout, c._resetLayout = function () {
		this.getSize();
	}, c.getSize = function () {
		this.size = i(this.element);
	}, c._getMeasurement = function (t, e) {
		var o,
		    n = this.options[t];n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
	}, c.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
	}, c._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored;
		});
	}, c._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];t.forEach(function (t) {
				var o = this._getItemLayoutPosition(t);o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
			}, this), this._processLayoutQueue(i);
		}
	}, c._getItemLayoutPosition = function () {
		return { x: 0, y: 0 };
	}, c._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e);
		}, this);
	}, c.updateStagger = function () {
		var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
	}, c._positionItem = function (t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
	}, c._postLayout = function () {
		this.resizeContainer();
	}, c.resizeContainer = function () {
		var t = this._getOption("resizeContainer");if (t) {
			var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
		}
	}, c._emitCompleteOnItems = function (t, e) {
		function i() {
			n.dispatchEvent(t + "Complete", null, [e]);
		}function o() {
			r++, r == s && i();
		}var n = this,
		    s = e.length;if (!e || !s) return void i();var r = 0;e.forEach(function (e) {
			e.once(t, o);
		});
	}, c.dispatchEvent = function (t, e, i) {
		var o = e ? [e].concat(i) : i;if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
			var n = h.Event(e);n.type = t, this.$element.trigger(n, i);
		} else this.$element.trigger(t, i);
	}, c.ignore = function (t) {
		var e = this.getItem(t);e && (e.isIgnored = !0);
	}, c.unignore = function (t) {
		var e = this.getItem(t);e && delete e.isIgnored;
	}, c.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
	}, c.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			o.removeFrom(this.stamps, t), this.unignore(t);
		}, this);
	}, c._find = function (t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
	}, c._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
	}, c._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
		    e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
	}, c._manageStamp = d, c._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
		    o = this._boundingRect,
		    n = i(t),
		    s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };return s;
	}, c.handleEvent = o.handleEvent, c.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0;
	}, c.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1;
	}, c.onresize = function () {
		this.resize();
	}, o.debounceMethod(s, "onresize", 100), c.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout();
	}, c.needsResizeLayout = function () {
		var t = i(this.element),
		    e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
	}, c.addItems = function (t) {
		var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
	}, c.appended = function (t) {
		var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
	}, c.prepended = function (t) {
		var e = this._itemize(t);if (e.length) {
			var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
		}
	}, c.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal();
			});
		}
	}, c.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();t.forEach(function (t, i) {
				t.stagger(i * e), t.hide();
			});
		}
	}, c.revealItemElements = function (t) {
		var e = this.getItems(t);this.reveal(e);
	}, c.hideItemElements = function (t) {
		var e = this.getItems(t);this.hide(e);
	}, c.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];if (i.element == t) return i;
		}
	}, c.getItems = function (t) {
		t = o.makeArray(t);var e = [];return t.forEach(function (t) {
			var i = this.getItem(t);i && e.push(i);
		}, this), e;
	}, c.remove = function (t) {
		var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), o.removeFrom(this.items, t);
		}, this);
	}, c.destroy = function () {
		var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy();
		}), this.unbindResize();var e = this.element.outlayerGUID;delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
	}, s.data = function (t) {
		t = o.getQueryElement(t);var e = t && t.outlayerGUID;return e && f[e];
	}, s.create = function (t, e) {
		var i = r(s);return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
	};var m = { ms: 1, s: 1e3 };return s.Item = n, s;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
	"use strict";
	function e() {
		t.Item.apply(this, arguments);
	}var i = e.prototype = Object.create(t.Item.prototype),
	    o = i._create;i._create = function () {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();var t = this.layout.options.getSortData,
			    e = this.layout._sorters;for (var i in t) {
				var o = e[i];this.sortData[i] = o(this.element, this);
			}
		}
	};var n = i.destroy;return i.destroy = function () {
		n.apply(this, arguments), this.css({ display: "" });
	}, e;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
	"use strict";
	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
	}var o = i.prototype,
	    n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];return n.forEach(function (t) {
		o[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments);
		};
	}), o.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element),
		    i = this.isotope.size && e;return i && e.innerHeight != this.isotope.size.innerHeight;
	}, o._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments);
	}, o.getColumnWidth = function () {
		this.getSegmentSize("column", "Width");
	}, o.getRowHeight = function () {
		this.getSegmentSize("row", "Height");
	}, o.getSegmentSize = function (t, e) {
		var i = t + e,
		    o = "outer" + e;if (this._getMeasurement(i, o), !this[i]) {
			var n = this.getFirstItemSize();this[i] = n && n[o] || this.isotope.size["inner" + e];
		}
	}, o.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];return e && e.element && t(e.element);
	}, o.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments);
	}, o.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size;
	}, i.modes = {}, i.create = function (t, e) {
		function n() {
			i.apply(this, arguments);
		}return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
	}, i;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
	var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var o = i.prototype;return o._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
			this.colYs.push(0);
		}this.maxY = 0, this.horizontalColIndex = 0;
	}, o.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
			    i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
		}var o = this.columnWidth += this.gutter,
		    n = this.containerWidth + this.gutter,
		    s = n / o,
		    r = o - n % o,
		    a = r && r < 1 ? "round" : "floor";s = Math[a](s), this.cols = Math.max(s, 1);
	}, o.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
		    i = t ? this.element.parentNode : this.element,
		    o = e(i);this.containerWidth = o && o.innerWidth;
	}, o._getItemLayoutPosition = function (t) {
		t.getSize();var e = t.size.outerWidth % this.columnWidth,
		    i = e && e < 1 ? "round" : "ceil",
		    o = Math[i](t.size.outerWidth / this.columnWidth);o = Math.min(o, this.cols);for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
			this.colYs[h] = a;
		}return r;
	}, o._getTopColPosition = function (t) {
		var e = this._getTopColGroup(t),
		    i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
	}, o._getTopColGroup = function (t) {
		if (t < 2) return this.colYs;for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
			e[o] = this._getColGroupY(o, t);
		}return e;
	}, o._getColGroupY = function (t, e) {
		if (e < 2) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
	}, o._getHorizontalColPosition = function (t, e) {
		var i = this.horizontalColIndex % this.cols,
		    o = t > 1 && i + t > this.cols;i = o ? 0 : i;var n = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
	}, o._manageStamp = function (t) {
		var i = e(t),
		    o = this._getElementOffset(t),
		    n = this._getOption("originLeft"),
		    s = n ? o.left : o.right,
		    r = s + i.outerWidth,
		    a = Math.floor(s / this.columnWidth);a = Math.max(0, a);var u = Math.floor(r / this.columnWidth);u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
			this.colYs[l] = Math.max(d, this.colYs[l]);
		}
	}, o._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
	}, o._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
			t++;
		}return (this.cols - t) * this.columnWidth - this.gutter;
	}, o.needsResizeLayout = function () {
		var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
	}, i;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"),
	    o = i.prototype,
	    n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };for (var s in e.prototype) {
		n[s] || (o[s] = e.prototype[s]);
	}var r = o.measureColumns;o.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this);
	};var a = o._getOption;return o._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
	}, i;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"),
	    i = e.prototype;return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();var e = t.size.outerWidth + this.gutter,
		    i = this.isotope.size.innerWidth + this.gutter;0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);var o = { x: this.x, y: this.y };return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
	}, i._getContainerSize = function () {
		return { height: this.maxY };
	}, e;
}), function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", { horizontalAlignment: 0 }),
	    i = e.prototype;return i._resetLayout = function () {
		this.y = 0;
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
		    i = this.y;return this.y += t.size.outerHeight, { x: e, y: i };
	}, i._getContainerSize = function () {
		return { height: this.y };
	}, e;
}), function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
		return e(t, i, o, n, s, r, a);
	}) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, o, n, s, r) {
	function a(t, e) {
		return function (i, o) {
			for (var n = 0; n < t.length; n++) {
				var s = t[n],
				    r = i.sortData[s],
				    a = o.sortData[s];if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e,
					    h = u ? 1 : -1;return (r > a ? 1 : -1) * h;
				}
			}return 0;
		};
	}var u = t.jQuery,
	    h = String.prototype.trim ? function (t) {
		return t.trim();
	} : function (t) {
		return t.replace(/^\s+|\s+$/g, "");
	},
	    d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });d.Item = s, d.LayoutMode = r;var l = d.prototype;l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];for (var t in r.modes) {
			this._initLayoutMode(t);
		}
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this);
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var o = t[i];o.id = this.itemGUID++;
		}return this._updateItemsSortData(t), t;
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t],
		    i = this.options[t] || {};this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
	}, l._layout = function () {
		var t = this._getIsInstant();this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();var e = this._filter(this.items);this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide);
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"),
		    e = void 0 !== t ? t : !this._isLayoutInited;return this._isInstant = e, e;
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
		}var e,
		    i,
		    o,
		    n = this;this.once("layoutComplete", function () {
			e = !0, t();
		}), this.once("hideComplete", function () {
			i = !0, t();
		}), this.once("revealComplete", function () {
			o = !0, t();
		});
	}, l._filter = function (t) {
		var e = this.options.filter;e = e || "*";for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];if (!a.isIgnored) {
				var u = s(a);u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
			}
		}return { matches: i, needReveal: o, needHide: n };
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t);
		} : "function" == typeof t ? function (e) {
			return t(e.element);
		} : function (e) {
			return o(e.element, t);
		};
	}, l.updateSortData = function (t) {
		var e;t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
	}, l._getSorters = function () {
		var t = this.options.getSortData;for (var e in t) {
			var i = t[e];this._sorters[e] = f(i);
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var o = t[i];o.updateSortData();
		}
	};var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;var i = h(t).split(" "),
			    o = i[0],
			    n = o.match(/^\[(.+)\]$/),
			    s = n && n[1],
			    r = e(s, o),
			    a = d.sortDataParsers[i[1]];return t = a ? function (t) {
				return t && a(r(t));
			} : function (t) {
				return t && r(t);
			};
		}function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t);
			} : function (t) {
				var i = t.querySelector(e);return i && i.textContent;
			};
		}return t;
	}();d.sortDataParsers = { parseInt: function (_parseInt) {
			function parseInt(_x) {
				return _parseInt.apply(this, arguments);
			}

			parseInt.toString = function () {
				return _parseInt.toString();
			};

			return parseInt;
		}(function (t) {
			return parseInt(t, 10);
		}), parseFloat: function (_parseFloat) {
			function parseFloat(_x2) {
				return _parseFloat.apply(this, arguments);
			}

			parseFloat.toString = function () {
				return _parseFloat.toString();
			};

			return parseFloat;
		}(function (t) {
			return parseFloat(t);
		}) }, l._sort = function () {
		if (this.options.sortBy) {
			var t = n.makeArray(this.options.sortBy);this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));var e = a(this.sortHistory, this.options.sortAscending);this.filteredItems.sort(e);
		}
	}, l._getIsSameSortBy = function (t) {
		for (var e = 0; e < t.length; e++) {
			if (t[e] != this.sortHistory[e]) return !1;
		}return !0;
	}, l._mode = function () {
		var t = this.options.layoutMode,
		    e = this.modes[t];if (!e) throw new Error("No layout mode: " + t);return e.options = this.options[t], e;
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout();
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t);
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t);
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize();
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout();
	}, l.appended = function (t) {
		var e = this.addItems(t);if (e.length) {
			var i = this._filterRevealAdded(e);this.filteredItems = this.filteredItems.concat(i);
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);if (e.length) {
			this._resetLayout(), this._manageStamps();var i = this._filterRevealAdded(e);this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
	}, l.insert = function (t) {
		var e = this.addItems(t);if (e.length) {
			var i,
			    o,
			    n = e.length;for (i = 0; i < n; i++) {
				o = e[i], this.element.appendChild(o.element);
			}var s = this._filter(e).matches;for (i = 0; i < n; i++) {
				e[i].isLayoutInstant = !0;
			}for (this.arrange(), i = 0; i < n; i++) {
				delete e[i].isLayoutInstant;
			}this.reveal(s);
		}
	};var c = l.remove;return l.remove = function (t) {
		t = n.makeArray(t);var e = this.getItems(t);c.call(this, t);for (var i = e && e.length, o = 0; i && o < i; o++) {
			var s = e[o];n.removeFrom(this.filteredItems, s);
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];e.sortData.random = Math.random();
		}this.options.sortBy = "random", this._sort(), this._layout();
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;this.options.transitionDuration = 0;var o = t.apply(this, e);return this.options.transitionDuration = i, o;
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element;
		});
	}, d;
});

/*global*/
(function () {

	'use strict';

	var layout = "<div class=\"game-item\">\n\t\t\t      <div class=\"game-item__back\"></div>\n\t\t\t      <div class=\"game-item__front\">\n\t\t\t        <img class=\"game-item__img\" src=\"assets_prod/img/1.jpg\">\n\t\t\t      </div>\n\t\t\t    </div>";

	var timer = document.querySelector('.timer');
	var startBtn = document.querySelector('.start-btn');

	var Game = function () {
		function Game(numberOfCart) {
			_classCallCheck(this, Game);

			this.gameField = document.querySelector('.game-field');
			this.numberOfCart = numberOfCart;
			this.layout = layout;
			this.timer = timer;
			this.startBtn = startBtn;
			this.timeToGame = numberOfCart * 4;

			this.timerId = 0;
			this.mainClickFunc = 0;
		}

		_createClass(Game, [{
			key: "createMapCart",


			//возвращает массив, по которому располагаются карты
			value: function createMapCart() {
				var arr1 = [];
				var arr2 = [];
				var resultArr = [];

				function compareRandom(a, b) {
					return Math.random() - 0.5;
				}

				for (var i = 0; i < this.numberOfCart / 2; i++) {
					arr1[i] = i;
					arr2[i] = i;
				}

				resultArr = [].concat(arr1, arr2);
				resultArr.sort(compareRandom);
				return resultArr;
			}
		}, {
			key: "addClick",


			// Добавляем клик (делегирование)
			value: function addClick() {
				var that = this;

				// Вешаем слушатель
				this.gameField.addEventListener('click', mainClickFunc);

				//Снимаем обработчик клика на определенное время
				// нужно чтобы игрок не мог беспорядочно тыкать по картам
				function freezeGame(time) {
					that.gameField.removeEventListener('click', mainClickFunc);
					setTimeout(function () {
						that.gameField.addEventListener('click', mainClickFunc);
					}, time);
				};

				//Проверяет, открыта ли карта
				//Если открыта - возвращает true
				function checkIsOpen(cart) {
					return cart.classList.contains('active') ? true : false;
				}

				//Основаня функция клика
				function mainClickFunc(e) {

					// логика клика
					var gameFieldClass = 'game-field';
					var gameItemClass = 'game-item';
					var target = e.target;
					var flag = false;

					//Проверяем элемент (необходимо при делегировании)
					while (target.classList[0] !== gameFieldClass) {

						if (target.classList[0] == gameItemClass) {
							flag = true; // ставим флаг, когда дошли до нужного нам элемента
							break;
						}
						target = target.parentNode;
					}

					if (flag) {

						//Если карта не открыта
						if (!checkIsOpen(target)) {
							freezeGame(500);
							target.classList.add('active');
						} else {
							freezeGame(500);
							target.classList.remove('active');
						}

						// необходимо сравнить карты
						if (that.gameField.querySelectorAll('.game-item.active').length == 2) {
							var openCarts = that.gameField.querySelectorAll('.game-item.active');

							var dataGameFirst = openCarts[0].getAttribute('data-game');
							var dataGameSecond = openCarts[1].getAttribute('data-game');

							//Карты одинаковые
							if (dataGameFirst === dataGameSecond) {
								// ставим задержку, чтобы не было моментального исчезновения
								setTimeout(function () {

									openCarts[0].classList.add('hidden');
									openCarts[1].classList.add('hidden');
									openCarts[0].classList.remove('active');
									openCarts[1].classList.remove('active');

									var hiddenCarts = that.gameField.querySelectorAll('.game-item.hidden');
									var carts = that.gameField.querySelectorAll('.game-item');

									//Если карты кончились (игрок победил);
									console.log(hiddenCarts.length);
									if (hiddenCarts.length === carts.length) {
										alert('Вы победили!');
										that.reset();
									};
								}, 700);
							} else {
								// карты не совпали
								setTimeout(function () {
									openCarts[0].classList.remove('active');
									openCarts[1].classList.remove('active');
								}, 700);
							}
						}
					}
				}

				// Копируем функцию обработчик в свойство объекта,
				// чтобы взаимодействовать с ним в методе reset
				this.mainClickFunc = mainClickFunc;
			}
		}, {
			key: "startTimer",


			// запускаем таймер
			value: function startTimer(timeToGame, isReset) {
				var _this = this;

				var time = timeToGame += 1;
				var timer = void 0;

				if (isReset) {
					this.timer.innerText = "";
					return;
				}

				// возвращаем id таймера, который копируется
				// в свойство объекта
				return timer = setInterval(function () {
					time--;
					_this.timer.innerText = time + " \u0441\u0435\u043A.";

					//время вышло
					if (time === 0) {
						clearInterval(timer);
						alert('Время вышло :(');
						_this.timer.innerText = time + " \u0441\u0435\u043A\u0443\u043D\u0434";

						_this.reset();
					}
				}, 1000);
			}

			// добавляем карты на поле

		}, {
			key: "createCart",
			value: function createCart() {
				var clearField = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


				// очищаем поле, если передан атрибут
				// (используется в reset)
				if (clearField) {
					this.gameField.innerHTML = '';
					return;
				}

				// Перемешиваем карты
				var mapCartArray = this.createMapCart();

				//создаем на поле карты
				var allCart = '';
				for (var i = this.numberOfCart; i > 0; i--) {
					allCart += this.layout;
				}
				this.gameField.innerHTML = allCart;

				// проставляем картам дата атрибуты
				// и картинки
				var carts = document.querySelectorAll('.game-item');
				carts.forEach(function (item, index) {
					item.setAttribute('data-game', mapCartArray[index]);

					var img = item.querySelector('.game-item__img');
					img.setAttribute('src', "assets_prod/img/" + mapCartArray[index] + ".jpg");
				});
			}

			//Выключаем и включаем кнопку "начать игру"

		}, {
			key: "changeStartBtn",
			value: function changeStartBtn(value) {
				if (value === 'disable') {
					this.startBtn.setAttribute('disabled', 'disabled');
				} else if (value === 'enable') {
					this.startBtn.removeAttribute('disabled');
				}
			}
		}, {
			key: "startGame",
			value: function startGame() {
				//Создаем карты
				this.createCart();

				//инициализируем клик
				game.addClick();

				// подрубаем таймер
				this.timerId = this.startTimer(this.timeToGame);

				//Выключаем кнопку начала игры
				this.changeStartBtn('disable');
			}
		}, {
			key: "reset",
			value: function reset() {
				// обновляем таймер
				clearInterval(this.timerId);
				this.startTimer(0, true);

				//Включаем кнопку
				this.changeStartBtn('enable');

				//Очищаем поле
				this.createCart(true);

				//Удаляем обработчик клика
				this.gameField.removeEventListener('click', this.mainClickFunc);
			}
		}]);

		return Game;
	}();

	var game = new Game(8);

	startBtn.addEventListener('click', function () {
		game.startGame();
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidCIsImUiLCJkZWZpbmUiLCJhbWQiLCJpIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJqUXVlcnlCcmlkZ2V0IiwialF1ZXJ5Iiwid2luZG93IiwicyIsImEiLCJ1IiwibyIsIm4iLCJlYWNoIiwiaCIsImRhdGEiLCJyIiwiZCIsImNoYXJBdCIsImwiLCJhcHBseSIsIm9wdGlvbiIsIl9pbml0IiwicHJvdG90eXBlIiwiaXNQbGFpbk9iamVjdCIsIm9wdGlvbnMiLCJleHRlbmQiLCJmbiIsImNhbGwiLCJhcmd1bWVudHMiLCJicmlkZ2V0IiwiQXJyYXkiLCJzbGljZSIsImNvbnNvbGUiLCJlcnJvciIsIkV2RW1pdHRlciIsIm9uIiwiX2V2ZW50cyIsImluZGV4T2YiLCJwdXNoIiwib25jZSIsIl9vbmNlRXZlbnRzIiwib2ZmIiwibGVuZ3RoIiwic3BsaWNlIiwiZW1pdEV2ZW50IiwiYWxsT2ZmIiwiZ2V0U2l6ZSIsInBhcnNlRmxvYXQiLCJpc05hTiIsIndpZHRoIiwiaGVpZ2h0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGFkZGluZyIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJib3hTaXppbmciLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJNYXRoIiwicm91bmQiLCJpc0JveFNpemVPdXRlciIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvciIsIm5vZGVUeXBlIiwiZGlzcGxheSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaXNCb3JkZXJCb3giLCJmIiwiYyIsIm0iLCJwIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ5IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJnIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIl8iLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwieiIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJJIiwieCIsIlMiLCJtYXRjaGVzU2VsZWN0b3IiLCJFbGVtZW50IiwibWF0Y2hlcyIsImZpenp5VUlVdGlscyIsIm1vZHVsbyIsIm1ha2VBcnJheSIsImlzQXJyYXkiLCJyZW1vdmVGcm9tIiwiZ2V0UGFyZW50IiwicGFyZW50Tm9kZSIsImdldFF1ZXJ5RWxlbWVudCIsImhhbmRsZUV2ZW50IiwidHlwZSIsImZpbHRlckZpbmRFbGVtZW50cyIsImZvckVhY2giLCJIVE1MRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZWJvdW5jZU1ldGhvZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJkb2NSZWFkeSIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9EYXNoZWQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJodG1sSW5pdCIsImNvbmNhdCIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImNsYXNzTmFtZSIsIk91dGxheWVyIiwiSXRlbSIsImVsZW1lbnQiLCJsYXlvdXQiLCJwb3NpdGlvbiIsIl9jcmVhdGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNpdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EZWxheSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX3RyYW5zbiIsImluZ1Byb3BlcnRpZXMiLCJjbGVhbiIsIm9uRW5kIiwiY3NzIiwic2l6ZSIsImdldFBvc2l0aW9uIiwiX2dldE9wdGlvbiIsImxheW91dFBvc2l0aW9uIiwiZ2V0WFZhbHVlIiwiZ2V0WVZhbHVlIiwicGVyY2VudFBvc2l0aW9uIiwiX3RyYW5zaXRpb25UbyIsInNldFBvc2l0aW9uIiwiaXNUcmFuc2l0aW9uaW5nIiwiZ2V0VHJhbnNsYXRlIiwidG8iLCJvblRyYW5zaXRpb25FbmQiLCJpc0NsZWFuaW5nIiwiZ29UbyIsIm1vdmVUbyIsIl9ub25UcmFuc2l0aW9uIiwiX3JlbW92ZVN0eWxlcyIsImZyb20iLCJlbmFibGVUcmFuc2l0aW9uIiwic3RhZ2dlckRlbGF5Iiwib253ZWJraXRUcmFuc2l0aW9uRW5kIiwib250cmFuc2l0aW9uZW5kIiwib25vdHJhbnNpdGlvbmVuZCIsInRhcmdldCIsInByb3BlcnR5TmFtZSIsImRpc2FibGVUcmFuc2l0aW9uIiwicmVtb3ZlVHJhbnNpdGlvblN0eWxlcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFnZ2VyIiwicmVtb3ZlRWxlbSIsInJlbW92ZSIsImhpZGUiLCJyZXZlYWwiLCJpc0hpZGRlbiIsImdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkiLCJvblJldmVhbFRyYW5zaXRpb25FbmQiLCJoaWRkZW5TdHlsZSIsInZpc2libGVTdHlsZSIsIm9wYWNpdHkiLCJvbkhpZGVUcmFuc2l0aW9uRW5kIiwiZGVzdHJveSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm5hbWVzcGFjZSIsIiRlbGVtZW50IiwiZGVmYXVsdHMiLCJvdXRsYXllckdVSUQiLCJtYXRjaCIsImNvbnRhaW5lclN0eWxlIiwiaW5pdExheW91dCIsIm9yaWdpbkxlZnQiLCJvcmlnaW5Ub3AiLCJyZXNpemUiLCJyZXNpemVDb250YWluZXIiLCJjb21wYXRPcHRpb25zIiwiaG9yaXpvbnRhbCIsImxheW91dEluc3RhbnQiLCJyZWxvYWRJdGVtcyIsInN0YW1wcyIsInN0YW1wIiwiYmluZFJlc2l6ZSIsIml0ZW1zIiwiX2l0ZW1pemUiLCJjaGlsZHJlbiIsIl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzIiwiaXRlbVNlbGVjdG9yIiwiZ2V0SXRlbUVsZW1lbnRzIiwibWFwIiwiX3Jlc2V0TGF5b3V0IiwiX21hbmFnZVN0YW1wcyIsIl9pc0xheW91dEluaXRlZCIsImxheW91dEl0ZW1zIiwiX2dldE1lYXN1cmVtZW50IiwiX2dldEl0ZW1zRm9yTGF5b3V0IiwiX2xheW91dEl0ZW1zIiwiX3Bvc3RMYXlvdXQiLCJmaWx0ZXIiLCJpc0lnbm9yZWQiLCJfZW1pdENvbXBsZXRlT25JdGVtcyIsIl9nZXRJdGVtTGF5b3V0UG9zaXRpb24iLCJpdGVtIiwiaXNJbnN0YW50IiwiaXNMYXlvdXRJbnN0YW50IiwiX3Byb2Nlc3NMYXlvdXRRdWV1ZSIsInVwZGF0ZVN0YWdnZXIiLCJfcG9zaXRpb25JdGVtIiwiX2dldENvbnRhaW5lclNpemUiLCJfc2V0Q29udGFpbmVyTWVhc3VyZSIsIm1heCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInRyaWdnZXIiLCJpZ25vcmUiLCJnZXRJdGVtIiwidW5pZ25vcmUiLCJfZmluZCIsInVuc3RhbXAiLCJfZ2V0Qm91bmRpbmdSZWN0IiwiX21hbmFnZVN0YW1wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2JvdW5kaW5nUmVjdCIsIl9nZXRFbGVtZW50T2Zmc2V0IiwiaXNSZXNpemVCb3VuZCIsInVuYmluZFJlc2l6ZSIsIm9ucmVzaXplIiwibmVlZHNSZXNpemVMYXlvdXQiLCJhZGRJdGVtcyIsImFwcGVuZGVkIiwicHJlcGVuZGVkIiwicmV2ZWFsSXRlbUVsZW1lbnRzIiwiZ2V0SXRlbXMiLCJoaWRlSXRlbUVsZW1lbnRzIiwicmVtb3ZlRGF0YSIsIm1zIiwiSXNvdG9wZSIsImlkIiwiaXRlbUdVSUQiLCJzb3J0RGF0YSIsInVwZGF0ZVNvcnREYXRhIiwicmFuZG9tIiwiZ2V0U29ydERhdGEiLCJfc29ydGVycyIsIkxheW91dE1vZGUiLCJpc290b3BlIiwiZmlsdGVyZWRJdGVtcyIsIm5lZWRzVmVydGljYWxSZXNpemVMYXlvdXQiLCJnZXRDb2x1bW5XaWR0aCIsImdldFNlZ21lbnRTaXplIiwiZ2V0Um93SGVpZ2h0IiwiZ2V0Rmlyc3RJdGVtU2l6ZSIsIm1vZGVzIiwiTWFzb25yeSIsImZpdFdpZHRoIiwibWVhc3VyZUNvbHVtbnMiLCJjb2xZcyIsImNvbHMiLCJtYXhZIiwiaG9yaXpvbnRhbENvbEluZGV4IiwiZ2V0Q29udGFpbmVyV2lkdGgiLCJjb2x1bW5XaWR0aCIsImNvbnRhaW5lcldpZHRoIiwiZ3V0dGVyIiwibWluIiwiaG9yaXpvbnRhbE9yZGVyIiwiY29sIiwiX2dldFRvcENvbFBvc2l0aW9uIiwiX2dldFRvcENvbEdyb3VwIiwiX2dldENvbEdyb3VwWSIsIl9nZXRIb3Jpem9udGFsQ29sUG9zaXRpb24iLCJmbG9vciIsIl9nZXRDb250YWluZXJGaXRXaWR0aCIsImlzRml0V2lkdGgiLCJob3Jpem9udGFsQWxpZ25tZW50IiwiU3RyaW5nIiwidHJpbSIsImxheW91dE1vZGUiLCJpc0pRdWVyeUZpbHRlcmluZyIsInNvcnRBc2NlbmRpbmciLCJfZ2V0U29ydGVycyIsInNvcnRIaXN0b3J5IiwiX2luaXRMYXlvdXRNb2RlIiwiX3VwZGF0ZUl0ZW1zU29ydERhdGEiLCJhcnJhbmdlIiwiX2xheW91dCIsIl9nZXRJc0luc3RhbnQiLCJfZmlsdGVyIiwiX2JpbmRBcnJhbmdlQ29tcGxldGUiLCJfaXNJbnN0YW50IiwiX25vVHJhbnNpdGlvbiIsIl9oaWRlUmV2ZWFsIiwiX3NvcnQiLCJuZWVkUmV2ZWFsIiwibmVlZEhpZGUiLCJfZ2V0RmlsdGVyVGVzdCIsImlzIiwic3BsaXQiLCJzb3J0RGF0YVBhcnNlcnMiLCJ0ZXh0Q29udGVudCIsInBhcnNlSW50Iiwic29ydEJ5IiwiX2dldElzU2FtZVNvcnRCeSIsInNvcnQiLCJfbW9kZSIsIkVycm9yIiwiX2ZpbHRlclJldmVhbEFkZGVkIiwiaW5zZXJ0Iiwic2h1ZmZsZSIsImdldEZpbHRlcmVkSXRlbUVsZW1lbnRzIiwidGltZXIiLCJzdGFydEJ0biIsIkdhbWUiLCJudW1iZXJPZkNhcnQiLCJnYW1lRmllbGQiLCJ0aW1lVG9HYW1lIiwidGltZXJJZCIsIm1haW5DbGlja0Z1bmMiLCJhcnIxIiwiYXJyMiIsInJlc3VsdEFyciIsImNvbXBhcmVSYW5kb20iLCJiIiwidGhhdCIsImZyZWV6ZUdhbWUiLCJ0aW1lIiwiY2hlY2tJc09wZW4iLCJjYXJ0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnYW1lRmllbGRDbGFzcyIsImdhbWVJdGVtQ2xhc3MiLCJmbGFnIiwiYWRkIiwib3BlbkNhcnRzIiwiZGF0YUdhbWVGaXJzdCIsImRhdGFHYW1lU2Vjb25kIiwiaGlkZGVuQ2FydHMiLCJjYXJ0cyIsImxvZyIsImFsZXJ0IiwicmVzZXQiLCJpc1Jlc2V0IiwiaW5uZXJUZXh0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xlYXJGaWVsZCIsImlubmVySFRNTCIsIm1hcENhcnRBcnJheSIsImNyZWF0ZU1hcENhcnQiLCJhbGxDYXJ0IiwiaW5kZXgiLCJzZXRBdHRyaWJ1dGUiLCJpbWciLCJ2YWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNyZWF0ZUNhcnQiLCJnYW1lIiwiYWRkQ2xpY2siLCJzdGFydFRpbWVyIiwiY2hhbmdlU3RhcnRCdG4iLCJzdGFydEdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxDQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsZUFBWSxPQUFPQyxNQUFuQixJQUEyQkEsT0FBT0MsR0FBbEMsR0FBc0NELE9BQU8sK0JBQVAsRUFBdUMsQ0FBQyxRQUFELENBQXZDLEVBQWtELFVBQVNFLENBQVQsRUFBVztBQUFDLFNBQU9ILEVBQUVELENBQUYsRUFBSUksQ0FBSixDQUFQO0FBQWMsRUFBNUUsQ0FBdEMsR0FBb0gsb0JBQWlCQyxNQUFqQix5Q0FBaUJBLE1BQWpCLE1BQXlCQSxPQUFPQyxPQUFoQyxHQUF3Q0QsT0FBT0MsT0FBUCxHQUFlTCxFQUFFRCxDQUFGLEVBQUlPLFFBQVEsUUFBUixDQUFKLENBQXZELEdBQThFUCxFQUFFUSxhQUFGLEdBQWdCUCxFQUFFRCxDQUFGLEVBQUlBLEVBQUVTLE1BQU4sQ0FBbE47QUFBZ08sQ0FBOU8sQ0FBK09DLE1BQS9PLEVBQXNQLFVBQVNW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LEdBQWUsS0FBSzJDLFVBQUwsQ0FBZ0IsS0FBSzVDLFVBQXJCLENBQWY7O0FBRUE7QUFDQSxTQUFLNkMsY0FBTCxDQUFvQixTQUFwQjtBQUVBO0FBaE9TO0FBQUE7QUFBQSwyQkFrT0g7QUFDTjtBQUNBZixrQkFBYyxLQUFLN0IsT0FBbkI7QUFDQSxTQUFLMkMsVUFBTCxDQUFnQixDQUFoQixFQUFtQixJQUFuQjs7QUFFQTtBQUNBLFNBQUtDLGNBQUwsQ0FBb0IsUUFBcEI7O0FBRUE7QUFDQSxTQUFLSixVQUFMLENBQWdCLElBQWhCOztBQUVBO0FBQ0EsU0FBSzFDLFNBQUwsQ0FBZXZLLG1CQUFmLENBQW1DLE9BQW5DLEVBQTRDLEtBQUswSyxhQUFqRDtBQUNBO0FBL09TOztBQUFBO0FBQUE7O0FBb1BYLEtBQUl3QyxPQUFPLElBQUk3QyxJQUFKLENBQVMsQ0FBVCxDQUFYOztBQUVBRCxVQUFTOU4sZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBVTtBQUM1QzRRLE9BQUtJLFNBQUw7QUFDQSxFQUZEO0FBSUMsQ0ExUEEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypsaWJzKi9cclxuIWZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImpxdWVyeS1icmlkZ2V0L2pxdWVyeS1icmlkZ2V0XCIsW1wianF1ZXJ5XCJdLGZ1bmN0aW9uKGkpe3JldHVybiBlKHQsaSl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHQscmVxdWlyZShcImpxdWVyeVwiKSk6dC5qUXVlcnlCcmlkZ2V0PWUodCx0LmpRdWVyeSl9KHdpbmRvdyxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoaSxzLGEpe2Z1bmN0aW9uIHUodCxlLG8pe3ZhciBuLHM9XCIkKCkuXCIraSsnKFwiJytlKydcIiknO3JldHVybiB0LmVhY2goZnVuY3Rpb24odCx1KXt2YXIgaD1hLmRhdGEodSxpKTtpZighaClyZXR1cm4gdm9pZCByKGkrXCIgbm90IGluaXRpYWxpemVkLiBDYW5ub3QgY2FsbCBtZXRob2RzLCBpLmUuIFwiK3MpO3ZhciBkPWhbZV07aWYoIWR8fFwiX1wiPT1lLmNoYXJBdCgwKSlyZXR1cm4gdm9pZCByKHMrXCIgaXMgbm90IGEgdmFsaWQgbWV0aG9kXCIpO3ZhciBsPWQuYXBwbHkoaCxvKTtuPXZvaWQgMD09PW4/bDpufSksdm9pZCAwIT09bj9uOnR9ZnVuY3Rpb24gaCh0LGUpe3QuZWFjaChmdW5jdGlvbih0LG8pe3ZhciBuPWEuZGF0YShvLGkpO24/KG4ub3B0aW9uKGUpLG4uX2luaXQoKSk6KG49bmV3IHMobyxlKSxhLmRhdGEobyxpLG4pKX0pfWE9YXx8ZXx8dC5qUXVlcnksYSYmKHMucHJvdG90eXBlLm9wdGlvbnx8KHMucHJvdG90eXBlLm9wdGlvbj1mdW5jdGlvbih0KXthLmlzUGxhaW5PYmplY3QodCkmJih0aGlzLm9wdGlvbnM9YS5leHRlbmQoITAsdGhpcy5vcHRpb25zLHQpKX0pLGEuZm5baV09ZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciBlPW4uY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIHUodGhpcyx0LGUpfXJldHVybiBoKHRoaXMsdCksdGhpc30sbyhhKSl9ZnVuY3Rpb24gbyh0KXshdHx8dCYmdC5icmlkZ2V0fHwodC5icmlkZ2V0PWkpfXZhciBuPUFycmF5LnByb3RvdHlwZS5zbGljZSxzPXQuY29uc29sZSxyPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbih0KXtzLmVycm9yKHQpfTtyZXR1cm4gbyhlfHx0LmpRdWVyeSksaX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImV2LWVtaXR0ZXIvZXYtZW1pdHRlclwiLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTp0LkV2RW1pdHRlcj1lKCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXZhciBlPXQucHJvdG90eXBlO3JldHVybiBlLm9uPWZ1bmN0aW9uKHQsZSl7aWYodCYmZSl7dmFyIGk9dGhpcy5fZXZlbnRzPXRoaXMuX2V2ZW50c3x8e30sbz1pW3RdPWlbdF18fFtdO3JldHVybiBvLmluZGV4T2YoZSk9PS0xJiZvLnB1c2goZSksdGhpc319LGUub25jZT1mdW5jdGlvbih0LGUpe2lmKHQmJmUpe3RoaXMub24odCxlKTt2YXIgaT10aGlzLl9vbmNlRXZlbnRzPXRoaXMuX29uY2VFdmVudHN8fHt9LG89aVt0XT1pW3RdfHx7fTtyZXR1cm4gb1tlXT0hMCx0aGlzfX0sZS5vZmY9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLl9ldmVudHMmJnRoaXMuX2V2ZW50c1t0XTtpZihpJiZpLmxlbmd0aCl7dmFyIG89aS5pbmRleE9mKGUpO3JldHVybiBvIT0tMSYmaS5zcGxpY2UobywxKSx0aGlzfX0sZS5lbWl0RXZlbnQ9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLl9ldmVudHMmJnRoaXMuX2V2ZW50c1t0XTtpZihpJiZpLmxlbmd0aCl7aT1pLnNsaWNlKDApLGU9ZXx8W107Zm9yKHZhciBvPXRoaXMuX29uY2VFdmVudHMmJnRoaXMuX29uY2VFdmVudHNbdF0sbj0wO248aS5sZW5ndGg7bisrKXt2YXIgcz1pW25dLHI9byYmb1tzXTtyJiYodGhpcy5vZmYodCxzKSxkZWxldGUgb1tzXSkscy5hcHBseSh0aGlzLGUpfXJldHVybiB0aGlzfX0sZS5hbGxPZmY9ZnVuY3Rpb24oKXtkZWxldGUgdGhpcy5fZXZlbnRzLGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzfSx0fSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZ2V0LXNpemUvZ2V0LXNpemVcIixlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6dC5nZXRTaXplPWUoKX0od2luZG93LGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXt2YXIgZT1wYXJzZUZsb2F0KHQpLGk9dC5pbmRleE9mKFwiJVwiKT09LTEmJiFpc05hTihlKTtyZXR1cm4gaSYmZX1mdW5jdGlvbiBlKCl7fWZ1bmN0aW9uIGkoKXtmb3IodmFyIHQ9e3dpZHRoOjAsaGVpZ2h0OjAsaW5uZXJXaWR0aDowLGlubmVySGVpZ2h0OjAsb3V0ZXJXaWR0aDowLG91dGVySGVpZ2h0OjB9LGU9MDtlPGg7ZSsrKXt2YXIgaT11W2VdO3RbaV09MH1yZXR1cm4gdH1mdW5jdGlvbiBvKHQpe3ZhciBlPWdldENvbXB1dGVkU3R5bGUodCk7cmV0dXJuIGV8fGEoXCJTdHlsZSByZXR1cm5lZCBcIitlK1wiLiBBcmUgeW91IHJ1bm5pbmcgdGhpcyBjb2RlIGluIGEgaGlkZGVuIGlmcmFtZSBvbiBGaXJlZm94PyBTZWUgaHR0cHM6Ly9iaXQubHkvZ2V0c2l6ZWJ1ZzFcIiksZX1mdW5jdGlvbiBuKCl7aWYoIWQpe2Q9ITA7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnN0eWxlLndpZHRoPVwiMjAwcHhcIixlLnN0eWxlLnBhZGRpbmc9XCIxcHggMnB4IDNweCA0cHhcIixlLnN0eWxlLmJvcmRlclN0eWxlPVwic29saWRcIixlLnN0eWxlLmJvcmRlcldpZHRoPVwiMXB4IDJweCAzcHggNHB4XCIsZS5zdHlsZS5ib3hTaXppbmc9XCJib3JkZXItYm94XCI7dmFyIGk9ZG9jdW1lbnQuYm9keXx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2kuYXBwZW5kQ2hpbGQoZSk7dmFyIG49byhlKTtyPTIwMD09TWF0aC5yb3VuZCh0KG4ud2lkdGgpKSxzLmlzQm94U2l6ZU91dGVyPXIsaS5yZW1vdmVDaGlsZChlKX19ZnVuY3Rpb24gcyhlKXtpZihuKCksXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSkpLGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlLm5vZGVUeXBlKXt2YXIgcz1vKGUpO2lmKFwibm9uZVwiPT1zLmRpc3BsYXkpcmV0dXJuIGkoKTt2YXIgYT17fTthLndpZHRoPWUub2Zmc2V0V2lkdGgsYS5oZWlnaHQ9ZS5vZmZzZXRIZWlnaHQ7Zm9yKHZhciBkPWEuaXNCb3JkZXJCb3g9XCJib3JkZXItYm94XCI9PXMuYm94U2l6aW5nLGw9MDtsPGg7bCsrKXt2YXIgZj11W2xdLGM9c1tmXSxtPXBhcnNlRmxvYXQoYyk7YVtmXT1pc05hTihtKT8wOm19dmFyIHA9YS5wYWRkaW5nTGVmdCthLnBhZGRpbmdSaWdodCx5PWEucGFkZGluZ1RvcCthLnBhZGRpbmdCb3R0b20sZz1hLm1hcmdpbkxlZnQrYS5tYXJnaW5SaWdodCx2PWEubWFyZ2luVG9wK2EubWFyZ2luQm90dG9tLF89YS5ib3JkZXJMZWZ0V2lkdGgrYS5ib3JkZXJSaWdodFdpZHRoLHo9YS5ib3JkZXJUb3BXaWR0aCthLmJvcmRlckJvdHRvbVdpZHRoLEk9ZCYmcix4PXQocy53aWR0aCk7eCE9PSExJiYoYS53aWR0aD14KyhJPzA6cCtfKSk7dmFyIFM9dChzLmhlaWdodCk7cmV0dXJuIFMhPT0hMSYmKGEuaGVpZ2h0PVMrKEk/MDp5K3opKSxhLmlubmVyV2lkdGg9YS53aWR0aC0ocCtfKSxhLmlubmVySGVpZ2h0PWEuaGVpZ2h0LSh5K3opLGEub3V0ZXJXaWR0aD1hLndpZHRoK2csYS5vdXRlckhlaWdodD1hLmhlaWdodCt2LGF9fXZhciByLGE9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGU/ZTpmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKHQpfSx1PVtcInBhZGRpbmdMZWZ0XCIsXCJwYWRkaW5nUmlnaHRcIixcInBhZGRpbmdUb3BcIixcInBhZGRpbmdCb3R0b21cIixcIm1hcmdpbkxlZnRcIixcIm1hcmdpblJpZ2h0XCIsXCJtYXJnaW5Ub3BcIixcIm1hcmdpbkJvdHRvbVwiLFwiYm9yZGVyTGVmdFdpZHRoXCIsXCJib3JkZXJSaWdodFdpZHRoXCIsXCJib3JkZXJUb3BXaWR0aFwiLFwiYm9yZGVyQm90dG9tV2lkdGhcIl0saD11Lmxlbmd0aCxkPSExO3JldHVybiBzfSksZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yXCIsZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOnQubWF0Y2hlc1NlbGVjdG9yPWUoKX0od2luZG93LGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9ZnVuY3Rpb24oKXt2YXIgdD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7aWYodC5tYXRjaGVzKXJldHVyblwibWF0Y2hlc1wiO2lmKHQubWF0Y2hlc1NlbGVjdG9yKXJldHVyblwibWF0Y2hlc1NlbGVjdG9yXCI7Zm9yKHZhciBlPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBvPWVbaV0sbj1vK1wiTWF0Y2hlc1NlbGVjdG9yXCI7aWYodFtuXSlyZXR1cm4gbn19KCk7cmV0dXJuIGZ1bmN0aW9uKGUsaSl7cmV0dXJuIGVbdF0oaSl9fSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZml6enktdWktdXRpbHMvdXRpbHNcIixbXCJkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3JcIl0sZnVuY3Rpb24oaSl7cmV0dXJuIGUodCxpKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUodCxyZXF1aXJlKFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvclwiKSk6dC5maXp6eVVJVXRpbHM9ZSh0LHQubWF0Y2hlc1NlbGVjdG9yKX0od2luZG93LGZ1bmN0aW9uKHQsZSl7dmFyIGk9e307aS5leHRlbmQ9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGkgaW4gZSl0W2ldPWVbaV07cmV0dXJuIHR9LGkubW9kdWxvPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHQlZStlKSVlfTt2YXIgbz1BcnJheS5wcm90b3R5cGUuc2xpY2U7aS5tYWtlQXJyYXk9ZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdDtpZihudWxsPT09dHx8dm9pZCAwPT09dClyZXR1cm5bXTt2YXIgZT1cIm9iamVjdFwiPT10eXBlb2YgdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGVuZ3RoO3JldHVybiBlP28uY2FsbCh0KTpbdF19LGkucmVtb3ZlRnJvbT1mdW5jdGlvbih0LGUpe3ZhciBpPXQuaW5kZXhPZihlKTtpIT0tMSYmdC5zcGxpY2UoaSwxKX0saS5nZXRQYXJlbnQ9ZnVuY3Rpb24odCxpKXtmb3IoO3QucGFyZW50Tm9kZSYmdCE9ZG9jdW1lbnQuYm9keTspaWYodD10LnBhcmVudE5vZGUsZSh0LGkpKXJldHVybiB0fSxpLmdldFF1ZXJ5RWxlbWVudD1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpOnR9LGkuaGFuZGxlRXZlbnQ9ZnVuY3Rpb24odCl7dmFyIGU9XCJvblwiK3QudHlwZTt0aGlzW2VdJiZ0aGlzW2VdKHQpfSxpLmZpbHRlckZpbmRFbGVtZW50cz1mdW5jdGlvbih0LG8pe3Q9aS5tYWtlQXJyYXkodCk7dmFyIG49W107cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe2lmKCFvKXJldHVybiB2b2lkIG4ucHVzaCh0KTtlKHQsbykmJm4ucHVzaCh0KTtmb3IodmFyIGk9dC5xdWVyeVNlbGVjdG9yQWxsKG8pLHM9MDtzPGkubGVuZ3RoO3MrKyluLnB1c2goaVtzXSl9fSksbn0saS5kZWJvdW5jZU1ldGhvZD1mdW5jdGlvbih0LGUsaSl7aT1pfHwxMDA7dmFyIG89dC5wcm90b3R5cGVbZV0sbj1lK1wiVGltZW91dFwiO3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpc1tuXTtjbGVhclRpbWVvdXQodCk7dmFyIGU9YXJndW1lbnRzLHM9dGhpczt0aGlzW25dPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvLmFwcGx5KHMsZSksZGVsZXRlIHNbbl19LGkpfX0saS5kb2NSZWFkeT1mdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5yZWFkeVN0YXRlO1wiY29tcGxldGVcIj09ZXx8XCJpbnRlcmFjdGl2ZVwiPT1lP3NldFRpbWVvdXQodCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIix0KX0saS50b0Rhc2hlZD1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC8oLikoW0EtWl0pL2csZnVuY3Rpb24odCxlLGkpe3JldHVybiBlK1wiLVwiK2l9KS50b0xvd2VyQ2FzZSgpfTt2YXIgbj10LmNvbnNvbGU7cmV0dXJuIGkuaHRtbEluaXQ9ZnVuY3Rpb24oZSxvKXtpLmRvY1JlYWR5KGZ1bmN0aW9uKCl7dmFyIHM9aS50b0Rhc2hlZChvKSxyPVwiZGF0YS1cIitzLGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIityK1wiXVwiKSx1PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtXCIrcyksaD1pLm1ha2VBcnJheShhKS5jb25jYXQoaS5tYWtlQXJyYXkodSkpLGQ9citcIi1vcHRpb25zXCIsbD10LmpRdWVyeTtoLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGkscz10LmdldEF0dHJpYnV0ZShyKXx8dC5nZXRBdHRyaWJ1dGUoZCk7dHJ5e2k9cyYmSlNPTi5wYXJzZShzKX1jYXRjaChhKXtyZXR1cm4gdm9pZChuJiZuLmVycm9yKFwiRXJyb3IgcGFyc2luZyBcIityK1wiIG9uIFwiK3QuY2xhc3NOYW1lK1wiOiBcIithKSl9dmFyIHU9bmV3IGUodCxpKTtsJiZsLmRhdGEodCxvLHUpfSl9KX0saX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIm91dGxheWVyL2l0ZW1cIixbXCJldi1lbWl0dGVyL2V2LWVtaXR0ZXJcIixcImdldC1zaXplL2dldC1zaXplXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcImV2LWVtaXR0ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpKToodC5PdXRsYXllcj17fSx0Lk91dGxheWVyLkl0ZW09ZSh0LkV2RW1pdHRlcix0LmdldFNpemUpKX0od2luZG93LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSh0KXtmb3IodmFyIGUgaW4gdClyZXR1cm4hMTtyZXR1cm4gZT1udWxsLCEwfWZ1bmN0aW9uIG8odCxlKXt0JiYodGhpcy5lbGVtZW50PXQsdGhpcy5sYXlvdXQ9ZSx0aGlzLnBvc2l0aW9uPXt4OjAseTowfSx0aGlzLl9jcmVhdGUoKSl9ZnVuY3Rpb24gbih0KXtyZXR1cm4gdC5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24odCl7cmV0dXJuXCItXCIrdC50b0xvd2VyQ2FzZSgpfSl9dmFyIHM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLHI9XCJzdHJpbmdcIj09dHlwZW9mIHMudHJhbnNpdGlvbj9cInRyYW5zaXRpb25cIjpcIldlYmtpdFRyYW5zaXRpb25cIixhPVwic3RyaW5nXCI9PXR5cGVvZiBzLnRyYW5zZm9ybT9cInRyYW5zZm9ybVwiOlwiV2Via2l0VHJhbnNmb3JtXCIsdT17V2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIix0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwifVtyXSxoPXt0cmFuc2Zvcm06YSx0cmFuc2l0aW9uOnIsdHJhbnNpdGlvbkR1cmF0aW9uOnIrXCJEdXJhdGlvblwiLHRyYW5zaXRpb25Qcm9wZXJ0eTpyK1wiUHJvcGVydHlcIix0cmFuc2l0aW9uRGVsYXk6citcIkRlbGF5XCJ9LGQ9by5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSk7ZC5jb25zdHJ1Y3Rvcj1vLGQuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMuX3RyYW5zbj17aW5nUHJvcGVydGllczp7fSxjbGVhbjp7fSxvbkVuZDp7fX0sdGhpcy5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIn0pfSxkLmhhbmRsZUV2ZW50PWZ1bmN0aW9uKHQpe3ZhciBlPVwib25cIit0LnR5cGU7dGhpc1tlXSYmdGhpc1tlXSh0KX0sZC5nZXRTaXplPWZ1bmN0aW9uKCl7dGhpcy5zaXplPWUodGhpcy5lbGVtZW50KX0sZC5jc3M9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5lbGVtZW50LnN0eWxlO2Zvcih2YXIgaSBpbiB0KXt2YXIgbz1oW2ldfHxpO2Vbb109dFtpXX19LGQuZ2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD1nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCksZT10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwib3JpZ2luTGVmdFwiKSxpPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJvcmlnaW5Ub3BcIiksbz10W2U/XCJsZWZ0XCI6XCJyaWdodFwiXSxuPXRbaT9cInRvcFwiOlwiYm90dG9tXCJdLHM9cGFyc2VGbG9hdChvKSxyPXBhcnNlRmxvYXQobiksYT10aGlzLmxheW91dC5zaXplO28uaW5kZXhPZihcIiVcIikhPS0xJiYocz1zLzEwMCphLndpZHRoKSxuLmluZGV4T2YoXCIlXCIpIT0tMSYmKHI9ci8xMDAqYS5oZWlnaHQpLHM9aXNOYU4ocyk/MDpzLHI9aXNOYU4ocik/MDpyLHMtPWU/YS5wYWRkaW5nTGVmdDphLnBhZGRpbmdSaWdodCxyLT1pP2EucGFkZGluZ1RvcDphLnBhZGRpbmdCb3R0b20sdGhpcy5wb3NpdGlvbi54PXMsdGhpcy5wb3NpdGlvbi55PXJ9LGQubGF5b3V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmxheW91dC5zaXplLGU9e30saT10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwib3JpZ2luTGVmdFwiKSxvPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJvcmlnaW5Ub3BcIiksbj1pP1wicGFkZGluZ0xlZnRcIjpcInBhZGRpbmdSaWdodFwiLHM9aT9cImxlZnRcIjpcInJpZ2h0XCIscj1pP1wicmlnaHRcIjpcImxlZnRcIixhPXRoaXMucG9zaXRpb24ueCt0W25dO2Vbc109dGhpcy5nZXRYVmFsdWUoYSksZVtyXT1cIlwiO3ZhciB1PW8/XCJwYWRkaW5nVG9wXCI6XCJwYWRkaW5nQm90dG9tXCIsaD1vP1widG9wXCI6XCJib3R0b21cIixkPW8/XCJib3R0b21cIjpcInRvcFwiLGw9dGhpcy5wb3NpdGlvbi55K3RbdV07ZVtoXT10aGlzLmdldFlWYWx1ZShsKSxlW2RdPVwiXCIsdGhpcy5jc3MoZSksdGhpcy5lbWl0RXZlbnQoXCJsYXlvdXRcIixbdGhpc10pfSxkLmdldFhWYWx1ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwiaG9yaXpvbnRhbFwiKTtyZXR1cm4gdGhpcy5sYXlvdXQub3B0aW9ucy5wZXJjZW50UG9zaXRpb24mJiFlP3QvdGhpcy5sYXlvdXQuc2l6ZS53aWR0aCoxMDArXCIlXCI6dCtcInB4XCJ9LGQuZ2V0WVZhbHVlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJob3Jpem9udGFsXCIpO3JldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiYmZT90L3RoaXMubGF5b3V0LnNpemUuaGVpZ2h0KjEwMCtcIiVcIjp0K1wicHhcIn0sZC5fdHJhbnNpdGlvblRvPWZ1bmN0aW9uKHQsZSl7dGhpcy5nZXRQb3NpdGlvbigpO3ZhciBpPXRoaXMucG9zaXRpb24ueCxvPXRoaXMucG9zaXRpb24ueSxuPXQ9PXRoaXMucG9zaXRpb24ueCYmZT09dGhpcy5wb3NpdGlvbi55O2lmKHRoaXMuc2V0UG9zaXRpb24odCxlKSxuJiYhdGhpcy5pc1RyYW5zaXRpb25pbmcpcmV0dXJuIHZvaWQgdGhpcy5sYXlvdXRQb3NpdGlvbigpO3ZhciBzPXQtaSxyPWUtbyxhPXt9O2EudHJhbnNmb3JtPXRoaXMuZ2V0VHJhbnNsYXRlKHMsciksdGhpcy50cmFuc2l0aW9uKHt0bzphLG9uVHJhbnNpdGlvbkVuZDp7dHJhbnNmb3JtOnRoaXMubGF5b3V0UG9zaXRpb259LGlzQ2xlYW5pbmc6ITB9KX0sZC5nZXRUcmFuc2xhdGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmxheW91dC5fZ2V0T3B0aW9uKFwib3JpZ2luTGVmdFwiKSxvPXRoaXMubGF5b3V0Ll9nZXRPcHRpb24oXCJvcmlnaW5Ub3BcIik7cmV0dXJuIHQ9aT90Oi10LGU9bz9lOi1lLFwidHJhbnNsYXRlM2QoXCIrdCtcInB4LCBcIitlK1wicHgsIDApXCJ9LGQuZ29Ubz1mdW5jdGlvbih0LGUpe3RoaXMuc2V0UG9zaXRpb24odCxlKSx0aGlzLmxheW91dFBvc2l0aW9uKCl9LGQubW92ZVRvPWQuX3RyYW5zaXRpb25UbyxkLnNldFBvc2l0aW9uPWZ1bmN0aW9uKHQsZSl7dGhpcy5wb3NpdGlvbi54PXBhcnNlRmxvYXQodCksdGhpcy5wb3NpdGlvbi55PXBhcnNlRmxvYXQoZSl9LGQuX25vblRyYW5zaXRpb249ZnVuY3Rpb24odCl7dGhpcy5jc3ModC50byksdC5pc0NsZWFuaW5nJiZ0aGlzLl9yZW1vdmVTdHlsZXModC50byk7Zm9yKHZhciBlIGluIHQub25UcmFuc2l0aW9uRW5kKXQub25UcmFuc2l0aW9uRW5kW2VdLmNhbGwodGhpcyl9LGQudHJhbnNpdGlvbj1mdW5jdGlvbih0KXtpZighcGFyc2VGbG9hdCh0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbikpcmV0dXJuIHZvaWQgdGhpcy5fbm9uVHJhbnNpdGlvbih0KTt2YXIgZT10aGlzLl90cmFuc247Zm9yKHZhciBpIGluIHQub25UcmFuc2l0aW9uRW5kKWUub25FbmRbaV09dC5vblRyYW5zaXRpb25FbmRbaV07Zm9yKGkgaW4gdC50byllLmluZ1Byb3BlcnRpZXNbaV09ITAsdC5pc0NsZWFuaW5nJiYoZS5jbGVhbltpXT0hMCk7aWYodC5mcm9tKXt0aGlzLmNzcyh0LmZyb20pO3ZhciBvPXRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7bz1udWxsfXRoaXMuZW5hYmxlVHJhbnNpdGlvbih0LnRvKSx0aGlzLmNzcyh0LnRvKSx0aGlzLmlzVHJhbnNpdGlvbmluZz0hMH07dmFyIGw9XCJvcGFjaXR5LFwiK24oYSk7ZC5lbmFibGVUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNUcmFuc2l0aW9uaW5nKXt2YXIgdD10aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjt0PVwibnVtYmVyXCI9PXR5cGVvZiB0P3QrXCJtc1wiOnQsdGhpcy5jc3Moe3RyYW5zaXRpb25Qcm9wZXJ0eTpsLHRyYW5zaXRpb25EdXJhdGlvbjp0LHRyYW5zaXRpb25EZWxheTp0aGlzLnN0YWdnZXJEZWxheXx8MH0pLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHUsdGhpcywhMSl9fSxkLm9ud2Via2l0VHJhbnNpdGlvbkVuZD1mdW5jdGlvbih0KXt0aGlzLm9udHJhbnNpdGlvbmVuZCh0KX0sZC5vbm90cmFuc2l0aW9uZW5kPWZ1bmN0aW9uKHQpe3RoaXMub250cmFuc2l0aW9uZW5kKHQpfTt2YXIgZj17XCItd2Via2l0LXRyYW5zZm9ybVwiOlwidHJhbnNmb3JtXCJ9O2Qub250cmFuc2l0aW9uZW5kPWZ1bmN0aW9uKHQpe2lmKHQudGFyZ2V0PT09dGhpcy5lbGVtZW50KXt2YXIgZT10aGlzLl90cmFuc24sbz1mW3QucHJvcGVydHlOYW1lXXx8dC5wcm9wZXJ0eU5hbWU7aWYoZGVsZXRlIGUuaW5nUHJvcGVydGllc1tvXSxpKGUuaW5nUHJvcGVydGllcykmJnRoaXMuZGlzYWJsZVRyYW5zaXRpb24oKSxvIGluIGUuY2xlYW4mJih0aGlzLmVsZW1lbnQuc3R5bGVbdC5wcm9wZXJ0eU5hbWVdPVwiXCIsZGVsZXRlIGUuY2xlYW5bb10pLG8gaW4gZS5vbkVuZCl7dmFyIG49ZS5vbkVuZFtvXTtuLmNhbGwodGhpcyksZGVsZXRlIGUub25FbmRbb119dGhpcy5lbWl0RXZlbnQoXCJ0cmFuc2l0aW9uRW5kXCIsW3RoaXNdKX19LGQuZGlzYWJsZVRyYW5zaXRpb249ZnVuY3Rpb24oKXt0aGlzLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMoKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih1LHRoaXMsITEpLHRoaXMuaXNUcmFuc2l0aW9uaW5nPSExfSxkLl9yZW1vdmVTdHlsZXM9ZnVuY3Rpb24odCl7dmFyIGU9e307Zm9yKHZhciBpIGluIHQpZVtpXT1cIlwiO3RoaXMuY3NzKGUpfTt2YXIgYz17dHJhbnNpdGlvblByb3BlcnR5OlwiXCIsdHJhbnNpdGlvbkR1cmF0aW9uOlwiXCIsdHJhbnNpdGlvbkRlbGF5OlwiXCJ9O3JldHVybiBkLnJlbW92ZVRyYW5zaXRpb25TdHlsZXM9ZnVuY3Rpb24oKXt0aGlzLmNzcyhjKX0sZC5zdGFnZ2VyPWZ1bmN0aW9uKHQpe3Q9aXNOYU4odCk/MDp0LHRoaXMuc3RhZ2dlckRlbGF5PXQrXCJtc1wifSxkLnJlbW92ZUVsZW09ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpLHRoaXMuY3NzKHtkaXNwbGF5OlwiXCJ9KSx0aGlzLmVtaXRFdmVudChcInJlbW92ZVwiLFt0aGlzXSl9LGQucmVtb3ZlPWZ1bmN0aW9uKCl7cmV0dXJuIHImJnBhcnNlRmxvYXQodGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24pPyh0aGlzLm9uY2UoXCJ0cmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXt0aGlzLnJlbW92ZUVsZW0oKX0pLHZvaWQgdGhpcy5oaWRlKCkpOnZvaWQgdGhpcy5yZW1vdmVFbGVtKCl9LGQucmV2ZWFsPWZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXMuaXNIaWRkZW4sdGhpcy5jc3Moe2Rpc3BsYXk6XCJcIn0pO3ZhciB0PXRoaXMubGF5b3V0Lm9wdGlvbnMsZT17fSxpPXRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eShcInZpc2libGVTdHlsZVwiKTtlW2ldPXRoaXMub25SZXZlYWxUcmFuc2l0aW9uRW5kLHRoaXMudHJhbnNpdGlvbih7ZnJvbTp0LmhpZGRlblN0eWxlLHRvOnQudmlzaWJsZVN0eWxlLGlzQ2xlYW5pbmc6ITAsb25UcmFuc2l0aW9uRW5kOmV9KX0sZC5vblJldmVhbFRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oKXt0aGlzLmlzSGlkZGVufHx0aGlzLmVtaXRFdmVudChcInJldmVhbFwiKX0sZC5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubGF5b3V0Lm9wdGlvbnNbdF07aWYoZS5vcGFjaXR5KXJldHVyblwib3BhY2l0eVwiO2Zvcih2YXIgaSBpbiBlKXJldHVybiBpfSxkLmhpZGU9ZnVuY3Rpb24oKXt0aGlzLmlzSGlkZGVuPSEwLHRoaXMuY3NzKHtkaXNwbGF5OlwiXCJ9KTt2YXIgdD10aGlzLmxheW91dC5vcHRpb25zLGU9e30saT10aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoXCJoaWRkZW5TdHlsZVwiKTtlW2ldPXRoaXMub25IaWRlVHJhbnNpdGlvbkVuZCx0aGlzLnRyYW5zaXRpb24oe2Zyb206dC52aXNpYmxlU3R5bGUsdG86dC5oaWRkZW5TdHlsZSxpc0NsZWFuaW5nOiEwLG9uVHJhbnNpdGlvbkVuZDplfSl9LGQub25IaWRlVHJhbnNpdGlvbkVuZD1mdW5jdGlvbigpe3RoaXMuaXNIaWRkZW4mJih0aGlzLmNzcyh7ZGlzcGxheTpcIm5vbmVcIn0pLHRoaXMuZW1pdEV2ZW50KFwiaGlkZVwiKSl9LGQuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuY3NzKHtwb3NpdGlvbjpcIlwiLGxlZnQ6XCJcIixyaWdodDpcIlwiLHRvcDpcIlwiLGJvdHRvbTpcIlwiLHRyYW5zaXRpb246XCJcIix0cmFuc2Zvcm06XCJcIn0pfSxvfSksZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwib3V0bGF5ZXIvb3V0bGF5ZXJcIixbXCJldi1lbWl0dGVyL2V2LWVtaXR0ZXJcIixcImdldC1zaXplL2dldC1zaXplXCIsXCJmaXp6eS11aS11dGlscy91dGlsc1wiLFwiLi9pdGVtXCJdLGZ1bmN0aW9uKGksbyxuLHMpe3JldHVybiBlKHQsaSxvLG4scyl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHQscmVxdWlyZShcImV2LWVtaXR0ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpLHJlcXVpcmUoXCJmaXp6eS11aS11dGlsc1wiKSxyZXF1aXJlKFwiLi9pdGVtXCIpKTp0Lk91dGxheWVyPWUodCx0LkV2RW1pdHRlcix0LmdldFNpemUsdC5maXp6eVVJVXRpbHMsdC5PdXRsYXllci5JdGVtKX0od2luZG93LGZ1bmN0aW9uKHQsZSxpLG8sbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyh0LGUpe3ZhciBpPW8uZ2V0UXVlcnlFbGVtZW50KHQpO2lmKCFpKXJldHVybiB2b2lkKHUmJnUuZXJyb3IoXCJCYWQgZWxlbWVudCBmb3IgXCIrdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UrXCI6IFwiKyhpfHx0KSkpO3RoaXMuZWxlbWVudD1pLGgmJih0aGlzLiRlbGVtZW50PWgodGhpcy5lbGVtZW50KSksdGhpcy5vcHRpb25zPW8uZXh0ZW5kKHt9LHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdHMpLHRoaXMub3B0aW9uKGUpO3ZhciBuPSsrbDt0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEPW4sZltuXT10aGlzLHRoaXMuX2NyZWF0ZSgpO3ZhciBzPXRoaXMuX2dldE9wdGlvbihcImluaXRMYXlvdXRcIik7cyYmdGhpcy5sYXlvdXQoKX1mdW5jdGlvbiByKHQpe2Z1bmN0aW9uIGUoKXt0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksZS5wcm90b3R5cGUuY29uc3RydWN0b3I9ZSxlfWZ1bmN0aW9uIGEodCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpcmV0dXJuIHQ7dmFyIGU9dC5tYXRjaCgvKF5cXGQqXFwuP1xcZCopKFxcdyopLyksaT1lJiZlWzFdLG89ZSYmZVsyXTtpZighaS5sZW5ndGgpcmV0dXJuIDA7aT1wYXJzZUZsb2F0KGkpO3ZhciBuPW1bb118fDE7cmV0dXJuIGkqbn12YXIgdT10LmNvbnNvbGUsaD10LmpRdWVyeSxkPWZ1bmN0aW9uKCl7fSxsPTAsZj17fTtzLm5hbWVzcGFjZT1cIm91dGxheWVyXCIscy5JdGVtPW4scy5kZWZhdWx0cz17Y29udGFpbmVyU3R5bGU6e3Bvc2l0aW9uOlwicmVsYXRpdmVcIn0saW5pdExheW91dDohMCxvcmlnaW5MZWZ0OiEwLG9yaWdpblRvcDohMCxyZXNpemU6ITAscmVzaXplQ29udGFpbmVyOiEwLHRyYW5zaXRpb25EdXJhdGlvbjpcIjAuNHNcIixoaWRkZW5TdHlsZTp7b3BhY2l0eTowLHRyYW5zZm9ybTpcInNjYWxlKDAuMDAxKVwifSx2aXNpYmxlU3R5bGU6e29wYWNpdHk6MSx0cmFuc2Zvcm06XCJzY2FsZSgxKVwifX07dmFyIGM9cy5wcm90b3R5cGU7by5leHRlbmQoYyxlLnByb3RvdHlwZSksYy5vcHRpb249ZnVuY3Rpb24odCl7by5leHRlbmQodGhpcy5vcHRpb25zLHQpfSxjLl9nZXRPcHRpb249ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb25zdHJ1Y3Rvci5jb21wYXRPcHRpb25zW3RdO3JldHVybiBlJiZ2b2lkIDAhPT10aGlzLm9wdGlvbnNbZV0/dGhpcy5vcHRpb25zW2VdOnRoaXMub3B0aW9uc1t0XX0scy5jb21wYXRPcHRpb25zPXtpbml0TGF5b3V0OlwiaXNJbml0TGF5b3V0XCIsaG9yaXpvbnRhbDpcImlzSG9yaXpvbnRhbFwiLGxheW91dEluc3RhbnQ6XCJpc0xheW91dEluc3RhbnRcIixvcmlnaW5MZWZ0OlwiaXNPcmlnaW5MZWZ0XCIsb3JpZ2luVG9wOlwiaXNPcmlnaW5Ub3BcIixyZXNpemU6XCJpc1Jlc2l6ZUJvdW5kXCIscmVzaXplQ29udGFpbmVyOlwiaXNSZXNpemluZ0NvbnRhaW5lclwifSxjLl9jcmVhdGU9ZnVuY3Rpb24oKXt0aGlzLnJlbG9hZEl0ZW1zKCksdGhpcy5zdGFtcHM9W10sdGhpcy5zdGFtcCh0aGlzLm9wdGlvbnMuc3RhbXApLG8uZXh0ZW5kKHRoaXMuZWxlbWVudC5zdHlsZSx0aGlzLm9wdGlvbnMuY29udGFpbmVyU3R5bGUpO3ZhciB0PXRoaXMuX2dldE9wdGlvbihcInJlc2l6ZVwiKTt0JiZ0aGlzLmJpbmRSZXNpemUoKX0sYy5yZWxvYWRJdGVtcz1mdW5jdGlvbigpe3RoaXMuaXRlbXM9dGhpcy5faXRlbWl6ZSh0aGlzLmVsZW1lbnQuY2hpbGRyZW4pfSxjLl9pdGVtaXplPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzKHQpLGk9dGhpcy5jb25zdHJ1Y3Rvci5JdGVtLG89W10sbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcz1lW25dLHI9bmV3IGkocyx0aGlzKTtvLnB1c2gocil9cmV0dXJuIG99LGMuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHM9ZnVuY3Rpb24odCl7cmV0dXJuIG8uZmlsdGVyRmluZEVsZW1lbnRzKHQsdGhpcy5vcHRpb25zLml0ZW1TZWxlY3Rvcil9LGMuZ2V0SXRlbUVsZW1lbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlbXMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LmVsZW1lbnR9KX0sYy5sYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLl9yZXNldExheW91dCgpLHRoaXMuX21hbmFnZVN0YW1wcygpO3ZhciB0PXRoaXMuX2dldE9wdGlvbihcImxheW91dEluc3RhbnRcIiksZT12b2lkIDAhPT10P3Q6IXRoaXMuX2lzTGF5b3V0SW5pdGVkO3RoaXMubGF5b3V0SXRlbXModGhpcy5pdGVtcyxlKSx0aGlzLl9pc0xheW91dEluaXRlZD0hMH0sYy5faW5pdD1jLmxheW91dCxjLl9yZXNldExheW91dD1mdW5jdGlvbigpe3RoaXMuZ2V0U2l6ZSgpfSxjLmdldFNpemU9ZnVuY3Rpb24oKXt0aGlzLnNpemU9aSh0aGlzLmVsZW1lbnQpfSxjLl9nZXRNZWFzdXJlbWVudD1mdW5jdGlvbih0LGUpe3ZhciBvLG49dGhpcy5vcHRpb25zW3RdO24/KFwic3RyaW5nXCI9PXR5cGVvZiBuP289dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Iobik6biBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiYobz1uKSx0aGlzW3RdPW8/aShvKVtlXTpuKTp0aGlzW3RdPTB9LGMubGF5b3V0SXRlbXM9ZnVuY3Rpb24odCxlKXt0PXRoaXMuX2dldEl0ZW1zRm9yTGF5b3V0KHQpLHRoaXMuX2xheW91dEl0ZW1zKHQsZSksdGhpcy5fcG9zdExheW91dCgpfSxjLl9nZXRJdGVtc0ZvckxheW91dD1mdW5jdGlvbih0KXtyZXR1cm4gdC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIXQuaXNJZ25vcmVkfSl9LGMuX2xheW91dEl0ZW1zPWZ1bmN0aW9uKHQsZSl7aWYodGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyhcImxheW91dFwiLHQpLHQmJnQubGVuZ3RoKXt2YXIgaT1bXTt0LmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG89dGhpcy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKHQpO28uaXRlbT10LG8uaXNJbnN0YW50PWV8fHQuaXNMYXlvdXRJbnN0YW50LGkucHVzaChvKX0sdGhpcyksdGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKGkpfX0sYy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uPWZ1bmN0aW9uKCl7cmV0dXJue3g6MCx5OjB9fSxjLl9wcm9jZXNzTGF5b3V0UXVldWU9ZnVuY3Rpb24odCl7dGhpcy51cGRhdGVTdGFnZ2VyKCksdC5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7dGhpcy5fcG9zaXRpb25JdGVtKHQuaXRlbSx0LngsdC55LHQuaXNJbnN0YW50LGUpfSx0aGlzKX0sYy51cGRhdGVTdGFnZ2VyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnN0YWdnZXI7cmV0dXJuIG51bGw9PT10fHx2b2lkIDA9PT10P3ZvaWQodGhpcy5zdGFnZ2VyPTApOih0aGlzLnN0YWdnZXI9YSh0KSx0aGlzLnN0YWdnZXIpfSxjLl9wb3NpdGlvbkl0ZW09ZnVuY3Rpb24odCxlLGksbyxuKXtvP3QuZ29UbyhlLGkpOih0LnN0YWdnZXIobip0aGlzLnN0YWdnZXIpLHQubW92ZVRvKGUsaSkpfSxjLl9wb3N0TGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy5yZXNpemVDb250YWluZXIoKX0sYy5yZXNpemVDb250YWluZXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9nZXRPcHRpb24oXCJyZXNpemVDb250YWluZXJcIik7aWYodCl7dmFyIGU9dGhpcy5fZ2V0Q29udGFpbmVyU2l6ZSgpO2UmJih0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKGUud2lkdGgsITApLHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoZS5oZWlnaHQsITEpKX19LGMuX2dldENvbnRhaW5lclNpemU9ZCxjLl9zZXRDb250YWluZXJNZWFzdXJlPWZ1bmN0aW9uKHQsZSl7aWYodm9pZCAwIT09dCl7dmFyIGk9dGhpcy5zaXplO2kuaXNCb3JkZXJCb3gmJih0Kz1lP2kucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQraS5ib3JkZXJMZWZ0V2lkdGgraS5ib3JkZXJSaWdodFdpZHRoOmkucGFkZGluZ0JvdHRvbStpLnBhZGRpbmdUb3AraS5ib3JkZXJUb3BXaWR0aCtpLmJvcmRlckJvdHRvbVdpZHRoKSx0PU1hdGgubWF4KHQsMCksdGhpcy5lbGVtZW50LnN0eWxlW2U/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdPXQrXCJweFwifX0sYy5fZW1pdENvbXBsZXRlT25JdGVtcz1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIGkoKXtuLmRpc3BhdGNoRXZlbnQodCtcIkNvbXBsZXRlXCIsbnVsbCxbZV0pfWZ1bmN0aW9uIG8oKXtyKysscj09cyYmaSgpfXZhciBuPXRoaXMscz1lLmxlbmd0aDtpZighZXx8IXMpcmV0dXJuIHZvaWQgaSgpO3ZhciByPTA7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uub25jZSh0LG8pfSl9LGMuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbih0LGUsaSl7dmFyIG89ZT9bZV0uY29uY2F0KGkpOmk7aWYodGhpcy5lbWl0RXZlbnQodCxvKSxoKWlmKHRoaXMuJGVsZW1lbnQ9dGhpcy4kZWxlbWVudHx8aCh0aGlzLmVsZW1lbnQpLGUpe3ZhciBuPWguRXZlbnQoZSk7bi50eXBlPXQsdGhpcy4kZWxlbWVudC50cmlnZ2VyKG4saSl9ZWxzZSB0aGlzLiRlbGVtZW50LnRyaWdnZXIodCxpKX0sYy5pZ25vcmU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRJdGVtKHQpO2UmJihlLmlzSWdub3JlZD0hMCl9LGMudW5pZ25vcmU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRJdGVtKHQpO2UmJmRlbGV0ZSBlLmlzSWdub3JlZH0sYy5zdGFtcD1mdW5jdGlvbih0KXt0PXRoaXMuX2ZpbmQodCksdCYmKHRoaXMuc3RhbXBzPXRoaXMuc3RhbXBzLmNvbmNhdCh0KSx0LmZvckVhY2godGhpcy5pZ25vcmUsdGhpcykpfSxjLnVuc3RhbXA9ZnVuY3Rpb24odCl7dD10aGlzLl9maW5kKHQpLHQmJnQuZm9yRWFjaChmdW5jdGlvbih0KXtvLnJlbW92ZUZyb20odGhpcy5zdGFtcHMsdCksdGhpcy51bmlnbm9yZSh0KX0sdGhpcyl9LGMuX2ZpbmQ9ZnVuY3Rpb24odCl7aWYodClyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCkpLHQ9by5tYWtlQXJyYXkodCl9LGMuX21hbmFnZVN0YW1wcz1mdW5jdGlvbigpe3RoaXMuc3RhbXBzJiZ0aGlzLnN0YW1wcy5sZW5ndGgmJih0aGlzLl9nZXRCb3VuZGluZ1JlY3QoKSx0aGlzLnN0YW1wcy5mb3JFYWNoKHRoaXMuX21hbmFnZVN0YW1wLHRoaXMpKX0sYy5fZ2V0Qm91bmRpbmdSZWN0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGU9dGhpcy5zaXplO3RoaXMuX2JvdW5kaW5nUmVjdD17bGVmdDp0LmxlZnQrZS5wYWRkaW5nTGVmdCtlLmJvcmRlckxlZnRXaWR0aCx0b3A6dC50b3ArZS5wYWRkaW5nVG9wK2UuYm9yZGVyVG9wV2lkdGgscmlnaHQ6dC5yaWdodC0oZS5wYWRkaW5nUmlnaHQrZS5ib3JkZXJSaWdodFdpZHRoKSxib3R0b206dC5ib3R0b20tKGUucGFkZGluZ0JvdHRvbStlLmJvcmRlckJvdHRvbVdpZHRoKX19LGMuX21hbmFnZVN0YW1wPWQsYy5fZ2V0RWxlbWVudE9mZnNldD1mdW5jdGlvbih0KXt2YXIgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89dGhpcy5fYm91bmRpbmdSZWN0LG49aSh0KSxzPXtsZWZ0OmUubGVmdC1vLmxlZnQtbi5tYXJnaW5MZWZ0LHRvcDplLnRvcC1vLnRvcC1uLm1hcmdpblRvcCxyaWdodDpvLnJpZ2h0LWUucmlnaHQtbi5tYXJnaW5SaWdodCxib3R0b206by5ib3R0b20tZS5ib3R0b20tbi5tYXJnaW5Cb3R0b219O3JldHVybiBzfSxjLmhhbmRsZUV2ZW50PW8uaGFuZGxlRXZlbnQsYy5iaW5kUmVzaXplPWZ1bmN0aW9uKCl7dC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcyksdGhpcy5pc1Jlc2l6ZUJvdW5kPSEwfSxjLnVuYmluZFJlc2l6ZT1mdW5jdGlvbigpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMpLHRoaXMuaXNSZXNpemVCb3VuZD0hMX0sYy5vbnJlc2l6ZT1mdW5jdGlvbigpe3RoaXMucmVzaXplKCl9LG8uZGVib3VuY2VNZXRob2QocyxcIm9ucmVzaXplXCIsMTAwKSxjLnJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNSZXNpemVCb3VuZCYmdGhpcy5uZWVkc1Jlc2l6ZUxheW91dCgpJiZ0aGlzLmxheW91dCgpfSxjLm5lZWRzUmVzaXplTGF5b3V0PWZ1bmN0aW9uKCl7dmFyIHQ9aSh0aGlzLmVsZW1lbnQpLGU9dGhpcy5zaXplJiZ0O3JldHVybiBlJiZ0LmlubmVyV2lkdGghPT10aGlzLnNpemUuaW5uZXJXaWR0aH0sYy5hZGRJdGVtcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9pdGVtaXplKHQpO3JldHVybiBlLmxlbmd0aCYmKHRoaXMuaXRlbXM9dGhpcy5pdGVtcy5jb25jYXQoZSkpLGV9LGMuYXBwZW5kZWQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hZGRJdGVtcyh0KTtlLmxlbmd0aCYmKHRoaXMubGF5b3V0SXRlbXMoZSwhMCksdGhpcy5yZXZlYWwoZSkpfSxjLnByZXBlbmRlZD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9pdGVtaXplKHQpO2lmKGUubGVuZ3RoKXt2YXIgaT10aGlzLml0ZW1zLnNsaWNlKDApO3RoaXMuaXRlbXM9ZS5jb25jYXQoaSksdGhpcy5fcmVzZXRMYXlvdXQoKSx0aGlzLl9tYW5hZ2VTdGFtcHMoKSx0aGlzLmxheW91dEl0ZW1zKGUsITApLHRoaXMucmV2ZWFsKGUpLHRoaXMubGF5b3V0SXRlbXMoaSl9fSxjLnJldmVhbD1mdW5jdGlvbih0KXtpZih0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKFwicmV2ZWFsXCIsdCksdCYmdC5sZW5ndGgpe3ZhciBlPXRoaXMudXBkYXRlU3RhZ2dlcigpO3QuZm9yRWFjaChmdW5jdGlvbih0LGkpe3Quc3RhZ2dlcihpKmUpLHQucmV2ZWFsKCl9KX19LGMuaGlkZT1mdW5jdGlvbih0KXtpZih0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKFwiaGlkZVwiLHQpLHQmJnQubGVuZ3RoKXt2YXIgZT10aGlzLnVwZGF0ZVN0YWdnZXIoKTt0LmZvckVhY2goZnVuY3Rpb24odCxpKXt0LnN0YWdnZXIoaSplKSx0LmhpZGUoKX0pfX0sYy5yZXZlYWxJdGVtRWxlbWVudHM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRJdGVtcyh0KTt0aGlzLnJldmVhbChlKX0sYy5oaWRlSXRlbUVsZW1lbnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0SXRlbXModCk7dGhpcy5oaWRlKGUpfSxjLmdldEl0ZW09ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLml0ZW1zLmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuaXRlbXNbZV07aWYoaS5lbGVtZW50PT10KXJldHVybiBpfX0sYy5nZXRJdGVtcz1mdW5jdGlvbih0KXt0PW8ubWFrZUFycmF5KHQpO3ZhciBlPVtdO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGk9dGhpcy5nZXRJdGVtKHQpO2kmJmUucHVzaChpKX0sdGhpcyksZX0sYy5yZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRJdGVtcyh0KTt0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKFwicmVtb3ZlXCIsZSksZSYmZS5sZW5ndGgmJmUuZm9yRWFjaChmdW5jdGlvbih0KXt0LnJlbW92ZSgpLG8ucmVtb3ZlRnJvbSh0aGlzLml0ZW1zLHQpfSx0aGlzKX0sYy5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5lbGVtZW50LnN0eWxlO3QuaGVpZ2h0PVwiXCIsdC5wb3NpdGlvbj1cIlwiLHQud2lkdGg9XCJcIix0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24odCl7dC5kZXN0cm95KCl9KSx0aGlzLnVuYmluZFJlc2l6ZSgpO3ZhciBlPXRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7ZGVsZXRlIGZbZV0sZGVsZXRlIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQsaCYmaC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSl9LHMuZGF0YT1mdW5jdGlvbih0KXt0PW8uZ2V0UXVlcnlFbGVtZW50KHQpO3ZhciBlPXQmJnQub3V0bGF5ZXJHVUlEO3JldHVybiBlJiZmW2VdfSxzLmNyZWF0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXIocyk7cmV0dXJuIGkuZGVmYXVsdHM9by5leHRlbmQoe30scy5kZWZhdWx0cyksby5leHRlbmQoaS5kZWZhdWx0cyxlKSxpLmNvbXBhdE9wdGlvbnM9by5leHRlbmQoe30scy5jb21wYXRPcHRpb25zKSxpLm5hbWVzcGFjZT10LGkuZGF0YT1zLmRhdGEsaS5JdGVtPXIobiksby5odG1sSW5pdChpLHQpLGgmJmguYnJpZGdldCYmaC5icmlkZ2V0KHQsaSksaX07dmFyIG09e21zOjEsczoxZTN9O3JldHVybiBzLkl0ZW09bixzfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS1sYXlvdXQvanMvaXRlbVwiLFtcIm91dGxheWVyL291dGxheWVyXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcIm91dGxheWVyXCIpKToodC5Jc290b3BlPXQuSXNvdG9wZXx8e30sdC5Jc290b3BlLkl0ZW09ZSh0Lk91dGxheWVyKSl9KHdpbmRvdyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7dC5JdGVtLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgaT1lLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQuSXRlbS5wcm90b3R5cGUpLG89aS5fY3JlYXRlO2kuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMuaWQ9dGhpcy5sYXlvdXQuaXRlbUdVSUQrKyxvLmNhbGwodGhpcyksdGhpcy5zb3J0RGF0YT17fX0saS51cGRhdGVTb3J0RGF0YT1mdW5jdGlvbigpe2lmKCF0aGlzLmlzSWdub3JlZCl7dGhpcy5zb3J0RGF0YS5pZD10aGlzLmlkLHRoaXMuc29ydERhdGFbXCJvcmlnaW5hbC1vcmRlclwiXT10aGlzLmlkLHRoaXMuc29ydERhdGEucmFuZG9tPU1hdGgucmFuZG9tKCk7dmFyIHQ9dGhpcy5sYXlvdXQub3B0aW9ucy5nZXRTb3J0RGF0YSxlPXRoaXMubGF5b3V0Ll9zb3J0ZXJzO2Zvcih2YXIgaSBpbiB0KXt2YXIgbz1lW2ldO3RoaXMuc29ydERhdGFbaV09byh0aGlzLmVsZW1lbnQsdGhpcyl9fX07dmFyIG49aS5kZXN0cm95O3JldHVybiBpLmRlc3Ryb3k9ZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLmNzcyh7ZGlzcGxheTpcIlwifSl9LGV9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZVwiLFtcImdldC1zaXplL2dldC1zaXplXCIsXCJvdXRsYXllci9vdXRsYXllclwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwib3V0bGF5ZXJcIikpOih0Lklzb3RvcGU9dC5Jc290b3BlfHx7fSx0Lklzb3RvcGUuTGF5b3V0TW9kZT1lKHQuZ2V0U2l6ZSx0Lk91dGxheWVyKSl9KHdpbmRvdyxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkodCl7dGhpcy5pc290b3BlPXQsdCYmKHRoaXMub3B0aW9ucz10Lm9wdGlvbnNbdGhpcy5uYW1lc3BhY2VdLHRoaXMuZWxlbWVudD10LmVsZW1lbnQsdGhpcy5pdGVtcz10LmZpbHRlcmVkSXRlbXMsdGhpcy5zaXplPXQuc2l6ZSl9dmFyIG89aS5wcm90b3R5cGUsbj1bXCJfcmVzZXRMYXlvdXRcIixcIl9nZXRJdGVtTGF5b3V0UG9zaXRpb25cIixcIl9tYW5hZ2VTdGFtcFwiLFwiX2dldENvbnRhaW5lclNpemVcIixcIl9nZXRFbGVtZW50T2Zmc2V0XCIsXCJuZWVkc1Jlc2l6ZUxheW91dFwiLFwiX2dldE9wdGlvblwiXTtyZXR1cm4gbi5mb3JFYWNoKGZ1bmN0aW9uKHQpe29bdF09ZnVuY3Rpb24oKXtyZXR1cm4gZS5wcm90b3R5cGVbdF0uYXBwbHkodGhpcy5pc290b3BlLGFyZ3VtZW50cyl9fSksby5uZWVkc1ZlcnRpY2FsUmVzaXplTGF5b3V0PWZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzLmlzb3RvcGUuZWxlbWVudCksaT10aGlzLmlzb3RvcGUuc2l6ZSYmZTtyZXR1cm4gaSYmZS5pbm5lckhlaWdodCE9dGhpcy5pc290b3BlLnNpemUuaW5uZXJIZWlnaHR9LG8uX2dldE1lYXN1cmVtZW50PWZ1bmN0aW9uKCl7dGhpcy5pc290b3BlLl9nZXRNZWFzdXJlbWVudC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LG8uZ2V0Q29sdW1uV2lkdGg9ZnVuY3Rpb24oKXt0aGlzLmdldFNlZ21lbnRTaXplKFwiY29sdW1uXCIsXCJXaWR0aFwiKX0sby5nZXRSb3dIZWlnaHQ9ZnVuY3Rpb24oKXt0aGlzLmdldFNlZ21lbnRTaXplKFwicm93XCIsXCJIZWlnaHRcIil9LG8uZ2V0U2VnbWVudFNpemU9ZnVuY3Rpb24odCxlKXt2YXIgaT10K2Usbz1cIm91dGVyXCIrZTtpZih0aGlzLl9nZXRNZWFzdXJlbWVudChpLG8pLCF0aGlzW2ldKXt2YXIgbj10aGlzLmdldEZpcnN0SXRlbVNpemUoKTt0aGlzW2ldPW4mJm5bb118fHRoaXMuaXNvdG9wZS5zaXplW1wiaW5uZXJcIitlXX19LG8uZ2V0Rmlyc3RJdGVtU2l6ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMuaXNvdG9wZS5maWx0ZXJlZEl0ZW1zWzBdO3JldHVybiBlJiZlLmVsZW1lbnQmJnQoZS5lbGVtZW50KX0sby5sYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLmlzb3RvcGUubGF5b3V0LmFwcGx5KHRoaXMuaXNvdG9wZSxhcmd1bWVudHMpfSxvLmdldFNpemU9ZnVuY3Rpb24oKXt0aGlzLmlzb3RvcGUuZ2V0U2l6ZSgpLHRoaXMuc2l6ZT10aGlzLmlzb3RvcGUuc2l6ZX0saS5tb2Rlcz17fSxpLmNyZWF0ZT1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXtpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gbi5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShvKSxuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1uLGUmJihuLm9wdGlvbnM9ZSksbi5wcm90b3R5cGUubmFtZXNwYWNlPXQsaS5tb2Rlc1t0XT1uLG59LGl9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJtYXNvbnJ5LWxheW91dC9tYXNvbnJ5XCIsW1wib3V0bGF5ZXIvb3V0bGF5ZXJcIixcImdldC1zaXplL2dldC1zaXplXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcIm91dGxheWVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSk6dC5NYXNvbnJ5PWUodC5PdXRsYXllcix0LmdldFNpemUpfSh3aW5kb3csZnVuY3Rpb24odCxlKXt2YXIgaT10LmNyZWF0ZShcIm1hc29ucnlcIik7aS5jb21wYXRPcHRpb25zLmZpdFdpZHRoPVwiaXNGaXRXaWR0aFwiO3ZhciBvPWkucHJvdG90eXBlO3JldHVybiBvLl9yZXNldExheW91dD1mdW5jdGlvbigpe3RoaXMuZ2V0U2l6ZSgpLHRoaXMuX2dldE1lYXN1cmVtZW50KFwiY29sdW1uV2lkdGhcIixcIm91dGVyV2lkdGhcIiksdGhpcy5fZ2V0TWVhc3VyZW1lbnQoXCJndXR0ZXJcIixcIm91dGVyV2lkdGhcIiksdGhpcy5tZWFzdXJlQ29sdW1ucygpLHRoaXMuY29sWXM9W107Zm9yKHZhciB0PTA7dDx0aGlzLmNvbHM7dCsrKXRoaXMuY29sWXMucHVzaCgwKTt0aGlzLm1heFk9MCx0aGlzLmhvcml6b250YWxDb2xJbmRleD0wfSxvLm1lYXN1cmVDb2x1bW5zPWZ1bmN0aW9uKCl7aWYodGhpcy5nZXRDb250YWluZXJXaWR0aCgpLCF0aGlzLmNvbHVtbldpZHRoKXt2YXIgdD10aGlzLml0ZW1zWzBdLGk9dCYmdC5lbGVtZW50O3RoaXMuY29sdW1uV2lkdGg9aSYmZShpKS5vdXRlcldpZHRofHx0aGlzLmNvbnRhaW5lcldpZHRofXZhciBvPXRoaXMuY29sdW1uV2lkdGgrPXRoaXMuZ3V0dGVyLG49dGhpcy5jb250YWluZXJXaWR0aCt0aGlzLmd1dHRlcixzPW4vbyxyPW8tbiVvLGE9ciYmcjwxP1wicm91bmRcIjpcImZsb29yXCI7cz1NYXRoW2FdKHMpLHRoaXMuY29scz1NYXRoLm1heChzLDEpfSxvLmdldENvbnRhaW5lcldpZHRoPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fZ2V0T3B0aW9uKFwiZml0V2lkdGhcIiksaT10P3RoaXMuZWxlbWVudC5wYXJlbnROb2RlOnRoaXMuZWxlbWVudCxvPWUoaSk7dGhpcy5jb250YWluZXJXaWR0aD1vJiZvLmlubmVyV2lkdGh9LG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbih0KXt0LmdldFNpemUoKTt2YXIgZT10LnNpemUub3V0ZXJXaWR0aCV0aGlzLmNvbHVtbldpZHRoLGk9ZSYmZTwxP1wicm91bmRcIjpcImNlaWxcIixvPU1hdGhbaV0odC5zaXplLm91dGVyV2lkdGgvdGhpcy5jb2x1bW5XaWR0aCk7bz1NYXRoLm1pbihvLHRoaXMuY29scyk7Zm9yKHZhciBuPXRoaXMub3B0aW9ucy5ob3Jpem9udGFsT3JkZXI/XCJfZ2V0SG9yaXpvbnRhbENvbFBvc2l0aW9uXCI6XCJfZ2V0VG9wQ29sUG9zaXRpb25cIixzPXRoaXNbbl0obyx0KSxyPXt4OnRoaXMuY29sdW1uV2lkdGgqcy5jb2wseTpzLnl9LGE9cy55K3Quc2l6ZS5vdXRlckhlaWdodCx1PW8rcy5jb2wsaD1zLmNvbDtoPHU7aCsrKXRoaXMuY29sWXNbaF09YTtyZXR1cm4gcn0sby5fZ2V0VG9wQ29sUG9zaXRpb249ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fZ2V0VG9wQ29sR3JvdXAodCksaT1NYXRoLm1pbi5hcHBseShNYXRoLGUpO3JldHVybntjb2w6ZS5pbmRleE9mKGkpLHk6aX19LG8uX2dldFRvcENvbEdyb3VwPWZ1bmN0aW9uKHQpe2lmKHQ8MilyZXR1cm4gdGhpcy5jb2xZcztmb3IodmFyIGU9W10saT10aGlzLmNvbHMrMS10LG89MDtvPGk7bysrKWVbb109dGhpcy5fZ2V0Q29sR3JvdXBZKG8sdCk7cmV0dXJuIGV9LG8uX2dldENvbEdyb3VwWT1mdW5jdGlvbih0LGUpe2lmKGU8MilyZXR1cm4gdGhpcy5jb2xZc1t0XTt2YXIgaT10aGlzLmNvbFlzLnNsaWNlKHQsdCtlKTtyZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCxpKX0sby5fZ2V0SG9yaXpvbnRhbENvbFBvc2l0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5ob3Jpem9udGFsQ29sSW5kZXgldGhpcy5jb2xzLG89dD4xJiZpK3Q+dGhpcy5jb2xzO2k9bz8wOmk7dmFyIG49ZS5zaXplLm91dGVyV2lkdGgmJmUuc2l6ZS5vdXRlckhlaWdodDtyZXR1cm4gdGhpcy5ob3Jpem9udGFsQ29sSW5kZXg9bj9pK3Q6dGhpcy5ob3Jpem9udGFsQ29sSW5kZXgse2NvbDppLHk6dGhpcy5fZ2V0Q29sR3JvdXBZKGksdCl9fSxvLl9tYW5hZ2VTdGFtcD1mdW5jdGlvbih0KXt2YXIgaT1lKHQpLG89dGhpcy5fZ2V0RWxlbWVudE9mZnNldCh0KSxuPXRoaXMuX2dldE9wdGlvbihcIm9yaWdpbkxlZnRcIikscz1uP28ubGVmdDpvLnJpZ2h0LHI9cytpLm91dGVyV2lkdGgsYT1NYXRoLmZsb29yKHMvdGhpcy5jb2x1bW5XaWR0aCk7YT1NYXRoLm1heCgwLGEpO3ZhciB1PU1hdGguZmxvb3Ioci90aGlzLmNvbHVtbldpZHRoKTt1LT1yJXRoaXMuY29sdW1uV2lkdGg/MDoxLHU9TWF0aC5taW4odGhpcy5jb2xzLTEsdSk7Zm9yKHZhciBoPXRoaXMuX2dldE9wdGlvbihcIm9yaWdpblRvcFwiKSxkPShoP28udG9wOm8uYm90dG9tKStpLm91dGVySGVpZ2h0LGw9YTtsPD11O2wrKyl0aGlzLmNvbFlzW2xdPU1hdGgubWF4KGQsdGhpcy5jb2xZc1tsXSl9LG8uX2dldENvbnRhaW5lclNpemU9ZnVuY3Rpb24oKXt0aGlzLm1heFk9TWF0aC5tYXguYXBwbHkoTWF0aCx0aGlzLmNvbFlzKTt2YXIgdD17aGVpZ2h0OnRoaXMubWF4WX07cmV0dXJuIHRoaXMuX2dldE9wdGlvbihcImZpdFdpZHRoXCIpJiYodC53aWR0aD10aGlzLl9nZXRDb250YWluZXJGaXRXaWR0aCgpKSx0fSxvLl9nZXRDb250YWluZXJGaXRXaWR0aD1mdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9dGhpcy5jb2xzOy0tZSYmMD09PXRoaXMuY29sWXNbZV07KXQrKztyZXR1cm4odGhpcy5jb2xzLXQpKnRoaXMuY29sdW1uV2lkdGgtdGhpcy5ndXR0ZXJ9LG8ubmVlZHNSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNvbnRhaW5lcldpZHRoO3JldHVybiB0aGlzLmdldENvbnRhaW5lcldpZHRoKCksdCE9dGhpcy5jb250YWluZXJXaWR0aH0saX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5XCIsW1wiLi4vbGF5b3V0LW1vZGVcIixcIm1hc29ucnktbGF5b3V0L21hc29ucnlcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwiLi4vbGF5b3V0LW1vZGVcIikscmVxdWlyZShcIm1hc29ucnktbGF5b3V0XCIpKTplKHQuSXNvdG9wZS5MYXlvdXRNb2RlLHQuTWFzb25yeSl9KHdpbmRvdyxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3ZhciBpPXQuY3JlYXRlKFwibWFzb25yeVwiKSxvPWkucHJvdG90eXBlLG49e19nZXRFbGVtZW50T2Zmc2V0OiEwLGxheW91dDohMCxfZ2V0TWVhc3VyZW1lbnQ6ITB9O2Zvcih2YXIgcyBpbiBlLnByb3RvdHlwZSluW3NdfHwob1tzXT1lLnByb3RvdHlwZVtzXSk7dmFyIHI9by5tZWFzdXJlQ29sdW1ucztvLm1lYXN1cmVDb2x1bW5zPWZ1bmN0aW9uKCl7dGhpcy5pdGVtcz10aGlzLmlzb3RvcGUuZmlsdGVyZWRJdGVtcyxyLmNhbGwodGhpcyl9O3ZhciBhPW8uX2dldE9wdGlvbjtyZXR1cm4gby5fZ2V0T3B0aW9uPWZ1bmN0aW9uKHQpe3JldHVyblwiZml0V2lkdGhcIj09dD92b2lkIDAhPT10aGlzLm9wdGlvbnMuaXNGaXRXaWR0aD90aGlzLm9wdGlvbnMuaXNGaXRXaWR0aDp0aGlzLm9wdGlvbnMuZml0V2lkdGg6YS5hcHBseSh0aGlzLmlzb3RvcGUsYXJndW1lbnRzKX0saX0pLGZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9maXQtcm93c1wiLFtcIi4uL2xheW91dC1tb2RlXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcIi4uL2xheW91dC1tb2RlXCIpKTplKHQuSXNvdG9wZS5MYXlvdXRNb2RlKX0od2luZG93LGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3ZhciBlPXQuY3JlYXRlKFwiZml0Um93c1wiKSxpPWUucHJvdG90eXBlO3JldHVybiBpLl9yZXNldExheW91dD1mdW5jdGlvbigpe3RoaXMueD0wLHRoaXMueT0wLHRoaXMubWF4WT0wLHRoaXMuX2dldE1lYXN1cmVtZW50KFwiZ3V0dGVyXCIsXCJvdXRlcldpZHRoXCIpfSxpLl9nZXRJdGVtTGF5b3V0UG9zaXRpb249ZnVuY3Rpb24odCl7dC5nZXRTaXplKCk7dmFyIGU9dC5zaXplLm91dGVyV2lkdGgrdGhpcy5ndXR0ZXIsaT10aGlzLmlzb3RvcGUuc2l6ZS5pbm5lcldpZHRoK3RoaXMuZ3V0dGVyOzAhPT10aGlzLngmJmUrdGhpcy54PmkmJih0aGlzLng9MCx0aGlzLnk9dGhpcy5tYXhZKTt2YXIgbz17eDp0aGlzLngseTp0aGlzLnl9O3JldHVybiB0aGlzLm1heFk9TWF0aC5tYXgodGhpcy5tYXhZLHRoaXMueSt0LnNpemUub3V0ZXJIZWlnaHQpLHRoaXMueCs9ZSxvfSxpLl9nZXRDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7cmV0dXJue2hlaWdodDp0aGlzLm1heFl9fSxlfSksZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL3ZlcnRpY2FsXCIsW1wiLi4vbGF5b3V0LW1vZGVcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwiLi4vbGF5b3V0LW1vZGVcIikpOmUodC5Jc290b3BlLkxheW91dE1vZGUpfSh3aW5kb3csZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9dC5jcmVhdGUoXCJ2ZXJ0aWNhbFwiLHtob3Jpem9udGFsQWxpZ25tZW50OjB9KSxpPWUucHJvdG90eXBlO3JldHVybiBpLl9yZXNldExheW91dD1mdW5jdGlvbigpe3RoaXMueT0wfSxpLl9nZXRJdGVtTGF5b3V0UG9zaXRpb249ZnVuY3Rpb24odCl7dC5nZXRTaXplKCk7dmFyIGU9KHRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGgtdC5zaXplLm91dGVyV2lkdGgpKnRoaXMub3B0aW9ucy5ob3Jpem9udGFsQWxpZ25tZW50LGk9dGhpcy55O3JldHVybiB0aGlzLnkrPXQuc2l6ZS5vdXRlckhlaWdodCx7eDplLHk6aX19LGkuX2dldENvbnRhaW5lclNpemU9ZnVuY3Rpb24oKXtyZXR1cm57aGVpZ2h0OnRoaXMueX19LGV9KSxmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wib3V0bGF5ZXIvb3V0bGF5ZXJcIixcImdldC1zaXplL2dldC1zaXplXCIsXCJkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3JcIixcImZpenp5LXVpLXV0aWxzL3V0aWxzXCIsXCJpc290b3BlLWxheW91dC9qcy9pdGVtXCIsXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZVwiLFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL21hc29ucnlcIixcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9maXQtcm93c1wiLFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL3ZlcnRpY2FsXCJdLGZ1bmN0aW9uKGksbyxuLHMscixhKXtyZXR1cm4gZSh0LGksbyxuLHMscixhKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUodCxyZXF1aXJlKFwib3V0bGF5ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpLHJlcXVpcmUoXCJkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yXCIpLHJlcXVpcmUoXCJmaXp6eS11aS11dGlsc1wiKSxyZXF1aXJlKFwiaXNvdG9wZS1sYXlvdXQvanMvaXRlbVwiKSxyZXF1aXJlKFwiaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVcIikscmVxdWlyZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5XCIpLHJlcXVpcmUoXCJpc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvZml0LXJvd3NcIikscmVxdWlyZShcImlzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy92ZXJ0aWNhbFwiKSk6dC5Jc290b3BlPWUodCx0Lk91dGxheWVyLHQuZ2V0U2l6ZSx0Lm1hdGNoZXNTZWxlY3Rvcix0LmZpenp5VUlVdGlscyx0Lklzb3RvcGUuSXRlbSx0Lklzb3RvcGUuTGF5b3V0TW9kZSl9KHdpbmRvdyxmdW5jdGlvbih0LGUsaSxvLG4scyxyKXtmdW5jdGlvbiBhKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKGksbyl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBzPXRbbl0scj1pLnNvcnREYXRhW3NdLGE9by5zb3J0RGF0YVtzXTtpZihyPmF8fHI8YSl7dmFyIHU9dm9pZCAwIT09ZVtzXT9lW3NdOmUsaD11PzE6LTE7cmV0dXJuKHI+YT8xOi0xKSpofX1yZXR1cm4gMH19dmFyIHU9dC5qUXVlcnksaD1TdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24odCl7cmV0dXJuIHQudHJpbSgpfTpmdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxkPWUuY3JlYXRlKFwiaXNvdG9wZVwiLHtsYXlvdXRNb2RlOlwibWFzb25yeVwiLGlzSlF1ZXJ5RmlsdGVyaW5nOiEwLHNvcnRBc2NlbmRpbmc6ITB9KTtkLkl0ZW09cyxkLkxheW91dE1vZGU9cjt2YXIgbD1kLnByb3RvdHlwZTtsLl9jcmVhdGU9ZnVuY3Rpb24oKXt0aGlzLml0ZW1HVUlEPTAsdGhpcy5fc29ydGVycz17fSx0aGlzLl9nZXRTb3J0ZXJzKCksZS5wcm90b3R5cGUuX2NyZWF0ZS5jYWxsKHRoaXMpLHRoaXMubW9kZXM9e30sdGhpcy5maWx0ZXJlZEl0ZW1zPXRoaXMuaXRlbXMsdGhpcy5zb3J0SGlzdG9yeT1bXCJvcmlnaW5hbC1vcmRlclwiXTtmb3IodmFyIHQgaW4gci5tb2Rlcyl0aGlzLl9pbml0TGF5b3V0TW9kZSh0KX0sbC5yZWxvYWRJdGVtcz1mdW5jdGlvbigpe3RoaXMuaXRlbUdVSUQ9MCxlLnByb3RvdHlwZS5yZWxvYWRJdGVtcy5jYWxsKHRoaXMpfSxsLl9pdGVtaXplPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWUucHJvdG90eXBlLl9pdGVtaXplLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBvPXRbaV07by5pZD10aGlzLml0ZW1HVUlEKyt9cmV0dXJuIHRoaXMuX3VwZGF0ZUl0ZW1zU29ydERhdGEodCksdH0sbC5faW5pdExheW91dE1vZGU9ZnVuY3Rpb24odCl7dmFyIGU9ci5tb2Rlc1t0XSxpPXRoaXMub3B0aW9uc1t0XXx8e307dGhpcy5vcHRpb25zW3RdPWUub3B0aW9ucz9uLmV4dGVuZChlLm9wdGlvbnMsaSk6aSx0aGlzLm1vZGVzW3RdPW5ldyBlKHRoaXMpfSxsLmxheW91dD1mdW5jdGlvbigpe3JldHVybiF0aGlzLl9pc0xheW91dEluaXRlZCYmdGhpcy5fZ2V0T3B0aW9uKFwiaW5pdExheW91dFwiKT92b2lkIHRoaXMuYXJyYW5nZSgpOnZvaWQgdGhpcy5fbGF5b3V0KCl9LGwuX2xheW91dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2dldElzSW5zdGFudCgpO3RoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCksdGhpcy5sYXlvdXRJdGVtcyh0aGlzLmZpbHRlcmVkSXRlbXMsdCksdGhpcy5faXNMYXlvdXRJbml0ZWQ9ITB9LGwuYXJyYW5nZT1mdW5jdGlvbih0KXt0aGlzLm9wdGlvbih0KSx0aGlzLl9nZXRJc0luc3RhbnQoKTt2YXIgZT10aGlzLl9maWx0ZXIodGhpcy5pdGVtcyk7dGhpcy5maWx0ZXJlZEl0ZW1zPWUubWF0Y2hlcyx0aGlzLl9iaW5kQXJyYW5nZUNvbXBsZXRlKCksdGhpcy5faXNJbnN0YW50P3RoaXMuX25vVHJhbnNpdGlvbih0aGlzLl9oaWRlUmV2ZWFsLFtlXSk6dGhpcy5faGlkZVJldmVhbChlKSx0aGlzLl9zb3J0KCksdGhpcy5fbGF5b3V0KCl9LGwuX2luaXQ9bC5hcnJhbmdlLGwuX2hpZGVSZXZlYWw9ZnVuY3Rpb24odCl7dGhpcy5yZXZlYWwodC5uZWVkUmV2ZWFsKSx0aGlzLmhpZGUodC5uZWVkSGlkZSl9LGwuX2dldElzSW5zdGFudD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2dldE9wdGlvbihcImxheW91dEluc3RhbnRcIiksZT12b2lkIDAhPT10P3Q6IXRoaXMuX2lzTGF5b3V0SW5pdGVkO3JldHVybiB0aGlzLl9pc0luc3RhbnQ9ZSxlfSxsLl9iaW5kQXJyYW5nZUNvbXBsZXRlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2UmJmkmJm8mJm4uZGlzcGF0Y2hFdmVudChcImFycmFuZ2VDb21wbGV0ZVwiLG51bGwsW24uZmlsdGVyZWRJdGVtc10pfXZhciBlLGksbyxuPXRoaXM7dGhpcy5vbmNlKFwibGF5b3V0Q29tcGxldGVcIixmdW5jdGlvbigpe2U9ITAsdCgpfSksdGhpcy5vbmNlKFwiaGlkZUNvbXBsZXRlXCIsZnVuY3Rpb24oKXtpPSEwLHQoKX0pLHRoaXMub25jZShcInJldmVhbENvbXBsZXRlXCIsZnVuY3Rpb24oKXtvPSEwLHQoKX0pfSxsLl9maWx0ZXI9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5vcHRpb25zLmZpbHRlcjtlPWV8fFwiKlwiO2Zvcih2YXIgaT1bXSxvPVtdLG49W10scz10aGlzLl9nZXRGaWx0ZXJUZXN0KGUpLHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXTtpZighYS5pc0lnbm9yZWQpe3ZhciB1PXMoYSk7dSYmaS5wdXNoKGEpLHUmJmEuaXNIaWRkZW4/by5wdXNoKGEpOnV8fGEuaXNIaWRkZW58fG4ucHVzaChhKX19cmV0dXJue21hdGNoZXM6aSxuZWVkUmV2ZWFsOm8sbmVlZEhpZGU6bn19LGwuX2dldEZpbHRlclRlc3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHUmJnRoaXMub3B0aW9ucy5pc0pRdWVyeUZpbHRlcmluZz9mdW5jdGlvbihlKXtyZXR1cm4gdShlLmVsZW1lbnQpLmlzKHQpO1xyXG59OlwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/ZnVuY3Rpb24oZSl7cmV0dXJuIHQoZS5lbGVtZW50KX06ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZS5lbGVtZW50LHQpfX0sbC51cGRhdGVTb3J0RGF0YT1mdW5jdGlvbih0KXt2YXIgZTt0Pyh0PW4ubWFrZUFycmF5KHQpLGU9dGhpcy5nZXRJdGVtcyh0KSk6ZT10aGlzLml0ZW1zLHRoaXMuX2dldFNvcnRlcnMoKSx0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKGUpfSxsLl9nZXRTb3J0ZXJzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLmdldFNvcnREYXRhO2Zvcih2YXIgZSBpbiB0KXt2YXIgaT10W2VdO3RoaXMuX3NvcnRlcnNbZV09ZihpKX19LGwuX3VwZGF0ZUl0ZW1zU29ydERhdGE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQmJnQubGVuZ3RoLGk9MDtlJiZpPGU7aSsrKXt2YXIgbz10W2ldO28udXBkYXRlU29ydERhdGEoKX19O3ZhciBmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gdDt2YXIgaT1oKHQpLnNwbGl0KFwiIFwiKSxvPWlbMF0sbj1vLm1hdGNoKC9eXFxbKC4rKVxcXSQvKSxzPW4mJm5bMV0scj1lKHMsbyksYT1kLnNvcnREYXRhUGFyc2Vyc1tpWzFdXTtyZXR1cm4gdD1hP2Z1bmN0aW9uKHQpe3JldHVybiB0JiZhKHIodCkpfTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmcih0KX19ZnVuY3Rpb24gZSh0LGUpe3JldHVybiB0P2Z1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSh0KX06ZnVuY3Rpb24odCl7dmFyIGk9dC5xdWVyeVNlbGVjdG9yKGUpO3JldHVybiBpJiZpLnRleHRDb250ZW50fX1yZXR1cm4gdH0oKTtkLnNvcnREYXRhUGFyc2Vycz17cGFyc2VJbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIHBhcnNlSW50KHQsMTApfSxwYXJzZUZsb2F0OmZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUZsb2F0KHQpfX0sbC5fc29ydD1mdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5zb3J0Qnkpe3ZhciB0PW4ubWFrZUFycmF5KHRoaXMub3B0aW9ucy5zb3J0QnkpO3RoaXMuX2dldElzU2FtZVNvcnRCeSh0KXx8KHRoaXMuc29ydEhpc3Rvcnk9dC5jb25jYXQodGhpcy5zb3J0SGlzdG9yeSkpO3ZhciBlPWEodGhpcy5zb3J0SGlzdG9yeSx0aGlzLm9wdGlvbnMuc29ydEFzY2VuZGluZyk7dGhpcy5maWx0ZXJlZEl0ZW1zLnNvcnQoZSl9fSxsLl9nZXRJc1NhbWVTb3J0Qnk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspaWYodFtlXSE9dGhpcy5zb3J0SGlzdG9yeVtlXSlyZXR1cm4hMTtyZXR1cm4hMH0sbC5fbW9kZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5sYXlvdXRNb2RlLGU9dGhpcy5tb2Rlc1t0XTtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJObyBsYXlvdXQgbW9kZTogXCIrdCk7cmV0dXJuIGUub3B0aW9ucz10aGlzLm9wdGlvbnNbdF0sZX0sbC5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXtlLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQuY2FsbCh0aGlzKSx0aGlzLl9tb2RlKCkuX3Jlc2V0TGF5b3V0KCl9LGwuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbW9kZSgpLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24odCl9LGwuX21hbmFnZVN0YW1wPWZ1bmN0aW9uKHQpe3RoaXMuX21vZGUoKS5fbWFuYWdlU3RhbXAodCl9LGwuX2dldENvbnRhaW5lclNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbW9kZSgpLl9nZXRDb250YWluZXJTaXplKCl9LGwubmVlZHNSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbW9kZSgpLm5lZWRzUmVzaXplTGF5b3V0KCl9LGwuYXBwZW5kZWQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hZGRJdGVtcyh0KTtpZihlLmxlbmd0aCl7dmFyIGk9dGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoZSk7dGhpcy5maWx0ZXJlZEl0ZW1zPXRoaXMuZmlsdGVyZWRJdGVtcy5jb25jYXQoaSl9fSxsLnByZXBlbmRlZD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9pdGVtaXplKHQpO2lmKGUubGVuZ3RoKXt0aGlzLl9yZXNldExheW91dCgpLHRoaXMuX21hbmFnZVN0YW1wcygpO3ZhciBpPXRoaXMuX2ZpbHRlclJldmVhbEFkZGVkKGUpO3RoaXMubGF5b3V0SXRlbXModGhpcy5maWx0ZXJlZEl0ZW1zKSx0aGlzLmZpbHRlcmVkSXRlbXM9aS5jb25jYXQodGhpcy5maWx0ZXJlZEl0ZW1zKSx0aGlzLml0ZW1zPWUuY29uY2F0KHRoaXMuaXRlbXMpfX0sbC5fZmlsdGVyUmV2ZWFsQWRkZWQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fZmlsdGVyKHQpO3JldHVybiB0aGlzLmhpZGUoZS5uZWVkSGlkZSksdGhpcy5yZXZlYWwoZS5tYXRjaGVzKSx0aGlzLmxheW91dEl0ZW1zKGUubWF0Y2hlcywhMCksZS5tYXRjaGVzfSxsLmluc2VydD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmFkZEl0ZW1zKHQpO2lmKGUubGVuZ3RoKXt2YXIgaSxvLG49ZS5sZW5ndGg7Zm9yKGk9MDtpPG47aSsrKW89ZVtpXSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoby5lbGVtZW50KTt2YXIgcz10aGlzLl9maWx0ZXIoZSkubWF0Y2hlcztmb3IoaT0wO2k8bjtpKyspZVtpXS5pc0xheW91dEluc3RhbnQ9ITA7Zm9yKHRoaXMuYXJyYW5nZSgpLGk9MDtpPG47aSsrKWRlbGV0ZSBlW2ldLmlzTGF5b3V0SW5zdGFudDt0aGlzLnJldmVhbChzKX19O3ZhciBjPWwucmVtb3ZlO3JldHVybiBsLnJlbW92ZT1mdW5jdGlvbih0KXt0PW4ubWFrZUFycmF5KHQpO3ZhciBlPXRoaXMuZ2V0SXRlbXModCk7Yy5jYWxsKHRoaXMsdCk7Zm9yKHZhciBpPWUmJmUubGVuZ3RoLG89MDtpJiZvPGk7bysrKXt2YXIgcz1lW29dO24ucmVtb3ZlRnJvbSh0aGlzLmZpbHRlcmVkSXRlbXMscyl9fSxsLnNodWZmbGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PHRoaXMuaXRlbXMubGVuZ3RoO3QrKyl7dmFyIGU9dGhpcy5pdGVtc1t0XTtlLnNvcnREYXRhLnJhbmRvbT1NYXRoLnJhbmRvbSgpfXRoaXMub3B0aW9ucy5zb3J0Qnk9XCJyYW5kb21cIix0aGlzLl9zb3J0KCksdGhpcy5fbGF5b3V0KCl9LGwuX25vVHJhbnNpdGlvbj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247dGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbj0wO3ZhciBvPXQuYXBwbHkodGhpcyxlKTtyZXR1cm4gdGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbj1pLG99LGwuZ2V0RmlsdGVyZWRJdGVtRWxlbWVudHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC5lbGVtZW50fSl9LGR9KTtcclxuXHJcbi8qZ2xvYmFsKi9cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4ndXNlIHN0cmljdCc7XHJcbmxldCBsYXlvdXQgPSBgPGRpdiBjbGFzcz1cImdhbWUtaXRlbVwiPlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1pdGVtX19iYWNrXCI+PC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWl0ZW1fX2Zyb250XCI+XHJcblx0XHRcdCAgICAgICAgPGltZyBjbGFzcz1cImdhbWUtaXRlbV9faW1nXCIgc3JjPVwiYXNzZXRzX3Byb2QvaW1nLzEuanBnXCI+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9kaXY+YDtcclxuXHJcbmxldCB0aW1lciBcdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpOyBcdFx0XHQgICAgXHJcbmxldCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcclxuXHJcbmNsYXNzIEdhbWUge1xyXG5cdGNvbnN0cnVjdG9yKG51bWJlck9mQ2FydCkge1xyXG5cdFx0dGhpcy5nYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1maWVsZCcpO1xyXG5cdFx0dGhpcy5udW1iZXJPZkNhcnQgPSBudW1iZXJPZkNhcnQ7XHJcblx0XHR0aGlzLmxheW91dCA9IGxheW91dDtcclxuXHRcdHRoaXMudGltZXIgPSB0aW1lcjtcclxuXHRcdHRoaXMuc3RhcnRCdG4gPSBzdGFydEJ0bjtcclxuXHRcdHRoaXMudGltZVRvR2FtZSA9IG51bWJlck9mQ2FydCAqIDQ7XHJcblxyXG5cclxuXHRcdHRoaXMudGltZXJJZCA9IDA7XHJcblx0XHR0aGlzLm1haW5DbGlja0Z1bmMgPSAwO1xyXG5cdH07XHJcblx0XHJcblx0Ly/QstC+0LfQstGA0LDRidCw0LXRgiDQvNCw0YHRgdC40LIsINC/0L4g0LrQvtGC0L7RgNC+0LzRgyDRgNCw0YHQv9C+0LvQsNCz0LDRjtGC0YHRjyDQutCw0YDRgtGLXHJcblx0Y3JlYXRlTWFwQ2FydCgpe1xyXG5cdFx0bGV0IGFycjEgPSBbXTtcclxuXHRcdGxldCBhcnIyID0gW107XHJcblx0XHRsZXQgcmVzdWx0QXJyID0gW107XHJcblxyXG5cdFx0ZnVuY3Rpb24gY29tcGFyZVJhbmRvbShhLCBiKSB7XHJcblx0XHQgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkNhcnQgLyAyOyBpKyspIHtcclxuXHRcdFx0YXJyMVtpXSA9IGk7XHJcblx0XHRcdGFycjJbaV0gPSBpOyBcclxuXHRcdH1cclxuXHJcblx0XHRyZXN1bHRBcnIgPSBbLi4uYXJyMSwgLi4uYXJyMl07XHJcblx0XHRyZXN1bHRBcnIuc29ydChjb21wYXJlUmFuZG9tKTtcclxuXHRcdHJldHVybiByZXN1bHRBcnI7XHJcblx0fTtcclxuXHJcblx0Ly8g0JTQvtCx0LDQstC70Y/QtdC8INC60LvQuNC6ICjQtNC10LvQtdCz0LjRgNC+0LLQsNC90LjQtSlcclxuXHRhZGRDbGljaygpe1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdC8vINCS0LXRiNCw0LXQvCDRgdC70YPRiNCw0YLQtdC70YxcclxuXHRcdHRoaXMuZ2FtZUZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkNsaWNrRnVuYyk7XHJcblxyXG5cdFx0Ly/QodC90LjQvNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC90LAg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC1INCy0YDQtdC80Y9cclxuXHRcdC8vINC90YPQttC90L4g0YfRgtC+0LHRiyDQuNCz0YDQvtC6INC90LUg0LzQvtCzINCx0LXRgdC/0L7RgNGP0LTQvtGH0L3QviDRgtGL0LrQsNGC0Ywg0L/QviDQutCw0YDRgtCw0LxcclxuXHRcdGZ1bmN0aW9uIGZyZWV6ZUdhbWUodGltZSl7XHJcblx0XHRcdHRoYXQuZ2FtZUZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkNsaWNrRnVuYylcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoYXQuZ2FtZUZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbkNsaWNrRnVuYylcclxuXHRcdFx0fSwgdGltZSlcclxuXHRcdH07XHJcblxyXG5cdFx0Ly/Qn9GA0L7QstC10YDRj9C10YIsINC+0YLQutGA0YvRgtCwINC70Lgg0LrQsNGA0YLQsFxyXG5cdFx0Ly/QldGB0LvQuCDQvtGC0LrRgNGL0YLQsCAtINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIHRydWVcclxuXHRcdGZ1bmN0aW9uIGNoZWNrSXNPcGVuKGNhcnQpe1xyXG5cdFx0XHRyZXR1cm4gY2FydC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8v0J7RgdC90L7QstCw0L3RjyDRhNGD0L3QutGG0LjRjyDQutC70LjQutCwXHJcblx0XHRmdW5jdGlvbiBtYWluQ2xpY2tGdW5jKGUpe1xyXG5cclxuXHRcdFx0Ly8g0LvQvtCz0LjQutCwINC60LvQuNC60LBcclxuXHRcdFx0Y29uc3QgZ2FtZUZpZWxkQ2xhc3MgPSAnZ2FtZS1maWVsZCc7XHJcblx0XHRcdGNvbnN0IGdhbWVJdGVtQ2xhc3MgID0gJ2dhbWUtaXRlbSc7XHJcblx0XHRcdGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHRcdFx0bGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8v0J/RgNC+0LLQtdGA0Y/QtdC8INGN0LvQtdC80LXQvdGCICjQvdC10L7QsdGF0L7QtNC40LzQviDQv9GA0Lgg0LTQtdC70LXQs9C40YDQvtCy0LDQvdC40LgpXHJcblx0XHRcdHdoaWxlKHRhcmdldC5jbGFzc0xpc3RbMF0gIT09IGdhbWVGaWVsZENsYXNzKXtcclxuXHJcblx0XHRcdFx0aWYgKHRhcmdldC5jbGFzc0xpc3RbMF0gPT0gZ2FtZUl0ZW1DbGFzcykge1xyXG5cdFx0ICAgICAgZmxhZyA9IHRydWU7IC8vINGB0YLQsNCy0LjQvCDRhNC70LDQsywg0LrQvtCz0LTQsCDQtNC+0YjQu9C4INC00L4g0L3Rg9C20L3QvtCz0L4g0L3QsNC8INGN0LvQtdC80LXQvdGC0LBcclxuXHRcdCAgICAgIGJyZWFrO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGZsYWcpIHtcclxuXHJcblx0XHRcdFx0Ly/QldGB0LvQuCDQutCw0YDRgtCwINC90LUg0L7RgtC60YDRi9GC0LBcclxuXHRcdFx0XHRpZiAoIWNoZWNrSXNPcGVuKHRhcmdldCkpIHtcclxuXHRcdFx0XHRcdGZyZWV6ZUdhbWUoNTAwKTtcclxuXHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9IGVsc2V7XHJcblx0XHRcdFx0XHRmcmVlemVHYW1lKDUwMCk7XHJcblx0XHRcdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyDQvdC10L7QsdGF0L7QtNC40LzQviDRgdGA0LDQstC90LjRgtGMINC60LDRgNGC0YtcclxuXHRcdFx0XHRpZiAodGhhdC5nYW1lRmllbGQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtaXRlbS5hY3RpdmUnKS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdFx0bGV0IG9wZW5DYXJ0cyAgID0gdGhhdC5nYW1lRmllbGQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtaXRlbS5hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgZGF0YUdhbWVGaXJzdCA9IG9wZW5DYXJ0c1swXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZScpO1xyXG5cdFx0XHRcdFx0bGV0IGRhdGFHYW1lU2Vjb25kID0gb3BlbkNhcnRzWzFdLmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lJyk7XHJcblxyXG5cdFx0XHRcdFx0Ly/QmtCw0YDRgtGLINC+0LTQuNC90LDQutC+0LLRi9C1XHJcblx0XHRcdFx0XHRpZiAoZGF0YUdhbWVGaXJzdCA9PT0gZGF0YUdhbWVTZWNvbmQpIHtcclxuXHRcdFx0XHRcdFx0Ly8g0YHRgtCw0LLQuNC8INC30LDQtNC10YDQttC60YMsINGH0YLQvtCx0Ysg0L3QtSDQsdGL0LvQviDQvNC+0LzQtdC90YLQsNC70YzQvdC+0LPQviDQuNGB0YfQtdC30L3QvtCy0LXQvdC40Y9cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRvcGVuQ2FydHNbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHRcdFx0XHRcdFx0b3BlbkNhcnRzWzFdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdFx0XHRcdG9wZW5DYXJ0c1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0XHRvcGVuQ2FydHNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGxldCBoaWRkZW5DYXJ0cyA9IHRoYXQuZ2FtZUZpZWxkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWl0ZW0uaGlkZGVuJyk7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcnRzIFx0XHRcdD0gdGhhdC5nYW1lRmllbGQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtaXRlbScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL9CV0YHQu9C4INC60LDRgNGC0Ysg0LrQvtC90YfQuNC70LjRgdGMICjQuNCz0YDQvtC6INC/0L7QsdC10LTQuNC7KTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhoaWRkZW5DYXJ0cy5sZW5ndGgpXHJcblx0XHRcdFx0XHRcdFx0aWYgKGhpZGRlbkNhcnRzLmxlbmd0aCA9PT0gY2FydHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRhbGVydCgn0JLRiyDQv9C+0LHQtdC00LjQu9C4IScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5yZXNldCgpO1xyXG5cdFx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHR9LDcwMCk7XHJcblx0XHRcdFx0XHR9IGVsc2V7IC8vINC60LDRgNGC0Ysg0L3QtSDRgdC+0LLQv9Cw0LvQuFxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0b3BlbkNhcnRzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHRcdG9wZW5DYXJ0c1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0fSw3MDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8g0JrQvtC/0LjRgNGD0LXQvCDRhNGD0L3QutGG0LjRjiDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsiDRgdCy0L7QudGB0YLQstC+INC+0LHRitC10LrRgtCwLFxyXG5cdFx0Ly8g0YfRgtC+0LHRiyDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQvtCy0LDRgtGMINGBINC90LjQvCDQsiDQvNC10YLQvtC00LUgcmVzZXRcclxuXHRcdHRoaXMubWFpbkNsaWNrRnVuYyA9IG1haW5DbGlja0Z1bmM7XHJcblx0fTtcclxuXHJcblx0Ly8g0LfQsNC/0YPRgdC60LDQtdC8INGC0LDQudC80LXRgFxyXG5cdHN0YXJ0VGltZXIodGltZVRvR2FtZSwgaXNSZXNldCl7XHJcblx0XHRsZXQgdGltZSA9IHRpbWVUb0dhbWUgKz0gMTtcclxuXHRcdGxldCB0aW1lcjtcclxuXHJcblx0XHRpZiAoaXNSZXNldCkge1xyXG5cdFx0XHR0aGlzLnRpbWVyLmlubmVyVGV4dCA9IGBgO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0LLQvtC30LLRgNCw0YnQsNC10LwgaWQg0YLQsNC50LzQtdGA0LAsINC60L7RgtC+0YDRi9C5INC60L7Qv9C40YDRg9C10YLRgdGPXHJcblx0XHQvLyDQsiDRgdCy0L7QudGB0YLQstC+INC+0LHRitC10LrRgtCwXHJcblx0XHRyZXR1cm4gdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHRpbWUtLTtcclxuXHRcdFx0dGhpcy50aW1lci5pbm5lclRleHQgPSBgJHt0aW1lfSDRgdC10LouYDtcclxuXHJcblx0XHRcdC8v0LLRgNC10LzRjyDQstGL0YjQu9C+XHJcblx0XHRcdGlmKHRpbWUgPT09IDApe1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cdFx0XHRcdGFsZXJ0KCfQktGA0LXQvNGPINCy0YvRiNC70L4gOignKTtcclxuXHRcdFx0XHR0aGlzLnRpbWVyLmlubmVyVGV4dCA9IGAke3RpbWV9INGB0LXQutGD0L3QtGA7XHJcblxyXG5cdFx0XHRcdHRoaXMucmVzZXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwxMDAwKVxyXG5cdH1cclxuXHJcblx0Ly8g0LTQvtCx0LDQstC70Y/QtdC8INC60LDRgNGC0Ysg0L3QsCDQv9C+0LvQtVxyXG5cdGNyZWF0ZUNhcnQoY2xlYXJGaWVsZCA9IGZhbHNlKXtcclxuXHJcblx0XHQvLyDQvtGH0LjRidCw0LXQvCDQv9C+0LvQtSwg0LXRgdC70Lgg0L/QtdGA0LXQtNCw0L0g0LDRgtGA0LjQsdGD0YJcclxuXHRcdC8vICjQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LIgcmVzZXQpXHJcblx0XHRpZiAoY2xlYXJGaWVsZCkge1xyXG5cdFx0XHR0aGlzLmdhbWVGaWVsZC5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCf0LXRgNC10LzQtdGI0LjQstCw0LXQvCDQutCw0YDRgtGLXHJcblx0XHRsZXQgbWFwQ2FydEFycmF5ID0gdGhpcy5jcmVhdGVNYXBDYXJ0KCk7XHJcblxyXG5cdFx0Ly/RgdC+0LfQtNCw0LXQvCDQvdCwINC/0L7Qu9C1INC60LDRgNGC0YtcclxuXHRcdGxldCBhbGxDYXJ0ID0gJyc7XHJcblx0XHRmb3IgKGxldCBpID0gdGhpcy5udW1iZXJPZkNhcnQ7IGkgPiAwOyBpLS0pIHtcclxuXHRcdFx0YWxsQ2FydCArPSB0aGlzLmxheW91dDtcclxuXHRcdH1cclxuXHRcdHRoaXMuZ2FtZUZpZWxkLmlubmVySFRNTCA9IGFsbENhcnQ7XHJcblxyXG5cdFx0Ly8g0L/RgNC+0YHRgtCw0LLQu9GP0LXQvCDQutCw0YDRgtCw0Lwg0LTQsNGC0LAg0LDRgtGA0LjQsdGD0YLRi1xyXG5cdFx0Ly8g0Lgg0LrQsNGA0YLQuNC90LrQuFxyXG5cdFx0bGV0IGNhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtaXRlbScpO1xyXG5cdFx0Y2FydHMuZm9yRWFjaCgoaXRlbSxpbmRleCkgPT4ge1xyXG5cdFx0XHRpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1nYW1lJywgbWFwQ2FydEFycmF5W2luZGV4XSk7XHJcblxyXG5cdFx0XHRsZXQgaW1nID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1pdGVtX19pbWcnKTtcclxuXHRcdFx0aW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYGFzc2V0c19wcm9kL2ltZy8ke21hcENhcnRBcnJheVtpbmRleF19LmpwZ2ApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL9CS0YvQutC70Y7Rh9Cw0LXQvCDQuCDQstC60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRgyBcItC90LDRh9Cw0YLRjCDQuNCz0YDRg1wiXHJcblx0Y2hhbmdlU3RhcnRCdG4odmFsdWUpe1xyXG5cdFx0aWYgKHZhbHVlID09PSAnZGlzYWJsZScpIHtcclxuXHRcdFx0dGhpcy5zdGFydEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywnZGlzYWJsZWQnKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPT09ICdlbmFibGUnKXtcclxuXHRcdFx0dGhpcy5zdGFydEJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0c3RhcnRHYW1lKCl7XHJcblx0XHQvL9Ch0L7Qt9C00LDQtdC8INC60LDRgNGC0YtcclxuXHRcdHRoaXMuY3JlYXRlQ2FydCgpO1xyXG5cclxuXHRcdC8v0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQutC70LjQulxyXG5cdFx0Z2FtZS5hZGRDbGljaygpO1xyXG5cclxuXHRcdC8vINC/0L7QtNGA0YPQsdCw0LXQvCDRgtCw0LnQvNC10YBcclxuXHRcdHRoaXMudGltZXJJZCA9IHRoaXMuc3RhcnRUaW1lcih0aGlzLnRpbWVUb0dhbWUpO1xyXG5cclxuXHRcdC8v0JLRi9C60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRgyDQvdCw0YfQsNC70LAg0LjQs9GA0YtcclxuXHRcdHRoaXMuY2hhbmdlU3RhcnRCdG4oJ2Rpc2FibGUnKTtcclxuXHRcdFxyXG5cdH07XHJcblxyXG5cdHJlc2V0KCl7XHJcblx0XHQvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0YLQsNC50LzQtdGAXHJcblx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcblx0XHR0aGlzLnN0YXJ0VGltZXIoMCwgdHJ1ZSk7XHJcblxyXG5cdFx0Ly/QktC60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRg1xyXG5cdFx0dGhpcy5jaGFuZ2VTdGFydEJ0bignZW5hYmxlJyk7XHJcblxyXG5cdFx0Ly/QntGH0LjRidCw0LXQvCDQv9C+0LvQtVxyXG5cdFx0dGhpcy5jcmVhdGVDYXJ0KHRydWUpO1xyXG5cclxuXHRcdC8v0KPQtNCw0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsFxyXG5cdFx0dGhpcy5nYW1lRmllbGQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1haW5DbGlja0Z1bmMpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKDgpO1xyXG5cclxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdGdhbWUuc3RhcnRHYW1lKCk7XHJcbn0pO1xyXG5cclxufSgpKTsiXX0=
