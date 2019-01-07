export { Repo }
class Repo{
    public RepoName:string
    public ForkCount:string
    public Description:string
    public RepoSize:string
    public DefaultBranch:string

    constructor(userRepo: any){
        this.RepoName = userRepo.name;
        this.ForkCount = userRepo.forks_count;
        this.Description = userRepo.description;
        this.RepoSize = userRepo.size;
        this.DefaultBranch = userRepo.default_branch;
    }
}