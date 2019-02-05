export class User {
    constructor(
      public name: string,
      public login: string,
      public avatar_url: string,
      public email: string,
      public location: string,
      public html_url: string,
      public followers: number,
      public following: number,
      public public_repository: number
    ) {}
  }