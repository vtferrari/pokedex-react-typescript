import Pokemon from "../domain/Pokemon";

export default interface SayHelloUseCase {
    execute(user: Pokemon): Promise<Pokemon>;
}