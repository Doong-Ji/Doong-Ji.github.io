$(function(){

  // 투표만들기 팝업
  $('.btn_vote').click(function(){
    //스크롤 막기
    $('body').css({overflow: 'hidden'});
    $('.bg_modal, .modal.vote').css({display: "block"});
  });

  //작성취소
  $('form .btn_cancel').click(function(){
    //스크롤 막기
    $('body').css({overflow: 'hidden'});
    $('.bg_modal, .modal.cancel').css({display: "block"});
  });

  // 팝업 내 취소 클릭시 팝업 닫기
  $('.modal .btn_cancel').click(function(){
    //스크롤 풀기
    $('body').css({overflow: 'scroll'});
    $('.bg_modal, .modal.vote, .modal.cancel').css({display: "none"});
  });

  // 투표진행
  $('.progress').click(function(){
    $(this).addClass('on_vote').siblings().removeClass('on_vote').addClass('on')
    $('.fill').css({display: "block"});
  });

});