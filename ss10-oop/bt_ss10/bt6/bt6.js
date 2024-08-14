"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    get nameValue() {
        return this.name;
    }
    set nameValue(value) {
        this.name = value;
    }
    get lengthValue() {
        return this.length;
    }
    set lengthValue(value) {
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
