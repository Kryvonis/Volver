var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function launchMobile(version){
        var username = document.getElementById('userId').value;
        var urlMobile = "https://mobilewebserver9-mobiledgcqa.installprogram.eu/MobileWebGames/game/mgs/5_1_0?lobbyURL=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FLobby%2Fen%2FIslandParadise%2FGames%2FnewGames&moduleID=10025&clientID=40307&gameName=shanghaibeauty"+version+"&gameTitle=shanghaibeauty&LanguageCode=en&clientTypeID=40&casinoID=5007&lobbyName=IslandParadise&loginType=PlayerService&bankingURL=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FLobby%2Fen%2FIslandParadise%2FBanking&xmanEndPoints=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FXMan%2Fx.x&routerEndPoints=&disablePoweredBy=false&currencyFormat=&isPracticePlay=false&logoutURL=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FLobby%2Fen%2FIslandParadise%2FLogoutisPracticePlay=false&username="+username+"&password=test"

        window.open(urlMobile, "Shanghai Beauty for Mobile",strWindowFeatures);
  }

  function launchPC(version){
        var username = document.getElementById('userId').value;
        var urlPC = "https://mobilewebserver9-mobiledgcqa.installprogram.eu/MobileWebGames/game/mgs/5_1_0?lobbyURL=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FLobby%2Fen%2FIslandParadise%2FGames%2FnewGames&moduleID=10025&clientID=50300&gameName=shanghaibeauty"+version+"&gameTitle=shanghaibeauty&LanguageCode=en&clientTypeID=40&casinoID=5007&lobbyName=IslandParadise&loginType=PlayerService&bankingURL=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FLobby%2Fen%2FIslandParadise%2FBanking&xmanEndPoints=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FXMan%2Fx.x&routerEndPoints=&disablePoweredBy=false&currencyFormat=&isPracticePlay=false&logoutURL=https%3A%2F%2Fmobilewebserver9-mobiledgcqa.installprogram.eu%2FLobby%2Fen%2FIslandParadise%2FLogoutisPracticePlay=false&username="+username+"&password=test"

        window.open(urlPC, "Shanghai Beauty for Mobile",strWindowFeatures);
  }

  function launchGame(){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var gameName = document.getElementById('gameName').value;
        var gameTitle = document.getElementById('gameTitle').value;
        var moduleId = document.getElementById('moduleId').value;
        var clientId = document.getElementById('clientId').value;
        var languageCode = document.getElementById('languageCode').value;
        var clientTypeId = document.getElementById('clientTypeId').value;
        var casinoId = document.getElementById('casinoId').value;
        var lobbyName = document.getElementById('lobbyName').value;
        var loginType = document.getElementById('loginType').value;
        var xmanEndPoints = document.getElementById('xmanEndPoints').value;
        var routerEndPoints = document.getElementById('routerEndPoints').value;
        var disablePoweredBy = document.getElementById('disablePoweredBy').value;
        var currencyFormat = document.getElementById('currencyFormat').value;
        var isPracticePlay = document.getElementById('isPracticePlay').value;
        var baseURL = document.getElementById('baseURL').value;
        var lobbyURL = document.getElementById('lobbyURL').value;
        var bankingURL = document.getElementById('bankingURL').value;
        var url = baseURL+'gameName='+gameName+'&gameTitle='+gameTitle +'&username='+username+'&password='+password+'&moduleID='+moduleId+'&clientID='+clientId+'&LanguageCode='+languageCode+'&clientTypeID='+clientTypeId+
                 '&casinoID='+casinoId+'&lobbyName='+lobbyName+'&loginType='+loginType+'&xmanEndPoints='+xmanEndPoints+'&routerEndPoints='+routerEndPoints+'&disablePoweredBy='+disablePoweredBy+
                 '&currencyFormat='+ currencyFormat+'&isPracticePlay='+isPracticePlay+'&lobbyURL='+lobbyURL+'&bankingURL='+bankingURL;
       //Test	
       //alert(url);

        window.open(url);
  }