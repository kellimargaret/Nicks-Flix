nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  // Five hard coded reviews
  factory.reviews = [
    {
      title: "Hackers is the best movie ever!",
      reviewBody: "In sapien velit, facilisis in dictum sit amet, sodales non metus. Sed viverra risus vitae risus pulvinar sagittis. Maecenas vel magna dapibus lectus consequat iaculis. Morbi porta vehicula lectus eu semper. Nullam eu dui pellentesque, vestibulum mi sed, laoreet diam. Cras mollis, est at sollicitudin mollis, ipsum augue tincidunt justo, id tincidunt ligula lacus ac nunc. Fusce consectetur quam eu velit congue, nec condimentum metus venenatis.",
      id: 1
    },
    {
      title: "Don't ever see Garden State",
      reviewBody: "Praesent viverra justo eget tortor vulputate, eget mollis ipsum finibus. Nam eget bibendum ante. Praesent eget ante sapien. Integer orci purus, suscipit non vulputate ut, dignissim in eros. Etiam orci velit, laoreet in mi non, hendrerit blandit sem. Fusce maximus laoreet ligula sit amet euismod.",
      id: 2
    },
    {
      title: "My thoughts on the new Star Wars",
      reviewBody: "Cras erat erat, placerat vel feugiat vel, maximus a ante. Curabitur eu diam at metus accumsan luctus vitae sed turpis. Etiam eget justo faucibus, interdum risus a, vehicula libero. Pellentesque tristique ligula quis libero pellentesque condimentum. Suspendisse massa leo, condimentum quis felis sed, tristique finibus mauris. ",
      id: 3
    },
    {
      title: "Sharknado is a classic",
      reviewBody: " Aliquam vestibulum quis augue eget condimentum. Nunc nec erat ac diam molestie lacinia vel at metus. Aliquam consequat congue sapien. Proin fermentum vitae ex vel sagittis. Mauris scelerisque risus eget maximus volutpat.",
      id: 4
    },
    {
      title: "Check out the new Thor movie",
      reviewBody: "Vivamus felis magna, accumsan sit amet leo vitae, molestie dignissim quam. Pellentesque vulputate ornare elementum. Maecenas et nibh rhoncus, hendrerit tortor in, porta mi. Nam pretium purus et tellus consectetur rutrum. Nulla ut tempor felis. Vestibulum non elit pulvinar, porta nisl id, ultrices nisi. Sed eu nibh justo. Nam sed suscipit enim, vel hendrerit velit.",
      id: 5
    }
  ];

  factory.addReview = function() {
    factory.reviews.push({title: factory.reviewTitle, reviewBody: factory.reviewBody, id: factory.reviews.length +1});
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };
  return factory;
});
