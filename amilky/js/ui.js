// 제조량계산
$(document).ready(function() {
  $("#made").html("<h2>제조량</h2> <ul class='made'><li>오리지널 제조량<p>" + 0 + "병</p></li><li> 슈가프리 제조량<p>" + 0 + "병</p></li><li> 쇼콜라 제조량<p>" + 0 + "병</p></li><li> 루이보스 제조량<p>" + 0 + "병</p></li><li>총제조량<p>" + 0 + "병 / " + 0 + "L </p></li></ul>");
  $("#material").html("<h2>재료</h2> <ul class='material'><li>아몬드<p>" + 0 + "g</p></li>" + "<li>캐슈넛<p>" + 0 + "g</p></li><li>젤란<p>" + 0 + "g</p></li><li>로커스트<p>" + 0 + "g</p></li></ul><ul class='material'><li>소금<p>" + 0 + "g</p></li><li>레시틴<p>" + 0 + "g</p></li><li>칼륨<p>" + 0 + "g</p></li></ul>");
  $("#syrup").html("<h2>시럽</h2> <ul class='syrupori'><li><h4>오리지널</h4></li><li> 물 <p>" +0+ "g</p></li><li>설탕<p>" + 0 + "g</p></li><li> 바닐라빈<p>" + 0 + "ea</p></li></ul><ul class='syrupsuf'><li><h4>슈가프리</h4></li><li> 물<p>" + 0 + "g</p></li><li>에리스리톨<p>" + 0 + "g</p></li><li>바닐라빈<p>" + 0 + "ea</p></li></ul><ul class='syrupsho'><li><h4>쇼콜라</h4></li> <li>물<p>" + 0 + "g</p></li><li>설탕<p>" + 0 + "g</p></li><li>카카오분<p>" + 0 + "g</p></li></ul><ul class='syruplub'><li><h4>루이보스</h4></li><li>물<p>" + 0 + "g</p></li><li>설탕<p>" + 0 + "g</p></li><li>루이보스잎<p>" + 0 + "g</p></li></ul>");
  $("input").on("keyup", function() {
    var ori = Number($(".ori").val());
    var suf = Number($(".suf").val());
    var sho = Number($(".sho").val());
    var lub = Number($(".lub").val());
    var set = Number($(".set").val());
    var total = (ori + set) + (suf + set) + (sho + set) + (lub + set);
    var amo = ((total / 2) * 100)
    var cas = ((total / 2) * 40)
    $(function() {
      $("#made").html("<h2>제조량</h2> <ul class='made'><li>오리지널 제조량<p>" + (ori + set) + "병</p></li><li> 슈가프리 제조량<p>" + (suf + set) + "병</p></li><li> 쇼콜라 제조량<p>" + (sho + set) + "병</p></li><li> 루이보스 제조량<p>" + (lub + set) + "병</p></li><li>총제조량<p>" + total + "병 / " + total / 2 + "L </p></li></ul>");
      $("#material").html("<h2>재료</h2> <ul class='material'><li>아몬드<p>" + amo + "g</p></li>" + "<li>캐슈넛<p>" + cas + "g</p></li><li>젤란<p>" + (total * 0.25) + "g</p></li><li>로커스트<p>" + (total * 0.125) + "g</p></li></ul><ul class='material'><li>소금<p>" + (total * 0.75) + "g</p></li><li>레시틴<p>" + (total * 0.5) + "g</p></li><li>칼륨<p>" + (total * 0.5) + "g</p></li></ul>");
      $("#syrup").html("<h2>시럽</h2> <ul class='syrupori'><li><h4>오리지널</h4></li><li> 물<p>" + (ori + set) * 50 + "g</p></li><li>설탕<p>" + (ori + set) * 20 + "g</p></li><li> 바닐라빈<p>" + ((ori + set) * 0.1).toFixed(1) + "ea</p></li></ul><ul class='syrupsuf'><li><h4>슈가프리</h4></li><li> 물<p>" + (suf + set) * 50 + "g</p></li><li>에리스리톨<p>" + (suf + set) * 10 + "g</p></li><li>바닐라빈<p>" + ((suf + set) * 0.1).toFixed(1) + "ea</p></li></ul><ul class = 'syrupsho'><li><h4>쇼콜라</h4></li> <li>물<p>" + (sho + set) * 50 + "g</p></li><li>설탕<p>" + (sho + set) * 30 + "g</p></li><li>카카오분<p>" + (sho + set) * 12.5 + "g</p></li></ul><ul class='syruplub'><li><h4>루이보스</h4></li><li>물<p>" + (lub + set) * 50 + "g</p></li><li>설탕<p>" + (lub + set) * 20 + "g</p></li><li>루이보스잎<p>" + (lub + set) * 3.5 + "g</p></li></ul>");
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
      $(".timer").html("<ul class='time'> <li>" + zeroplus(hours, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(minutes, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(seconds, 2) + "</li> </ul>");
      $(".timestart").click(function() {
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
          $(".timer").html("<ul class='time'> <li>" + zeroplus(hours, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(minutes, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(seconds, 2) + "</li> </ul>")
        }, 1000)
        $(".timestart").css("display", "none")
        $(".timestop").css("display", "inline");
      })

      $(".timestop").click(function() {
        clearInterval(timer);
        $(".timestop").css("display", "none")
        $(".timestart").css("display", "inline");
      })

      $(".recordbtn").click(function() {
        st++;
        $(".record").append("<ul class='time'><h2>랩"+st+"</h2><li>" + zeroplus(hours, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(minutes, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(seconds, 2) + "</li>" + "</ul>")
     })
     $(".resetbtn").click(function() {
       hours = 0;
       minutes = 0;
       seconds = 0;
       st = 0;
       $(".timer").html("<ul class='time'> <li>" + zeroplus(hours, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(minutes, 2) + "</li>" + "<span>:</span>" + "<li>" + zeroplus(seconds, 2) + "</li> </ul>");
       $(".record").empty();
     })
      })

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
