// 아이스크림 제조량계산
$(document).ready(function() {
  $(".icecream").on("keyup", function() {
    var cho = Number($(".cho").val());
    var ban = Number($(".ban").val());
    var grn = Number($(".grn").val());
    var cof = Number($(".cof").val());
    var total = cho + ban + grn + cof
    var liter = Math.round(total*66.666)
    var pea = Math.round(liter/10);
    var bean = Math.round(liter/50);
    var redbean = Math.round(liter/100);
    var water = Math.round(liter/10)
    var sugar = Math.round(liter/25)
    var Erythritol = Math.round(liter/50)
    $(function() {
      $(".icecreammade").html("<ul class='icemade'><h2>재고량</h2><li>아이스크림 베이스<p>30 L</p></li><h2>제조량</h2><li>초코<p>"+cho+"개</p></li><li>바닐라<p>"+ban+"개</p></li><li>녹차<p>"+grn+"개</p></li><li>커피<p>"+cof+"개</p></li></ul>")
      $(".icecreammaterial").html("<h2>재료</h2> <ul class='icematerial'><li>땅콩<p>" + pea + "g</p></li>" + "<li>강낭콩<p>" + bean + "g</p></li><li>팥<p>" + redbean + "g</p></li></ul><ul class='icematerial'><li>비정제원당<p>" + sugar + "g</p></li><li>에리스리톨<p>" + Erythritol + "g</p></li><li>정제수<p>" + water + "g</p></li></ul>");
      $(".icecreamsyrup").html("<h2>시럽</h2> <ul class='syrup'><li><h4>초코</h4></li><li>초콜렛<p>" + Math.round((cho*33.33)) + "g</p></li><li>코코넛버터<p>" + Math.round((cho*3.33)) + "g</p></li><li> 카카오버터<p>" + Math.round((cho*1.666)) + "g</p></li></ul><ul class='syrup'><li><h4>바닐라</h4></li><li>초콜렛<p>" + Math.round((ban*33.33)) + "g</p></li><li>코코넛버터<p>" + Math.round((ban*3.33)) + "g</p></li><li> 카카오버터<p>" + Math.round((ban*1.666)) + "g</p></li></ul><ul class='syrup'><li><h4>녹차</h4></li><li>초콜렛<p>" + Math.round((grn*33.33)) + "g</p></li><li>코코넛버터<p>" + Math.round((grn*3.33)) + "g</p></li><li> 카카오버터<p>" + Math.round((grn*1.666)) + "g</p></li></ul><ul class='syrup'><li><h4>커피</h4></li><li>초콜렛<p>" + Math.round((cof*33.33)) + "g</p></li><li>코코넛버터<p>" + Math.round((cof*3.33)) + "g</p></li><li> 카카오버터<p>" + Math.round((cof*1.666)) + "g</p></li></ul>");
    })
    if (pea >= 1000 && water >= 1000) {
      pea = pea / 1000;
      water = water / 1000;
      $(function() {
        $(".icecreammaterial").html("<h2>재료</h2> <ul class='icematerial'><li>땅콩<p>" + pea + "kg</p></li>" + "<li>강낭콩<p>" + bean + "g</p></li><li>팥<p>" + redbean + "g</p></li></ul><ul class='icematerial'><li>비정제원당<p>" + sugar + "g</p></li><li>에리스리톨<p>" + Erythritol + "g</p></li><li>정제수<p>" + water + "kg</p></li></ul>");
      })
    }
    if (sugar >= 1000) {
        sugar = sugar / 1000;
        $(function() {
          $(".icecreammaterial").html("<h2>재료</h2> <ul class='icematerial'><li>땅콩<p>" + pea + "kg</p></li>" + "<li>강낭콩<p>" + bean + "g</p></li><li>팥<p>" + redbean + "g</p></li></ul><ul class='icematerial'><li>비정제원당<p>" + sugar + "kg</p></li><li>에리스리톨<p>" + Erythritol + "g</p></li><li>정제수<p>" + water + "kg</p></li></ul>");
        })
    }
    if (bean >= 1000 && Erythritol >= 1000) {
      bean = bean / 1000;
      Erythritol = Erythritol / 1000;
      $(function() {
        $(".icecreammaterial").html("<h2>재료</h2> <ul class='icematerial'><li>땅콩<p>" + pea + "kg</p></li>" + "<li>강낭콩<p>" + bean + "kg</p></li><li>팥<p>" + redbean + "g</p></li></ul><ul class='icematerial'><li>비정제원당<p>" + sugar + "kg</p></li><li>에리스리톨<p>" + Erythritol + "kg</p></li><li>정제수<p>" + water + "kg</p></li></ul>");
      })
    }
    if (redbean >= 1000) {
      redbean = redbean / 1000;
      $(function() {
        $(".icecreammaterial").html("<h2>재료</h2> <ul class='material'><li>땅콩<p>" + pea + "kg</p></li>" + "<li>강낭콩<p>" + bean + "kg</p></li><li>팥<p>" + redbean + "kg</p></li></ul><ul class='material'><li>비정제원당<p>" + sugar + "kg</p></li><li>에리스리톨<p>" + Erythritol + "kg</p></li><li>정제수<p>" + water + "kg</p></li></ul>");
      })
    }
  })
})
// 밀크 제조량계산
$(document).ready(function() {
  $(".input").on("keyup", function() {
    var ori = Number($(".ori").val());
    var suf = Number($(".suf").val());
    var sho = Number($(".sho").val());
    var lub = Number($(".lub").val());
    var set = Number($(".set").val());
    var total = (ori + set) + (suf + set) + (sho + set) + (lub + set);
    var amo = ((total / 2) * 100)
    var cas = ((total / 2) * 40)
    $(function() {
      $("#made").html("<h2>제조량</h2> <ul class='made'><li>오리지널 제조량<p>" + (ori + set) + " 병 / "+(ori + set)/2+" L</p></li><li> 슈가프리 제조량<p>" + (suf + set) + " 병 / "+(suf + set)/2+" L</p></li><li> 쇼콜라 제조량<p>" + (sho + set) + " 병 / "+(sho + set) / 2 +" L</p></li><li> 루이보스 제조량<p>" + (lub + set) + " 병 / "+(lub + set)/2+" L</p></li><li>총제조량<p>" + total + " 병 / " + total / 2 + " L </p></li></ul>");
      $("#material").html("<h2>재료</h2> <ul class='material'><li>아몬드<p>" + amo + "g</p></li>" + "<li>캐슈넛<p>" + cas + "g</p></li><li>젤란<p>" + (total * 0.25) + "g</p></li><li>로커스트<p>" + (total * 0.125) + "g</p></li></ul><ul class='material'><li>소금<p>" + (total * 0.75) + "g</p></li><li>레시틴<p>" + (total * 0.5) + "g</p></li><li>칼륨<p>" + (total * 0.5) + "g</p></li></ul>");
      $("#syrup").html("<h2>시럽</h2> <ul class='syrup'><li><h4>오리지널</h4></li><li> 물<p>" + (ori + set) * 50 + "g</p></li><li>설탕<p>" + (ori + set) * 20 + "g</p></li><li> 바닐라빈<p>" + ((ori + set) * 0.1).toFixed(1) + "ea</p></li></ul><ul class='syrup'><li><h4>슈가프리</h4></li><li> 물<p>" + (suf + set) * 50 + "g</p></li><li>에리스리톨<p>" + (suf + set) * 10 + "g</p></li><li>바닐라빈<p>" + ((suf + set) * 0.1).toFixed(1) + "ea</p></li></ul><ul class = 'syrup'><li><h4>쇼콜라</h4></li> <li>물<p>" + (sho + set) * 50 + "g</p></li><li>설탕<p>" + (sho + set) * 30 + "g</p></li><li>카카오분<p>" + (sho + set) * 12.5 + "g</p></li></ul><ul class='syrup'><li><h4>루이보스</h4></li><li>물<p>" + (lub + set) * 50 + "g</p></li><li>설탕<p>" + (lub + set) * 20 + "g</p></li><li>루이보스잎<p>" + (lub + set) * 3.5 + "g</p></li></ul>");
    })
    if (amo >= 1000) {
      var amo = amo / 1000;
      $(function() {
        $("#material").html("<h2>재료</h2> <ul class='material'><li>아몬드<p>" + amo + "kg</p></li>" + "<li>캐슈넛<p>" + cas + "g</p></li><li>젤란<p>" + (total * 0.25) + "g</p></li><li>로커스트<p>" + (total * 0.125) + "g</p></li></ul><ul class='material'><li>소금<p>" + (total * 0.75) + "g</p></li><li>레시틴<p>" + (total * 0.5) + "g</p></li><li>칼륨<p>" + (total * 0.5) + "g</p></li></ul>");
      })
    }
    if (cas >= 1000) {
      var cas = cas / 1000;
      $(function() {
        $("#material").html("<h2>재료</h2> <ul class='material'><li>아몬드<p>" + amo + "kg</p></li>" + "<li>캐슈넛<p>" + cas + "kg</p></li><li>젤란<p>" + (total * 0.25) + "g</p></li><li>로커스트<p>" + (total * 0.125) + "g</p></li></ul><ul class='material'><li>소금<p>" + (total * 0.75) + "g</p></li><li>레시틴<p>" + (total * 0.5) + "g</p></li><li>칼륨<p>" + (total * 0.5) + "g</p></li></ul>");
      })
    }
  })
})

// 타이머
$(document).ready(function() {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var st = 0;
  var timer;
  $(".buttondiv button").on("click", timerbtn)
  function timerbtn() {
    if ($(this).hasClass("timestart")) {
      timer = setInterval(function() {
        seconds++;
        if (seconds == 60) {
          minutes++;
          seconds = 0;
        }
        if (minutes == 60) {
          hours++;
          minutes = 0;
        }
        $(".timer p").text(zeroplus(hours, 2) + " : " + zeroplus(minutes, 2) + " : " + zeroplus(seconds, 2))
      }, 1000);
      $(".timestart").hide();
      $(".timestop").fadeIn();
    }else if ($(this).hasClass("timestop")) {
      clearInterval(timer);
      $(".timestop").hide();
      $(".timestart").fadeIn();
    }else if ($(this).hasClass("recordbtn")) {
      st++;
      $(".record").append("<p><span>" + zeroplus(st,2) + "</span>. " + zeroplus(hours, 2) + ":" + zeroplus(minutes, 2) + ":" + zeroplus(seconds, 2) + "</p>");
    }else if($(this).hasClass("resetbtn")){
      hours = 0;
      minutes = 0;
      seconds = 0;
      st = 0;
      $(".timer p").text(zeroplus(hours, 2) + " : " + zeroplus(minutes, 2) + " : " + zeroplus(seconds, 2));
      $(".record").empty();
    }
  }
  $(document).on("click",".record p", function() {
    $(this).remove();
  })
});

function zeroplus(n, z) {
  var zero = '';
  n = n.toString();
  if (n.length < z) {
    for (var i = 0; i < z - n.length; i++) {
      zero += '0';
    }
  }
  return zero + n;
}

// 살균시간 계산 및 타이머


$(document).ready(function() {
  var tem ;
  var hum ;
  var h = 0;
  var m = 0;
  var s = 0;
  var timers;
  $(".tem, .hum").on("keyup", function() {
    tem = Number($(".tem").val());
    hum = Number($(".hum").val());
    var total = (tem * hum)*7.2
    s = Math.floor(total % 60);
    m = Math.floor((total / 60) % 60);
    h = Math.floor(total / 60 / 60);
    $(".stertime").text("살균시간 " + zeroplus(Math.floor(total / 60),2) + "분 입니다.")
    $(".countdown p").text(zeroplus(h, 2) + " : " + zeroplus(m, 2) + " : " + zeroplus(s, 2));
  });
$(".sterbtn button").on("click", sterbtn)
function sterbtn() {
  if ($(this).hasClass("ster")) {
    timers = setInterval(function() {
      if (h == 0 && m == 0 && s == 0) {
        s = 1;
      }
      if (s == 0) {
        s += 60;
        m--;
      }
      if (m == -1) {
        m += 60;
        h--;
      }
      if (h == -1) {
        h = 0;
      }
      s--;
      $(".sterstop").fadeIn()
      $(".ster").hide()
      $(".countdown p").text(zeroplus(h, 2) + " : " + zeroplus(m, 2) + " : " + zeroplus(s, 2));
      if (h == 0 && m == 0 && s == 0) {
        clearInterval(timers);
        var audio = new Audio('js/bell.mp3');
        audio.play();
        $(function(){
          $(".ster").fadeIn();
          $(".sterstop").hide();
        })
      }
    }, 1000);
  }else if ($(this).hasClass("sterstop")) {
    clearInterval(timers);
    $(".ster").fadeIn()
    $(".sterstop").hide();
  }else if ($(this).hasClass("sterreset")) {
    h = 0;
    m = 0;
    s = 0;
    $(".countdown p").text(zeroplus(h, 2) + " : " + zeroplus(m, 2) + " : " + zeroplus(s, 2));
  }
}
});
