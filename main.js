$(function(){
    //変数定義
    var navi_id="#global_navigation_wrapper",//固定する要素のid
        navi_top=$(navi_id).position().top,//固定する要素の上部のyy座標
        navi_height=$(navi_id).outerHeight(),//固定する要素のpaddingを含めた高さ
        adjust_elem="body";//高さ調節の要素
    
    //スクロール時に実行する関数を登録する
    $(window).scroll(function(){
        var current_scroll=$(window).scrollTop();//現在のスクロール値を取得
        //現在のスクロール量が固定する要素のy座標よりも
        //大きくなった場合で条件分岐する。
        if(current_scroll >=navi_top){
            //要素を固定する
            $(navi_id).css({"position":"fixed"});
            //固定する要素の高さをadjust_elemのpadding-topに追加
            $(adjust_elem).css({"padding-top":navi_height});
        } 
        else{
            //要素の固定を解除する
            $(navi_id).css({"position":"relative"});
            //adjust_elemのpadding-topを初期に戻す。
            $(adjust_elem).css({"padding-top":0});
        }
    });
    
});