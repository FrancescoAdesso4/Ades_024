import { Team } from "./team.models";

export class ServiceResponse{
    data:Team[];

    constructor(data : Team[]){
        this.data = data;
    }
}