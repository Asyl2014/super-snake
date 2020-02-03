import State from './state.js'
import MenuState from './menuState.js'

import DrawingHelpers from '../utilites/drawingHelpers.js';

export default class GameOverState extends State {
    constructor() {
        super({
            'enter': () => state = new MenuState()
        }); 
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight)
        
        const [x, y] = [screenWidth / 2,screenHeight / 2]
        DrawingHelpers.fillText(ctx, 'GAME OVER', x, y, '60px sans-serif', 'red')
        DrawingHelpers.fillText(ctx, 'Press Enter to return Menu', x, y + 70, '20px sans-serif', 'white')
    }
}