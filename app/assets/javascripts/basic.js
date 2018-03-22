// $(".search-form").ready(function() {
//   debugger;
//   var url = new Url;
  
//   var search = url.query.search ? $.parseParams(url.query.search) : {}
//   $('.search-tags').html('')
//   $(".search-form input").each(function() {
//     if ($(this).attr('type') === 'submit'){
//       return;
//     }
//     var value = search[$(this).attr('name')];
//     if($(this).hasClass('date-time-picker')) {
//       if (value) {
//         var date = moment(value, 'DD/MM/YYYY');
//         $(this).val(date.toDate());
//       }
//     } else {
//       $(this).val(value);
//     }

//     if (value) {
//       var label = $(this).parent().find('span').text()
//       var tag = "<span class='search-tag label label-default'>" + label + ": <label class='search-value'>" + value + "</label></span>";
//       $('.search-tags').append(tag)
//     }
//   });
//   $(".search-form select").each(function() {
//     var value = search[$(this).attr('name')];
//     if (value) {
//       $(this).val(value);
//       $(this).trigger('chosen:updated');
//       var label = $(this).parent().find('span').text()
//       var selectValues = [];
//       $(this).find("option").each(function(){
//         var $option = $(this);
//         if (value instanceof Array) {
//           if(value.indexOf($option.attr('value')) >= 0) {
//             selectValues.push($option.text())
//           }
//         } else {
//           if(value == $option.attr('value')) {
//             selectValues.push($option.text())
//           }
//         }

//       })
//       var tag = "<span class='search-tag label label-default'>" + label + ": <label class='search-value'>" + selectValues + "</label></span>";
//       $('.search-tags').append(tag)
//     }
//   });

//   $('.search-button').on('click', function(){
//     $('.search-form').slideToggle();

//   });

//   $(".search-form").on("submit", function(ev) {
//     var searchParams = {};
//     ev.preventDefault();

//     $(".search-form input").each(function() {
//       if ($(this).attr('type') === 'submit'){
//         return;
//       }

//       if(!$(this).attr('name')) {
//         return;
//       }

//       var value = $(this).val();
//       if (!value) {
//         return
//       }
//       searchParams[$(this).attr('name')] = value;
//     });

//     $(".search-form select").each(function() {
//       var value = $(this).val();
//       if (!value) {
//         return
//       }
//       searchParams[$(this).attr('name')] = value;
//     });

//     if(searchParams['from'] || searchParams['to']) {

//       var fromMoment = moment(searchParams['from'] || 'INVALID', 'DD/MM/YYYY');
//       var toMoment = moment(searchParams['to'] || 'INVALID', 'DD/MM/YYYY');

//       if (!fromMoment.isValid()) {
//         swal('Erro', 'Data inicial inválida', 'error');
//         return false;
//       }
//       if (!toMoment.isValid()) {
//         swal('Erro', 'Data Final inválida', 'error');
//         return false;
//       }
//       if(fromMoment.isAfter(toMoment)) {
//         swal('Erro', 'Data Final maior do que a Inicial', 'error');
//         return false;
//       }
//     }
//     url.query.page = "1"
//     url.query.search = $.param(searchParams)
//     location.href = url.toString()
//   });

//   $(".clear-search").on("click", function(ev) {
//     ev.preventDefault();
//     url.query.search = null
//     location.href = url.toString()
//   });
// });
// console.log('ww');


// $(document).ready(function(){
//   $('#search-trigger').on('click', function(event){
//     event.preventDefault();
//     $('.search-form').toggleClass('active');
//     $('.search-form input').focus();
//   })
// })