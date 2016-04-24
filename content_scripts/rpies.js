function wipePage(point) {
    $(point).html("");
}

function pageInject(injectPoint, injectResource) {
    $.get(chrome.extension.getURL(injectResource), function(resource) {
        $(injectPoint).append(resource);
    });
}

$(document).ready(function() {
    switch (document.title) {
    case "Rensselaer's Student Information System":
        wipePage("body");
        pageInject("body", "web_res/rpiesTitle.html");
        break;
    case "Main Menu":
        wipePage("body");
        pageInject("body", "web_res/rpiesMainMenu.html");
        break;
    case "Personal Information Menu":
        wipePage("body");
        pageInject("body", "web_res/rpiesPersonalInfoMenu.html");
        break;
    case "Change User PIN":
        wipePage("body");
        pageInject("body", "web_res/rpiesChangeUserPin.html");
        break;
    case "Student Menu":
        wipePage("body");
        pageInject("body", "web_res/rpiesStudentMenu.html");
        break;
    case "Financial Aid":
        wipePage("body");
        pageInject("body", "web_res/rpiesFinancialAidMenu.html");
        break;
    case "User Logout":
        wipePage("body");
        pageInject("body", "web_res/rpiesLogout.html");
        break;
    default:
        break;
    }
});
