chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("download").addEventListener('click', () => {        
        function fetchData(){
            var test = document.getElementsByTagName("a");
            for(var i = 0; i < test.length; i++){
                var elem = test[i];
                var name = elem.href.substr((elem.href.lastIndexOf("/")+1), elem.href.length);
                elem.setAttribute('download', name);
            }
            for(var i = 0; i < test.length; i++){
                var elem = test[i];
                if(elem.href.lastIndexOf(".png") != -1 || elem.href.lastIndexOf(".tiff") != -1 || elem.href.lastIndexOf(".jpg") != -1 || elem.href.lastIndexOf(".JPG") != -1 || elem.href.lastIndexOf(".pdf") != -1 || elem.href.lastIndexOf(".mp3") != -1 || elem.href.lastIndexOf(".mkv") != -1){
                    elem.click();
                }
            }
        }
        
        chrome.tabs.executeScript({
            code: "("+fetchData+"())" 
        }, (results) => {
            console.log(results[0]);
        });
    });
});
