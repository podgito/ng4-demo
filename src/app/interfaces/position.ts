export class Position {
    name: string;
    value: number;
    adjustment: number;

    get final(): number{
        return this.value + this.adjustment;
    }
}
