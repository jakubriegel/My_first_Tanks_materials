namespace Arena {

    // class for map
    export class Arena{
        private _canvas: HTMLCanvasElement;
        get canvas(): HTMLCanvasElement { return this._canvas; }
        private context: CanvasRenderingContext2D;

        private static readonly tileNumber: number = 25; // 625

        public constructor(private height: number){
            this._canvas = document.createElement('canvas');
            this.canvas.width = height;
            this.canvas.height = height;
            this.canvas.style.margin = '0 auto';
            this.canvas.style.display = 'block'
            this.context = this.canvas.getContext('2d');
        };
    }
}