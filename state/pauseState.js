import State from "./state.js";
import DrawingHelpers from '../utilites/drawingHelpers.js';

export default class PauseState extends State {
    constructor(previosState) {
        super({
            ' ': () =>  state = previosState
        });
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);      
 
        const [x, y] = [screenWidth / 2, screenHeight / 2];
        DrawingHelpers.fillText(ctx, `PAUSE`, x, y, '60px sans-serif', 'Grey');
        DrawingHelpers.fillText(ctx, `press Space to continue`, x, y + 70, '40px sans-serif', 'Grey');

    }
}