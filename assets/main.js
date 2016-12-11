$(function() {

  // your code will go here
  var ReportCard = {
    completed: function() {
      var promise = $.Deferred();
      $.ajax('https://www.codeschool.com/users/mohjak.json', {
        dataType: 'jsonp',
        success: function(response) {
          promise.resolve(response.courses.completed);
        }
      });
      return promise;
    }
  };

  var completedPromise = ReportCard.completed().done(function(response) {
    var courses = response.map(function(course, index) {
      var badges = $('#badges');
      var badge = $('<div></div>', {
        class: 'course',
      });
      var h3 = $('<h3></h3>', {
        text: course.title
      });
      h3.appendTo(badge);
      var img = $('<img/>', {
        src: course.badge
      });
      img.appendTo(badge);
      var a = $('<a></a>', {
        href: course.url,
        target: '_blank',
        class: 'btn btn-primary',
        text: 'See Course'
      });
      a.appendTo(badge);
      badge.appendTo(badges);
      return badges;
    });
  });
});
