/*
  [JS Index - plugins]
*/

/*
  1. jQuery v3.6.1
  2. Select2 4.1.0-rc.0
  3. jquery.countTo
  4. jQuery.appear v0.1
  5. jQuery UI v1.13.1 - datepicker.css removed
  6. parallax 
  7. PhotoSwipe v4.1.1 removed
    7.1. PhotoSwipe Default UI v4.1.1
	7.2. PhotoSwipe Init
  8. Owl Carousel v2.2.0
  9. Swiper v4.4.0
  10. Magnific Popup v1.1.0 remover
  11. Lity v2.2.2 removed
  12. Bootstrap v3.3.7
*/

// 1. jQuery v3.6.1
/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    v = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = y.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: v,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      y,
      s,
      c,
      v,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!y || !y.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ye(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ve(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (y = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    y.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    y.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || y.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    y.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  y.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    y.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    y.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    y.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  y.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (y = y.length && new RegExp(y.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (v =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && v(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && v(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!y || !y.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace($, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, y) {
            var v = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === y
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = v !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (v) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ye(function () {
            return [0];
          }),
          last: ye(function (e, t) {
            return [t - 1];
          }),
          eq: ye(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ye(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ye(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, y, v, e) {
      return (
        y && !y[S] && (y = Ce(y)),
        v && !v[S] && (v = Ce(v, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (v || (e ? d : l || y) ? [] : t) : f;
          if ((g && g(f, p, n, r), y)) {
            (i = Te(p, u)), y(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (v || d) {
              if (v) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                v(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = v ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            y,
            v,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((y = o),
              (m = 0 < (v = i).length),
              (x = 0 < y.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = y[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = v[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + v.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function $() {
    E.removeEventListener("DOMContentLoaded", $),
      C.removeEventListener("load", $),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", $),
        C.addEventListener("load", $));
  var B = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : B(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (v.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    v.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = y.events) || (u = y.events = Object.create(null)),
          (a = y.handle) ||
            (a = y.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                S.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      S.event.special[t] = {
        setup: function () {
          return Se(this, t, Ce), !1;
        },
        trigger: function () {
          return Se(this, t), !0;
        },
        _default: function (e) {
          return Y.get(e.target, t);
        },
        delegateType: e,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ye(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ye(r)),
        r.parentNode &&
          (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ye(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = /^--/,
    Me = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Ie = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    We = new RegExp(ne.join("|"), "i"),
    Fe = "[\\x20\\t\\r\\n\\f]",
    $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Re.test(t),
      u = e.style;
    return (
      (n = n || Me(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && (a = a.replace($e, "$1")),
        "" !== a || ie(e) || (a = S.style(e, t)),
        !v.pixelBoxStyles() &&
          Pe.test(a) &&
          We.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(v, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var ze = ["Webkit", "Moz", "ms"],
    Ue = E.createElement("div").style,
    Xe = {};
  function Ve(e) {
    var t = S.cssProps[e] || Xe[e];
    return (
      t ||
      (e in Ue
        ? e
        : (Xe[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
              while (n--) if ((e = ze[n] + t) in Ue) return e;
            })(e) || e))
    );
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Me(e),
      i =
        (!v.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!v.boxSizingReliable() && i) ||
        (!v.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Re.test(t),
          l = e.style;
        if (
          (u || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            v.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Re.test(t) || (t = Ve(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ge.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : Ie(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Me(e),
            o = !v.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Me(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !y || void 0 === y[r]) continue;
              g = !0;
            }
            d[r] = (y && y[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (y
                ? "hidden" in y && (g = y.hidden)
                : (y = Y.access(e, "fxshow", { display: l })),
              o && (y.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? y[r] : 0, r, p)),
              r in y ||
                ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (v.checkOn = "" !== rt.value),
    (v.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (v.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return B(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(P) || []).join(" ");
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return B(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    v.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).addClass(t.call(this, e, vt(this)));
            })
          : (e = mt(t)).length
          ? this.each(function () {
              if (
                ((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = yt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).removeClass(t.call(this, e, vt(this)));
            })
          : arguments.length
          ? (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)),
                  (n = 1 === this.nodeType && " " + yt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = yt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return m(t)
          ? this.each(function (e) {
              S(this).toggleClass(t.call(this, e, vt(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = mt(t)),
            this.each(function () {
              if (s)
                for (o = S(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = vt(this)) && Y.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : Y.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : yt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        v.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (v.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    v.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function jt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : jt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function $t(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Bt(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          y = S.ajaxSetup({}, t),
          v = y.context || y,
          m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = y.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (y.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (y.url = ((e || y.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (y.type = t.method || t.type || y.method || y.type),
          (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
          null == y.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = y.url),
              (r.href = r.href),
              (y.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            y.crossDomain = !0;
          }
        }
        if (
          (y.data &&
            y.processData &&
            "string" != typeof y.data &&
            (y.data = S.param(y.data, y.traditional)),
          $t(Rt, y, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && y.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (y.type = y.type.toUpperCase()),
        (y.hasContent = !Ot.test(y.type)),
        (f = y.url.replace(qt, "")),
        y.hasContent
          ? y.data &&
            y.processData &&
            0 ===
              (y.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (y.data = y.data.replace(Dt, "+"))
          : ((o = y.url.slice(f.length)),
            y.data &&
              (y.processData || "string" == typeof y.data) &&
              ((f += (Et.test(f) ? "&" : "?") + y.data), delete y.data),
            !1 === y.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (y.url = f + o)),
        y.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", y.contentType),
        T.setRequestHeader(
          "Accept",
          y.dataTypes[0] && y.accepts[y.dataTypes[0]]
            ? y.accepts[y.dataTypes[0]] +
                ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : y.accepts["*"]
        ),
        y.headers))
          T.setRequestHeader(i, y.headers[i]);
        if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(y.complete),
          T.done(y.success),
          T.fail(y.error),
          (c = $t(Mt, y, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h))
            return T;
          y.async &&
            0 < y.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, y.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(y, T, n)),
            !i &&
              -1 < S.inArray("script", y.dataTypes) &&
              S.inArray("json", y.dataTypes) < 0 &&
              (y.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(y, s, T, i)),
            i
              ? (y.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === y.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
            b.fireWith(v, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, y]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (v.cors = !!zt && "withCredentials" in zt),
    (v.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (v.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (v.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (v.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return B(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return B(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

// jQuery v2.2.2
/*! jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "2.2.2",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isPlainObject: function (a) {
        var b;
        if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
        if (
          a.constructor &&
          !k.call(a, "constructor") &&
          !k.call(a.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = d.createElement("script")),
                (b.text = a),
                d.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : h.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((d = e.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && f.parentNode && ((this.length = 1), (this[0] = f)),
          (this.context = d),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? h.call(n(a), this[0])
          : h.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.removeEventListener("DOMContentLoaded", J),
      a.removeEventListener("load", J),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      I ||
        ((I = n.Deferred()),
        "complete" === d.readyState ||
        ("loading" !== d.readyState && !d.documentElement.doScroll)
          ? a.setTimeout(n.ready)
          : (d.addEventListener("DOMContentLoaded", J),
            a.addEventListener("load", J))),
      I.promise(b)
    );
  }),
    n.ready.promise();
  var K = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    L = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function M() {
    this.expando = n.expando + M.uid++;
  }
  (M.uid = 1),
    (M.prototype = {
      register: function (a, b) {
        var c = b || {};
        return (
          a.nodeType
            ? (a[this.expando] = c)
            : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0,
              }),
          a[this.expando]
        );
      },
      cache: function (a) {
        if (!L(a)) return {};
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            L(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[b] = c;
        else for (d in b) e[d] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = a[this.expando];
        if (void 0 !== f) {
          if (void 0 === b) this.register(a);
          else {
            n.isArray(b)
              ? (d = b.concat(b.map(n.camelCase)))
              : ((e = n.camelCase(b)),
                b in f
                  ? (d = [b, e])
                  : ((d = e), (d = d in f ? [d] : d.match(G) || []))),
              (c = d.length);
            while (c--) delete f[d[c]];
          }
          (void 0 === b || n.isEmptyObject(f)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !n.isEmptyObject(b);
      },
    });
  var N = new M(),
    O = new M(),
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;
  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Q, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : P.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        O.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function (a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function (a, b) {
      O.remove(a, b);
    },
    _data: function (a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function (a, b) {
      N.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = O.get(f)), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), R(f, d, e[d])));
            N.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              O.set(this, a);
            })
          : K(
              this,
              function (b) {
                var c, d;
                if (f && void 0 === b) {
                  if (
                    ((c =
                      O.get(f, a) ||
                      O.get(f, a.replace(Q, "-$&").toLowerCase())),
                    void 0 !== c)
                  )
                    return c;
                  if (((d = n.camelCase(a)), (c = O.get(f, d)), void 0 !== c))
                    return c;
                  if (((c = R(f, d, void 0)), void 0 !== c)) return c;
                } else
                  (d = n.camelCase(a)),
                    this.each(function () {
                      var c = O.get(this, d);
                      O.set(this, d, b),
                        a.indexOf("-") > -1 &&
                          void 0 !== c &&
                          O.set(this, a, b);
                    });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          O.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = N.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = N.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          N.get(a, c) ||
          N.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              N.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = N.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function W(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  ($.optgroup = $.option),
    ($.tbody = $.tfoot = $.colgroup = $.caption = $.thead),
    ($.th = $.td);
  function _(a, b) {
    var c =
      "undefined" != typeof a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : "undefined" != typeof a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }
  var ba = /<|&#?\w+;/;
  function ca(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        o = 0,
        p = a.length;
      p > o;
      o++
    )
      if (((f = a[o]), f || 0 === f))
        if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (Y.exec(f) || ["", ""])[1].toLowerCase()),
            (i = $[h] || $._default),
            (g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          n.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (o = 0);
    while ((f = m[o++]))
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = n.contains(f.ownerDocument, f)),
        (g = _(l.appendChild(f), "script")),
        j && aa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) Z.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;
  function ga() {
    return !0;
  }
  function ha() {
    return !1;
  }
  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ja(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ja(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = ha;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return "undefined" != typeof n && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(G) || [""]),
          (j = b.length);
        while (j--)
          (h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (N.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || d),
            (e = c.documentElement),
            (f = c.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) -
              ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (f && f.scrollTop) || 0) -
              ((e && e.clientTop) || (f && f.clientTop) || 0))),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        h.filter ? h.filter(a, g) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ga
                  : ha))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: ha,
      isPropagationStopped: ha,
      isImmediatePropagationStopped: ha,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = ga), a && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = ga), a && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = ga),
          a && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    n.fn.extend({
      on: function (a, b, c, d) {
        return ja(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ja(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = ha),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
    });
  var ka =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function pa(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function qa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function ra(a) {
    var b = na.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function sa(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        N.hasData(a) &&
        ((f = N.access(a)), (g = N.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      O.hasData(a) && ((h = O.access(a)), (i = n.extend({}, h)), O.set(b, i));
    }
  }
  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
      });
    if (
      o &&
      ((e = ca(b, a[0].ownerDocument, !1, a, d)),
      (g = e.firstChild),
      1 === e.childNodes.length && (e = g),
      g || d)
    ) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++)
        (j = e),
          m !== p &&
            ((j = n.clone(j, !0, !0)), i && n.merge(h, _(j, "script"))),
          c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)
          (j = h[m]),
            Z.test(j.type || "") &&
              !N.access(j, "globalEval") &&
              n.contains(k, j) &&
              (j.src
                ? n._evalUrl && n._evalUrl(j.src)
                : n.globalEval(j.textContent.replace(oa, "")));
    }
    return a;
  }
  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(_(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          l.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)
          ta(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++)
            sa(f[d], g[d]);
        else sa(a, h);
      return (
        (g = _(h, "script")), g.length > 0 && aa(g, !i && _(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (L(c)) {
          if ((b = c[N.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            c[N.expando] = void 0;
          }
          c[O.expando] && (c[O.expando] = void 0);
        }
    },
  }),
    n.fn.extend({
      domManip: ua,
      detach: function (a) {
        return va(this, a, !0);
      },
      remove: function (a) {
        return va(this, a);
      },
      text: function (a) {
        return K(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(_(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return K(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !la.test(a) &&
              !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(_(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return ua(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(_(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
            (c = h === f ? this : this.clone(!0)),
              n(e[h])[b](c),
              g.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var wa,
    xa = { HTML: "block", BODY: "block" };
  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function za(a) {
    var b = d,
      c = xa[a];
    return (
      c ||
        ((c = ya(a, b)),
        ("none" !== c && c) ||
          ((wa = (
            wa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = wa[0].contentDocument),
          b.write(),
          b.close(),
          (c = ya(a, b)),
          wa.detach()),
        (xa[a] = c)),
      c
    );
  }
  var Aa = /^margin/,
    Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ca = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    },
    Da = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Ea = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g = d.createElement("div"),
      h = d.createElement("div");
    if (h.style) {
      (h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (g.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        g.appendChild(h);
      function i() {
        (h.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        (b = "1%" !== d.top),
          (f = "2px" === d.marginLeft),
          (c = "4px" === d.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === d.marginRight),
          Ea.removeChild(g);
      }
      n.extend(l, {
        pixelPosition: function () {
          return i(), b;
        },
        boxSizingReliable: function () {
          return null == c && i(), c;
        },
        pixelMarginRight: function () {
          return null == c && i(), e;
        },
        reliableMarginLeft: function () {
          return null == c && i(), f;
        },
        reliableMarginRight: function () {
          var b,
            c = h.appendChild(d.createElement("div"));
          return (
            (c.style.cssText = h.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (c.style.marginRight = c.style.width = "0"),
            (h.style.width = "1px"),
            Ea.appendChild(g),
            (b = !parseFloat(a.getComputedStyle(c).marginRight)),
            Ea.removeChild(g),
            h.removeChild(c),
            b
          );
        },
      });
    }
  })();
  function Fa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Ca(a)),
      (g = c ? c.getPropertyValue(b) || c[b] : void 0),
      ("" !== g && void 0 !== g) ||
        n.contains(a.ownerDocument, a) ||
        (g = n.style(a, b)),
      c &&
        !l.pixelMarginRight() &&
        Ba.test(g) &&
        Aa.test(b) &&
        ((d = h.width),
        (e = h.minWidth),
        (f = h.maxWidth),
        (h.minWidth = h.maxWidth = h.width = g),
        (g = c.width),
        (h.width = d),
        (h.minWidth = e),
        (h.maxWidth = f)),
      void 0 !== g ? g + "" : g
    );
  }
  function Ga(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = { position: "absolute", visibility: "hidden", display: "block" },
    Ja = { letterSpacing: "0", fontWeight: "400" },
    Ka = ["Webkit", "O", "Moz", "ms"],
    La = d.createElement("div").style;
  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ka.length;
    while (c--) if (((a = Ka[c] + b), a in La)) return a;
  }
  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Oa(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + U[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + U[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g;
  }
  function Pa(b, c, e) {
    var f = !0,
      g = "width" === c ? b.offsetWidth : b.offsetHeight,
      h = Ca(b),
      i = "border-box" === n.css(b, "boxSizing", !1, h);
    if (
      (d.msFullscreenElement &&
        a.top !== a &&
        b.getClientRects().length &&
        (g = Math.round(100 * b.getBoundingClientRect()[c])),
      0 >= g || null == g)
    ) {
      if (
        ((g = Fa(b, c, h)),
        (0 > g || null == g) && (g = b.style[c]),
        Ba.test(g))
      )
        return g;
      (f = i && (l.boxSizingReliable() || g === b.style[c])),
        (g = parseFloat(g) || 0);
    }
    return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }
  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = N.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                V(d) &&
                (f[g] = N.access(d, "olddisplay", za(d.nodeName))))
            : ((e = V(d)),
              ("none" === c && e) ||
                N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = T.exec(c)) &&
                e[1] &&
                ((c = W(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Fa(a, b, d)),
        "normal" === e && b in Ja && (e = Ja[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Da(a, Ia, function () {
                  return Pa(a, b, d);
                })
              : Pa(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e,
            f = d && Ca(a),
            g =
              d &&
              Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = T.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = n.css(a, b))),
            Na(a, c, g)
          );
        },
      };
    }),
    (n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Fa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              Da(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
      return b
        ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }),
    n.fn.extend({
      css: function (a, b) {
        return K(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ca(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Qa(this, !0);
      },
      hide: function () {
        return Qa(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ra),
    (Ra.prototype = {
      constructor: Ra,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Ra.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ra.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ra.prototype.init.prototype = Ra.prototype),
    (Ra.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = Ra.prototype.init),
    (n.fx.step = {});
  var Sa,
    Ta,
    Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;
  function Wa() {
    return (
      a.setTimeout(function () {
        Sa = void 0;
      }),
      (Sa = n.now())
    );
  }
  function Xa(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = U[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ya(a, b, c) {
    for (
      var d,
        e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Za(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && V(a),
      q = N.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Ua.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = N.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          N.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ya(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function $a(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function _a(a, b, c) {
    var d,
      e,
      f = 0,
      g = _a.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Sa || Wa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Sa || Wa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for ($a(k, j.opts.specialEasing); g > f; f++)
      if ((d = _a.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, Ya, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(_a, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (_a.tweeners[c] = _a.tweeners[c] || []),
          _a.tweeners[c].unshift(b);
    },
    prefilters: [Za],
    prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = _a(this, n.extend({}, a), f);
            (e || N.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = N.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = N.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Xa(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (Sa = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Sa = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(Ta), (Ta = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (l.checkOn = "" !== a.value),
        (l.optSelected = c.selected),
        (b.disabled = !0),
        (l.optDisabled = !c.disabled),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (l.radioValue = "t" === a.value);
    })();
  var ab,
    bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e =
                  n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
    }),
    (ab = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = bb[b] || n.find.attr;
      bb[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = bb[b]),
            (bb[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            (bb[b] = f)),
          e
        );
      };
    });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : cb.test(a.nodeName) || (db.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var eb = /[\t\r\n\f]/g;
  function fb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, fb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, fb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, fb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = fb(this)), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  });
  var gb = /\r/g,
    hb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !ib.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (l = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          f || !o.trigger || o.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (
            j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            p.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            p.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : o.bindType || q),
            (m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle")),
            m && m.apply(h, c),
            (m = l && h[l]),
            m &&
              m.apply &&
              L(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          f ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !L(e) ||
            (l &&
              n.isFunction(e[q]) &&
              !n.isWindow(e) &&
              ((i = e[l]),
              i && (e[l] = null),
              (n.event.triggered = q),
              e[q](),
              (n.event.triggered = void 0),
              i && (e[l] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    },
  }),
    n.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (l.focusin = "onfocusin" in a),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b);
            e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b) - 1;
            e
              ? N.access(d, b, e)
              : (d.removeEventListener(a, c, !0), N.remove(d, b));
          },
        };
      });
  var jb = a.location,
    kb = n.now(),
    lb = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function (b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
        c = new a.DOMParser().parseFromString(b, "text/xml");
      } catch (d) {
        c = void 0;
      }
      return (
        (c && !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var mb = /#.*$/,
    nb = /([?&])_=[^&]*/,
    ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    qb = /^(?:GET|HEAD)$/,
    rb = /^\/\//,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = d.createElement("a");
  vb.href = jb.href;
  function wb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function xb(a, b, c, d) {
    var e = {},
      f = a === tb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function yb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function zb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Ab(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: "GET",
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks("once memory"),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while ((b = ob.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return v || ((a = u[c] = u[c] || a), (t[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return v || (m.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > v) for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this;
          },
          abort: function (a) {
            var b = a || w;
            return e && e.abort(b), z(0, b), this;
          },
        };
      if (
        ((q.promise(x).complete = r.add),
        (x.success = x.done),
        (x.error = x.fail),
        (m.url = ((b || m.url || jb.href) + "")
          .replace(mb, "")
          .replace(rb, jb.protocol + "//")),
        (m.type = c.method || c.type || m.method || m.type),
        (m.dataTypes = n
          .trim(m.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == m.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = m.url),
            (j.href = j.href),
            (m.crossDomain =
              vb.protocol + "//" + vb.host != j.protocol + "//" + j.host);
        } catch (y) {
          m.crossDomain = !0;
        }
      }
      if (
        (m.data &&
          m.processData &&
          "string" != typeof m.data &&
          (m.data = n.param(m.data, m.traditional)),
        xb(sb, m, c, x),
        2 === v)
      )
        return x;
      (k = n.event && m.global),
        k && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !qb.test(m.type)),
        (f = m.url),
        m.hasContent ||
          (m.data &&
            ((f = m.url += (lb.test(f) ? "&" : "?") + m.data), delete m.data),
          m.cache === !1 &&
            (m.url = nb.test(f)
              ? f.replace(nb, "$1_=" + kb++)
              : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
        m.ifModified &&
          (n.lastModified[f] &&
            x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
        ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) &&
          x.setRequestHeader("Content-Type", m.contentType),
        x.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
            : m.accepts["*"]
        );
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
        return x.abort();
      w = "abort";
      for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
      if ((e = xb(tb, m, c, x))) {
        if (((x.readyState = 1), k && p.trigger("ajaxSend", [x, m]), 2 === v))
          return x;
        m.async &&
          m.timeout > 0 &&
          (i = a.setTimeout(function () {
            x.abort("timeout");
          }, m.timeout));
        try {
          (v = 1), e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, "No Transport");
      function z(b, c, d, h) {
        var j,
          l,
          t,
          u,
          w,
          y = c;
        2 !== v &&
          ((v = 2),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (x.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && 300 > b) || 304 === b),
          d && (u = zb(m, x, d)),
          (u = Ab(m, u, x, j)),
          j
            ? (m.ifModified &&
                ((w = x.getResponseHeader("Last-Modified")),
                w && (n.lastModified[f] = w),
                (w = x.getResponseHeader("etag")),
                w && (n.etag[f] = w)),
              204 === b || "HEAD" === m.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = u.state), (l = u.data), (t = u.error), (j = !t)))
            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
          (x.status = b),
          (x.statusText = (c || y) + ""),
          j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
          x.statusCode(s),
          (s = void 0),
          k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
          r.fireWith(o, [x, y]),
          k &&
            (p.trigger("ajaxComplete", [x, m]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return x;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return !n.expr.filters.visible(a);
    }),
    (n.expr.filters.visible = function (a) {
      return (
        a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
      );
    });
  var Bb = /%20/g,
    Cb = /\[\]$/,
    Db = /\r?\n/g,
    Eb = /^(?:submit|button|image|reset|file)$/i,
    Fb = /^(?:input|select|textarea|keygen)/i;
  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || Cb.test(a)
          ? d(a, e)
          : Gb(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Gb(c, a[c], b, e);
    return d.join("&").replace(Bb, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              Fb.test(this.nodeName) &&
              !Eb.test(a) &&
              (this.checked || !X.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(Db, "\r\n") };
                })
              : { name: b.name, value: c.replace(Db, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Hb = { 0: 200, 1223: 204 },
    Ib = n.ajaxSettings.xhr();
  (l.cors = !!Ib && "withCredentials" in Ib),
    (l.ajax = Ib = !!Ib),
    n.ajaxTransport(function (b) {
      var c, d;
      return l.cors || (Ib && !b.crossDomain)
        ? {
            send: function (e, f) {
              var g,
                h = b.xhr();
              if (
                (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              for (g in e) h.setRequestHeader(g, e[g]);
              (c = function (a) {
                return function () {
                  c &&
                    ((c =
                      d =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.onreadystatechange =
                        null),
                    "abort" === a
                      ? h.abort()
                      : "error" === a
                      ? "number" != typeof h.status
                        ? f(0, "error")
                        : f(h.status, h.statusText)
                      : f(
                          Hb[h.status] || h.status,
                          h.statusText,
                          "text" !== (h.responseType || "text") ||
                            "string" != typeof h.responseText
                            ? { binary: h.response }
                            : { text: h.responseText },
                          h.getAllResponseHeaders()
                        ));
                };
              }),
                (h.onload = c()),
                (d = h.onerror = c("error")),
                void 0 !== h.onabort
                  ? (h.onabort = d)
                  : (h.onreadystatechange = function () {
                      4 === h.readyState &&
                        a.setTimeout(function () {
                          c && d();
                        });
                    }),
                (c = c("abort"));
              try {
                h.send((b.hasContent && b.data) || null);
              } catch (i) {
                if (c) throw i;
              }
            },
            abort: function () {
              c && c();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = n("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Jb = [],
    Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Jb.pop() || n.expando + "_" + kb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Kb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Kb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Kb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ca([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var Lb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(g, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? ((e = d.getBoundingClientRect()),
                (c = Mb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === n.css(a, "position")) a = a.offsetParent;
          return a || Ea;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function (d) {
          return K(
            this,
            function (a, d, e) {
              var f = Mb(a);
              return void 0 === e
                ? f
                  ? f[b]
                  : a[d]
                : void (f
                    ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Fa(a, b)), Ba.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return K(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      size: function () {
        return this.length;
      },
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var Nb = a.jQuery,
    Ob = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});

// 2. Select2 4.1.0-rc.0
/*
The MIT License (MIT)

Copyright (c) 2012-2017 Kevin Brown, Igor Vaynberg, and Select2 contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : "object" == typeof module && module.exports
    ? (module.exports = function (e, t) {
        return (
          void 0 === t &&
            (t =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(e)),
          n(t),
          t
        );
      })
    : n(jQuery);
})(function (t) {
  var e,
    n,
    s,
    p,
    r,
    o,
    h,
    f,
    g,
    m,
    y,
    v,
    i,
    a,
    _,
    s =
      (t && t.fn && t.fn.select2 && t.fn.select2.amd && (u = t.fn.select2.amd),
      (u && u.requirejs) ||
        (u ? (n = u) : (u = {}),
        (g = {}),
        (m = {}),
        (y = {}),
        (v = {}),
        (i = Object.prototype.hasOwnProperty),
        (a = [].slice),
        (_ = /\.js$/),
        (h = function (e, t) {
          var n,
            s,
            i = c(e),
            r = i[0],
            t = t[1];
          return (
            (e = i[1]),
            r && (n = x((r = l(r, t)))),
            r
              ? (e =
                  n && n.normalize
                    ? n.normalize(
                        e,
                        ((s = t),
                        function (e) {
                          return l(e, s);
                        })
                      )
                    : l(e, t))
              : ((r = (i = c((e = l(e, t))))[0]), (e = i[1]), r && (n = x(r))),
            { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
          );
        }),
        (f = {
          require: function (e) {
            return w(e);
          },
          exports: function (e) {
            var t = g[e];
            return void 0 !== t ? t : (g[e] = {});
          },
          module: function (e) {
            return {
              id: e,
              uri: "",
              exports: g[e],
              config:
                ((t = e),
                function () {
                  return (y && y.config && y.config[t]) || {};
                }),
            };
            var t;
          },
        }),
        (r = function (e, t, n, s) {
          var i,
            r,
            o,
            a,
            l,
            c = [],
            u = typeof n,
            d = A((s = s || e));
          if ("undefined" == u || "function" == u) {
            for (
              t = !t.length && n.length ? ["require", "exports", "module"] : t,
                a = 0;
              a < t.length;
              a += 1
            )
              if ("require" === (r = (o = h(t[a], d)).f)) c[a] = f.require(e);
              else if ("exports" === r) (c[a] = f.exports(e)), (l = !0);
              else if ("module" === r) i = c[a] = f.module(e);
              else if (b(g, r) || b(m, r) || b(v, r)) c[a] = x(r);
              else {
                if (!o.p) throw new Error(e + " missing " + r);
                o.p.load(
                  o.n,
                  w(s, !0),
                  (function (t) {
                    return function (e) {
                      g[t] = e;
                    };
                  })(r),
                  {}
                ),
                  (c[a] = g[r]);
              }
            (u = n ? n.apply(g[e], c) : void 0),
              e &&
                (i && i.exports !== p && i.exports !== g[e]
                  ? (g[e] = i.exports)
                  : (u === p && l) || (g[e] = u));
          } else e && (g[e] = n);
        }),
        (e =
          n =
          o =
            function (e, t, n, s, i) {
              if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
              if (!e.splice) {
                if (((y = e).deps && o(y.deps, y.callback), !t)) return;
                t.splice ? ((e = t), (t = n), (n = null)) : (e = p);
              }
              return (
                (t = t || function () {}),
                "function" == typeof n && ((n = s), (s = i)),
                s
                  ? r(p, e, t, n)
                  : setTimeout(function () {
                      r(p, e, t, n);
                    }, 4),
                o
              );
            }),
        (o.config = function (e) {
          return o(e);
        }),
        (e._defined = g),
        ((s = function (e, t, n) {
          if ("string" != typeof e)
            throw new Error(
              "See almond README: incorrect module build, no module name"
            );
          t.splice || ((n = t), (t = [])),
            b(g, e) || b(m, e) || (m[e] = [e, t, n]);
        }).amd = { jQuery: !0 }),
        (u.requirejs = e),
        (u.require = n),
        (u.define = s)),
      u.define("almond", function () {}),
      u.define("jquery", [], function () {
        var e = t || $;
        return (
          null == e &&
            console &&
            console.error &&
            console.error(
              "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
            ),
          e
        );
      }),
      u.define("select2/utils", ["jquery"], function (r) {
        var s = {};
        function c(e) {
          var t,
            n = e.prototype,
            s = [];
          for (t in n)
            "function" == typeof n[t] && "constructor" !== t && s.push(t);
          return s;
        }
        (s.Extend = function (e, t) {
          var n,
            s = {}.hasOwnProperty;
          function i() {
            this.constructor = e;
          }
          for (n in t) s.call(t, n) && (e[n] = t[n]);
          return (
            (i.prototype = t.prototype),
            (e.prototype = new i()),
            (e.__super__ = t.prototype),
            e
          );
        }),
          (s.Decorate = function (s, i) {
            var e = c(i),
              t = c(s);
            function r() {
              var e = Array.prototype.unshift,
                t = i.prototype.constructor.length,
                n = s.prototype.constructor;
              0 < t &&
                (e.call(arguments, s.prototype.constructor),
                (n = i.prototype.constructor)),
                n.apply(this, arguments);
            }
            (i.displayName = s.displayName),
              (r.prototype = new (function () {
                this.constructor = r;
              })());
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              r.prototype[o] = s.prototype[o];
            }
            for (var a = 0; a < e.length; a++) {
              var l = e[a];
              r.prototype[l] = (function (e) {
                var t = function () {};
                e in r.prototype && (t = r.prototype[e]);
                var n = i.prototype[e];
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, t),
                    n.apply(this, arguments)
                  );
                };
              })(l);
            }
            return r;
          });
        function e() {
          this.listeners = {};
        }
        (e.prototype.on = function (e, t) {
          (this.listeners = this.listeners || {}),
            e in this.listeners
              ? this.listeners[e].push(t)
              : (this.listeners[e] = [t]);
        }),
          (e.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              n = t.call(arguments, 1);
            (this.listeners = this.listeners || {}),
              null == n && (n = []),
              0 === n.length && n.push({}),
              (n[0]._type = e) in this.listeners &&
                this.invoke(this.listeners[e], t.call(arguments, 1)),
              "*" in this.listeners &&
                this.invoke(this.listeners["*"], arguments);
          }),
          (e.prototype.invoke = function (e, t) {
            for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
          }),
          (s.Observable = e),
          (s.generateChars = function (e) {
            for (var t = "", n = 0; n < e; n++)
              t += Math.floor(36 * Math.random()).toString(36);
            return t;
          }),
          (s.bind = function (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }),
          (s._convertData = function (e) {
            for (var t in e) {
              var n = t.split("-"),
                s = e;
              if (1 !== n.length) {
                for (var i = 0; i < n.length; i++) {
                  var r = n[i];
                  (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in s ||
                    (s[r] = {}),
                    i == n.length - 1 && (s[r] = e[t]),
                    (s = s[r]);
                }
                delete e[t];
              }
            }
            return e;
          }),
          (s.hasScroll = function (e, t) {
            var n = r(t),
              s = t.style.overflowX,
              i = t.style.overflowY;
            return (
              (s !== i || ("hidden" !== i && "visible" !== i)) &&
              ("scroll" === s ||
                "scroll" === i ||
                n.innerHeight() < t.scrollHeight ||
                n.innerWidth() < t.scrollWidth)
            );
          }),
          (s.escapeMarkup = function (e) {
            var t = {
              "\\": "&#92;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#47;",
            };
            return "string" != typeof e
              ? e
              : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                  return t[e];
                });
          }),
          (s.__cache = {});
        var n = 0;
        return (
          (s.GetUniqueElementId = function (e) {
            var t = e.getAttribute("data-select2-id");
            return (
              null != t ||
                ((t = e.id
                  ? "select2-data-" + e.id
                  : "select2-data-" +
                    (++n).toString() +
                    "-" +
                    s.generateChars(4)),
                e.setAttribute("data-select2-id", t)),
              t
            );
          }),
          (s.StoreData = function (e, t, n) {
            e = s.GetUniqueElementId(e);
            s.__cache[e] || (s.__cache[e] = {}), (s.__cache[e][t] = n);
          }),
          (s.GetData = function (e, t) {
            var n = s.GetUniqueElementId(e);
            return t
              ? s.__cache[n] && null != s.__cache[n][t]
                ? s.__cache[n][t]
                : r(e).data(t)
              : s.__cache[n];
          }),
          (s.RemoveData = function (e) {
            var t = s.GetUniqueElementId(e);
            null != s.__cache[t] && delete s.__cache[t],
              e.removeAttribute("data-select2-id");
          }),
          (s.copyNonInternalCssClasses = function (e, t) {
            var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter(
                function (e) {
                  return 0 === e.indexOf("select2-");
                }
              ),
              t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(
                function (e) {
                  return 0 !== e.indexOf("select2-");
                }
              ),
              t = n.concat(t);
            e.setAttribute("class", t.join(" "));
          }),
          s
        );
      }),
      u.define("select2/results", ["jquery", "./utils"], function (d, p) {
        function s(e, t, n) {
          (this.$element = e),
            (this.data = n),
            (this.options = t),
            s.__super__.constructor.call(this);
        }
        return (
          p.Extend(s, p.Observable),
          (s.prototype.render = function () {
            var e = d(
              '<ul class="select2-results__options" role="listbox"></ul>'
            );
            return (
              this.options.get("multiple") &&
                e.attr("aria-multiselectable", "true"),
              (this.$results = e)
            );
          }),
          (s.prototype.clear = function () {
            this.$results.empty();
          }),
          (s.prototype.displayMessage = function (e) {
            var t = this.options.get("escapeMarkup");
            this.clear(), this.hideLoading();
            var n = d(
                '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
              ),
              s = this.options.get("translations").get(e.message);
            n.append(t(s(e.args))),
              (n[0].className += " select2-results__message"),
              this.$results.append(n);
          }),
          (s.prototype.hideMessages = function () {
            this.$results.find(".select2-results__message").remove();
          }),
          (s.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
              e.results = this.sort(e.results);
              for (var n = 0; n < e.results.length; n++) {
                var s = e.results[n],
                  s = this.option(s);
                t.push(s);
              }
              this.$results.append(t);
            } else
              0 === this.$results.children().length &&
                this.trigger("results:message", { message: "noResults" });
          }),
          (s.prototype.position = function (e, t) {
            t.find(".select2-results").append(e);
          }),
          (s.prototype.sort = function (e) {
            return this.options.get("sorter")(e);
          }),
          (s.prototype.highlightFirstItem = function () {
            var e = this.$results.find(".select2-results__option--selectable"),
              t = e.filter(".select2-results__option--selected");
            (0 < t.length ? t : e).first().trigger("mouseenter"),
              this.ensureHighlightVisible();
          }),
          (s.prototype.setClasses = function () {
            var t = this;
            this.data.current(function (e) {
              var s = e.map(function (e) {
                return e.id.toString();
              });
              t.$results
                .find(".select2-results__option--selectable")
                .each(function () {
                  var e = d(this),
                    t = p.GetData(this, "data"),
                    n = "" + t.id;
                  (null != t.element && t.element.selected) ||
                  (null == t.element && -1 < s.indexOf(n))
                    ? (this.classList.add("select2-results__option--selected"),
                      e.attr("aria-selected", "true"))
                    : (this.classList.remove(
                        "select2-results__option--selected"
                      ),
                      e.attr("aria-selected", "false"));
                });
            });
          }),
          (s.prototype.showLoading = function (e) {
            this.hideLoading();
            (e = {
              disabled: !0,
              loading: !0,
              text: this.options.get("translations").get("searching")(e),
            }),
              (e = this.option(e));
            (e.className += " loading-results"), this.$results.prepend(e);
          }),
          (s.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove();
          }),
          (s.prototype.option = function (e) {
            var t = document.createElement("li");
            t.classList.add("select2-results__option"),
              t.classList.add("select2-results__option--selectable");
            var n,
              s = { role: "option" },
              i =
                window.Element.prototype.matches ||
                window.Element.prototype.msMatchesSelector ||
                window.Element.prototype.webkitMatchesSelector;
            for (n in (((null != e.element && i.call(e.element, ":disabled")) ||
              (null == e.element && e.disabled)) &&
              ((s["aria-disabled"] = "true"),
              t.classList.remove("select2-results__option--selectable"),
              t.classList.add("select2-results__option--disabled")),
            null == e.id &&
              t.classList.remove("select2-results__option--selectable"),
            null != e._resultId && (t.id = e._resultId),
            e.title && (t.title = e.title),
            e.children &&
              ((s.role = "group"),
              (s["aria-label"] = e.text),
              t.classList.remove("select2-results__option--selectable"),
              t.classList.add("select2-results__option--group")),
            s)) {
              var r = s[n];
              t.setAttribute(n, r);
            }
            if (e.children) {
              var o = d(t),
                a = document.createElement("strong");
              (a.className = "select2-results__group"), this.template(e, a);
              for (var l = [], c = 0; c < e.children.length; c++) {
                var u = e.children[c],
                  u = this.option(u);
                l.push(u);
              }
              i = d("<ul></ul>", {
                class:
                  "select2-results__options select2-results__options--nested",
                role: "none",
              });
              i.append(l), o.append(a), o.append(i);
            } else this.template(e, t);
            return p.StoreData(t, "data", e), t;
          }),
          (s.prototype.bind = function (t, e) {
            var i = this,
              n = t.id + "-results";
            this.$results.attr("id", n),
              t.on("results:all", function (e) {
                i.clear(),
                  i.append(e.data),
                  t.isOpen() && (i.setClasses(), i.highlightFirstItem());
              }),
              t.on("results:append", function (e) {
                i.append(e.data), t.isOpen() && i.setClasses();
              }),
              t.on("query", function (e) {
                i.hideMessages(), i.showLoading(e);
              }),
              t.on("select", function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get("scrollAfterSelect") && i.highlightFirstItem());
              }),
              t.on("unselect", function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get("scrollAfterSelect") && i.highlightFirstItem());
              }),
              t.on("open", function () {
                i.$results.attr("aria-expanded", "true"),
                  i.$results.attr("aria-hidden", "false"),
                  i.setClasses(),
                  i.ensureHighlightVisible();
              }),
              t.on("close", function () {
                i.$results.attr("aria-expanded", "false"),
                  i.$results.attr("aria-hidden", "true"),
                  i.$results.removeAttr("aria-activedescendant");
              }),
              t.on("results:toggle", function () {
                var e = i.getHighlightedResults();
                0 !== e.length && e.trigger("mouseup");
              }),
              t.on("results:select", function () {
                var e,
                  t = i.getHighlightedResults();
                0 !== t.length &&
                  ((e = p.GetData(t[0], "data")),
                  t.hasClass("select2-results__option--selected")
                    ? i.trigger("close", {})
                    : i.trigger("select", { data: e }));
              }),
              t.on("results:previous", function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find(".select2-results__option--selectable"),
                  s = n.index(t);
                s <= 0 ||
                  ((e = s - 1),
                  0 === t.length && (e = 0),
                  (s = n.eq(e)).trigger("mouseenter"),
                  (t = i.$results.offset().top),
                  (n = s.offset().top),
                  (s = i.$results.scrollTop() + (n - t)),
                  0 === e
                    ? i.$results.scrollTop(0)
                    : n - t < 0 && i.$results.scrollTop(s));
              }),
              t.on("results:next", function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find(".select2-results__option--selectable"),
                  s = n.index(t) + 1;
                s >= n.length ||
                  ((e = n.eq(s)).trigger("mouseenter"),
                  (t = i.$results.offset().top + i.$results.outerHeight(!1)),
                  (n = e.offset().top + e.outerHeight(!1)),
                  (e = i.$results.scrollTop() + n - t),
                  0 === s
                    ? i.$results.scrollTop(0)
                    : t < n && i.$results.scrollTop(e));
              }),
              t.on("results:focus", function (e) {
                e.element[0].classList.add(
                  "select2-results__option--highlighted"
                ),
                  e.element[0].setAttribute("aria-selected", "true");
              }),
              t.on("results:message", function (e) {
                i.displayMessage(e);
              }),
              d.fn.mousewheel &&
                this.$results.on("mousewheel", function (e) {
                  var t = i.$results.scrollTop(),
                    n = i.$results.get(0).scrollHeight - t + e.deltaY,
                    t = 0 < e.deltaY && t - e.deltaY <= 0,
                    n = e.deltaY < 0 && n <= i.$results.height();
                  t
                    ? (i.$results.scrollTop(0),
                      e.preventDefault(),
                      e.stopPropagation())
                    : n &&
                      (i.$results.scrollTop(
                        i.$results.get(0).scrollHeight - i.$results.height()
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                }),
              this.$results.on(
                "mouseup",
                ".select2-results__option--selectable",
                function (e) {
                  var t = d(this),
                    n = p.GetData(this, "data");
                  t.hasClass("select2-results__option--selected")
                    ? i.options.get("multiple")
                      ? i.trigger("unselect", { originalEvent: e, data: n })
                      : i.trigger("close", {})
                    : i.trigger("select", { originalEvent: e, data: n });
                }
              ),
              this.$results.on(
                "mouseenter",
                ".select2-results__option--selectable",
                function (e) {
                  var t = p.GetData(this, "data");
                  i
                    .getHighlightedResults()
                    .removeClass("select2-results__option--highlighted")
                    .attr("aria-selected", "false"),
                    i.trigger("results:focus", { data: t, element: d(this) });
                }
              );
          }),
          (s.prototype.getHighlightedResults = function () {
            return this.$results.find(".select2-results__option--highlighted");
          }),
          (s.prototype.destroy = function () {
            this.$results.remove();
          }),
          (s.prototype.ensureHighlightVisible = function () {
            var e,
              t,
              n,
              s,
              i = this.getHighlightedResults();
            0 !== i.length &&
              ((e = this.$results
                .find(".select2-results__option--selectable")
                .index(i)),
              (s = this.$results.offset().top),
              (t = i.offset().top),
              (n = this.$results.scrollTop() + (t - s)),
              (s = t - s),
              (n -= 2 * i.outerHeight(!1)),
              e <= 2
                ? this.$results.scrollTop(0)
                : (s > this.$results.outerHeight() || s < 0) &&
                  this.$results.scrollTop(n));
          }),
          (s.prototype.template = function (e, t) {
            var n = this.options.get("templateResult"),
              s = this.options.get("escapeMarkup"),
              e = n(e, t);
            null == e
              ? (t.style.display = "none")
              : "string" == typeof e
              ? (t.innerHTML = s(e))
              : d(t).append(e);
          }),
          s
        );
      }),
      u.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        };
      }),
      u.define(
        "select2/selection/base",
        ["jquery", "../utils", "../keys"],
        function (n, s, i) {
          function r(e, t) {
            (this.$element = e),
              (this.options = t),
              r.__super__.constructor.call(this);
          }
          return (
            s.Extend(r, s.Observable),
            (r.prototype.render = function () {
              var e = n(
                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
              );
              return (
                (this._tabindex = 0),
                null != s.GetData(this.$element[0], "old-tabindex")
                  ? (this._tabindex = s.GetData(
                      this.$element[0],
                      "old-tabindex"
                    ))
                  : null != this.$element.attr("tabindex") &&
                    (this._tabindex = this.$element.attr("tabindex")),
                e.attr("title", this.$element.attr("title")),
                e.attr("tabindex", this._tabindex),
                e.attr("aria-disabled", "false"),
                (this.$selection = e)
              );
            }),
            (r.prototype.bind = function (e, t) {
              var n = this,
                s = e.id + "-results";
              (this.container = e),
                this.$selection.on("focus", function (e) {
                  n.trigger("focus", e);
                }),
                this.$selection.on("blur", function (e) {
                  n._handleBlur(e);
                }),
                this.$selection.on("keydown", function (e) {
                  n.trigger("keypress", e),
                    e.which === i.SPACE && e.preventDefault();
                }),
                e.on("results:focus", function (e) {
                  n.$selection.attr("aria-activedescendant", e.data._resultId);
                }),
                e.on("selection:update", function (e) {
                  n.update(e.data);
                }),
                e.on("open", function () {
                  n.$selection.attr("aria-expanded", "true"),
                    n.$selection.attr("aria-owns", s),
                    n._attachCloseHandler(e);
                }),
                e.on("close", function () {
                  n.$selection.attr("aria-expanded", "false"),
                    n.$selection.removeAttr("aria-activedescendant"),
                    n.$selection.removeAttr("aria-owns"),
                    n.$selection.trigger("focus"),
                    n._detachCloseHandler(e);
                }),
                e.on("enable", function () {
                  n.$selection.attr("tabindex", n._tabindex),
                    n.$selection.attr("aria-disabled", "false");
                }),
                e.on("disable", function () {
                  n.$selection.attr("tabindex", "-1"),
                    n.$selection.attr("aria-disabled", "true");
                });
            }),
            (r.prototype._handleBlur = function (e) {
              var t = this;
              window.setTimeout(function () {
                document.activeElement == t.$selection[0] ||
                  n.contains(t.$selection[0], document.activeElement) ||
                  t.trigger("blur", e);
              }, 1);
            }),
            (r.prototype._attachCloseHandler = function (e) {
              n(document.body).on("mousedown.select2." + e.id, function (e) {
                var t = n(e.target).closest(".select2");
                n(".select2.select2-container--open").each(function () {
                  this != t[0] && s.GetData(this, "element").select2("close");
                });
              });
            }),
            (r.prototype._detachCloseHandler = function (e) {
              n(document.body).off("mousedown.select2." + e.id);
            }),
            (r.prototype.position = function (e, t) {
              t.find(".selection").append(e);
            }),
            (r.prototype.destroy = function () {
              this._detachCloseHandler(this.container);
            }),
            (r.prototype.update = function (e) {
              throw new Error(
                "The `update` method must be defined in child classes."
              );
            }),
            (r.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (r.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            r
          );
        }
      ),
      u.define(
        "select2/selection/single",
        ["jquery", "./base", "../utils", "../keys"],
        function (e, t, n, s) {
          function i() {
            i.__super__.constructor.apply(this, arguments);
          }
          return (
            n.Extend(i, t),
            (i.prototype.render = function () {
              var e = i.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--single"),
                e.html(
                  '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                ),
                e
              );
            }),
            (i.prototype.bind = function (t, e) {
              var n = this;
              i.__super__.bind.apply(this, arguments);
              var s = t.id + "-container";
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", s)
                .attr("role", "textbox")
                .attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", s),
                this.$selection.attr("aria-controls", s),
                this.$selection.on("mousedown", function (e) {
                  1 === e.which && n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on("focus", function (e) {}),
                this.$selection.on("blur", function (e) {}),
                t.on("focus", function (e) {
                  t.isOpen() || n.$selection.trigger("focus");
                });
            }),
            (i.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              e.empty(), e.removeAttr("title");
            }),
            (i.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (i.prototype.selectionContainer = function () {
              return e("<span></span>");
            }),
            (i.prototype.update = function (e) {
              var t, n;
              0 !== e.length
                ? ((n = e[0]),
                  (t = this.$selection.find(".select2-selection__rendered")),
                  (e = this.display(n, t)),
                  t.empty().append(e),
                  (n = n.title || n.text)
                    ? t.attr("title", n)
                    : t.removeAttr("title"))
                : this.clear();
            }),
            i
          );
        }
      ),
      u.define(
        "select2/selection/multiple",
        ["jquery", "./base", "../utils"],
        function (i, e, c) {
          function r(e, t) {
            r.__super__.constructor.apply(this, arguments);
          }
          return (
            c.Extend(r, e),
            (r.prototype.render = function () {
              var e = r.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
              );
            }),
            (r.prototype.bind = function (e, t) {
              var n = this;
              r.__super__.bind.apply(this, arguments);
              var s = e.id + "-container";
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", s),
                this.$selection.on("click", function (e) {
                  n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on(
                  "click",
                  ".select2-selection__choice__remove",
                  function (e) {
                    var t;
                    n.isDisabled() ||
                      ((t = i(this).parent()),
                      (t = c.GetData(t[0], "data")),
                      n.trigger("unselect", { originalEvent: e, data: t }));
                  }
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-selection__choice__remove",
                  function (e) {
                    n.isDisabled() || e.stopPropagation();
                  }
                );
            }),
            (r.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              e.empty(), e.removeAttr("title");
            }),
            (r.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (r.prototype.selectionContainer = function () {
              return i(
                '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
              );
            }),
            (r.prototype.update = function (e) {
              if ((this.clear(), 0 !== e.length)) {
                for (
                  var t = [],
                    n =
                      this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id") + "-choice-",
                    s = 0;
                  s < e.length;
                  s++
                ) {
                  var i = e[s],
                    r = this.selectionContainer(),
                    o = this.display(i, r),
                    a = n + c.generateChars(4) + "-";
                  i.id ? (a += i.id) : (a += c.generateChars(4)),
                    r
                      .find(".select2-selection__choice__display")
                      .append(o)
                      .attr("id", a);
                  var l = i.title || i.text;
                  l && r.attr("title", l);
                  (o = this.options.get("translations").get("removeItem")),
                    (l = r.find(".select2-selection__choice__remove"));
                  l.attr("title", o()),
                    l.attr("aria-label", o()),
                    l.attr("aria-describedby", a),
                    c.StoreData(r[0], "data", i),
                    t.push(r);
                }
                this.$selection.find(".select2-selection__rendered").append(t);
              }
            }),
            r
          );
        }
      ),
      u.define("select2/selection/placeholder", [], function () {
        function e(e, t, n) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n);
        }
        return (
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = { id: "", text: t }), t;
          }),
          (e.prototype.createPlaceholder = function (e, t) {
            var n = this.selectionContainer();
            n.html(this.display(t)),
              n[0].classList.add("select2-selection__placeholder"),
              n[0].classList.remove("select2-selection__choice");
            t = t.title || t.text || n.text();
            return (
              this.$selection
                .find(".select2-selection__rendered")
                .attr("title", t),
              n
            );
          }),
          (e.prototype.update = function (e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n) return e.call(this, t);
            this.clear();
            t = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(t);
          }),
          e
        );
      }),
      u.define(
        "select2/selection/allowClear",
        ["jquery", "../keys", "../utils"],
        function (i, s, a) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                null == this.placeholder &&
                  this.options.get("debug") &&
                  window.console &&
                  console.error &&
                  console.error(
                    "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                  ),
                this.$selection.on(
                  "mousedown",
                  ".select2-selection__clear",
                  function (e) {
                    s._handleClear(e);
                  }
                ),
                t.on("keypress", function (e) {
                  s._handleKeyboardClear(e, t);
                });
            }),
            (e.prototype._handleClear = function (e, t) {
              if (!this.isDisabled()) {
                var n = this.$selection.find(".select2-selection__clear");
                if (0 !== n.length) {
                  t.stopPropagation();
                  var s = a.GetData(n[0], "data"),
                    i = this.$element.val();
                  this.$element.val(this.placeholder.id);
                  var r = { data: s };
                  if ((this.trigger("clear", r), r.prevented))
                    this.$element.val(i);
                  else {
                    for (var o = 0; o < s.length; o++)
                      if (
                        ((r = { data: s[o] }),
                        this.trigger("unselect", r),
                        r.prevented)
                      )
                        return void this.$element.val(i);
                    this.$element.trigger("input").trigger("change"),
                      this.trigger("toggle", {});
                  }
                }
              }
            }),
            (e.prototype._handleKeyboardClear = function (e, t, n) {
              n.isOpen() ||
                (t.which != s.DELETE && t.which != s.BACKSPACE) ||
                this._handleClear(t);
            }),
            (e.prototype.update = function (e, t) {
              var n, s;
              e.call(this, t),
                this.$selection.find(".select2-selection__clear").remove(),
                this.$selection[0].classList.remove(
                  "select2-selection--clearable"
                ),
                0 <
                  this.$selection.find(".select2-selection__placeholder")
                    .length ||
                  0 === t.length ||
                  ((n = this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id")),
                  (s = this.options.get("translations").get("removeAllItems")),
                  (e = i(
                    '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                  )).attr("title", s()),
                  e.attr("aria-label", s()),
                  e.attr("aria-describedby", n),
                  a.StoreData(e[0], "data", t),
                  this.$selection.prepend(e),
                  this.$selection[0].classList.add(
                    "select2-selection--clearable"
                  ));
            }),
            e
          );
        }
      ),
      u.define(
        "select2/selection/search",
        ["jquery", "../utils", "../keys"],
        function (s, a, l) {
          function e(e, t, n) {
            e.call(this, t, n);
          }
          return (
            (e.prototype.render = function (e) {
              var t = this.options.get("translations").get("search"),
                n = s(
                  '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                );
              (this.$searchContainer = n),
                (this.$search = n.find("textarea")),
                this.$search.prop(
                  "autocomplete",
                  this.options.get("autocomplete")
                ),
                this.$search.attr("aria-label", t());
              e = e.call(this);
              return (
                this._transferTabIndex(), e.append(this.$searchContainer), e
              );
            }),
            (e.prototype.bind = function (e, t, n) {
              var s = this,
                i = t.id + "-results",
                r = t.id + "-container";
              e.call(this, t, n),
                s.$search.attr("aria-describedby", r),
                t.on("open", function () {
                  s.$search.attr("aria-controls", i),
                    s.$search.trigger("focus");
                }),
                t.on("close", function () {
                  s.$search.val(""),
                    s.resizeSearch(),
                    s.$search.removeAttr("aria-controls"),
                    s.$search.removeAttr("aria-activedescendant"),
                    s.$search.trigger("focus");
                }),
                t.on("enable", function () {
                  s.$search.prop("disabled", !1), s._transferTabIndex();
                }),
                t.on("disable", function () {
                  s.$search.prop("disabled", !0);
                }),
                t.on("focus", function (e) {
                  s.$search.trigger("focus");
                }),
                t.on("results:focus", function (e) {
                  e.data._resultId
                    ? s.$search.attr("aria-activedescendant", e.data._resultId)
                    : s.$search.removeAttr("aria-activedescendant");
                }),
                this.$selection.on(
                  "focusin",
                  ".select2-search--inline",
                  function (e) {
                    s.trigger("focus", e);
                  }
                ),
                this.$selection.on(
                  "focusout",
                  ".select2-search--inline",
                  function (e) {
                    s._handleBlur(e);
                  }
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    e.stopPropagation(),
                      s.trigger("keypress", e),
                      (s._keyUpPrevented = e.isDefaultPrevented()),
                      e.which !== l.BACKSPACE ||
                        "" !== s.$search.val() ||
                        (0 <
                          (t = s.$selection
                            .find(".select2-selection__choice")
                            .last()).length &&
                          ((t = a.GetData(t[0], "data")),
                          s.searchRemoveChoice(t),
                          e.preventDefault()));
                  }
                ),
                this.$selection.on(
                  "click",
                  ".select2-search--inline",
                  function (e) {
                    s.$search.val() && e.stopPropagation();
                  }
                );
              var t = document.documentMode,
                o = t && t <= 11;
              this.$selection.on(
                "input.searchcheck",
                ".select2-search--inline",
                function (e) {
                  o
                    ? s.$selection.off("input.search input.searchcheck")
                    : s.$selection.off("keyup.search");
                }
              ),
                this.$selection.on(
                  "keyup.search input.search",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    o && "input" === e.type
                      ? s.$selection.off("input.search input.searchcheck")
                      : (t = e.which) != l.SHIFT &&
                        t != l.CTRL &&
                        t != l.ALT &&
                        t != l.TAB &&
                        s.handleSearch(e);
                  }
                );
            }),
            (e.prototype._transferTabIndex = function (e) {
              this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1");
            }),
            (e.prototype.createPlaceholder = function (e, t) {
              this.$search.attr("placeholder", t.text);
            }),
            (e.prototype.update = function (e, t) {
              var n = this.$search[0] == document.activeElement;
              this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.resizeSearch(),
                n && this.$search.trigger("focus");
            }),
            (e.prototype.handleSearch = function () {
              var e;
              this.resizeSearch(),
                this._keyUpPrevented ||
                  ((e = this.$search.val()),
                  this.trigger("query", { term: e })),
                (this._keyUpPrevented = !1);
            }),
            (e.prototype.searchRemoveChoice = function (e, t) {
              this.trigger("unselect", { data: t }),
                this.$search.val(t.text),
                this.handleSearch();
            }),
            (e.prototype.resizeSearch = function () {
              this.$search.css("width", "25px");
              var e = "100%";
              "" === this.$search.attr("placeholder") &&
                (e = 0.75 * (this.$search.val().length + 1) + "em"),
                this.$search.css("width", e);
            }),
            e
          );
        }
      ),
      u.define("select2/selection/selectionCss", ["../utils"], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get("selectionCssClass") || "";
            return (
              -1 !== e.indexOf(":all:") &&
                ((e = e.replace(":all:", "")),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define("select2/selection/eventRelay", ["jquery"], function (o) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = [
                "open",
                "opening",
                "close",
                "closing",
                "select",
                "selecting",
                "unselect",
                "unselecting",
                "clear",
                "clearing",
              ],
              r = [
                "opening",
                "closing",
                "selecting",
                "unselecting",
                "clearing",
              ];
            e.call(this, t, n),
              t.on("*", function (e, t) {
                var n;
                -1 !== i.indexOf(e) &&
                  ((t = t || {}),
                  (n = o.Event("select2:" + e, { params: t })),
                  s.$element.trigger(n),
                  -1 !== r.indexOf(e) &&
                    (t.prevented = n.isDefaultPrevented()));
              });
          }),
          e
        );
      }),
      u.define("select2/translation", ["jquery", "require"], function (t, n) {
        function s(e) {
          this.dict = e || {};
        }
        return (
          (s.prototype.all = function () {
            return this.dict;
          }),
          (s.prototype.get = function (e) {
            return this.dict[e];
          }),
          (s.prototype.extend = function (e) {
            this.dict = t.extend({}, e.all(), this.dict);
          }),
          (s._cache = {}),
          (s.loadPath = function (e) {
            var t;
            return (
              e in s._cache || ((t = n(e)), (s._cache[e] = t)),
              new s(s._cache[e])
            );
          }),
          s
        );
      }),
      u.define("select2/diacritics", [], function () {
        return {
          "?": "A",
          A: "A",
          "�": "A",
          "�": "A",
          "�": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "�": "A",
          A: "A",
          A: "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "�": "A",
          A: "A",
          "?": "A",
          "�": "A",
          "?": "A",
          A: "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          "?": "A",
          A: "A",
          "?": "A",
          "?": "A",
          "?": "AA",
          "�": "AE",
          "?": "AE",
          "?": "AE",
          "?": "AO",
          "?": "AU",
          "?": "AV",
          "?": "AV",
          "?": "AY",
          "?": "B",
          B: "B",
          "?": "B",
          "?": "B",
          "?": "B",
          "?": "B",
          "?": "B",
          "?": "B",
          "?": "C",
          C: "C",
          C: "C",
          C: "C",
          C: "C",
          C: "C",
          "�": "C",
          "?": "C",
          "?": "C",
          "?": "C",
          "?": "C",
          "?": "D",
          D: "D",
          "?": "D",
          D: "D",
          "?": "D",
          "?": "D",
          "?": "D",
          "?": "D",
          "�": "D",
          "?": "D",
          "?": "D",
          "�": "D",
          "?": "D",
          "?": "DZ",
          "?": "DZ",
          "?": "Dz",
          "?": "Dz",
          "?": "E",
          E: "E",
          "�": "E",
          "�": "E",
          "�": "E",
          "?": "E",
          "?": "E",
          "?": "E",
          "?": "E",
          "?": "E",
          E: "E",
          "?": "E",
          "?": "E",
          E: "E",
          E: "E",
          "�": "E",
          "?": "E",
          E: "E",
          "?": "E",
          "?": "E",
          "?": "E",
          "?": "E",
          "?": "E",
          "?": "E",
          E: "E",
          "?": "E",
          "?": "E",
          "?": "E",
          "?": "E",
          "?": "F",
          F: "F",
          "?": "F",
          "�": "F",
          "?": "F",
          "?": "G",
          G: "G",
          "?": "G",
          G: "G",
          "?": "G",
          G: "G",
          G: "G",
          G: "G",
          G: "G",
          G: "G",
          "?": "G",
          "?": "G",
          "?": "G",
          "?": "G",
          "?": "H",
          H: "H",
          H: "H",
          "?": "H",
          "?": "H",
          "?": "H",
          "?": "H",
          "?": "H",
          "?": "H",
          H: "H",
          "?": "H",
          "?": "H",
          "?": "H",
          "?": "I",
          I: "I",
          "�": "I",
          "�": "I",
          "�": "I",
          I: "I",
          I: "I",
          I: "I",
          I: "I",
          "�": "I",
          "?": "I",
          "?": "I",
          I: "I",
          "?": "I",
          "?": "I",
          "?": "I",
          I: "I",
          "?": "I",
          I: "I",
          "?": "J",
          J: "J",
          J: "J",
          "?": "J",
          "?": "K",
          K: "K",
          "?": "K",
          K: "K",
          "?": "K",
          K: "K",
          "?": "K",
          "?": "K",
          "?": "K",
          "?": "K",
          "?": "K",
          "?": "K",
          "?": "K",
          "?": "L",
          L: "L",
          "?": "L",
          L: "L",
          L: "L",
          "?": "L",
          "?": "L",
          L: "L",
          "?": "L",
          "?": "L",
          L: "L",
          "?": "L",
          "?": "L",
          "?": "L",
          "?": "L",
          "?": "L",
          "?": "L",
          "?": "LJ",
          "?": "Lj",
          "?": "M",
          M: "M",
          "?": "M",
          "?": "M",
          "?": "M",
          "?": "M",
          "?": "M",
          "?": "N",
          N: "N",
          "?": "N",
          N: "N",
          "�": "N",
          "?": "N",
          N: "N",
          "?": "N",
          N: "N",
          "?": "N",
          "?": "N",
          "?": "N",
          "?": "N",
          "?": "N",
          "?": "N",
          "?": "NJ",
          "?": "Nj",
          "?": "O",
          O: "O",
          "�": "O",
          "�": "O",
          "�": "O",
          "?": "O",
          "?": "O",
          "?": "O",
          "?": "O",
          "�": "O",
          "?": "O",
          "?": "O",
          "?": "O",
          O: "O",
          "?": "O",
          "?": "O",
          O: "O",
          "?": "O",
          "?": "O",
          "�": "O",
          "?": "O",
          "?": "O",
          O: "O",
          O: "O",
          "?": "O",
          "?": "O",
          O: "O",
          "?": "O",
          "?": "O",
          "?": "O",
          "?": "O",
          "?": "O",
          "?": "O",
          "?": "O",
          O: "O",
          O: "O",
          "�": "O",
          "?": "O",
          "?": "O",
          O: "O",
          "?": "O",
          "?": "O",
          "�": "OE",
          "?": "OI",
          "?": "OO",
          "?": "OU",
          "?": "P",
          P: "P",
          "?": "P",
          "?": "P",
          "?": "P",
          "?": "P",
          "?": "P",
          "?": "P",
          "?": "P",
          "?": "Q",
          Q: "Q",
          "?": "Q",
          "?": "Q",
          "?": "Q",
          "?": "R",
          R: "R",
          R: "R",
          "?": "R",
          R: "R",
          "?": "R",
          "?": "R",
          "?": "R",
          "?": "R",
          R: "R",
          "?": "R",
          "?": "R",
          "?": "R",
          "?": "R",
          "?": "R",
          "?": "R",
          "?": "S",
          S: "S",
          "?": "S",
          S: "S",
          "?": "S",
          S: "S",
          "?": "S",
          "�": "S",
          "?": "S",
          "?": "S",
          "?": "S",
          "?": "S",
          S: "S",
          "?": "S",
          "?": "S",
          "?": "S",
          "?": "T",
          T: "T",
          "?": "T",
          T: "T",
          "?": "T",
          "?": "T",
          T: "T",
          "?": "T",
          "?": "T",
          T: "T",
          "?": "T",
          T: "T",
          "?": "T",
          "?": "T",
          "?": "TZ",
          "?": "U",
          U: "U",
          "�": "U",
          "�": "U",
          "�": "U",
          U: "U",
          "?": "U",
          U: "U",
          "?": "U",
          U: "U",
          "�": "U",
          U: "U",
          U: "U",
          U: "U",
          U: "U",
          "?": "U",
          U: "U",
          U: "U",
          U: "U",
          "?": "U",
          "?": "U",
          U: "U",
          "?": "U",
          "?": "U",
          "?": "U",
          "?": "U",
          "?": "U",
          "?": "U",
          "?": "U",
          U: "U",
          "?": "U",
          "?": "U",
          "?": "U",
          "?": "V",
          V: "V",
          "?": "V",
          "?": "V",
          "?": "V",
          "?": "V",
          "?": "V",
          "?": "VY",
          "?": "W",
          W: "W",
          "?": "W",
          "?": "W",
          W: "W",
          "?": "W",
          "?": "W",
          "?": "W",
          "?": "W",
          "?": "X",
          X: "X",
          "?": "X",
          "?": "X",
          "?": "Y",
          Y: "Y",
          "?": "Y",
          "�": "Y",
          Y: "Y",
          "?": "Y",
          "?": "Y",
          "?": "Y",
          "�": "Y",
          "?": "Y",
          "?": "Y",
          "?": "Y",
          "?": "Y",
          "?": "Y",
          "?": "Z",
          Z: "Z",
          Z: "Z",
          "?": "Z",
          Z: "Z",
          "�": "Z",
          "?": "Z",
          "?": "Z",
          "?": "Z",
          "?": "Z",
          "?": "Z",
          "?": "Z",
          "?": "Z",
          "?": "a",
          a: "a",
          "?": "a",
          "�": "a",
          "�": "a",
          "�": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "�": "a",
          a: "a",
          a: "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "�": "a",
          a: "a",
          "?": "a",
          "�": "a",
          "?": "a",
          a: "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          "?": "a",
          a: "a",
          "?": "a",
          "?": "a",
          "?": "aa",
          "�": "ae",
          "?": "ae",
          "?": "ae",
          "?": "ao",
          "?": "au",
          "?": "av",
          "?": "av",
          "?": "ay",
          "?": "b",
          b: "b",
          "?": "b",
          "?": "b",
          "?": "b",
          b: "b",
          "?": "b",
          "?": "b",
          "?": "c",
          c: "c",
          c: "c",
          c: "c",
          c: "c",
          c: "c",
          "�": "c",
          "?": "c",
          "?": "c",
          "?": "c",
          "?": "c",
          "?": "c",
          "?": "d",
          d: "d",
          "?": "d",
          d: "d",
          "?": "d",
          "?": "d",
          "?": "d",
          "?": "d",
          d: "d",
          "?": "d",
          "?": "d",
          "?": "d",
          "?": "d",
          "?": "dz",
          "?": "dz",
          "?": "e",
          e: "e",
          "�": "e",
          "�": "e",
          "�": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          e: "e",
          "?": "e",
          "?": "e",
          e: "e",
          e: "e",
          "�": "e",
          "?": "e",
          e: "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          e: "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "e",
          "?": "f",
          f: "f",
          "?": "f",
          "�": "f",
          "?": "f",
          "?": "g",
          g: "g",
          "?": "g",
          g: "g",
          "?": "g",
          g: "g",
          g: "g",
          g: "g",
          g: "g",
          g: "g",
          "?": "g",
          "?": "g",
          "?": "g",
          "?": "g",
          "?": "h",
          h: "h",
          h: "h",
          "?": "h",
          "?": "h",
          "?": "h",
          "?": "h",
          "?": "h",
          "?": "h",
          "?": "h",
          h: "h",
          "?": "h",
          "?": "h",
          "?": "h",
          "?": "hv",
          "?": "i",
          i: "i",
          "�": "i",
          "�": "i",
          "�": "i",
          i: "i",
          i: "i",
          i: "i",
          "�": "i",
          "?": "i",
          "?": "i",
          i: "i",
          "?": "i",
          "?": "i",
          "?": "i",
          i: "i",
          "?": "i",
          "?": "i",
          i: "i",
          "?": "j",
          j: "j",
          j: "j",
          j: "j",
          "?": "j",
          "?": "k",
          k: "k",
          "?": "k",
          k: "k",
          "?": "k",
          k: "k",
          "?": "k",
          "?": "k",
          "?": "k",
          "?": "k",
          "?": "k",
          "?": "k",
          "?": "k",
          "?": "l",
          l: "l",
          "?": "l",
          l: "l",
          l: "l",
          "?": "l",
          "?": "l",
          l: "l",
          "?": "l",
          "?": "l",
          "?": "l",
          l: "l",
          l: "l",
          "?": "l",
          "?": "l",
          "?": "l",
          "?": "l",
          "?": "l",
          "?": "lj",
          "?": "m",
          m: "m",
          "?": "m",
          "?": "m",
          "?": "m",
          "?": "m",
          "?": "m",
          "?": "n",
          n: "n",
          "?": "n",
          n: "n",
          "�": "n",
          "?": "n",
          n: "n",
          "?": "n",
          n: "n",
          "?": "n",
          "?": "n",
          "?": "n",
          "?": "n",
          "?": "n",
          "?": "n",
          "?": "n",
          "?": "nj",
          "?": "o",
          o: "o",
          "�": "o",
          "�": "o",
          "�": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "�": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          o: "o",
          "?": "o",
          "?": "o",
          o: "o",
          "?": "o",
          "?": "o",
          "�": "o",
          "?": "o",
          "?": "o",
          o: "o",
          o: "o",
          "?": "o",
          "?": "o",
          o: "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          o: "o",
          o: "o",
          "�": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "?": "o",
          "�": "oe",
          "?": "oi",
          "?": "ou",
          "?": "oo",
          "?": "p",
          p: "p",
          "?": "p",
          "?": "p",
          "?": "p",
          "?": "p",
          "?": "p",
          "?": "p",
          "?": "p",
          "?": "q",
          q: "q",
          "?": "q",
          "?": "q",
          "?": "q",
          "?": "r",
          r: "r",
          r: "r",
          "?": "r",
          r: "r",
          "?": "r",
          "?": "r",
          "?": "r",
          "?": "r",
          r: "r",
          "?": "r",
          "?": "r",
          "?": "r",
          "?": "r",
          "?": "r",
          "?": "r",
          "?": "s",
          s: "s",
          "�": "s",
          s: "s",
          "?": "s",
          s: "s",
          "?": "s",
          "�": "s",
          "?": "s",
          "?": "s",
          "?": "s",
          "?": "s",
          s: "s",
          "?": "s",
          "?": "s",
          "?": "s",
          "?": "s",
          "?": "t",
          t: "t",
          "?": "t",
          "?": "t",
          t: "t",
          "?": "t",
          "?": "t",
          t: "t",
          "?": "t",
          "?": "t",
          t: "t",
          "?": "t",
          "?": "t",
          "?": "t",
          "?": "t",
          "?": "tz",
          "?": "u",
          u: "u",
          "�": "u",
          "�": "u",
          "�": "u",
          u: "u",
          "?": "u",
          u: "u",
          "?": "u",
          u: "u",
          "�": "u",
          u: "u",
          u: "u",
          u: "u",
          u: "u",
          "?": "u",
          u: "u",
          u: "u",
          u: "u",
          "?": "u",
          "?": "u",
          u: "u",
          "?": "u",
          "?": "u",
          "?": "u",
          "?": "u",
          "?": "u",
          "?": "u",
          "?": "u",
          u: "u",
          "?": "u",
          "?": "u",
          "?": "u",
          "?": "v",
          v: "v",
          "?": "v",
          "?": "v",
          "?": "v",
          "?": "v",
          "?": "v",
          "?": "vy",
          "?": "w",
          w: "w",
          "?": "w",
          "?": "w",
          w: "w",
          "?": "w",
          "?": "w",
          "?": "w",
          "?": "w",
          "?": "w",
          "?": "x",
          x: "x",
          "?": "x",
          "?": "x",
          "?": "y",
          y: "y",
          "?": "y",
          "�": "y",
          y: "y",
          "?": "y",
          "?": "y",
          "?": "y",
          "�": "y",
          "?": "y",
          "?": "y",
          "?": "y",
          "?": "y",
          "?": "y",
          "?": "y",
          "?": "z",
          z: "z",
          z: "z",
          "?": "z",
          z: "z",
          "�": "z",
          "?": "z",
          "?": "z",
          z: "z",
          "?": "z",
          "?": "z",
          "?": "z",
          "?": "z",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "O",
          "?": "a",
          "?": "e",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "?",
          "?": "s",
          "�": "'",
        };
      }),
      u.define("select2/data/base", ["../utils"], function (n) {
        function s(e, t) {
          s.__super__.constructor.call(this);
        }
        return (
          n.Extend(s, n.Observable),
          (s.prototype.current = function (e) {
            throw new Error(
              "The `current` method must be defined in child classes."
            );
          }),
          (s.prototype.query = function (e, t) {
            throw new Error(
              "The `query` method must be defined in child classes."
            );
          }),
          (s.prototype.bind = function (e, t) {}),
          (s.prototype.destroy = function () {}),
          (s.prototype.generateResultId = function (e, t) {
            e = e.id + "-result-";
            return (
              (e += n.generateChars(4)),
              null != t.id
                ? (e += "-" + t.id.toString())
                : (e += "-" + n.generateChars(4)),
              e
            );
          }),
          s
        );
      }),
      u.define(
        "select2/data/select",
        ["./base", "../utils", "jquery"],
        function (e, a, l) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            a.Extend(n, e),
            (n.prototype.current = function (e) {
              var t = this;
              e(
                Array.prototype.map.call(
                  this.$element[0].querySelectorAll(":checked"),
                  function (e) {
                    return t.item(l(e));
                  }
                )
              );
            }),
            (n.prototype.select = function (i) {
              var e,
                r = this;
              if (
                ((i.selected = !0),
                null != i.element &&
                  "option" === i.element.tagName.toLowerCase())
              )
                return (
                  (i.element.selected = !0),
                  void this.$element.trigger("input").trigger("change")
                );
              this.$element.prop("multiple")
                ? this.current(function (e) {
                    var t = [];
                    (i = [i]).push.apply(i, e);
                    for (var n = 0; n < i.length; n++) {
                      var s = i[n].id;
                      -1 === t.indexOf(s) && t.push(s);
                    }
                    r.$element.val(t),
                      r.$element.trigger("input").trigger("change");
                  })
                : ((e = i.id),
                  this.$element.val(e),
                  this.$element.trigger("input").trigger("change"));
            }),
            (n.prototype.unselect = function (i) {
              var r = this;
              if (this.$element.prop("multiple")) {
                if (
                  ((i.selected = !1),
                  null != i.element &&
                    "option" === i.element.tagName.toLowerCase())
                )
                  return (
                    (i.element.selected = !1),
                    void this.$element.trigger("input").trigger("change")
                  );
                this.current(function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var s = e[n].id;
                    s !== i.id && -1 === t.indexOf(s) && t.push(s);
                  }
                  r.$element.val(t),
                    r.$element.trigger("input").trigger("change");
                });
              }
            }),
            (n.prototype.bind = function (e, t) {
              var n = this;
              (this.container = e).on("select", function (e) {
                n.select(e.data);
              }),
                e.on("unselect", function (e) {
                  n.unselect(e.data);
                });
            }),
            (n.prototype.destroy = function () {
              this.$element.find("*").each(function () {
                a.RemoveData(this);
              });
            }),
            (n.prototype.query = function (t, e) {
              var n = [],
                s = this;
              this.$element.children().each(function () {
                var e;
                ("option" !== this.tagName.toLowerCase() &&
                  "optgroup" !== this.tagName.toLowerCase()) ||
                  ((e = l(this)),
                  (e = s.item(e)),
                  null !== (e = s.matches(t, e)) && n.push(e));
              }),
                e({ results: n });
            }),
            (n.prototype.addOptions = function (e) {
              this.$element.append(e);
            }),
            (n.prototype.option = function (e) {
              var t;
              e.children
                ? ((t = document.createElement("optgroup")).label = e.text)
                : void 0 !== (t = document.createElement("option")).textContent
                ? (t.textContent = e.text)
                : (t.innerText = e.text),
                void 0 !== e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
              e = this._normalizeItem(e);
              return (e.element = t), a.StoreData(t, "data", e), l(t);
            }),
            (n.prototype.item = function (e) {
              var t = {};
              if (null != (t = a.GetData(e[0], "data"))) return t;
              var n = e[0];
              if ("option" === n.tagName.toLowerCase())
                t = {
                  id: e.val(),
                  text: e.text(),
                  disabled: e.prop("disabled"),
                  selected: e.prop("selected"),
                  title: e.prop("title"),
                };
              else if ("optgroup" === n.tagName.toLowerCase()) {
                t = {
                  text: e.prop("label"),
                  children: [],
                  title: e.prop("title"),
                };
                for (
                  var s = e.children("option"), i = [], r = 0;
                  r < s.length;
                  r++
                ) {
                  var o = l(s[r]),
                    o = this.item(o);
                  i.push(o);
                }
                t.children = i;
              }
              return (
                ((t = this._normalizeItem(t)).element = e[0]),
                a.StoreData(e[0], "data", t),
                t
              );
            }),
            (n.prototype._normalizeItem = function (e) {
              e !== Object(e) && (e = { id: e, text: e });
              return (
                null != (e = l.extend({}, { text: "" }, e)).id &&
                  (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId &&
                  e.id &&
                  null != this.container &&
                  (e._resultId = this.generateResultId(this.container, e)),
                l.extend({}, { selected: !1, disabled: !1 }, e)
              );
            }),
            (n.prototype.matches = function (e, t) {
              return this.options.get("matcher")(e, t);
            }),
            n
          );
        }
      ),
      u.define(
        "select2/data/array",
        ["./select", "../utils", "jquery"],
        function (e, t, c) {
          function s(e, t) {
            (this._dataToConvert = t.get("data") || []),
              s.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(s, e),
            (s.prototype.bind = function (e, t) {
              s.__super__.bind.call(this, e, t),
                this.addOptions(this.convertToOptions(this._dataToConvert));
            }),
            (s.prototype.select = function (n) {
              var e = this.$element.find("option").filter(function (e, t) {
                return t.value == n.id.toString();
              });
              0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                s.__super__.select.call(this, n);
            }),
            (s.prototype.convertToOptions = function (e) {
              var t = this,
                n = this.$element.find("option"),
                s = n
                  .map(function () {
                    return t.item(c(this)).id;
                  })
                  .get(),
                i = [];
              for (var r = 0; r < e.length; r++) {
                var o,
                  a,
                  l = this._normalizeItem(e[r]);
                0 <= s.indexOf(l.id)
                  ? ((o = n.filter(
                      (function (e) {
                        return function () {
                          return c(this).val() == e.id;
                        };
                      })(l)
                    )),
                    (a = this.item(o)),
                    (a = c.extend(!0, {}, l, a)),
                    (a = this.option(a)),
                    o.replaceWith(a))
                  : ((a = this.option(l)),
                    l.children &&
                      ((l = this.convertToOptions(l.children)), a.append(l)),
                    i.push(a));
              }
              return i;
            }),
            s
          );
        }
      ),
      u.define(
        "select2/data/ajax",
        ["./array", "../utils", "jquery"],
        function (e, t, r) {
          function n(e, t) {
            (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
              null != this.ajaxOptions.processResults &&
                (this.processResults = this.ajaxOptions.processResults),
              n.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(n, e),
            (n.prototype._applyDefaults = function (e) {
              var t = {
                data: function (e) {
                  return r.extend({}, e, { q: e.term });
                },
                transport: function (e, t, n) {
                  e = r.ajax(e);
                  return e.then(t), e.fail(n), e;
                },
              };
              return r.extend({}, t, e, !0);
            }),
            (n.prototype.processResults = function (e) {
              return e;
            }),
            (n.prototype.query = function (t, n) {
              var s = this;
              null != this._request &&
                ("function" == typeof this._request.abort &&
                  this._request.abort(),
                (this._request = null));
              var i = r.extend({ type: "GET" }, this.ajaxOptions);
              function e() {
                var e = i.transport(
                  i,
                  function (e) {
                    e = s.processResults(e, t);
                    s.options.get("debug") &&
                      window.console &&
                      console.error &&
                      ((e && e.results && Array.isArray(e.results)) ||
                        console.error(
                          "Select2: The AJAX results did not return an array in the `results` key of the response."
                        )),
                      n(e);
                  },
                  function () {
                    ("status" in e && (0 === e.status || "0" === e.status)) ||
                      s.trigger("results:message", { message: "errorLoading" });
                  }
                );
                s._request = e;
              }
              "function" == typeof i.url &&
                (i.url = i.url.call(this.$element, t)),
                "function" == typeof i.data &&
                  (i.data = i.data.call(this.$element, t)),
                this.ajaxOptions.delay && null != t.term
                  ? (this._queryTimeout &&
                      window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(
                      e,
                      this.ajaxOptions.delay
                    )))
                  : e();
            }),
            n
          );
        }
      ),
      u.define("select2/data/tags", ["jquery"], function (t) {
        function e(e, t, n) {
          var s = n.get("tags"),
            i = n.get("createTag");
          void 0 !== i && (this.createTag = i);
          i = n.get("insertTag");
          if (
            (void 0 !== i && (this.insertTag = i),
            e.call(this, t, n),
            Array.isArray(s))
          )
            for (var r = 0; r < s.length; r++) {
              var o = s[r],
                o = this._normalizeItem(o),
                o = this.option(o);
              this.$element.append(o);
            }
        }
        return (
          (e.prototype.query = function (e, c, u) {
            var d = this;
            this._removeOldTags(),
              null != c.term && null == c.page
                ? e.call(this, c, function e(t, n) {
                    for (var s = t.results, i = 0; i < s.length; i++) {
                      var r = s[i],
                        o =
                          null != r.children && !e({ results: r.children }, !0);
                      if (
                        (r.text || "").toUpperCase() ===
                          (c.term || "").toUpperCase() ||
                        o
                      )
                        return !n && ((t.data = s), void u(t));
                    }
                    if (n) return !0;
                    var a,
                      l = d.createTag(c);
                    null != l &&
                      ((a = d.option(l)).attr("data-select2-tag", "true"),
                      d.addOptions([a]),
                      d.insertTag(s, l)),
                      (t.results = s),
                      u(t);
                  })
                : e.call(this, c, u);
          }),
          (e.prototype.createTag = function (e, t) {
            if (null == t.term) return null;
            t = t.term.trim();
            return "" === t ? null : { id: t, text: t };
          }),
          (e.prototype.insertTag = function (e, t, n) {
            t.unshift(n);
          }),
          (e.prototype._removeOldTags = function (e) {
            this.$element.find("option[data-select2-tag]").each(function () {
              this.selected || t(this).remove();
            });
          }),
          e
        );
      }),
      u.define("select2/data/tokenizer", ["jquery"], function (c) {
        function e(e, t, n) {
          var s = n.get("tokenizer");
          void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n),
              (this.$search =
                t.dropdown.$search ||
                t.selection.$search ||
                n.find(".select2-search__field"));
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            t.term = t.term || "";
            var i = this.tokenizer(t, this.options, function (e) {
              var t,
                n = s._normalizeItem(e);
              s.$element.find("option").filter(function () {
                return c(this).val() === n.id;
              }).length ||
                ((t = s.option(n)).attr("data-select2-tag", !0),
                s._removeOldTags(),
                s.addOptions([t])),
                (t = n),
                s.trigger("select", { data: t });
            });
            i.term !== t.term &&
              (this.$search.length &&
                (this.$search.val(i.term), this.$search.trigger("focus")),
              (t.term = i.term)),
              e.call(this, t, n);
          }),
          (e.prototype.tokenizer = function (e, t, n, s) {
            for (
              var i = n.get("tokenSeparators") || [],
                r = t.term,
                o = 0,
                a =
                  this.createTag ||
                  function (e) {
                    return { id: e.term, text: e.term };
                  };
              o < r.length;

            ) {
              var l = r[o];
              -1 !== i.indexOf(l)
                ? ((l = r.substr(0, o)),
                  null != (l = a(c.extend({}, t, { term: l })))
                    ? (s(l), (r = r.substr(o + 1) || ""), (o = 0))
                    : o++)
                : o++;
            }
            return { term: r };
          }),
          e
        );
      }),
      u.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          (this.minimumInputLength = n.get("minimumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              t.term.length < this.minimumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                      minimum: this.minimumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          (this.maximumInputLength = n.get("maximumInputLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ""),
              0 < this.maximumInputLength &&
              t.term.length > this.maximumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                      maximum: this.maximumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          (this.maximumSelectionLength = n.get("maximumSelectionLength")),
            e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("select", function () {
                s._checkIfMaximumSelected();
              });
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            this._checkIfMaximumSelected(function () {
              e.call(s, t, n);
            });
          }),
          (e.prototype._checkIfMaximumSelected = function (e, t) {
            var n = this;
            this.current(function (e) {
              e = null != e ? e.length : 0;
              0 < n.maximumSelectionLength && e >= n.maximumSelectionLength
                ? n.trigger("results:message", {
                    message: "maximumSelected",
                    args: { maximum: n.maximumSelectionLength },
                  })
                : t && t();
            });
          }),
          e
        );
      }),
      u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          (this.$element = e),
            (this.options = t),
            n.__super__.constructor.call(this);
        }
        return (
          e.Extend(n, e.Observable),
          (n.prototype.render = function () {
            var e = t(
              '<span class="select2-dropdown"><span class="select2-results"></span></span>'
            );
            return e.attr("dir", this.options.get("dir")), (this.$dropdown = e);
          }),
          (n.prototype.bind = function () {}),
          (n.prototype.position = function (e, t) {}),
          (n.prototype.destroy = function () {
            this.$dropdown.remove();
          }),
          n
        );
      }),
      u.define("select2/dropdown/search", ["jquery"], function (r) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              n = this.options.get("translations").get("search"),
              e = r(
                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
              );
            return (
              (this.$searchContainer = e),
              (this.$search = e.find("input")),
              this.$search.prop(
                "autocomplete",
                this.options.get("autocomplete")
              ),
              this.$search.attr("aria-label", n()),
              t.prepend(e),
              t
            );
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = t.id + "-results";
            e.call(this, t, n),
              this.$search.on("keydown", function (e) {
                s.trigger("keypress", e),
                  (s._keyUpPrevented = e.isDefaultPrevented());
              }),
              this.$search.on("input", function (e) {
                r(this).off("keyup");
              }),
              this.$search.on("keyup input", function (e) {
                s.handleSearch(e);
              }),
              t.on("open", function () {
                s.$search.attr("tabindex", 0),
                  s.$search.attr("aria-controls", i),
                  s.$search.trigger("focus"),
                  window.setTimeout(function () {
                    s.$search.trigger("focus");
                  }, 0);
              }),
              t.on("close", function () {
                s.$search.attr("tabindex", -1),
                  s.$search.removeAttr("aria-controls"),
                  s.$search.removeAttr("aria-activedescendant"),
                  s.$search.val(""),
                  s.$search.trigger("blur");
              }),
              t.on("focus", function () {
                t.isOpen() || s.$search.trigger("focus");
              }),
              t.on("results:all", function (e) {
                (null != e.query.term && "" !== e.query.term) ||
                  (s.showSearch(e)
                    ? s.$searchContainer[0].classList.remove(
                        "select2-search--hide"
                      )
                    : s.$searchContainer[0].classList.add(
                        "select2-search--hide"
                      ));
              }),
              t.on("results:focus", function (e) {
                e.data._resultId
                  ? s.$search.attr("aria-activedescendant", e.data._resultId)
                  : s.$search.removeAttr("aria-activedescendant");
              });
          }),
          (e.prototype.handleSearch = function (e) {
            var t;
            this._keyUpPrevented ||
              ((t = this.$search.val()), this.trigger("query", { term: t })),
              (this._keyUpPrevented = !1);
          }),
          (e.prototype.showSearch = function (e, t) {
            return !0;
          }),
          e
        );
      }),
      u.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, s) {
          (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n, s);
        }
        return (
          (e.prototype.append = function (e, t) {
            (t.results = this.removePlaceholder(t.results)), e.call(this, t);
          }),
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = { id: "", text: t }), t;
          }),
          (e.prototype.removePlaceholder = function (e, t) {
            for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
              var i = t[s];
              this.placeholder.id === i.id && n.splice(s, 1);
            }
            return n;
          }),
          e
        );
      }),
      u.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
        function e(e, t, n, s) {
          (this.lastParams = {}),
            e.call(this, t, n, s),
            (this.$loadingMore = this.createLoadingMore()),
            (this.loading = !1);
        }
        return (
          (e.prototype.append = function (e, t) {
            this.$loadingMore.remove(),
              (this.loading = !1),
              e.call(this, t),
              this.showLoadingMore(t) &&
                (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded());
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("query", function (e) {
                (s.lastParams = e), (s.loading = !0);
              }),
              t.on("query:append", function (e) {
                (s.lastParams = e), (s.loading = !0);
              }),
              this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
          }),
          (e.prototype.loadMoreIfNeeded = function () {
            var e = n.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading &&
              e &&
              ((e = this.$results.offset().top + this.$results.outerHeight(!1)),
              this.$loadingMore.offset().top +
                this.$loadingMore.outerHeight(!1) <=
                e + 50 && this.loadMore());
          }),
          (e.prototype.loadMore = function () {
            this.loading = !0;
            var e = n.extend({}, { page: 1 }, this.lastParams);
            e.page++, this.trigger("query:append", e);
          }),
          (e.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more;
          }),
          (e.prototype.createLoadingMore = function () {
            var e = n(
                '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
              ),
              t = this.options.get("translations").get("loadingMore");
            return e.html(t(this.lastParams)), e;
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/attachBody",
        ["jquery", "../utils"],
        function (u, o) {
          function e(e, t, n) {
            (this.$dropdownParent = u(
              n.get("dropdownParent") || document.body
            )),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                t.on("open", function () {
                  s._showDropdown(),
                    s._attachPositioningHandler(t),
                    s._bindContainerResultHandlers(t);
                }),
                t.on("close", function () {
                  s._hideDropdown(), s._detachPositioningHandler(t);
                }),
                this.$dropdownContainer.on("mousedown", function (e) {
                  e.stopPropagation();
                });
            }),
            (e.prototype.destroy = function (e) {
              e.call(this), this.$dropdownContainer.remove();
            }),
            (e.prototype.position = function (e, t, n) {
              t.attr("class", n.attr("class")),
                t[0].classList.remove("select2"),
                t[0].classList.add("select2-container--open"),
                t.css({ position: "absolute", top: -999999 }),
                (this.$container = n);
            }),
            (e.prototype.render = function (e) {
              var t = u("<span></span>"),
                e = e.call(this);
              return t.append(e), (this.$dropdownContainer = t);
            }),
            (e.prototype._hideDropdown = function (e) {
              this.$dropdownContainer.detach();
            }),
            (e.prototype._bindContainerResultHandlers = function (e, t) {
              var n;
              this._containerResultsHandlersBound ||
                ((n = this),
                t.on("results:all", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("results:append", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("results:message", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("select", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on("unselect", function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                (this._containerResultsHandlersBound = !0));
            }),
            (e.prototype._attachPositioningHandler = function (e, t) {
              var n = this,
                s = "scroll.select2." + t.id,
                i = "resize.select2." + t.id,
                r = "orientationchange.select2." + t.id,
                t = this.$container.parents().filter(o.hasScroll);
              t.each(function () {
                o.StoreData(this, "select2-scroll-position", {
                  x: u(this).scrollLeft(),
                  y: u(this).scrollTop(),
                });
              }),
                t.on(s, function (e) {
                  var t = o.GetData(this, "select2-scroll-position");
                  u(this).scrollTop(t.y);
                }),
                u(window).on(s + " " + i + " " + r, function (e) {
                  n._positionDropdown(), n._resizeDropdown();
                });
            }),
            (e.prototype._detachPositioningHandler = function (e, t) {
              var n = "scroll.select2." + t.id,
                s = "resize.select2." + t.id,
                t = "orientationchange.select2." + t.id;
              this.$container.parents().filter(o.hasScroll).off(n),
                u(window).off(n + " " + s + " " + t);
            }),
            (e.prototype._positionDropdown = function () {
              var e = u(window),
                t = this.$dropdown[0].classList.contains(
                  "select2-dropdown--above"
                ),
                n = this.$dropdown[0].classList.contains(
                  "select2-dropdown--below"
                ),
                s = null,
                i = this.$container.offset();
              i.bottom = i.top + this.$container.outerHeight(!1);
              var r = { height: this.$container.outerHeight(!1) };
              (r.top = i.top), (r.bottom = i.top + r.height);
              var o = this.$dropdown.outerHeight(!1),
                a = e.scrollTop(),
                l = e.scrollTop() + e.height(),
                c = a < i.top - o,
                e = l > i.bottom + o,
                a = { left: i.left, top: r.bottom },
                l = this.$dropdownParent;
              "static" === l.css("position") && (l = l.offsetParent());
              i = { top: 0, left: 0 };
              (u.contains(document.body, l[0]) || l[0].isConnected) &&
                (i = l.offset()),
                (a.top -= i.top),
                (a.left -= i.left),
                t || n || (s = "below"),
                e || !c || t ? !c && e && t && (s = "below") : (s = "above"),
                ("above" == s || (t && "below" !== s)) &&
                  (a.top = r.top - i.top - o),
                null != s &&
                  (this.$dropdown[0].classList.remove(
                    "select2-dropdown--below"
                  ),
                  this.$dropdown[0].classList.remove("select2-dropdown--above"),
                  this.$dropdown[0].classList.add("select2-dropdown--" + s),
                  this.$container[0].classList.remove(
                    "select2-container--below"
                  ),
                  this.$container[0].classList.remove(
                    "select2-container--above"
                  ),
                  this.$container[0].classList.add("select2-container--" + s)),
                this.$dropdownContainer.css(a);
            }),
            (e.prototype._resizeDropdown = function () {
              var e = { width: this.$container.outerWidth(!1) + "px" };
              this.options.get("dropdownAutoWidth") &&
                ((e.minWidth = e.width),
                (e.position = "relative"),
                (e.width = "auto")),
                this.$dropdown.css(e);
            }),
            (e.prototype._showDropdown = function (e) {
              this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown();
            }),
            e
          );
        }
      ),
      u.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, s) {
          (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
            this.minimumResultsForSearch < 0 &&
              (this.minimumResultsForSearch = 1 / 0),
            e.call(this, t, n, s);
        }
        return (
          (e.prototype.showSearch = function (e, t) {
            return (
              !(
                (function e(t) {
                  for (var n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.children ? (n += e(i.children)) : n++;
                  }
                  return n;
                })(t.data.results) < this.minimumResultsForSearch
              ) && e.call(this, t)
            );
          }),
          e
        );
      }),
      u.define("select2/dropdown/selectOnClose", ["../utils"], function (s) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("close", function (e) {
                s._handleSelectOnClose(e);
              });
          }),
          (e.prototype._handleSelectOnClose = function (e, t) {
            if (t && null != t.originalSelect2Event) {
              var n = t.originalSelect2Event;
              if ("select" === n._type || "unselect" === n._type) return;
            }
            n = this.getHighlightedResults();
            n.length < 1 ||
              (null != (n = s.GetData(n[0], "data")).element &&
                n.element.selected) ||
              (null == n.element && n.selected) ||
              this.trigger("select", { data: n });
          }),
          e
        );
      }),
      u.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on("select", function (e) {
                s._selectTriggered(e);
              }),
              t.on("unselect", function (e) {
                s._selectTriggered(e);
              });
          }),
          (e.prototype._selectTriggered = function (e, t) {
            var n = t.originalEvent;
            (n && (n.ctrlKey || n.metaKey)) ||
              this.trigger("close", {
                originalEvent: n,
                originalSelect2Event: t,
              });
          }),
          e
        );
      }),
      u.define("select2/dropdown/dropdownCss", ["../utils"], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get("dropdownCssClass") || "";
            return (
              -1 !== e.indexOf(":all:") &&
                ((e = e.replace(":all:", "")),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/tagsSearchHighlight",
        ["../utils"],
        function (s) {
          function e() {}
          return (
            (e.prototype.highlightFirstItem = function (e) {
              var t = this.$results.find(
                ".select2-results__option--selectable:not(.select2-results__option--selected)"
              );
              if (0 < t.length) {
                var n = t.first(),
                  t = s.GetData(n[0], "data").element;
                if (
                  t &&
                  t.getAttribute &&
                  "true" === t.getAttribute("data-select2-tag")
                )
                  return void n.trigger("mouseenter");
              }
              e.call(this);
            }),
            e
          );
        }
      ),
      u.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function () {
            return "The results could not be loaded.";
          },
          inputTooLong: function (e) {
            var t = e.input.length - e.maximum,
              e = "Please delete " + t + " character";
            return 1 != t && (e += "s"), e;
          },
          inputTooShort: function (e) {
            return (
              "Please enter " +
              (e.minimum - e.input.length) +
              " or more characters"
            );
          },
          loadingMore: function () {
            return "Loading more results�";
          },
          maximumSelected: function (e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function () {
            return "No results found";
          },
          searching: function () {
            return "Searching�";
          },
          removeAllItems: function () {
            return "Remove all items";
          },
          removeItem: function () {
            return "Remove item";
          },
          search: function () {
            return "Search";
          },
        };
      }),
      u.define(
        "select2/defaults",
        [
          "jquery",
          "./results",
          "./selection/single",
          "./selection/multiple",
          "./selection/placeholder",
          "./selection/allowClear",
          "./selection/search",
          "./selection/selectionCss",
          "./selection/eventRelay",
          "./utils",
          "./translation",
          "./diacritics",
          "./data/select",
          "./data/array",
          "./data/ajax",
          "./data/tags",
          "./data/tokenizer",
          "./data/minimumInputLength",
          "./data/maximumInputLength",
          "./data/maximumSelectionLength",
          "./dropdown",
          "./dropdown/search",
          "./dropdown/hidePlaceholder",
          "./dropdown/infiniteScroll",
          "./dropdown/attachBody",
          "./dropdown/minimumResultsForSearch",
          "./dropdown/selectOnClose",
          "./dropdown/closeOnSelect",
          "./dropdown/dropdownCss",
          "./dropdown/tagsSearchHighlight",
          "./i18n/en",
        ],
        function (
          l,
          r,
          o,
          a,
          c,
          u,
          d,
          p,
          h,
          f,
          g,
          t,
          m,
          y,
          v,
          _,
          b,
          $,
          w,
          x,
          A,
          D,
          S,
          E,
          O,
          C,
          L,
          T,
          q,
          I,
          e
        ) {
          function n() {
            this.reset();
          }
          return (
            (n.prototype.apply = function (e) {
              var t;
              null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                (null != e.ajax
                  ? (e.dataAdapter = v)
                  : null != e.data
                  ? (e.dataAdapter = y)
                  : (e.dataAdapter = m),
                0 < e.minimumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
                0 < e.maximumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
                0 < e.maximumSelectionLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
                e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
                (null == e.tokenSeparators && null == e.tokenizer) ||
                  (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
                null == e.resultsAdapter &&
                  ((e.resultsAdapter = r),
                  null != e.ajax &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)),
                  null != e.placeholder &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)),
                  e.selectOnClose &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)),
                  e.tags &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))),
                null == e.dropdownAdapter &&
                  (e.multiple
                    ? (e.dropdownAdapter = A)
                    : ((t = f.Decorate(A, D)), (e.dropdownAdapter = t)),
                  0 !== e.minimumResultsForSearch &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)),
                  e.closeOnSelect &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)),
                  null != e.dropdownCssClass &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)),
                  (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O))),
                null == e.selectionAdapter &&
                  (e.multiple
                    ? (e.selectionAdapter = a)
                    : (e.selectionAdapter = o),
                  null != e.placeholder &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)),
                  e.allowClear &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)),
                  e.multiple &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)),
                  null != e.selectionCssClass &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)),
                  (e.selectionAdapter = f.Decorate(e.selectionAdapter, h))),
                (e.language = this._resolveLanguage(e.language)),
                e.language.push("en");
              for (var n = [], s = 0; s < e.language.length; s++) {
                var i = e.language[s];
                -1 === n.indexOf(i) && n.push(i);
              }
              return (
                (e.language = n),
                (e.translations = this._processTranslations(
                  e.language,
                  e.debug
                )),
                e
              );
            }),
            (n.prototype.reset = function () {
              function a(e) {
                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                  return t[e] || e;
                });
              }
              this.defaults = {
                amdLanguageBase: "./i18n/",
                autocomplete: "off",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: f.escapeMarkup,
                language: {},
                matcher: function e(t, n) {
                  if (null == t.term || "" === t.term.trim()) return n;
                  if (n.children && 0 < n.children.length) {
                    for (
                      var s = l.extend(!0, {}, n), i = n.children.length - 1;
                      0 <= i;
                      i--
                    )
                      null == e(t, n.children[i]) && s.children.splice(i, 1);
                    return 0 < s.children.length ? s : e(t, s);
                  }
                  var r = a(n.text).toUpperCase(),
                    o = a(t.term).toUpperCase();
                  return -1 < r.indexOf(o) ? n : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                scrollAfterSelect: !1,
                sorter: function (e) {
                  return e;
                },
                templateResult: function (e) {
                  return e.text;
                },
                templateSelection: function (e) {
                  return e.text;
                },
                theme: "default",
                width: "resolve",
              };
            }),
            (n.prototype.applyFromElement = function (e, t) {
              var n = e.language,
                s = this.defaults.language,
                i = t.prop("lang"),
                t = t.closest("[lang]").prop("lang"),
                t = Array.prototype.concat.call(
                  this._resolveLanguage(i),
                  this._resolveLanguage(n),
                  this._resolveLanguage(s),
                  this._resolveLanguage(t)
                );
              return (e.language = t), e;
            }),
            (n.prototype._resolveLanguage = function (e) {
              if (!e) return [];
              if (l.isEmptyObject(e)) return [];
              if (l.isPlainObject(e)) return [e];
              for (
                var t, n = Array.isArray(e) ? e : [e], s = [], i = 0;
                i < n.length;
                i++
              )
                s.push(n[i]),
                  "string" == typeof n[i] &&
                    0 < n[i].indexOf("-") &&
                    ((t = n[i].split("-")[0]), s.push(t));
              return s;
            }),
            (n.prototype._processTranslations = function (e, t) {
              for (var n = new g(), s = 0; s < e.length; s++) {
                var i = new g(),
                  r = e[s];
                if ("string" == typeof r)
                  try {
                    i = g.loadPath(r);
                  } catch (e) {
                    try {
                      (r = this.defaults.amdLanguageBase + r),
                        (i = g.loadPath(r));
                    } catch (e) {
                      t &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            r +
                            '" could not be automatically loaded. A fallback will be used instead.'
                        );
                    }
                  }
                else i = l.isPlainObject(r) ? new g(r) : r;
                n.extend(i);
              }
              return n;
            }),
            (n.prototype.set = function (e, t) {
              var n = {};
              n[l.camelCase(e)] = t;
              n = f._convertData(n);
              l.extend(!0, this.defaults, n);
            }),
            new n()
          );
        }
      ),
      u.define(
        "select2/options",
        ["jquery", "./defaults", "./utils"],
        function (c, n, u) {
          function e(e, t) {
            (this.options = e),
              null != t && this.fromElement(t),
              null != t && (this.options = n.applyFromElement(this.options, t)),
              (this.options = n.apply(this.options));
          }
          return (
            (e.prototype.fromElement = function (e) {
              var t = ["select2"];
              null == this.options.multiple &&
                (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled &&
                  (this.options.disabled = e.prop("disabled")),
                null == this.options.autocomplete &&
                  e.prop("autocomplete") &&
                  (this.options.autocomplete = e.prop("autocomplete")),
                null == this.options.dir &&
                  (e.prop("dir")
                    ? (this.options.dir = e.prop("dir"))
                    : e.closest("[dir]").prop("dir")
                    ? (this.options.dir = e.closest("[dir]").prop("dir"))
                    : (this.options.dir = "ltr")),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                u.GetData(e[0], "select2Tags") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                    ),
                  u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")),
                  u.StoreData(e[0], "tags", !0)),
                u.GetData(e[0], "ajaxUrl") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                    ),
                  e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")),
                  u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl")));
              var n = {};
              function s(e, t) {
                return t.toUpperCase();
              }
              for (var i = 0; i < e[0].attributes.length; i++) {
                var r = e[0].attributes[i].name,
                  o = "data-";
                r.substr(0, o.length) == o &&
                  ((r = r.substring(o.length)),
                  (o = u.GetData(e[0], r)),
                  (n[r.replace(/-([a-z])/g, s)] = o));
              }
              c.fn.jquery &&
                "1." == c.fn.jquery.substr(0, 2) &&
                e[0].dataset &&
                (n = c.extend(!0, {}, e[0].dataset, n));
              var a,
                l = c.extend(!0, {}, u.GetData(e[0]), n);
              for (a in (l = u._convertData(l)))
                -1 < t.indexOf(a) ||
                  (c.isPlainObject(this.options[a])
                    ? c.extend(this.options[a], l[a])
                    : (this.options[a] = l[a]));
              return this;
            }),
            (e.prototype.get = function (e) {
              return this.options[e];
            }),
            (e.prototype.set = function (e, t) {
              this.options[e] = t;
            }),
            e
          );
        }
      ),
      u.define(
        "select2/core",
        ["jquery", "./options", "./utils", "./keys"],
        function (t, i, r, s) {
          var o = function (e, t) {
            null != r.GetData(e[0], "select2") &&
              r.GetData(e[0], "select2").destroy(),
              (this.$element = e),
              (this.id = this._generateId(e)),
              (t = t || {}),
              (this.options = new i(t, e)),
              o.__super__.constructor.call(this);
            var n = e.attr("tabindex") || 0;
            r.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
            t = this.options.get("dataAdapter");
            this.dataAdapter = new t(e, this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get("selectionAdapter");
            (this.selection = new t(e, this.options)),
              (this.$selection = this.selection.render()),
              this.selection.position(this.$selection, n);
            t = this.options.get("dropdownAdapter");
            (this.dropdown = new t(e, this.options)),
              (this.$dropdown = this.dropdown.render()),
              this.dropdown.position(this.$dropdown, n);
            n = this.options.get("resultsAdapter");
            (this.results = new n(e, this.options, this.dataAdapter)),
              (this.$results = this.results.render()),
              this.results.position(this.$results, this.$dropdown);
            var s = this;
            this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function (e) {
                s.trigger("selection:update", { data: e });
              }),
              e[0].classList.add("select2-hidden-accessible"),
              e.attr("aria-hidden", "true"),
              this._syncAttributes(),
              r.StoreData(e[0], "select2", this),
              e.data("select2", this);
          };
          return (
            r.Extend(o, r.Observable),
            (o.prototype._generateId = function (e) {
              return (
                "select2-" +
                (null != e.attr("id")
                  ? e.attr("id")
                  : null != e.attr("name")
                  ? e.attr("name") + "-" + r.generateChars(2)
                  : r.generateChars(4)
                ).replace(/(:|\.|\[|\]|,)/g, "")
              );
            }),
            (o.prototype._placeContainer = function (e) {
              e.insertAfter(this.$element);
              var t = this._resolveWidth(
                this.$element,
                this.options.get("width")
              );
              null != t && e.css("width", t);
            }),
            (o.prototype._resolveWidth = function (e, t) {
              var n =
                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == t) {
                var s = this._resolveWidth(e, "style");
                return null != s ? s : this._resolveWidth(e, "element");
              }
              if ("element" == t) {
                s = e.outerWidth(!1);
                return s <= 0 ? "auto" : s + "px";
              }
              if ("style" != t)
                return "computedstyle" != t
                  ? t
                  : window.getComputedStyle(e[0]).width;
              e = e.attr("style");
              if ("string" != typeof e) return null;
              for (var i = e.split(";"), r = 0, o = i.length; r < o; r += 1) {
                var a = i[r].replace(/\s/g, "").match(n);
                if (null !== a && 1 <= a.length) return a[1];
              }
              return null;
            }),
            (o.prototype._bindAdapters = function () {
              this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }),
            (o.prototype._registerDomEvents = function () {
              var t = this;
              this.$element.on("change.select2", function () {
                t.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
              }),
                this.$element.on("focus.select2", function (e) {
                  t.trigger("focus", e);
                }),
                (this._syncA = r.bind(this._syncAttributes, this)),
                (this._syncS = r.bind(this._syncSubtree, this)),
                (this._observer = new window.MutationObserver(function (e) {
                  t._syncA(), t._syncS(e);
                })),
                this._observer.observe(this.$element[0], {
                  attributes: !0,
                  childList: !0,
                  subtree: !1,
                });
            }),
            (o.prototype._registerDataEvents = function () {
              var n = this;
              this.dataAdapter.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (o.prototype._registerSelectionEvents = function () {
              var n = this,
                s = ["toggle", "focus"];
              this.selection.on("toggle", function () {
                n.toggleDropdown();
              }),
                this.selection.on("focus", function (e) {
                  n.focus(e);
                }),
                this.selection.on("*", function (e, t) {
                  -1 === s.indexOf(e) && n.trigger(e, t);
                });
            }),
            (o.prototype._registerDropdownEvents = function () {
              var n = this;
              this.dropdown.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (o.prototype._registerResultsEvents = function () {
              var n = this;
              this.results.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (o.prototype._registerEvents = function () {
              var n = this;
              this.on("open", function () {
                n.$container[0].classList.add("select2-container--open");
              }),
                this.on("close", function () {
                  n.$container[0].classList.remove("select2-container--open");
                }),
                this.on("enable", function () {
                  n.$container[0].classList.remove(
                    "select2-container--disabled"
                  );
                }),
                this.on("disable", function () {
                  n.$container[0].classList.add("select2-container--disabled");
                }),
                this.on("blur", function () {
                  n.$container[0].classList.remove("select2-container--focus");
                }),
                this.on("query", function (t) {
                  n.isOpen() || n.trigger("open", {}),
                    this.dataAdapter.query(t, function (e) {
                      n.trigger("results:all", { data: e, query: t });
                    });
                }),
                this.on("query:append", function (t) {
                  this.dataAdapter.query(t, function (e) {
                    n.trigger("results:append", { data: e, query: t });
                  });
                }),
                this.on("keypress", function (e) {
                  var t = e.which;
                  n.isOpen()
                    ? t === s.ESC || (t === s.UP && e.altKey)
                      ? (n.close(e), e.preventDefault())
                      : t === s.ENTER || t === s.TAB
                      ? (n.trigger("results:select", {}), e.preventDefault())
                      : t === s.SPACE && e.ctrlKey
                      ? (n.trigger("results:toggle", {}), e.preventDefault())
                      : t === s.UP
                      ? (n.trigger("results:previous", {}), e.preventDefault())
                      : t === s.DOWN &&
                        (n.trigger("results:next", {}), e.preventDefault())
                    : (t === s.ENTER ||
                        t === s.SPACE ||
                        (t === s.DOWN && e.altKey)) &&
                      (n.open(), e.preventDefault());
                });
            }),
            (o.prototype._syncAttributes = function () {
              this.options.set("disabled", this.$element.prop("disabled")),
                this.isDisabled()
                  ? (this.isOpen() && this.close(), this.trigger("disable", {}))
                  : this.trigger("enable", {});
            }),
            (o.prototype._isChangeMutation = function (e) {
              var t = this;
              if (e.addedNodes && 0 < e.addedNodes.length) {
                for (var n = 0; n < e.addedNodes.length; n++)
                  if (e.addedNodes[n].selected) return !0;
              } else {
                if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                if (Array.isArray(e))
                  return e.some(function (e) {
                    return t._isChangeMutation(e);
                  });
              }
              return !1;
            }),
            (o.prototype._syncSubtree = function (e) {
              var e = this._isChangeMutation(e),
                t = this;
              e &&
                this.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
            }),
            (o.prototype.trigger = function (e, t) {
              var n = o.__super__.trigger,
                s = {
                  open: "opening",
                  close: "closing",
                  select: "selecting",
                  unselect: "unselecting",
                  clear: "clearing",
                };
              if ((void 0 === t && (t = {}), e in s)) {
                var i = s[e],
                  s = { prevented: !1, name: e, args: t };
                if ((n.call(this, i, s), s.prevented))
                  return void (t.prevented = !0);
              }
              n.call(this, e, t);
            }),
            (o.prototype.toggleDropdown = function () {
              this.isDisabled() || (this.isOpen() ? this.close() : this.open());
            }),
            (o.prototype.open = function () {
              this.isOpen() || this.isDisabled() || this.trigger("query", {});
            }),
            (o.prototype.close = function (e) {
              this.isOpen() && this.trigger("close", { originalEvent: e });
            }),
            (o.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (o.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            (o.prototype.isOpen = function () {
              return this.$container[0].classList.contains(
                "select2-container--open"
              );
            }),
            (o.prototype.hasFocus = function () {
              return this.$container[0].classList.contains(
                "select2-container--focus"
              );
            }),
            (o.prototype.focus = function (e) {
              this.hasFocus() ||
                (this.$container[0].classList.add("select2-container--focus"),
                this.trigger("focus", {}));
            }),
            (o.prototype.enable = function (e) {
              this.options.get("debug") &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                ),
                (null != e && 0 !== e.length) || (e = [!0]);
              e = !e[0];
              this.$element.prop("disabled", e);
            }),
            (o.prototype.data = function () {
              this.options.get("debug") &&
                0 < arguments.length &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                );
              var t = [];
              return (
                this.dataAdapter.current(function (e) {
                  t = e;
                }),
                t
              );
            }),
            (o.prototype.val = function (e) {
              if (
                (this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                  ),
                null == e || 0 === e.length)
              )
                return this.$element.val();
              e = e[0];
              Array.isArray(e) &&
                (e = e.map(function (e) {
                  return e.toString();
                })),
                this.$element.val(e).trigger("input").trigger("change");
            }),
            (o.prototype.destroy = function () {
              r.RemoveData(this.$container[0]),
                this.$container.remove(),
                this._observer.disconnect(),
                (this._observer = null),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off(".select2"),
                this.$element.attr(
                  "tabindex",
                  r.GetData(this.$element[0], "old-tabindex")
                ),
                this.$element[0].classList.remove("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                r.RemoveData(this.$element[0]),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null);
            }),
            (o.prototype.render = function () {
              var e = t(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
              );
              return (
                e.attr("dir", this.options.get("dir")),
                (this.$container = e),
                this.$container[0].classList.add(
                  "select2-container--" + this.options.get("theme")
                ),
                r.StoreData(e[0], "element", this.$element),
                e
              );
            }),
            o
          );
        }
      ),
      u.define("jquery-mousewheel", ["jquery"], function (e) {
        return e;
      }),
      u.define(
        "jquery.select2",
        [
          "jquery",
          "jquery-mousewheel",
          "./select2/core",
          "./select2/defaults",
          "./select2/utils",
        ],
        function (i, e, r, t, o) {
          var a;
          return (
            null == i.fn.select2 &&
              ((a = ["open", "close", "destroy"]),
              (i.fn.select2 = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var e = i.extend(!0, {}, t);
                      new r(i(this), e);
                    }),
                    this
                  );
                if ("string" != typeof t)
                  throw new Error("Invalid arguments for Select2: " + t);
                var n,
                  s = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function () {
                    var e = o.GetData(this, "select2");
                    null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2."
                      ),
                      (n = e[t].apply(e, s));
                  }),
                  -1 < a.indexOf(t) ? this : n
                );
              })),
            null == i.fn.select2.defaults && (i.fn.select2.defaults = t),
            r
          );
        }
      ),
      { define: u.define, require: u.require });
  function b(e, t) {
    return i.call(e, t);
  }
  function l(e, t) {
    var n,
      s,
      i,
      r,
      o,
      a,
      l,
      c,
      u,
      d,
      p = t && t.split("/"),
      h = y.map,
      f = (h && h["*"]) || {};
    if (e) {
      for (
        t = (e = e.split("/")).length - 1,
          y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")),
          "." === e[0].charAt(0) &&
            p &&
            (e = p.slice(0, p.length - 1).concat(e)),
          c = 0;
        c < e.length;
        c++
      )
        "." === (d = e[c])
          ? (e.splice(c, 1), --c)
          : ".." === d &&
            (0 === c ||
              (1 === c && ".." === e[2]) ||
              ".." === e[c - 1] ||
              (0 < c && (e.splice(c - 1, 2), (c -= 2))));
      e = e.join("/");
    }
    if ((p || f) && h) {
      for (c = (n = e.split("/")).length; 0 < c; --c) {
        if (((s = n.slice(0, c).join("/")), p))
          for (u = p.length; 0 < u; --u)
            if (((i = h[p.slice(0, u).join("/")]), (i = i && i[s]))) {
              (r = i), (o = c);
              break;
            }
        if (r) break;
        !a && f && f[s] && ((a = f[s]), (l = c));
      }
      !r && a && ((r = a), (o = l)),
        r && (n.splice(0, o, r), (e = n.join("/")));
    }
    return e;
  }
  function w(t, n) {
    return function () {
      var e = a.call(arguments, 0);
      return (
        "string" != typeof e[0] && 1 === e.length && e.push(null),
        o.apply(p, e.concat([t, n]))
      );
    };
  }
  function x(e) {
    var t;
    if (
      (b(m, e) && ((t = m[e]), delete m[e], (v[e] = !0), r.apply(p, t)),
      !b(g, e) && !b(v, e))
    )
      throw new Error("No " + e);
    return g[e];
  }
  function c(e) {
    var t,
      n = e ? e.indexOf("!") : -1;
    return (
      -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
      [t, e]
    );
  }
  function A(e) {
    return e ? c(e) : [];
  }
  var u = s.require("jquery.select2");
  return (t.fn.select2.amd = s), u;
});

// 3. jquery.countTo
/*
Copyright (c) 2012-2014 Matt Huggins
The MIT License
https://github.com/mhuggins/jquery-countTo
*/
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a("object" == typeof exports ? require("jquery") : jQuery);
})(function (a) {
  function c(a, b) {
    return a.toFixed(b.decimals);
  }
  var b = function (c, d) {
    (this.$element = a(c)),
      (this.options = a.extend({}, b.DEFAULTS, this.dataOptions(), d)),
      this.init();
  };
  (b.DEFAULTS = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: c,
    onUpdate: null,
    onComplete: null,
  }),
    (b.prototype.init = function () {
      (this.value = this.options.from),
        (this.loops = Math.ceil(
          this.options.speed / this.options.refreshInterval
        )),
        (this.loopCount = 0),
        (this.increment = (this.options.to - this.options.from) / this.loops);
    }),
    (b.prototype.dataOptions = function () {
      var a = {
          from: this.$element.data("from"),
          to: this.$element.data("to"),
          speed: this.$element.data("speed"),
          refreshInterval: this.$element.data("refresh-interval"),
          decimals: this.$element.data("decimals"),
        },
        b = Object.keys(a);
      for (var c in b) {
        var d = b[c];
        "undefined" == typeof a[d] && delete a[d];
      }
      return a;
    }),
    (b.prototype.update = function () {
      (this.value += this.increment),
        this.loopCount++,
        this.render(),
        "function" == typeof this.options.onUpdate &&
          this.options.onUpdate.call(this.$element, this.value),
        this.loopCount >= this.loops &&
          (clearInterval(this.interval),
          (this.value = this.options.to),
          "function" == typeof this.options.onComplete &&
            this.options.onComplete.call(this.$element, this.value));
    }),
    (b.prototype.render = function () {
      var a = this.options.formatter.call(
        this.$element,
        this.value,
        this.options
      );
      this.$element.text(a);
    }),
    (b.prototype.restart = function () {
      this.stop(), this.init(), this.start();
    }),
    (b.prototype.start = function () {
      this.stop(),
        this.render(),
        (this.interval = setInterval(
          this.update.bind(this),
          this.options.refreshInterval
        ));
    }),
    (b.prototype.stop = function () {
      this.interval && clearInterval(this.interval);
    }),
    (b.prototype.toggle = function () {
      this.interval ? this.stop() : this.start();
    }),
    (a.fn.countTo = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("countTo"),
          f = !e || "object" == typeof c,
          g = "object" == typeof c ? c : {},
          h = "string" == typeof c ? c : "start";
        f && (e && e.stop(), d.data("countTo", (e = new b(this, g)))),
          e[h].call(e);
      });
    });
});

// 4. jQuery.appear v0.1
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!(function (a) {
  (a.fn.appear = function (b, c) {
    var d = a.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, c);
    return this.each(function () {
      var c = a(this);
      if (((c.appeared = !1), !b)) return void c.trigger("appear", d.data);
      var e = a(window),
        f = function () {
          if (!c.is(":visible")) return void (c.appeared = !1);
          var a = e.scrollLeft(),
            b = e.scrollTop(),
            f = c.offset(),
            g = f.left,
            h = f.top,
            i = d.accX,
            j = d.accY,
            k = c.height(),
            l = e.height(),
            m = c.width(),
            n = e.width();
          h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i
            ? c.appeared || c.trigger("appear", d.data)
            : (c.appeared = !1);
        },
        g = function () {
          if (((c.appeared = !0), d.one)) {
            e.unbind("scroll", f);
            var g = a.inArray(f, a.fn.appear.checks);
            g >= 0 && a.fn.appear.checks.splice(g, 1);
          }
          b.apply(this, arguments);
        };
      d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g),
        e.scroll(f),
        a.fn.appear.checks.push(f),
        f();
    });
  }),
    a.extend(a.fn.appear, {
      checks: [],
      timeout: null,
      checkAll: function () {
        var b = a.fn.appear.checks.length;
        if (b > 0) for (; b--; ) a.fn.appear.checks[b]();
      },
      run: function () {
        a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout),
          (a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20));
      },
    }),
    a.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (b, c) {
        var d = a.fn[c];
        d &&
          (a.fn[c] = function () {
            var b = d.apply(this, arguments);
            return a.fn.appear.run(), b;
          });
      }
    );
})(jQuery);

// 6. parallax
$(function () {
  "use strict";
  function b() {
    var b = $(this).outerHeight(),
      c = b / 2,
      d = a / 2,
      e = $(this).offset().top,
      f = $(window).scrollTop(),
      g = $(this).attr("data-parallax-speed"),
      h = e - a,
      i = e + b,
      j = e - a,
      k = c + e - (d + d / 2);
    h < 0 && ((h = 0), (i = a));
    var l = (f - h) / (i - h);
    (l *= 100), (l *= g), (l = l.toFixed(2));
    var m = (f - j) / (k - j);
    (m = m.toFixed(2)),
      m >= 1 && (m = 1),
      $(this).css("background-position", "center " + l + "%");
  }
  var a = $(window).height();
  $(".parallax").each(b),
    $(window).on("scroll", function (a) {
      $(".parallax").each(b);
    });
});

// 8. Owl Carousel v2.2.0
/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2017 David Deutsch
 * Licensed under the MIT License. (https://github.com/OwlCarousel2/OwlCarousel2/blob/develop/LICENSE)
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g--; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
              (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var b, c, e;
        (b = this.$element.find("img")),
          (c = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && e <= 0 && this.preloadAutoWidthImages(b);
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = a(
          "<" +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.$element.is(":visible") &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            g,
            a.proxy(function (a, h) {
              return (
                "left" === c && b > h - e && b < h + e
                  ? (d = a)
                  : "right" === c && b > h - f - e && b < h - f + e
                  ? (d = a + 1)
                  : this.op(b, "<", h) &&
                    this.op(b, ">", g[a + 1] || h - f) &&
                    (d = "left" === c ? a + 1 : a),
                d === -1
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", g[this.minimum()])
            ? (d = b = this.minimum())
            : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
        d
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(a)),
          this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        for (
          b = this._items.length,
            c = this._items[--b].width(),
            d = this.$element.width();
          b-- &&
          ((c += this._items[b].width() + this.settings.margin), !(c > d));

        );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h),
          d !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.$element.is(":visible") && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      return (
        (a === d ||
          (a.stopPropagation(),
          (a.target || a.srcElement || a.originalTarget) ===
            this.$stage.get(0))) &&
        (this.leave("animating"), void this.trigger("translated"))
      );
    }),
    (e.prototype.viewport = function () {
      var d;
      if (this.options.responsiveBaseElement !== b)
        d = a(this.options.responsiveBaseElement).width();
      else if (b.innerWidth) d = b.innerWidth;
      else {
        if (!c.documentElement || !c.documentElement.clientWidth)
          throw "Can not detect viewport width.";
        d = c.documentElement.clientWidth;
      }
      return d;
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger("remove", { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        this.settings.responsive !== !1 &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && a.namespace.indexOf("owl") !== -1)
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              )
                for (
                  var c = this._core.settings,
                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                    f = (c.center && e * -1) || 0,
                    g =
                      (b.property && b.property.value !== d
                        ? b.property.value
                        : this._core.current()) + f,
                    h = this._core.clones().length,
                    i = a.proxy(function (a, b) {
                      this.load(b);
                    }, this);
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage.children().toArray().slice(b, c),
          e = [],
          f = 0;
        a.each(d, function (b, c) {
          e.push(a(c).height());
        }),
          (f = Math.max.apply(null, e)),
          this._core.$stage
            .parent()
            .height(f)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        return (
          b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length
            ? (l(h.attr(i)), h.remove(), !1)
            : void ("youtube" === c.type
                ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                  l(f))
                : "vimeo" === c.type
                ? a.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a[0].thumbnail_large), l(f);
                    },
                  })
                : "vzaar" === c.type &&
                  a.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a.framegrab_url), l(f);
                    },
                  }))
        );
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          "youtube" === f.type
            ? (c =
                '<iframe width="' +
                g +
                '" height="' +
                h +
                '" src="//www.youtube.com/embed/' +
                f.id +
                "?autoplay=1&rel=0&v=" +
                f.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === f.type
            ? (c =
                '<iframe src="//player.vimeo.com/video/' +
                f.id +
                '?autoplay=1" width="' +
                g +
                '" height="' +
                h +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === f.type &&
              (c =
                '<iframe frameborder="0"height="' +
                h +
                '"width="' +
                g +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                f.id +
                '/player?autoplay=true"></iframe>'),
          a('<div class="owl-video-frame">' + c + "</div>").insertAfter(
            e.find(".owl-video")
          ),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (a, b) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (e.prototype._getNextTimeout = function (d, e) {
        return (
          this._timeout && b.clearTimeout(this._timeout),
          b.setTimeout(
            a.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                c.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed);
            }, this),
            d || this._core.settings.autoplayTimeout
          )
        );
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          (b.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a("<div>")
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

// 9. Swiper v4.4.0
/**
 * Swiper 4.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 14, 2018
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Swiper = t());
})(this, function () {
  "use strict";
  var f =
      "undefined" == typeof document
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document,
    Y =
      "undefined" == typeof window
        ? {
            document: f,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return "";
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    l = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return (this.length = e.length), this;
    };
  function L(e, t) {
    var a = [],
      i = 0;
    if (e && !t && e instanceof l) return e;
    if (e)
      if ("string" == typeof e) {
        var s,
          r,
          n = e.trim();
        if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
          var o = "div";
          for (
            0 === n.indexOf("<li") && (o = "ul"),
              0 === n.indexOf("<tr") && (o = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
              0 === n.indexOf("<tbody") && (o = "table"),
              0 === n.indexOf("<option") && (o = "select"),
              (r = f.createElement(o)).innerHTML = n,
              i = 0;
            i < r.childNodes.length;
            i += 1
          )
            a.push(r.childNodes[i]);
        } else
          for (
            s =
              t || "#" !== e[0] || e.match(/[ .<>:~]/)
                ? (t || f).querySelectorAll(e.trim())
                : [f.getElementById(e.trim().split("#")[1])],
              i = 0;
            i < s.length;
            i += 1
          )
            s[i] && a.push(s[i]);
      } else if (e.nodeType || e === Y || e === f) a.push(e);
      else if (0 < e.length && e[0].nodeType)
        for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new l(a);
  }
  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1)
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t;
  }
  (L.fn = l.prototype), (L.Class = l), (L.Dom7 = l);
  var t = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.add(t[a]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.remove(t[a]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.toggle(t[a]);
      return this;
    },
    attr: function (e, t) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var i = 0; i < this.length; i += 1)
        if (2 === a.length) this[i].setAttribute(e, t);
        else
          for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var a;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1)
          (a = this[i]).dom7ElementDataStorage ||
            (a.dom7ElementDataStorage = {}),
            (a.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((a = this[0])) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
          return a.dom7ElementDataStorage[e];
        var s = a.getAttribute("data-" + e);
        return s || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransform = e), (a.transform = e);
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransitionDuration = e), (a.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      var i = t[0],
        r = t[1],
        n = t[2],
        s = t[3];
      function o(e) {
        var t = e.target;
        if (t) {
          var a = e.target.dom7EventData || [];
          if ((a.indexOf(e) < 0 && a.unshift(e), L(t).is(r))) n.apply(t, a);
          else
            for (var i = L(t).parents(), s = 0; s < i.length; s += 1)
              L(i[s]).is(r) && n.apply(i[s], a);
        }
      }
      function l(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] &&
        ((i = (e = t)[0]), (n = e[1]), (s = e[2]), (r = void 0)),
        s || (s = !1);
      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (d = 0; d < p.length; d += 1) {
            var h = p[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
              u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }),
              u.addEventListener(h, o, s);
          }
        else
          for (d = 0; d < p.length; d += 1) {
            var v = p[d];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
              u.dom7Listeners[v].push({ listener: n, proxyListener: l }),
              u.addEventListener(v, l, s);
          }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] &&
        ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)),
        n || (n = !1);
      for (var o = i.split(" "), l = 0; l < o.length; l += 1)
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
            u = void 0;
          if (
            (!s && c.dom7Listeners
              ? (u = c.dom7Listeners[d])
              : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
            u && u.length)
          )
            for (var h = u.length - 1; 0 <= h; h -= 1) {
              var v = u[h];
              r && v.listener === r
                ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                : r ||
                  (c.removeEventListener(d, v.proxyListener, n),
                  u.splice(h, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
        for (var r = a[s], n = 0; n < this.length; n += 1) {
          var o = this[n],
            l = void 0;
          try {
            l = new Y.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (e) {
            (l = f.createEvent("Event")).initEvent(r, !0, !0), (l.detail = i);
          }
          (o.dom7EventData = e.filter(function (e, t) {
            return 0 < t;
          })),
            o.dispatchEvent(l),
            (o.dom7EventData = []),
            delete o.dom7EventData;
        }
      return this;
    },
    transitionEnd: function (t) {
      var a,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function r(e) {
        if (e.target === this)
          for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r);
      }
      if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
      return this;
    },
    outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (0 < this.length) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = f.body,
          i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0,
          r = e === Y ? Y.scrollY : e.scrollTop,
          n = e === Y ? Y.scrollX : e.scrollLeft;
        return { top: t.top + r - i, left: t.left + n - s };
      }
      return null;
    },
    css: function (e, t) {
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var i in e) this[a].style[i] = e[i];
          return this;
        }
        if (this[0])
          return Y.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      var t,
        a,
        i = this[0];
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
        return !1;
      }
      if (e === f) return i === f;
      if (e === Y) return i === Y;
      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
          if (t[a] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        a = this.length;
      return new l(
        a - 1 < e ? [] : e < 0 ? ((t = a + e) < 0 ? [] : [this[t]]) : [this[e]]
      );
    },
    append: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      for (var i = 0; i < t.length; i += 1) {
        e = t[i];
        for (var s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            var r = f.createElement("div");
            for (r.innerHTML = e; r.firstChild; )
              this[s].appendChild(r.firstChild);
          } else if (e instanceof l)
            for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
          else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      var t,
        a,
        i = this;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var s = f.createElement("div");
          for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1)
            i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]);
        } else if (e instanceof l)
          for (a = 0; a < e.length; a += 1)
            i[t].insertBefore(e[a], i[t].childNodes[0]);
        else i[t].insertBefore(e, i[t].childNodes[0]);
      return this;
    },
    next: function (e) {
      return 0 < this.length
        ? e
          ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e)
            ? new l([this[0].nextElementSibling])
            : new l([])
          : this[0].nextElementSibling
          ? new l([this[0].nextElementSibling])
          : new l([])
        : new l([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.nextElementSibling; ) {
        var i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
      }
      return new l(t);
    },
    prev: function (e) {
      if (0 < this.length) {
        var t = this[0];
        return e
          ? t.previousElementSibling && L(t.previousElementSibling).is(e)
            ? new l([t.previousElementSibling])
            : new l([])
          : t.previousElementSibling
          ? new l([t.previousElementSibling])
          : new l([]);
      }
      return new l([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.previousElementSibling; ) {
        var i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
      }
      return new l(t);
    },
    parent: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        null !== this[a].parentNode &&
          (e
            ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode)
            : t.push(this[a].parentNode));
      return L(r(t));
    },
    parents: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].parentNode; i; )
          e ? L(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      return L(r(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new l([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
          t.push(i[s]);
      return new l(t);
    },
    children: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
          e
            ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s])
            : 1 === i[s].nodeType && t.push(i[s]);
      return new l(r(t));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var a, i;
      for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);
        for (i = 0; i < s.length; i += 1)
          (this[this.length] = s[i]), (this.length += 1);
      }
      return this;
    },
    styles: function () {
      return this[0] ? Y.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e];
  });
  var e,
    a,
    i,
    V = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, t) {
        var a, i, s;
        void 0 === t && (t = "x");
        var r = Y.getComputedStyle(e, null);
        return (
          Y.WebKitCSSMatrix
            ? (6 < (i = r.transform || r.webkitTransform).split(",").length &&
                (i = i
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (s = new Y.WebKitCSSMatrix("none" === i ? "" : i)))
            : (a = (s =
                r.MozTransform ||
                r.OTransform ||
                r.MsTransform ||
                r.msTransform ||
                r.transform ||
                r
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (i = Y.WebKitCSSMatrix
              ? s.m41
              : 16 === a.length
              ? parseFloat(a[12])
              : parseFloat(a[4])),
          "y" === t &&
            (i = Y.WebKitCSSMatrix
              ? s.m42
              : 16 === a.length
              ? parseFloat(a[13])
              : parseFloat(a[5])),
          i || 0
        );
      },
      parseUrlQuery: function (e) {
        var t,
          a,
          i,
          s,
          r = {},
          n = e || Y.location.href;
        if ("string" == typeof n && n.length)
          for (
            s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (e) {
                return "" !== e;
              })).length,
              t = 0;
            t < s;
            t += 1
          )
            (i = a[t].replace(/#\S+/g, "").split("=")),
              (r[decodeURIComponent(i[0])] =
                void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
        return r;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s)
            for (
              var r = Object.keys(Object(s)), n = 0, o = r.length;
              n < o;
              n += 1
            ) {
              var l = r[n],
                d = Object.getOwnPropertyDescriptor(s, l);
              void 0 !== d &&
                d.enumerable &&
                (V.isObject(a[l]) && V.isObject(s[l])
                  ? V.extend(a[l], s[l])
                  : !V.isObject(a[l]) && V.isObject(s[l])
                  ? ((a[l] = {}), V.extend(a[l], s[l]))
                  : (a[l] = s[l]));
            }
        }
        return a;
      },
    },
    R =
      ((i = f.createElement("div")),
      {
        touch:
          (Y.Modernizr && !0 === Y.Modernizr.touch) ||
          !!(
            "ontouchstart" in Y ||
            (Y.DocumentTouch && f instanceof Y.DocumentTouch)
          ),
        pointerEvents: !(!Y.navigator.pointerEnabled && !Y.PointerEvent),
        prefixedPointerEvents: !!Y.navigator.msPointerEnabled,
        transition:
          ((a = i.style),
          "transition" in a || "webkitTransition" in a || "MozTransition" in a),
        transforms3d:
          (Y.Modernizr && !0 === Y.Modernizr.csstransforms3d) ||
          ((e = i.style),
          "webkitPerspective" in e ||
            "MozPerspective" in e ||
            "OPerspective" in e ||
            "MsPerspective" in e ||
            "perspective" in e),
        flexbox: (function () {
          for (
            var e = i.style,
              t =
                "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                  " "
                ),
              a = 0;
            a < t.length;
            a += 1
          )
            if (t[a] in e) return !0;
          return !1;
        })(),
        observer: "MutationObserver" in Y || "WebkitMutationObserver" in Y,
        passiveListener: (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            Y.addEventListener("testPassiveListener", null, t);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in Y,
      }),
    s = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    n = { components: { configurable: !0 } };
  (s.prototype.on = function (e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return (
      e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []),
          i.eventsListeners[e][s](t);
      }),
      i
    );
  }),
    (s.prototype.once = function (i, s, e) {
      var r = this;
      if ("function" != typeof s) return r;
      return r.on(
        i,
        function e() {
          for (var t = [], a = arguments.length; a--; ) t[a] = arguments[a];
          s.apply(r, t), r.off(i, e);
        },
        e
      );
    }),
    (s.prototype.off = function (e, i) {
      var s = this;
      return (
        s.eventsListeners &&
          e.split(" ").forEach(function (a) {
            void 0 === i
              ? (s.eventsListeners[a] = [])
              : s.eventsListeners[a] &&
                s.eventsListeners[a].length &&
                s.eventsListeners[a].forEach(function (e, t) {
                  e === i && s.eventsListeners[a].splice(t, 1);
                });
          }),
        s
      );
    }),
    (s.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var a,
        i,
        s,
        r = this;
      return (
        r.eventsListeners &&
          ("string" == typeof e[0] || Array.isArray(e[0])
            ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r))
            : ((a = e[0].events), (i = e[0].data), (s = e[0].context || r)),
          (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
              var t = [];
              r.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }),
                t.forEach(function (e) {
                  e.apply(s, i);
                });
            }
          })),
        r
      );
    }),
    (s.prototype.useModulesParams = function (a) {
      var i = this;
      i.modules &&
        Object.keys(i.modules).forEach(function (e) {
          var t = i.modules[e];
          t.params && V.extend(a, t.params);
        });
    }),
    (s.prototype.useModules = function (i) {
      void 0 === i && (i = {});
      var s = this;
      s.modules &&
        Object.keys(s.modules).forEach(function (e) {
          var a = s.modules[e],
            t = i[e] || {};
          a.instance &&
            Object.keys(a.instance).forEach(function (e) {
              var t = a.instance[e];
              s[e] = "function" == typeof t ? t.bind(s) : t;
            }),
            a.on &&
              s.on &&
              Object.keys(a.on).forEach(function (e) {
                s.on(e, a.on[e]);
              }),
            a.create && a.create.bind(s)(t);
        });
    }),
    (n.components.set = function (e) {
      this.use && this.use(e);
    }),
    (s.installModule = function (t) {
      for (var e = [], a = arguments.length - 1; 0 < a--; )
        e[a] = arguments[a + 1];
      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var s = t.name || Object.keys(i.prototype.modules).length + "_" + V.now();
      return (
        (i.prototype.modules[s] = t).proto &&
          Object.keys(t.proto).forEach(function (e) {
            i.prototype[e] = t.proto[e];
          }),
        t.static &&
          Object.keys(t.static).forEach(function (e) {
            i[e] = t.static[e];
          }),
        t.install && t.install.apply(i, e),
        i
      );
    }),
    (s.use = function (e) {
      for (var t = [], a = arguments.length - 1; 0 < a--; )
        t[a] = arguments[a + 1];
      var i = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return i.installModule(e);
          }),
          i)
        : i.installModule.apply(i, [e].concat(t));
    }),
    Object.defineProperties(s, n);
  var o = {
    updateSize: function () {
      var e,
        t,
        a = this,
        i = a.$el;
      (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
        (t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
        (0 === e && a.isHorizontal()) ||
          (0 === t && a.isVertical()) ||
          ((e =
            e -
            parseInt(i.css("padding-left"), 10) -
            parseInt(i.css("padding-right"), 10)),
          (t =
            t -
            parseInt(i.css("padding-top"), 10) -
            parseInt(i.css("padding-bottom"), 10)),
          V.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
    },
    updateSlides: function () {
      var e = this,
        t = e.params,
        a = e.$wrapperEl,
        i = e.size,
        s = e.rtlTranslate,
        r = e.wrongRTL,
        n = e.virtual && t.virtual.enabled,
        o = n ? e.virtual.slides.length : e.slides.length,
        l = a.children("." + e.params.slideClass),
        d = n ? e.virtual.slides.length : l.length,
        p = [],
        c = [],
        u = [],
        h = t.slidesOffsetBefore;
      "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var f = e.snapGrid.length,
        m = e.snapGrid.length,
        g = t.spaceBetween,
        b = -h,
        w = 0,
        y = 0;
      if (void 0 !== i) {
        var x, T;
        "string" == typeof g &&
          0 <= g.indexOf("%") &&
          (g = (parseFloat(g.replace("%", "")) / 100) * i),
          (e.virtualSize = -g),
          s
            ? l.css({ marginLeft: "", marginTop: "" })
            : l.css({ marginRight: "", marginBottom: "" }),
          1 < t.slidesPerColumn &&
            ((x =
              Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn
                ? d
                : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
            "auto" !== t.slidesPerView &&
              "row" === t.slidesPerColumnFill &&
              (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (
          var E,
            S = t.slidesPerColumn,
            C = x / S,
            M = C - (t.slidesPerColumn * C - d),
            k = 0;
          k < d;
          k += 1
        ) {
          T = 0;
          var z = l.eq(k);
          if (1 < t.slidesPerColumn) {
            var P = void 0,
              $ = void 0,
              L = void 0;
            "column" === t.slidesPerColumnFill
              ? ((L = k - ($ = Math.floor(k / S)) * S),
                (M < $ || ($ === M && L === S - 1)) &&
                  S <= (L += 1) &&
                  ((L = 0), ($ += 1)),
                (P = $ + (L * x) / S),
                z.css({
                  "-webkit-box-ordinal-group": P,
                  "-moz-box-ordinal-group": P,
                  "-ms-flex-order": P,
                  "-webkit-order": P,
                  order: P,
                }))
              : ($ = k - (L = Math.floor(k / C)) * C),
              z
                .css(
                  "margin-" + (e.isHorizontal() ? "top" : "left"),
                  0 !== L && t.spaceBetween && t.spaceBetween + "px"
                )
                .attr("data-swiper-column", $)
                .attr("data-swiper-row", L);
          }
          if ("none" !== z.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = Y.getComputedStyle(z[0], null),
                D = z[0].style.transform,
                O = z[0].style.webkitTransform;
              D && (z[0].style.transform = "none"),
                O && (z[0].style.webkitTransform = "none"),
                (T = t.roundLengths
                  ? e.isHorizontal()
                    ? z.outerWidth(!0)
                    : z.outerHeight(!0)
                  : e.isHorizontal()
                  ? z[0].getBoundingClientRect().width +
                    parseFloat(I.getPropertyValue("margin-left")) +
                    parseFloat(I.getPropertyValue("margin-right"))
                  : z[0].getBoundingClientRect().height +
                    parseFloat(I.getPropertyValue("margin-top")) +
                    parseFloat(I.getPropertyValue("margin-bottom"))),
                D && (z[0].style.transform = D),
                O && (z[0].style.webkitTransform = O),
                t.roundLengths && (T = Math.floor(T));
            } else
              (T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView),
                t.roundLengths && (T = Math.floor(T)),
                l[k] &&
                  (e.isHorizontal()
                    ? (l[k].style.width = T + "px")
                    : (l[k].style.height = T + "px"));
            l[k] && (l[k].swiperSlideSize = T),
              u.push(T),
              t.centeredSlides
                ? ((b = b + T / 2 + w / 2 + g),
                  0 === w && 0 !== k && (b = b - i / 2 - g),
                  0 === k && (b = b - i / 2 - g),
                  Math.abs(b) < 0.001 && (b = 0),
                  t.roundLengths && (b = Math.floor(b)),
                  y % t.slidesPerGroup == 0 && p.push(b),
                  c.push(b))
                : (t.roundLengths && (b = Math.floor(b)),
                  y % t.slidesPerGroup == 0 && p.push(b),
                  c.push(b),
                  (b = b + T + g)),
              (e.virtualSize += T + g),
              (w = T),
              (y += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + v),
          s &&
            r &&
            ("slide" === t.effect || "coverflow" === t.effect) &&
            a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
          (R.flexbox && !t.setWrapperSize) ||
            (e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
          1 < t.slidesPerColumn &&
            ((e.virtualSize = (T + t.spaceBetween) * x),
            (e.virtualSize =
              Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
            e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
            t.centeredSlides))
        ) {
          E = [];
          for (var A = 0; A < p.length; A += 1) {
            var H = p[A];
            t.roundLengths && (H = Math.floor(H)),
              p[A] < e.virtualSize + p[0] && E.push(H);
          }
          p = E;
        }
        if (!t.centeredSlides) {
          E = [];
          for (var B = 0; B < p.length; B += 1) {
            var G = p[B];
            t.roundLengths && (G = Math.floor(G)),
              p[B] <= e.virtualSize - i && E.push(G);
          }
          (p = E),
            1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) &&
              p.push(e.virtualSize - i);
        }
        if (
          (0 === p.length && (p = [0]),
          0 !== t.spaceBetween &&
            (e.isHorizontal()
              ? s
                ? l.css({ marginLeft: g + "px" })
                : l.css({ marginRight: g + "px" })
              : l.css({ marginBottom: g + "px" })),
          t.centerInsufficientSlides)
        ) {
          var N = 0;
          if (
            (u.forEach(function (e) {
              N += e + (t.spaceBetween ? t.spaceBetween : 0);
            }),
            (N -= t.spaceBetween) < i)
          ) {
            var X = (i - N) / 2;
            p.forEach(function (e, t) {
              p[t] = e - X;
            }),
              c.forEach(function (e, t) {
                c[t] = e + X;
              });
          }
        }
        V.extend(e, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u,
        }),
          d !== o && e.emit("slidesLengthChange"),
          p.length !== f &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          c.length !== m && e.emit("slidesGridLengthChange"),
          (t.watchSlidesProgress || t.watchSlidesVisibility) &&
            e.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        a = this,
        i = [],
        s = 0;
      if (
        ("number" == typeof e
          ? a.setTransition(e)
          : !0 === e && a.setTransition(a.params.speed),
        "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
      )
        for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
          var r = a.activeIndex + t;
          if (r > a.slides.length) break;
          i.push(a.slides.eq(r)[0]);
        }
      else i.push(a.slides.eq(a.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var n = i[t].offsetHeight;
          s = s < n ? n : s;
        }
      s && a.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this,
        a = t.params,
        i = t.slides,
        s = t.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        s && (r = e),
          i.removeClass(a.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l =
              (r +
                (a.centeredSlides ? t.minTranslate() : 0) -
                o.swiperSlideOffset) /
              (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
              p = d + t.slidesSizesGrid[n];
            ((0 <= d && d < t.size) ||
              (0 < p && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(n),
              i.eq(n).addClass(a.slideVisibleClass));
          }
          o.progress = s ? -l : l;
        }
        t.visibleSlides = L(t.visibleSlides);
      }
    },
    updateProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this,
        a = t.params,
        i = t.maxTranslate() - t.minTranslate(),
        s = t.progress,
        r = t.isBeginning,
        n = t.isEnd,
        o = r,
        l = n;
      0 === i
        ? (n = r = !(s = 0))
        : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = 1 <= s)),
        V.extend(t, { progress: s, isBeginning: r, isEnd: n }),
        (a.watchSlidesProgress || a.watchSlidesVisibility) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !l && t.emit("reachEnd toEdge"),
        ((o && !r) || (l && !n)) && t.emit("fromEdge"),
        t.emit("progress", s);
    },
    updateSlidesClasses: function () {
      var e,
        t = this,
        a = t.slides,
        i = t.params,
        s = t.$wrapperEl,
        r = t.activeIndex,
        n = t.realIndex,
        o = t.virtual && i.virtual.enabled;
      a.removeClass(
        i.slideActiveClass +
          " " +
          i.slideNextClass +
          " " +
          i.slidePrevClass +
          " " +
          i.slideDuplicateActiveClass +
          " " +
          i.slideDuplicateNextClass +
          " " +
          i.slideDuplicatePrevClass
      ),
        (e = o
          ? t.$wrapperEl.find(
              "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
            )
          : a.eq(r)).addClass(i.slideActiveClass),
        i.loop &&
          (e.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    n +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    n +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass));
      var l = e
        .nextAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
      var d = e
        .prevAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slidePrevClass);
      i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass),
          d.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    d.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    d.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
        a = this,
        i = a.rtlTranslate ? a.translate : -a.translate,
        s = a.slidesGrid,
        r = a.snapGrid,
        n = a.params,
        o = a.activeIndex,
        l = a.realIndex,
        d = a.snapIndex,
        p = e;
      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1)
          void 0 !== s[c + 1]
            ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
              ? (p = c)
              : i >= s[c] && i < s[c + 1] && (p = c + 1)
            : i >= s[c] && (p = c);
        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }
      if (
        ((t =
          0 <= r.indexOf(i)
            ? r.indexOf(i)
            : Math.floor(p / n.slidesPerGroup)) >= r.length &&
          (t = r.length - 1),
        p !== o)
      ) {
        var u = parseInt(
          a.slides.eq(p).attr("data-swiper-slide-index") || p,
          10
        );
        V.extend(a, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: p,
        }),
          a.emit("activeIndexChange"),
          a.emit("snapIndexChange"),
          l !== u && a.emit("realIndexChange"),
          a.emit("slideChange");
      } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this,
        a = t.params,
        i = L(e.target).closest("." + a.slideClass)[0],
        s = !1;
      if (i)
        for (var r = 0; r < t.slides.length; r += 1)
          t.slides[r] === i && (s = !0);
      if (!i || !s)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              L(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = L(i).index()),
        a.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var d = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        a = this.rtlTranslate,
        i = this.translate,
        s = this.$wrapperEl;
      if (t.virtualTranslate) return a ? -i : i;
      var r = V.getTranslate(s[0], e);
      return a && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var a = this,
        i = a.rtlTranslate,
        s = a.params,
        r = a.$wrapperEl,
        n = a.progress,
        o = 0,
        l = 0;
      a.isHorizontal() ? (o = i ? -e : e) : (l = e),
        s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
        s.virtualTranslate ||
          (R.transforms3d
            ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)")
            : r.transform("translate(" + o + "px, " + l + "px)")),
        (a.previousTranslate = a.translate),
        (a.translate = a.isHorizontal() ? o : l);
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
        a.emit("setTranslate", a.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
  };
  var p = {
    setTransition: function (e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.params,
        r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      var n = t;
      if (
        (n || (n = r < i ? "next" : i < r ? "prev" : "reset"),
        a.emit("transitionStart"),
        e && i !== r)
      ) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");
        a.emit("slideChangeTransitionStart"),
          "next" === n
            ? a.emit("slideNextTransitionStart")
            : a.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.previousIndex;
      (a.animating = !1), a.setTransition(0);
      var r = t;
      if (
        (r || (r = s < i ? "next" : i < s ? "prev" : "reset"),
        a.emit("transitionEnd"),
        e && i !== s)
      ) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");
        a.emit("slideChangeTransitionEnd"),
          "next" === r
            ? a.emit("slideNextTransitionEnd")
            : a.emit("slidePrevTransitionEnd");
      }
    },
  };
  var c = {
    slideTo: function (e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      var s = this,
        r = e;
      r < 0 && (r = 0);
      var n = s.params,
        o = s.snapGrid,
        l = s.slidesGrid,
        d = s.previousIndex,
        p = s.activeIndex,
        c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1),
        (p || n.initialSlide || 0) === (d || 0) &&
          a &&
          s.emit("beforeSlideChangeStart");
      var h,
        v = -o[u];
      if ((s.updateProgress(v), n.normalizeSlideIndex))
        for (var f = 0; f < l.length; f += 1)
          -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
          return !1;
        if (
          !s.allowSlidePrev &&
          v > s.translate &&
          v > s.maxTranslate() &&
          (p || 0) !== r
        )
          return !1;
      }
      return (
        (h = p < r ? "next" : r < p ? "prev" : "reset"),
        (c && -v === s.translate) || (!c && v === s.translate)
          ? (s.updateActiveIndex(r),
            n.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== n.effect && s.setTranslate(v),
            "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)),
            !1)
          : (0 !== t && R.transition
              ? (s.setTransition(t),
                s.setTranslate(v),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a, h),
                s.animating ||
                  ((s.animating = !0),
                  s.onSlideToWrapperTransitionEnd ||
                    (s.onSlideToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        (s.onSlideToWrapperTransitionEnd = null),
                        delete s.onSlideToWrapperTransitionEnd,
                        s.transitionEnd(a, h));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onSlideToWrapperTransitionEnd
                  )))
              : (s.setTransition(0),
                s.setTranslate(v),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a, h),
                s.transitionEnd(a, h)),
            !0)
      );
    },
    slideToLoop: function (e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      var s = e;
      return (
        this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
      );
    },
    slideNext: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating;
      return s.loop
        ? !r &&
            (i.loopFix(),
            (i._clientLeft = i.$wrapperEl[0].clientLeft),
            i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a))
        : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
    },
    slidePrev: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating,
        n = i.snapGrid,
        o = i.slidesGrid,
        l = i.rtlTranslate;
      if (s.loop) {
        if (r) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var p,
        c = d(l ? i.translate : -i.translate),
        u = n.map(function (e) {
          return d(e);
        }),
        h =
          (o.map(function (e) {
            return d(e);
          }),
          n[u.indexOf(c)],
          n[u.indexOf(c) - 1]);
      return (
        void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
        i.slideTo(p, e, t, a)
      );
    },
    slideReset: function (e, t, a) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, a)
      );
    },
    slideToClosest: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.activeIndex,
        r = Math.floor(s / i.params.slidesPerGroup);
      if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate,
          o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
      }
      return i.slideTo(s, e, t, a);
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        a = t.params,
        i = t.$wrapperEl,
        s =
          "auto" === a.slidesPerView
            ? t.slidesPerViewDynamic()
            : a.slidesPerView,
        r = t.clickedIndex;
      if (a.loop) {
        if (t.animating) return;
        (e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
          a.centeredSlides
            ? r < t.loopedSlides - s / 2 ||
              r > t.slides.length - t.loopedSlides + s / 2
              ? (t.loopFix(),
                (r = i
                  .children(
                    "." +
                      a.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      a.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                V.nextTick(function () {
                  t.slideTo(r);
                }))
              : t.slideTo(r)
            : r > t.slides.length - s
            ? (t.loopFix(),
              (r = i
                .children(
                  "." +
                    a.slideClass +
                    '[data-swiper-slide-index="' +
                    e +
                    '"]:not(.' +
                    a.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index()),
              V.nextTick(function () {
                t.slideTo(r);
              }))
            : t.slideTo(r);
      } else t.slideTo(r);
    },
  };
  var u = {
    loopCreate: function () {
      var i = this,
        e = i.params,
        t = i.$wrapperEl;
      t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
      var s = t.children("." + e.slideClass);
      if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - (s.length % e.slidesPerGroup);
        if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(
              e.slideClass + " " + e.slideBlankClass
            );
            t.append(n);
          }
          s = t.children("." + e.slideClass);
        }
      }
      "auto" !== e.slidesPerView ||
        e.loopedSlides ||
        (e.loopedSlides = s.length),
        (i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
        (i.loopedSlides += e.loopAdditionalSlides),
        i.loopedSlides > s.length && (i.loopedSlides = s.length);
      var o = [],
        l = [];
      s.each(function (e, t) {
        var a = L(t);
        e < i.loopedSlides && l.push(t),
          e < s.length && e >= s.length - i.loopedSlides && o.push(t),
          a.attr("data-swiper-slide-index", e);
      });
      for (var d = 0; d < l.length; d += 1)
        t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      for (var p = o.length - 1; 0 <= p; p -= 1)
        t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
    },
    loopFix: function () {
      var e,
        t = this,
        a = t.params,
        i = t.activeIndex,
        s = t.slides,
        r = t.loopedSlides,
        n = t.allowSlidePrev,
        o = t.allowSlideNext,
        l = t.snapGrid,
        d = t.rtlTranslate;
      (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
      var p = -l[i] - t.getTranslate();
      i < r
        ? ((e = s.length - 3 * r + i),
          (e += r),
          t.slideTo(e, 0, !1, !0) &&
            0 !== p &&
            t.setTranslate((d ? -t.translate : t.translate) - p))
        : (("auto" === a.slidesPerView && 2 * r <= i) || i >= s.length - r) &&
          ((e = -s.length + i + r),
          (e += r),
          t.slideTo(e, 0, !1, !0) &&
            0 !== p &&
            t.setTranslate((d ? -t.translate : t.translate) - p));
      (t.allowSlidePrev = n), (t.allowSlideNext = o);
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
        t = this.params,
        a = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(),
        a.removeAttr("data-swiper-slide-index");
    },
  };
  var h = {
    setGrabCursor: function (e) {
      if (
        !(
          R.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked)
        )
      ) {
        var t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      }
    },
    unsetGrabCursor: function () {
      R.touch ||
        (this.params.watchOverflow && this.isLocked) ||
        (this.el.style.cursor = "");
    },
  };
  var v = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
          for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
        else a.append(e);
        i.loop && t.loopCreate(), (i.observer && R.observer) || t.update();
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
          r = s + e.length;
        } else i.prepend(e);
        a.loop && t.loopCreate(),
          (a.observer && R.observer) || t.update(),
          t.slideTo(r, 0, !1);
      },
      addSlide: function (e, t) {
        var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;
        s.loop &&
          ((r -= a.loopedSlides),
          a.loopDestroy(),
          (a.slides = i.children("." + s.slideClass)));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);
        else if (n <= e) a.appendSlide(t);
        else {
          for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), l.unshift(p);
          }
          if ("object" == typeof t && "length" in t) {
            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
            o = e < r ? r + t.length : r;
          } else i.append(t);
          for (var u = 0; u < l.length; u += 1) i.append(l[u]);
          s.loop && a.loopCreate(),
            (s.observer && R.observer) || a.update(),
            s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop &&
          ((s -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = i.children("." + a.slideClass)));
        var r,
          n = s;
        if ("object" == typeof e && "length" in e) {
          for (var o = 0; o < e.length; o += 1)
            (r = e[o]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1);
          n = Math.max(n, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1),
            (n = Math.max(n, 0));
        a.loop && t.loopCreate(),
          (a.observer && R.observer) || t.update(),
          a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      },
    },
    m = (function () {
      var e = Y.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: Y.cordova || Y.phonegap,
          phonegap: Y.cordova || Y.phonegap,
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
        i &&
          !a &&
          ((t.os = "android"),
          (t.osVersion = i[2]),
          (t.android = !0),
          (t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome"))),
        (s || n || r) && ((t.os = "ios"), (t.ios = !0)),
        n && !r && ((t.osVersion = n[2].replace(/_/g, ".")), (t.iphone = !0)),
        s && ((t.osVersion = s[2].replace(/_/g, ".")), (t.ipad = !0)),
        r &&
          ((t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null),
          (t.iphone = !0)),
        t.ios &&
          t.osVersion &&
          0 <= e.indexOf("Version/") &&
          "10" === t.osVersion.split(".")[0] &&
          (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        (t.desktop = !(t.os || t.android || t.webView)),
        (t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
        t.os && "ios" === t.os)
      ) {
        var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');
        t.minimalUi =
          !t.webView &&
          (r || n) &&
          (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) &&
          l &&
          0 <= l.getAttribute("content").indexOf("minimal-ui");
      }
      return (t.pixelRatio = Y.devicePixelRatio || 1), t;
    })();
  function g() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      if (
        ((e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        t.freeMode)
      ) {
        var n = Math.min(
          Math.max(e.translate, e.maxTranslate()),
          e.minTranslate()
        );
        e.setTranslate(n),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          t.autoHeight && e.updateAutoHeight();
      } else
        e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0);
      (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  var b = {
    attachEvents: function () {
      var e = this,
        t = e.params,
        a = e.touchEvents,
        i = e.el,
        s = e.wrapperEl;
      (e.onTouchStart = function (e) {
        var t = this,
          a = t.touchEventsData,
          i = t.params,
          s = t.touches;
        if (!t.animating || !i.preventInteractionOnTransition) {
          var r = e;
          if (
            (r.originalEvent && (r = r.originalEvent),
            (a.isTouchEvent = "touchstart" === r.type),
            (a.isTouchEvent || !("which" in r) || 3 !== r.which) &&
              !(
                (!a.isTouchEvent && "button" in r && 0 < r.button) ||
                (a.isTouched && a.isMoved)
              ))
          )
            if (
              i.noSwiping &&
              L(r.target).closest(
                i.noSwipingSelector
                  ? i.noSwipingSelector
                  : "." + i.noSwipingClass
              )[0]
            )
              t.allowClick = !0;
            else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
              (s.currentX =
                "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX),
                (s.currentY =
                  "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
              var n = s.currentX,
                o = s.currentY,
                l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (!l || !(n <= d || n >= Y.screen.width - d)) {
                if (
                  (V.extend(a, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (s.startX = n),
                  (s.startY = o),
                  (a.touchStartTime = V.now()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  0 < i.threshold && (a.allowThresholdMove = !1),
                  "touchstart" !== r.type)
                ) {
                  var p = !0;
                  L(r.target).is(a.formElements) && (p = !1),
                    f.activeElement &&
                      L(f.activeElement).is(a.formElements) &&
                      f.activeElement !== r.target &&
                      f.activeElement.blur(),
                    p &&
                      t.allowTouchMove &&
                      t.touchStartPreventDefault &&
                      r.preventDefault();
                }
                t.emit("touchStart", r);
              }
            }
        }
      }.bind(e)),
        (e.onTouchMove = function (e) {
          var t = this,
            a = t.touchEventsData,
            i = t.params,
            s = t.touches,
            r = t.rtlTranslate,
            n = e;
          if ((n.originalEvent && (n = n.originalEvent), a.isTouched)) {
            if (!a.isTouchEvent || "mousemove" !== n.type) {
              var o =
                  "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
              if (n.preventedByNestedSwiper)
                return (s.startX = o), void (s.startY = l);
              if (!t.allowTouchMove)
                return (
                  (t.allowClick = !1),
                  void (
                    a.isTouched &&
                    (V.extend(s, {
                      startX: o,
                      startY: l,
                      currentX: o,
                      currentY: l,
                    }),
                    (a.touchStartTime = V.now()))
                  )
                );
              if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (t.isVertical()) {
                  if (
                    (l < s.startY && t.translate <= t.maxTranslate()) ||
                    (l > s.startY && t.translate >= t.minTranslate())
                  )
                    return (a.isTouched = !1), void (a.isMoved = !1);
                } else if (
                  (o < s.startX && t.translate <= t.maxTranslate()) ||
                  (o > s.startX && t.translate >= t.minTranslate())
                )
                  return;
              if (
                a.isTouchEvent &&
                f.activeElement &&
                n.target === f.activeElement &&
                L(n.target).is(a.formElements)
              )
                return (a.isMoved = !0), void (t.allowClick = !1);
              if (
                (a.allowTouchCallbacks && t.emit("touchMove", n),
                !(n.targetTouches && 1 < n.targetTouches.length))
              ) {
                (s.currentX = o), (s.currentY = l);
                var d,
                  p = s.currentX - s.startX,
                  c = s.currentY - s.startY;
                if (
                  !(
                    t.params.threshold &&
                    Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) <
                      t.params.threshold
                  )
                )
                  if (
                    (void 0 === a.isScrolling &&
                      ((t.isHorizontal() && s.currentY === s.startY) ||
                      (t.isVertical() && s.currentX === s.startX)
                        ? (a.isScrolling = !1)
                        : 25 <= p * p + c * c &&
                          ((d =
                            (180 * Math.atan2(Math.abs(c), Math.abs(p))) /
                            Math.PI),
                          (a.isScrolling = t.isHorizontal()
                            ? d > i.touchAngle
                            : 90 - d > i.touchAngle))),
                    a.isScrolling && t.emit("touchMoveOpposite", n),
                    void 0 === a.startMoving &&
                      ((s.currentX === s.startX && s.currentY === s.startY) ||
                        (a.startMoving = !0)),
                    a.isScrolling)
                  )
                    a.isTouched = !1;
                  else if (a.startMoving) {
                    (t.allowClick = !1),
                      n.preventDefault(),
                      i.touchMoveStopPropagation &&
                        !i.nested &&
                        n.stopPropagation(),
                      a.isMoved ||
                        (i.loop && t.loopFix(),
                        (a.startTranslate = t.getTranslate()),
                        t.setTransition(0),
                        t.animating &&
                          t.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (a.allowMomentumBounce = !1),
                        !i.grabCursor ||
                          (!0 !== t.allowSlideNext &&
                            !0 !== t.allowSlidePrev) ||
                          t.setGrabCursor(!0),
                        t.emit("sliderFirstMove", n)),
                      t.emit("sliderMove", n),
                      (a.isMoved = !0);
                    var u = t.isHorizontal() ? p : c;
                    (s.diff = u),
                      (u *= i.touchRatio),
                      r && (u = -u),
                      (t.swipeDirection = 0 < u ? "prev" : "next"),
                      (a.currentTranslate = u + a.startTranslate);
                    var h = !0,
                      v = i.resistanceRatio;
                    if (
                      (i.touchReleaseOnEdges && (v = 0),
                      0 < u && a.currentTranslate > t.minTranslate()
                        ? ((h = !1),
                          i.resistance &&
                            (a.currentTranslate =
                              t.minTranslate() -
                              1 +
                              Math.pow(
                                -t.minTranslate() + a.startTranslate + u,
                                v
                              )))
                        : u < 0 &&
                          a.currentTranslate < t.maxTranslate() &&
                          ((h = !1),
                          i.resistance &&
                            (a.currentTranslate =
                              t.maxTranslate() +
                              1 -
                              Math.pow(
                                t.maxTranslate() - a.startTranslate - u,
                                v
                              ))),
                      h && (n.preventedByNestedSwiper = !0),
                      !t.allowSlideNext &&
                        "next" === t.swipeDirection &&
                        a.currentTranslate < a.startTranslate &&
                        (a.currentTranslate = a.startTranslate),
                      !t.allowSlidePrev &&
                        "prev" === t.swipeDirection &&
                        a.currentTranslate > a.startTranslate &&
                        (a.currentTranslate = a.startTranslate),
                      0 < i.threshold)
                    ) {
                      if (!(Math.abs(u) > i.threshold || a.allowThresholdMove))
                        return void (a.currentTranslate = a.startTranslate);
                      if (!a.allowThresholdMove)
                        return (
                          (a.allowThresholdMove = !0),
                          (s.startX = s.currentX),
                          (s.startY = s.currentY),
                          (a.currentTranslate = a.startTranslate),
                          void (s.diff = t.isHorizontal()
                            ? s.currentX - s.startX
                            : s.currentY - s.startY)
                        );
                    }
                    i.followFinger &&
                      ((i.freeMode ||
                        i.watchSlidesProgress ||
                        i.watchSlidesVisibility) &&
                        (t.updateActiveIndex(), t.updateSlidesClasses()),
                      i.freeMode &&
                        (0 === a.velocities.length &&
                          a.velocities.push({
                            position: s[t.isHorizontal() ? "startX" : "startY"],
                            time: a.touchStartTime,
                          }),
                        a.velocities.push({
                          position:
                            s[t.isHorizontal() ? "currentX" : "currentY"],
                          time: V.now(),
                        })),
                      t.updateProgress(a.currentTranslate),
                      t.setTranslate(a.currentTranslate));
                  }
              }
            }
          } else
            a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
        }.bind(e)),
        (e.onTouchEnd = function (e) {
          var t = this,
            a = t.touchEventsData,
            i = t.params,
            s = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            d = e;
          if (
            (d.originalEvent && (d = d.originalEvent),
            a.allowTouchCallbacks && t.emit("touchEnd", d),
            (a.allowTouchCallbacks = !1),
            !a.isTouched)
          )
            return (
              a.isMoved && i.grabCursor && t.setGrabCursor(!1),
              (a.isMoved = !1),
              void (a.startMoving = !1)
            );
          i.grabCursor &&
            a.isMoved &&
            a.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var p,
            c = V.now(),
            u = c - a.touchStartTime;
          if (
            (t.allowClick &&
              (t.updateClickedSlide(d),
              t.emit("tap", d),
              u < 300 &&
                300 < c - a.lastClickTime &&
                (a.clickTimeout && clearTimeout(a.clickTimeout),
                (a.clickTimeout = V.nextTick(function () {
                  t && !t.destroyed && t.emit("click", d);
                }, 300))),
              u < 300 &&
                c - a.lastClickTime < 300 &&
                (a.clickTimeout && clearTimeout(a.clickTimeout),
                t.emit("doubleTap", d))),
            (a.lastClickTime = V.now()),
            V.nextTick(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !a.isTouched ||
              !a.isMoved ||
              !t.swipeDirection ||
              0 === s.diff ||
              a.currentTranslate === a.startTranslate)
          )
            return (
              (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1)
            );
          if (
            ((a.isTouched = !1),
            (a.isMoved = !1),
            (a.startMoving = !1),
            (p = i.followFinger
              ? r
                ? t.translate
                : -t.translate
              : -a.currentTranslate),
            i.freeMode)
          ) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (p > -t.maxTranslate())
              return void (t.slides.length < l.length
                ? t.slideTo(l.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (1 < a.velocities.length) {
                var h = a.velocities.pop(),
                  v = a.velocities.pop(),
                  f = h.position - v.position,
                  m = h.time - v.time;
                (t.velocity = f / m),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                    (t.velocity = 0),
                  (150 < m || 300 < V.now() - h.time) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= i.freeModeMomentumVelocityRatio),
                (a.velocities.length = 0);
              var g = 1e3 * i.freeModeMomentumRatio,
                b = t.velocity * g,
                w = t.translate + b;
              r && (w = -w);
              var y,
                x,
                T = !1,
                E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (w < t.maxTranslate())
                i.freeModeMomentumBounce
                  ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E),
                    (y = t.maxTranslate()),
                    (T = !0),
                    (a.allowMomentumBounce = !0))
                  : (w = t.maxTranslate()),
                  i.loop && i.centeredSlides && (x = !0);
              else if (w > t.minTranslate())
                i.freeModeMomentumBounce
                  ? (w - t.minTranslate() > E && (w = t.minTranslate() + E),
                    (y = t.minTranslate()),
                    (T = !0),
                    (a.allowMomentumBounce = !0))
                  : (w = t.minTranslate()),
                  i.loop && i.centeredSlides && (x = !0);
              else if (i.freeModeSticky) {
                for (var S, C = 0; C < l.length; C += 1)
                  if (l[C] > -w) {
                    S = C;
                    break;
                  }
                w = -(w =
                  Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) ||
                  "next" === t.swipeDirection
                    ? l[S]
                    : l[S - 1]);
              }
              if (
                (x &&
                  t.once("transitionEnd", function () {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              )
                g = r
                  ? Math.abs((-w - t.translate) / t.velocity)
                  : Math.abs((w - t.translate) / t.velocity);
              else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && T
                ? (t.updateProgress(y),
                  t.setTransition(g),
                  t.setTranslate(w),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  n.transitionEnd(function () {
                    t &&
                      !t.destroyed &&
                      a.allowMomentumBounce &&
                      (t.emit("momentumBounce"),
                      t.setTransition(i.speed),
                      t.setTranslate(y),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      }));
                  }))
                : t.velocity
                ? (t.updateProgress(w),
                  t.setTransition(g),
                  t.setTranslate(w),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    n.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : t.updateProgress(w),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else if (i.freeModeSticky) return void t.slideToClosest();
            (!i.freeModeMomentum || u >= i.longSwipesMs) &&
              (t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses());
          } else {
            for (
              var M = 0, k = t.slidesSizesGrid[0], z = 0;
              z < o.length;
              z += i.slidesPerGroup
            )
              void 0 !== o[z + i.slidesPerGroup]
                ? p >= o[z] &&
                  p < o[z + i.slidesPerGroup] &&
                  (k = o[(M = z) + i.slidesPerGroup] - o[z])
                : p >= o[z] &&
                  ((M = z), (k = o[o.length - 1] - o[o.length - 2]));
            var P = (p - o[M]) / k;
            if (u > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection &&
                (P >= i.longSwipesRatio
                  ? t.slideTo(M + i.slidesPerGroup)
                  : t.slideTo(M)),
                "prev" === t.swipeDirection &&
                  (P > 1 - i.longSwipesRatio
                    ? t.slideTo(M + i.slidesPerGroup)
                    : t.slideTo(M));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup),
                "prev" === t.swipeDirection && t.slideTo(M);
            }
          }
        }.bind(e)),
        (e.onClick = function (e) {
          this.allowClick ||
            (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation &&
              this.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation()));
        }.bind(e));
      var r = "container" === t.touchEventsTarget ? i : s,
        n = !!t.nested;
      if (R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)) {
        if (R.touch) {
          var o = !(
            "touchstart" !== a.start ||
            !R.passiveListener ||
            !t.passiveListeners
          ) && { passive: !0, capture: !1 };
          r.addEventListener(a.start, e.onTouchStart, o),
            r.addEventListener(
              a.move,
              e.onTouchMove,
              R.passiveListener ? { passive: !1, capture: n } : n
            ),
            r.addEventListener(a.end, e.onTouchEnd, o);
        }
        ((t.simulateTouch && !m.ios && !m.android) ||
          (t.simulateTouch && !R.touch && m.ios)) &&
          (r.addEventListener("mousedown", e.onTouchStart, !1),
          f.addEventListener("mousemove", e.onTouchMove, n),
          f.addEventListener("mouseup", e.onTouchEnd, !1));
      } else
        r.addEventListener(a.start, e.onTouchStart, !1),
          f.addEventListener(a.move, e.onTouchMove, n),
          f.addEventListener(a.end, e.onTouchEnd, !1);
      (t.preventClicks || t.preventClicksPropagation) &&
        r.addEventListener("click", e.onClick, !0),
        e.on(
          m.ios || m.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          g,
          !0
        );
    },
    detachEvents: function () {
      var e = this,
        t = e.params,
        a = e.touchEvents,
        i = e.el,
        s = e.wrapperEl,
        r = "container" === t.touchEventsTarget ? i : s,
        n = !!t.nested;
      if (R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)) {
        if (R.touch) {
          var o = !(
            "onTouchStart" !== a.start ||
            !R.passiveListener ||
            !t.passiveListeners
          ) && { passive: !0, capture: !1 };
          r.removeEventListener(a.start, e.onTouchStart, o),
            r.removeEventListener(a.move, e.onTouchMove, n),
            r.removeEventListener(a.end, e.onTouchEnd, o);
        }
        ((t.simulateTouch && !m.ios && !m.android) ||
          (t.simulateTouch && !R.touch && m.ios)) &&
          (r.removeEventListener("mousedown", e.onTouchStart, !1),
          f.removeEventListener("mousemove", e.onTouchMove, n),
          f.removeEventListener("mouseup", e.onTouchEnd, !1));
      } else
        r.removeEventListener(a.start, e.onTouchStart, !1),
          f.removeEventListener(a.move, e.onTouchMove, n),
          f.removeEventListener(a.end, e.onTouchEnd, !1);
      (t.preventClicks || t.preventClicksPropagation) &&
        r.removeEventListener("click", e.onClick, !0),
        e.off(
          m.ios || m.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          g
        );
    },
  };
  var w,
    y = {
      setBreakpoint: function () {
        var e = this,
          t = e.activeIndex,
          a = e.initialized,
          i = e.loopedSlides;
        void 0 === i && (i = 0);
        var s = e.params,
          r = s.breakpoints;
        if (r && (!r || 0 !== Object.keys(r).length)) {
          var n = e.getBreakpoint(r);
          if (n && e.currentBreakpoint !== n) {
            var o = n in r ? r[n] : e.originalParams,
              l = s.loop && o.slidesPerView !== s.slidesPerView;
            V.extend(e.params, o),
              V.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
              (e.currentBreakpoint = n),
              l &&
                a &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - i + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", o);
          }
        }
      },
      getBreakpoint: function (e) {
        if (e) {
          var t = !1,
            a = [];
          Object.keys(e).forEach(function (e) {
            a.push(e);
          }),
            a.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            });
          for (var i = 0; i < a.length; i += 1) {
            var s = a[i];
            this.params.breakpointsInverse
              ? s <= Y.innerWidth && (t = s)
              : s >= Y.innerWidth && !t && (t = s);
          }
          return t || "max";
        }
      },
    },
    I = {
      isIE:
        !!Y.navigator.userAgent.match(/Trident/g) ||
        !!Y.navigator.userAgent.match(/MSIE/g),
      isEdge: !!Y.navigator.userAgent.match(/Edge/g),
      isSafari:
        ((w = Y.navigator.userAgent.toLowerCase()),
        0 <= w.indexOf("safari") &&
          w.indexOf("chrome") < 0 &&
          w.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        Y.navigator.userAgent
      ),
    };
  var x = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    T = {
      update: o,
      translate: d,
      transition: p,
      slide: c,
      loop: u,
      grabCursor: h,
      manipulation: v,
      events: b,
      breakpoints: y,
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.isLocked;
          (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var t = this.classNames,
            a = this.params,
            e = this.rtl,
            i = this.$el,
            s = [];
          s.push(a.direction),
            a.freeMode && s.push("free-mode"),
            R.flexbox || s.push("no-flexbox"),
            a.autoHeight && s.push("autoheight"),
            e && s.push("rtl"),
            1 < a.slidesPerColumn && s.push("multirow"),
            m.android && s.push("android"),
            m.ios && s.push("ios"),
            (I.isIE || I.isEdge) &&
              (R.pointerEvents || R.prefixedPointerEvents) &&
              s.push("wp8-" + a.direction),
            s.forEach(function (e) {
              t.push(a.containerModifierClass + e);
            }),
            i.addClass(t.join(" "));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        },
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n;
          function o() {
            r && r();
          }
          e.complete && s
            ? o()
            : t
            ? (((n = new Y.Image()).onload = o),
              (n.onerror = o),
              i && (n.sizes = i),
              a && (n.srcset = a),
              t && (n.src = t))
            : o();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    E = {},
    S = (function (u) {
      function h() {
        for (var e, t, s, a = [], i = arguments.length; i--; )
          a[i] = arguments[i];
        1 === a.length && a[0].constructor && a[0].constructor === Object
          ? (s = a[0])
          : ((t = (e = a)[0]), (s = e[1])),
          s || (s = {}),
          (s = V.extend({}, s)),
          t && !s.el && (s.el = t),
          u.call(this, s),
          Object.keys(T).forEach(function (t) {
            Object.keys(T[t]).forEach(function (e) {
              h.prototype[e] || (h.prototype[e] = T[t][e]);
            });
          });
        var r = this;
        void 0 === r.modules && (r.modules = {}),
          Object.keys(r.modules).forEach(function (e) {
            var t = r.modules[e];
            if (t.params) {
              var a = Object.keys(t.params)[0],
                i = t.params[a];
              if ("object" != typeof i || null === i) return;
              if (!(a in s && "enabled" in i)) return;
              !0 === s[a] && (s[a] = { enabled: !0 }),
                "object" != typeof s[a] ||
                  "enabled" in s[a] ||
                  (s[a].enabled = !0),
                s[a] || (s[a] = { enabled: !1 });
            }
          });
        var n = V.extend({}, x);
        r.useModulesParams(n),
          (r.params = V.extend({}, n, E, s)),
          (r.originalParams = V.extend({}, r.params)),
          (r.passedParams = V.extend({}, s));
        var o = (r.$ = L)(r.params.el);
        if ((t = o[0])) {
          if (1 < o.length) {
            var l = [];
            return (
              o.each(function (e, t) {
                var a = V.extend({}, s, { el: t });
                l.push(new h(a));
              }),
              l
            );
          }
          (t.swiper = r), o.data("swiper", r);
          var d,
            p,
            c = o.children("." + r.params.wrapperClass);
          return (
            V.extend(r, {
              $el: o,
              el: t,
              $wrapperEl: c,
              wrapperEl: c[0],
              classNames: [],
              slides: L(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === r.params.direction;
              },
              isVertical: function () {
                return "vertical" === r.params.direction;
              },
              rtl:
                "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
              rtlTranslate:
                "horizontal" === r.params.direction &&
                ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
              wrongRTL: "-webkit-box" === c.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents:
                ((d = ["touchstart", "touchmove", "touchend"]),
                (p = ["mousedown", "mousemove", "mouseup"]),
                R.pointerEvents
                  ? (p = ["pointerdown", "pointermove", "pointerup"])
                  : R.prefixedPointerEvents &&
                    (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                (r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }),
                (r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }),
                R.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: V.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            r.useModules(),
            r.params.init && r.init(),
            r
          );
        }
      }
      u && (h.__proto__ = u);
      var e = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (((h.prototype = Object.create(u && u.prototype)).constructor =
          h).prototype.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var o, l = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !o &&
                ((n += 1), s < (l += a[d].swiperSlideSize) && (o = !0));
            for (var p = r - 1; 0 <= p; p -= 1)
              a[p] &&
                !o &&
                ((n += 1), s < (l += a[p].swiperSlideSize) && (o = !0));
          } else
            for (var c = r + 1; c < a.length; c += 1)
              i[c] - i[r] < s && (n += 1);
          return n;
        }),
        (h.prototype.update = function () {
          var a = this;
          if (a && !a.destroyed) {
            var e = a.snapGrid,
              t = a.params;
            t.breakpoints && a.setBreakpoint(),
              a.updateSize(),
              a.updateSlides(),
              a.updateProgress(),
              a.updateSlidesClasses(),
              a.params.freeMode
                ? (i(), a.params.autoHeight && a.updateAutoHeight())
                : (("auto" === a.params.slidesPerView ||
                    1 < a.params.slidesPerView) &&
                  a.isEnd &&
                  !a.params.centeredSlides
                    ? a.slideTo(a.slides.length - 1, 0, !1, !0)
                    : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
              t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
              a.emit("update");
          }
          function i() {
            var e = a.rtlTranslate ? -1 * a.translate : a.translate,
              t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
            a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
          }
        }),
        (h.prototype.init = function () {
          var e = this;
          e.initialized ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"));
        }),
        (h.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a = this,
            i = a.params,
            s = a.$el,
            r = a.$wrapperEl,
            n = a.slides;
          return (
            void 0 === a.params ||
              a.destroyed ||
              (a.emit("beforeDestroy"),
              (a.initialized = !1),
              a.detachEvents(),
              i.loop && a.loopDestroy(),
              t &&
                (a.removeClasses(),
                s.removeAttr("style"),
                r.removeAttr("style"),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")
                    .removeAttr("data-swiper-column")
                    .removeAttr("data-swiper-row")),
              a.emit("destroy"),
              Object.keys(a.eventsListeners).forEach(function (e) {
                a.off(e);
              }),
              !1 !== e &&
                ((a.$el[0].swiper = null),
                a.$el.data("swiper", null),
                V.deleteProps(a)),
              (a.destroyed = !0)),
            null
          );
        }),
        (h.extendDefaults = function (e) {
          V.extend(E, e);
        }),
        (e.extendedDefaults.get = function () {
          return E;
        }),
        (e.defaults.get = function () {
          return x;
        }),
        (e.Class.get = function () {
          return u;
        }),
        (e.$.get = function () {
          return L;
        }),
        Object.defineProperties(h, e),
        h
      );
    })(s),
    C = { name: "device", proto: { device: m }, static: { device: m } },
    M = { name: "support", proto: { support: R }, static: { support: R } },
    k = { name: "browser", proto: { browser: I }, static: { browser: I } },
    z = {
      name: "resize",
      create: function () {
        var e = this;
        V.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          Y.addEventListener("resize", this.resize.resizeHandler),
            Y.addEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          Y.removeEventListener("resize", this.resize.resizeHandler),
            Y.removeEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    P = {
      func: Y.MutationObserver || Y.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new P.func(function (e) {
            if (1 !== e.length) {
              var t = function () {
                a.emit("observerUpdate", e[0]);
              };
              Y.requestAnimationFrame
                ? Y.requestAnimationFrame(t)
                : Y.setTimeout(t, 0);
            } else a.emit("observerUpdate", e[0]);
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          a.observer.observers.push(i);
      },
      init: function () {
        var e = this;
        if (R.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], { childList: !1 }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    $ = {
      name: "observer",
      params: { observer: !1, observeParents: !1 },
      create: function () {
        V.extend(this, {
          observer: {
            init: P.init.bind(this),
            attach: P.attach.bind(this),
            destroy: P.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    D = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          w = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l))
            : ((g = i + (s - 1) + o), (b = s + l));
        var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
        function E() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (V.extend(t.virtual, {
            from: y,
            to: x,
            offset: T,
            slidesGrid: t.slidesGrid,
          }),
          p === y && c === x && !e)
        )
          return (
            t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: T,
              from: y,
              to: x,
              slides: (function () {
                for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void E()
          );
        var S = [],
          C = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var M = p; M <= c; M += 1)
            (M < y || x < M) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    M +
                    '"]'
                )
                .remove();
        for (var k = 0; k < u.length; k += 1)
          y <= k &&
            k <= x &&
            (void 0 === c || e
              ? C.push(k)
              : (c < k && C.push(k), k < p && S.push(k)));
        C.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }),
          S.sort(function (e, t) {
            return e < t;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(u[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
          E();
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide
          ? L(i.renderSlide.call(a, e, t))
          : L(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (a.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        this.virtual.slides.push(e), this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this;
        if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
          var a = t.virtual.cache,
            i = {};
          Object.keys(a).forEach(function (e) {
            i[e + 1] = a[e];
          }),
            (t.virtual.cache = i);
        }
        t.virtual.update(!0), t.slideNext(0);
      },
    },
    O = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        var e = this;
        V.extend(e, {
          virtual: {
            update: D.update.bind(e),
            appendSlide: D.appendSlide.bind(e),
            prependSlide: D.prependSlide.bind(e),
            renderSlide: D.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            V.extend(e.params, t),
              V.extend(e.originalParams, t),
              e.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    A = {
      handle: function (e) {
        var t = this,
          a = t.rtlTranslate,
          i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && 39 === s) || (t.isVertical() && 40 === s))
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && 37 === s) || (t.isVertical() && 38 === s))
        )
          return !1;
        if (
          !(
            i.shiftKey ||
            i.altKey ||
            i.ctrlKey ||
            i.metaKey ||
            (f.activeElement &&
              f.activeElement.nodeName &&
              ("input" === f.activeElement.nodeName.toLowerCase() ||
                "textarea" === f.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (37 === s || 39 === s || 38 === s || 40 === s)
          ) {
            var r = !1;
            if (
              0 < t.$el.parents("." + t.params.slideClass).length &&
              0 === t.$el.parents("." + t.params.slideActiveClass).length
            )
              return;
            var n = Y.innerWidth,
              o = Y.innerHeight,
              l = t.$el.offset();
            a && (l.left -= t.$el[0].scrollLeft);
            for (
              var d = [
                  [l.left, l.top],
                  [l.left + t.width, l.top],
                  [l.left, l.top + t.height],
                  [l.left + t.width, l.top + t.height],
                ],
                p = 0;
              p < d.length;
              p += 1
            ) {
              var c = d[p];
              0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
            }
            if (!r) return;
          }
          t.isHorizontal()
            ? ((37 !== s && 39 !== s) ||
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              ((39 === s && !a) || (37 === s && a)) && t.slideNext(),
              ((37 === s && !a) || (39 === s && a)) && t.slidePrev())
            : ((38 !== s && 40 !== s) ||
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              40 === s && t.slideNext(),
              38 === s && t.slidePrev()),
            t.emit("keyPress", s);
        }
      },
      enable: function () {
        this.keyboard.enabled ||
          (L(f).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled &&
          (L(f).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    H = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        V.extend(this, {
          keyboard: {
            enabled: !1,
            enable: A.enable.bind(this),
            disable: A.disable.bind(this),
            handle: A.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    };
  var B = {
      lastScrollTime: V.now(),
      event:
        -1 < Y.navigator.userAgent.indexOf("firefox")
          ? "DOMMouseScroll"
          : (function () {
              var e = "onwheel",
                t = e in f;
              if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"), (t = "function" == typeof a[e]);
              }
              return (
                !t &&
                  f.implementation &&
                  f.implementation.hasFeature &&
                  !0 !== f.implementation.hasFeature("", "") &&
                  (t = f.implementation.hasFeature("Events.wheel", "3.0")),
                t
              );
            })()
          ? "wheel"
          : "mousewheel",
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          "detail" in e && (a = e.detail),
          "wheelDelta" in e && (a = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        if (!a.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var s = 0,
          r = a.rtlTranslate ? -1 : 1,
          n = B.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
            s = n.pixelX * r;
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
            s = n.pixelY;
          }
        else
          s =
            Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
        if (0 === s) return !0;
        if ((i.invert && (s = -s), a.params.freeMode)) {
          a.params.loop && a.loopFix();
          var o = a.getTranslate() + s * i.sensitivity,
            l = a.isBeginning,
            d = a.isEnd;
          if (
            (o >= a.minTranslate() && (o = a.minTranslate()),
            o <= a.maxTranslate() && (o = a.maxTranslate()),
            a.setTransition(0),
            a.setTranslate(o),
            a.updateProgress(),
            a.updateActiveIndex(),
            a.updateSlidesClasses(),
            ((!l && a.isBeginning) || (!d && a.isEnd)) &&
              a.updateSlidesClasses(),
            a.params.freeModeSticky &&
              (clearTimeout(a.mousewheel.timeout),
              (a.mousewheel.timeout = V.nextTick(function () {
                a.slideToClosest();
              }, 300))),
            a.emit("scroll", t),
            a.params.autoplay &&
              a.params.autoplayDisableOnInteraction &&
              a.autoplay.stop(),
            o === a.minTranslate() || o === a.maxTranslate())
          )
            return !0;
        } else {
          if (60 < V.now() - a.mousewheel.lastScrollTime)
            if (s < 0)
              if ((a.isEnd && !a.params.loop) || a.animating) {
                if (i.releaseOnEdges) return !0;
              } else a.slideNext(), a.emit("scroll", t);
            else if ((a.isBeginning && !a.params.loop) || a.animating) {
              if (i.releaseOnEdges) return !0;
            } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = new Y.Date().getTime();
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      enable: function () {
        var e = this;
        if (!B.event) return !1;
        if (e.mousewheel.enabled) return !1;
        var t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = L(e.params.mousewheel.eventsTarged)),
          t.on("mouseenter", e.mousewheel.handleMouseEnter),
          t.on("mouseleave", e.mousewheel.handleMouseLeave),
          t.on(B.event, e.mousewheel.handle),
          (e.mousewheel.enabled = !0)
        );
      },
      disable: function () {
        var e = this;
        if (!B.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        var t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = L(e.params.mousewheel.eventsTarged)),
          t.off(B.event, e.mousewheel.handle),
          !(e.mousewheel.enabled = !1)
        );
      },
    },
    G = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s &&
            0 < s.length &&
            (e.isBeginning
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass)),
            i &&
              0 < i.length &&
              (e.isEnd
                ? i.addClass(t.disabledClass)
                : i.removeClass(t.disabledClass),
              i[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass));
        }
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = L(i.nextEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              1 < e.length &&
              1 === a.$el.find(i.nextEl).length &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = L(i.prevEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              1 < t.length &&
              1 === a.$el.find(i.prevEl).length &&
              (t = a.$el.find(i.prevEl))),
          e &&
            0 < e.length &&
            e.on("click", function (e) {
              e.preventDefault(), (a.isEnd && !a.params.loop) || a.slideNext();
            }),
          t &&
            0 < t.length &&
            t.on("click", function (e) {
              e.preventDefault(),
                (a.isBeginning && !a.params.loop) || a.slidePrev();
            }),
          V.extend(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          a = e.$prevEl;
        t &&
          t.length &&
          (t.off("click"), t.removeClass(this.params.navigation.disabledClass)),
          a &&
            a.length &&
            (a.off("click"),
            a.removeClass(this.params.navigation.disabledClass));
      },
    },
    N = {
      update: function () {
        var e = this,
          t = e.rtl,
          s = e.params.pagination;
        if (
          s.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var r,
            a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            n = e.params.loop
              ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((r = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides),
                n - 1 < r && (r -= n),
                r < 0 && "bullets" !== e.params.paginationType && (r = n + r))
              : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              0 < e.pagination.bullets.length)
          ) {
            var o,
              l,
              d,
              p = e.pagination.bullets;
            if (
              (s.dynamicBullets &&
                ((e.pagination.bulletSize = p
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                i.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"
                ),
                1 < s.dynamicMainBullets &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                  e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        s.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (o = r - e.pagination.dynamicBulletIndex),
                (d =
                  ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) +
                    o) /
                  2)),
              p.removeClass(
                s.bulletActiveClass +
                  " " +
                  s.bulletActiveClass +
                  "-next " +
                  s.bulletActiveClass +
                  "-next-next " +
                  s.bulletActiveClass +
                  "-prev " +
                  s.bulletActiveClass +
                  "-prev-prev " +
                  s.bulletActiveClass +
                  "-main"
              ),
              1 < i.length)
            )
              p.each(function (e, t) {
                var a = L(t),
                  i = a.index();
                i === r && a.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (o <= i &&
                      i <= l &&
                      a.addClass(s.bulletActiveClass + "-main"),
                    i === o &&
                      a
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev-prev"),
                    i === l &&
                      a
                        .next()
                        .addClass(s.bulletActiveClass + "-next")
                        .next()
                        .addClass(s.bulletActiveClass + "-next-next"));
              });
            else if (
              (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets)
            ) {
              for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)
                p.eq(h).addClass(s.bulletActiveClass + "-main");
              c
                .prev()
                .addClass(s.bulletActiveClass + "-prev")
                .prev()
                .addClass(s.bulletActiveClass + "-prev-prev"),
                u
                  .next()
                  .addClass(s.bulletActiveClass + "-next")
                  .next()
                  .addClass(s.bulletActiveClass + "-next-next");
            }
            if (s.dynamicBullets) {
              var v = Math.min(p.length, s.dynamicMainBullets + 4),
                f =
                  (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize,
                m = t ? "right" : "left";
              p.css(e.isHorizontal() ? m : "top", f + "px");
            }
          }
          if (
            ("fraction" === s.type &&
              (i
                .find("." + s.currentClass)
                .text(s.formatFractionCurrent(r + 1)),
              i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
            "progressbar" === s.type)
          ) {
            var g;
            g = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var b = (r + 1) / n,
              w = 1,
              y = 1;
            "horizontal" === g ? (w = b) : (y = b),
              i
                .find("." + s.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")"
                )
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (i.html(s.renderCustom(e, r + 1, n)),
              e.emit("paginationRender", e, i[0]))
            : e.emit("paginationUpdate", e, i[0]),
            i[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](s.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (
              var r = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length,
                n = 0;
              n < r;
              n += 1
            )
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var a = this,
          e = a.params.pagination;
        if (e.el) {
          var t = L(e.el);
          0 !== t.length &&
            (a.params.uniqueNavElements &&
              "string" == typeof e.el &&
              1 < t.length &&
              1 === a.$el.find(e.el).length &&
              (t = a.$el.find(e.el)),
            "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
            t.addClass(e.modifierClass + e.type),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
              (a.pagination.dynamicBulletIndex = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              t.addClass(e.progressbarOppositeClass),
            e.clickable &&
              t.on("click", "." + e.bulletClass, function (e) {
                e.preventDefault();
                var t = L(this).index() * a.params.slidesPerGroup;
                a.params.loop && (t += a.loopedSlides), a.slideTo(t);
              }),
            V.extend(a.pagination, { $el: t, el: t[0] }));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off("click", "." + t.bulletClass);
        }
      },
    },
    X = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? 0 < (p = -p)
              ? ((d = s - p), (p = 0))
              : r < -p + s && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : r < p + s && (d = r - p),
            e.isHorizontal()
              ? (R.transforms3d
                  ? n.transform("translate3d(" + p + "px, 0, 0)")
                  : n.transform("translateX(" + p + "px)"),
                (n[0].style.width = d + "px"))
              : (R.transforms3d
                  ? n.transform("translate3d(0px, " + p + "px, 0)")
                  : n.transform("translateY(" + p + "px)"),
                (n[0].style.height = d + "px")),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + "px")
              : (a[0].style.height = s + "px"),
            (i[0].style.display = 1 <= n ? "none" : ""),
            e.params.scrollbarHide && (i[0].style.opacity = 0),
            V.extend(t, {
              trackSize: r,
              divider: n,
              moveDivider: o,
              dragSize: s,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](e.params.scrollbar.lockClass);
        }
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;
        (t =
          ((a.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageX
              : e.pageX || e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].pageY
            : e.pageY || e.clientY) -
            r.offset()[a.isHorizontal() ? "left" : "top"] -
            n / 2) /
          (o - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(l),
          a.setTranslate(l),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css("opacity", 1),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          a.transition(0),
          i.transition(0),
          s.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = V.nextTick(function () {
              i.css("opacity", 0), i.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEvents,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!R.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!R.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)
            ? (R.touch &&
                (r.addEventListener(a.start, e.scrollbar.onDragStart, n),
                r.addEventListener(a.move, e.scrollbar.onDragMove, n),
                r.addEventListener(a.end, e.scrollbar.onDragEnd, o)),
              ((s.simulateTouch && !m.ios && !m.android) ||
                (s.simulateTouch && !R.touch && m.ios)) &&
                (r.addEventListener("mousedown", e.scrollbar.onDragStart, n),
                f.addEventListener("mousemove", e.scrollbar.onDragMove, n),
                f.addEventListener("mouseup", e.scrollbar.onDragEnd, o)))
            : (r.addEventListener(i.start, e.scrollbar.onDragStart, n),
              f.addEventListener(i.move, e.scrollbar.onDragMove, n),
              f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEvents,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!R.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!R.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)
            ? (R.touch &&
                (r.removeEventListener(a.start, e.scrollbar.onDragStart, n),
                r.removeEventListener(a.move, e.scrollbar.onDragMove, n),
                r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)),
              ((s.simulateTouch && !m.ios && !m.android) ||
                (s.simulateTouch && !R.touch && m.ios)) &&
                (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n),
                f.removeEventListener("mousemove", e.scrollbar.onDragMove, n),
                f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o)))
            : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n),
              f.removeEventListener(i.move, e.scrollbar.onDragMove, n),
              f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      init: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = L(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            1 < s.length &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = L(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(r)),
            V.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    F = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = L(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y"),
          l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (
          (n || o
            ? ((n = n || "0"), (o = o || "0"))
            : this.isHorizontal()
            ? ((n = r), (o = "0"))
            : ((o = r), (n = "0")),
          (n =
            0 <= n.indexOf("%")
              ? parseInt(n, 10) * t * s + "%"
              : n * t * s + "px"),
          (o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px"),
          null != d)
        ) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
        else {
          var c = l - (l - 1) * (1 - Math.abs(t));
          i.transform(
            "translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")"
          );
        }
      },
      setTranslate: function () {
        var i = this,
          e = i.$el,
          t = i.slides,
          s = i.progress,
          r = i.snapGrid;
        e
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (e, t) {
            i.parallax.setTransform(t, s);
          }),
          t.each(function (e, t) {
            var a = t.progress;
            1 < i.params.slidesPerGroup &&
              "auto" !== i.params.slidesPerView &&
              (a += Math.ceil(e / 2) - s * (r.length - 1)),
              (a = Math.min(Math.max(a, -1), 1)),
              L(t)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function (e, t) {
                  i.parallax.setTransform(t, a);
                });
          });
      },
      setTransition: function (s) {
        void 0 === s && (s = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (e, t) {
            var a = L(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
            0 === s && (i = 0), a.transition(i);
          });
      },
    },
    q = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !R.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (s.scaleStart = q.getDistanceBetweenTouches(e));
        }
        (s.$slideEl && s.$slideEl.length) ||
        ((s.$slideEl = L(e.target).closest(".swiper-slide")),
        0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
        (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
        (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass)),
        (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
        0 !== s.$imageWrapEl.length)
          ? (s.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (s.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!R.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (a.fakeGestureMoved = !0),
            (i.scaleMove = q.getDistanceBetweenTouches(e));
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (R.gestures
            ? (this.zoom.scale = e.scale * a.currentScale)
            : (a.scale = (i.scaleMove / i.scaleStart) * a.currentScale),
          a.scale > i.maxRatio &&
            (a.scale =
              i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
          a.scale < t.minRatio &&
            (a.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
          i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!R.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !m.android)
          )
            return;
          (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio)),
          i.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
          (a.currentScale = a.scale),
          (a.isScaling = !1),
          1 === a.scale && (i.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (i.isTouched ||
            (m.android && e.preventDefault(),
            (i.isTouched = !0),
            (i.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (i.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = V.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = V.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = o), (a.currentY = d);
          var c = a.width * e.scale,
            u = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0),
          (e.scale = 1),
          (e.currentScale = 1));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl ||
          ((y.$slideEl = g.clickedSlide
            ? L(g.clickedSlide)
            : g.slides.eq(g.activeIndex)),
          (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
          (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
        y.$imageEl && 0 !== y.$imageEl.length) &&
          (y.$slideEl.addClass("" + w.zoomedSlideClass),
          void 0 === x.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = x.touchesStart.x), (a = x.touchesStart.y)),
          (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          (b.currentScale =
            y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          e
            ? ((f = y.$slideEl[0].offsetWidth),
              (m = y.$slideEl[0].offsetHeight),
              (i = y.$slideEl.offset().left + f / 2 - t),
              (s = y.$slideEl.offset().top + m / 2 - a),
              (o = y.$imageEl[0].offsetWidth),
              (l = y.$imageEl[0].offsetHeight),
              (d = o * b.scale),
              (p = l * b.scale),
              (h = -(c = Math.min(f / 2 - d / 2, 0))),
              (v = -(u = Math.min(m / 2 - p / 2, 0))),
              (r = i * b.scale) < c && (r = c),
              h < r && (r = h),
              (n = s * b.scale) < u && (n = u),
              v < n && (n = v))
            : (n = r = 0),
          y.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          y.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl ||
          ((i.$slideEl = e.clickedSlide
            ? L(e.clickedSlide)
            : e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      enable: function () {
        var e = this,
          t = e.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var a = !(
            "touchstart" !== e.touchEvents.start ||
            !R.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          R.gestures
            ? (e.$wrapperEl.on(
                "gesturestart",
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                "gesturechange",
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.on(
                e.touchEvents.start,
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.move,
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.end,
                ".swiper-slide",
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          e.zoom.enabled = !1;
          var a = !(
            "touchstart" !== e.touchEvents.start ||
            !R.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          R.gestures
            ? (e.$wrapperEl.off(
                "gesturestart",
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                "gesturechange",
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                "gestureend",
                ".swiper-slide",
                t.onGestureEnd,
                a
              ))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(
                e.touchEvents.start,
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.move,
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.end,
                ".swiper-slide",
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
    },
    W = {
      loadInSlide: function (e, l) {
        void 0 === l && (l = !0);
        var d = this,
          p = d.params.lazy;
        if (void 0 !== e && 0 !== d.slides.length) {
          var c =
              d.virtual && d.params.virtual.enabled
                ? d.$wrapperEl.children(
                    "." +
                      d.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : d.slides.eq(e),
            t = c.find(
              "." +
                p.elementClass +
                ":not(." +
                p.loadedClass +
                "):not(." +
                p.loadingClass +
                ")"
            );
          !c.hasClass(p.elementClass) ||
            c.hasClass(p.loadedClass) ||
            c.hasClass(p.loadingClass) ||
            (t = t.add(c[0])),
            0 !== t.length &&
              t.each(function (e, t) {
                var i = L(t);
                i.addClass(p.loadingClass);
                var s = i.attr("data-background"),
                  r = i.attr("data-src"),
                  n = i.attr("data-srcset"),
                  o = i.attr("data-sizes");
                d.loadImage(i[0], r || s, n, o, !1, function () {
                  if (null != d && d && (!d || d.params) && !d.destroyed) {
                    if (
                      (s
                        ? (i.css("background-image", 'url("' + s + '")'),
                          i.removeAttr("data-background"))
                        : (n &&
                            (i.attr("srcset", n), i.removeAttr("data-srcset")),
                          o && (i.attr("sizes", o), i.removeAttr("data-sizes")),
                          r && (i.attr("src", r), i.removeAttr("data-src"))),
                      i.addClass(p.loadedClass).removeClass(p.loadingClass),
                      c.find("." + p.preloaderClass).remove(),
                      d.params.loop && l)
                    ) {
                      var e = c.attr("data-swiper-slide-index");
                      if (c.hasClass(d.params.slideDuplicateClass)) {
                        var t = d.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            d.params.slideDuplicateClass +
                            ")"
                        );
                        d.lazy.loadInSlide(t.index(), !1);
                      } else {
                        var a = d.$wrapperEl.children(
                          "." +
                            d.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        d.lazy.loadInSlide(a.index(), !1);
                      }
                    }
                    d.emit("lazyImageReady", c[0], i[0]);
                  }
                }),
                  d.emit("lazyImageLoad", c[0], i[0]);
              });
        }
      },
      load: function () {
        var i = this,
          t = i.$wrapperEl,
          a = i.params,
          s = i.slides,
          e = i.activeIndex,
          r = i.virtual && a.virtual.enabled,
          n = a.lazy,
          o = a.slidesPerView;
        function l(e) {
          if (r) {
            if (
              t.children(
                "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
        }
        if (
          ("auto" === o && (o = 0),
          i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
          i.params.watchSlidesVisibility)
        )
          t.children("." + a.slideVisibleClass).each(function (e, t) {
            var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
            i.lazy.loadInSlide(a);
          });
        else if (1 < o)
          for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
        else i.lazy.loadInSlide(e);
        if (n.loadPrevNext)
          if (1 < o || (n.loadPrevNextAmount && 1 < n.loadPrevNextAmount)) {
            for (
              var c = n.loadPrevNextAmount,
                u = o,
                h = Math.min(e + u + Math.max(c, u), s.length),
                v = Math.max(e - Math.max(u, c), 0),
                f = e + o;
              f < h;
              f += 1
            )
              l(f) && i.lazy.loadInSlide(f);
            for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
          } else {
            var g = t.children("." + a.slideNextClass);
            0 < g.length && i.lazy.loadInSlide(d(g));
            var b = t.children("." + a.slidePrevClass);
            0 < b.length && i.lazy.loadInSlide(d(b));
          }
      },
    },
    j = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          o = function (e, t) {
            for (i = -1, a = e.length; 1 < a - i; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new j.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new j.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control;
        function n(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && "container" !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof S && n(r[o]);
        else r instanceof S && t !== r && n(r);
      },
      setTransition: function (t, e) {
        var a,
          i = this,
          s = i.controller.control;
        function r(e) {
          e.setTransition(t, i),
            0 !== t &&
              (e.transitionStart(),
              e.params.autoHeight &&
                V.nextTick(function () {
                  e.updateAutoHeight();
                }),
              e.$wrapperEl.transitionEnd(function () {
                s &&
                  (e.params.loop &&
                    "slide" === i.params.controller.by &&
                    e.loopFix(),
                  e.transitionEnd());
              }));
        }
        if (Array.isArray(s))
          for (a = 0; a < s.length; a += 1)
            s[a] !== e && s[a] instanceof S && r(s[a]);
        else s instanceof S && e !== s && r(s);
      },
    },
    U = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this,
          a = t.params.a11y;
        if (13 === e.keyCode) {
          var i = L(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is("." + t.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            0 < i.length &&
            (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
            a &&
              0 < a.length &&
              (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
        }
      },
      updatePagination: function () {
        var i = this,
          s = i.params.a11y;
        i.pagination &&
          i.params.pagination.clickable &&
          i.pagination.bullets &&
          i.pagination.bullets.length &&
          i.pagination.bullets.each(function (e, t) {
            var a = L(t);
            i.a11y.makeElFocusable(a),
              i.a11y.addElRole(a, "button"),
              i.a11y.addElLabel(
                a,
                s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1)
              );
          });
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
          a,
          i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
          t &&
            (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
          a &&
            (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          0 < a.a11y.liveRegion.length &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off("keydown", a.a11y.onEnterKey),
          t && t.off("keydown", a.a11y.onEnterKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              "keydown",
              "." + a.params.pagination.bulletClass,
              a.a11y.onEnterKey
            );
      },
    },
    K = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!Y.history || !Y.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var t = e.history;
          (t.initialized = !0),
            (t.paths = K.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                Y.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          Y.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        (this.history.paths = K.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function () {
        var e = Y.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory: function (e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(t),
            i = K.slugify(a.attr("data-history"));
          Y.location.pathname.includes(e) || (i = e + "/" + i);
          var s = Y.history.state;
          (s && s.value === i) ||
            (this.params.history.replaceState
              ? Y.history.replaceState({ value: i }, null, i)
              : Y.history.pushState({ value: i }, null, i));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              K.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var o = n.index();
              i.slideTo(o, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    _ = {
      onHashCange: function () {
        var e = this,
          t = f.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var a = e.$wrapperEl
            .children("." + e.params.slideClass + '[data-hash="' + t + '"]')
            .index();
          if (void 0 === a) return;
          e.slideTo(a);
        }
      },
      setHash: function () {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            Y.history &&
            Y.history.replaceState
          )
            Y.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            );
          else {
            var t = e.slides.eq(e.activeIndex),
              a = t.attr("data-hash") || t.attr("data-history");
            f.location.hash = a || "";
          }
      },
      init: function () {
        var e = this;
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var t = f.location.hash.replace("#", "");
          if (t)
            for (var a = 0, i = e.slides.length; a < i; a += 1) {
              var s = e.slides.eq(a);
              if (
                (s.attr("data-hash") || s.attr("data-history")) === t &&
                !s.hasClass(e.params.slideDuplicateClass)
              ) {
                var r = s.index();
                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            L(Y).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          L(Y).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    Z = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          (e.autoplay.timeout = V.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
    },
    Q = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            "translate3d(" + s + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.$wrapperEl;
        if ((t.transition(e), a.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          t.transitionEnd(function () {
            if (!s && a && !a.destroyed) {
              (s = !0), (a.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                t < e.length;
                t += 1
              )
                i.trigger(e[t]);
            }
          });
        }
      },
    },
    J = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.params.cubeEffect,
          p = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          u = 0;
        d.shadow &&
          (p
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = L('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = L('<div class="swiper-cube-shadow"></div>')), a.append(e)));
        for (var h = 0; h < s.length; h += 1) {
          var v = s.eq(h),
            f = h;
          c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && ((m = -m), (g = Math.floor(-m / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0
            ? ((w = 4 * -g * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((w = 0), (x = 4 * -g * l))
            : (f - 2) % 4 == 0
            ? ((w = l + 4 * g * l), (x = l))
            : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
            o && (w = -w),
            p || ((y = w), (w = 0));
          var T =
            "rotateX(" +
            (p ? 0 : -m) +
            "deg) rotateY(" +
            (p ? m : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            x +
            "px)";
          if (
            (b <= 1 &&
              -1 < b &&
              ((u = 90 * f + 90 * b), o && (u = 90 * -f - 90 * b)),
            v.transform(T),
            d.slideShadows)
          ) {
            var E = p
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = p
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = L(
                '<div class="swiper-slide-shadow-' +
                  (p ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = L(
                  '<div class="swiper-slide-shadow-' +
                    (p ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (p)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + d.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              M =
                1.5 -
                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                  Math.cos((2 * C * Math.PI) / 360) / 2),
              k = d.shadowScale,
              z = d.shadowScale / M,
              P = d.shadowOffset;
            e.transform(
              "scale3d(" +
                k +
                ", 1, " +
                z +
                ") translate3d(0px, " +
                (n / 2 + P) +
                "px, " +
                -n / 2 / z +
                "px) rotateX(-90deg)"
            );
          }
        var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            $ +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : u) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -u : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    ee = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (e.isHorizontal()
              ? a && (n = -n)
              : ((d = l), (o = -n), (n = l = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            var p = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              ((p = L(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(p)),
              0 === c.length &&
                ((c = L(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(c)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              c.length && (c[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              l +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              o +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;
        if (
          (t
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          a.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          t.eq(i).transitionEnd(function () {
            if (!r && a && !a.destroyed) {
              (r = !0), (a.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                t < e.length;
                t += 1
              )
                s.trigger(e[t]);
            }
          });
        }
      },
    },
    te = {
      setTranslate: function () {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.$wrapperEl,
            r = e.slidesSizesGrid,
            n = e.params.coverflowEffect,
            o = e.isHorizontal(),
            l = e.translate,
            d = o ? t / 2 - l : a / 2 - l,
            p = o ? n.rotate : -n.rotate,
            c = n.depth,
            u = 0,
            h = i.length;
          u < h;
          u += 1
        ) {
          var v = i.eq(u),
            f = r[u],
            m = ((d - v[0].swiperSlideOffset - f / 2) / f) * n.modifier,
            g = o ? p * m : 0,
            b = o ? 0 : p * m,
            w = -c * Math.abs(m),
            y = o ? 0 : n.stretch * m,
            x = o ? n.stretch * m : 0;
          Math.abs(x) < 0.001 && (x = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0);
          var T =
            "translate3d(" +
            x +
            "px," +
            y +
            "px," +
            w +
            "px)  rotateX(" +
            b +
            "deg) rotateY(" +
            g +
            "deg)";
          if (
            (v.transform(T),
            (v[0].style.zIndex = 1 - Math.abs(Math.round(m))),
            n.slideShadows)
          ) {
            var E = o
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = o
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = L(
                '<div class="swiper-slide-shadow-' +
                  (o ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = L(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = 0 < m ? m : 0),
              S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
          }
        }
        (R.pointerEvents || R.prefixedPointerEvents) &&
          (s[0].style.perspectiveOrigin = d + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    ae = {
      init: function () {
        var e = this,
          t = e.params.thumbs,
          a = e.constructor;
        t.swiper instanceof a
          ? ((e.thumbs.swiper = t.swiper),
            V.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            V.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : V.isObject(t.swiper) &&
            ((e.thumbs.swiper = new a(
              V.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex;
          if (null != a) {
            var i;
            if (
              ((i = t.params.loop
                ? parseInt(
                    L(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              var s = e.activeIndex;
              e.slides.eq(s).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (s = e.activeIndex));
              var r = e.slides
                  .eq(s)
                  .prevAll('[data-swiper-slide-index="' + i + '"]')
                  .eq(0)
                  .index(),
                n = e.slides
                  .eq(s)
                  .nextAll('[data-swiper-slide-index="' + i + '"]')
                  .eq(0)
                  .index();
              i = void 0 === r ? n : void 0 === n ? r : n - s < s - r ? n : r;
            }
            e.slideTo(i);
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i =
            "auto" === a.params.slidesPerView
              ? a.slidesPerViewDynamic()
              : a.params.slidesPerView;
          if (t.realIndex !== a.realIndex) {
            var s,
              r = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(r).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (r = a.activeIndex));
              var n = a.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index(),
                o = a.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index();
              s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            } else s = t.realIndex;
            a.visibleSlidesIndexes.indexOf(s) < 0 &&
              (a.params.centeredSlides
                ? (s =
                    r < s
                      ? s - Math.floor(i / 2) + 1
                      : s + Math.floor(i / 2) - 1)
                : r < s && (s = s - i + 1),
              a.slideTo(s, e ? 0 : void 0));
          }
          var l = 1,
            d = t.params.thumbs.slideThumbActiveClass;
          if (
            (1 < t.params.slidesPerView &&
              !t.params.centeredSlides &&
              (l = t.params.slidesPerView),
            a.slides.removeClass(d),
            a.params.loop)
          )
            for (var p = 0; p < l; p += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + p) + '"]'
                )
                .addClass(d);
          else
            for (var c = 0; c < l; c += 1)
              a.slides.eq(t.realIndex + c).addClass(d);
        }
      },
    },
    ie = [
      C,
      M,
      k,
      z,
      $,
      O,
      H,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create: function () {
          var e = this;
          V.extend(e, {
            mousewheel: {
              enabled: !1,
              enable: B.enable.bind(e),
              disable: B.disable.bind(e),
              handle: B.handle.bind(e),
              handleMouseEnter: B.handleMouseEnter.bind(e),
              handleMouseLeave: B.handleMouseLeave.bind(e),
              lastScrollTime: V.now(),
            },
          });
        },
        on: {
          init: function () {
            this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function () {
            this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          V.extend(this, {
            navigation: {
              init: G.init.bind(this),
              update: G.update.bind(this),
              destroy: G.destroy.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (e) {
            var t = this.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
            !this.params.navigation.hideOnClick ||
              L(e.target).is(i) ||
              L(e.target).is(a) ||
              (a && a.toggleClass(this.params.navigation.hiddenClass),
              i && i.toggleClass(this.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          var e = this;
          V.extend(e, {
            pagination: {
              init: N.init.bind(e),
              render: N.render.bind(e),
              update: N.update.bind(e),
              destroy: N.destroy.bind(e),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function () {
            this.params.loop
              ? this.pagination.update()
              : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (e) {
            var t = this;
            t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              0 < t.pagination.$el.length &&
              !L(e.target).hasClass(t.params.pagination.bulletClass) &&
              t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          var e = this;
          V.extend(e, {
            scrollbar: {
              init: X.init.bind(e),
              destroy: X.destroy.bind(e),
              updateSize: X.updateSize.bind(e),
              setTranslate: X.setTranslate.bind(e),
              setTransition: X.setTransition.bind(e),
              enableDraggable: X.enableDraggable.bind(e),
              disableDraggable: X.disableDraggable.bind(e),
              setDragPosition: X.setDragPosition.bind(e),
              onDragStart: X.onDragStart.bind(e),
              onDragMove: X.onDragMove.bind(e),
              onDragEnd: X.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          V.extend(this, {
            parallax: {
              setTransform: F.setTransform.bind(this),
              setTranslate: F.setTranslate.bind(this),
              setTransition: F.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init: function () {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var t = this,
            a = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (e) {
              a[e] = q[e].bind(t);
            }),
            V.extend(t, { zoom: a });
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          V.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: W.load.bind(this),
              loadInSlide: W.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled &&
              this.params.preloadImages &&
              (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            var e = this;
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          var e = this;
          V.extend(e, {
            controller: {
              control: e.params.controller.control,
              getInterpolateFunction: j.getInterpolateFunction.bind(e),
              setTranslate: j.setTranslate.bind(e),
              setTransition: j.setTransition.bind(e),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create: function () {
          var t = this;
          V.extend(t, {
            a11y: {
              liveRegion: L(
                '<span class="' +
                  t.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            },
          }),
            Object.keys(U).forEach(function (e) {
              t.a11y[e] = U[e].bind(t);
            });
        },
        on: {
          init: function () {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          var e = this;
          V.extend(e, {
            history: {
              init: K.init.bind(e),
              setHistory: K.setHistory.bind(e),
              setHistoryPopState: K.setHistoryPopState.bind(e),
              scrollToSlide: K.scrollToSlide.bind(e),
              destroy: K.destroy.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          var e = this;
          V.extend(e, {
            hashNavigation: {
              initialized: !1,
              init: _.init.bind(e),
              destroy: _.destroy.bind(e),
              setHash: _.setHash.bind(e),
              onHashCange: _.onHashCange.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var t = this;
          V.extend(t, {
            autoplay: {
              running: !1,
              paused: !1,
              run: Z.run.bind(t),
              start: Z.start.bind(t),
              stop: Z.stop.bind(t),
              pause: Z.pause.bind(t),
              onTransitionEnd: function (e) {
                t &&
                  !t.destroyed &&
                  t.$wrapperEl &&
                  e.target === this &&
                  (t.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ),
                  (t.autoplay.paused = !1),
                  t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
              },
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled && this.autoplay.start();
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(e)
                : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop();
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          V.extend(this, {
            fadeEffect: {
              setTranslate: Q.setTranslate.bind(this),
              setTransition: Q.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              V.extend(e.params, t), V.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          V.extend(this, {
            cubeEffect: {
              setTranslate: J.setTranslate.bind(this),
              setTransition: J.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              V.extend(e.params, t), V.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          V.extend(this, {
            flipEffect: {
              setTranslate: ee.setTranslate.bind(this),
              setTransition: ee.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              V.extend(e.params, t), V.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          V.extend(this, {
            coverflowEffect: {
              setTranslate: te.setTranslate.bind(this),
              setTransition: te.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            "coverflow" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "coverflow"),
              e.classNames.push(e.params.containerModifierClass + "3d"),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          V.extend(this, {
            thumbs: {
              swiper: null,
              init: ae.init.bind(this),
              update: ae.update.bind(this),
              onThumbClick: ae.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this.params.thumbs;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          update: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition: function (e) {
            var t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy: function () {
            var e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
  return (
    void 0 === S.use &&
      ((S.use = S.Class.use), (S.installModule = S.Class.installModule)),
    S.use(ie),
    S
  );
});

// 12. Bootstrap v3.3.7
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
              a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
                (c.preventDefault(),
                d.is("input,button")
                  ? d.trigger("focus")
                  : d
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
              : c.hide()
          );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
