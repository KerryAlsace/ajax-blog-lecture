// Get comments AJAX, replaced by remote true

// $(function(){
//   // $("a.load_comments").on("click", function(e){
//     // You just clicked on the Load Comments Link
//     // We'd love to use the HREF attribute of that link as the URL for the request

//     // Fire some ajax.
//     // $.ajax({
//     //   method: "GET",
//     //   url: this.href
//     // }).success(function(response){
//     //   // Get the response (it's the variable data)
//     //   $("div.comments").html(response)
//     //   // We'd really want to load that data into the DOM (add it to the current page)
//     // }).error(function(notNeeded){
//     //   alert("we broke!!!!")
//     // });

//     // Requesting HTML
//     // $.get(this.href).success(function(response){
//     //   $("div.comments").html(response)
//     // })

//     // Requesting JSON
//     // $.get(this.href).success(function(json){
//     //   // clear the OL html (in case there were stale comments)
//     //   var $ol = $("div.comments ol")
//     //   $ol.html("") // emptied the OL
//     //
//     //   // iterate over each comment within json
//     //   json.forEach(function(comment){
//     //     // with each comment data, append an LI to the OL with the comment content
//     //     $ol.append("<li>" + comment.content + "</li>");
//     //   })
//     // })


//     // load that response into the HTML of the page.
//   //   e.preventDefault();
//   // })

//   $("a.load_comments").on("click", function(e){
//     $.ajax({
//       url: this.href,
//       dataType: 'script'
//     })

//     e.preventDefault();
//   });
// });


// Submit comments AJAX (soon to be replaced by remote true)
$(function(){
  $("#new_comment").on("submit", function(e){
    // 1. We need the URL to submit the POST request to
    url = this.action

    // 2. We need the form data
    data = {
      'authenticity_token': $("input[name='authenticity_token']").val(),
      'comment': {
        'content': $("#comment_content").val()
      }
    };

    // 3. Send a POST request to the correct place that the 
    // form would have gone to anyway, along with the actual
    // form data

    // Low-level implementation
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function(response){
        debugger
      }
    });


    e.preventDefault();
  });
});