const { HLTV } = require('hltv');
const myHLTV = HLTV.createInstance({loadPage: (url) => axios.get(url)});

HLTV.getTeam({id: 10333}).then(res => {
  var mac1id,mac1result,mac1team1oyuncu1,mac1team1oyuncu2,mac1team1oyuncu3,mac1team1oyuncu4,mac1team1oyuncu5,mac1team2oyuncu1,mac1team2oyuncu2,mac1team2oyuncu3,mac1team2oyuncu4,mac1team2oyuncu5,mac1winnerteam,mac1date,mac1format,mac1additonalinfo,mac1event,mac1maps;

  var mac2id,mac2result,mac2team1oyuncu1,mac2team1oyuncu2,mac2team1oyuncu3,mac2team1oyuncu4,mac2team1oyuncu5,mac2team2oyuncu1,mac2team2oyuncu2,mac2team2oyuncu3,mac2team2oyuncu4,mac2team2oyuncu5,mac2winnerteam,mac2date,mac2format,mac2additonalinfo,mac2event,mac2maps;

  mac1id = res.recentResults[0].matchID;
  mac1result = res.recentResults[0].result;


  HLTV.getMatch({id: macid2}).then((res2) => {
    console.log(res2);
  })


});

