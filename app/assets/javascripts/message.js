    $(function(){ 
    function buildHTML(message){
      if ( message.image ) {
        var html =
        `<div class="message" data-message-id=${message.id}>
            <div class="main-message">
              <div class="main-message__box">
                ${message.user_name}
              </div>
              <div class="main__message__box__form">
                ${message.created_at}
              </div>
            </div>
            <div class="main-message__bov__text">
              <p class="main-message__box__text__font">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
        `<div class="message" data-message-id=${message.id}>
            <div class="main-message">
              <div class="main-message__box">
                ${message.user_name}
              </div>
              <div class="main__message__box__form">
                ${message.created_at}
              </div>
            </div>
            <div class="main-message__box__text">
              <p class="main-message__box__text__font">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
    }
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main__message').append(html);      
      $('.main__message').animate({ scrollTop: $('.main__message')[0].scrollHeight});
      $('.main__form__box')[0].reset();
      $('.main__form__submit-btn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
})
});