function wipePage(point){
    $(point).html("");
}

function pageInject(injectPoint, injectResource){
    $.get(chrome.extension.getURL(injectResource),function(resource){
        $(injectPoint).append(resource);
    });
}

$(document).ready(function(){;
    switch (document.title){
        case "Rensselaer's Student Information System":
            wipePage("body");
            pageInject("body", "web_res/rpiesTitle.html");
            break;
        case "User Login":
            alert("Injected onto login page");
            break
        case "Change User Pin":
            wipePage();
            pageInject("body")
        default:
            alert("Injected onto non-handled page");
    }
});
