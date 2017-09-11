$(".lg_btn").on("click", function(){
    window.android.login($("#lg_id").val(), $("#lg_pw").val());//로그인 id, pw 전달
});

$(".join_intent").on("click", function(){
    window.android.joinIntent();
});