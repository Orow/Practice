// Searchbar Handler
$(function(){
    var searchField = $('#query');
    var icon = $('#search-btn');

    // Focus Event Handler, 變長
    $(searchField).on('focus', function(){
        $(this).animate({
            // 點擊後變寬,原本width:45%
            width: '100%'
        },400);
            // 搜尋按鈕也移動,原本是right:360px
        $(icon).animate({
            right: '10px'
        },400);
    });
    
    // Blur Event Handler, 點擊欄位外後縮回
    $(searchField).on('blur', function(){
        if (searchField.val() == ""){
            $(searchField).animate({
                width:'45%'
            },400, function(){});
            $(icon).animate({
                right:'360px'
            },400, function(){});
        }
    });
    $('#search-form').submit(function(e){
        e.preventDefault();
    });
})

// Search Function
function search(){
    // clear results
    $('#results').html('');
    $('#buttons').html('');

    // Get Form Input
    q = $('#query').val();

    // Run Get Rquest on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part:'snippet, id',
            q: q,
            type: 'video',
            key: 'AIzaSyC07XWOrx8BPV7BBcXO_-YfrUvnm7LiqfA'
        }, function (data){
            var nexyPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            // Log data
            console.log(data);
            // data sample
            // {
            //     "kind": "youtube#searchListResponse",
            //     "etag": etag,
            //     "nextPageToken": string,
            //     "prevPageToken": string,
            //     "regionCode": string,
            //     "pageInfo": {
            //       "totalResults": integer,
            //       "resultsPerPage": integer
            //     },
            //     "items": [
            //       search Resource
            //     ]
            //  }

            $.each(data.items, function(i, item){
                // Get Output
                var output = getOutput(item);

                // Display results
                $('#results').append(output);
            });

            }

    );
}

// // Build Output
function getOutput(item){
    // infos from data
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;

    // Build Output String
    var output = '<li>' +
    '<div class="list-left">' +
    '<img src=" '+thumb+ '">' +
    '</div>' +
    '<div class="list-right">' +
    '<h3>' +title+ '</h3>' +
    '<small>By <span class="cTitle">' +channelTitle+ '</span> on ' +videoDate+ '</small>' +
    '<p>' +description+ '<p>' +
    '</div>' +
    '</li>' +
    '<div classs="clearfix"></div>' +
    '';

    return output;
}