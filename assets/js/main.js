var open;
!(function () {
    "use strict";
    let e = (e, t = !1) => (((e = e.trim()), t) ? [...document.querySelectorAll(e)] : document.querySelector(e)),
        t = (t, i, o, s = !1) => {
            let n = e(i, s);
            n && (s ? n.forEach((e) => e.addEventListener(t, o)) : n.addEventListener(t, o));
        },
        i = (e, t) => {
            e.addEventListener("scroll", t);
        },
        o = e("#navbar .scrollto", !0),
        s = () => {
            let t = window.scrollY + 200;
            o.forEach((i) => {
                if (!i.hash) return;
                let o = e(i.hash);
                o && (t >= o.offsetTop && t <= o.offsetTop + o.offsetHeight ? i.classList.add("active") : i.classList.remove("active"));
            });
        };




    window.addEventListener("load", s), i(document, s);
    let n = (t) => {
        let i = e("#header").offsetHeight,
            o = e(t).offsetTop;
        window.scrollTo({ top: o - i, behavior: "smooth" });
    },
        a = e("#header");
    if (a) {
        let l = a.offsetTop,
            r = a.nextElementSibling,
            c = () => {
                l - window.scrollY <= 0 ? (a.classList.add("fixed-top"), r.classList.add("scrolled-offset")) : (a.classList.remove("fixed-top"), r.classList.remove("scrolled-offset"));
            };
        window.addEventListener("load", c), i(document, c);
    }
    let d = e(".back-to-top");
    if (d) {
        let p = () => {
            window.scrollY > 100 ? d.classList.add("active") : d.classList.remove("active");
        };
        window.addEventListener("load", p), i(document, p);
    }
    t("click", ".mobile-nav-toggle", function (t) {
        e("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x");
    }),
        document.addEventListener("DOMContentLoaded", function () {
            let e = document.querySelector("#navbar");
            function t(e) {
                for (; e.parentElement;) {
                    if (e.classList.contains("dropdown")) return e;
                    e = e.parentElement;
                }
                return null;
            }
            e.addEventListener("click", function (i) {
                if (e.classList.contains("navbar-mobile")) {
                    let o = t(i.target);
                    o &&
                        (function i(o) {
                            let s = o.querySelector("ul"),
                                n = s.classList.contains("dropdown-active");
                            if (
                                (e.querySelectorAll(".dropdown ul").forEach(function (e) {
                                    if (
                                        e !== s &&
                                        !(function e(t, i) {
                                            let o = i;
                                            for (; o.parentElement;) {
                                                if (o.parentElement === t) return !0;
                                                o = o.parentElement;
                                            }
                                            return !1;
                                        })(e, s) &&
                                        e.classList.contains("dropdown-active")
                                    ) {
                                        e.classList.remove("dropdown-active");
                                        let i = t(e);
                                        if (i) {
                                            let o = i.querySelector("i");
                                            o.classList.remove("bi-chevron-up"), o.classList.add("bi-chevron-down");
                                        }
                                    }
                                }),
                                    n)
                            ) {
                                s.classList.remove("dropdown-active");
                                let a = o.querySelector("i");
                                a.classList.remove("bi-chevron-up"), a.classList.add("bi-chevron-down");
                            } else {
                                s.classList.add("dropdown-active");
                                let l = o.querySelector("i");
                                l.classList.remove("bi-chevron-down"), l.classList.add("bi-chevron-up");
                            }
                        })(o);
                }
            });
        }),
        t(
            "click",
            ".scrollto",
            function (t) {
                if (e(this.hash)) {
                    t.preventDefault();
                    let i = e("#navbar");
                    if (i.classList.contains("navbar-mobile")) {
                        i.classList.remove("navbar-mobile");
                        let o = e(".mobile-nav-toggle");
                        o.classList.toggle("bi-list"), o.classList.toggle("bi-x");
                    }
                    n(this.hash);
                }
            },
            !0
        ),
        window.addEventListener("load", () => {
            window.location.hash && e(window.location.hash) && n(window.location.hash);
        }),
        GLightbox({ selector: ".glightbox" }),
        new Swiper(".clients-slider", {
            speed: 400,
            loop: !0,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            slidesPerView: "auto",
            pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
            breakpoints: { 320: { slidesPerView: 2, spaceBetween: 40 }, 480: { slidesPerView: 3, spaceBetween: 60 }, 640: { slidesPerView: 4, spaceBetween: 80 }, 992: { slidesPerView: 6, spaceBetween: 120 } },
        }),
        window.addEventListener("load", () => {
            let i = e(".portfolio-container");
            if (i) {
                let o = new Isotope(i, { itemSelector: ".portfolio-item", layoutMode: "fitRows" }),
                    s = e("#portfolio-flters li", !0);
                t(
                    "click",
                    "#portfolio-flters li",
                    function (e) {
                        e.preventDefault(),
                            s.forEach(function (e) {
                                e.classList.remove("filter-active");
                            }),
                            this.classList.add("filter-active"),
                            o.arrange({ filter: this.getAttribute("data-filter") }),
                            o.on("arrangeComplete", function () {
                                AOS.refresh();
                            });
                    },
                    !0
                );
            }
        }),
        GLightbox({ selector: ".portfolio-lightbox" }),
        new Swiper(".portfolio-details-slider", { speed: 400, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }),
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".dropdown").forEach(function (e) {
                e.addEventListener("click", function () {
                    let t = e.querySelector("i");
                    t.classList.contains("bi-chevron-down") ? (t.classList.remove("bi-chevron-down"), t.classList.add("bi-chevron-up")) : (t.classList.remove("bi-chevron-up"), t.classList.add("bi-chevron-down"));
                });
            });
        }),
        $(document).ready(function () {
            $(".dropdown:not(.dropdown1)")
                .mouseenter(function () {
                    $(this).find("i").first().removeClass("bi-chevron-down").addClass("bi-chevron-up");
                })
                .mouseleave(function () {
                    $(this).find("i").first().removeClass("bi-chevron-up").addClass("bi-chevron-down");
                });
        }),
        window.addEventListener("load", () => {
            AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });
        });
})();

(function ($) {
    "use strict";

    $(document).ready(function () {
        var offset = 50;
        var duration = 550;

        function updateProgress() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = (scroll * 100) / height;

            $('.progress-wrap').toggleClass('active-progress', scroll > offset);

            var chevronIcon = $('.progress-wrap i');
            if (progress > 95) {
                chevronIcon.removeClass('up-rotate');
            } else {
                chevronIcon.addClass('up-rotate');
            }
        }

        $(window).on('scroll', updateProgress);

        $('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });

        updateProgress(); // Call the function initially
    });

})(jQuery);
// Create the Login/Register modal element Start
const loginRegisterModal = document.createElement("div");
loginRegisterModal.classList.add("modal", "fade", "top");
loginRegisterModal.setAttribute("tabindex", "-1");
loginRegisterModal.id = "LoginRegisterModal";
loginRegisterModal.innerHTML=`
<div class="modal-dialog ">
<div class="modal-content">
    <div class="modal-header">
        <h4 class="modal-title">Create an account</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body" style="padding-bottom: 0rem;">
        <div class="d-flex row">
            <div class="col-md-6">
                <img src="assets/img/reg.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-md-6">
                <a href="/" class="text-center"><img src="assets/img/logo.png" alt="logo"
                        style="width: 79px;border-radius: 50%;display: flex;margin: 0px auto;margin-bottom: 1rem;" /></a>
                <div class="RegisterFrom">
                    <form action="" method="Post">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="name"><i class="bi bi-person"></i></span>
                            <input type="email" class="form-control" placeholder="Enter Your Name"
                                aria-label="Enter Your Name" aria-describedby="name">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="mobile-no."><i
                                    class="bi bi-phone"></i></span>
                            <input type="tel" class="form-control"
                                placeholder="Enter Your Mobile Number"
                                aria-label="Enter Your Mobile Number" aria-describedby="mobile-no.">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="email"><i
                                    class="bi bi-envelope"></i></span>
                            <input type="email" class="form-control" placeholder="Enter Your Email-ID"
                                aria-label="Enter Your Email-ID" aria-describedby="email">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="password"><i
                                    class="bi bi-lock"></i></span>
                            <input type="email" class="form-control" placeholder="Enter Your Password"
                                aria-label="Enter Your Password" aria-describedby="password">
                        </div>
                        <button type="submit" data-bs-dismiss="modal" name="register"
                            class="ml-auto mb-3"
                            style="background-color: var(--custom-color);border-radius: 40px;border: 1px solid var(--custom-color);color: #fff;width: 100%;height: 56px;display: flex;margin: 0px auto;justify-content: center;align-items: center;font-weight: 700;border-bottom: 1px solid #dee2e6;">Register</button>
                    </form>
                </div>
                <div class="LoginFrom">
                    <form action="" method="Post">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="mobile-no."><i
                                    class="bi bi-phone"></i></span>
                            <input type="tel" class="form-control"
                                placeholder="Enter Your Mobile Number"
                                aria-label="Enter Your Mobile Number" aria-describedby="mobile-no.">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="password"><i
                                    class="bi bi-lock"></i></span>
                            <input type="email" class="form-control" placeholder="Enter Your Password"
                                aria-label="Enter Your Password" aria-describedby="password">
                        </div>
                        <button type="submit" data-bs-dismiss="modal" name="register"
                            class="ml-auto mb-5"
                            style="background-color: var(--custom-color);border-radius: 40px;border: 1px solid var(--custom-color);color: #fff;width: 100%;height: 56px;display: flex;margin: 0px auto;justify-content: center;align-items: center;font-weight: 700;border-bottom: 1px solid #dee2e6;">Login</button>
                        <a href="" data-bs-toggle="modal"
                        data-bs-target="#ForgoteModal" class="text-end d-flex align-items-end justify-content-end text-decoration-none">Forgot Password</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer row" style="border-top:none;padding-top: 0rem;margin:0rem">
        <div class="col-md-6 text-center" style="border-top: 1px solid #dee2e6;padding: 0.75rem;"> <a
                onclick="LoginButton()" class="text-decoration-none text-center LoginButtonContent"
                style="margin-top: 10px;">Already have an
                account? <b>Login</b></a>
            <a onclick="SignupButton()" class="text-decoration-none text-center SignupButtonContent"
                style="margin-top: 10px;">Don’t have an account? <b>SignUp</b></a>
        </div>

    </div>
</div>
</div>`
// Create the Login/Register modal element End


// Create the Forgot Password modal element Start
const forgotModal = document.createElement("div");
forgotModal.classList.add("modal", "fade", "top");
forgotModal.setAttribute("tabindex", "-1");
forgotModal.id = "ForgoteModal";
forgotModal.innerHTML=`<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
        <h4 class="modal-title">Forgot Password</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <form action="" method="Post">
        <div class="modal-body">
            <div class="input-group">
                <span class="input-group-text" id="email"><i class="bi bi-envelope"></i></span>
                <input type="email" class="form-control" placeholder="Enter Your Email-ID"
                    aria-label="Enter Your Email-ID" aria-describedby="email">
            </div>
        </div>
        <div class="modal-footer">
            <button type="submit" data-bs-dismiss="modal" name="register" class="ml-auto "
                style="background-color: var(--custom-color);border-radius: 40px;border: 1px solid var(--custom-color);color: #fff;width: 100%;height: 56px;display: flex;margin: 0px auto;justify-content: center;align-items: center;font-weight: 700;border-bottom: 1px solid #dee2e6;">Forgot Password</button>
        </div>
    </form>
</div>
</div>`
// Create the Forgot Password modal element End
document.body.appendChild(loginRegisterModal);
document.body.appendChild(forgotModal);


const LoginButton = () => {
    $('.RegisterFrom').css('display', 'none');
    $('.LoginFrom').css('display', 'block');
    $('.SignupButtonContent').css('display', 'block');
    $('.LoginButtonContent').css('display', 'none');
}
const SignupButton = () => {
    $('.RegisterFrom').css('display', 'block');
    $('.LoginFrom').css('display', 'none');
    $('.SignupButtonContent').css('display', 'none');
    $('.LoginButtonContent').css('display', 'block');
}

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }
});
new PureCounter();
