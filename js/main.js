"use strict";

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll(".idc-bg-wrapper"));
    banners.forEach(function (elem) {
        return (elem.style.width = document.documentElement.clientWidth + "px");
    });
}

function fixButton() {
    let btn = document.querySelector(".idc-button-wrapper.idc-fixed");
    let container = document.querySelector(".idc-container");
    let right =
        (document.documentElement.clientWidth - container.clientWidth) / 2;
    let btnWidth = btn.scrollHeight;

    btn.style.right = right - btnWidth + "px";

    // let head = document.querySelector(".idc-head");
    // let top = head.scrollHeight
    // btn.style.top = top + "px";
}

document.onreadystatechange = function () {
    var DocWidth = document.documentElement.clientWidth;
    window.addEventListener("resize", function () {
        banner_resize();
        if (DocWidth > 700) fixButton();
    });

    banner_resize();
    if (DocWidth > 700) fixButton();
};
