// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.



(function(c) {
    c.fn.bPopup = function(A, E) {
        function L() {
            a.contentContainer = c(a.contentContainer || b);
            switch (a.content) {
                case "iframe":
                    var d = c('<iframe class="b-iframe" ' + a.iframeAttr + "></iframe>");
                    d.appendTo(a.contentContainer);
                    t = b.outerHeight(!0);
                    u = b.outerWidth(!0);
                    B();
                    d.attr("src", a.loadUrl);
                    l(a.loadCallback);
                    break;
                case "image":
                    B();
                    c("<img />").load(function() {
                        l(a.loadCallback);
                        F(c(this))
                    }).attr("src", a.loadUrl).hide().appendTo(a.contentContainer);
                    break;
                default:
                    B(), c('<div class="b-ajax-wrapper"></div>').load(a.loadUrl, a.loadData, function(d, b, e) {
                        l(a.loadCallback, b);
                        F(c(this))
                    }).hide().appendTo(a.contentContainer)
            }
        }

        function B() {
            a.modal && c('<div class="b-modal ' + e + '"></div>').css({
                backgroundColor: a.modalColor,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: a.zIndex + v
            }).appendTo(a.appendTo).fadeTo(a.speed, a.opacity);
            C();
            b.data("bPopup", a).data("id", e).css({
                left: "slideIn" == a.transition || "slideBack" == a.transition ? "slideBack" == a.transition ? f.scrollLeft() + w : -1 * (x + u) : m(!(!a.follow[0] && n || g)),
                position: a.positionStyle || "absolute",
                top: "slideDown" == a.transition || "slideUp" == a.transition ? "slideUp" == a.transition ? f.scrollTop() + y : z + -1 * t : p(!(!a.follow[1] && q || g)),
                "z-index": a.zIndex + v + 1
            }).each(function() {
                a.appending && c(this).appendTo(a.appendTo)
            });
            G(!0)
        }

        function r() {
            a.modal && c(".b-modal." + b.data("id")).fadeTo(a.speed, 0, function() {
                c(this).remove()
            });
            a.scrollBar || c("html").css("overflow", "auto");
            c(".b-modal." + e).unbind("click");
            f.unbind("keydown." + e);
            k.unbind("." + e).data("bPopup", 0 < k.data("bPopup") - 1 ? k.data("bPopup") - 1 : null);
            b.undelegate(".bClose, ." + a.closeClass, "click." + e, r).data("bPopup", null);
            clearTimeout(H);
            G();
            return !1
        }

        function I(d) {
            y = k.height();
            w = k.width();
            h = D();
            if (h.x || h.y) clearTimeout(J), J = setTimeout(function() {
                C();
                d = d || a.followSpeed;
                var e = {};
                h.x && (e.left = a.follow[0] ? m(!0) : "auto");
                h.y && (e.top = a.follow[1] ? p(!0) : "auto");
                b.dequeue().each(function() {
                    g ? c(this).css({
                        left: x,
                        top: z
                    }) : c(this).animate(e, d, a.followEasing)
                })
            }, 50)
        }

        function F(d) {
            var c = d.width(),
                e = d.height(),
                f = {};
            a.contentContainer.css({
                height: e,
                width: c
            });
            e >= b.height() && (f.height = b.height());
            c >= b.width() && (f.width = b.width());
            t = b.outerHeight(!0);
            u = b.outerWidth(!0);
            C();
            a.contentContainer.css({
                height: "auto",
                width: "auto"
            });
            f.left = m(!(!a.follow[0] && n || g));
            f.top = p(!(!a.follow[1] && q || g));
            b.animate(f, 250, function() {
                d.show();
                h = D()
            })
        }

        function M() {
            k.data("bPopup", v);
            b.delegate(".bClose, ." + a.closeClass, "click." + e, r);
            a.modalClose && c(".b-modal." + e).css("cursor", "pointer").bind("click", r);
            N || !a.follow[0] && !a.follow[1] || k.bind("scroll." + e, function() {
                if (h.x || h.y) {
                    var d = {};
                    h.x && (d.left = a.follow[0] ? m(!g) : "auto");
                    h.y && (d.top = a.follow[1] ? p(!g) : "auto");
                    b.dequeue().animate(d, a.followSpeed, a.followEasing)
                }
            }).bind("resize." + e, function() {
                I()
            });
            a.escClose && f.bind("keydown." + e, function(a) {
                27 == a.which && r()
            })
        }

        function G(d) {
            function c(e) {
                b.css({
                    display: "block",
                    opacity: 1
                }).animate(e, a.speed, a.easing, function() {
                    K(d)
                })
            }
            switch (d ? a.transition : a.transitionClose || a.transition) {
                case "slideIn":
                    c({
                        left: d ? m(!(!a.follow[0] && n || g)) : f.scrollLeft() - (u || b.outerWidth(!0)) - 200
                    });
                    break;
                case "slideBack":
                    c({
                        left: d ? m(!(!a.follow[0] && n || g)) : f.scrollLeft() + w + 200
                    });
                    break;
                case "slideDown":
                    c({
                        top: d ? p(!(!a.follow[1] && q || g)) : f.scrollTop() - (t || b.outerHeight(!0)) - 200
                    });
                    break;
                case "slideUp":
                    c({
                        top: d ? p(!(!a.follow[1] && q || g)) : f.scrollTop() + y + 200
                    });
                    break;
                default:
                    b.stop().fadeTo(a.speed, d ? 1 : 0, function() {
                        K(d)
                    })
            }
        }

        function K(d) {
            d ? (M(), l(E), a.autoClose && (H = setTimeout(r, a.autoClose))) : (b.hide(), l(a.onClose), a.loadUrl && (a.contentContainer.empty(), b.css({
                height: "auto",
                width: "auto"
            })))
        }

        function m(a) {
            return a ? x + f.scrollLeft() : x
        }

        function p(a) {
            return a ? z + f.scrollTop() : z
        }

        function l(a, e) {
            c.isFunction(a) && a.call(b, e)
        }

        function C() {
            z = q ? a.position[1] : Math.max(0, (y - b.outerHeight(!0)) / 2 - a.amsl);
            x = n ? a.position[0] : (w - b.outerWidth(!0)) / 2;
            h = D()
        }

        function D() {
            return {
                x: w > b.outerWidth(!0),
                y: y > b.outerHeight(!0)
            }
        }
        c.isFunction(A) && (E = A, A = null);
        var a = c.extend({}, c.fn.bPopup.defaults, A);
        a.scrollBar || c("html").css("overflow", "hidden");
        var b = this,
            f = c(document),
            k = c(window),
            y = k.height(),
            w = k.width(),
            N = /OS 6(_\d)+/i.test(navigator.userAgent),
            v = 0,
            e, h, q, n, g, z, x, t, u, J, H;
        b.close = function() {
            r()
        };
        b.reposition = function(a) {
            I(a)
        };
        return b.each(function() {
            c(this).data("bPopup") || (l(a.onOpen), v = (k.data("bPopup") || 0) + 1, e = "__b-popup" + v + "__", q = "auto" !== a.position[1], n = "auto" !== a.position[0], g = "fixed" === a.positionStyle, t = b.outerHeight(!0), u = b.outerWidth(!0), a.loadUrl ? L() : B())
        })
    };
    c.fn.bPopup.defaults = {
        amsl: 50,
        appending: !0,
        appendTo: "body",
        autoClose: !1,
        closeClass: "b-close",
        content: "ajax",
        contentContainer: !1,
        easing: "swing",
        escClose: !0,
        follow: [!0, !0],
        followEasing: "swing",
        followSpeed: 500,
        iframeAttr: 'scrolling="no" frameborder="0"',
        loadCallback: !1,
        loadData: !1,
        loadUrl: !1,
        modal: !0,
        modalClose: !0,
        modalColor: "#000",
        onClose: !1,
        onOpen: !1,
        opacity: .7,
        position: ["auto", "auto"],
        positionStyle: "absolute",
        scrollBar: !0,
        speed: 250,
        transition: "fadeIn",
        transitionClose: !1,
        zIndex: 9997
    }
})(jQuery);

/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

