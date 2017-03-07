(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#calendar').fullCalendar({
    defaultView: 'agendaDay',
    events: [
        // events go here
    ],
    resources: [
             { id: 'New Patient', title: 'New Patient' },
             { id: 'Adjustment', title: 'Adjustment' },
             { id: 'Physical Therapy', title: 'Physical Therapy' },
             { id: 'Massage', title: 'Massage' }    ]
    // other options go here...
});

  });
})(jQuery);
