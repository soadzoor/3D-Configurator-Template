/**Based on https://github.com/mattdesl/three-vignette-background */
declare class VignetteBackground {
    private _mesh;
    constructor(opt: any);
    readonly mesh: THREE.Mesh;
}
/** This class is mainly for animating anything seamlessly and smoothly.
 *  If you modify the "end", end you keep calling "update", then start will get closer and closer to the value of "end"
 *  The higher the dampingFactor is, the faster the "animation" is. It should be between 0 and 1.*/
declare class Convergence {
    protected _originalStart: number;
    protected _originalEnd: number;
    protected _start: number;
    protected _end: number;
    protected _dampingFactor: number;
    constructor(start: number, end: number, dampingFactor?: number);
    increaseEndBy(value: number): void;
    decreaseEndBy(value: number): void;
    readonly start: number;
    readonly end: number;
    setEnd(value: number): void;
    reset(start?: number, end?: number): void;
    update: () => void;
}
declare class BoundedConvergence extends Convergence {
    private _min;
    private _max;
    constructor(start: number, end: number, min: number, max: number, dampingFactor?: number);
    readonly min: number;
    readonly max: number;
    increaseEndBy(value: number): void;
    decreaseEndBy(value: number): void;
    setEnd(value: number): void;
    reset(start?: number, end?: number, min?: number, max?: number, dampingFactor?: number): void;
}
/** This is a (kindof) Singleton class. The purpose of this is to handle some frequently used HTML/CSS manipulations */
declare module utils {
    class HTML {
        static addToClassList(elements: HTMLCollectionOf<Element>, className: string): void;
        static removeFromClassList(elements: HTMLCollectionOf<Element> | NodeListOf<Element>, className: string): void;
        static addListenerToHTMLElements(elements: HTMLCollectionOf<Element>, type: string, listener: () => any): void;
        static removeListenerFromHTMLElements(elements: HTMLCollectionOf<Element>, type: string, listener: () => any): void;
        static addStyleToHTMLElements(elements: HTMLCollectionOf<Element>, key: string, value: string): void;
        static clearElement(element: HTMLElement): void;
        static hideElement(element: HTMLElement): void;
        static showElement(element: HTMLElement, isHiddenByDefault?: boolean): void;
        static isElementChildOfElement(element: Element, parent: Element): boolean;
        static disableElement(element: Element): void;
        static enableElement(element: Element): void;
    }
}
declare class SceneLoader {
    private _sceneContainer;
    private _camera;
    private _renderer;
    private _scene;
    private _envMap;
    private _rimZenvo;
    private _rimDefault;
    private _rims;
    private _bodyMaterial;
    private _sideMaterial;
    private _defaultMetalness;
    private _percentage;
    private _isLoadFinished;
    constructor(scene: Scene);
    private initEnvMap;
    private initBackground;
    private loadScene;
    private onProgress;
    private onLoad;
    private initListeners;
    private addEventListener;
    update: () => void;
}
declare class Scene {
    private _canvas;
    private _scene;
    private _camera;
    private _controls;
    private _renderer;
    private _sceneLoader;
    private _container;
    constructor();
    private initLights;
    private initOrbitControls;
    private initMeshes;
    private initRenderer;
    readonly camera: THREE.PerspectiveCamera;
    readonly renderer: THREE.WebGLRenderer;
    readonly container: THREE.Object3D;
    readonly scene: THREE.Scene;
    readonly canvas: HTMLCanvasElement;
    private onWindowResize;
    private onContextLost;
    private update;
    private animate;
}
declare class Model {
    constructor();
}
declare class Main {
    static instance: Main;
    static getInstance(): Main;
    private _model;
    private _scene;
    constructor();
    readonly scene: Scene;
    readonly model: Model;
}
declare const main: Main;
