import State from "./state.js";
import GameState from "./gameState.js";

import DrawingHelpers from '../utilites/drawingHelpers.js';

export default class MenuState extends State {
    constructor() {
        super({
            'enter': () => state = new GameState()
        }); 
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);

        const [x, y] = [screenWidth / 2, screenHeight / 2]
        DrawingHelpers.fillText(ctx, `Super Snake`, x, y, '50px sans-serif', 'white')
        DrawingHelpers.fillText(ctx, `Press Enter to start`, x, y + 70, '20px sans-serif', 'white')


    }
}