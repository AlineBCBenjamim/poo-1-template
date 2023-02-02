export class User{


 // ** Class. 
//Constructor é responsavel de criar um objeto.

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ){}

//getId - Pegar um id do user (Pegar o Id)
public getId():string{
    return this.id
}

//setId() - Método public seguro para alterar id do objeto(set: alterar)
// void significa vazio, não precisa de retorno, servem para apenas alterar o valor de um atributo de um objeto. Se quiser alterar algum valor usa o set.

public setId(value:string): void{
    this.id = value
}

public getName(): string{
    return this.name
}

public setName(value: string): void{
    this.name = value
}

public getEmail(): string{
    return this.email
}

public setEmail(value: string):void{
    this.email = value
}

public getPassword(): string{
    return this.password
}

public setPassword(value: string): void {
    this.password = value
}

public getCreatedAt(): string {
    return this.createdAt
}

public setCreatedAt(value: string): void {
    this.createdAt = value
}

}