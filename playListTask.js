function PlayList(){
    this.list = []
    this.songIdx = 0
}

function Song(title = "unknow sung name" , artist = "unknow artist"){
    this.name = title
    this.art = artist
}
PlayList.prototype.add = function(obj){
    this.list.push(obj)

}
PlayList.prototype.play = function(){
    
    return `${this.list[this.songIdx]["name"]} started to play`

}
PlayList.prototype.stop = function(){
    
    return `${this.list[this.songIdx]["name"]} stopped`

}
PlayList.prototype.next = function(){
    if(this.list.length - 1  === this.songIdx){
        this.songIdx = 0
        return `${this.list[this.list.length - 1]["name"]} stopped, ${this.list[this.songIdx]["name"]} started `
    }
    this.songIdx++
        return `${this.list[this.songIdx - 1]["name"]} stopped, ${this.list[this.songIdx]["name"]} started `

}

const playlist = new PlayList()
const jaded = new Song("Jaded", "Aerosmith")
const heyJude = new Song("Hey Jude", "The Beatles")

playlist.add(heyJude); 

playlist.add(jaded); 
 
console.log(playlist.play()) 
console.log(playlist.next()) 
console.log(playlist.next()) 
console.log(playlist.stop()) 
console.log(playlist.play()) 
