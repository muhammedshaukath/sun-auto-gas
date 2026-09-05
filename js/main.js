// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Savings calculator (signature element)
  var slider = document.getElementById("fuel-spend");
  var spendOut = document.getElementById("fuel-spend-value");
  var monthlyOut = document.getElementById("monthly-savings");
  var yearlyOut = document.getElementById("yearly-savings");
  var SAVINGS_RATE = 0.4; // matches the shop's own "save upto 40% per liter" claim

  function formatINR(n) {
    return "\u20B9" + Math.round(n).toLocaleString("en-IN");
  }

  function updateCalc() {
    if (!slider) return;
    var spend = parseInt(slider.value, 10);
    spendOut.textContent = formatINR(spend);
    var monthlySavings = spend * SAVINGS_RATE;
    monthlyOut.textContent = formatINR(monthlySavings);
    yearlyOut.textContent = formatINR(monthlySavings * 12);
  }

  if (slider) {
    slider.addEventListener("input", updateCalc);
    updateCalc();
  }

  // Gauge arc fill (fixed at the shop's stated average savings rate)
  var arc = document.getElementById("gauge-fill");
  if (arc) {
    var len = arc.getTotalLength();
    arc.style.strokeDasharray = len;
    var target = len * (1 - SAVINGS_RATE * 1.4); // visual fill, not to-scale
    requestAnimationFrame(function () {
      arc.style.strokeDashoffset = target;
    });
  }
});
