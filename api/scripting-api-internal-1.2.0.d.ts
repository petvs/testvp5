/**
 *Collection of easing functions used in a `Tweener`.
 *
 *
 */
declare class Easing {
    static readonly easeInSine: (x: number) => number;
    static readonly easeOutSine: (x: number) => number;
    static readonly easeInOutSine: (x: number) => number;
    static readonly easeInQuad: (x: number) => number;
    static readonly easeOutQuad: (x: number) => number;
    static readonly easeInOutQuad: (x: number) => number;
    static readonly easeInCubic: (x: number) => number;
    static readonly easeOutCubic: (x: number) => number;
    static readonly easeInOutCubic: (x: number) => number;
    static readonly easeInQuart: (x: number) => number;
    static readonly easeOutQuart: (x: number) => number;
    static readonly easeInOutQuart: (x: number) => number;
    static readonly easeInQuint: (x: number) => number;
    static readonly easeOutQuint: (x: number) => number;
    static readonly easeInOutQuint: (x: number) => number;
    static readonly easeInExpo: (x: number) => number;
    static readonly easeOutExpo: (x: number) => number;
    static readonly easeInOutExpo: (x: number) => number;
    static readonly easeInBack: (x: number) => number;
    static readonly easeOutBack: (x: number) => number;
    static readonly easeInOutBack: (x: number) => number;
    static readonly easeInCirc: (x: number) => number;
    static readonly easeOutCirc: (x: number) => number;
    static readonly easeInOutCirc: (x: number) => number;
    static readonly easeInElastic: (x: number) => number;
    static readonly easeOutElastic: (x: number) => number;
    static readonly easeInOutElastic: (x: number) => number;
    static readonly easeInBounce: (x: number) => number;
    static readonly easeOutBounce: (x: number) => number;
    static readonly easeInOutBounce: (x: number) => number;
}
/**
 *The `TextItem` is used to display text in a `Scene`.
 *
 *  For more control over the displayed text, formatting and styling use `GUIItem`.
 */
declare class TextItem extends DrawingItem {
    /**
     *Defines the displayed text of this `TextItem`.
     *
     *@deprecated
     */
    setText(text: any): void;
    /**
     *Defines the displayed text of this `TextItem`.
     */
    text: any;
    /**
     *Defines the font size of this `TextItem`.
     *
     * The displayed font is auto-fitted to the `size` of this item.
     */
    fontSize: number;
    /**
     *Defines the font size of this `TextItem`.
     *
     * The displayed font is auto-fitted to the `size` of this item.
     *
     *@deprecated
     */
    setFontSize(value: number): void;
    buildText3DItem(): Text3DItem;
}
declare class HemiEllipsoid extends EllipsoidItemBase {
}
declare class FlexWallItem extends VerticesItem {
    setWidth(w: number): void;
}
declare namespace Activity {
    /** @deprecated */ function showCodeEditor(show: boolean): void;
    /** @deprecated */ function showCoBlocksEditor(show: boolean): void;
    function onPlayClicked(handler: (t: Activity.__PlayClickedEvent) => void): Disposable;
    function onPlayModeStarted(initFunction: () => void): Disposable;
    function exportActivity(): void;
    function acceptActivity(): void;
    class __PlayClickedEvent {
        deferPlayMode(): void;
        startPlayMode(): void;
        cancelPlayMode(): void;
    }
    interface SharingRequest extends Activity.SharingOptions {
        readonly activeSceneId: string;
        /**
         *name of this space displayed as title.
         */
        readonly name: string;
        /**
         *description displayed in the space preview page.
         */
        readonly description: string;
        /**
         ***my360 categories**
         * * `none`
         *
         * **CoSpaces Edu categories**
         * * `makerspace`
         * * `languages`
         * * `socialsciences`
         * * `stem`
         * * `none`_(unlisted)_
         *
         * category name used in gallery.
         */
        readonly category: "stem" | "social_sciences" | "languages" | "maker_space" | "none";
    }
    namespace Sharing {
        /**
         *Opens the share page of this `Space`.
         *
         * _Requires this `Space` to be made public to access._
         */
        function openSharePage(): void;
        /**
         *Opens the share link page of this `Space`.
         *
         * _Requires this `Space` to be published to take effect._
         */
        function openPublishedSpace(): void;
        /**
         *Publishes this `Activity`.
         *
         * In `Activities` published with this, play mode is entered directly.
         *
         * If the `Activity` is already published, it is re-published with latest `options`.
         *
         *@param request space sharing request.
         *
         *@return Promise which resolves to the URL of the published space.
         */
        function publishAsPlaySpace(request: Activity.SharingRequest): Promise<string>;
        /**
         *Removes this `Space` from public gallery and direct link.
         *
         * _Users attempting to open an unpublished space are shown a warning and can not enter._
         */
        function unpublish(): void;
        /**
         *@return Promise that resolves to options with which this `activity` was published.
         */
        function getSharingOptions(): Promise<Activity.SharingOptions>;
        /**
         *Returns type of this `activity`
         */
        const type: "source" | "published" | "accepted" | "play";
    }
    /**
     *Defines sharing options for this space.
     */
    interface SharingOptions {
        /**
         *name of this space displayed as title.
         */
        readonly name: string;
        /**
         *description displayed in the space preview page.
         */
        readonly description: string;
        /**
         ***my360 categories**
         * * `none`
         *
         * **CoSpaces Edu categories**
         * * `makerspace`
         * * `languages`
         * * `socialsciences`
         * * `stem`
         * * `none`_(unlisted)_
         *
         * category name used in gallery.
         */
        readonly category: "stem" | "social_sciences" | "languages" | "maker_space" | "none";
    }
}
interface TextToSpeech extends Disposable {
    say(utterance: Utterance, callback: (eventType: "stop" | "cancel" | "error") => void): void;
    say(utterance: Utterance): void;
    getVoices(): Array<Voice>;
    stop(): void;
    createUtterance(text: string): Utterance;
    /**
     *Disposes this object, effectively turning this into an unmanaged resource.
     */
    dispose(): void;
}
declare class StairsItem extends VerticesItem {
}
declare namespace Assistant {
    function listen(provider: string, onUtterance: (data: Object) => void): Disposable;
    function listen(onUtterance: (data: Object) => void): Disposable;
}
declare class VerticesItem extends AnisotropicPhongItem {
    buildExtrudeItem(): ExtrudeItem;
    buildExtrudeItemForTm(transform: Transform): ExtrudeItem;
    getVertex(index: number): VectorItem;
}
/**
 *Defines your project as a collection of scenes.
 * Serves as the main directory for uploaded assets and scripts.
 *
 * Use `Data.assets` to access uploaded space assets.
 *
 * `Space` methods allow you to
 * * Navigate through `Scenes`
 * * Create `Space` properties
 *
 *See `Scene`
 *
 *See `Application`
 */
declare namespace Space {
    /**
     *Sets active scene to `sceneIndex`.
     *
     *@param sceneIndex
     */
    function goToScene(sceneIndex: number): void;
    /**
     *Sets active `Scene` to next index from current `Scene`.
     */
    function goToNextScene(): void;
    /**
     *Sets active `Scene` to previous index from current `Scene`.
     */
    function goToPreviousScene(): void;
    /**
     *Returns list of `Scenes` in this `Space`.
     *
     *@return `Scene` list of this `Space`.
     */
    const scenes: ObservableList<SceneInfo>;
    /**
     *Creates new `Scene` with `options` and adds it to this `Space`.
     *
     *@param options initial options of the created `Scene`.
     *
     *@return the created `Scene`.
     */
    function createScene(options: {
        readonly name: string;
        readonly type?: "3D" | "360" | "MergeCube" | "type_not_decided";
        readonly index?: number;
        readonly defaultSkyBox?: string;
    }): SceneInfo;
    /**
     *@deprecated Use `Application.quit` instead.
     */
    function finishPlayMode(): void;
    /**
     *@deprecated Use `Application.quit` instead.
     */
    function finishPlayMode(imageId: string): void;
    /**
     *@deprecated Use `GUI.HUD.sceneNavigationVisible` property instead.
     */
    function showSceneNavigation(show: boolean): void;
    /**
     *@deprecated Use `Debug.log` instead.
     */
    function log(s: string): void;
    /**
     *### Only for internal development
     *
     * The synchronized model of this `Space` provided by DX Engine. Allows setting custom synced properties on this item to be used in persistent `Activities`.
     *
     *@return Model of this `Space`.
     *
     *See `Model`
     */
    const model: Model;
    /**
     *Sets a `string` property to this `Space`.
     *
     *@param key property name.
     *
     *@param value property value.
     */
    function setProperty(key: string, value: string): void;
    /**
     *Gets a `string` property from this `Space`.
     *
     *@param key name of property to find
     *
     *@return custom property. Returns `null` if no property is found.
     */
    function getProperty(key: string): string;
    /**
     *Sets a **global** `string` property to this `Space`.
     * Global properties can only be set from the `Play` `ScriptMode`
     * and are stored in both `Play` and `Activity` `ScriptMode`.
     *
     *@param key property name.
     *
     *@param value property value.
     */
    function setGlobalProperty(key: string, value: string): void;
    /**
     *### For internal development only
     *
     * Toggles synchronization of scene changes for multiple users in a persistent `Activity`.
     */
    let synchronizedNavigation: boolean;
    function copyScript(scriptName: string, fromId: string, toId: string): void;
    /**
     *@return name of this `Space`.
     */
    const name: string;
}
/**
 *Represents a rectangle defined by `X` and `Y` position, `width` and `height`.
 *
 * **Note:** The GUI coordinate increases `X` to the right, and `Y` downwards.
 *
 * ![](https://cdn.delightex.com/uploads/tlFN48Pk8DKS4SequGLkMHSN5ySzY5oUYgkulN30M9X)
 */
declare class Rect {
    constructor(x: number, y: number, width: number, height: number);
    constructor(position: Vector2, size: Vector2);
    /**
     *The `X` coordinate of this `Rect`.
     */
    readonly x: number;
    /**
     *The `Y` coordinate of this `Rect`.
     *
     * **Note**: Y increases downwards.
     */
    readonly y: number;
    /**
     *The `width` of this `Rect` starting from `X`.
     */
    readonly width: number;
    /**
     *The `height` of this `Rect` starting from `Y`.
     *
     * **Note**: Y increases downwards.
     */
    readonly height: number;
    /**
     *Returns the position of this `Rect` as `Vector2`.
     */
    readonly position: Vector2;
    /**
     *Returns the size of this `Rect` as `Vector2`.
     */
    readonly size: Vector2;
    /**
     *Returns the center of this `Rect` as `Vector2`.
     */
    readonly center: Vector2;
}
declare class Vertices2DItem extends AnisotropicPhongItem {
    addVertex(x: number, y: number): void;
    insertVertex(x: number, y: number, index: number): void;
    setSpline(b: boolean): void;
    setCircle(b: boolean): void;
    setType(ts_type: number): void;
    fixPosition(): void;
}
declare class JointConstraint extends Constraint {
    setClampingAngles(min: number, max: number): void;
    setAngularFriction(f: number): void;
    angularFriction: number;
    localAnchor1: Vector3;
    localAnchor2: Vector3;
    setLocalAnchor1(x: number, y: number, z: number): void;
    setLocalAnchor2(x: number, y: number, z: number): void;
    getLocalAnchor1(): Vector3;
    getLocalAnchor2(): Vector3;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
declare class GameItem extends BaseItem {
    readonly inverseMasking: {
        enabled: boolean;
        isMask: boolean;
        layer: number;
    };
}
declare class Capsule extends AnisotropicItem {
    setSize(radius: number, height: number): void;
    radius: number;
    /** @deprecated */ setRadius(r: number): void;
    height: number;
    /** @deprecated */ setHeight(h: number): void;
}
/**
 *`Sound` that is played in DX Engine.
 *
 * All sounds require a sound asset `id` and need to be fully _loaded_ before they can be played.
 */
declare class Sound implements Disposable {
    onPlayRejected(handler: () => void): void;
    /**
     *Defines the _local_ playback speed of this `Sound`.
     *
     * **Note:** Internet browsers have only limited speed modifier support. Recommended range of `speed` is `[0.25-5]`. iOS browsers do **not** support playback speed.
     *
     *See `Sound.playSpeedIndependent`
     *
     *See `Sound.playSpeedMultiplier`
     */
    playSpeed: number;
    /**
     *Toggles use of local playback speed modifier of this `Sound`.
     *
     * If `true`, this `Sound` uses _local_ playback speed.
     */
    playSpeedIndependent: boolean;
    /**
     *Plays this `Sound`.
     *
     * If the sound is not fully loaded, the playback will delay until loading is complete.
     */
    play(): void;
    /**
     *Plays this `Sound`.
     *
     * If the sound is not fully loaded, the playback will delay until loading is complete.
     *
     *@param onFinish callback function when the `Sound` finishes.
     */
    play(onFinish: () => void): void;
    /**
     *Plays this `Sound`.
     *
     * If the sound is not fully loaded, the playback will delay until loading is complete.
     *
     *@param looping if `true`, this `Sound` loops indefinitely.
     */
    play(looping: boolean): void;
    /**
     *Stops playback of this `Sound`.
     *
     * The sound starts from the beginning with next `play` call.
     */
    stop(): void;
    /**
     *Pauses playback of this `Sound`.
     *
     * The sound resumes at the same track position with next `play` call.
     */
    pause(): void;
    /**
     *Resumes playing this `Sound` if it was paused.
     *
     *@deprecated
     */
    resume(): void;
    /**
     *Defines the normalized `volume` of this `Sound`. Volume value is clamped to range `[0,1]`
     *
     *@deprecated
     */
    setVolume(volume: number): void;
    /**
     *Defines the normalized `volume` of this `Sound`. Volume value is clamped to range `[0,1]`
     */
    volume: number;
    /**
     *Defines the track position of this `Sound`.
     */
    currentPosition: number;
    /**
     *Returns duration of this `Sound` in seconds.
     */
    readonly duration: number;
    /**
     *Disposes this object, effectively turning this into an unmanaged resource.
     */
    dispose(): void;
    /**
     *Defines the playback speed of all sounds played in the `Scene`.
     *
     * **Note:** Internet browsers have only limited speed modifier support. Recommended range of `speed` is `[0.25-5]`. iOS browsers do **not** support playback speed.
     *
     *@param speed playback speed
     */
    static playSpeedMultiplier: number;
    /**
     *Loads a sound via the provided sound `id`.
     *
     *@param id sound asset id.
     *
     *@return loaded `Sound`.
     */
    static load(id: string): Sound;
    /**
     *Loads a sound via the provided sound `id`.
     *
     *@param id sound asset id.
     *
     *@param callback triggers once the `Sound` is fully loaded.
     *
     *@return loaded `Sound`.
     */
    static load(id: string, callback: (t: Sound) => void): Sound;
    /**
     *Stops all sounds by their sound asset `id`.
     *
     *@param soundIds array of sound asset ids.
     */
    static stopById(soundIds: Array<string>): void;
    /**
     *Stops a sound by its sound asset `id`.
     *
     *@param soundId array of sound asset ids.
     */
    static stopById(soundId: string): void;
    /**
     *Stops all sounds that are currently playing.
     */
    static stopAll(): void;
    /**
     *### For internal development only
     *
     * Creates speech synthesis.
     */
    static createSpeechSynthesis(handler: (t: TextToSpeech) => void): void;
    /**
     *Plays a _oneshot_ sound based on the provided, loaded `Sound`.
     *
     * Oneshot sounds can be played multiple times from the same `Sound` source and are useful for
     * repeating sound effects like _rain_ and _foot steps_.
     *
     *@param sound sound to play once.
     *
     *@param volume normalized volume at which to play the sound.
     */
    static playOneShot(sound: Sound, volume: number): void;
}
declare namespace DataSource {
    function connect(endpoint: string): Promise<Connection>;
}
declare namespace ImmersiveReader {
    function launchAsync(content: {
        readonly title?: string;
        readonly chunks: Array<{
            readonly content: string;
            readonly lang?: string;
        }>;
    }): Promise<void>;
    function launchAsync(content: {
        readonly title?: string;
        readonly chunks: Array<{
            readonly content: string;
            readonly lang?: string;
        }>;
    }, options: {
        readonly timeout?: number;
        readonly onExit?: () => void;
    }): Promise<void>;
}
declare namespace AR {
    function getMarker(name: string): Marker;
    function isMarkerTracked(name: string): boolean;
    let sceneRotation: number;
    let sceneScale: number;
    let markerBased: boolean;
    let mode: "none" | "ground_plane" | "multipeer" | "merge_cube_surface" | "merge_cube" | "markers" | "face_tracking" | "body_tracking";
    const mergeCube: MergeCubeItem;
    const faceAnchor: AR.FaceAnchor;
    const bodyAnchor: AR.BodyAnchor;
    const participants: Array<AR.Anchor>;
    const planes: Array<AR.PlaneAnchor>;
    const peerCount: number;
    const trackedFaces: Array<AR.FaceAnchor>;
    function addDetectedObject(name: string, fileId: string): void;
    function addDetectedImage(name: string, fileId: string, physicalWidth: number): void;
    let faceTrackingEnabled: boolean;
    let collaborationEnabled: boolean;
    /**
     *Toggles the _scene scaling transition_ once user places a `Scene` on a tracked surface.
     *
     * **Note**: Transition only plays for the _surface tracking_ AR mode
     */
    let transitionEnabled: boolean;
    type RotationDirection = "up" | "down" | "left" | "right";
    class Anchor {
        readonly transform: ReadonlyTransform;
    }
    class FaceAnchor extends AR.Anchor {
        readonly leftEyeTransform: ReadonlyTransform;
        readonly rightEyeTransform: ReadonlyTransform;
        getBlendShape(location: AR.FaceBlendShapeLocation): number;
    }
    type MergeCubeSide = "Right" | "Left" | "Front" | "Back" | "Top" | "Bottom";
    type FaceBlendShapeLocation = "eye_blink_left" | "eye_look_down_left" | "eye_wide_left" | "eye_look_in_left" | "eye_look_out_left" | "eye_look_up_left" | "eye_squint_left" | "eye_blink_right" | "eye_look_down_right" | "eye_wide_right" | "eye_look_in_right" | "eye_look_out_right" | "eye_look_up_right" | "eye_squint_right" | "brow_inner_up" | "brow_inner_up_left" | "brow_inner_up_right" | "brow_down_left" | "brow_down_right" | "nose_sneer_left" | "nose_sneer_right" | "cheek_puff" | "jaw_open" | "jaw_forward" | "jaw_left" | "jaw_right" | "tongue_out" | "mouth_close" | "mouth_smile_left" | "mouth_smile_right";
    class BodyAnchor extends AR.Anchor {
        getJointTransform(jointName: "root" | "hips_joint" | "left_up_leg_joint" | "left_leg_joint" | "left_foot_joint" | "left_toes_joint" | "left_toes_end_joint" | "right_up_leg_joint" | "right_leg_joint" | "right_foot_joint" | "right_toes_joint" | "right_toes_end_joint" | "spine_1_joint" | "spine_2_joint" | "spine_3_joint" | "spine_4_joint" | "spine_5_joint" | "spine_6_joint" | "spine_7_joint" | "neck_1_joint" | "neck_2_joint" | "neck_3_joint" | "neck_4_joint" | "head_joint" | "jaw_joint" | "chin_joint" | "nose_joint" | "right_eye_joint" | "right_eye_upper_lid_joint" | "right_eye_lower_lid_joint" | "right_eyeball_joint" | "left_eye_joint" | "left_eye_upper_lid_joint" | "left_eye_lower_lid_joint" | "left_eyeball_joint" | "right_shoulder_1_joint" | "right_arm_joint" | "right_forearm_joint" | "right_hand_joint" | "right_hand_thumb_start_joint" | "right_hand_thumb_1_joint" | "right_hand_thumb_2_joint" | "right_hand_thumb_end_joint" | "right_hand_index_start_joint" | "right_hand_index_1_joint" | "right_hand_index_2_joint" | "right_hand_index_3_joint" | "right_hand_index_end_joint" | "right_hand_mid_start_joint" | "right_hand_mid_1_joint" | "right_hand_mid_2_joint" | "right_hand_mid_3_joint" | "right_hand_mid_end_joint" | "right_hand_ring_start_joint" | "right_hand_ring_1_joint" | "right_hand_ring_2_joint" | "right_hand_ring_3_joint" | "right_hand_ring_end_joint" | "right_hand_pinky_start_joint" | "right_hand_pinky_1_joint" | "right_hand_pinky_2_joint" | "right_hand_pinky_3_joint" | "right_hand_pinky_end_joint" | "left_shoulder_1_joint" | "left_arm_joint" | "left_forearm_joint" | "left_hand_joint" | "left_hand_thumb_start_joint" | "left_hand_thumb_1_joint" | "left_hand_thumb_2_joint" | "left_hand_thumb_end_joint" | "left_hand_index_start_joint" | "left_hand_index_1_joint" | "left_hand_index_2_joint" | "left_hand_index_3_joint" | "left_hand_index_end_joint" | "left_hand_mid_start_joint" | "left_hand_mid_1_joint" | "left_hand_mid_2_joint" | "left_hand_mid_3_joint" | "left_hand_mid_end_joint" | "left_hand_ring_start_joint" | "left_hand_ring_1_joint" | "left_hand_ring_2_joint" | "left_hand_ring_3_joint" | "left_hand_ring_end_joint" | "left_hand_pinky_start_joint" | "left_hand_pinky_1_joint" | "left_hand_pinky_2_joint" | "left_hand_pinky_3_joint" | "left_hand_pinky_end_joint"): ReadonlyTransform;
        attachedItem: AnimatedItem;
        startRecord(): void;
        finishRecord(name: string, handler: (t: string) => void): void;
    }
    class PlaneAnchor extends AR.Anchor {
        readonly classification: "none" | "wall" | "floor" | "ceiling" | "table" | "seat" | "window" | "door";
        readonly orientation: "horizontal" | "vertical";
        readonly size: Vector2;
    }
}
/**
 *Class for slot related methods and properties.
 *
 * Slots are helper-objects which allow you to attach items to.
 * Attached items move with the slot and are treated as _child_ of the item they are attached to.
 *
 * By default, all items have a `"Top"` and `"Bottom"` slot.
 *
 *  To set up custom slots for your items please get in touch with Delightex support.
 *
 *
 */
declare class Slot {
    /**
     *Moves this `Slot` to another one.
     * The `owner` of this `Slot` assumes rotation of the `target` but is **not parented**.
     *
     * **Example**
     * `
     * ```
     * //Moves itemA to the top of itemB.
     * //itemA is not parented
     * let itemA = Scene.getItem('itemA')
     * let itemB = Scene.getItem('itemB')
     * let itemASlot = itemA.getSlot('Top')
     * let itemBSlot = itemA.getSlot('Bottom')
     *
     * itemASlot.adjustTo(itemBSlot)
     * ```
     * `
     *
     *@param target the target `Slot` this `Slot` should be moved to.
     */
    adjustTo(target: Slot): boolean;
    glueTo(target: Slot): void;
    /**
     *Attaches this `Slot` to another one.
     * The `owner` of this `Slot` assumes rotation of the `target` and is **parented**.
     *
     * **Example**
     * `
     * ```
     * //Attaches and parents itemA to itemB via their slots
     * let itemA = Scene.getItem('itemA')
     * let itemB = Scene.getItem('itemB')
     * let itemASlot = itemA.getSlot('Top')
     * let itemBSlot = itemA.getSlot('Bottom')
     *
     * itemASlot.attachTo(itemBSlot)
     * ```
     * `
     *
     *@param target the target `Slot` this `Slot` should be attached to.
     */
    attachTo(target: Slot): void;
    /**
     *@return the owner item of this `Slot`.
     */
    readonly owner: BaseItem;
    /**
     *@return the name of this `Slot`.
     */
    readonly name: string;
    /**
     *@return the `ReadonlyTransform` of this `Slot.`
     */
    readonly transform: ReadonlyTransform;
    /**
     *@return the relative `ReadonlyTransform` of this `Slot`.
     */
    readonly relativeTransform: ReadonlyTransform;
}
declare class Group extends BaseItem {
    setOrientationFrom(obj: BaseItem): void;
    ungroup(): void;
    setPivot(obj: BaseItem, slot: string): void;
}
declare class LibraryCategory {
    readonly name: string;
    readonly subCategories: Array<LibrarySubCategory>;
    getSubCategory(subCategoryName: string): LibrarySubCategory;
}
declare class ChartItem extends UnitItem {
    addCubicPoly2D(c0: number, v0: number, a0: number, w0: number, c1: number, v1: number, a1: number, w1: number): void;
    addCubicPoly(c: number, v: number, a: number, w: number, x0: number, x1: number): void;
    attachFunction(f: (x: number) => number, div: number): PathItem;
    attachFunction(fx: (x: number) => number, fy: (x: number) => number, fz: (x: number) => number, t0: number, t1: number, div: number): PathItem;
    attachFunction(fx: (x: number) => number, fy: (x: number) => number, fz: (x: number) => number, t0: number, t1: number, div: number, spline: boolean): PathItem;
    setThickness(t: number): void;
}
/**
 *Provides interpolation functionality for various values and easing types.
 *
 */
declare class Tweener {
    /**
     *Defines how many `iterations` this `Tweener` should perform.
     *
     * Setting this value to `0` creates an infinite loop.
     *
     *@param iterations amount of tweening iterations.
     */
    setIterations(iterations: number): Tweener;
    /**
     *Defines the `loopType` of this `Tweener`
     *
     *@param lType type to use.
     */
    setLoop(lType: "restart" | "yo_yo" | "additive"): Tweener;
    /**
     *Pauses this `Tweener`.
     */
    pause(): void;
    /**
     *Creates a handler that triggers when this `Tweener` completes.
     *
     * **Note:** This handler is disposed when a new handler is defined. A `Tweener` with `iterations = 0` does not finish.
     *
     *@param callback function to call when `Tweener` completes.
     */
    onFinish(callback: () => void): void;
    /**
     *Defines an `easingFunction` for this `Tweener`.
     *
     * [Easing functions](https://easings.net/en) allow you to control interpolation behavior during the duration of a tween.
     *
     * You can pass pre-defined templates from `Easing` as _easingFunction_.
     *
     * **Example**
     * `
     * ```
     * //Applies the "easeInOutQuint" easing template to this Tweener
     * myTweener.setEase(Easing.easeInOutQuint)
     * ```
     * `
     *
     *@param floatFunction function to use for interpolation of values.
     */
    setEase(floatFunction: (x: number) => number): Tweener;
    setTimeScale(scale: number): Tweener;
    /**
     *Stops this `Tweener`.
     *
     * `Tweener` starts from the beginning with next `play` call.
     */
    stop(): void;
    /**
     *Plays this `Tweener`.
     */
    play(): void;
    /**
     *@return `true` if `Tweener` has active transition.
     */
    readonly playing: boolean;
    readonly paused: boolean;
    readonly stopped: boolean;
    /**
     *Creates a custom `Tweener`. For shorthand definitions, use `BaseItem.transition`.
     *
     * **Example**
     * `
     * ```
     * //Creates a tween between two Vector3 values over 3 seconds
     * let startPoint = Vector3.zero
     * let endPoint = new Vector3(0,0,3)
     * let duration = 3
     *
     * Tweener.tweenTo(
     *    Tweenables.vector3,
     *    val => { Debug.log(`Remaining distance is ${val.dist(endPoint)}`)},
     *    startPoint,
     *    endPoint,
     *    duration
     *  )
     * ```
     * `
     *
     *@param tweenable Defines the value interpolation function. Use `Tweenables` for pre-defined values.
     *
     *@param setter Setter function to call every frame during the tween.
     *
     *@param startValue Start value of this `Tweener`.
     *
     *@param endValue End value of this `Tweener`.
     *
     *@param duration Duration of this `Tweener`.
     *
     *@return created `Tweener`.
     */
    static tweenTo<T>(tweenable: (a: T, b: T, v: number) => T, setter: (t: T) => void, startValue: T, endValue: T, duration: number): Tweener;
    /**
     *Creates a custom `Tweener`. For shorthand definitions, use `BaseItem.transition`.
     *
     * **Example**
     * `
     * ```
     * //Creates a tween between two Vector3 values over 3 seconds
     * let startPoint = Vector3.zero
     * let endPoint = new Vector3(0,0,3)
     * let duration = 3
     *
     * Tweener.tweenTo(
     *    val => { Debug.log(`Remaining distance is ${val.dist(endPoint)}`)},
     *    startPoint,
     *    endPoint,
     *    duration
     *  )
     * ```
     * `
     *
     *@param setter Function to call every frame during the tween. Contains interpolated value.
     *
     *@param startValue Start value of this `Tweener`.
     *
     *@param endValue End value of this `Tweener`.
     *
     *@param duration Duration of this `Tweener`.
     *
     *@return created `Tweener`.
     */
    static tweenTo(setter: (t: Vector3) => void, startValue: Vector3, endValue: Vector3, duration: number): Tweener;
    /**
     *Creates a custom `Tweener`. For shorthand definitions, use `BaseItem.transition`.
     *
     *@param setter Function to call every frame during the tween. Contains interpolated value.
     *
     *@param startValue Start value of this `Tweener`.
     *
     *@param endValue End value of this `Tweener`.
     *
     *@param duration Duration of this `Tweener`.
     *
     *@return created `Tweener`.
     */
    static tweenTo(setter: (t: number) => void, startValue: number, endValue: number, duration: number): Tweener;
    /**
     *Creates a custom `Tweener`. For shorthand definitions, use `BaseItem.transition`.
     *
     *@param setter Function to call every frame during the tween. Contains interpolated value.
     *
     *@param startValue Start value of this `Tweener`.
     *
     *@param endValue End value of this `Tweener`.
     *
     *@param duration Duration of this `Tweener`.
     *
     *@return created `Tweener`.
     */
    static tweenTo(setter: (t: Color) => void, startValue: Color, endValue: Color, duration: number): Tweener;
    /**
     *Creates a custom `Tweener`. For shorthand definitions, use `BaseItem.transition`.
     *
     *@param setter Function to call every frame during the tween. Contains interpolated value.
     *
     *@param startValue Start value of this `Tweener`.
     *
     *@param endValue End value of this `Tweener`.
     *
     *@param duration Duration of this `Tweener`.
     *
     *@return created `Tweener`.
     */
    static tweenTo(setter: (t: Vector2) => void, startValue: Vector2, endValue: Vector2, duration: number): Tweener;
    /**
     *Creates a custom `Tweener`. For shorthand definitions, use `BaseItem.transition`.
     *
     *@param setter Function to call every frame during the tween. Contains interpolated value.
     *
     *@param startValue Start value of this `Tweener`.
     *
     *@param endValue End value of this `Tweener`.
     *
     *@param duration Duration of this `Tweener`.
     *
     *@return created `Tweener`.
     */
    static tweenTo(setter: (t: Quat) => void, startValue: Quat, endValue: Quat, duration: number): Tweener;
}
declare class LibrarySubCategory {
    readonly name: string;
    readonly items: Array<LibraryItem>;
}
/**
 *Namespace for raycast related method and properties.
 *
 *
 */
declare namespace RayCast {
    /**
     *Casts a ray from `origin` towards `direction`. The ray length is infinite.
     *
     * If the ray hits an item it returns a `RayCast.Result`, otherwise `null`.
     *
     * **Example**
     * `
     * ```
     * //Casts a ray from the camera position towards the camera direction every frame
     * Time.scheduleRepeating(() => {
     *     let rayCastHit = RayCast.cast(Camera.transform.position, Camera.transform.forward)
     *
     *     if (rayCastHit) {
     *         Debug.log(`Ray hit item: ${rayCastHit.item.name}`)
     *     } else {
     *         Debug.log("Ray hit no item.")
     *     }
     * })
     * ```
     * `
     *
     *@param origin starting point of the ray
     *
     *@param direction direction of the ray
     *
     *@return hit result. Returns `null` when no item is hit.
     */
    function cast(origin: Vector3, direction: Vector3): RayCast.Result;
    /**
     *Adds an `item` to the raycast filter.
     *
     * Items added to the filter will not be _traceable_.
     *
     *@param item item to add to the filter.
     */
    function addToFilter(item: BaseItem): void;
    /**
     *Removes an `item` from the raycast filter.
     *
     *@param item item to remove from the filter.
     */
    function removeFromFilter(item: BaseItem): void;
    function shapeCast(item1: BaseItem, direction1: Vector3, item2: BaseItem, direction2: Vector3): number;
    /**
     *The result of a `RayCast.cast` operation.
     */
    class Result {
        /**
         *Returns `item` hit by the ray.
         */
        readonly item: BaseItem;
        /**
         *Returns the distance between the ray `origin` and hit `point`.
         */
        readonly distance: number;
        /**
         *Returns the precise ray hit `point` in world space.
         */
        readonly point: Vector3;
    }
}
declare class Connection {
    /** @deprecated */ listModelIds(): Promise<Array<string>>;
    createModel(): Promise<string>;
    copyModel(modelId: string): Promise<string>;
    deleteModel(modelId: string): Promise<void>;
    loadModel(modelId: string): Promise<void>;
    unloadModel(): void;
    getValue(key: string): Promise<string>;
    setValue(key: string, value: string): Promise<void>;
    subscribe(key: string, handler: (t: string) => void): Disposable;
}
declare class PointLightItem extends LightItem {
    radius: number;
}
/**
 *Represents 3D points and vectors.
 *
 * Use this class to pass positions and directions to item transforms and perform vector operations.
 *
 * **Note**: By default, DX engine uses `Z` as _"up"_.
 */
declare class Vector3 {
    constructor(x: number, y: number, z: number);
    /**
     *Calculates the cross product of this vector and `other`
     *
     * The cross product of two vectors results in a third vector which is perpendicular to the two input vectors.
     * The result's magnitude is equal to the magnitudes of the two inputs multiplied together and then multiplied
     * by the sine of the angle between the inputs. You can determine the direction of the result vector using the "left hand rule".
     *
     *@return cross product.
     */
    cross(other: Vector3): Vector3;
    /**
     *Projects this vector onto `other`.
     *
     *@return vector projection.
     */
    project(other: Vector3): Vector3;
    /**
     *Projects this vector onto a plane defined by a `normal` that is orthogonal to it.
     *
     *@param normal direction from the vector towards the plane.
     *
     *@return location of vector on the plane
     */
    projectOnPlane(normal: Vector3): Vector3;
    /**
     *Returns a copy of this vector with length `1`.
     *
     *@deprecated
     */
    normalize(): Vector3;
    /**
     *Returns a copy of this vector with length `1`.
     */
    readonly normalized: Vector3;
    /**
     *Returns a copy of this vector with limited length `l`.
     *
     *@return limited length vector.
     */
    limitLength(l: number): Vector3;
    /**
     *Returns a new vector made from the smallest components of this vector and `other`
     */
    min(other: Vector3): Vector3;
    /**
     *Returns a new vector made from the largest components of this vector and `other`
     */
    max(other: Vector3): Vector3;
    /**
     *Adds this vector and `other` by their corresponding components.
     *
     *@return new vector of the combined result.
     */
    add(other: Vector3): Vector3;
    /**
     *Divides all components of this vector by divisor `d`.
     *
     *@return new vector of the divided result.
     */
    div(d: number): Vector3;
    /**
     *Subtracts each component of `other` from this  vector.
     *
     *@return new vector of the subtracted result
     */
    sub(other: Vector3): Vector3;
    /**
     *`X` component of this vector.
     */
    readonly x: number;
    /**
     *`Y` component of this vector.
     */
    readonly y: number;
    /**
     *`Z` component of this vector.
     */
    readonly z: number;
    /**
     *Multiplies each component of this by a number `m`.
     *
     *@param m multiplier.
     *
     *@return new vector of the multiplied result.
     */
    mult(m: number): Vector3;
    /**
     *Returns the angle in radians from this vector to `other`.
     *
     *@return angle in radians.
     */
    angle(other: Vector3): number;
    /**
     *Calculates the dot product of this vector and `other`.
     *
     * The dot product is a number equal to the lengths of two vectors multiplied together
     * and then multiplied by the cosine of the angle between them.
     *
     *@return dot product.
     */
    dot(other: Vector3): number;
    /**
     *Returns the length of this vector.
     *
     * The length is calculated by the square root of `(x * x + y * y + z * z)`.
     *
     *@return length of this vector.
     */
    readonly length: number;
    /**
     *Returns the squared length of this vector.
     *
     * If you use vector lengths to compare distances, squared lengths are more performant and preferred to use.
     *
     *@return squared length of this vector
     */
    readonly sqrLength: number;
    /**
     *Returns the distance between this vector and `other`.
     *
     * **Note**: `a.dist(other)` is the same as `a.sub(b).length`.
     *
     *@return distance between vectors.
     */
    dist(other: Vector3): number;
    /**
     *Returns `true` if this vector equals `v`.
     *
     *@param v vector to compare this vector against.
     */
    equals(v: Vector3): boolean;
    /**
     *Interpolates  between vector `a` and `b` over interpolant `t`.
     *
     * Used to find a point between endpoints `a` and `b`.
     *
     * **Example:** If `t = 0.5`, the target point is in the middle of the path from `a` to `b`.
     *
     *@return point between `a` and `b`.
     */
    lerp(v: Vector3, t: number): Vector3;
    /**
     *@return array representation of this vector.
     */
    toArray(): Array<number>;
    /**
     *Multiplies each component of vector `v` by `m`.
     *
     *@param v vector components to multiply.
     *
     *@return new vector of the multiplied result.
     */
    static mult(v: Vector3, m: number): Vector3;
    /**
     *Adds vector `a` and vector `b` by their corresponding components.
     *
     *@return new vector of combined result
     */
    static add(a: Vector3, b: Vector3): Vector3;
    /**
     *Subtracts each component of vector `b` from `a`.
     *
     *@return new vector of the subtraction result.
     */
    static sub(a: Vector3, b: Vector3): Vector3;
    /**
     *Returns the angle in radians from this vector `a` to vector `b`.
     *
     *@return angle in radians.
     */
    static angle(a: Vector3, b: Vector3): number;
    static cos(a: Vector3, b: Vector3): number;
    /**
     *Calculates the dot product of vector `a` and vector `b`.
     *
     * The dot product is a number equal to the legnths of two vectors multiplied together
     * and then multiplied by the cosine of the angle between them.
     *
     *@return dot product.
     */
    static dot(a: Vector3, b: Vector3): number;
    /**
     *Calculates the cross product of vector `a` and vector `b`.
     *
     * The cross product of two vectors results in a third vector which is perpendicular to the two input vectors.
     * The result's length is equal to the lengths of the two inputs multiplied together and then multiplied
     * by the sine of the angle between the inputs. You can determine the direction of the result vector using the "left hand rule".
     *
     *@return cross product.
     */
    static cross(a: Vector3, b: Vector3): Vector3;
    /**
     *Projects vector `a` onto vector `b`.
     *
     *@return vector projection
     */
    static project(a: Vector3, b: Vector3): Vector3;
    /**
     *Projects vector `v` onto a plane defined by a normal that is orthogonal to it.
     *
     *@param v position of the vector above the plane.
     *
     *@param normal direction from the vector towards the plane.
     *
     *@return location of vector on the plane.
     */
    static projectOnPlane(v: Vector3, normal: Vector3): Vector3;
    /**
     *Returns the length of vector `v`.
     *
     * The length is made up from the square root of `(x * x + y * y + z * z)`.
     *
     *@return length of `v`
     */
    static norm2(v: Vector3): number;
    /**
     *Returns the distance between vector `a` and vector `b`.
     *
     * **Note**: `a.dist(b)` is the same as `a.sub(b).length`.
     *
     *@return distance between vectors.
     */
    static dist(a: Vector3, b: Vector3): number;
    /**
     *Returns the squared distance between vector `a` and vector `b`
     *
     *@return squared distance between vectors.
     */
    static distance2(a: Vector3, b: Vector3): number;
    /**
     *Returns `true` if vector `a` equals vector `b`.
     *
     *@param a vector to compare.
     *
     *@param b vector to compare.
     */
    static equals(a: Vector3, b: Vector3): boolean;
    static equalsNullable(a: Vector3, b: Vector3): boolean;
    /**
     *Returns a vector made from the smallest components of vector `a` and vector `b`.
     */
    static min(a: Vector3, b: Vector3): Vector3;
    /**
     *Returns a vector made from the largest components of vector `a` and vector `b`.
     */
    static max(a: Vector3, b: Vector3): Vector3;
    /**
     *Divides all components of vector `v` by divisor `d`.
     *
     *@return new vector of the divided result.
     */
    static div(v: Vector3, d: number): Vector3;
    static triple(a: Vector3, b: Vector3, c: Vector3): number;
    /**
     *Shorthand for writing `new Vector3(0,0,0)`.
     */
    static readonly zero: Vector3;
    /**
     *Shorthand for writing `new Vector3(1,1,1)`.
     */
    static readonly one: Vector3;
    /**
     *Shorthand for writing `new Vector3(1,0,0)`.
     */
    static readonly axisX: Vector3;
    /**
     *Shorthand for writing `new Vector3(0,1,0)`.
     */
    static readonly axisY: Vector3;
    /**
     *Shorthand for writing `new Vector3(0,0,1)`.
     */
    static readonly axisZ: Vector3;
}
/**
 *Namespace for physics simulation properties and methods in DX Engine.
 *
 * **Note:** Make sure to `enable` physics on items. By default, items ignore physics collisions and forces.
 */
declare namespace Physics {
    /**
     *Enables physics on all items in this `Scene`.
     *
     *See `BaseItem`
     *
     *See `Scene`
     */
    function addSceneItems(): void;
    /**
     *Disables physics on all items in this `Scene`.
     *
     *See `BaseItem`
     *
     *See `Scene`
     */
    function removeSceneItems(): void;
    /**
     *Creates an explosion force which applies to all physics-enabled items within `radius` from the `origin`.
     * If `power` is negative, the force attracts items instead.
     *
     *@param origin origin of explosion.
     *
     *@param radius radius of explosion.
     *
     *@param power strength of explosion.
     */
    function createExplosion(origin: Vector3, radius: number, power: number): void;
    /**
     *@return delta time of the physics simulation.
     */
    let deltaTime: number;
    /**
     *Defines the gravity acceleration of the physics simulation. Negative values cause items to fall 'up'.
     *
     *@return gravity acceleration.
     */
    let gravityAcceleration: number;
    /**
     *Defines gravity direction of the `Scene`.
     *
     *@return gravity direction.
     */
    let gravityDirection: Vector3;
    /**
     *Defines collision floor height of this `Scene`. The floor acts as invisible "ground" for physics simulations.
     *
     * _Default height is `0`._
     *
     *@return floor height.
     *
     *See `Physics.sceneSize`
     */
    let floorHeight: number;
    /**
     *Toggles real-time simulation of the physics engine.
     *
     * If set to `true`, physics is calculated using delta time, causing results
     * to be independent to  device performance.
     *
     *@return real time simulation state.
     */
    let realTime: boolean;
    /**
     *Toggles physics simulation. If `false`, no physics are simulated in the `Scene`.
     *
     *@return paused state of physics simulation.
     */
    let paused: boolean;
    /**
     *Toggles rotational friction in physics simulation, causing items to lose energy by rolling.
     *
     *@return rotation friction state.
     */
    let rotationFriction: boolean;
    /**
     *Defines collision boundaries of this `Scene`. Collision boundaries prevent items from moving indefinitely.
     *
     * _Default size is `85`._
     *
     *@return boundary size.
     */
    let sceneSize: number;
    /**
     *### Only for internal development
     *
     * Defines physics solver relaxation factor.
     *
     *@return relaxation factor.
     */
    let solverRelaxationFactor: number;
    /**
     *Defines simulation speed of the physics engine.
     *
     * Low values _(below `1`)_ allow you to create slow-motion simulations.
     *
     *@return simulation speed.
     */
    let physicsSpeed: number;
    /**
     *Toggles `airArchimedesPrinciple` in physics simulation.
     *
     * If set to `true`, items with a low enough mass can escape gravity.
     */
    let airArchimedesPrinciple: boolean;
    /**
     *Defines pause _(in seconds)_ between execution of each physics CoBlock.
     *
     *@return current tick rate.
     */
    function getTickRate(): number;
    function setTickRate(tick: number): void;
    namespace Constraints {
        /**
         *@param first
         *
         *@param second
         *
         *@param v
         *
         *@return
         */
        function createMotorJoint(first: BaseItem, second: BaseItem, v: BaseItem): MotorJointConstraint;
        function createHingeJoint(first: BaseItem, second: BaseItem, v: BaseItem): HingeJointConstraint;
    }
}
interface ComposableItem {
    union(other: ComposableItem): CsgItem;
    difference(other: ComposableItem): CsgItem;
    intersection(other: ComposableItem): CsgItem;
    split(): Array<ComposableItem>;
}
/**
 *Represents 2D points and vectors.
 *
 *
 * Use this class to pass positions and directions to `GUI` elements.
 *
 */
declare class Vector2 {
    constructor();
    constructor(x: number, y: number);
    add(v: Vector2): Vector2;
    sub(v: Vector2): Vector2;
    mult(w: number): Vector2;
    div(w: number): Vector2;
    max(v: Vector2): Vector2;
    min(v: Vector2): Vector2;
    angle(v: Vector2): number;
    dot(v: Vector2): number;
    dist(v: Vector2): number;
    lerp(v: Vector2, t: number): Vector2;
    readonly x: number;
    readonly y: number;
    /**
     *Returns `true` if this vector components equal `v`.
     *
     *@param v vector to compare this vector against.
     */
    equals(v: Vector2): boolean;
    /**
     *Returns the length of this vector.
     *
     * The length is calculated by the square root of `(x * x + y * y)`
     *
     *@return length of this vector.
     */
    readonly length: number;
    /**
     *Returns the squared length of this vector.
     *
     * If you use vector lengths to compare distances, squared lengths are more performant and preferred to use.
     *
     *@return squared length of this vector
     */
    readonly sqrLength: number;
    /**
     *Returns a copy of this vector with length `1`.
     */
    readonly normalized: Vector2;
    /**
     *Adds vector `a` and vector `b` together by their corresponding components.
     *
     *@return combined result
     */
    static add(a: Vector2, b: Vector2): Vector2;
    /**
     *Subtracts each component of vector `b` from `a`.
     *
     *@return new vector of the subtraction result.
     */
    static sub(a: Vector2, b: Vector2): Vector2;
    /**
     *Calculates the dot product of this vector `a` and vector `b`.
     *
     * The dot product is a number equal to the length of two vectors multiplied together
     * and then multiplied by the cosine of the angle between them.
     *
     *@return dot product.
     */
    static dot(a: Vector2, b: Vector2): number;
    /**
     *Returns the distance between vector `a` and vector `b`.
     *
     *@return distance between vectors.
     */
    static dist(a: Vector2, b: Vector2): number;
    /**
     *Interpolates  between vector `a` and `b` over interpolant `t`.
     *
     * Used to find a point between endpoints `a` and `b`.
     *
     * **Example:** If `t = 0.5`, the target point is in the middle of the path from `a` to `b`.
     *
     *@return point between `a` and `b`.
     */
    static lerp(a: Vector2, b: Vector2, t: number): Vector2;
    /**
     *Multiplies each component of vector `v` by `m`.
     *
     *@param v vector components to multiply.
     *
     *@return new vector of the multiplied result.
     */
    static mult(v: Vector2, m: number): Vector2;
    /**
     *Divides all components of vector `v` by divisor `d`.
     *
     *@param v vector components to multiply.
     *
     *@param d divisor.
     *
     *@return new vector of the divided result.
     */
    static div(v: Vector2, d: number): Vector2;
    /**
     *Returns a new vector made from the largest components of vector `a` and vector `b`.
     */
    static max(a: Vector2, b: Vector2): Vector2;
    /**
     *Returns a new vector made from the smallest components of vector `a` and vector `b`.
     */
    static min(a: Vector2, b: Vector2): Vector2;
    /**
     *Returns the angle in radians from vector `a` to vector `b`.
     *
     *@return angle in radians.
     */
    static angle(a: Vector2, b: Vector2): number;
    /**
     *Shorthand for writing `new Vector2(0,0)`.
     */
    static readonly zero: Vector2;
    /**
     *Shorthand for writing `new Vector2(1,1)`.
     */
    static readonly one: Vector2;
    /**
     *Shorthand for writing `new Vector2(1,0)`.
     */
    static readonly axisX: Vector2;
    /**
     *Shorthand for writing `new Vector2(0,1)`.
     */
    static readonly axisY: Vector2;
}
declare class FoliageItem extends BaseItem {
    clear(): void;
    windParameters: WindParameters;
}
declare class AnisotropicPhongItem extends PhongItem {
    setTexture(id: string, ch: number): void;
    setTextureIds(ids: Array<string>): void;
    setTextureBlend(b: boolean): void;
    setBlendColors(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number): void;
    getTextureId(): string;
}
declare class RotationConstraint extends Constraint {
}
declare class Constraint implements Disposable {
    tuneFrequencyDampingMass(f: number, d: number, m: number): void;
    setMaxForce(f: number): void;
    /**
     *Disposes this object, effectively turning this into an unmanaged resource.
     */
    dispose(): void;
}
/**
 *The `EllipsoidItemBase` is the parent class for all `Ellipsoid` item variations which have
 * adjustable `radius`.
 */
declare class EllipsoidItemBase extends AnisotropicItem {
    setSize(rx: number, ry: number, rz: number): void;
    /**
     *Defines the local x-axis radius of this `Ellipsoid`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    radiusX: number;
    /**
     *Defines the local y-axis radius of this `Ellipsoid`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    radiusY: number;
    /**
     *Defines the local z-axis radius of this `Ellipsoid`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    radiusZ: number;
}
declare class Http {
    constructor();
    method: string;
    url: string;
    readonly headers: Http.MutableHeaders;
    contentType(ts_type: string): Http;
    basicAuthentication(user: string, password: string): Http;
    noAuthentication(): Http;
    header(name: string, value: string): Http;
    header(name: string, values: Iterable<string>): Http;
    clear(): Http;
    send(): Http.Request;
    send(content: string): Http.Request;
    send(content: ArrayBuffer): Http.Request;
    static get(url: string): Http;
    static post(url: string): Http;
    static put(url: string): Http;
    static delete(url: string): Http;
    static patch(url: string): Http;
}
declare namespace Http {
    class Response {
        readonly status: number;
        readonly headers: Http.Headers;
        readonly content: ArrayBuffer;
        readonly textContent: string;
        readonly responseUrl: string;
    }
    interface MutableHeaders extends Http.Headers {
        set(name: string, value: string): void;
        set(name: string, values: Iterable<string>): void;
        add(name: string, value: string): void;
        add(name: string, values: Iterable<string>): void;
        remove(name: string, value: string): void;
        remove(name: string, values: Iterable<string>): void;
        remove(name: string): void;
        clear(): void;
        get(name: string): List<string>;
        getSingle(name: string): string;
        contains(name: string): boolean;
        contains(name: string, value: string): boolean;
        readonly headerNames: List<string>;
    }
    interface Headers {
        get(name: string): List<string>;
        getSingle(name: string): string;
        contains(name: string): boolean;
        contains(name: string, value: string): boolean;
        readonly headerNames: List<string>;
    }
    class Request {
        readonly response: Promise<Http.Response>;
        readonly progress: ReadableProperty<number>;
        cancel(): void;
    }
}
declare namespace IDE {
    /** @deprecated */ function allowEditObjects(show: boolean): void;
    /** @deprecated */ function setScriptTab(scriptName: string): void;
}
/**
 *Morph target defined in this `AnimatedItem`.
 *
 * Morph targets are meshes that contain the same topology as the original mesh, but have different vertex positions.
 *
 * **Note**
 * - Morph targets do **not** adjust collision volumes or tracing of the item.
 * - DX Engine currently supports up to `8` active morph targets that can be simultaneously displayed on a mesh. The following mesh attributes reduce the maximum that can be active:
 *   - UVs _(-1 morph target)_
 *   - Vertex colors _(-1 morph target)_
 *   - Skinned mesh _(-2 morph targets)_
 */
declare class MorphTarget {
    /**
     *Returns name of the morph target for this `AnimatedItem`.
     */
    readonly name: string;
    /**
     *Returns the normalized weight of the morph target for this `AnimatedItem`.
     * The weight represents how much the mesh has been morphed from its original shape to the target morph target.
     */
    weight: number;
}
declare class TorusItemBase extends AnisotropicItem {
    arc: number;
    setSize(radius: number, tubeRadiusX: number, tubeRadiusZ: number, radians: number): void;
    radius: number;
    tubeRadiusX: number;
    tubeRadiusZ: number;
}
declare namespace ZSpace {
    /**
     *Defines conversion of DX engine units to physical sizes.
     * By default, viewer scale of 50 is used, so that 1 meter in DX engine equals 2 centimeters.
     */
    let viewerScale: number;
    /**
     *Auto-stereo transition allows to switch to monoscopic mode automatically when glasses are not tracked.
     */
    let autoStereoTransition: boolean;
    /**
     *Mouse emulation mode allows to emulate a mouse using zSpace stylus.
     */
    let mouseEmulation: boolean;
    /**
     *Converts point on screen to world space.
     * Depth parameter specifies physical distance in meters from resulting point to zSpace display.
     * Negative depths are closer to viewer, zero depth is on the screen plane itself.
     *
     *@param position screen position
     *
     *@param depth desired distance to zSpace display in meters
     */
    function screenToWorld(position: Vector2, depth: number): Vector3;
    /**
     *Converts point from world space to screen space.
     * In resulting vector, x and y components are projections on screen (in dp),
     * z component - distance to display (in meters).
     */
    function worldToScreen(position: Vector3): Vector3;
    /**
     *Computes distance between point projections on left and right images.
     * Zero disparity means that point is perfectly aligned on screen plane.
     * Points with negative disparities are closer to viewer, and points with positive
     * disparities - further away.
     */
    function getPixelDisparity(point: Vector3): number;
    /**
     *Transform of zSpace display.
     */
    const displayTransform: ReadonlyTransform;
    const headPose: ReadonlyTransform;
    const isReticleOnUI: boolean;
}
declare class ParticleItem extends BaseItem {
    setEmitRate(rate: number): void;
    pause(): void;
    start(): void;
    clear(): void;
    reset(): void;
    isEmitting(): boolean;
    setSize1(s1: number): void;
    setSize2(s2: number): void;
    setFireRadius(r: number): void;
}
interface List<T> extends Iterable<T> {
    readonly [key: number]: T;
    readonly length: number;
    readonly empty: boolean;
    indexOf(e: T): number;
    lastIndexOf(e: T): number;
    contains(e: T): boolean;
    toArray(): Array<T>;
    copy(): MutableList<T>;
    [Symbol.iterator](): Iterator<T>;
}
/**
 *Namespace for managing 3D camera _(-items)_.
 *
 * The `Camera` itself uses `ReadonlyTransform`. Its position and orientation can not be modified.
 *
 * _To change camera item rotation and position by script, use `CameraItem`._
 */
declare namespace Camera {
    /**
     *Defines the currently _focused_ `CameraItem`.
     *
     * If no `CameraItem` is focused, this returns `null`.
     */
    let focusedItem: CameraItem;
    /**
     *Readonly `Transform` of the `Camera`.
     *
     * To move the `Camera` by script, use the editable `Transform` of `CameraItem`.
     */
    const transform: ReadonlyTransform;
    /**
     *Returns `true` if `item` is in view of the `Camera`.
     */
    function isVisible(item: BaseItem): boolean;
    /**
     *Defines the minimum and maximum altitude of the `Camera` in radians.
     *
     * **Note:** Default limits are [-PI / 2, PI / 2], for `orbit` mode: [-PI / 2, 0]
     *
     *@param min minimum altitude angle.
     *
     *@param max maximum altitude angle.
     */
    function setCameraVerticalLimits(min: number, max: number): void;
    /**
     *Defines the minimum and maximum distances from the camera in `orbit` mode to it's target.
     */
    function setTargetDistanceLimits(min: number, max: number): void;
    /**
     *Defines minimum and maximum limit for the `orthographic` camera projection size.
     */
    function limitProjectionSize(min: number, max: number): void;
    /**
     *Defines minimum and maximum limit for the `perspective` camera field of view in degrees.
     */
    function limitFoV(min: number, max: number): void;
    /**
     *Defines a callback that allows modifying the Camera's position.
     *
     * **Note** This method doesn't work for `orbit` and `editor` camera types.
     *
     * **Example**
     * `
     * ```
     * //Limits the focused `CameraItem` _(or `Camera`, if no item is focused)_ position 2 units along the X and Z axis.
     * Camera.limitPosition((targetPosition => {
     *     const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
     *     let xPos = clamp(targetPosition.x, 0, 2)
     *     let zPos = clamp(targetPosition.z, 0, 2)
     *     return new Vector3(xPos, 0, yPos)
     * })
     * ```
     * `
     *
     *@param restriction callback to limit targetPosition after camera is moved
     */
    function limitPosition(restriction: (a: Vector3) => Vector3): void;
    /**
     *Defines the jump velocity of the `Camera` during `walk` mode.
     *
     * Camera jumping is **not** supported in `AR` and `VR`.
     */
    let jumpVelocity: number;
    /**
     *Defines the `Camera` falling speed during `walk` mode.
     */
    let gravity: number;
    /**
     *Toggles `Camera` collision with physics-enabled items.
     */
    let physicsCollision: boolean;
    /**
     *Adds `item` to the `Camera` collision filter, disabling collisions against it.
     */
    function addToCollisionFilter(item: BaseItem): void;
    /**
     *Removes `item` from the `Camera` collision filter, enabling collision against it.
     */
    function removeFromCollisionFilter(item: BaseItem): void;
    /**
     *Defines the maximum slope `angle` which the `Camera` can climb up and down.
     */
    let slopeAngle: number;
    /**
     *Defines the maximum `angle` at which the `Camera` can stay on a slope without sliding down.
     */
    let stayAngle: number;
    /**
     *Defines the `Camera` collision height.
     */
    let collisionCapsuleHeight: number;
    /**
     *Defines the `Camera` capsule collision radius.
     */
    let collisionCapsuleRadius: number;
    /**
     *Replaces default `CameraItem` movement and binds it to the specified set of `Input.KeyCode` buttons.
     * If no movement property is defined, the corresponding movement action is not bound to any key.
     *
     * **Note**
     * * Movement on mobile and VR devices is **not** overwritten
     * * `orbit` mode is not affected by `look...` parameters
     * * `fixed_position` mode is not affected by `move...` parameters
     * * `jump` is only bound to `walk` mode with enabled camera collision
     * * `flyUp` and `flyDown` is only bound to `fly` mode
     */
    function bindMovementKeys(keyBindings: {
        readonly moveForward?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly moveBackward?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly moveLeft?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly moveRight?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly lookUp?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly lookDown?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly lookLeft?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly lookRight?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly flyDown?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly flyUp?: (Input.KeyCode | Array<Input.KeyCode>);
        readonly jump?: (Input.KeyCode | Array<Input.KeyCode>);
    }): void;
    /**
     *Locks the mouse pointer and binds camera-turning to mouse movement.
     *
     * _To exit locked mouse pointer state, press `ESC` key._
     *
     * _Only available on platforms that support mouse input_.
     */
    let mouseLocked: boolean;
    /**
     *Converts a position from screen space _(e.g. of the mouse)_ to world space.
     *
     *@param screenPosition position in the `Camera` viewport.
     *
     *@param distance local y-axis distance to the `Camera`.
     *
     *@return converted position in the `Scene`.
     */
    function screenToWorld(screenPosition: Vector2, distance: number): Vector3;
    /**
     *Converts a position from world space to screen space.
     *
     *@param worldPosition position in the `Scene`.
     *
     *@return converted position in the `Camera` viewport.
     */
    function worldToScreen(worldPosition: Vector3): Vector2;
    /**
     *### For internal development only.
     *
     *@deprecated Use `CameraItem.takeSnapshot` instead.
     *
     * Renders a snapshot of the current `Camera` viewport and stores the result as CDN-asset.
     *
     *@param resolution resolution modifier for the captured picture.
     *
     *@param handler method which provides image `id` once upload is complete.
     */
    function takeSnapshot(resolution: Vector2, handler: (t: string) => void): void;
    /**
     *Defines where the `Camera` viewport is displayed in normalized coordinates.
     *
     * `Rect` values are clamped to range [0,1].
     */
    let viewport: Rect;
    /**
     *Defines where the `Camera` viewport is displayed in pixel coordinates.
     */
    let pixelViewport: Rect;
    /**
     *Defines the turning sensitivity of the `Camera`.
     *
     * **Note:** Turning the `Camera` in VR and AR is not affected by this property.
     */
    let turningSpeed: number;
    /**
     *Toggles inverted drag-behavior for looking left and right.
     *
     * **Note:** The VR and AR Camera is not affected by this property.
     */
    let dragAxisXInverted: boolean;
    /**
     *Toggles inverted drag-behavior for looking up and down.
     *
     * **Note:** The VR and AR Camera is not affected by this property.
     */
    let dragAxisYInverted: boolean;
    /**
     *### For internal development only
     *
     * Toggles synchronization of the `Camera` for multiple users in a persistent `Activity`-`Scene`.
     */
    let synchronized: boolean;
    /**
     *Projection mode used by the `Camera`.
     *
     * * `perspective` - `Camera` can get closer or further away from items. Distances of items can be judged.
     * * `orthographic` - Items do not show depth and their scale ignores distance to `Camera`.
     *
     * ![](https://cdn.delightex.com/uploads/eBjjqiDEvH3ZrZkunlBa3Ek7apHOkWBx4YHpn4VqYZR)
     */
    type ProjectionMode = "perspective" | "orthographic";
}
declare class SpaceAssets {
    readonly images: Array<ImageAsset>;
    readonly videos: Array<VideoAsset>;
    readonly sounds: Array<SoundAsset>;
    readonly models3d: Array<Model3dAsset>;
}
/**
 *`BaseItem` is the base class for all 3D `Scene` content.
 *
 * Every `BaseItem` provides methods and properties that allow you to
 *  * Edit `Color`
 *  * Edit `BaseItem.thought` and `BaseItem.speech`
 *  * Edit `Transform` for positioning and rotation
 *  * Edit `BaseItem.physics` properties
 *  * Create `BaseItem.input` collision handlers
 *  * Create `Tweener` to control item motion over time
 *  * Modify the synchronized `BaseItem.model` in persisted Activities
 *
 *
 *See `Scene.createItem`
 */
declare class BaseItem implements PositionService {
    /**
     *Name of this item displayed in their name tag and in the **item hierarchy**.
     *
     *See `Scene.getItem`
     *
     *See `BaseItem.id`
     */
    name: string;
    /**
     *@deprecated Use `BaseItem.name` property instead.
     */
    setName(name: string): void;
    /**
     *The unique `id` of this item.
     *
     * If several items share the same name, this item can still be found by its `id`.
     *
     *See `Scene.getItem`
     *
     *See `BaseItem.name`
     */
    readonly id: string;
    /**
     *@deprecated Use `BaseItem.delete` instead.
     */
    deleteFromScene(): void;
    /**
     *Irreversibly removes this item from the `Scene`.
     *
     * **Note:** This method does not update previously existing item references.
     */
    delete(): void;
    /**
     *Returns distance between this item and another item.
     *
     *@deprecated Get distance of `BaseItem.transform` position to another point instead.
     *
     *@param other item to measure distance to.
     */
    distanceTo(other: BaseItem): number;
    /**
     *Returns distance between this item and a point in world space.
     *
     *@deprecated Get distance of `BaseItem.transform` position to another point instead.
     *
     *@param point world space point.
     */
    distanceTo(point: Vector3): number;
    /**
     *@deprecated Use `BaseItem.color` property instead.
     */
    getColor(): Array<number>;
    /**
     *Defines color of this item.
     *
     * To change opacity, use `BaseItem.opacity`.
     */
    color: Color;
    /**
     *@deprecated Use `BaseItem.color` property instead.
     */
    setColor(red: number, green: number, blue: number): void;
    /**
     *@deprecated Use `BaseItem.color`  property instead.
     */
    setColor(color: Color): void;
    /**
     *Adds a tag to the item. Tags are used to help categorize items independent of `BaseItem.name` or `BaseItem.id`.
     *
     * Items can hold several tags.
     *
     *@param tag adds a new tag to this item.
     *
     *See `BaseItem.removeTag`
     */
    addTag(tag: string): void;
    /**
     *Removes a tag from this item.
     *
     *@param tag tag to remove.
     *
     *See `BaseItem.addTag`
     */
    removeTag(tag: string): void;
    /**
     *Returns `true` if the defined `tag` can be find in this item.
     *
     *@param tag tag to check.
     *
     *See `BaseItem.addTag`
     */
    hasTag(tag: string): boolean;
    /**
     *Handles the start of a collision between this item and another item.
     *
     * _To remove the handler, pass `null` for `handler`._
     *
     *@param handler passes `BaseItem` which this item collides against.
     */
    onCollisionEnter(handler: (t: BaseItem) => void): void;
    /**
     *Handles the end of a collision between this item and another item.
     *
     * _Calling this function on an existing collision handler overwrites the handler._
     *
     *@param handler passes item which this item collided against.
     */
    onCollisionExit(handler: (t: BaseItem) => void): void;
    /** @deprecated */ onButtonDown(handler: () => void): void;
    /** @deprecated */ onButtonUp(handler: () => void): void;
    /**
     *@deprecated Use `BaseItem.input.onClick` instead.
     */
    onActivate(handler: () => void): void;
    /**
     *@deprecated Use `BaseItem.input.onHover` instead.
     */
    onHover(handler: (t: boolean) => void): void;
    /**
     *@deprecated Use `GUI.HUD.showInfoPanel` instead.
     */
    showInfoPanel(title: string, image: string, text: string, autoRemove: boolean): Disposable;
    /**
     *@deprecated Use `GUI.HUD.showInfoPanel` instead.
     */
    showInfoPanel(title: string, image: string, text: string, autoRemove: boolean, onHide: () => void): Disposable;
    /**
     *@deprecated Use `Camera.focusedItem` to set a new camera view.
     */
    focusOn(instant: boolean): Disposable;
    /**
     *Removes this item from its parent-item, disconnecting all inherited `Transform`
     *  and `highlight` settings.
     *
     *See `BaseItem.parent`
     *
     *See `BaseItem.add`
     *
     *See `BaseItem.deleteChildren`
     */
    removeFromParent(): void;
    /**
     *Returns the center point of this item.
     *
     *@return center of this item in world space.
     */
    readonly center: Vector3;
    /** @deprecated */ getSlotPosition(slot: string): Vector3;
    /**
     *Adds a child to this item.
     *
     * _Children inherit `BaseItem.transform` and `BaseItem.highlight`
     * settings from their parent._
     *
     *@param obj item to add to the list of children.
     *
     *See `BaseItem.parent`
     *
     *See `BaseItem.children`
     */
    add(obj: BaseItem): void;
    /** @deprecated */ adjustToItem(slot: string, obj: BaseItem, objSlot: string): boolean;
    /**
     *@deprecated Get the slot via `BaseItem.getSlot` and attach this item via
     * `Slot.attachTo` instead.
     */
    attachToItem(slot: string, obj: BaseItem, objSlot: string): void;
    /**
     *@deprecated Access child index directly via ``BaseItem.children`[indexNumber]` instead.
     */
    getChild(index: number): BaseItem;
    /**
     *@deprecated Get child via
     * ``BaseItem.children`.`byName["childName"]`` instead.
     */
    getChild(name: string): BaseItem;
    /**
     *Deletes all children of this item.
     *
     *See `BaseItem.removeFromParent`
     */
    deleteChildren(): void;
    /**
     *@deprecated Use `scale` property
     * of `BaseItem.transform` instead.
     */
    setScale(scale: number): void;
    /**
     *@deprecated Use `scale` property
     * of `BaseItem.transform` instead.
     */
    scale: number;
    /**
     *@deprecated Use `scale` property
     * of `BaseItem.transform` instead.
     */
    setScale(scale: number, slot: string): void;
    createCustomItem(basis: PositionService, script: string): BaseItem;
    /**
     *Defines the text in the speech-bubble of this item.
     */
    speech: (string | number);
    /**
     *Defines the text in the thought-bubble of this item.
     */
    thought: (string | number);
    /**
     *@deprecated Use `BaseItem.speech` property instead.
     */
    say(phrase: any): void;
    /**
     *@deprecated Use `BaseItem.thought` property instead.
     */
    think(phrase: any): void;
    log(): void;
    /**
     *@deprecated Use `BaseItem.nameVisible` property instead.
     */
    showName(show: boolean): void;
    /**
     *Toggles visibility of the item name tag.
     *
     *See `BaseItem.name`
     */
    nameVisible: boolean;
    /**
     *Returns `true` if this item has animation tracks.
     */
    readonly animated: boolean;
    /**
     *Creates a copy of this item.
     *
     * All properties except those made with `BaseItem.setProperty` are copied.
     */
    copy(): BaseItem;
    /**
     *Toggles visibility of this item in CoBlocks scripting.
     *
     * Used in `Activity` spaces.
     */
    useInCoBlocks: boolean;
    /**
     *### Only for internal development
     *
     * The synchronized model of this item provided by DX Engine.
     * Allows setting custom synced properties on this item to be used in persistent
     * `Activities`.
     *
     *@return Model of this item
     *
     *See `Model`
     */
    readonly model: Model;
    /**
     *### Only for internal development
     *
     * Synchronized model properties of this item provided by DX Engine. Allows setting up handlers to listen for value changes.
     *
     * The following properties are natively synchronized:
     * * `animation`
     * * `color`
     * * `coloredParts`
     * * `opacity`
     * * `position`
     *
     *@return synchronized properties.
     */
    readonly syncedProperties: {
        readonly color: ReadableProperty<Color>;
        readonly opacity: ReadableProperty<number>;
        readonly coloredParts: ReadableProperty<Array<ColoredPart>>;
        readonly animation: ReadableProperty<string>;
        readonly position: ReadableProperty<Vector3>;
        readonly rotation: ReadableProperty<Quat>;
        readonly scale: ReadableProperty<number>;
        readonly transform: ReadableProperty<ReadonlyTransform>;
    };
    /** @deprecated */ addMoveOnPlaneInteraction(cx: number, cy: number, cz: number, vx: number, vy: number, vz: number, ux: number, uy: number, uz: number): void;
    /** @deprecated */ addMoveOnPlaneInteraction(cx: number, cy: number, cz: number, vx: number, vy: number, vz: number, ux: number, uy: number, uz: number, callback: () => void): void;
    /**
     *@deprecated Use `BaseItem.transition.moveBy` instead.
     */
    move(dx: number, dy: number): void;
    /**
     *@deprecated Use `BaseItem.transition.moveBy` instead.
     */
    move(dx: number, dy: number, dz: number): void;
    /**
     *@deprecated Use `BaseItem.transition.moveBy` instead.
     */
    move(dx: number, dy: number, dz: number, callback: () => void): void;
    /**
     *@deprecated Use `BaseItem.transition.moveTo` instead.
     */
    moveTo(x: number, y: number): void;
    /**
     *@deprecated Use `BaseItem.transition.moveTo` instead.
     */
    moveTo(x: number, y: number, z: number): void;
    /**
     *@deprecated Use `BaseItem.transition.moveTo` instead.
     */
    moveTo(x: number, y: number, z: number, callback: () => void): void;
    /**
     *@deprecated Use `transform`.`lookAt`
     * to turn items towards a point.
     */
    faceTo(obj: PositionService): void;
    /**
     *@deprecated Use `BaseItem.transition.moveLinear` to move item locally.
     */
    moveLinear(x: number, y: number, z: number, t: number): Tweener;
    /**
     *@deprecated Use `BaseItem.transition.moveTo` to move item to another point.
     */
    moveLinearTo(x: number, y: number, z: number, t: number): Tweener;
    /** @deprecated */ moveLinear(x: number, y: number, z: number, t: number, callback: () => void): Tweener;
    /**
     *@deprecated Use `BaseItem.transition.moveTo` to move item to another point.
     */
    moveLinearTo(x: number, y: number, z: number, t: number, callback: () => void): Tweener;
    /** @deprecated */ moveOnPath(options: {
        readonly path: PathItem;
        readonly reverse?: boolean;
        readonly startPoint?: number;
        readonly endPoint?: number;
        readonly speed?: number;
        readonly time?: number;
        /**
         *For closed paths
         */
        readonly turnWithPath?: boolean;
        readonly repeat?: boolean;
        readonly callback?: () => void;
    }): void;
    /** @deprecated */ moveOnPath(path: PathItem, startPoint: number, endPoint: number, time: number, repeat: boolean, reverse: boolean, orientAlongPath: boolean, callback: () => void): void;
    /** @deprecated */ rotateLocal(dirX: number, dirY: number, dirZ: number, radians: number, time: number): void;
    /** @deprecated */ rotateLocal(dirX: number, dirY: number, dirZ: number, radians: number, time: number, callback: () => void): Tweener;
    /** @deprecated */ rotateLocal(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number, time: number): void;
    /** @deprecated */ rotateLocal(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number, time: number, callback: () => void): Tweener;
    /**
     *@deprecated Use
     * `transform`.`position`
     * to set item position.
     */
    setPosition(x: number, y: number, z: number): void;
    /**
     *@deprecated Use
     * `transform`.`position`
     * to set item position.
     */
    setPosition(pos: Vector3): void;
    /**
     *@deprecated Use
     * `transform`.`position`
     * to set item position.
     */
    position: Vector3;
    /** @deprecated */ setPosition(x: number, y: number, z: number, slot: string): void;
    setPosition(x: number, y: number, z: number, discrete: boolean): void;
    /**
     *@deprecated Use `Transform.position` &amp; @`Transform.rotation`
     * properties of `BaseItem.transform` to set
     * item rotation and position.
     */
    setPositionQuat(x: number, y: number, z: number, qx: number, qy: number, qz: number, qw: number): void;
    /**
     *@deprecated Use `Transform.position` &amp; @`Transform.rotation`
     * properties of `BaseItem.transform` to set
     * item rotation and position.
     */
    setPositionAngle(x: number, y: number, z: number, axisX: number, axisY: number, axisZ: number, angle: number): void;
    /**
     *@deprecated Use
     * `transform`.`setDirection()`
     * to set the forward-facing rotation of an item.
     */
    setHorizontalDirection(dirX: number, dirY: number): void;
    /** @deprecated */ setHorizontalDirection(dirX: number, dirY: number, discrete: boolean): void;
    /**
     *@deprecated Use
     * `transform`.`Transform.setDirection` setDirection()}
     * to set the forward-facing rotation of an item.
     */
    setDirection(dirX: number, dirY: number, dirZ: number): void;
    /**
     *@deprecated Use
     * `trasnform`.`rotate()`
     * to add item rotation.
     */
    addRotation(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number): void;
    /**
     *@deprecated Use
     * `trasnform`.`rotateLocal()`
     * to add local item rotation.
     */
    addLocalRotation(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number): void;
    /**
     *@deprecated Use
     * `transform`.`position`
     * to set item positions.
     */
    addLocalPosition(dx: number, dy: number, dz: number): void;
    /** @deprecated */ setPhysicsPosition(x: number, y: number, z: number): void;
    /** @deprecated */ rotateLocal(axis: Vector3, angle: number): void;
    /** @deprecated */ rotatePhysicsBodyLocal(axisX: number, axisY: number, axisZ: number, angle: number): void;
    /** @deprecated */ setVelocity(x: number, y: number, z: number): void;
    /**
     *sets velocity to body which is not in a group
     *
     *@deprecated
     */
    setAngularVelocity(x: number, y: number, z: number): void;
    /** @deprecated */ setAngularVelocityLocal(x: number, y: number, z: number): void;
    /** @deprecated */ setDensity(density: number): void;
    /** @deprecated */ setMass(m: number): void;
    /** @deprecated */ setStatic(): void;
    /** @deprecated */ setStatic(enabled: boolean): void;
    /** @deprecated */ setLayer(layer: number): void;
    /** @deprecated */ restrictMovementAxis(x: boolean, y: boolean, z: boolean): void;
    /** @deprecated */ restrictRotationAxis(x: boolean, y: boolean, z: boolean): void;
    /** @deprecated */ hingeJointToItem(other: BaseItem, localAnchorAx: number, localAnchorAy: number, localAnchorAz: number, localAnchorBx: number, localAnchorBy: number, localAnchorBz: number, localAxisAx: number, localAxisAy: number, localAxisAz: number, localAxisBx: number, localAxisBy: number, localAxisBz: number): HingeJointConstraint;
    /** @deprecated */ motorJointToItem(other: BaseItem, localAnchorAx: number, localAnchorAy: number, localAnchorAz: number, localAnchorBx: number, localAnchorBy: number, localAnchorBz: number, localAxisAx: number, localAxisAy: number, localAxisAz: number, localAxisBx: number, localAxisBy: number, localAxisBz: number): MotorJointConstraint;
    /** @deprecated */ jointToGround(x: number, y: number, z: number): JointConstraint;
    /**
     *Sets a custom property to this object.
     *
     * _Properties are saved as `strings`._
     *
     *@param key property name.
     *
     *@param value property value.
     */
    setProperty(key: string, value: any): void;
    /**
     *Gets a custom property from this object. Returns `null` if the property can not be found.
     *
     *@param key name of property to search.
     */
    getProperty(key: string): string;
    /**
     *Handles property value changes in this object.
     *
     *@param id property to listen to.
     *
     *@param handler function that's called when property value is changed.
     */
    onPropertyChanged(id: string, handler: (t: string) => void): void;
    /**
     *Normalized opacity of this item.
     *
     * **Note:** Items with opacity below `0.3` ignore inputs, e.g. from `BaseItem.input`.
     */
    opacity: number;
    /**
     *@deprecated Use `BaseItem.opacity` property.
     */
    setOpacity(opacity: number): void;
    /**
     *Defines this item's `active` state.
     *
     * If `false`, this item
     * * Ignores _(physics-)_ collisions
     * * Ignores tracing, e.g. from `RayCast` and `Input`
     * * Does not use physics
     */
    active: boolean;
    /**
     *Toggles this item's visibility. If `false`, items retains its `opacity` value, but is not displayed.
     *
     *See `BaseItem.opacity`
     */
    visible: boolean;
    /**
     *Toggles the highlight effect on this item. If `true`, displays item highlight.
     *
     *@deprecated
     */
    setHighlighted(highlighted: boolean): void;
    /**
     *@deprecated Use properties and methods in `BaseItem.highlight`.
     */
    setHighlighted(headlight: boolean, glow: boolean): void;
    /**
     *Returns the parent of this item.
     *
     *See `BaseItem.add`
     *
     *See `BaseItem.removeFromParent`
     */
    readonly parent: BaseItem;
    setShadowPower(value: number): void;
    /**
     *Returns all slots found in this item.
     */
    readonly slots: Array<Slot>;
    /**
     *Returns `Slot` by name.
     *
     *@param name name of slot to find.
     */
    getSlot(name: string): Slot;
    readonly parentSlot: Slot;
    /**
     *Toggles `locked`-state of this item.
     *
     * Locked items can not be selected in the item-hierarchy and require double click to open the item inspector.
     */
    locked: boolean;
    /**
     *Toggles hole-cutting feature on this item.
     *
     * For hole-cutting examples, see [dev space](https://edudev.dev.delightex.com/Studio/Space/hkoGA5jLlKi1HfRP)
     */
    hole: boolean;
    /**
     *Returns all first-level hierarchy children of this item.
     *
     * **Note:** This does **not** return a complete children `Transform` hierarchy.
     *
     *See `BaseItem.parent`
     */
    readonly children: ItemCollection;
    /**
     *Handles item load events.
     * _This handler is useful for cases when an item doesn't fully load in the same frame it is created._
     *
     *@param handler function to call once item is loaded.
     *
     *See `Model3dAsset.createItem`
     */
    onLoaded(handler: () => void): Disposable;
    partName: string;
    /**
     *The `Transform` of this item in world space.
     *
     *See `BaseItem.relativeTransform`
     */
    readonly transform: Transform;
    /**
     *The relative `Transform` of this item in local space.
     *
     * The local space is determined by this item's `BaseItem.parent`.
     *
     *See `BaseItem.transform`
     */
    readonly relativeTransform: Transform;
    getVolume(): number;
    readonly highlight: {
        /**
         *@return color of the light.
         */
        color: Color;
        /**
         *Toggles the highlight effect on this item. If `true`, displays item highlight.
         */
        enabled: boolean;
        /**
         *Defines the highlight type of this item.
         *
         * * `default`: item uses highlight and outline
         * * `light`: item uses light only
         * * `outline`: item uses outline only
         * * `inherited`: item uses highlight options from parent-item
         *
         *@return current highlight type on this item.
         *
         *See `BaseItem.parent`
         */
        type: "default" | "light" | "outline" | "inherited";
        /**
         *@return intensity of the light. High values may cause item to be overexposed.
         */
        intensity: number;
        /**
         *@return ambient brightness of the light.
         */
        ambient: number;
        /**
         *@return speed of pulsating light effect. Higher values cause fast transition, low values cause slow transition.
         */
        frequency: number;
        /**
         *@return intensity-change of the light. Value of `1` causes highlight `intensity` to fully fade in and out.
         */
        amplitude: number;
    };
    readonly input: {
        /**
         *Triggers whenever the main input is **pressed down** inside of this item.
         *
         * _Calling this function on an existing handler overwrites the handler._
         *
         *@param handler function to call on press down. Pass `null` to remove the handler.
         */
        onButtonDown(handler: () => void): void;
        /**
         *Triggers whenever the main input is **released** inside of this item.
         *
         * _Calling this function on an existing handler overwrites the handler._
         *
         *@param handler function to call on release. Pass `null` to remove the handler.
         */
        onButtonUp(handler: () => void): void;
        /**
         *@deprecated Use `BaseItem.input.onClick` instead.
         */
        onActivate(handler: () => void): void;
        /**
         *Triggers whenever the main input is **pressed** and **released** inside of this item.
         *
         * _Calling this function on an existing click handler overwrites the handler._
         *
         *@param handler function to call after click. Pass `null` to remove the handler.
         */
        onClick(handler: () => void): void;
        /**
         *Triggers whenever the item is **hovered**.
         *
         * _Calling this function on existing hover handler overwrites the handler._
         *
         *@param handler method to call on hover event. Uses `boolean` property to determine start and end of hover event. Pass `null` to remove the handler.
         */
        onHover(handler: (t: boolean) => void): void;
        setPlaneDrag(c: Vector3, v: Vector3, u: Vector3): void;
        setPlaneDrag(c: Vector3, v: Vector3, u: Vector3, callback: () => void): void;
        setSphereDrag(): void;
        setSphereDrag(callback: () => void): void;
        setRotationAxisDrag(origin: Vector3, direction: Vector3): void;
        setRotationAxisDrag(origin: Vector3, direction: Vector3, callback: () => void): void;
        setRotationDrag(): void;
        setRotationDrag(callback: () => void): void;
        setRotationContinuousDrag(origin: Vector3, direction: Vector3, speed: number): void;
        setRotationContinuousDrag(origin: Vector3, direction: Vector3, speed: number, callback: () => void): void;
        /**
         *Creates a _drag interaction_ on this item to another `item`, allowing this item to be moved on the surface
         * of other items.
         */
        setCollisionDrag(): void;
        /**
         *Creates a _drag interaction_ on this item to another `item`, allowing this item to be moved on the surface
         * of other items.
         *
         *@param callback function to call when the drag interaction ends
         */
        setCollisionDrag(callback: () => void): void;
        /**
         *Creates a drag interaction which causes this `item` to be draggable on the `target`.
         *
         *@param target item to use as drag surface.
         */
        setItemDrag(target: BaseItem): void;
        /**
         *Creates a drag interaction which causes this `item` to be draggable on the `target`.
         *
         *@param target item to use as drag surface.
         *
         *@param callback function to call when the drag interaction ends.
         */
        setItemDrag(target: BaseItem, callback: () => void): void;
        /**
         *@deprecated Use `BaseItem.input.setItemDrag` to make this `item` draggable on another.
         *
         *@param target Item to drag
         */
        setSurfaceDrag(target: BaseItem): void;
        /**
         *@deprecated Use `BaseItem.input.setItemDrag` to make this `item` draggable on another.
         *
         *@param target `item` to drag
         *
         *@param callback function to call when the drag interaction ends
         */
        setSurfaceDrag(target: BaseItem, callback: () => void): void;
        removeDrag(): void;
        /**
         *### Only for internal development
         *
         * Handles the `select` click event for this item.
         *
         * _Triggers whenever this item is selected with item editing permissions enabled_.
         *
         *@param handler function to call when item is selected.
         */
        onSelected(handler: () => void): void;
        /**
         *### Only for internal development
         *
         * Handles the `deselect` click event for this item.
         *
         * _Triggers whenever this item is deselected with item editing permissions enabled._
         *
         *@param handler function to call when item is deselected.
         */
        onDeselected(handler: () => void): void;
        /**
         *### Only for internal development
         *
         * Handles the `drag start` event for this item.
         *
         * _Triggers when this item or its parent is moved by a drag with item editing permissions enabled._
         *
         *@param handler function to call when dragging has started.
         */
        onDragStart(handler: () => void): void;
        /**
         *### Only for internal development
         *
         * Handles the `drag end` event for this item.
         *
         * _Triggers when a drag on this item or its parent ends._
         *
         *@param handler function to call when dragging has ended.
         */
        onDragEnd(handler: () => void): void;
    };
    readonly transition: {
        /**
         *Scales this item from `startValue` to `endValue` over `duration`.
         *
         *@param startValue starting size.
         *
         *@param endValue target size.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`.
         */
        scaleTo(startValue: number, endValue: number, duration: number): Tweener;
        /**
         *Creates a color transition on this item from `startColor` to `endColor` over `duration`.
         *
         *@param startColor start color.
         *
         *@param endColor end color.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`.
         */
        colorTo(startColor: Color, endColor: Color, duration: number): Tweener;
        /**
         *Fades this item's to the `target` opacity over `duration`.
         *
         *@param target opacity to fade to.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`.
         */
        opacityTo(target: number, duration: number): Tweener;
        /**
         *Fades this item's to the `target` opacity over `duration`.
         *
         *@param target opacity to fade to.
         *
         *@param duration time in seconds.
         *
         *@param callback function to call when the target is reached.
         *
         *@return created `Tweener`.
         */
        opacityTo(target: number, duration: number, callback: () => void): Tweener;
        /**
         *Fades this item's to the `target` opacity over `duration`.
         *
         *@param startValue starting opacity.
         *
         *@param target opacity to fade to.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`.
         */
        opacityTo(startValue: number, target: number, duration: number): Tweener;
        /**
         *Fades this item's to the `target` opacity over `duration`.
         *
         *@param startValue starting opacity.
         *
         *@param target opacity to fade to.
         *
         *@param duration time in seconds.
         *
         *@param callback function to call when the target is reached.
         *
         *@return created `Tweener`.
         */
        opacityTo(startValue: number, target: number, duration: number, callback: () => void): Tweener;
        /**
         *Indefinitely moves this item towards `direction` at `speed`.
         *
         *@param direction world space direction.
         *
         *@param speed movement in meters per second.
         */
        moveByForever(direction: Vector3, speed: number): void;
        /**
         *Moves this item to the `target` point over `duration`.
         *
         *@param target point in world space.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`.
         */
        moveTo(target: Vector3, duration: number): Tweener;
        /**
         *Moves this item to the `target` point over `duration`.
         *
         *@param target point in world space.
         *
         *@param duration time in seconds.
         *
         *@param callback function to call when the target is reached.
         *
         *@return created `Tweener`.
         */
        moveTo(target: Vector3, duration: number, callback: () => void): Tweener;
        /**
         *@deprecated Use `BaseItem.transition.moveTo` to move item to another point.
         */
        moveLinear(target: Vector3, time: number): Tweener;
        /**
         *@deprecated Use `BaseItem.transition.moveTo` to move item to another point.
         */
        moveLinear(target: Vector3, time: number, callback: () => void): Tweener;
        /**
         *Moves this item from its current position by local `offset` vector.
         *
         *@param target relative offset to apply.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`.
         */
        moveBy(target: Vector3, duration: number): Tweener;
        /**
         *Moves this item from its current position by local `offset` vector.
         *
         *@param target relative offset to apply.
         *
         *@param duration time in seconds.
         *
         *@param callback function to call when the target is reached.
         *
         *@return created `Tweener`.
         */
        moveBy(target: Vector3, duration: number, callback: () => void): Tweener;
        /**
         *@deprecated Use `BaseItem.transition.moveBy` to move item.
         */
        moveLinearLocal(target: Vector3, t: number): Tweener;
        /**
         *@deprecated Use `BaseItem.transition.moveBy` to move item.
         */
        moveLinearLocal(target: Vector3, t: number, callback: () => void): Tweener;
        /**
         *Moves this item on a `PathItem`.
         *
         * **Example**
         * `
         * ```
         * //moves an item indefinitely on a PathItem
         * const myItem = Scene.getItem("myItem")
         * const myPath = Scene.getItem("myPath") as PathItem
         *
         * myItem.transition.moveOnPath({
         *     path: myPath,
         *     speed: 1.5,
         *     turnWithPath: true,
         *     repeat: true
         * })
         * ```
         * `
         *
         *@param options path movement options.
         *
         *@return created `Tweener`.
         */
        moveOnPath(options: {
            readonly path: PathItem;
            readonly reverse?: boolean;
            readonly startPoint?: number;
            readonly endPoint?: number;
            readonly speed?: number;
            readonly time?: number;
            /**
             *For closed paths
             */
            readonly turnWithPath?: boolean;
            readonly repeat?: boolean;
            readonly callback?: () => void;
        }): Tweener;
        rotateLocalForever(axis: Vector3, time: number, counterClockwise: boolean): Tweener;
        /**
         *Rotates this item to face towards a `target` point over `duration`.
         *
         *@param target point in world space.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`.
         */
        lookAt(target: Vector3, duration: number): Tweener;
        /**
         *Rotates this item to face towards a `target` point over `duration`.
         *
         *@param target point in world space.
         *
         *@param duration time in seconds.
         *
         *@param callback function to call when this item faces the `target` point.
         *
         *@return created `Tweener`.
         */
        lookAt(target: Vector3, duration: number, callback: () => void): Tweener;
        /**
         *Rotates this item over `duration` so that
         * * its local `Y`-axis points towards the `target` point.
         * * its local `Z`-axis points towards the `worldUp` direction.
         *
         * **Note:** The local `Z`-axis always attempts to be perpendicular to `Y`, which may lead to
         * `worldUp` not always accurately being pointed at.
         *
         *@param target point in world space.
         *
         *@param duration time in seconds.
         *
         *@param worldUp defines the upward direction.
         *
         *@return created `Tweener`.
         */
        lookAt(target: Vector3, duration: number, worldUp: Vector3): Tweener;
        /**
         *Rotates this item over `duration` so that
         * * its local `Y`-axis points towards the `target` point.
         * * its local `Z`-axis points towards the `worldUp` direction.
         *
         * **Note:** The local `Z`-axis always attempts to be perpendicular to `Y`, which may lead to
         * `worldUp` not always accurately being pointed at.
         *
         *@param target point in world space.
         *
         *@param duration time in seconds.
         *
         *@param worldUp defines the upward direction.
         *
         *@param callback function to call when this item looks at `target`.
         *
         *@return created `Tweener`.
         */
        lookAt(target: Vector3, duration: number, worldUp: Vector3, callback: () => void): Tweener;
        /**
         *Rotates this item by `angleInRadians` towards `axis` direction over `duration`.
         *
         *@param axis vector defining the local rotation axis.
         *
         *@param angleInRadians rotation in radians.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`
         */
        rotateLocal(axis: Vector3, angleInRadians: number, duration: number): Tweener;
        /**
         *Rotates this item by `angleInRadians` towards `axis` direction over `duration`.
         *
         *@param axis vector defining the local rotation axis.
         *
         *@param angleInRadians rotation in radians.
         *
         *@param duration time in seconds.
         *
         *@param callback function to call when the `Tweener` ends.
         *
         *@return created `Tweener`
         */
        rotateLocal(axis: Vector3, angleInRadians: number, duration: number, callback: () => void): Tweener;
        /**
         *Rotates this item by `angleInRadians` around an `offset` towards `axis` direction over `duration`.
         *
         *@param offset offset relative to current position.
         *
         *@param axis vector defining the local  rotation axis.
         *
         *@param angleInRadians rotation in radians.
         *
         *@param duration time in seconds.
         *
         *@return created `Tweener`
         */
        rotateLocal(offset: Vector3, axis: Vector3, angleInRadians: number, duration: number): Tweener;
        /**
         *Rotates this item by `angleInRadians` around an `offset` towards `axis` direction over `duration`.
         *
         *@param offset offset relative to current position.
         *
         *@param axis vector defining the local  rotation axis.
         *
         *@param angleInRadians rotation in radians.
         *
         *@param duration time in seconds.
         *
         *@param callback function to call when the `Tweener` ends.
         *
         *@return created `Tweener`
         */
        rotateLocal(offset: Vector3, axis: Vector3, angleInRadians: number, duration: number, callback: () => void): Tweener;
        rotate(origin: Vector3, origGlobal: boolean, axis: Vector3, axisGlobal: boolean, radians: number, time: number): Tweener;
        rotate(origin: Vector3, origGlobal: boolean, axis: Vector3, axisGlobal: boolean, radians: number, time: number, callback: () => void): Tweener;
        turn(r: number, angle: number, time: number, clockwise: boolean): void;
        turn(r: number, angle: number, time: number, clockwise: boolean, callback: () => void): void;
        readonly velocity: Vector3;
        /**
         *Stops all `Tweener` on this item.
         *
         *See `Tweener`
         */
        stop(): void;
        /**
         *Rotates this item around its pivot.
         *
         *@deprecated Use `rotateLocal` in `BaseItem.transition` instead.
         *
         *@param axis rotation direction.
         *
         *@param angle angle in radians.
         *
         *@param time duration of the tween.
         *
         *@return rotation `Tweener`
         */
        rotateLocalAroundOrigin(axis: Vector3, angle: number, time: number): Tweener;
        /**
         *Rotates this item around its pivot.
         *
         *@deprecated Use
         * `BaseItem.transition.rotateLocal` instead.
         *
         *@param axis rotation direction.
         *
         *@param angle angle in radians.
         *
         *@param time duration of the tween.
         *
         *@param callback function to call on finish.
         *
         *@return rotation `Tweener`
         */
        rotateLocalAroundOrigin(axis: Vector3, angle: number, time: number, callback: () => void): Tweener;
        /**
         *Rotates this item to `rotation` over `duration`.
         *
         *@param rotation new orientation.
         *
         *@param duration duration in seconds.
         *
         *@return created `Tweener`
         */
        rotateLocalTo(rotation: Quat, duration: number): Tweener;
        /**
         *Rotates this item to `rotation` over `duration`.
         *
         *@param rotation target rotation.
         *
         *@param duration duration in seconds.
         *
         *@param callback function to call when `Tweener` finishes.
         *
         *@return created `Tweener`.
         */
        rotateLocalTo(rotation: Quat, duration: number, callback: () => void): Tweener;
    };
    readonly physics: {
        /**
         *Moves this item by an offset from its current position.
         *
         *@param shift offset from current position in world space.
         */
        shiftPosition(shift: Vector3): void;
        /**
         *Returns the world space `position` of the center of mass for this item.
         *
         *@return center of mass.
         */
        position: Vector3;
        /**
         *Moves this item by an `offset` relative to its forward direction.
         *
         *@param offset offset relative to forward direction.
         */
        shiftPositionLocal(offset: Vector3): void;
        /**
         *Returns the world space `velocity` of the item's center of mass.
         *
         *@return `velocity` in world space.
         */
        velocity: Vector3;
        /**
         *Returns the local space `velocity` of the item's center of mass.
         *
         *@return `velocity` in local space.
         *
         *See `BaseItem.parent`
         */
        velocityLocal: Vector3;
        /**
         *Returns world space `angularVelocity` of this item.
         *
         *@return angular velocity in world space.
         */
        angularVelocity: Vector3;
        /**
         *Returns local space `angularVelocity` of this item.
         *
         *@return angular velocity in world space.
         *
         *See `BaseItem.parent`
         */
        angularVelocityLocal: Vector3;
        /**
         *Defines the density of this item.
         *
         * An item with high density has more mass than another item with same volume but less density.
         *
         * _Default density is `1`_.
         *
         *@return item density.
         */
        density: number;
        /**
         *Defines the mass of this item. Items with higher mass more easily push away items with lower mass.
         *
         *@return item mass.
         */
        mass: number;
        modelMass: number;
        modelDensity: number;
        /**
         *Defines `static` state of this item. Static items have **indefinite mass** and can **not be moved** by physics forces.
         *
         *@return static state.
         */
        static: boolean;
        /**
         *Defines continuous collision detection on items.
         * If `true`, collisions on this items are more reliably calculated.
         *
         * **Note**: CCD is broken with current build.
         *
         *@return continuous collision detection state.
         */
        continuousCollisionDetection: boolean;
        /**
         *Defines the collision layer of this item.
         *
         * Items can be placed into one or several of `31` layers. Items only collide if their collision layers match.
         * Setting this item's collision layer to `0` causes collisions to be ignored entirely.
         *
         * By default, items are in collision layer `1`
         *
         *@return collision layer.
         */
        layer: number;
        /**
         *Defines the friction of this item during movement
         * * Value of `0` resembles ice
         * * Value of `1` resembles a surface with high friction, e.g. car tyre.
         *
         *@return item friction.
         */
        friction: number;
        /**
         *Defines the velocity threshold at which this item is allowed to be repulsed
         * by collisions.
         *
         * High values make this item feel _soft_, low values make it feel _solid_.
         *
         *@return item softness.
         */
        softness: number;
        modelFriction: number;
        /**
         *Defines this item's restitution _(bounciness)_.
         * * Restitution of `0` does not cause item to bounce
         * * Restitution of `1`  causes item to bounce at no loss of energy
         *
         *@return item restitution.
         */
        restitution: number;
        modelRestitution: number;
        /**
         *Restricts this item's movement on the defined `axes`.
         *
         *@param axes axes to restrict movement on.
         */
        restrictMovementAxis(axes: {
            readonly x?: boolean;
            readonly y?: boolean;
            readonly z?: boolean;
        }): void;
        /**
         *Restricts this item's rotation to the defined rotation `axes`
         *
         *@param axes axes to restrict movement one.
         */
        restrictRotationAxis(axes: {
            readonly x?: boolean;
            readonly y?: boolean;
            readonly z?: boolean;
        }): void;
        positionCorrection: Vector3;
        /**
         *Toggles this item to be simulated with physics.
         *
         *@return physics simulation state.
         */
        enabled: boolean;
        /**
         *Toggles precise model collisions.
         *
         * If `true`, this item attempts to use pre-defined collision volumes if available.
         * If `false`, this item uses simplified boundary box collision.
         */
        modelPreciseCollision: boolean;
        /**
         *Toggles precise model collisions.
         *
         * If `true`, this item attempts to use pre-defined collision volumes if available.
         * If `false`, this item uses simplified boundary box collision.
         */
        preciseCollision: boolean;
        /**
         *Adds collision filter to target `item` to ignore collisions, even when this item shares the same collision layer.
         *
         *@param item item to add to collision filter
         */
        addToCollisionFilter(item: BaseItem): void;
        /**
         *Removes collision filter from the target `item`.
         *
         *@param item item to remove from collision filter
         */
        removeFromCollisionFilter(item: BaseItem): void;
        /**
         *Causes another item to remain at a fixed `distance` to this item.
         *
         *@param options constraint options.
         *
         *@return created `DistanceConstraint`.
         */
        distanceConstraint(options: {
            readonly other: BaseItem;
            readonly thisLocalAnchor?: Vector3;
            readonly otherLocalAnchor?: Vector3;
            readonly distance: number;
        }): DistanceConstraint;
        /**
         *Creates an attraction force between this item and another.
         *
         *@param options constraint options.
         *
         *@return created `AttractorConstraint`.
         */
        attractorConstraint(options: {
            readonly other: BaseItem;
            readonly strength: number;
            readonly maxRadius: number;
        }): Disposable;
        /**
         *Attaches this item to a fixed position in the `Scene`, causing the item to move as close as possible to the position.
         *
         *@param worldPos point in world space.
         *
         *@return created `PositionConstraint`.
         */
        positionConstraint(worldPos: Vector3): PositionConstraint;
        /**
         *Constraints this item to an orientation, causing it to turn as close as possible to the target orientation.
         *
         *@param quat orientation in world space.
         *
         *@return created `RotationConstraint`.
         */
        rotationConstraint(quat: Quat): RotationConstraint;
        /**
         *Attaches this item to another item.
         *
         * The joint can be configured to use limited rotations and stiffness.
         *
         *@param other other item to connect to.
         *
         *@param worldAnchorPos anchor point in world space.
         *
         *@return created `JointConstraint`
         */
        jointTo(other: BaseItem, worldAnchorPos: Vector3): JointConstraint;
        /**
         *Attaches this item to a hinge.
         *
         * The hinge joint allows this item to rotate around a defined point and axis.
         *
         *@param options constraint options.
         *
         *@return created `HingeJointConstraint`
         */
        hingeJointTo(options: {
            readonly other: BaseItem;
            readonly thisLocalAnchor?: Vector3;
            readonly otherLocalAnchor?: Vector3;
            readonly thisLocalAxis?: Vector3;
            readonly otherLocalAxis?: Vector3;
        }): HingeJointConstraint;
        /**
         *Attaches this item to a motor joint.
         *
         * Motor joints can be rotated to create animated connections.
         *
         *@param options constraint options.
         *
         *@return created `MotorJointConstraint`
         */
        motorJointTo(options: {
            readonly other: BaseItem;
            readonly thisLocalAnchor: Vector3;
            readonly otherLocalAnchor: Vector3;
            readonly thisLocalAxis: Vector3;
            readonly otherLocalAxis: Vector3;
        }): MotorJointConstraint;
        /**
         *Attaches this item to the `Scene` floor.
         *
         *@param worldAnchorPos floor anchor point in world space.
         *
         *@return created `JointConstraint`.
         */
        jointToGround(worldAnchorPos: Vector3): JointConstraint;
        /**
         *Creates a `PlaneConstraint` between this item and an axis, limiting item movement along a global axis.
         *
         *@param worldAxis axis in world space.
         *
         *@return created `PlaneConstraint`.
         */
        planeConstraint(worldAxis: Vector3): PlaneConstraint;
        /**
         *Creates a `SliderConstraint` between this item and an axis, limiting item movement along a global axis.
         *
         *@param worldAxis axis in world space.
         *
         *@return created `SliderConstraint`.
         */
        sliderConstraint(worldAxis: Vector3): SliderConstraint;
        rotationAxisConstraint(localAxis: Vector3): RotationAxisConstraint;
        /**
         *Creates a `GearConstraint` between this item and an axis.
         *
         *@param options constraint options.
         *
         *@return created `GearConstraint`.
         */
        gearConstraint(options: {
            readonly other: BaseItem;
            readonly thisLocalAxis: Vector3;
            readonly otherLocalAxis: Vector3;
            readonly ratio?: number;
        }): GearConstraint;
        /**
         *Creates a `CurveHandlerConstraint` between this item and a path.
         *
         *@return created `CurveHandlerConstraint`.
         */
        curveHandlerConstraint(curveHandler: (x: number, y: number, z: number) => Vector3, curveRadius: number, bodyRadius: number): CurveConstraint;
        /**
         *Creates a `CurveConstraint` between this item and a `PathItem`, limiting item movement along the `PathItem`.
         *
         *@param curve `PathItem` to use as constraint.
         *
         *@param bodyRadius simulated body radius of item.
         *
         *@param curveRadius radius modifier of `PathItem`.
         *
         *@return created `CurveConstraint`.
         */
        curveConstraint(curve: PathItem, curveRadius: number, bodyRadius: number): CurveConstraint;
        /**
         *Remove all constraints from this item.
         */
        removeFromConstraints(): void;
        /**
         *Pushes this item with the defined `impulse` for this frame.
         *
         *@param self
         *
         *@param origin origin of the impulse in world space.
         *
         *@param impulse direction &amp; force of the impulse.
         */
        applyImpulse(origin: Vector3, impulse: Vector3): void;
        /**
         *Pushes this item with the defined `impulse` relative to its forward direction for this frame.
         *
         *@param localOrigin origin of the impulse relative to item forward direction.
         *
         *@param impulse direction &amp; force of the impulse.
         */
        applyImpulseLocal(localOrigin: Vector3, impulse: Vector3): void;
        /**
         *Applies constant directional `force` to this item each frame.
         *
         *@param force world space force to apply.
         */
        applyForce(force: Vector3): void;
        /**
         *Defines directional `force` that is applied on this item each frame.
         *
         *@return item force in world space.
         */
        force: Vector3;
        /**
         *Handles the start of a physics collision between this item and another item.
         *
         * _To remove the handler, pass `null` for `handler`._
         *
         *@param handler passes `BaseItem` which this item collides against.
         */
        onCollisionEnter(handler: (t: BaseItem) => void): void;
        /**
         *Handles the end of a physics collision between this item and another item.
         *
         * _To remove the handler, pass `null` for `handler`._
         *
         *@param handler passes item which this item collided against.
         */
        onCollisionExit(handler: (t: BaseItem) => void): void;
        /**
         *@return `true` if item is in a physics group.
         */
        readonly isInGroup: boolean;
        readonly group: {
            /**
             *Returns the world space `position` of the center of mass for this group.
             *
             *@return center of mass.
             */
            position: Vector3;
            /**
             *Moves this group by an `offset` from its current position.
             *
             *@param offset offset from current position in world space.
             */
            shiftPosition(offset: Vector3): void;
            /**
             *Moves this group by an offset relative to its forward direction.
             *
             *@param offset offset relative to forward direction.
             */
            shiftPositionLocal(offset: Vector3): void;
            /**
             *Returns the world space `velocity` of the group's center of mass.
             *
             *@return `velocity` in world space.
             */
            velocityLocal: Vector3;
            /**
             *Returns world space `angularVelocity` of this group.
             *
             *@return angular velocity in world space.
             */
            angularVelocityLocal: Vector3;
            /**
             *Defines the density of this group.
             *
             * An item with high density has more `mass` than another item with same size but less density.
             *
             * _Default density is `1`_.
             *
             *@return item density.
             */
            density: number;
            /**
             *Defines the mass of this group. Items with higher mass more easily push away items with lower mass.
             *
             *@return group mass.
             */
            mass: number;
            /**
             *Defines `static` state of this item. Static items have **indefinite mass** and can **not be moved** by physics forces.
             *
             *@return static state.
             */
            static: boolean;
            layer: number;
            /**
             *Defines the friction of this group
             * * Value of `0` resembles ice
             * * Value of `1` resembles surface with high resistance
             *
             *@param friction item friction.
             */
            setFriction(friction: number): void;
            setRestitution(restitution: number): void;
            /**
             *Defines directional `force` that is applied on this group each frame.
             *
             *@return group force in world space.
             */
            force: Vector3;
        };
    };
    readonly bounds: {
        /**
         *Center of the box.
         */
        readonly center: Vector3;
        /**
         *Extents of box. Always half the size of the bounds.
         */
        readonly extents: Vector3;
        /**
         *Total size of the box in world-space.
         * Size.x is the width, size.y is the depth and size.z is the height of the box
         */
        readonly size: Vector3;
        /**
         *Scales the item to fit into the defined bounds volume. Scaling is uniform.
         *
         *@param boundsVolume - `x` is the width, `y` is the depth and `z` is the height of the box
         */
        fitIn(boundsVolume: Vector3): void;
        /**
         *Returns true if point is within bounding box.
         *
         *@param point - Point to check in world-space.
         */
        contains(point: Vector3): boolean;
        /**
         *Aligns these `Bounds` to those of another item.
         * * `center` - Center of these `Bounds` is the same as center bounds of `other`.
         * * `bottom` - Bottom of these `Bounds` touch the bottom bounds of `other`.
         * * `top` - Top of these `Bounds` touch the top of top bounds of `other`.
         */
        alignTo(other: BaseItem, alignment: "center" | "top" | "bottom"): void;
    };
    /** @deprecated */ getPosition(): Vector3;
    /** @deprecated */ getAxisX(): Vector3;
    /** @deprecated */ getAxisY(): Vector3;
    /** @deprecated */ readonly axisY: Vector3;
    /** @deprecated */ getAxisZ(): Vector3;
    /** @deprecated */ readonly axisZ: Vector3;
    /** @deprecated */ readonly orientationQuat: Quat;
    /** @deprecated */ distanceToItem(other: BaseItem): number;
    /** @deprecated */ distanceToPoint(x: number, y: number, z: number): number;
    /** @deprecated */ distanceToPoint(point: Vector3): number;
}
declare class DirLightItem extends LightItem {
    shadowMapWidth: number;
}
/**
 *Namespace for creating colors via RGB and HEX properties.
 *
 * **Note:** RGB and HEX values can be retrieved from [various color picking tools](https://htmlcolorcodes.com/).
 *
 * This namespace contains various pre-defined colors as shorthand definitions.
 */
declare class Color {
    constructor(red: number, green: number, blue: number);
    constructor(hex: string);
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    withAlpha(): ColorWithAlpha;
    withAlpha(alpha: number): ColorWithAlpha;
    equals(other: Color): boolean;
    static readonly white: Color;
    static readonly black: Color;
    static readonly darkGray: Color;
    static readonly gray: Color;
    static readonly lightGray: Color;
    static readonly veryLightGray: Color;
    static readonly skyBlue: Color;
    static readonly skyBlueLight: Color;
    static readonly cyan: Color;
    static readonly red: Color;
    static readonly darkRed: Color;
    static readonly veryDarkRed: Color;
    static readonly deepRed: Color;
    static readonly orange: Color;
    static readonly darkGreen: Color;
    static readonly veryDarkGreen: Color;
    static readonly green: Color;
    static readonly lightGreen: Color;
    static readonly blue: Color;
    static readonly yellow: Color;
    static readonly golden: Color;
    static readonly lightBlue: Color;
    static readonly deepBlue: Color;
    static readonly darkBlue: Color;
    static readonly lightPink: Color;
    static random(): Color;
    /**
     *Creates a new `Color` from `HSV` color model.
     *
     *@param hue hue value of this `Color`. Range is `[0,1]`
     *
     *@param saturation saturation value of this `Color`. Range is `[0,1]`
     *
     *@param value brightness value of this `Color`. Range is `[0,1]`
     */
    static fromHSV(hue: number, saturation: number, value: number): Color;
}
declare class FractalItem extends GameItem {
    setGrowth(growth: number): void;
    setOrder(order: number): void;
    setTextureType(ts_type: number): void;
    setType(ts_type: number): void;
    setSeed(seed: number): void;
    setColorType(colorType: number): void;
    setLimbsColor(red: number, green: number, blue: number): void;
    setLeafsColor(red: number, green: number, blue: number): void;
}
declare class Marker implements PositionService {
    useForCamera: boolean;
    readonly transform: ReadonlyTransform;
    readonly tracked: boolean;
    onPositionChanged(handler: () => void): void;
    onTrackingStateChanged(handler: (t: boolean) => void): void;
    attachToItem(item: BaseItem): void;
    itemsAlwaysVisible: boolean;
    /** @deprecated */ getPosition(): Vector3;
    /** @deprecated */ readonly position: Vector3;
    /** @deprecated */ getAxisX(): Vector3;
    /** @deprecated */ getAxisY(): Vector3;
    /** @deprecated */ readonly axisY: Vector3;
    /** @deprecated */ getAxisZ(): Vector3;
    /** @deprecated */ readonly axisZ: Vector3;
    /** @deprecated */ readonly orientationQuat: Quat;
    /** @deprecated */ distanceToItem(other: BaseItem): number;
    /** @deprecated */ distanceToPoint(x: number, y: number, z: number): number;
    /** @deprecated */ distanceToPoint(point: Vector3): number;
}
/**
 *The visual representation of a `Space`.
 *
 * `Scene` methods allow you to
 * * Create items
 * * Create `Scene` properties
 * * Access existing items in the `Scene`
 *
 *See `Space`
 *
 *See `Scene.createItem`
 */
declare namespace Scene {
    /**
     *Finds an item by its `id` or `name`.
     *
     *@param id `name` or `id` to search for.
     *
     *@return found item. Returns `null` if none is found.
     *
     *See `BaseItem.name`
     *
     *See `BaseItem.id`
     */
    function getItem(id: string): BaseItem;
    function getItemSafe(id: string, name: string, errorMessage: string): BaseItem;
    function getItemSafeByName(name: string, errorMessage: string): BaseItem;
    function createDebugCube(errorMessage: string, name: string, posX: number, posY: number, posZ: number): Cuboid;
    /**
     *@return all items in this `Scene`.
     */
    function getItems(): Array<BaseItem>;
    /**
     *### Only for internal development
     *
     *@return observable list of items.
     *
     *See `ObservableList`
     */
    const items: ObservableList<BaseItem>;
    /**
     *Returns all items with matching `tag`.
     *
     *@param tag tag to find in item.
     *
     *@return items with `tag`.
     *
     *See `BaseItem.addTag`
     */
    function getItemsWithTag(tag: string): Array<BaseItem>;
    /**
     *Creates a new `BaseItem` in this `Scene`.
     *
     *  You can use `modelId` from CDN or from the `Model3dAsset` uploaded to the `Space`.
     * Items created with this method do **not** have textures assigned.
     *
     *@param modelId unique model id.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created item.
     */
    function createItem(modelId: string, posX: number, posY: number, posZ: number): BaseItem;
    /**
     *Creates a new `BaseItem` in this `Scene`.
     *
     *  You can use `modelId` from CDN or from the `Model3dAsset` uploaded to the `Space`.
     * Items created with this method do **not** have textures assigned.
     *
     *@param modelId unique model id.
     *
     *@param pos initial position in world space.
     *
     *@return created item.
     */
    function createItem(modelId: string, pos: Vector3): BaseItem;
    /**
     *Creates a new `BaseItem` in this `Scene`, using its `slot` as pivot for positioning.
     *
     * **Note:** Method will be deprecated. Use `Scene.createItem`.
     *
     *@param modelId unique model id.
     *
     *@param pos initial position in world space.
     *
     *@param slot slot to use as pivot for placement.
     *
     *@return created item.
     */
    function createItem(modelId: string, pos: Vector3, slot: string): BaseItem;
    function createItem(modelId: string, posX: number, posY: number, posZ: number, slot: string): BaseItem;
    /**
     *Creates a new `Cuboid` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created `Cuboid`.
     */
    function createCuboid(posX: number, posY: number, posZ: number): Cuboid;
    /**
     *Creates a new `Cuboid` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@return created `Cuboid`.
     */
    function createCuboid(pos: Vector3): Cuboid;
    /**
     *Creates a new `Ellipsoid` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created `Ellipsoid`.
     */
    function createEllipsoid(posX: number, posY: number, posZ: number): Ellipsoid;
    /**
     *Creates a new `Ellipsoid` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@return crated `Ellipsoid`.
     */
    function createEllipsoid(pos: Vector3): Ellipsoid;
    /**
     *Creates a new `Capsule` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created `Capsule`.
     */
    function createCapsule(posX: number, posY: number, posZ: number): Capsule;
    /**
     *Creates a new `Capsule` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@return created `Capsule`.
     */
    function createCapsule(pos: Vector3): Capsule;
    /**
     *Creates a new `HemiEllipsoid` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created `HemiEllipsoid`.
     */
    function createHemiellipsoid(posX: number, posY: number, posZ: number): HemiEllipsoid;
    /**
     *Creates a new `HemiEllipsoid` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@return created `HemiEllipsoid`.
     */
    function createHemiellipsoid(pos: Vector3): HemiEllipsoid;
    /**
     *Creates a new `Torus` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created `Torus`.
     */
    function createTorus(posX: number, posY: number, posZ: number): Torus;
    /**
     *Creates a new `Torus` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@return created `Torus`.
     */
    function createTorus(pos: Vector3): Torus;
    /**
     *Creates a new `SemiTorus` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created `SemiTorus`.
     */
    function createSemiTorus(posX: number, posY: number, posZ: number): AnisotropicItem;
    /**
     *Creates a new `SemiTorus` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@return created `SemiTorus`.
     */
    function createSemiTorus(pos: Vector3): AnisotropicItem;
    /**
     *Creates a new `CameraItem` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@return created `CameraItem`.
     */
    function createCamera(pos: Vector3): CameraItem;
    /**
     *Creates a new `ParticleItem` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return created `ParticleItem`.
     */
    function createParticleSystem(posX: number, posY: number, posZ: number, data: string): ParticleItem;
    function createGroup(): Group;
    function createCustomItem(): CustomItem;
    function createChart(posX: number, posY: number, posZ: number, ax: number, ay: number, bx: number, by: number): ChartItem;
    function createEllipsePath(center: Vector3, r0: number, r1: number, n: number): PathItem;
    function createSplineFromArray(x: Array<number>, y: Array<number>, z: Array<number>, ts_type: "POLYLINE" | "SPLINE"): PathItem;
    function createFunction3D(ts_function: (t: number) => Vector3, t0: number, t1: number, div: number, ts_type: "POLYLINE" | "SPLINE"): PathItem;
    function createPathItem(): PathItem;
    function createPathFromSerializedPQS(s: string): PathItem;
    function createFlatLineItem(): FlatLineItem;
    function createFunction3D(ts_function: (t: number) => Vector3, t0: number, t1: number, div: number): PathItem;
    function createLakeItem(): LakeItem;
    function createExtrudeItem(): ExtrudeItem;
    function createExtrudeItem(w: number, h: number, l: number): ExtrudeItem;
    function createExtrudeItem(ax: number, ay: number, bx: number, by: number, h: number): ExtrudeItem;
    function createText3DItem(): Text3DItem;
    function createRoadItem(): RoadItem;
    function createVector(pos: Vector3, dir: Vector3): ServiceItem;
    function createPoint(pos: Vector3): ServiceItem;
    function createBasis(pos: Vector3): VectorItem;
    function createMengerSponge4Item(pos: Vector3): MengerSponge4Item;
    function createFractalItem(pos: Vector3): FractalItem;
    function createFoliageItem(): FoliageItem;
    function createImageItem(imageId: string, posX: number, posY: number, posZ: number): ImageItem;
    function createImageItem(imageId: string, pos: Vector3): ImageItem;
    /**
     *Creates a new _TextBillboard_ in this `Scene`.
     *
     * The _TextBillboard_ is a combination of a parent `Cuboid` with child `TextItem`
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@return the parent `Cuboid`.
     *
     *@deprecated
     */
    function createTextBillboard(posX: number, posY: number, posZ: number): Cuboid;
    /**
     *Creates a new _TextBillboard_ in this `Scene`.
     *
     * The _TextBillboard_ is a combination of a parent `Cuboid` with child `TextItem`
     *
     *@param pos position in world space.
     *
     *@return the parent `Cuboid`.
     */
    function createTextBillboard(pos: Vector3): Cuboid;
    function createVideoItem(imageId: string, posX: number, posY: number, posZ: number): VideoItem;
    function createVideoItem(imageId: string, pos: Vector3): VideoItem;
    /**
     *Creates a `TextItem` in this `Scene`.
     *
     *@param posX x position in world space.
     *
     *@param posY y position in world space.
     *
     *@param posZ z position in world space.
     *
     *@param text label to display.
     *
     *@return created `TextItem`.
     *
     *@deprecated
     */
    function createText(posX: number, posY: number, posZ: number, text: string): TextItem;
    /**
     *Creates a `TextItem` in this `Scene`.
     *
     *@param pos position in world space.
     *
     *@param text label to display.
     *
     *@return created `TextItem`.
     */
    function createText(pos: Vector3, text: string): TextItem;
    function createPathTail(): PathTail;
    function removeAllPathTails(): void;
    function addDashedCircle(basisId: string, red: number, green: number, blue: number, alpha: number, n: number, p: number, rx: number, ry: number): boolean;
    function removeAllDashedCircles(): void;
    const defaultTailThickness: number;
    function createCirclePath(center: Vector3, r: number, n: number): PathItem;
    function createCirclePath(center: Vector3, r: number): PathItem;
    function createRoundedRectPath(w: number, h: number, r: number): PathItem;
    function createSpiralSpline(center: Vector3, r: number, alpha: number, dr: number, div: number, n: number): PathItem;
    /** @deprecated */ function copyItem(item: BaseItem): BaseItem;
    /** @deprecated */ function setPhysicsGravity(g: number): void;
    /** @deprecated */ function setPhysicsDT(dt: number): void;
    /** @deprecated */ function addItemsToPhysics(): void;
    /**
     *Sets a custom property to this object.
     *
     * _Properties are saved as `strings`._
     *
     *@param key property name.
     *
     *@param value property value.
     */
    function setProperty(key: string, value: any): void;
    /**
     *Gets a custom property from this object. Returns `null` if the property can not be found.
     *
     *@param key name of property to search.
     */
    function getProperty(key: string): string;
    /**
     *Handles property value changes in this object.
     *
     *@param id property to listen to.
     *
     *@param handler function that's called when property value is changed.
     */
    function onPropertyChanged(id: string, handler: (t: string) => void): void;
    /**
     *Defines the area in which `BaseItem` and `Camera` can be moved in this `Scene`.
     */
    let size: number;
    /**
     *Defines if terrain is visible or not.
     */
    let terrainVisible: boolean;
    /**
     *### Only for internal development
     *
     * The synchronized model of this `Scene` provided by DX Engine. Allows adding custom synchronized properties on this item to be used in persistent `Activities`.
     *
     *@return Model of this `Scene`.
     *
     *See `Model`
     */
    const model: Model;
    function startTransaction(): void;
    function commitTransaction(): void;
    /**
     *@deprecated Use `Time.schedule` instead.
     */
    function schedule(func: () => void, delay: number): Disposable;
    /**
     *@deprecated Use `Time.scheduleRepeating` instead.
     */
    function scheduleRepeating(func: () => void, period: number): Disposable;
    /**
     *@deprecated Use `Time.currentTime` property instead.
     */
    function currentTime(): number;
    /** @deprecated */ function currentPhysicsTime(): number;
    /** @deprecated */ function onButtonDown(handler: () => void): void;
    /** @deprecated */ function onButtonDown(handler: () => void, buttonString: string): void;
    /** @deprecated */ function onButtonUp(handler: () => void): void;
    /** @deprecated */ function onButtonUp(handler: () => void, buttonString: string): void;
    /** @deprecated */ function onButtonPressed(handler: () => void): void;
    /** @deprecated */ function onButtonPressed(handler: () => void, buttonString: string): void;
    /** @deprecated */ function onExternalCommand(callback: (data: any, origin: string, source: any) => void): void;
    /**
     *@deprecated Use `Sound.load` instead.
     */
    function loadSound(s: string): Sound;
    /**
     *@deprecated Use `Sound.load` instead.
     */
    function loadSound(s: string, callback: (t: Sound) => void): void;
    /**
     *@deprecated
     * Use `Renderer.renderShadows` property instead.
     */
    function renderShadows(b: boolean): void;
    /** @deprecated */ function clear(): void;
    /**
     *Deletes all items in this `Scene`.
     */
    function deleteItems(): void;
    /** @deprecated */ function setFadeObjectToCamera(b: boolean): void;
    /**
     *@deprecated Use `Application.onSceneExit` instead.
     */
    function onExit(onExit: () => void): void;
    /**
     *@return index of this `Scene`.
     */
    const index: number;
    /**
     *@return name of this `Scene`.
     */
    const name: string;
    class Element {
        onLayout(handler: (pos: Vector2, size: Vector2) => void): Disposable;
        onPressDown(handler: (t: Vector2) => void): Disposable;
        onPressUp(handler: (t: Vector2) => void): Disposable;
        onClick(handler: () => void): Disposable;
        onHide(handler: () => void): Disposable;
    }
    namespace Editor {
        /**
         *Currently selected item. Items can only be selected in `BuildMode` or `ActivityMode`.
         *
         *@return selected item.
         */
        let selectedItem: BaseItem;
        /**
         *Returns the currently selected items.
         *
         * **Note:** Items can only be selected in `BuildMode` or `ActivityMode`.
         *
         *@return list of selected items.
         */
        const selectedItems: SelectedItems;
        /**
         *Defines the currently active item editing mode
         * - `default`: Anisotropic size control gizmos are shown, if available, otherwise no gizmos are displayed
         * - `rotation`: Rotation gizmos are shown
         * - `translation`: Translation gizmos are shown
         */
        let itemEditMode: "default" | "rotation" | "translation";
        /**
         *Defines the currently active item origin mode for scaling
         * - `bottom`: Item is scaled from the bottom of the world space bounding box
         * - `center`: Item is scaled from the center of the world space bounding box
         * - `pivot`: Item is scaled from the pivot
         */
        let originMode: "bottom" | "pivot" | "center";
        function openItemInspector(): void;
        function closeItemInspector(): void;
        function onElementAdded(tag: string, handler: (t: Scene.Element) => void): Disposable;
        function findElement(tag: string): Scene.Element;
        function getLayer(layer: "scene" | "main" | "toolbar" | "inspector" | "ui" | "script" | "dialog" | "captions" | "popup"): GUI.Parent;
    }
}
interface Utterance {
    setVoice(voice: Voice): void;
    setRate(rate: number): void;
    rate(): number;
}
declare class Joystick {
    onButtonChanged(handler: () => void): void;
    onButtonDown(handler: () => void): void;
    onButtonUp(handler: () => void): void;
    onButtonPressed(handler: () => void): void;
    readonly position: Vector2;
}
declare class UnitItem extends GameItem {
}
declare class CurveConstraint extends Constraint {
    /** @deprecated */ setFriction(f: number): void;
    friction: number;
}
declare class Video {
    /**
     *Starts video playback.
     *
     * _**Note:** Video content is streamed._
     */
    play(): void;
    /**
     *Pauses video playback.
     *
     * Video resumes at the same track position with next `play` call.
     */
    pause(): void;
    /**
     *Stops video.
     *
     * Video starts from the beginning with new `play` call.
     */
    stop(): void;
    /**
     *Toggles video looping. If `true`, video playback starts from start when end is reached.
     *
     *@return video looping state.
     */
    looping: boolean;
    /**
     *@return `true` if video is playing.
     */
    readonly playing: boolean;
    /**
     *Defines normalized `volume` of this video. Value is clamped to range `[0,1]`
     *
     *@return volume of video.
     */
    volume: number;
    /**
     *Defines the track position of this video.
     *
     *@return current track position in this video.
     */
    currentPosition: number;
    /**
     *@return duration of the video in `seconds`.
     */
    readonly duration: number;
    /**
     *Handles the loading event for this video.
     *
     *@param handler function to call when video has loaded _(and can be played)_.
     */
    onLoaded(handler: () => void): Disposable;
}
declare class PhongItem extends FigureItem {
}
declare class SpotLightItem extends LightItem {
    fov: number;
    radius: number;
}
/**
 *Namespace for (debug-) rendering related method and properties.
 */
declare namespace Renderer {
    let fadeObjectToCamera: boolean;
    /**
     *Toggles visibility of item pivots that represent the 3D model orientation.
     */
    let itemPivotsVisible: boolean;
    let boundsCapsulesVisible: boolean;
    let debugTriangles: boolean;
    /**
     *Toggles visibility of bounding boxes.
     */
    let boundsVisible: boolean;
    /**
     *Toggles visibility of collision volumes.
     *
     * **Note**: Unless set-up by a 3D artist prior to upload, custom 3D models use the bounding box as collision volume.
     */
    let collisionVolumesVisible: boolean;
    let renderCollisionPoints: boolean;
    let renderJoints: boolean;
    let renderLightItems: boolean;
    let renderLineLabels: boolean;
    let renderShadows: boolean;
    let slot: string;
    let renderSoftParticles: boolean;
    let renderBoundingBoxesExt: boolean;
    let renderPathCurves: boolean;
    let renderNearestPoints: boolean;
    namespace PostProcessing {
        let highlightGlowInnerColor: Color;
        let highlightGlowOuterColor: Color;
        let highlightGlowIntensity: number;
        let highlightGlowWidth: number;
        let bloom: boolean;
        let bloomIntensity: number;
        let bloomThreshold: number;
        let bloomRadius: number;
        let bloomSmoothStepWidth: number;
    }
}
declare class RotationAxisConstraint extends Constraint {
}
declare class CustomItem extends BaseItem {
}
declare class HingeJointConstraint extends Constraint {
    getPosition(): Vector3;
    readonly position: Vector3;
    localAnchor1: Vector3;
    localAnchor2: Vector3;
    localAxis1: Vector3;
    localAxis2: Vector3;
    setLocalAnchor1(x: number, y: number, z: number): void;
    setLocalAnchor2(x: number, y: number, z: number): void;
    setLocalAxis1(x: number, y: number, z: number): void;
    setLocalAxis2(x: number, y: number, z: number): void;
    getAngle(): number;
    readonly angle: number;
    getLocalAnchor1(): Vector3;
    getLocalAnchor2(): Vector3;
    getLocalAxis1(): Vector3;
    getLocalAxis2(): Vector3;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
declare class PositionConstraint extends Constraint {
    desiredPosition: Vector3;
    readonly unit: BaseItem;
    localAnchor: Vector3;
}
declare class Torus extends TorusItemBase {
}
declare class AnimationCategory {
    readonly name: string;
    readonly tracks: Array<string>;
}
declare class DistanceConstraint extends Constraint {
    updateLocalPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    updateDistance(dist: number): void;
    getDistance(): number;
    readonly distance: number;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
/**
 *Namespace for managing script execution and engine time.
 *
 * `Time` methods and properties allow you to
 * * Set up functions that are called every frame or in repeating intervals
 * * Delay script execution
 * * Get engine time data
 *
 *See `Time.scheduleRepeating`
 *
 *See `Time.schedule`
 */
declare namespace Time {
    /**
     *Executes a function after a `delay`.
     *
     *@param func function to execute after delay.
     *
     *@param delay delay in seconds.
     */
    function schedule(func: () => void, delay: number): Disposable;
    /**
     *Repeats execution of a function every `period`.
     *
     * **Example**
     * `
     * ```
     * //Creates an ellipsoid which says the time that passed since start every second
     * const myEllipsoid = Scene.createEllipsoid(0, 0, 0)
     * Time.scheduleRepeating(() => {
     *     myEllipsoid.speech = `${Time.currentTime.toFixed(2)} seconds have passed.`
     * }, 1)
     * ```
     * `
     *
     *@param func function to execute repeatedly.
     *
     *@param period period in seconds. Default is `0`, causing script to be repeated every frame.
     */
    function scheduleRepeating(func: (deltaTime: number) => void, period: number): Disposable;
    /**
     *Repeats execution of a function every frame.
     *
     * **Example**
     * `
     * ```
     * //Creates an ellipsoid which says the time that passed since start every frame
     * const myEllipsoid = Scene.createEllipsoid(0, 0, 0)
     * Time.scheduleRepeating(() => {
     *     myEllipsoid.speech = `${Time.currentTime.toFixed(2)} seconds have passed.`
     * })
     *
     * //Creates a cuboid which moves at a constant speed independent of device performance
     * const myCuboid = Scene.createCuboid(0, 0, 0)
     * let speed = 0.1
     * Time.scheduleRepeating(deltaTime => {
     *     let currentPosition = myCuboid.transform.position
     *     myCuboid.transform.position = currentPosition.add(Vector3.axisX.mult(speed * deltaTime))
     * })
     * ```
     * `
     *
     *@param func function to execute every frame.
     */
    function scheduleRepeating(func: (deltaTime: number) => void): Disposable;
    /**
     *Executes a function after a `delay` using `Physics` time.
     *
     *@param func function to execute after delay.
     *
     *@param delay delay in seconds.
     */
    function schedulePhysics(func: () => void, delay: number): Disposable;
    /**
     *Repeats execution of a function in `period` interval using `Physics` time.
     *
     *@param func function to execute repeatedly.
     *
     *@param period interval in seconds. Default is `0`.
     */
    function scheduleRepeatingPhysics(func: (deltaTime: number) => void, period: number): Disposable;
    /**
     *Repeats execution of a function in `period` interval using `Physics` time.
     *
     *@param func function to execute repeatedly.
     */
    function scheduleRepeatingPhysics(func: (deltaTime: number) => void): Disposable;
    /**
     *@return time _(in seconds)_ that passed since start.
     */
    const currentTime: number;
    /**
     *@return time _(in seconds, using `Physics` time)_ that passed since start.
     */
    const currentPhysicsTime: number;
    /**
     *DX engine time modifier which affects
     * * `Tweener` duration
     * * `AnimatedItem` animation speed
     * * `Time` calculations
     *
     *@return current engine time scale.
     */
    let timeScale: number;
    /**
     *Delays execution of code by returning a promise which resolves in `time` seconds. Used with async/await keywords.
     *
     * **Example:**
     * `
     * ```
     * async function myFunction(){
     *      //doSomething
     *      await Time.delay(1); // wait for a second
     *      //doAnotherThing
     * }
     * ```
     * `
     * For more information see [ES6 Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).
     *
     *@param time delay in seconds.
     */
    function delay(time: number): Promise<void>;
}
declare class DrawingItem extends RenderOrderItem {
    /** @deprecated */ setSize(x: number, y: number): void;
    /**
     *`Vector2` size of this item.
     *
     *  The size defined in this property is multiplied by `Transform` scale.
     *
     *@return size _(width `X`, height `Y`)_ of this item
     */
    size: Vector2;
}
declare class ExtrudeItem extends Vertices2DItem {
    rebuildHoles(): void;
    /** @deprecated */ getHeight(): number;
    height: number;
    /** @deprecated */ setHeight(value: number): void;
}
declare class AnimationMask {
    static readonly leftArm: Iterable<string>;
    static readonly rightArm: Iterable<string>;
    static readonly arms: Iterable<string>;
    static readonly leftLeg: Iterable<string>;
    static readonly rightLeg: Iterable<string>;
    static readonly legs: Iterable<string>;
    static readonly head: Iterable<string>;
    static readonly body: Iterable<string>;
    static readonly upperBody: Iterable<string>;
    static readonly lowerBody: Iterable<string>;
}
declare class PlaneConstraint extends Constraint {
}
declare class ColorWithAlpha extends Color {
    constructor(red: number, green: number, blue: number, alpha: number);
    constructor(hex: string);
    readonly alpha: number;
}
/**
 *Billboard-item that displays videos on a flat plane.
 *
 * **Note:** This item uses a billboard pivot orientation that differs from other `BaseItem`.
 *
 */
declare class VideoItem extends MediaItem {
    /**
     *Starts video playback.
     *
     * _**Note:** Video content is streamed._
     */
    play(): void;
    /**
     *Pauses video playback. Video resumes at the same track position with next `play` call.
     */
    pause(): void;
    /**
     *Stops video.
     *
     * Video starts from the beginning with next `play` call.
     */
    stop(): void;
    /**
     *Toggles video looping. If `true`, the video repeats indefinitely.
     */
    looping: boolean;
    /**
     *@return `true` if video is playing.
     */
    readonly playing: boolean;
    /**
     *Defines the normalized `volume` of this video. Value is clamped to range `[0,1]`
     *
     *@return volume of video.
     */
    volume: number;
    /**
     *Defines the track position of this video.
     */
    currentPosition: number;
    /**
     *@return duration of the video in `seconds`.
     */
    readonly duration: number;
    /**
     *Defines the video asset `id` used in this item.
     */
    videoId: string;
}
declare class VectorItem extends ServiceItem {
    orient(dirX: number, dirY: number, dirZ: number): void;
}
/**
 *The `Cylinder` is a modifiable item which can be adjusted in
 * `height`, local x-axis `radius`, and local y-axis `radius`.
 *
 * **Note:** `Cuboid` property adjustments are applied _symmetrically_.
 */
declare class Cylinder extends AnisotropicItem {
    /** @deprecated */ setSize(radiusX: number, radiusY: number, height: number): void;
    /**
     *Defines the local x-axis radius of this `Cylinder`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setRadiusX(radiusX: number): void;
    /**
     *Defines the local x-axis radius of this `Cylinder`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    radiusX: number;
    /**
     *Defines the local y-axis radius of this `Cylinder`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setRadiusY(radiusY: number): void;
    /**
     *Defines the local y-axis radius of this `Cylinder`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    radiusY: number;
    /**
     *Defines the `height` of this `Cylinder`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setHeight(height: number): void;
    /**
     *Defines the `height` of this `Cylinder`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    height: number;
}
declare namespace Battle {
    let isBattle: boolean;
    const firstPlayer: Battle.Player;
    const secondPlayer: Battle.Player;
    function randomInt(): number;
    function randomInt(lower: number, upper: number): number;
    function end(): void;
    function onStart(callback: () => void): Disposable;
    function setDefaultAI(defaultAI: (t: any) => void): void;
    class Player {
        readonly name: string;
        readonly kind: "first" | "second";
        load(environment: any): void;
        score: number;
    }
}
declare class Ellipsoid extends EllipsoidItemBase {
}
declare class SelectedItems implements MutableList<BaseItem> {
    onChanged(handler: (t: Array<BaseItem>, u: Array<BaseItem>) => void): void;
    onSingleSelectionChanged(handler: (t: BaseItem, u: BaseItem) => void): void;
    [key: number]: BaseItem;
    add(e: BaseItem): void;
    add(index: number, e: BaseItem): void;
    removeAt(index: number): BaseItem;
    remove(e: BaseItem): boolean;
    clear(): void;
    readonly length: number;
    readonly empty: boolean;
    indexOf(e: BaseItem): number;
    lastIndexOf(e: BaseItem): number;
    contains(e: BaseItem): boolean;
    toArray(): Array<BaseItem>;
    copy(): MutableList<BaseItem>;
    [Symbol.iterator](): Iterator<BaseItem>;
}
declare class FigureItem extends UnitItem {
    phongParameters: __PhongParameters;
    readonly modelId: string;
    masking: boolean;
}
interface ReadableProperty<T> {
    readonly value: T;
    onValueChanged(handler: (t: T) => void): Disposable;
}
declare class RenderOrderItem extends UnitItem {
}
interface MutableList<T> extends List<T> {
    [key: number]: T;
    add(e: T): void;
    add(index: number, e: T): void;
    removeAt(index: number): T;
    remove(e: T): boolean;
    clear(): void;
    readonly length: number;
    readonly empty: boolean;
    indexOf(e: T): number;
    lastIndexOf(e: T): number;
    contains(e: T): boolean;
    toArray(): Array<T>;
    copy(): MutableList<T>;
    [Symbol.iterator](): Iterator<T>;
}
/**
 *Assets are files uploaded to `Space`.
 * Assets are managed in `Data`.
 *
 * DX Engine supports the following asset types
 * * `Images`
 * * `Videos`
 * * `Sounds`
 * * `3D models`
 *
 *See `Data`
 */
declare class Asset {
    /**
     *@return unique id of this asset.
     */
    readonly id: string;
    /**
     *@return original name of this asset derived from uploaded file.
     */
    name: string;
}
/**
 *Namespace for all 2D graphics elements in DX Engine.
 *
 * `GUI` methods all you to
 * * Control visibility of native UI elements
 * * Create and modify custom views
 * * Access device screen properties and events
 * * Create custom GUI elements via `GUI.Context`
 */
declare namespace GUI {
    /**
     *Returns the screen `Context` of this device.
     */
    const screen: GUI.Context;
    /** @deprecated */ function createButton(options: GUI.ButtonOptions): GUI.Button;
    /** @deprecated */ const screenSize: Vector2;
    function showWebPopup(options: {
        readonly url: string;
        readonly title: string;
        readonly confirmLabel?: string;
        readonly onClose?: () => void;
    }): Disposable;
    /**
     *Adds an additional option in the `help` button dropdown.
     *
     * Used in `Activity` spaces with `Coding Activity` UI preset.
     *
     *@param options new option in dropdown.
     */
    function addHelpOption(options: {
        readonly icon: string;
        readonly label: string;
        readonly onClick: () => void;
    }): void;
    /**
     *Defines current screen orientation of device.
     */
    let screenOrientation: "landscape" | "portrait";
    /**
     *Toggles automatic screen rotation for this device.
     *
     *@return current rotation mode.
     */
    let screenAutoRotate: boolean;
    /**
     *Returns the default `View` shadow settings used in DX Engine.
     */
    const defaultShadow: GUI.Shadow;
    let debugHoverEnabled: boolean;
    /**
     *Defines a handler that triggers whenever the item modification bubble is shown. Allows defining custom GUI elements in the bubble context.
     *
     * **Note**: Only works in `activity` mode. Requires `BUBBLE_2D` and `EDIT_OBJECTS` features to be enabled.
     *
     * **Example**
     * `
     * ```
     * GUI.onBubbleShown((bubble, context) => {
     *     let myCustomView = context.createSpace({
     *         size: new Vector2(100, 100),
     *         cornerRadius: 50,
     *         backgroundColor: Color.blue
     *     })
     *     bubble.content.add(myCustomView)
     * })
     * ```
     * `
     */
    function onBubbleShown(handler: (t: GUI.Bubble2D, u: GUI.Context) => void): void;
    interface ToggleOptions extends GUI.BaseButtonOptions {
        readonly onValueChange?: (t: boolean) => void;
        readonly labelDistribution?: "left" | "right";
        readonly isOn?: boolean;
        readonly toggleStyle?: "switch" | "checkbox";
        readonly toggleColor?: (ColorWithAlpha | Color);
        readonly readonly?: boolean;
        readonly gap?: number;
        readonly text?: (GUI.Text | string);
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         */
        readonly onHover?: (t: boolean) => void;
        readonly onPressDown?: (t: Vector2) => void;
        readonly onPressUp?: (t: Vector2) => void;
        /**
         *Handles click events for this `View`.
         */
        readonly onClick?: () => void;
        /**
         *Defines a callback that triggers when the `View` needs to know the mouse cursor to be set.
         * Receives a local mouse position and the flag indicating whether the element is dragging or not
         * Returns a cursor name
         */
        readonly getCursor?: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize";
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        readonly draggable?: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         */
        readonly dragOnLongPress?: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        readonly onDragStart?: () => void;
        readonly onDrag?: (t: Vector2) => void;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        readonly onDragEnd?: () => void;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Parent class for all custom GUI elements _(views)_.
     *
     * Views use [density-independent pixels (dp)](https://stackoverflow.com/questions/2025282/what-is-the-difference-between-px-dip-dp-and-sp) for size.
     *
     * To define interactive views, use `GUI.BaseButton`
     *
     *
     */
    class BaseView {
        /**
         *The default background color of this `View`.
         */
        setBackgroundColor(color: (ColorWithAlpha | Color)): void;
        getBackgroundColor(): ColorWithAlpha;
        /**
         *The default border color of this `View`.
         */
        setBorderColor(color: (ColorWithAlpha | Color)): void;
        getBorderColor(): ColorWithAlpha;
        /**
         *The overall `opacity` of this `View` and all its content.
         */
        opacity: number;
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        borderWidth: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         */
        cornerRadius: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        position: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        width: number;
        /**
         *Height of this `View` in `dp`.
         */
        height: number;
        /**
         *Size of this `View` in `dp`.
         */
        size: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        margin: Insets;
        setMargin(margin: number): void;
        setMargin(left: number, top: number, right: number, bottom: number): void;
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        adjustPosition(callback: (size: Vector2, guiContext: GUI.Context) => Vector2): void;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        adjustSize(callback: (size: Vector2, guiContext: GUI.Context) => Vector2): void;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        onScreenResize(callback: (size: Vector2, guiContext: GUI.Context) => void): Disposable;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        onScreenOrientation(callback: (t: "landscape" | "portrait") => void): Disposable;
        /**
         *Displays this `View` in the `Context`.
         *
         *@deprecated
         */
        show(): void;
        /**
         *Hides this `View` from the `Context`.
         *
         *@deprecated
         */
        hide(): void;
        /**
         *Deletes this `View` from the `Context`.
         */
        delete(): void;
        /**
         *Forces a relayout of this `View`.
         *
         * _Usually, all `View`s already relayout through method calls. Use this for cases where layouts do not appear as expected_.
         */
        relayout(): void;
        /**
         *Shadow settings used by this `View`.
         */
        shadow: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        ignoreTrace: boolean;
        /**
         *If `true`, this `View` will **not** stretch when inside of a `Stack` with `stretch` `alignment` or `distribution`.
         */
        ignoreStretch: boolean;
        /**
         *Returns the parent of this `View` or `null` if this `View` is not added to any `Parent`
         */
        parent: GUI.Parent;
    }
    /**
     *Initial creation options of this `Scroll`.
     *
     * **Note**: view options can be edited after creation.
     */
    interface ScrollOptions extends GUI.BaseViewOptions {
        /**
         *Defines the scrolling `orientation` of this `Scroll`.
         */
        readonly orientation?: "horizontal" | "vertical" | "both";
        /**
         *Defines the `content` view displayed in this `Scroll`.
         */
        readonly content?: GUI.BaseView;
        /**
         *Controls the visibility of the horizontal scrollbar. Defaults to `true` if `orientation` is horizontal or both
         */
        readonly horizontalScrollBarVisible?: boolean;
        /**
         *Controls the visibility of the vertical scrollbar. Defaults to `true` if `orientation` is vertical or both
         */
        readonly verticalScrollBarVisible?: boolean;
        /**
         *If set to `true`, scrollbars are always visible, otherwise they are visible only when scrolling
         */
        readonly scrollBarAlwaysVisible?: boolean;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    class Image extends GUI.BaseView {
        constructor(options: GUI.ImageOptions);
        setId(id: string): void;
        setId(id: string, state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): void;
        /**
         *Downloads and displays an image via web URL.
         *
         * * Defining this property replaces any image previously displayed by `id`.
         * * The web image is **not** saved as `ImageAsset`
         *
         * **Note:** Always use `https` links. `http` will not be displayed.
         */
        webUrl: string;
        /**
         *Toggles if content displayed in this `Image` is a looping gif.
         *
         * If `true`, gifs will play and loop automatically.
         */
        isGif: boolean;
        setColor(color: (ColorWithAlpha | Color)): void;
        setColor(color: (ColorWithAlpha | Color), state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): void;
        getColor(): ColorWithAlpha;
        getColor(state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): ColorWithAlpha;
        imageSize: Vector2;
        pivot: Vector2;
        rotation: number;
        fit: "fill" | "contain" | "cover";
    }
    /**
     *Class for common button elements.
     *
     * Buttons are defined with optional `Image` and `Text`.
     * By default, button `orientation` is `"horizontal"`.
     */
    class Button extends GUI.Stack {
        constructor(options: GUI.ButtonOptions);
        /**
         *Defines the `Text` used in this button.
         *
         * _If a string is passed, default text properties are used for creating this `View`._
         */
        text: GUI.Text;
        /**
         *Defines the `Image` used in this button.
         *
         * _If a string is passed, default image properties are used for creating this `View`._
         */
        image: GUI.Image;
    }
    /**
     *Pop-up that is displayed over all other GUI elements.
     *
     * Pop-ups allow you to create confirmation or warning dialogs that wait for user input before closing.
     * On the most basic level, a pop-up can be created with `title` and `body` text.
     * For advanced use, `content` may be defined to add advanced GUI elements such as stacks and scrolls.
     *
     * _Most `Popup` element colors are defined by the current GUI theme of the engine._
     */
    class Popup {
        constructor(options: GUI.PopupOptions);
        /**
         *Icon displayed in the header of this `Popup`.
         */
        type: "info" | "warning" | "question" | "confirmation" | "create";
        /**
         *Defines the label of the primary button.
         *
         * _If no label is defined, no primary button is displayed._
         */
        primaryButtonLabel: string;
        /**
         *Defines the label of the secondary button.
         *
         * _If no label is defined, no secondary button is displayed._
         */
        secondaryButtonLabel: string;
        /**
         *Defines the content displayed in this `Popup`.
         *
         * _Use this to add content more that is more complex than `body` text._
         */
        content: GUI.BaseView;
        /**
         *Handles the primary button click event of this `Popup`.
         */
        onPrimary: () => void;
        /**
         *Handles the secondary button click event of this `Popup`.
         */
        onSecondary: () => void;
        /**
         *Toggles visibility of the close `(X)` button.
         */
        enableCloseButton: boolean;
        canBeClosed: boolean;
        shouldExtendOnMobile: boolean;
        onExtendOnMobile: (t: boolean) => void;
        /**
         *Handles the close event of this `Popup` when the _close button_ was clicked.
         */
        onCancel: (t: boolean) => void;
        /**
         *Handles the back button click event. If this is null, no back button is shown.
         */
        onBack: () => void;
        /**
         *Defines the default background color of this `Popup`.
         */
        backgroundColor: ColorWithAlpha;
        /**
         *Defines the `title` text of this `Popup`.
         */
        title: GUI.Text;
        /**
         *Defines the `body` text of this `Popup`.
         *
         * _Use this when only text `content` has to be shown._
         */
        body: GUI.Text;
        /**
         *Shows this `Popup` in its `Context`.
         */
        show(): void;
        /**
         *Hides this `Popup` from its `Context`.
         */
        hide(): void;
    }
    /**
     *The `Painter` view allows you to create _drawable_ surfaces inside of a GUI context.
     *
     * Content drawn on this painter can be **stored** as `ImageAsset`.
     */
    class Painter extends GUI.BaseView {
        constructor(options: GUI.BaseViewOptions);
        /**
         *Deletes all content in this painter.
         */
        clear(): void;
        /**
         *Deletes previous action in the painter action stack.
         *
         * Undo-able actions are
         * * Create a new stroke
         * * Delete existing stroke
         * * Modify properties of existing stroke
         */
        undo(): void;
        redo(): void;
        export(options: GUI.Painter.ExportOptions): void;
        /**
         *The `Pen` used inside of this painter.
         */
        readonly pen: Input.Pen;
        readonly activeLayer: GUI.Painter.Layer;
        readonly layers: Array<GUI.Painter.Layer>;
        touchRestricted: boolean;
        addLayer(): GUI.Painter.Layer;
        addLayer(layerIndex: number): GUI.Painter.Layer;
        dataString: string;
        readonly viewport: GUI.Painter.Viewport;
    }
    namespace Painter {
        class Stroke {
            color: Color;
            opacity: number;
            size: number;
        }
        interface ExportOptions {
            readonly scaleFactor?: number;
            readonly onLoadComplete?: (t: ImageAsset) => void;
            readonly onLoadError?: (t: GUI.Painter.ExportErrorType) => void;
        }
        type ExportErrorType = "timeout_not_passed" | "previous_export_not_finished" | "unknown";
        class Viewport {
            center: Vector2;
            scaleFactor: number;
        }
        type PencilInputType = "draw" | "erase" | "select" | "drag" | "globalErase";
        class Layer {
            active: boolean;
            visible: boolean;
            locked: boolean;
            opacity: number;
            readonly strokes: Array<GUI.Painter.Stroke>;
            clear(): void;
            moveToTop(): void;
            moveUp(): void;
            moveToBottom(): void;
            moveDown(): void;
            delete(): void;
            readonly index: number;
            dataString: string;
        }
    }
    interface ImageOptions extends GUI.BaseViewOptions {
        readonly id?: string;
        /**
         *Downloads and displays an image via web URL.
         *
         * * Defining this property replaces any image previously displayed by `id`.
         * * The web image is **not** saved as `ImageAsset`
         *
         * **Note:** Always use `https` links. `http` will not be displayed.
         */
        readonly webUrl?: string;
        /**
         *Toggles if content displayed in this `Image` is a looping gif.
         *
         * If `true`, gifs will play and loop automatically.
         */
        readonly isGif?: boolean;
        readonly imageSize: Vector2;
        readonly color?: (ColorWithAlpha | Color);
        readonly pivot?: Vector2;
        readonly rotation?: number;
        readonly fit?: "fill" | "contain" | "cover";
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Input field for user-written text.
     *
     * **Note**: The input field is supported in `GUI.screen` context only.
     * Do **not** use text input in `GUIItem.context`.
     *
     *
     * Cross-platform input is in development, see [DX-5003](https://youtrack.jetbrains.com/issue/DX-5003)
     *
     */
    class TextInput extends GUI.BaseButton {
        constructor(options: GUI.TextInputOptions);
        text: string;
        placeholder: string;
        readonly horizontalAlignment: "center" | "left" | "right";
        readOnly: boolean;
        spellcheck: boolean;
        focused: boolean;
        onValueChange(handler: (t: string) => void): Disposable;
        onStartEdit(handler: () => void): Disposable;
        onEndEdit(handler: () => void): Disposable;
        characterLimit: number;
        height: number;
        setTextColor(color: (ColorWithAlpha | Color)): void;
        setPlaceholderColor(color: (ColorWithAlpha | Color)): void;
        padding: Insets;
        setPadding(padding: number): void;
        setPadding(left: number, top: number, right: number, bottom: number): void;
    }
    class Space extends GUI.BaseView {
        constructor(options: GUI.BaseViewOptions);
    }
    class AbsLayout extends GUI.Group {
        constructor(options: GUI.BaseViewOptions);
        readonly childViews: GUI.AbsLayoutChildList;
        /** @deprecated */ add(view: GUI.BaseView, pos: Vector2): void;
        /** @deprecated */ add(view: GUI.BaseView, horizontal: "leading" | "center" | "trailing" | "fill", vertical: "leading" | "center" | "trailing" | "fill"): void;
        setPos(view: GUI.BaseView, pos: Vector2): void;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView): void;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView, index: number): void;
    }
    /**
     *Parent class for all **interactive** GUI elements.
     */
    class BaseButton extends GUI.BaseView {
        /**
         *The background color of this `View` based on current `state`.
         * * `"normal"` - `enabled` state is `true`
         * * `"hovered"` - mouse or pointer hovers over this `View`
         * * `"selected"` - `selected` state is `true`
         * * `"pressed"` - mouse or pointer clicks down on this `View`
         * * `"disabled"` - `enabled` state is `false`
         */
        setBackgroundColor(color: (ColorWithAlpha | Color), state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): void;
        getBackgroundColor(state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): ColorWithAlpha;
        /**
         *The background color of this `View` based on current `state`.
         * * `"normal"` - `enabled` state is `true`
         * * `"hovered"` - mouse or pointer hovers over this `View`
         * * `"selected"` - `selected` state is `true`
         * * `"pressed"` - mouse or pointer clicks down on this `View`
         * * `"disabled"` - `enabled` state is `false`
         */
        setBorderColor(color: (ColorWithAlpha | Color), state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): void;
        getBorderColor(state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): ColorWithAlpha;
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         *
         *@param handler method to call on hover. Uses `boolean` property to determine start and end.
         */
        onHover(handler: (t: boolean) => void): Disposable;
        /**
         *Handles _press down_ events for this `View`.
         *
         * _Triggers whenever a click or touch is **pressed down** on this `View`_.
         *
         *@param handler function to call when touch or click is pressed down on this `View`. Provides relative input `position`.
         */
        onPressDown(handler: (t: Vector2) => void): Disposable;
        /**
         *Handles _press up_ events for this `View`.
         *
         * _Triggers whenever a click or touch is **released** in this `View`_.
         *
         *@param handler function to call when touch or click is released after this view was pressed. Provides relative input `position`.
         */
        onPressUp(handler: (t: Vector2) => void): Disposable;
        /**
         *Handles click events for this `View`.
         *
         * _Triggers whenever a click or touch is **pressed** and **released** within this `View`._
         *
         *@param handler function to call when this `View` is clicked.
         */
        onClick(handler: () => void): Disposable;
        /**
         *Defines a callback that triggers when the `View` should change the mouse cursor icon.
         *
         * Receives a local mouse position and a flag indicating whether the element is dragging or not.
         *
         *@param callback provides local mouse `position` and `pressed` state of the mouse.
         */
        getCursor(callback: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize"): void;
        /**
         *If `false`, this `View` is non-interactive.
         */
        enabled: boolean;
        /**
         *If `true`, this `View` is marked as `selected`.
         *
         * **Note:** This state can only be set by script.
         */
        selected: boolean;
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        draggable: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         *
         * _A long press triggers when an input is held down for over one second._
         */
        dragOnLongPress: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        onDragStart(handler: () => void): Disposable;
        onDrag(handler: (t: Vector2) => void): Disposable;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        onDragEnd(handler: () => void): Disposable;
        /**
         *The default background color of this `View`.
         */
        setBackgroundColor(color: (ColorWithAlpha | Color)): void;
        getBackgroundColor(): ColorWithAlpha;
        /**
         *The default border color of this `View`.
         */
        setBorderColor(color: (ColorWithAlpha | Color)): void;
        getBorderColor(): ColorWithAlpha;
    }
    /**
     *Container that allows creating scroll-able content.
     *
     * Scrolls accept a single `content` group that can be scrolled on `horizontal` axis, `vertical` axis, or `both`.
     *
     * **Note**: The scroll size must be smaller than its `content` to display a scroll-bar.
     */
    class Scroll extends GUI.BaseView {
        constructor(options: GUI.ScrollOptions);
        /**
         *Defines the scrolling `orientation` of this `Scroll`.
         */
        orientation: "horizontal" | "vertical" | "both";
        /**
         *Defines the `content` view displayed in this `Scroll`.
         */
        content: GUI.BaseView;
        /**
         *Moves the scroll `content` by `amount` along its `orientation`.
         *
         * _Only moves scroll content when orientation is `horizontal` or `vertical`._
         */
        move(amount: number): void;
        /**
         *Moves the scroll `content` by `amount` along both axes.
         *
         * _Only moves scroll content when orientation is `both`._
         */
        move(amount: Vector2): void;
        /**
         *Defines the scroll `offset` relative to its `content` and current scroll `orientation`.
         *
         * **Example**
         * `
         * ```
         *   //Sets scroll offset to content center
         *   myScroll.offset = myScroll.maxOffset * 0.5
         * ```
         * `
         */
        offset: number;
        /**
         *Defines the `horizontal` scroll `offset` relative to its scroll `content`.
         *
         * **Example**
         * `
         * ```
         *   //Sets horizontal scroll offset to content center
         *   myScroll.offsetX = myScroll.maxOffsetX * 0.5
         * ```
         * `
         */
        offsetX: number;
        /**
         *Defines the `vertical` scroll `offset` relative to its scroll `content`.
         *
         * **Example**
         * `
         * ```
         *   //Sets vertical scroll offset to content center
         *   myScroll.offsetY = myScroll.maxOffsetY * 0.5
         * ```
         * `
         */
        offsetY: number;
        /**
         *Returns the maximum offset required to reach the end of the scroll content.
         *
         * _Returns `offsetX` when orientation is `horizontal`, `offsetY` when orientation is `vertical`._
         */
        readonly maxOffset: number;
        /**
         *Returns the maximum `horizontal` offset required to reach the end of the scroll `content`.
         */
        readonly maxOffsetX: number;
        /**
         *Returns the maximum `vertical` offset required to reach the end of the scroll `content`.
         */
        readonly maxOffsetY: number;
        /**
         *Ensures that the `view` is visible, scrolling if necessary.
         * Setting `start` to true moves the `view` to the top or left part of the scroll.
         */
        ensureVisibleView(view: GUI.BaseView, start: boolean): void;
        /**
         *Ensures that the `view` is visible, scrolling if necessary.
         * Setting `start` to true moves the `view` to the top or left part of the scroll.
         * `smooth` controls whether to scroll over time or instantly
         */
        ensureVisibleView(view: GUI.BaseView, start: boolean, smooth: boolean): void;
        /**
         *Sets the `offset` directly
         */
        ensureOffset(offset: number): void;
        ensureOffsetX(offsetX: number): void;
        ensureOffsetY(offsetY: number): void;
        /**
         *Starts inertia scroll
         */
        free(): void;
        /**
         *Controls the visibility of the horizontal scrollbar.
         */
        horizontalScrollBarVisible: boolean;
        /**
         *Controls the visibility of the vertical scrollbar.
         */
        verticalScrollBarVisible: boolean;
        /**
         *If set to `true`, scrollbars are always visible, otherwise they are visible only when scrolling
         */
        scrollBarAlwaysVisible: boolean;
    }
    /**
     *GUI element that allows selecting from an array of dropdown options.
     *
     * Dropdown uses a `textTemplate` property to style new dropdown options whenever they are added.
     */
    class Dropdown extends GUI.BaseButton {
        constructor(options: GUI.DropdownOptions);
        /**
         *Defines the dropdown options in this `Dropdown`.
         */
        options: Array<GUI.DropdownOption>;
        gap: number;
        /**
         *Returns currently selected `DropdownOption` by index.
         */
        currentOption: number;
        /**
         *Toggles `enabled` state of this `Dropdown`.
         *
         * If `false`, the dropdown is disabled and can't be used.
         */
        enabled: boolean;
        /**
         *Removes all dropdown options from this `Dropdown`.
         */
        clearOptions(): void;
        /**
         *Displays the dropdown pop-up.
         */
        expand(): void;
        /**
         *Hides the dropdown pop-up.
         */
        collapse(): void;
        /**
         *Handles `onValueChange` events for this `Dropdown`.
         *
         * _Triggers whenever another dropdown value is selected.
         * Provided parameter returns index of new value._
         */
        onValueChanged(onValueChanged: (t: number) => void): Disposable;
        /**
         *Handles `cancel` events for this `Dropdown`.
         *
         * _Triggers whenever the dropdown is closed when no selection is made._
         */
        onCancel(onCancel: () => void): Disposable;
        /**
         *Adds a new `DropdownOption` to this `Dropdown`.
         */
        addOption(option: GUI.DropdownOption): void;
        /**
         *Adds an array of dropdown options to this `Dropdown`.
         */
        addOptions(options: Array<GUI.DropdownOption>): void;
        /**
         *Removes a `DropdownOption` by index.
         */
        removeOption(index: number): void;
        /**
         *Defines the `backgroundColor` of the `Dropdown` pop-up.
         */
        setOptionBackgroundColor(color: (ColorWithAlpha | Color), state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): void;
        /**
         *Defines color, font and state settings for all dropdown options.
         *
         * **Note**: Template settings are only applied when a `DropdownOption` is added.
         * Changing settings of the text template after creation will **not** update pre-existing dropdown options.
         */
        textTemplate: GUI.Text;
    }
    /**
     *Initial creation options of this `Popup`.
     *
     * _Most `Popup` element colors are defined by the current GUI theme of the engine._
     *
     * **Note**: view options can be edited after creation.
     */
    interface PopupOptions {
        /**
         *Defines the label of the primary button.
         *
         * _If no label is defined, no primary button is displayed._
         */
        readonly primaryButtonLabel?: string;
        /**
         *Defines the label of the secondary button.
         *
         * _If no label is defined, no secondary button is displayed._
         */
        readonly secondaryButtonLabel?: string;
        /**
         *Defines the default background color of this `Popup`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *Defines the content displayed in this `Popup`.
         *
         * _Use this to add content more that is more complex than `body` text._
         */
        readonly content?: GUI.BaseView;
        /**
         *Defines the icon-type in the header of this `Popup`
         */
        readonly type?: "info" | "warning" | "question" | "confirmation" | "create";
        /**
         *Handles the primary button click event of this `Popup`.
         */
        readonly onPrimary?: () => void;
        /**
         *Handles the secondary button click event of this `Popup`.
         */
        readonly onSecondary?: () => void;
        /**
         *Toggles visibility of the close `(X)` button.
         */
        readonly enableCloseButton?: boolean;
        readonly canBeClosed?: boolean;
        readonly shouldExtendOnMobile?: boolean;
        readonly onExtendOnMobile?: (t: boolean) => void;
        /**
         *Handles the close event of this `Popup` when the _close button_ was clicked.
         */
        readonly onCancel?: (t: boolean) => void;
        /**
         *Handles the back button click event. If this is null, no back button is shown.
         */
        readonly onBack?: () => void;
        /**
         *Defines the `body` text of this `Popup`.
         *
         * _Use this when only text `content` has to be shown._
         */
        readonly body?: (GUI.Text | string);
        /**
         *Defines the `title` text of this `Popup`.
         */
        readonly title: (GUI.Text | string);
    }
    interface ShadowOptions {
        readonly color?: (ColorWithAlpha | Color);
        readonly offset?: Vector2;
        readonly blur?: number;
        readonly spread?: number;
    }
    /**
     *Class for all GUI _container elements_.
     *
     * Stacks allow you to distribute and align several views within a specified area.
     * Stack properties can be changed after initial creation to accommodate responsive designs.
     *
     *
     */
    class Stack extends GUI.BaseButton implements GUI.Parent {
        /**
         *Defines the `gap` between all views in this `Stack`.
         */
        gap: number;
        /**
         *Defines the orientation of this `Stack`.
         */
        orientation: "horizontal" | "vertical";
        /**
         *Defines the placement of views in this `Stack` perpendicular to its `orientation`.
         *
         * **Examples**
         *
         * ![](https://cdn.delightex.com/uploads/iNA1rOLs2tJImt54iKLA4p8pLwlgiUrbSjoyoHTfrQ1)
         *
         * _`Stack` with `orientation: "horizontal"`,`distribution: "center"`, **`alignment: "trailing"`**._
         *
         * ![](https://cdn.delightex.com/uploads/Uxw5vUCExaTcabEvuPfTSFWOVLXnkf4SfRWtPuCLlIr)
         *
         * _`Stack` with `orientation: "vertical"`, `distribution: "center"`, **`alignment: "trailing"`**._
         */
        alignment: "leading" | "center" | "trailing" | "fill";
        /**
         *Defines the placement of views in this `Stack` along its `orientation`.
         *
         * **Examples**
         *
         * ![](https://cdn.delightex.com/uploads/FWHsMkNb5u5GiNUxlivu7CpXjhCC6bFrBcWDC5pwLWQ)
         *
         * _`Stack` with `orientation: "horizontal"`, **`distribution: "trailing"`**, `alignment: "center"`._
         *
         * ![](https://cdn.delightex.com/uploads/LEXwpADrSTQST0Xkb6Hn3MR4wEpJoI3SmYOkJcgRY7G)
         *
         * _`Stack` with `orientation: "vertical"`, **`distribution: "trailing"`**, `alignment: "center"`._
         */
        distribution: "leading" | "center" | "trailing" | "fill";
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView): void;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView, index: number): void;
        /**
         *@deprecated use
         * `childViews`.`addWithOrder()`)
         * remove()}
         */
        addWithOrder(view: GUI.BaseView, order: number): void;
        /**
         *@deprecated use `childViews`.remove()
         */
        remove(view: GUI.BaseView): void;
        readonly childViews: GUI.BaseViewList;
        /**
         *Creates a `Stack` in this context.
         *
         * _The VBox is a stack with pre-defined **vertical** `orientation`._
         *
         *@param options initial creation options.
         */
        static createVBox(options: GUI.StackOptions): GUI.Stack;
        /**
         *Creates a `Stack` in this context.
         *
         * _The HBox is a stack with pre-defined **horizontal** `orientation`._
         *
         *@param options initial creation options.
         */
        static createHBox(options: GUI.StackOptions): GUI.Stack;
    }
    interface SpriteAnimatorOptions extends GUI.BaseViewOptions {
        /**
         *Defines the CDN asset `id` of the sprite sheet texture.
         */
        readonly id: string;
        /**
         *Defines the size of the sprite sheet texture.
         */
        readonly imageSize: Vector2;
        /**
         *Defines a color override of the sprite sheet texture.
         */
        readonly color?: (ColorWithAlpha | Color);
        /**
         *Defines the amount of columns of the provided sprite sheet.
         */
        readonly columns: number;
        /**
         *Defines the amount of rows of the provided sprite sheet.
         */
        readonly rows: number;
        /**
         *Defines the animation playback speed in frames per second.
         */
        readonly fps: number;
        /**
         *Defines the total amount of frames in this sprite animation.
         * Default is `columns` x `rows`.
         */
        readonly frames?: number;
        /**
         *Defines the looping state of the `SpriteAnimator`. Default is `true`.
         */
        readonly looping?: boolean;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    class ScriptEditorTab extends GUI.EditorTab {
        script: string;
    }
    /**
     *Initial creation options of this `Slider`.
     *
     * **Note**: view options can be edited after creation.
     */
    interface SliderOptions extends GUI.BaseButtonOptions {
        readonly value?: number;
        readonly minValue?: number;
        readonly maxValue?: number;
        readonly onValueChange?: (t: number) => void;
        readonly onChangeStart?: () => void;
        readonly onChangeEnd?: () => void;
        readonly hasValueField?: boolean;
        readonly sliderColor?: (ColorWithAlpha | Color);
        readonly wholeNumbers?: boolean;
        readonly stepSize?: number;
        readonly text?: (GUI.Text | string);
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         */
        readonly onHover?: (t: boolean) => void;
        readonly onPressDown?: (t: Vector2) => void;
        readonly onPressUp?: (t: Vector2) => void;
        /**
         *Handles click events for this `View`.
         */
        readonly onClick?: () => void;
        /**
         *Defines a callback that triggers when the `View` needs to know the mouse cursor to be set.
         * Receives a local mouse position and the flag indicating whether the element is dragging or not
         * Returns a cursor name
         */
        readonly getCursor?: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize";
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        readonly draggable?: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         */
        readonly dragOnLongPress?: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        readonly onDragStart?: () => void;
        readonly onDrag?: (t: Vector2) => void;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        readonly onDragEnd?: () => void;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Class for animating sprite sheets.
     *
     * The `SpriteAnimator` allows you to create lightweight animations from sprite sheets.
     *
     * When loading a sprite sheet, define `rows`, `columns`, target `fps` and the total amount of `frames`
     * if it's different from the `rows` x `columns`.
     */
    class SpriteAnimator extends GUI.BaseView {
        constructor(options: GUI.SpriteAnimatorOptions);
        /**
         *Defines the animation playback speed in frames per second.
         */
        fps: number;
        /**
         *Defines the current frame displayed in this `SpriteAnimator`
         */
        currentFrame: number;
        /**
         *Defines a color override of the sprite sheet texture.
         */
        setColor(color: (ColorWithAlpha | Color)): void;
        /**
         *Defines the looping state of the `SpriteAnimator`. Default is `true`.
         */
        looping: boolean;
        /**
         *The `callback` is called when current loop is finished.
         */
        onFinish(callback: () => void): Disposable;
        /**
         *Plays this `SpriteAnimator`.
         */
        play(): void;
        /**
         *Pauses this `SpriteAnimator`.
         *
         * The animation continues with next `play` call.
         */
        pause(): void;
        /**
         *Stops this `SpriteAnimator`.
         *
         * The animation starts from the beginning with next `play` call.
         */
        stop(): void;
    }
    /**
     *Initial creation options of this interactive `View`.
     *
     * **Note**: view options can be edited after creation.
     *
     *
     */
    interface BaseButtonOptions extends GUI.BaseViewOptions {
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         */
        readonly onHover?: (t: boolean) => void;
        readonly onPressDown?: (t: Vector2) => void;
        readonly onPressUp?: (t: Vector2) => void;
        /**
         *Handles click events for this `View`.
         */
        readonly onClick?: () => void;
        /**
         *Defines a callback that triggers when the `View` needs to know the mouse cursor to be set.
         * Receives a local mouse position and the flag indicating whether the element is dragging or not
         * Returns a cursor name
         */
        readonly getCursor?: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize";
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        readonly draggable?: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         */
        readonly dragOnLongPress?: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        readonly onDragStart?: () => void;
        readonly onDrag?: (t: Vector2) => void;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        readonly onDragEnd?: () => void;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Initial creation options of this `Stack`.
     *
     * **Note**: view options can be edited after creation.
     *
     *
     */
    interface TextInputOptions extends GUI.BaseButtonOptions {
        readonly multiline?: boolean;
        readonly readOnly?: boolean;
        readonly spellcheck?: boolean;
        /** @deprecated */ readonly animated?: boolean;
        readonly floatingPlaceholder?: boolean;
        readonly text?: string;
        readonly placeholder?: string;
        readonly placeholderColor?: (ColorWithAlpha | Color);
        readonly onValueChange?: (t: string) => void;
        readonly onStartEdit?: () => void;
        readonly onEndEdit?: () => void;
        readonly characterLimit?: number;
        readonly fontSize?: number;
        readonly fontStyle?: "regular" | "medium" | "demibold" | "bold" | "heavy";
        /** @deprecated */ readonly textAlignment?: "center" | "left" | "right";
        readonly horizontalAlignment?: "center" | "left" | "right";
        readonly textColor?: (ColorWithAlpha | Color);
        readonly padding?: (number | Insets);
        readonly focused?: boolean;
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         */
        readonly onHover?: (t: boolean) => void;
        readonly onPressDown?: (t: Vector2) => void;
        readonly onPressUp?: (t: Vector2) => void;
        /**
         *Handles click events for this `View`.
         */
        readonly onClick?: () => void;
        /**
         *Defines a callback that triggers when the `View` needs to know the mouse cursor to be set.
         * Receives a local mouse position and the flag indicating whether the element is dragging or not
         * Returns a cursor name
         */
        readonly getCursor?: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize";
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        readonly draggable?: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         */
        readonly dragOnLongPress?: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        readonly onDragStart?: () => void;
        readonly onDrag?: (t: Vector2) => void;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        readonly onDragEnd?: () => void;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Initial creation options of this `Dropdown`.
     *
     * **Note**: view options can be edited after creation.
     */
    interface DropdownOptions extends GUI.BaseButtonOptions {
        /**
         *Defines the dropdown elements in this `Dropdown`.
         */
        readonly options?: Array<GUI.DropdownOption>;
        /**
         *Defines the gap between option label and icon.
         */
        readonly gap?: number;
        /**
         *Handles `cancel` events for this `Dropdown`.
         *
         * _Triggers whenever the dropdown is closed when no selection is made._
         */
        readonly onCancel?: () => void;
        /**
         *Handles `onValueChange` events for this `Dropdown`.
         *
         * _Triggers whenever another dropdown value is selected.
         * Provided parameter returns index of new value._
         */
        readonly onValueChanged?: (t: number) => void;
        /**
         *Defines the current selected `DropdownOption`.
         */
        readonly currentOption?: number;
        /**
         *Defines color, font and state settings for all dropdown options.
         *
         * **Note**: Template settings are only applied when a `DropdownOption` is added.
         * Changing settings of the text template after creation will **not** update pre-existing dropdown options.
         */
        readonly textTemplate?: GUI.Text;
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         */
        readonly onHover?: (t: boolean) => void;
        readonly onPressDown?: (t: Vector2) => void;
        readonly onPressUp?: (t: Vector2) => void;
        /**
         *Handles click events for this `View`.
         */
        readonly onClick?: () => void;
        /**
         *Defines a callback that triggers when the `View` needs to know the mouse cursor to be set.
         * Receives a local mouse position and the flag indicating whether the element is dragging or not
         * Returns a cursor name
         */
        readonly getCursor?: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize";
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        readonly draggable?: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         */
        readonly dragOnLongPress?: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        readonly onDragStart?: () => void;
        readonly onDrag?: (t: Vector2) => void;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        readonly onDragEnd?: () => void;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Parent class for all GUI elements that allow grouping multiple views together.
     */
    class Group extends GUI.BaseView implements GUI.Parent {
        /**
         *Adds `view` to this `Group` at `index`.
         *
         * _The added `view` shares visibility settings of its group._
         */
        readonly childViews: GUI.GroupChildList;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView): void;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView, index: number): void;
        /**
         *@deprecated use
         * `childViews`.`addWithOrder()`)
         * remove()}
         */
        addWithOrder(view: GUI.BaseView, order: number): void;
        /**
         *@deprecated use `childViews`.remove()
         */
        remove(view: GUI.BaseView): void;
    }
    class Slider extends GUI.BaseButton {
        constructor(options: GUI.SliderOptions);
        value: number;
        minValue: number;
        maxValue: number;
        onValueChange(handler: (t: number) => void): Disposable;
        onChangeStart(handler: () => void): Disposable;
        onChangeEnd(handler: () => void): Disposable;
        setSliderColor(color: (ColorWithAlpha | Color)): void;
        stepSize: number;
        wholeNumbers: boolean;
        text: GUI.Text;
    }
    interface Parent {
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView): void;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView, index: number): void;
        /**
         *@deprecated use
         * `childViews`.`addWithOrder()`)
         * remove()}
         */
        addWithOrder(view: GUI.BaseView, order: number): void;
        /**
         *@deprecated use `childViews`.remove()
         */
        remove(view: GUI.BaseView): void;
        readonly childViews: GUI.BaseViewList;
    }
    class VideoView extends GUI.BaseView {
        constructor(options: GUI.VideoViewOptions);
        readonly video: Video;
    }
    class Shadow {
        constructor(options: GUI.ShadowOptions);
        readonly color: ColorWithAlpha;
        readonly offset: Vector2;
        readonly blur: number;
        readonly spread: number;
    }
    interface TextOptions extends GUI.BaseViewOptions {
        readonly label?: string;
        readonly horizontalAlignment?: "center" | "left" | "right";
        readonly verticalAlignment?: "top" | "center" | "bottom";
        readonly fontSize?: number;
        readonly fontStyle?: "regular" | "medium" | "demibold" | "bold" | "heavy";
        readonly color?: (ColorWithAlpha | Color);
        readonly multiline?: boolean;
        readonly formatText?: boolean;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    class EditorTab extends GUI.ScriptTab {
        name: string;
        visible: boolean;
        readonly type: GUI.EditorTabType;
    }
    class CoBlocksEditorTab extends GUI.EditorTab {
        script: CoBlocks.Model.Script;
    }
    /**
     *Namespace for all UI elements that are visible during _play mode_.
     */
    namespace HUD {
        function createJoystick(): Joystick;
        function createCameraJoystick(): Joystick;
        function createJoystick(side: "left" | "right"): Joystick;
        function removeJoystick(): void;
        function removeJoystick(side: "left" | "right"): void;
        /**
         *Displays a panel with title text, body text and an image via `id`.
         *
         * _`text` and `title` must be defined._
         *
         * **Example**
         * `
         * ```
         * GUI.HUD.showInfoPanel({
         *     title: 'This is the title',
         *     image: "5NwLku5Mcj3F0U05ZgSh5Rof36WGwwwmscVDovR0g1V",
         *     text: 'This is the body text.',
         *     onHide: () => Debug.log('Panel closed.'),
         * })
         * ```
         * `
         *
         *@param options panel options
         *
         *@return created panel.
         */
        function showInfoPanel(options: {
            readonly title: string;
            readonly image?: string;
            readonly text: string;
            /** @deprecated */ readonly autoRemove?: boolean;
            /** @deprecated */ readonly position?: Vector3;
            readonly onHide?: () => void;
        }): Disposable;
        /**
         *Displays a panel with one question and up to four answers, one of which is correct.
         *
         * _At least **two answers** and the **correct answer** must be defined_.
         *
         * **Example**
         * `
         * ```
         * GUI.HUD.showQuizPanel({
         *     question: 'This is your quiz question.',
         *     answer1: 'Correct answer.',
         *     answer2: 'Wrong answer.',
         *     correctAnswer: 1,
         *     onCorrect: () => Debug.log('Correct answer selected.'),
         *     onWrong: () => Debug.log('Wrong answer selected.')
         * })
         * ```
         * `
         *
         *@param options panel options.
         */
        function showQuizPanel(options: {
            readonly question: string;
            readonly answer1: string;
            readonly answer2: string;
            readonly answer3?: string;
            readonly answer4?: string;
            readonly correctAnswer: number;
            readonly onCorrect?: () => void;
            readonly onWrong?: () => void;
        }): Disposable;
        /**
         *Displays a panel with one question and up to four answers_.
         *
         * _At least **two answers** must be defined._
         *
         * **Example**
         * `
         * ```
         * GUI.HUD.showChoicePanel({
         *     question: 'This is your question.',
         *     answer1: 'First answer.',
         *     answer2: 'Second answer.',
         *     onAnswer: answerIndex => {
         *         Debug.log(`Answer ${answerIndex} selected!`)
         *     }
         * })
         * ```
         * `
         */
        function showChoicePanel(options: {
            readonly question: string;
            readonly answer1: string;
            readonly answer2: string;
            readonly answer3?: string;
            readonly answer4?: string;
            readonly onAnswer?: (t: number) => void;
        }): Disposable;
        /**
         *Toggles visibility of the `Scene` navigation at the bottom of the screen.
         */
        let sceneNavigationVisible: boolean;
        /**
         *Toggles visibility of the AR-view button.
         *
         * _By default the AR button is enabled on compatible devices._
         */
        let ARButtonVisible: boolean;
        /**
         *Toggles visibility of the VR-view button.
         *
         * _By default the VR button is enabled on compatible devices._
         */
        let VRButtonVisible: boolean;
        /**
         *Toggles visibility of the VR menu / VR back button.
         *
         * _By default this button is enabled during VR mode._
         *
         * **Note:** Disabling this button for VR-only platforms _(e.g. Daydream, Oculus Go)_ prevents users from exiting a space.
         */
        let VRBackButtonVisible: boolean;
        /**
         *Toggles visibility of the Gyroscope-view button.
         *
         * _By default the Gyro button is enabled on compatible devices._
         */
        let gyroscopeButtonVisible: boolean;
    }
    class Toggle extends GUI.BaseButton {
        constructor(options: GUI.ToggleOptions);
        onValueChange(handler: (t: boolean) => void): Disposable;
        getToggleColor(): ColorWithAlpha;
        setToggleColor(color: (ColorWithAlpha | Color)): void;
        getToggleColor(state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): ColorWithAlpha;
        setToggleColor(color: (ColorWithAlpha | Color), state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): void;
        isOn: boolean;
        labelDistribution: "left" | "right";
        readonly: boolean;
        text: GUI.Text;
    }
    class AbsLayoutChildList extends GUI.GroupChildList {
        add(view: GUI.BaseView, pos: Vector2): void;
        add(index: number, view: GUI.BaseView, pos: Vector2): void;
        add(view: GUI.BaseView, horizontal: "leading" | "center" | "trailing" | "fill", vertical: "leading" | "center" | "trailing" | "fill"): void;
        add(e: GUI.BaseView): void;
        add(index: number, e: GUI.BaseView): void;
    }
    class Chart extends GUI.BaseView {
        constructor(options: GUI.BaseViewOptions);
        clear(): void;
        addPoint(x: number, y: number): void;
        lineColor: Color;
        lineWidth: number;
    }
    /**
     *Defines the container in which a `GUI.BaseView` is created.
     * * To create 2D UI, use `GUI.screen`
     * * To create 3D UI, use `GUIItem.context`
     *
     * **Note:** GUI views can **not** change their `Context` after creation.
     */
    class Context implements Disposable, GUI.Parent {
        /**
         *@return size of this `Context`.
         */
        readonly size: Vector2;
        /**
         *Handles `onResize` events of this `Context`.
         *
         * _Triggers whenever the context is resized._
         *
         *@param handler function to call.
         */
        onResize(handler: (t: Vector2) => void): Disposable;
        /**
         *@return screen orientation of this `Context`
         */
        readonly orientation: "landscape" | "portrait";
        /**
         *Creates a `Button` in this context.
         *
         * _Buttons are commonly used for receiving inputs._
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createButton(options: GUI.ButtonOptions): GUI.Button;
        /**
         *Creates a `Slider` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createSlider(options: GUI.SliderOptions): GUI.Slider;
        /**
         *Creates a `Toggle` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createToggle(options: GUI.ToggleOptions): GUI.Toggle;
        /**
         *Creates a `Dropdown` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createDropdown(options: GUI.DropdownOptions): GUI.Dropdown;
        /**
         *Creates a `TextInput` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createTextInput(options: GUI.TextInputOptions): GUI.TextInput;
        /**
         *Creates a `DxTextInput` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createDxTextInput(options: GUI.TextInputOptions): GUI.VRTextInput;
        /**
         *Creates a `Stack` in this context.
         *
         * _The VBox is a stack with pre-defined **vertical** `orientation`._
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createVBox(options: GUI.StackOptions): GUI.Stack;
        /**
         *Creates a `Stack` in this context.
         *
         * _The HBox is a stack with pre-defined **horizontal** `orientation`._
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createHBox(options: GUI.StackOptions): GUI.Stack;
        /**
         *Creates a `Space` in this context.
         *
         * _Spaces have the highest content-fitting priority in a `GUI.Stack`._
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createSpace(options: GUI.BaseViewOptions): GUI.Space;
        /**
         *Creates an `Image` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createImage(options: GUI.ImageOptions): GUI.Image;
        /** @deprecated */ createVideo(options: GUI.VideoViewOptions): GUI.VideoView;
        /**
         *Creates a `Text` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createText(options: GUI.TextOptions): GUI.Text;
        /**
         *Creates a `GUI.Flow` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createFlow(options: GUI.FlowOptions): GUI.Flow;
        /**
         *Creates a `Scroll` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createScroll(options: GUI.ScrollOptions): GUI.Scroll;
        /**
         *Creates a `AbsLayout` in this context.
         *
         * _AbsLayouts are used to overwrite content fitting behavior._
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createAbsLayout(options: GUI.BaseViewOptions): GUI.AbsLayout;
        /**
         *Creates a `PopUp` in this context.
         *
         * _PopUps create a background overlay over all other GUI elements._
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createPopup(options: GUI.PopupOptions): GUI.Popup;
        /**
         *Creates a `Chart` in this context.
         *
         *@param options initial creation options.
         *
         *@deprecated
         */
        createChart(options: GUI.BaseViewOptions): GUI.Chart;
        /**
         *### Experimental. Internal development only.
         *
         * Creates a `Painter` view that allows draw input from a `Input.Pen`.
         */
        createPainter(options: GUI.BaseViewOptions): GUI.Painter;
        /** @deprecated */ createSpriteAnimator(options: GUI.SpriteAnimatorOptions): GUI.SpriteAnimator;
        getLineHeight(fontSize: number): number;
        getLineHeight(fontSize: number, fontStyle: "regular" | "medium" | "demibold" | "bold" | "heavy"): number;
        readonly childViews: GUI.AbsLayoutChildList;
        /**
         *Disposes this object, effectively turning this into an unmanaged resource.
         */
        dispose(): void;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView): void;
        /**
         *@deprecated use `childViews`.add()
         */
        add(view: GUI.BaseView, index: number): void;
        /**
         *@deprecated use
         * `childViews`.`addWithOrder()`)
         * remove()}
         */
        addWithOrder(view: GUI.BaseView, order: number): void;
        /**
         *@deprecated use `childViews`.remove()
         */
        remove(view: GUI.BaseView): void;
    }
    /**
     *Initial creation options of this `Button`.
     *
     * **Note**: view options can be edited after creation.
     */
    interface ButtonOptions extends GUI.BaseButtonOptions {
        /**
         *Defines the gap between `Image` and `Text` of this `Button`.
         */
        readonly gap?: number;
        /**
         *Defines the `Image`/`Text` `distribution` of this button. Default is `"horizontal"`.
         */
        readonly orientation?: "horizontal" | "vertical";
        /**
         *The `Text` of this `Button`.
         */
        readonly text?: (GUI.Text | string);
        /**
         *The `Image` of this `Button`.
         */
        readonly image?: (GUI.Image | string);
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         */
        readonly onHover?: (t: boolean) => void;
        readonly onPressDown?: (t: Vector2) => void;
        readonly onPressUp?: (t: Vector2) => void;
        /**
         *Handles click events for this `View`.
         */
        readonly onClick?: () => void;
        /**
         *Defines a callback that triggers when the `View` needs to know the mouse cursor to be set.
         * Receives a local mouse position and the flag indicating whether the element is dragging or not
         * Returns a cursor name
         */
        readonly getCursor?: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize";
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        readonly draggable?: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         */
        readonly dragOnLongPress?: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        readonly onDragStart?: () => void;
        readonly onDrag?: (t: Vector2) => void;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        readonly onDragEnd?: () => void;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Initial creation options of this `BaseView`.
     *
     * **Note**: view options can be edited after creation.
     *
     *
     */
    interface BaseViewOptions {
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    interface VideoViewOptions extends GUI.BaseViewOptions {
        readonly id: string;
        readonly videoSize: Vector2;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    /**
     *Bubble which is shown when an item is selected.
     * **Note**: In order to add UI views to the bubble, create them in the appropriate bubble context provided
     * in `GUI.onBubbleShown`.
     */
    class Bubble2D {
        /**
         *The content of the bubble. Add custom control here, default parameters are:
         * `orientation`: `vertical`
         * `distribution`: `leading`
         * `alignment`: `fill`
         */
        readonly content: GUI.Stack;
        /**
         *Creates the DX engine rotation button in the bubble context.
         */
        createRotationButton(): GUI.BaseButton;
        /**
         *Creates the DX engine translation button in the bubble context.
         */
        createTranslationButton(): GUI.BaseButton;
        /**
         *Creates the DX engine elevation button in the bubble context.
         *
         * **Note**: If the `Scene` type is `360`, the elevation button causes items to move closer or further away from the camera instead.
         */
        createElevationButton(): GUI.BaseButton;
        /**
         *Creates the DX engine scale button in the bubble context.
         */
        createScaleButton(): GUI.BaseButton;
    }
    class Text extends GUI.BaseView {
        constructor(options: GUI.TextOptions);
        label: string;
        horizontalAlignment: "center" | "left" | "right";
        verticalAlignment: "top" | "center" | "bottom";
        fontSize: number;
        fontStyle: "regular" | "medium" | "demibold" | "bold" | "heavy";
        setColor(color: (ColorWithAlpha | Color)): void;
        setColor(color: (ColorWithAlpha | Color), state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): void;
        getColor(): ColorWithAlpha;
        getColor(state: "normal" | "hovered" | "selected" | "pressed" | "disabled"): ColorWithAlpha;
    }
    interface FlowOptions extends GUI.BaseViewOptions {
        readonly columns?: number;
        readonly rows?: number;
        readonly gap?: number;
        readonly orientation?: "horizontal" | "vertical";
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    class Flow extends GUI.Group {
        constructor(options: GUI.FlowOptions);
        columns: number;
        rows: number;
        gap: number;
        orientation: "horizontal" | "vertical";
    }
    class GroupChildList extends GUI.BaseViewList {
    }
    /**
     *Initial creation options of this `Stack`.
     *
     * **Note**: view options can be edited after creation.
     *
     *
     */
    interface StackOptions extends GUI.BaseButtonOptions {
        /**
         *Defines the placement of views in this `Stack` perpendicular to its `orientation`.
         *
         * **Examples**
         *
         * ![](https://cdn.delightex.com/uploads/iNA1rOLs2tJImt54iKLA4p8pLwlgiUrbSjoyoHTfrQ1)
         * _`Stack` with `orientation: "horizontal"`,`distribution: "center"`, **`alignment: "trailing"`**._
         *
         * ![](https://cdn.delightex.com/uploads/Uxw5vUCExaTcabEvuPfTSFWOVLXnkf4SfRWtPuCLlIr)
         * _`Stack` with `orientation: "vertical"`, `distribution: "center"`, **`alignment: "trailing"`**._
         */
        readonly alignment: "leading" | "center" | "trailing" | "fill";
        /**
         *Defines the placement of views in this `Stack` along its `orientation`.
         *
         * **Examples**
         *
         * ![](https://cdn.delightex.com/uploads/FWHsMkNb5u5GiNUxlivu7CpXjhCC6bFrBcWDC5pwLWQ)
         * _`Stack` with `orientation: "horizontal"`, **`distribution: "trailing"`**, `alignment: "center"`._
         *
         * ![](https://cdn.delightex.com/uploads/LEXwpADrSTQST0Xkb6Hn3MR4wEpJoI3SmYOkJcgRY7G)
         * _`Stack` with `orientation: "vertical"`, **`distribution: "trailing"`**, `alignment: "center"`._
         */
        readonly distribution: "leading" | "center" | "trailing" | "fill";
        /**
         *The gap between views in this `Stack`.
         *
         * ![](https://cdn.delightex.com/uploads/jmBLi5mVYdz5Uf7C37GA8Z0gq1KLXUEjdGUFqqih7dp)
         */
        readonly gap?: number;
        /**
         *Handles `hover` events for this `View`.
         *
         * **Note:** `hover` events can not be triggered with touch input.
         */
        readonly onHover?: (t: boolean) => void;
        readonly onPressDown?: (t: Vector2) => void;
        readonly onPressUp?: (t: Vector2) => void;
        /**
         *Handles click events for this `View`.
         */
        readonly onClick?: () => void;
        /**
         *Defines a callback that triggers when the `View` needs to know the mouse cursor to be set.
         * Receives a local mouse position and the flag indicating whether the element is dragging or not
         * Returns a cursor name
         */
        readonly getCursor?: (pos: Vector2, pressed: boolean) => "none" | "pointer" | "text" | "grab" | "grabbing" | "ew_resize";
        /**
         *If `true`, this `View` can be dragged.
         *
         * **Note:** If this `View` is part of a `Stack`, dragging is disabled.
         */
        readonly draggable?: boolean;
        /**
         *If `true`, this `View` can be only be dragged after a long press.
         */
        readonly dragOnLongPress?: boolean;
        /**
         *Handles the start of `drag` events for this `View`.
         */
        readonly onDragStart?: () => void;
        readonly onDrag?: (t: Vector2) => void;
        /**
         *Handles the end of `drag` events for this `View`.
         */
        readonly onDragEnd?: () => void;
        /**
         *The default background color of this `View`.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *The default border color of this `View`.
         */
        readonly borderColor?: (ColorWithAlpha | Color);
        /**
         *The border width of this `View`.
         *
         * Border width is always applied **around** a view and can not be negative.
         */
        readonly borderWidth?: number;
        /**
         *The corner radius of this `View`.
         *
         * _Allows you to create smooth corners._
         *
         * **Example**
         * ```
         * //Create a red, round circle.
         * GUI.screen.createSpace({
         *     size: new Vector2(30, 30),
         *     cornerRadius: 15,
         *     backgroundColor: Color.red,
         *     position: GUI.screen.size.mult(0.5)
         * }).show()
         * ```
         */
        readonly cornerRadius?: number;
        /**
         *Position of this `View` in current `Context`.
         *
         * **Note:** The position can not be changed directly if this `View` is inside a `Stack`.
         */
        readonly position?: Vector2;
        /**
         *Width of this `View` in `dp`.
         */
        readonly width?: number;
        /**
         *Height of this `View` in `dp`.
         */
        readonly height?: number;
        /**
         *Size of this `View` in `dp`.
         */
        readonly size?: Vector2;
        /**
         *Margin of this `View` in `dp`.
         */
        readonly margin?: (number | Insets);
        /**
         *Defines a callback that updates this `View` position whenever the `Context` size changes.
         */
        readonly adjustPosition?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Defines a callback that updates this `View` size whenever the `Context` size changes.
         */
        readonly adjustSize?: (size: Vector2, guiContext: GUI.Context) => Vector2;
        /**
         *Calls a function whenever the `Context` size changes.
         */
        readonly onCanvasResize?: (size: Vector2, guiContext: GUI.Context) => void;
        /**
         *Defines a callback that triggers whenever the device screen orientation changes.
         */
        readonly onScreenOrientation?: (t: "landscape" | "portrait") => void;
        /**
         *Shadow settings used by this `View`.
         */
        readonly shadow?: GUI.Shadow;
        /**
         *If `true`, this `View` ignores ray tracing and allows inputs on the Camera viewport to pass through.
         */
        readonly ignoreTrace?: boolean;
        /**
         *If `true`, this `View` does not re-size from `Stack` `fill` - alignment or distribution.
         */
        readonly ignoreStretch?: boolean;
    }
    type EditorTabType = "script" | "coblocks";
    /**
     *Defines a dropdown option element.
     *
     * Dropdown elements are always displayed in the following order: `(icon) label`.
     */
    interface DropdownOption {
        /**
         *Defines the `Text` of this dropdown element.
         *
         * _If a string is passed, default text properties are used for creating this `View`._
         */
        readonly label: (GUI.Text | string);
        /**
         *Defines the `Image` of this dropdown element.
         *
         * _If a string is passed, default image properties are used for creating this `View`._
         */
        readonly icon?: (GUI.Image | string);
    }
    class VRTextInput extends GUI.BaseView {
        constructor(options: GUI.TextInputOptions);
        text: string;
        placeholder: string;
        readonly horizontalAlignment: "center" | "left" | "right";
        readonly verticalAlignment: "top" | "center" | "bottom";
        readOnly: boolean;
        focused: boolean;
        onValueChange(handler: (t: string) => void): Disposable;
        onStartEdit(handler: () => void): Disposable;
        onEndEdit(handler: () => void): Disposable;
        characterLimit: number;
        setTextColor(color: (ColorWithAlpha | Color)): void;
        setPlaceholderColor(color: (ColorWithAlpha | Color)): void;
        padding: Insets;
        setPadding(padding: number): void;
        setPadding(left: number, top: number, right: number, bottom: number): void;
    }
    class BaseViewList implements MutableList<GUI.BaseView> {
        addWithOrder(order: number, view: GUI.BaseView): number;
        [key: number]: GUI.BaseView;
        add(e: GUI.BaseView): void;
        add(index: number, e: GUI.BaseView): void;
        removeAt(index: number): GUI.BaseView;
        remove(e: GUI.BaseView): boolean;
        clear(): void;
        readonly length: number;
        readonly empty: boolean;
        indexOf(e: GUI.BaseView): number;
        lastIndexOf(e: GUI.BaseView): number;
        contains(e: GUI.BaseView): boolean;
        toArray(): Array<GUI.BaseView>;
        copy(): MutableList<GUI.BaseView>;
        [Symbol.iterator](): Iterator<GUI.BaseView>;
    }
    namespace BuildMode {
        let logoVisible: boolean;
    }
    namespace Editor {
        let activeTab: GUI.EditorTab;
        function getTab(index: number): GUI.EditorTab;
        function getTab(name: string): GUI.EditorTab;
        const tabs: Array<GUI.EditorTab>;
        function showTabs(): void;
        function showTabs(predicate: (tab: GUI.EditorTab) => boolean): void;
        function createCoBlocksTab(name: string): GUI.CoBlocksEditorTab;
        function createScriptTab(name: string): GUI.ScriptEditorTab;
        let visible: boolean;
        let buttonVisible: boolean;
        let windowStateButtonVisible: boolean;
        let scriptsVisible: boolean;
        let width: number;
        let dragBarVisible: boolean;
    }
    class ScriptTab {
        readonly index: number;
        readonly name: string;
        active: boolean;
    }
}
declare class PlanetItem extends AnimatedItem {
    setToSunDir(x: number, y: number, z: number): void;
    setToSunDir(dir: Vector3): void;
}
declare namespace Settings {
    /**
     *### Only for internal development
     *
     * Toggles a DX engine feature by `permissionName`.
     * * `EDIT_OBJECTS` - Toggle item selection
     * * `INSPECTOR` - Toggle item inspector
     * * `PHYSICS_PROPERTIES` - Toggle physics in inspector
     * * `BUBBLE_2D` - Toggle item transform gizmo, add scale control
     * * `BUBBLE_ROTATION` - Add X,Y,Z icons to rotation rings
     * * `RESIZE_CONTROLS_3D` - Toggle size controls for anisotropic items
     * * `TOOLBAR` - Toggle visibility of toolbar
     * * `CREATE_OBJECTS` - Toggle use of library and uploaded assets
     * * `VIDEO_UPLOAD` - Toggle video asset upload
     * * `SOUND_UPLOAD` -  Toggle sound asset upload
     * * `IMAGE_ASSETS` - Toggle image asset upload
     * * `MODEL_ASSETS` - Toggle 3D model asset upload
     * * `MUTE_BUTTON` - Toggle mute button in play mode
     * * `RESTART_SCENE` - Toggle restart button in play mode
     * * `RECORD_VIDEO` - Toggle record button in play mode
     * * `VR_BUTTON` - Toggle VR button in play mode
     * * `AR_BUTTON` - Toggle AR button in play mode
     * * `GYROSCOPE_BUTTON` - Toggle gyro button in play mode
     * * `SCENE_LIST` - Toggle scene list side-bar
     * * `HIERARCHY` - Toggle item hierarchy side-bar
     * * `NEW_SCENE` - Toggle creation of new scenes in side-bar
     * * `SHOW_TEMPLATES` - Toggle showing templates in the new scene dialog
     * * 'EDIT_STAGE' - Toggle environment settings visible
     * * 'SNAPPING' - Toggle snapping button visible
     * * 'SCENE_SWITCHER' - Toggle scene switching in play mode
     * * 'HELP_BUTTON' - Toggle help button
     * * 'PLAYER_MODE' - Toggle play button
     * * 'ROTATION_CIRCLE' - Toggle a rotation circle
     *
     *
     * **Note:** Most toggleable features can only be set in `activity` scene mode.
     */
    function setFeature(permission: "accept_activity" | "account_management" | "ar_button" | "billboard" | "bubble_2d" | "bubble_rotation" | "close_loading" | "code_editor_increased_tabs_count" | "color_chooser" | "create_objects" | "debug_panel" | "developer" | "developer_inspector" | "developer_object" | "drop_3d_models" | "drop_images" | "drop_jet_files" | "edit_objects" | "edit_object_script" | "edit_scripts" | "edit_scripts_activity_mode" | "edit_scripts_build_mode" | "edit_scripts_coblocks" | "edit_scripts_common_mode" | "edit_scripts_monaco" | "edit_stage" | "edu_admin" | "environment_360" | "errors" | "fps_label" | "fs_accept_activity" | "fs_activity_creation" | "fs_assignments" | "fs_copy_class_code" | "fs_create_assignment" | "fs_duplicate_projects" | "fs_duplicate_spaces" | "fs_edit_assignment" | "fs_edit_class" | "fs_enter_code_button" | "fs_open_on_device" | "fs_publish_to_gallery" | "fs_rename_files" | "fs_share_button" | "fs_trashcan" | "gallery" | "gyroscope_button" | "help_button" | "hierarchy" | "image_assets" | "image_search_giphy" | "inspector" | "inspector_group" | "inspector_texture" | "internal" | "internal_object" | "internal_render" | "license" | "like_gallery_space" | "logo" | "mask_object" | "merge_cube_space" | "model_assets" | "mute_button" | "new_scene" | "new_space" | "physics_properties" | "player_mode" | "poly_search" | "portrait_mode" | "record_video" | "report" | "resize_controls_3d" | "restart_scene" | "rotation_circle" | "save_360_photo" | "scene_list" | "scene_switcher" | "schools" | "script_api_level_developer" | "script_api_level_internal" | "script_button" | "script_log" | "script_popup" | "show_templates" | "simple_object" | "snapping" | "sound_assets" | "sound_upload" | "template_management" | "toolbar" | "upload_assets" | "user_menu_convert_to_student" | "user_menu_delete_account" | "user_menu_show_feature_level" | "vcs_integration" | "video_upload" | "vr_button" | "vr_controls", enabled: boolean): void;
    function getFeature(permission: "accept_activity" | "account_management" | "ar_button" | "billboard" | "bubble_2d" | "bubble_rotation" | "close_loading" | "code_editor_increased_tabs_count" | "color_chooser" | "create_objects" | "debug_panel" | "developer" | "developer_inspector" | "developer_object" | "drop_3d_models" | "drop_images" | "drop_jet_files" | "edit_objects" | "edit_object_script" | "edit_scripts" | "edit_scripts_activity_mode" | "edit_scripts_build_mode" | "edit_scripts_coblocks" | "edit_scripts_common_mode" | "edit_scripts_monaco" | "edit_stage" | "edu_admin" | "environment_360" | "errors" | "fps_label" | "fs_accept_activity" | "fs_activity_creation" | "fs_assignments" | "fs_copy_class_code" | "fs_create_assignment" | "fs_duplicate_projects" | "fs_duplicate_spaces" | "fs_edit_assignment" | "fs_edit_class" | "fs_enter_code_button" | "fs_open_on_device" | "fs_publish_to_gallery" | "fs_rename_files" | "fs_share_button" | "fs_trashcan" | "gallery" | "gyroscope_button" | "help_button" | "hierarchy" | "image_assets" | "image_search_giphy" | "inspector" | "inspector_group" | "inspector_texture" | "internal" | "internal_object" | "internal_render" | "license" | "like_gallery_space" | "logo" | "mask_object" | "merge_cube_space" | "model_assets" | "mute_button" | "new_scene" | "new_space" | "physics_properties" | "player_mode" | "poly_search" | "portrait_mode" | "record_video" | "report" | "resize_controls_3d" | "restart_scene" | "rotation_circle" | "save_360_photo" | "scene_list" | "scene_switcher" | "schools" | "script_api_level_developer" | "script_api_level_internal" | "script_button" | "script_log" | "script_popup" | "show_templates" | "simple_object" | "snapping" | "sound_assets" | "sound_upload" | "template_management" | "toolbar" | "upload_assets" | "user_menu_convert_to_student" | "user_menu_delete_account" | "user_menu_show_feature_level" | "vcs_integration" | "video_upload" | "vr_button" | "vr_controls"): boolean;
    /**
     *### Only for internal development
     *
     * Toggles item editing _(select items, edit item transform, display 2D bubble)_ in `activity` scene mode.
     */
    let objectEditingAllowed: boolean;
}
declare class Tweenables {
    static readonly number: (a: number, b: number, v: number) => number;
    static readonly vector3: (a: Vector3, b: Vector3, v: number) => Vector3;
    static readonly vector2: (a: Vector2, b: Vector2, v: number) => Vector2;
    static readonly color: (a: Color, b: Color, v: number) => Color;
    static readonly quat: (a: Quat, b: Quat, v: number) => Quat;
}
/**
 *3D model file stored in `Space`.
 *
 * Supported mesh file formats:
 *  * `.fbx` _(without embedded media)_
 *  * `.obj`_(with `.mtl`)_
 *  * `.stl`
 *
 *  Supported texture file formats:
 *  * `.jpg`
 *  * `.png`
 *  * `.tga`
 *
 *See `AnimatedItem`
 */
declare class Model3dAsset extends Asset {
    /**
     *Creates an `AnimatedItem` from this `Model3DAsset`.
     *
     *@param position initial world space position of `AnimatedItem`.
     *
     *@return created `AnimatedItem`.
     */
    createItem(position: Vector3): AnimatedItem;
    /**
     *### ONLY FOR INTERNAL DEVELOPMENT
     *
     * ---
     * Creates an `AnimatedItem` from this `Model3DAsset`.
     *
     *@param position initial world space position of `AnimatedItem`.
     *
     *@param addToScene add this item to the `Scene` after creation?
     *
     *@return created `AnimatedItem`.
     */
    createItem(position: Vector3, addToScene: boolean): AnimatedItem;
}
/**
 *Represents a `Camera` in the `Scene`.
 *
 * If this item is `focused` you can move the `Camera` via this item's `Transform`.
 */
declare class CameraItem extends ServiceItem {
    /**
     *Defines the `movement` type of this camera item.
     *
     * Movement types
     * * `fly` - Camera can fly through the `Scene`
     * * `walk` - Camera walks over the `Scene`, using gravity
     * * `fixed_position` - Movement is disabled. Camera can only rotate
     * * `fixed` - Movement and rotation is disabled
     * * `orbit` - Camera rotates around a fixed target in the `Scene`
     * * `editor` - Camera uses 3D editor controls
     * * `pan_zoom` - Camera moves and zooms without rotation
     */
    movement: "fly" | "walk" | "fixed_position" | "fixed" | "orbit" | "editor" | "pan_zoom";
    /**
     *Defines the movement speed of this camera item in `walk` and `fly` mode.
     */
    movementSpeed: number;
    /**
     *Defines the projection `mode` of this camera item.
     *
     * * `perspective` - Camera can get closer or further away from items. Distances of items can be judged.
     * * `orthographic` - Items do not show depth and their scale ignores distance to camera.
     *
     * ![](https://cdn.delightex.com/uploads/eBjjqiDEvH3ZrZkunlBa3Ek7apHOkWBx4YHpn4VqYZR)
     */
    projection: Camera.ProjectionMode;
    /**
     *Defines the field of view _(FoV)_ in degrees in `perspective` projection mode.
     *
     * **Note:** FoV is ignored when projection mode is `orthographic`.
     */
    fieldOfView: number;
    /**
     *Defines the projection size in meters in `orthographic` projection mode.
     * Projection size is calculated using smaller side of the screen.
     */
    orthographicSize: number;
    /**
     *Toggles camera collision with other items.
     */
    collision: boolean;
    /**
     *Creates a 360 image based on the current item position and prompts the picture download.
     */
    create360Photo(): void;
    /**
     *### For internal development only.
     *
     * Renders a snapshot using `CameraItem` transform and parameters and stores the result as CDN-asset.
     *
     *@param resolution resolution modifier for the captured picture.
     *
     *@param handler method which provides image `id` once upload is complete.
     */
    takeSnapshot(resolution: Vector2, handler: (t: string) => void): void;
}
declare class ItemCollection implements MutableList<BaseItem> {
    readonly byName: {
        readonly [key: string]: BaseItem;
        readonly [key: number]: BaseItem;
    };
    [key: number]: BaseItem;
    add(e: BaseItem): void;
    add(index: number, e: BaseItem): void;
    removeAt(index: number): BaseItem;
    remove(e: BaseItem): boolean;
    clear(): void;
    readonly length: number;
    readonly empty: boolean;
    indexOf(e: BaseItem): number;
    lastIndexOf(e: BaseItem): number;
    contains(e: BaseItem): boolean;
    toArray(): Array<BaseItem>;
    copy(): MutableList<BaseItem>;
    [Symbol.iterator](): Iterator<BaseItem>;
}
/**
 *@deprecated Legacy `BaseItem` position and rotation service.
 * Use `BaseItem.transform` for setting item transform.
 *
 *See `Transform`
 */
interface PositionService {
    /** @deprecated */ getPosition(): Vector3;
    /** @deprecated */ readonly position: Vector3;
    /** @deprecated */ getAxisX(): Vector3;
    /** @deprecated */ getAxisY(): Vector3;
    /** @deprecated */ readonly axisY: Vector3;
    /** @deprecated */ getAxisZ(): Vector3;
    /** @deprecated */ readonly axisZ: Vector3;
    /** @deprecated */ readonly orientationQuat: Quat;
    /** @deprecated */ distanceToItem(other: BaseItem): number;
    /** @deprecated */ distanceToPoint(x: number, y: number, z: number): number;
    /** @deprecated */ distanceToPoint(point: Vector3): number;
}
/**
 *Item with animations tracks.
 *
 * Use methods and properties in `AnimatedItem.animation` to control this item's animations.
 *
 * **Note:** By default, animated items smoothly transition between animations and
 * use **normalized time** to define the start and end of tracks.
 */
declare class AnimatedItem extends PhongItem {
    modelId: string;
    /** @deprecated */ playAnimation(track: string): void;
    /** @deprecated */ playAnimation(track: string, startTime: number, endTime: number): void;
    /** @deprecated */ playLoopingAnimation(track: string): void;
    /** @deprecated */ playLoopingAnimation(track: string, startTime: number, endTime: number): void;
    setTextureMapping(mapping: Array<number>): void;
    getTextureMapping(): Array<number>;
    setTextureIds(ids: Array<string>): void;
    getTextureIds(): Array<string>;
    getTextureId(idx: number): string;
    setTextureId(idx: number, value: string): void;
    /** @deprecated */ setVisibleParts(visibleList: Array<string>): void;
    /** @deprecated */ getDefaultVisibleParts(): Array<string>;
    /** @deprecated */ readonly defaultVisibleParts: Array<string>;
    /** @deprecated */ getAllParts(): Array<string>;
    /** @deprecated */ readonly allParts: Array<string>;
    readonly rootNode: ModelItemNode;
    reimportModel(): void;
    setAlphaTest(enabled: boolean): void;
    /**
     *Returns an array of item parts that can be recolored.
     */
    readonly coloredParts: Array<ColoredPart>;
    readonly animation: {
        /**
         *Returns an array of item parts that can be recolored.
         */
        readonly morphTargets: Array<MorphTarget>;
        play(options: {
            readonly layer?: number;
            readonly name: string;
            readonly repeatCount?: number;
            readonly looping?: boolean;
            readonly startTime?: number;
            readonly endTime?: number;
            readonly normalizedTime?: boolean;
            readonly pingpong?: boolean;
            readonly queued?: boolean;
            readonly mask?: Iterable<string>;
        }): void;
        setLayerWeight(layer: number, weight: number): void;
        getLayerWeight(layer: number): number;
        /**
         *Plays an animation track on this item.
         *
         *@param track name of the animation.
         */
        play(track: string): void;
        /**
         *Plays an animation track on this item with defined `startTime` and `endTime`.
         *
         *@param track name of the animation.
         *
         *@param startTime start of animation track.
         *
         *@param endTime end of animation track.
         */
        play(track: string, startTime: number, endTime: number): void;
        /**
         *Plays an animation track on this item with defined `startTime` and `endTime`.
         *
         *@param track name of the animation.
         *
         *@param startTime start of animation track.
         *
         *@param endTime end of animation track.
         */
        play(track: string, startTime: number, endTime: number, layer: number): void;
        /**
         *Adds an animation to the playback queue.
         *
         * _Queued animations play after the current one completes._
         *
         *@param track name of the animation.
         */
        playQueued(track: string): void;
        /**
         *Adds an animation to the playback queue.
         *
         * _Queued animations play after the current one completes._
         *
         *@param track name of the animation.
         */
        playQueued(track: string, layer: number): void;
        /**
         *Adds an animation to the playback queue with defined `startTime` and `endTime`.
         *
         * _Queued animations play after the current one completes._
         *
         *@param track name of the animation.
         *
         *@param startTime start of animation track.
         *
         *@param endTime end of animation track.
         */
        playQueued(track: string, startTime: number, endTime: number): void;
        /**
         *Adds an animation to the playback queue with defined `startTime` and `endTime`.
         *
         * _Queued animations play after the current one completes._
         *
         *@param track name of the animation.
         *
         *@param startTime start of animation track.
         *
         *@param endTime end of animation track.
         */
        playQueued(track: string, startTime: number, endTime: number, layer: number): void;
        /**
         *Plays a **looping** animation track on this item.
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         */
        playLooping(track: string): void;
        /**
         *Plays a **looping** animation track on this item.
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         */
        playLooping(track: string, layer: number): void;
        /**
         *Plays a **looping** animation track on this item with defined `startTime` and `endTime`.
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         *
         *@param startTime start of animation track.
         *
         *@param endTime end of animation track.
         */
        playLooping(track: string, startTime: number, endTime: number): void;
        /**
         *Plays a **looping** animation track on this item with defined `startTime` and `endTime`.
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         *
         *@param startTime start of animation track.
         *
         *@param endTime end of animation track.
         */
        playLooping(track: string, startTime: number, endTime: number, layer: number): void;
        /**
         *Plays a **looping** animation track on this item.
         *
         * _Ping-Pong loops play animation tracks in reverse once the end is reached._
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         */
        playLoopingPingpong(track: string): void;
        /**
         *Plays a **looping** animation track on this item.
         *
         * _Ping-Pong loops play animation tracks in reverse once the end is reached._
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         */
        playLoopingPingpong(track: string, layer: number): void;
        /**
         *Plays a **looping** animation track on this item with defined `startTime` and `endTime`.
         *
         * _Ping-Pong loops play animation tracks in reverse once the end is reached._
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         */
        playLoopingPingpong(track: string, startTime: number, endTime: number): void;
        /**
         *Plays a **looping** animation track on this item with defined `startTime` and `endTime`.
         *
         * _Ping-Pong loops play animation tracks in reverse once the end is reached._
         *
         * **Note:** Looping animations **never complete**.
         *
         *@param track name of the animation.
         */
        playLoopingPingpong(track: string, startTime: number, endTime: number, layer: number): void;
        /**
         *Freezes this item to the last frame of an animation.
         *
         *@param state animation track to use as freeze-frame.
         */
        setState(state: string): void;
        /**
         *Freezes this item to the `trackTime` of an animation.
         *
         *@param state name of animation.
         *
         *@param trackTime animation time to use as freeze-frame.
         */
        setState(state: string, trackTime: number): void;
        /**
         *Freezes this item to the `trackTime` of an animation.
         *
         *@param state name of animation.
         *
         *@param trackTime animation time to use as freeze-frame.
         */
        setState(state: string, trackTime: number, layer: number): void;
        /**
         *Stops playback of an animation and sets this item to its default pose.
         */
        stop(): void;
        /**
         *Defines the playback speed of all animations on this item
         *
         *@param speed animation speed. Default is `1`.
         */
        speed: number;
        /**
         *Toggles use of _normalized time_ for animation methods on this item. Default is `true`.
         *
         * * If `true`, _time_ related properties and methods use normalized time in range `[0,1]`
         * * If `false`, _time_ related properties and methods use seconds.
         */
        useNormalizedTime: boolean;
        /**
         *Defines the transition time between animation track changes.
         *
         * _If a new animation is played while the current one did not complete, transition is applied._
         *
         *@param time transition time in seconds.
         */
        transitionTime: number;
        /**
         *Creates a handler that triggers on specified animation track `time` for the current animation.
         *
         * **Note:** This handler is disposed when a new animation is played. Track `time` is normalized by default.
         *
         *@param time animation track time.
         *
         *@param callback function to call on specified track time.
         */
        onTrackTime(time: number, callback: () => void): void;
        /**
         *Creates a handler that triggers on specified animation track `time` for the current animation.
         *
         * **Note:** This handler is disposed when a new animation is played. Track `time` is normalized by default.
         *
         *@param time animation track time.
         *
         *@param callback function to call on specified track time.
         */
        onTrackTime(time: number, callback: () => void, layer: number): void;
        /**
         *Returns `true` if an animation is playing on this item.
         */
        readonly isPlaying: boolean;
        readonly time: number;
        getTime(layer: number): number;
        /**
         *Returns the name of the currently playing animation.
         */
        readonly name: string;
        /**
         *Returns the name of the currently playing animation.
         */
        getName(layer: number): string;
        /**
         *@return length of the current animation in seconds.
         */
        readonly length: number;
        /**
         *@return length of the current animation in seconds.
         */
        getLength(layer: number): number;
        /**
         *Returns all animation tracks of this item.
         */
        readonly tracks: Array<string>;
        /**
         *Returns all animation categories that are defined for this item.
         *
         * Animation categories are created via [JSON model descriptor](https://delightex.atlassian.net/wiki/spaces/DEV/pages/98009089/Model+Descriptor+JSON).
         */
        readonly categories: Array<AnimationCategory>;
        /**
         *Creates a handler that triggers when the current animation completes.
         *
         * **Note:** This handler is disposed when a new animation is played. Looping animations do not complete.
         *
         *@param callback function to call when animation completes.
         */
        onFinish(callback: () => void): void;
        /**
         *Creates a handler that triggers when the current animation completes.
         *
         * **Note:** This handler is disposed when a new animation is played. Looping animations do not complete.
         *
         *@param callback function to call when animation completes.
         */
        onFinish(callback: () => void, layer: number): void;
        addCustomAnimation(animationFileId: string, sourceFileId: string): void;
    };
}
declare namespace Web {
    function httpGet(path: string, callback: (t: string) => void): void;
    function httpGet(path: string): Promise<string>;
    function httpPost(path: string, data: string, callback: (t: string) => void): void;
    function httpPost(path: string, data: string): Promise<string>;
    /**
     *Returns the provided URL parameter value _(e.g. `http://example.com/?myparam=value1`)_
     *
     * **Note:** This returns the first value if multiple values are specified for the same parameter.
     */
    function getURLParameter(parameter: string): string;
    /**
     *Returns provided URL parameter values _(e.g. `http://example.com/?myparam=value1=value2=value3`)_
     */
    function getURLParameters(parameter: string): Array<string>;
}
declare class GearConstraint extends Constraint {
}
declare class ServiceItem extends GameItem {
}
declare class LakeItem extends GameItem {
    setSpline(b: boolean): void;
    setConstColor(b: boolean): void;
    fixPosition(): void;
    /**
     *Add a new vertex in local position (x, y)
     */
    addVertex(x: number, y: number): void;
    /**
     *Removes all vertices in this LakeItem
     */
    clearVertices(): void;
    /**
     *Add a new vertex in global position projection on the lake plane
     *
     *@param position global position of a new vertex
     */
    addVertex(position: Vector3): void;
    setShoreColor(red: number, green: number, blue: number): void;
}
/**
 *Namespace for managing view modes _(e.g. 3D, VR, AR)_ and `Scene` states.
 */
declare namespace Application {
    /**
     *If `true`, application is muted. Default is `false`.
     */
    let isMuted: boolean;
    /**
     *Handles an `onModeChanged` event which triggers whenever the _view mode_ changes.
     *
     *@param handler function to call once view mode changes.
     */
    function onModeChanged(handler: (t: Application.ViewMode) => void): Disposable;
    /**
     *### Only for internal development
     *
     * Starts the `Play` mode of this `Scene`.
     *
     * _Can only be used if this `Scene` is in `Activity` mode._
     */
    function startPlayMode(): void;
    /**
     *Quits this `Space` and returns the user to the previous screen or `script mode`.
     */
    function quit(): void;
    /**
     *Quits this `Space` and returns the user to the previous screen or `script mode`.
     *
     *@param imageId image shown on play screen.
     */
    function quit(imageId: string): void;
    /**
     *Resets this `Scene` to its starting state.
     *
     * **Note**: Scripts of this `Scene` do not restart.
     *  **Note** This method works only in play mode.
     */
    function resetScene(): void;
    /**
     *Disposes changes done to this `Scene` during _play mode_  and restarts scripts.
     */
    function restartScene(): void;
    /**
     *Defines the current `viewMode` of this `Scene`.
     *
     * Supported view modes
     * * `default` - Default single-screen rendering of this `Scene`
     * * `gyro` - Mode with sensor-based camera
     * * `vr` - Stereoscopic projection of this `Scene` _(including VR controls)_
     * * `ar` - AR projection of this `Scene`
     *  * `stereo` - Stereoscopic projection of this `Scene` _(without VR controls)_
     * * `stereo_ar` - AR projection of `Scene` through stereo optics
     *
     * **Note**: Entering `vr` or `ar` mode restarts the `Scene`.
     */
    let viewMode: Application.ViewMode;
    /**
     *Returns the `Scene` script mode.
     *
     * Script modes
     * * `play` - Play mode: `Physics` simulation is enabled.
     * * `activity` - Activity mode: Activity-related methods are allowed.
     * * `build` - Build mode: Content in this `Scene` can be created with DX engine tools.
     */
    const scriptMode: Application.ScriptMode;
    /**
     *Returns `true` if this `Scene` is run on a mobile device _(including tablet.)_
     */
    const isMobile: boolean;
    /**
     *Returns `true` if this `Scene` is run on a tablet.
     */
    const isTablet: boolean;
    /**
     *Returns `true` if this `Scene` is run on a web browser.
     */
    const isWeb: boolean;
    /**
     *Returns `true` if this application is embedded in an iFrame on the web platform
     */
    const isEmbedded: boolean;
    /**
     *Returns `true` if the provided view mode is supported on this device.
     *
     *@param mode view mode to check.
     */
    function isViewModeSupported(mode: Application.ViewMode): boolean;
    /**
     *Returns the currently active user locale.
     */
    const locale: string;
    /**
     *Returns the currently active user id.
     */
    const userId: string;
    /**
     *Defines the `onExit` handler which triggers before this `Scene` is ended.
     *
     * **Note:** Unlike other event-handlers, this method can be called multiple times
     * to add additional functions to be called on scene exit.
     *
     *@param onExit function to call when `Scene` ends.
     */
    function onSceneExit(onExit: () => void): Disposable;
    /**
     *Defines the `onSceneSwitch` handler which triggers before this `Scene` changes to another.
     *
     * **Note:** Unlike other event-handlers, this method can be called multiple times
     * to add additional functions to be called on scene switch.
     *
     *@param handler function to call when `Scene` switches. Provides an `index` parameter for the target `Scene`.
     */
    function onSceneSwitch(handler: (t: number) => void): Disposable;
    /**
     *Defines an `onStart` handler which triggers **once** when the application starts.
     *
     * In activity spaces, this handler only triggers in activity `scriptMode`.
     *
     * **Note:** This method can be called multiple times to create multiple event handlers that
     * trigger at start of the application.
     *
     *@param handler function to call **once** on start of application.
     */
    function onStart(handler: () => void): Disposable;
    /**
     *Returns `true` if the device is currently connected to the internet.
     *
     * **Note:** Use `.onValueChanged` method of this boolean property to listen to changes to the internet connection.
     */
    const isConnectedToInternet: ReadableProperty<boolean>;
    /**
     *Toggles fullscreen view on the web browser. Default is `false`.
     */
    let fullscreen: boolean;
    /**
     *View modes supported by DX Engine
     * * `default` - Default single-screen rendering of this `Scene`
     * * `gyro` - Mode with sensor-based camera
     * * `vr` - Stereoscopic projection of this `Scene` _(including VR controls)_
     * * `ar` - AR projection of this `Scene`
     * * `stereo` - Stereoscopic projection of this `Scene` _(without VR controls)_
     * * `stereo_ar` - AR projection of `Scene` through stereo optics
     *
     * **Note**: Entering `vr` or `ar` mode restarts the `Scene`.
     */
    type ViewMode = "default" | "gyro" | "vr" | "ar" | "stereo" | "stereo_ar";
    /**
     *Defines the current script mode of this `Space`.
     * * `play` - Play mode: `Physics` simulation is enabled.
     * * `activity` - Activity mode: Editing of permissions is allowed.
     * * `build` - Build mode: Content in this `Scene` can be created with DX engine tools.
     */
    type ScriptMode = "play" | "build" | "activity";
}
declare class LibraryItem {
    readonly name: string;
    readonly availableToBasic: boolean;
    readonly unlisted: boolean;
    readonly thumbnailId: string;
    create(position: Vector3): BaseItem;
    /**
     *### ONLY FOR INTERNAL DEVELOPMENT
     *
     * ---
     * Creates a `BaseItem` from this `LibraryItem`.
     *
     *@param position initial world space position of the item.
     *
     *@param addToScene add this item to the `Scene` after creation?
     *
     *@return created item.
     */
    create(position: Vector3, addToScene: boolean): BaseItem;
    /**
     *...
     *
     *@return permission level of this item
     */
    readonly permissionLevel: "public" | "developer" | "internal";
}
declare class SemiTorus extends TorusItemBase {
}
/**
 *The `Cuboid` (or `FlexCuboid`) is a modifiable item which can be adjusted in
 * _length_, _width_, and _height_.
 *
 * **Note:** `Cuboid` property adjustments are applied _symmetrically_.
 */
declare class Cuboid extends AnisotropicItem {
    /**
     *Defines the `length` of this `Cuboid`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    length: number;
    /** @deprecated */ setLength(length: number): void;
    /**
     *Defines the `width` of this `Cuboid`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    width: number;
    /** @deprecated */ setWidth(width: number): void;
    /**
     *Defines the `height` of this `Cuboid`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    height: number;
    /** @deprecated */ setHeight(height: number): void;
    /** @deprecated */ setText(text: any): void;
    /** @deprecated */ text: any;
    /** @deprecated */ setTextColor(red: number, green: number, blue: number): void;
    /** @deprecated */ setFontSize(value: number): void;
    setSize(sx: number, sy: number, sz: number): void;
}
declare class Direction {
    static readonly left: Vector3;
    static readonly right: Vector3;
    static readonly up: Vector3;
    static readonly down: Vector3;
    static readonly forward: Vector3;
    static readonly back: Vector3;
}
/**
 *The `Text3DItem` is used to display 3D text in a `Scene`.
 *
 * Unlike `TextItem`, this item displays text with adjustable depth and is limited to `30` characters.
 *
 *  For more control over the displayed text, formatting and styling use `GUIItem`.
 */
declare class Text3DItem extends AnisotropicItem {
    /**
     *Defines the displayed text of this `Text3DItem`.
     *
     * **Note:** Character count is limited to `30`.
     */
    text: string;
    setService(i: number): void;
}
declare class Quat {
    constructor(qx: number, qy: number, qz: number, qw: number);
    readonly axisX: Vector3;
    readonly axisY: Vector3;
    readonly axisZ: Vector3;
    apply(other: Quat): Quat;
    compose(other: Quat): Quat;
    dot(other: Quat): number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
    slerp(b: Quat, wb: number): Quat;
    equals(q2: Quat): boolean;
    toString(): string;
    /** @deprecated */ getAngle(): number;
    getRotationAxis(): Vector3;
    getRotationAngle(): number;
    inverse(): Quat;
    getEulerAngles(): Vector3;
    static mul(a: Quat, b: Quat): Quat;
    static slerp(a: Quat, b: Quat, wb: number): Quat;
    static dot(a: Quat, b: Quat): number;
    static makeRotation(axis: Vector3, angle: number): Quat;
    static fromEulerAngles(e: Vector3): Quat;
    static fromEulerAngles(x: number, y: number, z: number): Quat;
    /**
     *Returns the identity rotation _(e.g. an item is in perfect aligned to the world or parent axes)_
     */
    static readonly identity: Quat;
}
interface __PhongParameters {
    readonly dLevel: number;
    readonly dPower: number;
    readonly sLevel: number;
    readonly sPower: number;
}
declare class PathTail {
    getColor(): string;
    setColor(color: string): void;
    getThickness(): number;
    setThickness(thickness: number): void;
    addFirst(x: number, y: number, z: number): void;
    addLast(x: number, y: number, z: number): void;
    updateFirst(x: number, y: number, z: number): void;
    updateLast(x: number, y: number, z: number): void;
    removeFirst(): void;
    removeLast(): void;
    removeAll(): void;
}
interface Property<T> extends ReadableProperty<T> {
    value: T;
    onValueChanged(handler: (t: T) => void): Disposable;
}
/**
 *Image file stored in `Space`. Can be displayed in
 * `2D` or `3D` context.
 *
 * Supported file formats
 *  * `.jpg`
 *  * `.png`
 *  * `.bmp`
 *  * `.gif`
 *  * `.svg`
 *
 *See `ImageItem`
 *
 *See `GUI.Image`
 */
declare class ImageAsset extends Asset {
    /**
     *@return image file type _(`.png`, `.gif`, `.jpg`, `.bmp`, `.svg`)_.
     */
    readonly type: string;
    /**
     *Returns aspect ratio of this image, calculated `width` divided by `height`.
     *
     * **Example:**
     * * Image resolution of `100 px` width and `50 px` height returns `2`
     * * Image resolution of `50 px` width and `100 px` height returns `0.5`
     *
     *@return aspect ratio of image file.
     *
     *See `GUI.Image`
     */
    readonly aspectRatio: number;
    /**
     *Downsampled version of this `ImageAsset`.
     *
     * Use asset upload options to define the size of the downsampled version.
     *
     *@return downsampled image id.
     *
     *See `Data.uploadImage`
     */
    readonly downsampled: string;
    /**
     *Creates an `ImageItem` from this `ImageAsset`.
     *
     *@param position initial world space position of `ImageItem`.
     *
     *@return created `ImageItem`.
     */
    createItem(position: Vector3): ImageItem;
    /**
     *### Only for internal development
     *
     * Creates an `ImageItem` from this `ImageAsset`.
     *
     *@param position initial world space position of `ImageItem`.
     *
     *@param addToScene add this item to the `Scene` after creation
     *
     *@return created `ImageItem`.
     */
    createItem(position: Vector3, addToScene: boolean): ImageItem;
}
declare class Frustum extends AnisotropicBaseItem {
    setSize(bottomRadiusX: number, topRadiusX: number, ratio: number, height: number): void;
    bottomRadiusX: number;
    bottomRadiusY: number;
    topRadiusX: number;
    topRadiusY: number;
    readonly ratio: number;
    vertices: number;
    /** @deprecated */ setHeight(height: number): void;
    height: number;
    setVertices(v: number): void;
}
declare class LightItem extends ServiceItem {
    intensity: number;
    shadowStrength: number;
    shadow: boolean;
    shadowType: "TAP_1" | "PCF_2x2" | "PCF_4x4" | "PCF_6x6";
    readonly shadowResolution: number;
    addToLightReceiveFilter(item: BaseItem): boolean;
    removeFromLightReceiveFilter(item: BaseItem): boolean;
    addToShadowCastFilter(item: BaseItem): void;
    removeFromShadowCastFilter(item: BaseItem): void;
}
/**
 *The `Cone` is a modifiable item which can be adjusted in
 * `height`, bottom `radius`.
 */
declare class Cone extends AnisotropicItem {
    /**
     *@deprecated Use `Cone.height` and `Cone.radius` instead.
     */
    setSize(radius: number, height: number): void;
    /**
     *Defines the `radius` of this `Cone`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setRadius(radius: number): void;
    /**
     *Defines the `radius` of this `Cone`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    radius: number;
    /**
     *Defines the `height` of this `Cone`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setHeight(height: number): void;
    /**
     *Defines the `height` of this `Cone`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    height: number;
}
/**
 *Defines the position, scale and rotation of an item.
 *
 * Every `Transform` can be assigned to a `BaseItem.parent` which allows hierarchical editing of their position, scale and rotation.
 * Created hierarchies are displayed in the **Item Hierarchy** tab.
 */
declare class ReadonlyTransform {
    /**
     *Position of this `Transform` using `X`, `Y`, and `Z` coordinates.
     *
     * **Note**: By default, DX engine uses `Z` for _"up"_.
     */
    readonly position: Vector3;
    /**
     *Rotation of this `Transform` stored as `Quat`.
     */
    readonly rotation: Quat;
    /**
     *Scale of this `Transform`.
     *
     * _Default value is `1`_.
     */
    readonly scale: number;
    /**
     *Red axis of this `Transform`.
     */
    readonly axisX: Vector3;
    /**
     *Green axis of this `Transform`.
     */
    readonly axisY: Vector3;
    /**
     *Blue axis of this `Transform`.
     */
    readonly axisZ: Vector3;
    /**
     *Shorthand for `Y` - axis.
     *
     * **Note**: By default, DX Engine uses the green `Y` axis as _forward_ vector.
     */
    readonly forward: Vector3;
    /**
     *Shorthand for `X` - axis.
     *
     * **Note**: By default, DX Engine uses the red `X` axis as _right_ vector.
     */
    readonly right: Vector3;
    /**
     *Shorthand for `Z` - axis.
     *
     * **Note**: By default, DX Engine uses the `Z` axis as _up_ vector.
     */
    readonly up: Vector3;
    /**
     *Converts world `position` to local `position` of this `Transform`.
     *
     *@param position world space point.
     *
     *@return local space point.
     */
    worldToLocalPoint(position: Vector3): Vector3;
    /**
     *Converts world `direction` to local `direction` of this `Transform`.
     *
     *@param direction world space direction.
     *
     *@return local space direction.
     */
    worldToLocalVector(direction: Vector3): Vector3;
    /**
     *Converts local `position` to world `position` of this `Transform`.
     *
     *@param position local space point.`
     *
     *@return world space point.
     */
    localToWorldPoint(position: Vector3): Vector3;
    /**
     *Converts local `direction` to world `direction` of this `Transform`.
     *
     *@param direction local space direction.
     *
     *@return world space direction.
     */
    localToWorldVector(direction: Vector3): Vector3;
    /**
     *Returns a copy of this `Transform`.
     *
     *@return copy of this `Transform`.
     */
    copy(): Transform;
}
declare class Controller {
    onButtonDown(handler: () => void, button: "trigger" | "touch_button" | "grip_button" | "main_button" | "secondary_button"): void;
    onButtonUp(handler: () => void, button: "trigger" | "touch_button" | "grip_button" | "main_button" | "secondary_button"): void;
    onButtonPressed(handler: () => void, button: "trigger" | "touch_button" | "grip_button" | "main_button" | "secondary_button"): void;
    readonly transform: ReadonlyTransform;
    readonly touched: boolean;
    readonly touch: Vector2;
    vibrate(duration: number): void;
    render(enabled: boolean): void;
    raycast(enabled: boolean): void;
    renderReticle: boolean;
    readonly distanceToReticle: number;
    onCollisionEnter(handler: (t: BaseItem) => void): void;
    onCollisionExit(handler: (t: BaseItem) => void): void;
}
declare class RoadItem extends FlexWallItem {
    setStandardMarkUp(lineIndex: number, lines: number, dotted: boolean, adjust: number, thick: number, dimX: number, dimY: number, dimZ: number, r: number, g: number, b: number): void;
    setDottedMarkUp(index: number, lineIndex: number, thick: number, dimX: number, dimY: number): void;
    setDoubleMarkUp(index: number, lineIndex: number, thick: number, adjust: number, dimZ: number): void;
    setMarkUp(index: number, lineIndex: number, lines: number, dotted: boolean, adjust: number, thick: number, dimX: number, dimY: number, dimZ: number): void;
}
declare class FlatLineItem extends Vertices2DItem {
    setHeight(h: number): void;
    getHeight(): number;
}
declare class Model {
    constructor();
    getProperty(key: string): Property<string>;
    getNumberProperty(key: string): Property<number>;
    getVector2Property(key: string): Property<Vector2>;
    getVector3Property(key: string): Property<Vector3>;
    getBooleanProperty(key: string): Property<boolean>;
    getQuatProperty(key: string): Property<Quat>;
    getColorProperty(key: string): Property<Color>;
    getChild(key: string): Property<Model>;
    getObservableList(key: string): ObservableList<Model>;
    readonly id: string;
}
declare class ModelItemNode {
    readonly name: string;
    readonly children: Array<ModelItemNode>;
    localTransform: ReadonlyTransform;
    transform: ReadonlyTransform;
}
/**
 *Defines the position, scale and rotation of an item.
 *
 * Every `Transform` can be assigned to a `BaseItem.parent` which allows hierarchical editing of their position, scale and rotation.
 * Created hierarchies are displayed in the **Item Hierarchy** tab.
 */
declare class Transform extends ReadonlyTransform {
    constructor();
    constructor(pos: Vector3, axisX: Vector3, axisY: Vector3, axisZ: Vector3);
    position: Vector3;
    rotation: Quat;
    scale: number;
    /**
     *Sets values of this `Transform` to another `Transform`.
     *
     *@param transform `Transform` to copy values from.
     */
    set(transform: ReadonlyTransform): Transform;
    /**
     *Rotates this `Transform` so that the forward vector points to the `worldPosition`.
     *
     * **Note**: By default, DX engine uses `Y` axis as forward vector.
     *
     *@param worldPosition point to look at.
     *
     *@param worldUp upward direction.
     */
    lookAt(worldPosition: Vector3, worldUp: Vector3): Transform;
    /**
     *Rotates this `Transform` so that the forward vector points to the `worldPosition`.
     *
     * **Note**: By default, DX engine uses `Y` axis as forward vector.
     *
     *@param worldPosition point to look at.
     */
    lookAt(worldPosition: Vector3): Transform;
    /**
     *Rotates this `Transform` so that
     * * its local `Y`-axis points towards the defined `direction`.
     * * its local `Z`-axis points towards the `worldUp` direction.
     *
     * **Note:** The local `Z`-axis always attempts to be perpendicular to `Y`, which may lead to
     * `worldUp` not always accurately pointed at.
     *
     *@param direction euler rotation to apply.
     *
     *@param worldUp upward direction.
     */
    setDirection(direction: Vector3, worldUp: Vector3): Transform;
    /**
     *Rotates this `Transform` so that
     * * its local `Y`-axis points towards the defined `direction`.
     *
     *@param direction
     */
    setDirection(direction: Vector3): Transform;
    /**
     *Rotates this `Transform` by `angleInRadians` around an `origin` point using `axis` as rotation direction.
     *
     *@param origin world space position to rotate around.
     *
     *@param axis rotation axis.
     *
     *@param angleInRadians rotation in radians.
     */
    rotate(origin: Vector3, axis: Vector3, angleInRadians: number): Transform;
    /**
     *Rotates this `Transform` by `angleInRadians` around world position `(0,0,0)` towards `axis` direction.
     *
     *@param axis rotation axis.
     *
     *@param angleInRadians rotation in radians.
     */
    rotate(axis: Vector3, angleInRadians: number): Transform;
    /**
     *Rotates this `Transform` by `angleInRadians` around an `offset` towards `axis` direction.
     *
     *@param offset offset relative to current position.
     *
     *@param axis rotation axis.
     *
     *@param angleInRadians rotation in radians.
     */
    rotateLocal(offset: Vector3, axis: Vector3, angleInRadians: number): Transform;
    /**
     *Rotates this `Transform` by `angleInRadians` around its pivot towards `axis` direction.
     *
     *@param axis rotation axis.
     *
     *@param angleInRadians rotation in radians.
     */
    rotateLocal(axis: Vector3, angleInRadians: number): Transform;
    /**
     *Moves this `Transform` by `translation`.
     *
     *@param translation translation relative to world coordinate system.
     */
    translate(translation: Vector3): Transform;
    /**
     *Moves this `Transform` by `translation`.
     *
     *@param translation translation relative to this `Transform`.
     */
    translateLocal(translation: Vector3): Transform;
    /**
     *Multiplies this `Transform` current scale by `scale`
     *
     *@param scaleFactor
     */
    multScale(scaleFactor: number): Transform;
    /**
     *Additively applies values of another `Transform` to this `Transform`.
     *
     *@param other `Transform` to add values from.
     */
    apply(other: ReadonlyTransform): Transform;
    /**
     *Returns a new `Transform` created by combining this and `other`.
     *
     *@param other `Transform` to add values from.
     *
     *@return new `Transform`.
     */
    compose(other: ReadonlyTransform): Transform;
    /**
     *Inverts all values of this `Transform`.
     */
    invert(): Transform;
    /**
     *Swaps `Y` and `Z` axes of this `Transform.
     */
    swapYZ(): Transform;
}
/**
 *Audio file stored in `Space`.
 * Sound assets can be played as global `Sound` or as spatial `SoundItem`.
 *
 * Supported file formats
 *  * `.mp3`
 *  * `.wav`
 *  * `.aac`
 *  * `.m4a`
 *
 *See `Sound`
 *
 *See `SoundItem`
 */
declare class SoundAsset extends Asset {
    /**
     *Creates a `SoundItem` from this `SoundAsset`.
     *
     *@param position initial world space position of `SoundItem`.
     *
     *@return created `SoundItem`.
     */
    createItem(position: Vector3): SoundItem;
    /**
     *### ONLY FOR INTERNAL DEVELOPMENT
     *
     * ---
     * Creates a `SoundItem` from this `SoundAsset`.
     *
     *@param position initial world space position of `SoundItem`.
     *
     *@param addToScene add this item to the `Scene` after creation?
     *
     *@return created `SoundItem`.
     */
    createItem(position: Vector3, addToScene: boolean): SoundItem;
}
/**
 *The `ConeFrustum` is a modifiable item which can be adjusted in
 * `height`, bottom `radius` and `topRadius`.
 */
declare class ConeFrustum extends AnisotropicItem {
    /**
     *@deprecated Use `ConeFrustum` properties instead.
     */
    setSize(radiusBottom: number, radiusTop: number, height: number): void;
    /**
     *Defines the `bottomRadius` of this `ConeFrustum`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setBottomRadius(bottomRadius: number): void;
    /**
     *Defines the `bottomRadius` of this `ConeFrustum`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    bottomRadius: number;
    /**
     *Defines the `topRadius` of this `ConeFrustum`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setTopRadius(topRadius: number): void;
    /**
     *Defines the `topRadius` of this `ConeFrustum`.
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    topRadius: number;
    /**
     *Defines the `height` of this `ConeFrustum`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     *
     *@deprecated
     */
    setHeight(height: number): void;
    /**
     *Defines the `height` of this `ConeFrustum`
     *
     * _This property is multiplied by the item's
     * `transform`.`scale` factor._
     */
    height: number;
}
/**
 *Class for named item parts that can be recolored.
 */
declare class ColoredPart {
    /**
     *Defines the `Color` of this `ColoredPart`.
     */
    color: Color;
    /**
     *Returns the `name` of this `ColoredPart`.
     */
    readonly name: string;
}
declare namespace BrainPOP {
    /**
     *Returns a JPEG encoded as a Base64 image of the current camera view.
     * Always returns a `1000`px wide image while maintaining the aspect ratio of the screen.
     */
    function takeSnapshot(): string;
    /**
     *Posts data to the BrainPOP **events** server.
     * BrainPOP analytics server url: `https://events.brainpop.com/v1/users`
     *
     *@param data to send to the analytics server
     */
    function postActionToServer(data: string): Promise<string>;
    /**
     *Namespace for displaying and modifying cross-platform captions.
     */
    namespace Captions {
        /**
         *Displays captions at the bottom of the screen or as floating text in VR.
         * Only one caption text can be displayed at a time.
         *
         * **Note:** Messages should be kept between `130-150` characters.
         *
         *@param content Captions content that should be displayed.
         */
        function show(content: BrainPOP.CaptionsOptions): void;
        let backgroundColor: Color;
        let backgroundOpacity: number;
        let fontColor: (ColorWithAlpha | Color);
        /**
         *Hides the currently displayed captions.
         */
        function hide(): void;
    }
    namespace Web {
        /**
         *Sends a message to the parent window in which this application is embedded in.
         * **Note:** `origin` parameter is omitted and always defined as `"*"`.
         *
         *@param data Data to send to the parent window.
         */
        function postMessageToParent(data: string): void;
        /**
         *Creates an event listener for external messages send to this `Space`.
         *
         *@param handler Function that receives data, origin URL _(e.g. `https://example.org`)_,
         *                and source - `Window` that sent the message.
         *                See [Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window)
         */
        function onMessageReceived(handler: (data: any, origin: string, source: any) => void): Disposable;
    }
    /**
     *Display options for this caption element.
     */
    interface CaptionsOptions {
        /**
         *Message to display.
         */
        readonly message: string;
        /**
         *Optional duration for displaying the captions. Default is infinite.
         */
        readonly duration?: number;
        /**
         *Optional font color overwrite for this caption only.
         */
        readonly fontColor?: (ColorWithAlpha | Color);
        /**
         *Optional background color overwrite for this caption only.
         */
        readonly backgroundColor?: (ColorWithAlpha | Color);
        /**
         *Optional background opacity overwrite for this caption only.
         */
        readonly backgroundOpacity?: number;
    }
}
declare class PathItem extends VerticesItem {
    spline: boolean;
    setLook(ts_type: number): void;
    thickness: number;
    getNearestPoint(other: BaseItem): number;
    getLength(t: number): number;
    readonly length: number;
    getPositionAt(l: number): Vector3;
    makeCircle(): void;
    addPathVertexFromSerializedPQS(s: string): ServiceItem;
}
/**
 *Namespace for input related methods and properties.
 *
 *  **Note:** Setting event handlers on the _main input_ **overwrites native controls**.
 * To preserve them, use `Input.preserveApplicationInput`.
 *
 * Different platforms use a different _main input_
 * * Web: mouse click
 * * Mobile: single finger touch
 * * VR (no controller): single finger touch _(physical VR viewer button)_
 * * VR (controller): controller trigger
 *
 */
declare namespace Input {
    /**
     *Use `Input.onKeyDown` instead.
     *
     *
     * Triggers an event whenever the _main input_ is **pressed down**.
     *
     * **Note**: Only one `onButtonDown` handler can be defined for a button at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@deprecated
     */
    function onButtonDown(handler: () => void): void;
    /**
     *Use `Input.onKeyDown` instead.
     *
     *
     * Triggers an event whenever the specified input is **pressed down**.
     *
     * **Note**: Only one `onButtonDown` handler can be defined for a button at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@param buttonString button to press.
     *
     *@deprecated
     */
    function onButtonDown(handler: () => void, buttonString: string): void;
    /**
     *Triggers an event whenever the specified `Input.KeyCode` is **pressed down**.
     *
     * **Note**: Only one `onKeyDown` handler can be defined for a key at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@param keyCode key to press.
     */
    function onKeyDown(handler: () => void, keyCode: Input.KeyCode): void;
    /**
     *Use `Input.onKeyUp` instead.
     *
     *
     * Triggers an event when the _main input_ is **released**.
     *
     * **Note**: Only one `onButtonUp` handler can be defined for a button at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@deprecated
     */
    function onButtonUp(handler: () => void): void;
    /**
     *Use `Input.onKeyUp` instead.
     *
     *
     * Triggers an event when specified input is **released**.
     *
     * **Note**: Only one `onButtonUp` handler can be defined for a button at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@param buttonString button to press.
     *
     *@deprecated
     */
    function onButtonUp(handler: () => void, buttonString: string): void;
    /**
     *Triggers an event whenever the specified `Input.KeyCode` is **released**.
     *
     * **Note**: Only one `onKeyUp` handler can be defined for a key at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@param keyCode key to press.
     */
    function onKeyUp(handler: () => void, keyCode: Input.KeyCode): void;
    /**
     *Use `Input.onKeyPressed` instead.
     *
     *
     * Triggers every frame while the _main input_ is **pressed**.
     *
     * **Note**: Only one `onButtonPressed` handler can be defined for a button at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@deprecated
     */
    function onButtonPressed(handler: () => void): void;
    /**
     *Use `Input.onKeyPressed` instead.
     *
     *
     * Triggers every frame while specified input is **pressed**.
     *
     * **Note**: Only one `onButtonPressed` handler can be defined for a button at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@param buttonString button to press.
     *
     *@deprecated
     */
    function onButtonPressed(handler: () => void, buttonString: string): void;
    /**
     *Triggers every frame while specified `Input.KeyCode` is **pressed**.
     *
     * **Note**: Only one `onKeyPressed` handler can be defined for a key at any time.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     *
     *@param keyCode key to press.
     */
    function onKeyPressed(handler: () => void, keyCode: Input.KeyCode): void;
    /**
     *Triggers every frame when a mouse wheel input is detected.
     *
     * **Note**: Only one `onMouseWheel` handler can be defined at any time.
     *
     * **Note**: Laptop track pads are included in the `mouseWheel` event and return and additional `X` delta.
     *
     *@param handler function to call whenever a mouse wheel or track pad drag is detected. Pass `null` to remove the handler.
     */
    function onMouseWheel(handler: (t: Vector2) => void): void;
    /**
     *Stops the current item or GUI drag operation.
     */
    function stopDrag(): void;
    /**
     *If `true`, preserves native controls (such as camera turning with click, selecting items with click)
     * when a custom _main input_ is defined.
     */
    let preserveApplicationInput: boolean;
    /**
     *Returns `Vector3` click direction originating from the `Camera`.
     *
     *@return click direction.
     *
     *See `Camera`
     */
    const clickDirection: Vector3;
    /**
     *Returns current mouse or touch position in this frame.
     *
     * **Note**: On mobile, this will always return the _last detected_ touch.
     *
     *@return mouse or touch position.
     *
     *See `GUI`
     */
    const mousePosition: Vector2;
    /**
     *Triggers an event whenever there was a click on empty part of the scene.
     *
     * _Calling this function on existing inputs overwrites previous handlers._
     *
     * **Note**: Works only when editing objects is enabled.
     *
     *@param handler function to call. Pass `null` to remove the handler.
     */
    function onEmptyClick(handler: () => void): void;
    /**
     *Binds the left mouse button click to the specified `Input.KeyCode`.
     *
     * _When the key is pressed, a click from the current mouse position is send._
     *
     * **Note:** No click is send on mobile and VR devices.
     */
    function bindClickToKey(keyCode: Input.KeyCode): void;
    function onExternalCommand(callback: (data: any, origin: string, source: any) => void): void;
    /**
     *Returns first VR controller.
     *
     *@return VR controller
     */
    function getController(): Controller;
    /**
     *Returns VR controller by index.
     *
     *@return VR controller
     */
    function getController(index: number): Controller;
    function onSensorRotation(handler: (t: PositionService) => void): void;
    /**
     *Toggles animated reticle display.
     *
     * If `true`:
     * - On mobile: Displays a reticle at the screen center
     * - On desktop: Displays a reticle underneath the current mouse position
     *
     * **Note:** Can be used with `Camera.mouseLocked` to create mouse-based camera control on desktop.
     */
    let reticleEnabled: boolean;
    function copyToClipboard(text: string): void;
    /**
     *Pen input that supports pressure sensitivity.
     */
    class Pen {
        /**
         *Controls if force is applied to brush strokes. Default is `true`.
         *
         * _On input devices that do not support pressure sensitivity, this property is always `false`._
         */
        applyForce: boolean;
        /**
         *Defines the normalized brush stroke `opacity`.
         */
        opacity: number;
        /**
         *Defines the brush stroke `Color`.
         *
         * _Changing the brush `Color` while drawing changes the `Color` of the current stroke._
         */
        color: Color;
        /**
         *Defines the base size of the brush before force modifier is added.
         */
        size: number;
        mode: GUI.Painter.PencilInputType;
        readonly position: Vector2;
        readonly velocity: Vector2;
        readonly force: number;
        readonly isDown: boolean;
    }
    /**
     *Provides a set of key codes that are mapped directly to physical keyboard and mouse keys.
     *
     * **Note:** To map input to the _main_ interaction of all platforms, use `primary`.
     */
    type KeyCode = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" | "f9" | "f11" | "f12" | "zero" | "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine" | "num_lock" | "num_pad_zero" | "num_pad_one" | "num_pad_two" | "num_pad_three" | "num_pad_four" | "num_pad_five" | "num_pad_six" | "num_pad_seven" | "num_pad_eight" | "num_pad_nine" | "num_pad_plus" | "num_pad_minus" | "num_pad_multiply" | "num_pad_period" | "num_pad_division" | "plus" | "minus" | "space" | "backspace" | "capslock" | "delete" | "insert" | "left" | "right" | "up" | "down" | "primary" | "left_mouse_button" | "right_mouse_button" | "middle_mouse_button";
}
declare class AnisotropicItem extends AnisotropicBaseItem {
}
declare class Frustum4Item extends AnisotropicItem {
    setSize(botX: number, botY: number, topX: number, topY: number, h: number): void;
    height: number;
    /** @deprecated */ setHeight(height: number): void;
    bottomLength: number;
    bottomWidth: number;
    topLength: number;
    topWidth: number;
}
declare namespace ML {
    function createLearningEnvironment(options: ML.Options): void;
    interface Options {
        readonly stateSpaceSize: number;
        readonly actionSpaceSize: number;
        readonly action: (action: Array<number>) => void;
        readonly response: () => Array<number>;
        readonly reset: () => Array<number>;
    }
}
declare class MengerSponge4Item extends UnitItem {
    level: number;
}
/**
 *Namespace for `Scene` environment related methods and properties.
 */
declare namespace Environment {
    let mood: number;
    /**
     *Defines the terrain via CDN model id. Removes the environment terrain when `null` is passed.
     */
    let terrain: string;
    /**
     *Sets the terrain and skybox _transparent_.
     *
     * **Note:** Used when this `Space` is embedded as transparent container in an iFrame on web browsers.
     */
    let transparentBackground: boolean;
    /**
     *### Only for internal development
     *
     * Defines the current environment settings as data string.
     */
    let dataString: string;
    /**
     *### Only for internal development
     *
     * Saves the current environment settings _(light, fog, render type)_ to the `Scene` model.
     */
    function saveToModel(): void;
    /**
     *Defines the ambient multiplier.
     *
     * Ambient light is a combination of **sky color, sky intensity and ground color**.
     *
     * **Note**: This property is disabled in **PBR**.
     */
    let ambientIntensity: number;
    let headLightColor: Color;
    /**
     *Defines the surface `Color` of this environment.
     *
     * **Note**: If a 3D terrain is defined, only the surface light is applied. This property is disabled in **PBR**.
     */
    let surfaceColor: Color;
    /**
     *Defines the sky `Color` of this environment.
     *
     * **Note:** If a 360 skybox image is defined only the sky light is applied.
     */
    let skyColor: Color;
    let skyIntensity: number;
    let simpleLighting: boolean;
    /**
     *Defines the fog `Color`.
     */
    let fogColor: Color;
    /**
     *Defines the fog density for this environment.
     *
     * _Low values cause the fog to start closer to the currently active `CameraItem`._
     */
    let fogDensity: number;
    /**
     *Toggles fog to draw over terrain.
     */
    let fogForTerrain: boolean;
    /**
     *Toggles fog to draw over items.
     */
    let fogForItems: boolean;
    /**
     *Defines how many light sources an item can be affected by simultaneously.
     *
     *See `LightItem`
     */
    let maxLightsForItem: number;
    /**
     *Recalculates the environment map of this `Scene`.
     */
    function recalculateEnvMap(): void;
    /**
     *Defines the intensity of the environment map applied to materials in this Scene.
     */
    let envMapIntensity: number;
    /**
     *Defines the origin point of the environment map.
     */
    let envMapProbePosition: Vector3;
    /**
     *Defines the resolution of the environment map.
     *
     * **Note:** Resolution value has to be power of two _(e.g. `16`, `64`, `128`)_. Maximum resolution is `256`.
     */
    let envMapResolution: number;
    /**
     *If `true`, the _floor image_ on the environment is affected by light and fog settings.
     */
    let floorImageAsPhong: boolean;
    /**
     *Defines the tone mapping `exposure` value used in **PBR**.
     */
    let exposure: number;
    /**
     *Defines the tone mapping `whitePoint` value used in **PBR**.
     */
    let whitePoint: number;
    /**
     *Represents the main light used in a `Scene`.
     */
    namespace sun {
        /**
         *Defines the `Color` of the sunlight.
         */
        let color: Color;
        /**
         *Defines the sun intensity.
         */
        let intensity: number;
        /**
         *Defines the sun _back light_ intensity.
         *
         * The back light shines from reversed direction of the sun and can be used to emphasize outlines.
         *
         * **Note**: This property is disabled in **PBR**.
         */
        let backLightIntensity: number;
        /**
         *Defines the _forward direction_ of the sun.
         */
        let direction: Vector3;
        /**
         *Defines the rotation of the sun as `Quat`.
         */
        function setOrientation(q: Quat): void;
        /**
         *Toggles shadow casting of the sun.
         */
        let shadow: boolean;
        /**
         *Defines the quality of the exponential shadow map.
         *
         * * `TAP_1` - Hard shadows
         * * `PCF_2x2` - Soft shadows
         * * `PCF_4x4` - Soft shadows
         * * `PCF_6x6` - Soft shadows
         *
         * **Note:** The higher the convolutions the more device performance is impacted.
         */
        let shadowType: "TAP_1" | "PCF_2x2" | "PCF_4x4" | "PCF_6x6";
        /**
         *Defines the resolution of shadows cast by the sun.
         *
         * **Note:** Resolution value has to be power of two _(e.g. `512`, `1024`, `2048`)_. Maximum resolution is `4096`.
         */
        let shadowMapResolution: number;
        let shadowMapWidth: number;
        /**
         *Defines the normalized opacity of shadows cast by the sun.
         */
        let shadowStrength: number;
        let shadowBias: number;
        let shadowNormalBias: number;
        /**
         *Defines the position of the sun in world space.
         */
        let position: Vector3;
    }
    namespace skybox360 {
        let id: string;
        let rotation: number;
        function onLoaded(handler: () => void): void;
        const video: Video;
    }
}
declare class SceneInfo {
    readonly id: string;
    name: string;
    index: number;
    thumbnail: string;
    readonly type: "3D" | "360" | "MergeCube" | "type_not_decided";
    copy(name: string): SceneInfo;
    delete(): void;
    readonly syncedProperties: {
        readonly name: ReadableProperty<string>;
        readonly thumbnail: ReadableProperty<string>;
    };
}
declare namespace CoBlocks {
    function suspend(handler: CoBlocks.__SuspendAction): CoBlocks.Async;
    function delay(seconds: number): CoBlocks.Async;
    function delayPhysics(seconds: number): CoBlocks.Async;
    function terminate(): CoBlocks.Async;
    function parallel(actions: Array<() => CoBlocks.Async>): CoBlocks.Async;
    function fork(action: () => CoBlocks.Async): void;
    function createModel(): CoBlocks.Model.Script;
    function addCategory(props: {
        readonly id: string;
        readonly title?: string;
        readonly color?: string;
        readonly icon?: string;
    }): CoBlocks.ToolboxCategory;
    function removeCategory(category: CoBlocks.ToolboxCategory): void;
    function removeAllCategories(): void;
    function hideAllBlocks(): void;
    function setBlockVisible(blockId: string, visible: boolean): void;
    function getCategory(id: string): CoBlocks.ToolboxCategory;
    function getRootCategory(): CoBlocks.ToolboxCategory;
    function statementInput(): CoBlocks.__PropertyDecorator;
    function input(props: CoBlocks.__InputProps): CoBlocks.__PropertyDecorator;
    function fieldInput(props: CoBlocks.__FieldProps): CoBlocks.__PropertyDecorator;
    function variableField(): CoBlocks.__PropertyDecorator;
    function enumField(props: CoBlocks.__EnumFieldProps): CoBlocks.__PropertyDecorator;
    function enumField(props: CoBlocks.__EnumDescriptor): CoBlocks.__PropertyDecorator;
    function statement(props: CoBlocks.__BlockProps): CoBlocks.__StatementDecorator;
    function expression(props: CoBlocks.__ExpressionBlockProps): CoBlocks.__ExpressionDecorator;
    function label(template: TemplateStringsArray, ...placeholders: Array<CoBlocks.Icon>): CoBlocks.__Label;
    function icon(props: CoBlocks.IconProps): CoBlocks.Icon;
    function createFunction(name: string, parameters: Array<CoBlocks.Model.ParameterDefinition>): CoBlocks.Model.FunctionDefinition;
    function createParameter(name: string, kind: CoBlocks.Model.TypeKind): CoBlocks.Model.ParameterDefinition;
    interface __ItemProps {
        readonly placeholder?: any;
        readonly min?: number;
        readonly max?: number;
    }
    namespace workspace {
        function afterEvents(runnable: () => void): void;
        const script: CoBlocks.Model.Script;
        function saveToString(): string;
        function loadFromString(value: string): void;
        function onBlockAdded(listener: (t: CoBlocks.Model.Block) => void): Disposable;
        function onBlockRemoved(listener: (t: CoBlocks.Model.Block) => void): Disposable;
        function onFieldChanged(listener: (field: CoBlocks.Model.FieldInput, oldValue: string) => void): Disposable;
        function createBlock(id: string): CoBlocks.Model.Block;
        function createFunctionCall(name: string): CoBlocks.Model.FunctionCallBlock;
        function filterActions(actionFilters: CoBlocks.Model.ActionFilters): Disposable;
        const debug: CoBlocks.__Debugger;
    }
    type __PropertyDecorator = (target: Object, key: string) => void;
    class __Debugger {
        enabled: boolean;
        visible: boolean;
        width: number;
        activeTab: GUI.ScriptTab;
        getTab(index: number): GUI.ScriptTab;
        getTab(name: string): GUI.ScriptTab;
    }
    interface __BlockProps {
        readonly id: string;
        readonly label: ((string | CoBlocks.__Label) | Array<(string | CoBlocks.__Label)>);
        readonly searchLabels?: (string | Array<string>);
        readonly category?: string;
        readonly color?: string;
    }
    interface Async extends Iterator<void>, Iterable<void> {
        next(): IteratorResult<void>;
        [Symbol.iterator](): Iterator<void>;
    }
    interface __ExpressionBlockProps extends CoBlocks.__BlockProps {
        readonly type: (string | Array<string>);
        readonly id: string;
        readonly label: ((string | CoBlocks.__Label) | Array<(string | CoBlocks.__Label)>);
        readonly searchLabels?: (string | Array<string>);
        readonly category?: string;
        readonly color?: string;
    }
    type __SuspendAction = (continuation: () => void) => void;
    interface __RuntimeListeners {
        readonly blockStarted?: (fiberId: number, index: number) => void;
        readonly blockEnded?: (fiberId: number, index: number) => void;
        readonly fiberStopped?: (fiberId: number) => void;
        readonly fiberSuspended?: (fiberId: number) => void;
    }
    type __StatementDecorator = (ts_constructor: new () => CoBlocks.Statement) => void;
    class ToolboxBlockCollection implements Iterable<CoBlocks.ToolboxBlock> {
        [Symbol.iterator](): Iterator<CoBlocks.ToolboxBlock>;
        hideAll(): void;
        showAll(): void;
        clearHighlights(): void;
        readonly byId: {
            readonly [key: string]: CoBlocks.ToolboxBlock;
        };
    }
    class __Label {
    }
    interface __EnumFieldProps {
        readonly [key: string]: (string | CoBlocks.__Label);
        readonly [key: number]: (string | CoBlocks.__Label);
    }
    interface Statement {
        run(): CoBlocks.Async;
    }
    namespace runtime {
        function listen(listeners: CoBlocks.__RuntimeListeners): Disposable;
    }
    interface __InputProps extends CoBlocks.__ItemProps {
        readonly type: CoBlocks.__InputType;
        readonly evaluated?: boolean;
        readonly placeholder?: any;
        readonly min?: number;
        readonly max?: number;
    }
    interface IconProps {
        readonly id: string;
        readonly size: Vector2;
    }
    type __InputType = "int" | "number" | "angle" | "string" | "boolean" | "dx_base_item" | "dx_game_item" | "dx_group" | "dx_text_item" | "dx_text_item_interface" | "dx_text_3d_item" | "dx_physics_item" | "sound" | "image" | "scene" | "color" | "vector3";
    type __FieldType = "int" | "number" | "angle" | "string" | "boolean" | "dx_base_item" | "dx_game_item" | "dx_group" | "dx_text_item" | "dx_text_item_interface" | "dx_text_3d_item" | "dx_physics_item" | "sound" | "image" | "scene" | "color";
    class ToolboxBlock {
        visible: boolean;
        highlighted: boolean;
    }
    class ToolboxCategory {
        readonly title: string;
        getId(): string;
        readonly id: string;
        addBlock(id: string): void;
        addBlocks(ids: Array<string>): void;
        removeBlock(id: string): void;
        getColor(): string;
        color: string;
        setColor(color: string): void;
        icon: string;
        getParent(): CoBlocks.ToolboxCategory;
        readonly parent: CoBlocks.ToolboxCategory;
        addSubcategory(id: string, title: string): CoBlocks.ToolboxCategory;
        addSubcategory(subcategory: CoBlocks.ToolboxCategory): void;
        addSubcategory(subcategory: CoBlocks.ToolboxCategory, index: number): void;
        isExpanded(): boolean;
        expanded: boolean;
        expand(): void;
        collapse(): void;
        contains(id: string): boolean;
        removeFromParent(): void;
        getAllSubcategories(): Array<CoBlocks.ToolboxCategory>;
        readonly allSubcategories: Array<CoBlocks.ToolboxCategory>;
        removeAllSubcategories(): void;
        hideAllSubcategories(): void;
        isVisible(): boolean;
        visible: boolean;
        setVisible(visible: boolean): void;
        isEffectivelyVisible(): boolean;
        readonly effectivelyVisible: boolean;
    }
    interface Expression<T> {
        evaluate(): T;
    }
    type __ExpressionDecorator = (ts_constructor: new () => CoBlocks.Expression<any>) => void;
    namespace toolbox {
        const root: CoBlocks.ToolboxCategory;
        const blocks: CoBlocks.ToolboxBlockCollection;
        let searchVisible: boolean;
        let categoryIconsVisible: boolean;
    }
    namespace Model {
        class Script implements CoBlocks.Model.StatementBlockContainer {
            constructor();
            readonly functions: Array<CoBlocks.Model.FunctionDefinition>;
            addFunction(ts_function: CoBlocks.Model.FunctionDefinition): void;
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: "statement_input" | "script" | "function";
        }
        type TypeKind = "int" | "number" | "string" | "boolean" | "dx_item" | "dx_group" | "dx_game_item" | "dx_text_item" | "dx_text_3d_item" | "dx_text_item_interface" | "dx_path_item" | "dx_camera_item" | "merge_cube_side" | "dx_base_item" | "dx_video_item" | "list" | "angle" | "color" | "vec3" | "any";
        class FieldInput extends CoBlocks.Model.Input {
            text: string;
        }
        interface ActionFilters {
            readonly drag?: (block: CoBlocks.Model.Block) => boolean;
            readonly remove?: (block: CoBlocks.Model.Block) => boolean;
            readonly edit?: (field: CoBlocks.Model.FieldInput) => boolean;
            readonly addStatement?: (block: CoBlocks.Model.StatementLikeBlock, target: CoBlocks.Model.StatementBlockContainer) => boolean;
            readonly addInput?: (block: CoBlocks.Model.InputBlock, target: CoBlocks.Model.BlockInput) => boolean;
            readonly removeFunction?: (ts_function: CoBlocks.Model.FunctionDefinition) => boolean;
            readonly editFunction?: (ts_function: CoBlocks.Model.FunctionDefinition) => boolean;
        }
        class Fragment extends CoBlocks.Model.InputContainer {
            readonly container: CoBlocks.Model.FragmentInput;
        }
        class FunctionCallBlock extends CoBlocks.Model.StatementLikeBlock {
        }
        class FragmentInput extends CoBlocks.Model.Input {
            addFragment(index: number): CoBlocks.Model.Fragment;
            addFragment(): CoBlocks.Model.Fragment;
            addFragment(fragment: CoBlocks.Model.Fragment): void;
            addFragment(fragment: CoBlocks.Model.Fragment, index: number): void;
            removeFragment(fragment: CoBlocks.Model.Fragment): void;
            removeFragment(index: number): void;
            clear(): void;
            indexOfFragment(fragment: CoBlocks.Model.Fragment): number;
            readonly fragmentCount: number;
            readonly fragments: Array<CoBlocks.Model.Fragment>;
        }
        type BlockKind = "statement" | "function_call" | "input";
        type InputKind = "statement" | "fragments" | "block" | "field";
        class Input {
            readonly name: string;
            readonly parent: CoBlocks.Model.InputContainer;
            readonly kind: CoBlocks.Model.InputKind;
        }
        class Type {
            constructor(kind: CoBlocks.Model.TypeKind);
            readonly kind: CoBlocks.Model.TypeKind;
            readonly typeArguments: Array<CoBlocks.Model.Type>;
        }
        class InputContainer {
            getInputs(): Array<CoBlocks.Model.Input>;
            getInput(name: string): CoBlocks.Model.Input;
            readonly parent: CoBlocks.Model.InputContainer;
        }
        class BlockInput extends CoBlocks.Model.Input {
            readonly shadow: CoBlocks.Model.InputBlock;
            block: CoBlocks.Model.InputBlock;
            readonly visibleBlock: CoBlocks.Model.InputBlock;
        }
        class StatementInput extends CoBlocks.Model.Input implements CoBlocks.Model.StatementBlockContainer {
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: "statement_input" | "script" | "function";
        }
        class Block extends CoBlocks.Model.InputContainer {
            readonly id: string;
            copy(): CoBlocks.Model.Block;
            readonly inputName: string;
            removeFromContainer(): void;
            readonly kind: CoBlocks.Model.BlockKind;
            disabled: boolean;
            readonly actuallyDisabled: boolean;
        }
        class FunctionDefinition implements CoBlocks.Model.StatementBlockContainer {
            constructor(name: string);
            constructor(name: string, parameters: Array<CoBlocks.Model.ParameterDefinition>);
            readonly name: string;
            readonly returningValue: boolean;
            readonly parameters: Array<CoBlocks.Model.ParameterDefinition>;
            addParameter(parameter: CoBlocks.Model.ParameterDefinition): void;
            delete(): void;
            getContainer(): CoBlocks.Model.Script;
            disabled: boolean;
            readonly global: boolean;
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: "statement_input" | "script" | "function";
        }
        class StatementBlock extends CoBlocks.Model.StatementLikeBlock {
        }
        interface StatementBlockContainer {
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: "statement_input" | "script" | "function";
        }
        class StatementLikeBlock extends CoBlocks.Model.Block {
            readonly isRootBlock: boolean;
            readonly indexInContainer: number;
            readonly container: CoBlocks.Model.StatementBlockContainer;
        }
        class InputBlock extends CoBlocks.Model.Block {
            readonly container: CoBlocks.Model.BlockInput;
            readonly parentStatement: CoBlocks.Model.StatementLikeBlock;
            readonly isShadow: boolean;
        }
        class ParameterDefinition {
            constructor(name: string, ts_type: CoBlocks.Model.Type);
            readonly name: string;
            readonly type: CoBlocks.Model.Type;
            readonly function: CoBlocks.Model.FunctionDefinition;
            delete(): void;
        }
    }
    interface __EnumDescriptor {
        readonly items: CoBlocks.__EnumFieldProps;
        readonly searchable?: boolean;
    }
    class Icon {
    }
    interface __FieldProps extends CoBlocks.__ItemProps {
        readonly type: CoBlocks.__FieldType;
        readonly placeholder?: any;
        readonly min?: number;
        readonly max?: number;
    }
}
declare class Library {
    readonly categories: Array<LibraryCategory>;
    getCategory(categoryName: string): LibraryCategory;
}
/**
 *Displays `GUI` views in 3D context.
 *
 *See `GUIItem.context`
 */
declare class GUIItem extends DrawingItem {
    constructor(textureSize: Vector2, position: Vector3);
    /**
     *Returns the `Context` of this item.
     */
    readonly context: GUI.Context;
    /**
     *Defines whether the item should be rendered on top of other 3D items, regardless of its actual position.
     */
    isOverlay: boolean;
    /**
     *Defines the texture size of this `GUIItem`.
     *
     * **Note**: Set this property to the same aspect ratio as the item's `size` property to avoid stretching.
     */
    textureSize: Vector2;
}
declare class Insets {
    constructor(left: number, top: number, right: number, bottom: number);
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
}
declare class WindParameters {
    constructor();
    angle: number;
    setPreset(wind: "calm" | "strong"): void;
    speed: number;
    strength: number;
    heightFactorPow: number;
    waveFrequency: number;
    wavesStrength: number;
    wiggleStrength: number;
    noiseStrength: number;
    skew: number;
    enabled: boolean;
}
/**
 *Spatial representation of a `Sound` placed in a `Scene.`
 *
 * Sounds that are played with a sound item have a 3D radius which defines the area
 * in which the sound can be heard. The further the active camera is away from the `SoundItem`, the lower the volume.
 *
 * **Note:** Sound items can only play at full volume on iOS browsers.
 *
 *See `Sound`
 */
declare class SoundItem extends ServiceItem {
    /**
     *Plays the `Sound` of this item.
     *
     * If the sound is not fully loaded, the playback will delay until loading is complete.
     */
    play(): void;
    /**
     *Plays the `Sound` of this item.
     *
     * If the sound is not fully loaded, the playback will delay until loading is complete.
     *
     *@param looping if `true`, this `Sound` loops indefinitely.
     */
    play(looping: boolean): void;
    /**
     *Stops playback of the `Sound` in this item.
     *
     * The sound starts from the beginning with next `play` call
     */
    stop(): void;
    /**
     *Pauses playback of the `Sound` in this item.
     *
     * The sound resumes at the same track position with next `play` call.
     */
    pause(): void;
    /**
     *Resumes playing the `Sound` of this item if it was paused.
     *
     *@deprecated
     */
    resume(): void;
    /**
     *@return duration of the `Sound` of this item in `seconds`.
     */
    readonly duration: number;
    /**
     *Defines the track position of the `Sound` in this item.
     */
    currentPosition: number;
    /**
     *Defines the normalized `volume` of the `Sound` in this item. Volume value is clamped to range `[0,1]`
     */
    volume: number;
    /**
     *Defines distance-independent volume of this `SoundItem`.
     *
     * Sounds played on the `SoundItem` never fall below the `ambVolume`.
     * This is useful for creating omni-directional ambience _(e.g. coasts, urban environments)._
     */
    ambientVolume: number;
    /**
     *Toggles `Sound` looping. If `true`, the sound plays indefinitely.
     */
    looping: boolean;
    /**
     *Defines the maximum distance from which the `Sound` of this item can be heard.
     *
     * A camera which is farther away from `radius` only hears the `ambientSound` of this item.
     */
    radius: number;
}
declare class CsgItem extends UnitItem implements ComposableItem {
    union(other: ComposableItem): CsgItem;
    difference(other: ComposableItem): CsgItem;
    intersection(other: ComposableItem): CsgItem;
    split(): Array<ComposableItem>;
}
declare class SliderConstraint extends Constraint {
}
declare class HelicopterItem extends AnimatedItem {
    startHelicopter(): void;
    stopHelicopter(): void;
}
declare class MergeCubeItem extends AnisotropicBaseItem {
    setInsideVisible(inside: boolean): void;
    readonly visibleSide: AR.MergeCubeSide;
    onRotationGesture(handler: () => void, direction: AR.RotationDirection): void;
    onSideHover(handler: (t: boolean) => void, side: AR.MergeCubeSide): void;
}
/**
 *Namespace for debugging DX engine content.
 */
declare namespace Debug {
    /**
     *Logs the provided object in the _(browser)_ console.
     *
     *@param s object to log.
     */
    function log(s: any): void;
}
declare class TubeItem extends AnisotropicItem {
    setSize(outerRadius: number, innerRadius: number, height: number): void;
    setSize(outerRadius: number, innerRadius: number, height: number, arc: number): void;
    arc: number;
    height: number;
    outerRadius: number;
    innerRadius: number;
}
/**
 *Defines a disposable _(deletable)_ object in DX Engine.
 *
 * Disposing objects is commonly used in a variety of scenarios, such as
 * * Removing items from a `Scene`
 * * Removing a `Promise`
 * * Removing a physics `constraint`
 * * Stopping `delayed` functions from executing
 * * Stopping a `Tweener`
 */
interface Disposable {
    /**
     *Disposes this object, effectively turning this into an unmanaged resource.
     */
    dispose(): void;
}
/**
 *Video file stored in `Space`.
 * Can be displayed in `2D` or `3D` context.
 *
 * Supported file formats
 *  * `.mp4`
 *
 *See `VideoItem`
 *
 *See `GUI.VideoView`
 */
declare class VideoAsset extends Asset {
    /**
     *Returns aspect ratio of this video, calculated `width` divided by `height`.
     *
     *
     * **Example:**
     * * Video resolution of `100 px` width and `50 px` height returns `2`
     * * Video resolution of `50 px` width and `100 px` height returns `0.5`
     *
     *@return aspect ratio of video file.
     */
    readonly aspectRatio: number;
    /**
     *Creates a `VideoItem` from this `VideoAsset`.
     *
     *@param position initial world space position of `VideoItem`.
     *
     *@return created `VideoItem`.
     */
    createItem(position: Vector3): VideoItem;
    /**
     *@return id of image frame saved after upload of video
     */
    readonly snapshot: string;
    /**
     *### ONLY FOR INTERNAL DEVELOPMENT
     *
     * ---
     * Creates a `VideoItem` from this `VideoAsset`.
     *
     *@param position initial world space position of `VideoItem`.
     *
     *@param addToScene add this item to the `Scene` after creation?
     *
     *@return created `VideoItem`.
     */
    createItem(position: Vector3, addToScene: boolean): VideoItem;
}
declare namespace Data {
    /**
     *Returns `true` if this platform supports file uploading.
     */
    const isUploadingSupported: boolean;
    function uploadImage(options: Data.ImageUploadOptions): Disposable;
    function uploadVideo(options: Data.VideoUploadOptions): Disposable;
    function uploadSound(options: Data.UploadOptions<SoundAsset>): Disposable;
    function upload3dModel(options: Data.Model3dUploadOptions): Disposable;
    const assets: SpaceAssets;
    const library: Library;
    function getImprint(items: Array<BaseItem>): string;
    function createFromImprint(str: string): Array<BaseItem>;
    /**
     *### For internal use only
     *
     * Creates a new `EnvironmentResource` with `name` and `data`.
     *
     * **Note**: Passed `data` should be in format of `Environment.dataString`.
     */
    function createEnvironmentResource(name: string, data: string): Promise<string>;
    /**
     *### For internal use only
     *
     * Loads an `EnvironmentResource` by `id`.
     *
     *@param id unique id of `EnvironmentResource` to load. Resource **must** exist for promise to resolve.
     */
    function loadEnvironmentResource(id: string): Promise<EnvironmentResource>;
    interface VideoUploadOptions extends Data.ServerProcessingUploadOptions<VideoAsset> {
        readonly onLoadComplete: (t: VideoAsset) => void;
        readonly onProcessingProgress?: (progress: number, info: string) => void;
        readonly fileSizeLimit?: number;
        readonly onLoadStart?: (t: Array<string>) => void;
        readonly onError?: (t: Data.ErrorType) => void;
        readonly onCancel?: () => void;
        readonly onUploadProgress?: (progress: number) => void;
    }
    interface UploadOptions<T> {
        readonly fileSizeLimit?: number;
        readonly onLoadStart?: (t: Array<string>) => void;
        readonly onError?: (t: Data.ErrorType) => void;
        readonly onCancel?: () => void;
        readonly onLoadComplete: (t: T) => void;
        readonly onUploadProgress?: (progress: number) => void;
    }
    interface Model3dUploadOptions extends Data.ServerProcessingUploadOptions<Model3dAsset> {
        readonly showPopup?: boolean;
        readonly onLoadComplete: (t: Model3dAsset) => void;
        readonly onProcessingProgress?: (progress: number, info: string) => void;
        readonly fileSizeLimit?: number;
        readonly onLoadStart?: (t: Array<string>) => void;
        readonly onError?: (t: Data.ErrorType) => void;
        readonly onCancel?: () => void;
        readonly onUploadProgress?: (progress: number) => void;
    }
    type ErrorType = "file_limit" | "wrong_format" | "connection_error" | "unknown";
    interface ServerProcessingUploadOptions<T> extends Data.UploadOptions<T> {
        readonly onProcessingProgress?: (progress: number, info: string) => void;
        readonly fileSizeLimit?: number;
        readonly onLoadStart?: (t: Array<string>) => void;
        readonly onError?: (t: Data.ErrorType) => void;
        readonly onCancel?: () => void;
        readonly onLoadComplete: (t: T) => void;
        readonly onUploadProgress?: (progress: number) => void;
    }
    interface ImageUploadOptions extends Data.UploadOptions<ImageAsset> {
        readonly downsampleSize?: number;
        readonly is360?: boolean;
        readonly onLoadComplete: (t: ImageAsset) => void;
        readonly fileSizeLimit?: number;
        readonly onLoadStart?: (t: Array<string>) => void;
        readonly onError?: (t: Data.ErrorType) => void;
        readonly onCancel?: () => void;
        readonly onUploadProgress?: (progress: number) => void;
    }
}
declare namespace Analytics {
    function sendTiming(options: Analytics.TimingOptions): void;
    function actionPerformed(options: Analytics.ActionOptions): void;
    function propertySet(name: string, value: string): void;
    interface ActionOptions {
        readonly category: string;
        readonly action: string;
        readonly label: string;
        readonly value?: number;
    }
    interface TimingOptions {
        readonly category: string;
        readonly value: string;
        readonly label: string;
        readonly time: number;
    }
}
declare class AnisotropicBaseItem extends AnisotropicPhongItem implements ComposableItem {
    union(other: ComposableItem): CsgItem;
    difference(other: ComposableItem): CsgItem;
    intersection(other: ComposableItem): CsgItem;
    split(): Array<ComposableItem>;
}
declare namespace Dev {
    /**
     *Creates an event listener for external messages send to this embedded application.
     *
     *@param handler Receives data and origin _(e.g. `https://example.org`)_ of the window that sent the message
     */
    function onMessageReceived(handler: (data: any, origin: string, source: any) => void): Disposable;
    /**
     *Sends a message to the parent window in which this application is embedded in.
     *
     *@param data Data to send to the parent window.
     *
     *@param origin Domain to send the message (target origin, pass '*' to send to any domain)
     */
    function postMessage(data: string, origin: string): void;
    function takeSnapshot(resolution: Vector2): string;
    function addTextBanner(item: BaseItem, text: string): void;
    function addShapedBubble(item: BaseItem, text: string, color: Color): void;
    function addShapedBubble(item: BaseItem, text: string, color: Color, contour: Array<number>, textArea: Rect, attachPoint: Vector2): void;
    function createAssetModel(modelId: string, pos: Vector3): Array<BaseItem>;
    function getGeomData(): Array<number>;
    let defaultOrigin: string;
    namespace ColorGrading {
        let enabled: boolean;
        let whiteTemperature: number;
        let whiteTint: number;
        let saturation: Color;
        let gamma: Color;
        let gain: Color;
        let offset: Color;
    }
}
interface ObservableList<T> extends MutableList<T> {
    onItemAdded(handler: (item: T, index: number) => void): Disposable;
    onItemRemoved(handler: (item: T, index: number) => void): Disposable;
    [key: number]: T;
    add(e: T): void;
    add(index: number, e: T): void;
    removeAt(index: number): T;
    remove(e: T): boolean;
    clear(): void;
    readonly length: number;
    readonly empty: boolean;
    indexOf(e: T): number;
    lastIndexOf(e: T): number;
    contains(e: T): boolean;
    toArray(): Array<T>;
    copy(): MutableList<T>;
    [Symbol.iterator](): Iterator<T>;
}
/**
 *Parent class for billboard-items that display media _(videos, images)_ on a flat plane.
 *
 * **Note:** This item uses pivot orientation that differs from `BaseItem`.
 *
 */
declare class MediaItem extends DrawingItem {
}
declare class MotorJointConstraint extends Constraint {
    localAnchor1: Vector3;
    localAnchor2: Vector3;
    localAxis1: Vector3;
    localAxis2: Vector3;
    getLocalAnchor1(): Vector3;
    getLocalAnchor2(): Vector3;
    getLocalAxis1(): Vector3;
    getLocalAxis2(): Vector3;
    setAngle(a: number): void;
    angle: number;
    getAngle(): number;
    rotateFromTo(fromAngle: number, toAngle: number, time: number, callback: () => void): void;
    rotateLocal(angle: number, time: number, callback: () => void): void;
    getPosition(): Vector3;
    readonly position: Vector3;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
/**
 *Billboard-item that displays images on a flat plane.
 *
 * **Note:** This item uses a billboard pivot orientation that differs from other `BaseItem`.
 *
 */
declare class ImageItem extends MediaItem {
    /**
     *Defines the `id` of the image displayed in this item.
     *
     *@return `id` of `image` used in this item.
     */
    imageId: string;
}
/**
 *### For internal use only
 *
 * Resource used to persistently store Environment data. Properties are _readonly_.
 */
declare class EnvironmentResource {
    readonly id: string;
    readonly data: string;
    readonly name: string;
    /**
     *Update `data` and/or `name` of this `EnvironmentResource`.
     */
    updateProperties(options: {
        readonly data?: string;
        readonly name?: string;
    }): Promise<void>;
}
interface Voice {
    readonly name: string;
    readonly lang: string;
    readonly variant: string;
    readonly local: boolean;
}
