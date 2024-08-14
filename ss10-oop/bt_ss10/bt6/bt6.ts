class Song {
    public readonly id: number;
    private name: string;
    private length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }

    get nameValue(): string {
        return this.name;
    }

    set nameValue(value: string) {
        this.name = value;
    }

    get lengthValue(): number {
        return this.length;
    }

    set lengthValue(value: number) {
        this.length = value;
    }
}

let song = new Song(1, 'Âm thầm bên em :(((', 240);
console.log(`Tên bài hát: ${song.nameValue}`);
console.log(`Độ dài bài hát: ${song.lengthValue} giây`);
song.nameValue = 'Như anh đã thấy em';
song.lengthValue = 280;

console.log(`Tên bài hát sau khi thay đổi: ${song.nameValue}`);
console.log(`Độ dài bài hát sau khi thay đổi: ${song.lengthValue} giây`);
