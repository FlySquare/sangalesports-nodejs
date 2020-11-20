const { HLTV } = require('hltv');
const mysql = require('mysql');
const myHLTV = HLTV.createInstance({loadPage: (url) => axios.get(url)});
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sangal'
})
connection.connect();
HLTV.getTeam({id: 10333}).then(res => {
  var t_isim,t_logo,t_ulke,t_rank;
  var t_player1isim,t_player1foto,t_player2isim,t_player2foto,t_player3isim,t_player3foto,t_player4isim,t_player4foto,t_player5isim,t_player5foto;
  t_isim = res.name;
  t_logo = res.logo;
  t_ulke = res.location;
  t_rank = res.rank;

  var sqlSorgusu1 = `UPDATE team SET t_logo = '`+t_logo+`', t_ulke = '`+t_ulke+`', t_isim = '`+t_isim+`', t_rank = '`+t_rank+`' WHERE t_id = 1`;
    connection.query(sqlSorgusu1, function (error, results, fields) {
      if (error) throw error;
      console.log('Takım Bilgileri Güncellendi');
    });
  HLTV.getPlayer({id: res.players[0].id}).then(oyuncu1 => {
    t_player1foto = oyuncu1.name;
    t_player1isim = oyuncu1.image;
    var sqlSorgusu2 = `UPDATE team SET t_player1isim = '`+t_player1isim+`', t_player1foto = '`+t_player1foto+`' WHERE t_id = 1`;
    connection.query(sqlSorgusu2, function (error, results, fields) {
      if (error) throw error;
      console.log('Oyuncu 1 Güncellendi');
    });
 })
 HLTV.getPlayer({id: res.players[1].id}).then(oyuncu2 => {
  t_player2foto = oyuncu2.name;
  t_player2isim = oyuncu2.image;
  var sqlSorgusu3 = `UPDATE team SET t_player2isim = '`+t_player2isim+`', t_player2foto = '`+t_player2foto+`' WHERE t_id = 1`;
  connection.query(sqlSorgusu3, function (error, results, fields) {
    if (error) throw error;
    console.log('Oyuncu 2 Güncellendi');
  });
})
HLTV.getPlayer({id: res.players[2].id}).then(oyuncu3 => {
  t_player3foto = oyuncu3.name;
  t_player3isim = oyuncu3.image;
  var sqlSorgusu4 = `UPDATE team SET t_player3isim = '`+t_player3isim+`', t_player3foto = '`+t_player3foto+`' WHERE t_id = 1`;
  connection.query(sqlSorgusu4, function (error, results, fields) {
    if (error) throw error;
    console.log('Oyuncu 3 Güncellendi');
  });
})
HLTV.getPlayer({id: res.players[3].id}).then(oyuncu4 => {
  t_player4foto = oyuncu4.name;
  t_player4isim = oyuncu4.image;
  var sqlSorgusu5 = `UPDATE team SET t_player4isim = '`+t_player4isim+`', t_player4foto = '`+t_player4foto+`' WHERE t_id = 1`;
  connection.query(sqlSorgusu5, function (error, results, fields) {
    if (error) throw error;
    console.log('Oyuncu 4 Güncellendi');
  });
})
HLTV.getPlayer({id: res.players[4].id}).then(oyuncu5 => {
  t_player5foto = oyuncu5.name;
  t_player5isim = oyuncu5.image;
  var sqlSorgusu6 = `UPDATE team SET t_player5isim = '`+t_player5isim+`', t_player5foto = '`+t_player5foto+`' WHERE t_id = 1`;
  connection.query(sqlSorgusu6, function (error, results, fields) {
    if (error) throw error;
    console.log('Oyuncu 5 Güncellendi');
  });
})



  
  
});
