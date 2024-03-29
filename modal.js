// モーダルウィンドウを取得
var modal = document.getElementById("modal");

// モーダルを表示するボタンを取得
var btn = document.getElementById("modalTrigger");

// モーダルを閉じるボタンを取得
var span = document.getElementsByClassName("close-button")[0];

// ユーザーがボタンをクリックしたときにモーダルを開く
btn.onclick = function() {
    modal.style.display = "block";
}

// ユーザーが<span> (x) をクリックしたときにモーダルを閉じる
span.onclick = function() {
    modal.style.display = "none";
}

// ユーザーがモーダルの外側をクリックしたときにモーダルを閉じる
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
