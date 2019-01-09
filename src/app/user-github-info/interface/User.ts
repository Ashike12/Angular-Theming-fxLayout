export interface IUser{
    name : string, // login
    lastUpdatedDate: Date, //updated_at
    createdDate: Date, // created_at
    repoCount: number, // public_repos
    gistsCount: number //public_gists
}