import 'pixi.js-legacy';

import { View1 } from './view1';
import { View2 } from './view2';

const app = new PIXI.Application({
  width: 600,
  height: 600,
  backgroundColor: 0x000000
});

document.body.appendChild(app.view);

app.stage.addChild(new View1());
app.stage.addChild(new View2());
