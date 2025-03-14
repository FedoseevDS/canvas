export type Render = (params: RenderParams) => (() => void) | void;

type RenderParams = {
  canvas?: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  height?: number;
  width?: number;
};
