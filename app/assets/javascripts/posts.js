$(function() {
  $("a.load_comments").on("click", function(e){
    // // We just clicked the load comments link
    // // Let's use that HREF attribute of the link as the URL for the request

    // // fire some ajax
    // $.ajax({
    //   method: "GET",
    //   url: this.href
    // }).success(function(response) {
    //   // get a response (as variable 'response')

    //   $("div.comments").html(response);

    //   // Load data into dom
    // }).error(function(notNeeded) {
    //   alert("broken!");
    // });

    // Request using HTML
    // $.get(this.href).success(function(response){
    //   $("div.comments").html(response);
    // })

    // Request using JSON
    $.get(this.href).success(function(json){
      // clear the OL html (in case there were stale comments)
      var $ol = $("div.comments ol")
      $ol.html("") // emptied the OL

      // iterate over each comment within json
      // with each comment data, append an LI to the OL

      debugger
    })

    // load that response into the html of the page
    e.preventDefault();
  });
});


// $(function(){
//   $("a.load_comments").on("click", function(e){
//     You just clicked on the Load Comments Link
//     We'd love to use the HREF attribute of that link as the URL for the request

//     Fire some ajax.
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).success(function(response){
//       // Get the response (it's the variable data)
//       $("div.comments").html(response)
//       // We'd really want to load that data into the DOM (add it to the current page)
//     }).error(function(notNeeded){
//       alert("we broke!!!!")
//     });

//     Requesting HTML
//     $.get(this.href).success(function(response){
//       $("div.comments").html(response)
//     })

//     Requesting JSON
//     $.get(this.href).success(function(json){
//       // clear the OL html (in case there were stale comments)
//       var $ol = $("div.comments ol")
//       $ol.html("") // emptied the OL
    
//       // iterate over each comment within json
//       json.forEach(function(comment){
//         // with each comment data, append an LI to the OL with the comment content
//         $ol.append("<li>" + comment.content + "</li>");
//       })
//     })


//     load that response into the HTML of the page.
//     e.preventDefault();
//   })

//   $("a.load_comments").on("click", function(e){
//     $.ajax({
//       url: this.href,
//       dataType: 'script'
//     })

//     e.preventDefault();
//   })
// })
