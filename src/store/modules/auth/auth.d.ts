export interface IActions {
  commit: (a: string, b: ILoginInfo) => void;
}

export interface ILogin {
  username?: string;
  password?: string;
}

export interface ILoginInfo {
  id_token?: string; // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsbHJpZ2h0IiwiZW1haWwiOiJhbGxAcmlnaHQuY29tIiwic2NvcGUiOlsi0JDQtNC80LjQvdC40YHRgtGA0LDRgtC-0YAiLCLQntC_0LXRgNCw0YLQvtGAIiwi0JDQvdCw0LvQuNGC0LjQuiIsItCh0J7Qn9Ca0JAiLCJTZXJ2aWNlIiwiQWxlcnRnYXRlIiwiUmVwb3J0ZXIiLCJTaWduYWwiLCJDZW5zdXMiLCJNU0FELVN5bmMiLCJJb2Mtd2F0Y2hlciIsIkFueSJdLCJsZGFwIjpmYWxzZSwiaWF0IjoxNjM3MzE3NzYwLCJleHAiOjE2Mzc0MDQxNjB9.wiOwTgpJQnBD5cKlNnsxYieqOYppPMpN6Aio7NUM8ow';
  ldap?: boolean;
  scope?: Array<string>;
}

export interface IAuth {
  LOGIN_INFO: ILoginInfo;
}
