// main file of the application
// all dependencies are declared in index.html

// structure for positions
class Pos{
    constructor(public x: number, public y: number) {};

    public static calculateDistance(a: Pos, b: Pos): number {
        return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y));
    }
}

// main class
class Game{
    private holder: HTMLElement;

    public constructor(){
        this.holder = document.getElementById('content');
    }
}

// start the app
function start(): void {
    let game = new Game();
}

// initialize app
window.onload = start;