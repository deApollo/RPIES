function wipePage(point) {
    $(point).html("");
}

function pageInject(injectPoint, injectResource) {
    $.get(chrome.extension.getURL(injectResource), function(resource) {
        $(injectPoint).append(resource);
    });
}

$(document).ready(function() {
    console.log()
    switch (document.title) {
    case "Rensselaer's Student Information System":
        wipePage("body");
        pageInject("body", "web_res/rpiesTitle.html");
        break;
    case "Main Menu":
        wipePage("body");
        pageInject("body", "web_res/navBar.html");
        pageInject("body", "web_res/rpiesMainMenu.html");
        break;
    case "User Login":
        wipePage("body");
        pageInject("body", "web_res/rpiesTitle.html");
        break;
    case "Personal Information Menu":
        if ($(".informationtext").text() == "Your changes were saved successfully") {
            wipePage("body");
            pageInject("body", "web_res/navBar.html");
            pageInject("body", "web_res/rpiesPersonalInfoMenuConfirm.html");
        }
        else {
            wipePage("body");
            pageInject("body", "web_res/navBar.html");
            pageInject("body", "web_res/rpiesPersonalInfoMenu.html");
        }
        break;
    case "Change User PIN":
        if (($(".pldefault:last").text().trim()) == "New PIN number verification error!") {
            wipePage("body");
            pageInject("body", "web_res/navBar.html");
            pageInject("body", "web_res/rpiesChangeUserPinError.html");
        }
        else {
            wipePage("body");
            pageInject("body", "web_res/navBar.html");
            pageInject("body", "web_res/rpiesChangeUserPin.html");
        }
        break;
    case "Student Menu":
        wipePage("body");
        pageInject("body", "web_res/navBar.html");
        pageInject("body", "web_res/rpiesStudentMenu.html");
        break;
    case "Financial Aid":
        wipePage("body");
        pageInject("body", "web_res/navBar.html");
        pageInject("body", "web_res/rpiesFinancialAidMenu.html");
        break;
    case "Search Result":
        wipePage("body");
        pageInject("body", "web_res/navBar.html");
        pageInject("body", "web_res/rpiesSearchResults.html");
        break;
    case "User Logout":
        wipePage("body");
        pageInject("body", "web_res/rpiesLogout.html");
        break;
    default:
        console.log(window.location.href);
        switch (window.location.href) {
            case "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=pmenu.P_MainMnu":
                wipePage("body");
                pageInject("body", "web_res/navBar.html");
                pageInject("body", "web_res/rpiesHumanResourcesPayrollMenu.html")
                break;
            default:
                break;
        }
    }
});
