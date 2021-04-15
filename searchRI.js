const axios = require('axios');
require('dotenv').config()

const headers = {
  'Host': 'web.11ri.com.br',
  'Connection': 'close',
  'Content-Length': '62',
  'Cache-Control': 'max-age=0',
  'sec-ch-ua': '\";Not A Brand\";v=\"99\", \"Chromium\";v=\"88\"',
  'sec-ch-ua-mobile': '?0',
  'Upgrade-Insecure-Requests': '1',
  'Origin': 'https://web.11ri.com.br',
  'Content-Type': 'application/x-www-form-urlencoded',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-User': '?1',
  'Sec-Fetch-Dest': 'document',
  'Referer': 'https://web.11ri.com.br/index.php?pG=X19jb25zdWx0YV90aXR1bG9zX2NhcnRvb24=',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cookie': '$PHPSESSID=lf59ol0o7tjubp249e7gh3rhc4; _ga=GA1.3.2536401.1618519906; _gid=GA1.3.1613477606.1618519906; trustedsite_visit=1; AdoptId=505ded8e-6502-4552-bf8c-e88a4ebccf79'
};
const dataString = `acao=consultar&Protocolo=${process.env.RI}&pesquisar.x=88&pesquisar.y=25`;

axios({
  method: 'POST',
  url: 'https://web.11ri.com.br/index.php?pG=X19jb25zdWx0YV90aXR1bG9zX2NhcnRvb24=',
  headers: headers,
  data: dataString
})
  .then(res => {
    if(res.data.includes('EM EXAME.')){
      console.log('OK')
    }
  })
  .catch(err=>{
    console.log(err)
  })
