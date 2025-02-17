const AK = process.env.AK
const SK = process.env.SK

export type Token = {
  accessToken: string,
  expires: number
}

let token: Token = {
  accessToken: '',
  expires: Date.now()
};

export async function fetchToken(): Promise<Token> {
  const options = {
    'method': 'GET',
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  const url = `https://aip.baidubce.com/oauth/2.0/token?client_id=${AK}&client_secret=${SK}&grant_type=client_credentials`
  const res = await fetch(url, options);
  const jsonData = await res.json()
  console.log(jsonData?.message?.access_token)
  return {
    accessToken: jsonData?.access_token,
    expires: jsonData?.expires_in + Date.now()
  }
}

export async function getToken(): Promise<Token> {
  if (!token.accessToken || Date.now() > token.expires) {
    console.log('token过期, 重新请求token')
    token = await fetchToken()
  }
  return token
}

export async function ocr(params: string) {
  const access_token: Token = await getToken()
  const url = `https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=${access_token.accessToken}`;
  
  // 处理base64中前缀
  const base64 = params.replace(/^data:image\/\w+;base64,/, '')
  const formData = new URLSearchParams({
    'image': base64 
  })
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    body: formData
  })
  return res.json()
}