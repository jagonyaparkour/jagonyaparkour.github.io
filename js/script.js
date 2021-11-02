$(document).ready(function() {
    $('.greeting').toggleClass('show');
    $('.profil').toggleClass('show');
    $('nav').toggleClass('show');
    $('#menu').on('click', function() {
        $('.fa-bars').toggleClass('fa-times');
        $('.list').each(function(i) {
            setTimeout(function() {
                $('.list').eq(i).toggleClass('show');
            }, 150 * (i + 1))
        });
    })
    $(window).on('scroll load', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.list').each(function(i) {
            setTimeout(function() {
                $('.list').eq(i).removeClass('show');
            }, 150 * (i + 1))
        });
    })

    $('.page-scroll').on('click', function(e) {

        //ambil isi href
        var tujuan = $(this).attr('href')
            //tangkap elemen ybs

        var elementTujuan = $(tujuan);

        //pindahkan scroll
        $('html,body').animate({

            scrollTop: elementTujuan.offset().top
        }, 1000, 'swing');


        e.preventDefault();
    });

    
      $('.close').on('click', function(){
          $('#success').hide();
      })
    
      $.ajax({
        url : 'https://www.googleapis.com/youtube/v3/channels',
        type : 'get',
        dataType : 'json',
        data : {
          'key' : 'AIzaSyCmmqkXxNbzHaEtLpExfL8nRKdsqL-VPs8',
          'part' : 'snippet,statistics',
          'id' : 'UCPTH7FsMmwe2xxDzlS1FQWg'
        }, 
        success : function(result){
            console.log(result.items[0].snippet.title)
            $('.channel h3 span').html(result.items[0].snippet.title)
            $('.channel p span').html(result.items[0].statistics.subscriberCount)
            $('.channel h4 span').html(result.items[0].statistics.videoCount)
            }
        })

        $.ajax({
            url : 'https://www.googleapis.com/youtube/v3/search',
            type : 'get',
            dataType : 'json',
            data : {
              'key' : 'AIzaSyCmmqkXxNbzHaEtLpExfL8nRKdsqL-VPs8',
              'part' : 'snippet',
              'channelId' : 'UCPTH7FsMmwe2xxDzlS1FQWg',
              'maxResults' : '1',
              'order' : 'date'
              
            }, 
            success : function(result){
               console.log(result.items[0].id.videoId)
               const vidId = result.items[0].id.videoId
               $('.vplayer').append(` <iframe class="player" width="420" height="345" src="https://www.youtube.com/embed/${vidId}">
               </iframe>`)
               $('.deskripsi').html(result.items[0].snippet.description)
            }
            })
            console.log()

        $(window).scroll(function(){
            var wsScroll = $(this).scrollTop();
            if(wsScroll > $('.about').offset().top - 200){
                $('.dataexp .data ').addClass('show');
                $('.dataexp .exp .box').each(function(i){
                    setTimeout(function(){
                        $('.dataexp .exp .box').eq(i).addClass('show');
                    }, 500 * ( i + 1))
                })
            }

            if( wsScroll > $('.education').offset().top - 200){
                $('.counter .c1 .box').each(function(i){
                    setTimeout(function(){
                        $('.counter .c1 .box').eq(i).addClass('show');
                    }, 300 * (i + 1))
                })
            }

            if( wsScroll > $('.portfolio').offset().top - 200){
                $('.kotak').each(function(i){
                    setTimeout(function(){
                        $('.kotak').eq(i).addClass('show');
                    }, 500 * (i + 1))
                    })
                   
            }
            if( wsScroll > $('.youtube').offset().top - 200){
              $('.channel').addClass('show');
              $('.player').addClass('show');
                   
            }
            if( wsScroll > $('.contact').offset().top - 200){
              $('.row form').addClass('show');
              $('.content').addClass('show');
                   
            }
        })
})