export class Team{
    public id : number;
    public abbreviazione : string;
    public city: string;
    public conference : string;
    public division : string;
    public full_name : string;
    public name : string

    constructor(id: number, abbreviazione : string , city: string, conference : string, division : string, full_name : string, name : string ) {
        this.id = id ;
        this.abbreviazione =abbreviazione;
        this.city =  city;
        this.conference = conference;
        this.division = division;
        this.full_name = full_name;
        this.name =name 
      }

}