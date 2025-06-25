if ( TRACE ) { TRACE( JSON.parse( '["CodeBase.Infrastructure.AssetManagement.AssetPath#init","CodeBase.Infrastructure.Game#ctor","CodeBase.Infrastructure.SceneLoader#ctor","CodeBase.Infrastructure.SceneLoader#LoadScene","CodeBase.Infrastructure.SceneLoader#Load","CodeBase.Infrastructure.Services.AllServices#Container#get","CodeBase.Infrastructure.Services.AllServices#RegisterSingle","CodeBase.Infrastructure.Services.AllServices#Single","CodeBase.Infrastructure.Services.AllServices.Implementation$1#init","CodeBase.Infrastructure.StateMachine.GameStateMachine#ctor","CodeBase.Infrastructure.StateMachine.GameStateMachine#GetState","CodeBase.Infrastructure.StateMachine.GameStateMachine#ChangeState","CodeBase.Infrastructure.StateMachine.GameStateMachine#Enter","CodeBase.Infrastructure.StateMachine.GameStateMachine#Enter$1","CodeBase.UI.BaseButton#Awake","CodeBase.HelpSystem.HelpAnimationSystem#init","CodeBase.HelpSystem.HelpAnimationSystem#init","CodeBase.HelpSystem.HelpAnimationSystem#OnDisable","CodeBase.HelpSystem.HelpAnimationSystem#OnDestroy","CodeBase.HelpSystem.HelpAnimationSystem#Awake","CodeBase.HelpSystem.HelpAnimationSystem#FadeInAndMoveToMergeableCoroutine","CodeBase.HelpSystem.HelpAnimationSystem#MoveTogetherToTargetCoroutine","CodeBase.HelpSystem.HelpAnimationSystem#FadeOutAndMoveHandAwayCoroutine","CodeBase.HelpSystem.HelpAnimationSystem#ShowAnimationCoroutine","CodeBase.HelpSystem.HelpAnimationSystem#ResetToStart","CodeBase.HelpSystem.HelpAnimationSystem#SetAlpha","CodeBase.HelpSystem.HelpAnimationSystem#ShowAnimation","CodeBase.HelpSystem.HelpAnimationSystem#StopAnimation","CodeBase.Infrastructure.GameBootstrapper#Awake","CodeBase.UI.DownloadGameButton#OnButtonClicked","CodeBase.HelpSystem.PlayerHelpService#init","CodeBase.HelpSystem.PlayerHelpService#init","CodeBase.HelpSystem.PlayerHelpService#ctor","CodeBase.HelpSystem.PlayerHelpService#MonitorPlayerIdleCoroutine","CodeBase.HelpSystem.PlayerHelpService#GetFactoryHuds","CodeBase.HelpSystem.PlayerHelpService#ResetAndCleanup","CodeBase.HelpSystem.PlayerHelpService#StartMonitoring","CodeBase.HelpSystem.PlayerHelpService#StopMonitoring","CodeBase.HelpSystem.PlayerHelpService#Dispose","CodeBase.Infrastructure.AssetManagement.AssetProvider#Instantiate","CodeBase.Infrastructure.AssetManagement.AssetProvider#Instantiate$1","CodeBase.Infrastructure.Factories.HudFactory#init","CodeBase.Infrastructure.Factories.HudFactory#ctor","CodeBase.Infrastructure.Factories.HudFactory#CreateHud","CodeBase.Infrastructure.Factories.HudFactory#CreateSceneHuds","CodeBase.Infrastructure.StateMachine.BootstrapState#init","CodeBase.Infrastructure.StateMachine.BootstrapState#InputService","CodeBase.Infrastructure.StateMachine.BootstrapState#ctor","CodeBase.Infrastructure.StateMachine.BootstrapState#RegisterServices","CodeBase.Infrastructure.StateMachine.BootstrapState#EnterLoadLevel","CodeBase.Infrastructure.StateMachine.BootstrapState#Exit","CodeBase.Infrastructure.StateMachine.BootstrapState#Enter","CodeBase.Infrastructure.StateMachine.GameLoopState#ctor","CodeBase.Infrastructure.StateMachine.GameLoopState#Enter","CodeBase.Infrastructure.StateMachine.GameLoopState#Exit","CodeBase.Infrastructure.StateMachine.LoadLevelState#ctor","CodeBase.Infrastructure.StateMachine.LoadLevelState#OnLoaded","CodeBase.Infrastructure.StateMachine.LoadLevelState#Exit","CodeBase.Infrastructure.StateMachine.LoadLevelState#Enter","CodeBase.Services.InputService#init","CodeBase.Services.InputService#SetPlayerInputStatus","CodeBase.Services.UnityUIService.UnityUIService#SelectResolution","CodeBase.Services.UnityUIService.UnityUIService#ConfigureLayer","CodeBase.Services.UnityUIService.UnityUIService#SetCanvasSettings","CodeBase.Services.UnityUIService.UnityUIService#SetStretch","CodeBase.Services.UnityUIService.UnityUIService#SetScreenParent","CodeBase.Services.UnityUIService.UnityUIService#Initialize","CodeBase.Services.MobileInputService#ctor","CodeBase.Services.StandaloneInputService#ctor"]' ) ); }
/**
 * @version 1.0.9307.27667
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CodeBase.UI.IAnimatable start.*/
    Bridge.define("CodeBase.UI.IAnimatable", {
        $kind: 3
    });
    /*CodeBase.UI.IAnimatable end.*/

    /*CodeBase.Infrastructure.Services.IService start.*/
    Bridge.define("CodeBase.Infrastructure.Services.IService", {
        $kind: 3
    });
    /*CodeBase.Infrastructure.Services.IService end.*/

    /*CodeBase.Infrastructure.AssetManagement.AssetPath start.*/
    Bridge.define("CodeBase.Infrastructure.AssetManagement.AssetPath", {
        statics: {
            fields: {
                GameHud: null,
                EndGameHud: null,
                PlayerHelpHud: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.AssetManagement.AssetPath#init", this ); }

                    this.GameHud = "Screens/GameScreen";
                    this.EndGameHud = "Screens/EndGameScreen";
                    this.PlayerHelpHud = "Screens/PlayerHelpScreen";
                }
            }
        }
    });
    /*CodeBase.Infrastructure.AssetManagement.AssetPath end.*/

    /*CodeBase.Infrastructure.Game start.*/
    Bridge.define("CodeBase.Infrastructure.Game", {
        fields: {
            StateMachine: null
        },
        ctors: {
            ctor: function (coroutineRunner) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Game#ctor", this ); }

                this.$initialize();
                this.StateMachine = new CodeBase.Infrastructure.StateMachine.GameStateMachine(coroutineRunner, new CodeBase.Infrastructure.SceneLoader(coroutineRunner), CodeBase.Infrastructure.Services.AllServices.Container);
            }
        }
    });
    /*CodeBase.Infrastructure.Game end.*/

    /*CodeBase.Infrastructure.ICoroutineRunner start.*/
    Bridge.define("CodeBase.Infrastructure.ICoroutineRunner", {
        $kind: 3
    });
    /*CodeBase.Infrastructure.ICoroutineRunner end.*/

    /*CodeBase.Infrastructure.SceneLoader start.*/
    Bridge.define("CodeBase.Infrastructure.SceneLoader", {
        fields: {
            _coroutineRunner: null
        },
        ctors: {
            ctor: function (coroutineRunner) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.SceneLoader#ctor", this ); }

                this.$initialize();
                this._coroutineRunner = coroutineRunner;
            }
        },
        methods: {
            /*CodeBase.Infrastructure.SceneLoader.LoadScene start.*/
            LoadScene: function (nextScene, onLoaded) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.SceneLoader#LoadScene", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    waitNextScene,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (onLoaded === void 0) { onLoaded = null; }
                                        if (Bridge.referenceEquals(UnityEngine.SceneManagement.SceneManager.GetActiveScene().name, nextScene)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    !Bridge.staticEquals(onLoaded, null) ? onLoaded() : null;
                                        return false;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    waitNextScene = UnityEngine.SceneManagement.SceneManager.LoadSceneAsync$2(nextScene);
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( !waitNextScene.isDone$1 ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    !Bridge.staticEquals(onLoaded, null) ? onLoaded() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CodeBase.Infrastructure.SceneLoader.LoadScene end.*/

            /*CodeBase.Infrastructure.SceneLoader.Load start.*/
            Load: function (name, onLoaded) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.SceneLoader#Load", this ); }

                if (onLoaded === void 0) { onLoaded = null; }
                this._coroutineRunner.CodeBase$Infrastructure$ICoroutineRunner$StartCoroutine(this.LoadScene(name, onLoaded));
            },
            /*CodeBase.Infrastructure.SceneLoader.Load end.*/


        }
    });
    /*CodeBase.Infrastructure.SceneLoader end.*/

    /*CodeBase.Infrastructure.Services.AllServices start.*/
    Bridge.define("CodeBase.Infrastructure.Services.AllServices", {
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Container: {
                    get: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Services.AllServices#Container#get", this ); }

                        var $t;
                        return CodeBase.Infrastructure.Services.AllServices._instance || (($t = new CodeBase.Infrastructure.Services.AllServices(), CodeBase.Infrastructure.Services.AllServices._instance = $t, $t));
                    }
                }
            }
        },
        methods: {
            /*CodeBase.Infrastructure.Services.AllServices.RegisterSingle start.*/
            RegisterSingle: function (TService, implementation) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Services.AllServices#RegisterSingle", this ); }

                CodeBase.Infrastructure.Services.AllServices.Implementation$1(TService).ServiceInstance = Bridge.rValue(implementation);
            },
            /*CodeBase.Infrastructure.Services.AllServices.RegisterSingle end.*/

            /*CodeBase.Infrastructure.Services.AllServices.Single start.*/
            Single: function (TService) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Services.AllServices#Single", this ); }

                return Bridge.rValue(CodeBase.Infrastructure.Services.AllServices.Implementation$1(TService).ServiceInstance);
            },
            /*CodeBase.Infrastructure.Services.AllServices.Single end.*/


        }
    });
    /*CodeBase.Infrastructure.Services.AllServices end.*/

    /*CodeBase.Infrastructure.Services.AllServices+Implementation$1 start.*/
    Bridge.define("CodeBase.Infrastructure.Services.AllServices.Implementation$1", function (TService) { return {
        $kind: 1002,
        statics: {
            fields: {
                ServiceInstance: Bridge.getDefaultValue(TService)
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Services.AllServices.Implementation$1#init", this ); }

                    this.ServiceInstance = Bridge.getDefaultValue(TService);
                }
            }
        }
    }; });
    /*CodeBase.Infrastructure.Services.AllServices+Implementation$1 end.*/

    /*CodeBase.Infrastructure.StateMachine.IExitableState start.*/
    Bridge.define("CodeBase.Infrastructure.StateMachine.IExitableState", {
        $kind: 3
    });
    /*CodeBase.Infrastructure.StateMachine.IExitableState end.*/

    /*CodeBase.Infrastructure.StateMachine.GameStateMachine start.*/
    Bridge.define("CodeBase.Infrastructure.StateMachine.GameStateMachine", {
        fields: {
            _states: null,
            _activeState: null
        },
        ctors: {
            ctor: function (runner, sceneLoader, services) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameStateMachine#ctor", this ); }

                this.$initialize();
                this._states = Bridge.fn.bind(this, function (_o1) {
                        _o1.setItem(CodeBase.Infrastructure.StateMachine.BootstrapState, new CodeBase.Infrastructure.StateMachine.BootstrapState(this, runner, sceneLoader, services));
                        _o1.setItem(CodeBase.Infrastructure.StateMachine.LoadLevelState, new CodeBase.Infrastructure.StateMachine.LoadLevelState(this, sceneLoader, services.Single(CodeBase.Infrastructure.Factories.IHudFactory)));
                        _o1.setItem(CodeBase.Infrastructure.StateMachine.GameLoopState, new CodeBase.Infrastructure.StateMachine.GameLoopState(services.Single(CodeBase.HelpSystem.IPlayerHelpService)));
                        return _o1;
                    })(new (System.Collections.Generic.Dictionary$2(System.Type,CodeBase.Infrastructure.StateMachine.IExitableState)).ctor());
            }
        },
        methods: {
            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.GetState start.*/
            GetState: function (TState) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameStateMachine#GetState", this ); }

                return Bridge.as(this._states.getItem(TState), TState);
            },
            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.GetState end.*/

            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.ChangeState start.*/
            ChangeState: function (TState) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameStateMachine#ChangeState", this ); }

                this._activeState != null ? this._activeState.CodeBase$Infrastructure$StateMachine$IExitableState$Exit() : null;

                var state = Bridge.rValue(this.GetState(TState));

                this._activeState = Bridge.rValue(state);

                return Bridge.rValue(state);
            },
            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.ChangeState end.*/

            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.Enter start.*/
            Enter: function (TState) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameStateMachine#Enter", this ); }

                var state = Bridge.rValue(this.ChangeState(TState));

                state.CodeBase$Infrastructure$StateMachine$IState$Enter();
            },
            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.Enter end.*/

            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.Enter$1 start.*/
            Enter$1: function (TState, TPayLoad, payload) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameStateMachine#Enter$1", this ); }

                var state = Bridge.rValue(this.ChangeState(TState));

Bridge.rValue(                state)["CodeBase$Infrastructure$StateMachine$IPayloadedState$1$" + Bridge.getTypeAlias(TPayLoad) + "$Enter"](Bridge.rValue(payload));
            },
            /*CodeBase.Infrastructure.StateMachine.GameStateMachine.Enter$1 end.*/


        },
        overloads: {
            "Enter(TPayLoad)": "Enter$1"
        }
    });
    /*CodeBase.Infrastructure.StateMachine.GameStateMachine end.*/

    /*CodeBase.UI.BaseButton start.*/
    Bridge.define("CodeBase.UI.BaseButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Button: null
        },
        methods: {
            /*CodeBase.UI.BaseButton.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CodeBase.UI.BaseButton#Awake", this ); }

                this.Button = this.GetComponent(UnityEngine.UI.Button);
                this.Button.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnButtonClicked));
            },
            /*CodeBase.UI.BaseButton.Awake end.*/


        }
    });
    /*CodeBase.UI.BaseButton end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*CodeBase.HelpSystem.HelpAnimationSystem start.*/
    Bridge.define("CodeBase.HelpSystem.HelpAnimationSystem", {
        inherits: [UnityEngine.MonoBehaviour,CodeBase.UI.IAnimatable],
        statics: {
            fields: {
                DefaultAlpha: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#init", this ); }

                    this.DefaultAlpha = 1.0;
                }
            }
        },
        fields: {
            _animationDuration: 0,
            _fadeDuration: 0,
            _helpHand: null,
            _mergeable: null,
            _finalPositionMergeable: null,
            _finalPositionHand: null,
            _handImage: null,
            _mergeableImage: null,
            _handStartPos: null,
            _mergeableStartPos: null,
            _animationCoroutine: null
        },
        alias: [
            "ShowAnimation", "CodeBase$UI$IAnimatable$ShowAnimation",
            "StopAnimation", "CodeBase$UI$IAnimatable$StopAnimation"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#init", this ); }

                this._handStartPos = new UnityEngine.Vector3();
                this._mergeableStartPos = new UnityEngine.Vector3();
                this._animationDuration = 2.8;
                this._fadeDuration = 0.4;
            }
        },
        methods: {
            /*CodeBase.HelpSystem.HelpAnimationSystem.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#OnDisable", this ); }

                this.StopAnimation();
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.OnDisable end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#OnDestroy", this ); }

                this.StopAnimation();
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.OnDestroy end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#Awake", this ); }

                this._handImage = this._helpHand.GetComponentInChildren(UnityEngine.UI.Image);
                this._mergeableImage = this._mergeable.GetComponent(UnityEngine.UI.Image);

                this.SetAlpha(this._handImage, 0.0);
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.Awake end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.FadeInAndMoveToMergeableCoroutine start.*/
            FadeInAndMoveToMergeableCoroutine: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#FadeInAndMoveToMergeableCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    time,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this._fadeDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        time = Math.max(0, Math.min(1, elapsed / this._fadeDuration));

                                        this._helpHand.position = new pc.Vec3().lerp( this._handStartPos, this._mergeableStartPos, time );
                                        this.SetAlpha(this._handImage, time);
                                        this.SetAlpha(this._mergeableImage, CodeBase.HelpSystem.HelpAnimationSystem.DefaultAlpha);

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._helpHand.position = this._mergeableStartPos.$clone();
                                        this.SetAlpha(this._handImage, CodeBase.HelpSystem.HelpAnimationSystem.DefaultAlpha);
                                        this.SetAlpha(this._mergeableImage, CodeBase.HelpSystem.HelpAnimationSystem.DefaultAlpha);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.FadeInAndMoveToMergeableCoroutine end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.MoveTogetherToTargetCoroutine start.*/
            MoveTogetherToTargetCoroutine: function (duration) {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#MoveTogetherToTargetCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    animationDuration,
                    elapsed,
                    finalTarget,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    animationDuration = duration - this._fadeDuration;
                                        elapsed = 0.0;

                                        finalTarget = this._finalPositionMergeable.position.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < animationDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / animationDuration));

                                        this._helpHand.position = new pc.Vec3().lerp( this._mergeableStartPos, finalTarget, t );
                                        this._mergeable.position = new pc.Vec3().lerp( this._mergeableStartPos, finalTarget, t );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._helpHand.position = finalTarget.$clone();
                                        this._mergeable.position = finalTarget.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.MoveTogetherToTargetCoroutine end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.FadeOutAndMoveHandAwayCoroutine start.*/
            FadeOutAndMoveHandAwayCoroutine: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#FadeOutAndMoveHandAwayCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    handStart,
                    handTarget,
                    time,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;
                                        handStart = this._helpHand.position.$clone();
                                        handTarget = this._finalPositionHand.position.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this._fadeDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        time = Math.max(0, Math.min(1, elapsed / this._fadeDuration));

                                        this._helpHand.position = new pc.Vec3().lerp( handStart, handTarget, time );
                                        this.SetAlpha(this._handImage, CodeBase.HelpSystem.HelpAnimationSystem.DefaultAlpha - time);
                                        this.SetAlpha(this._mergeableImage, CodeBase.HelpSystem.HelpAnimationSystem.DefaultAlpha - time);

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._helpHand.position = handTarget.$clone();
                                        this.SetAlpha(this._handImage, 0.0);
                                        this.SetAlpha(this._mergeableImage, 0.0);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.FadeOutAndMoveHandAwayCoroutine end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.ShowAnimationCoroutine start.*/
            ShowAnimationCoroutine: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#ShowAnimationCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._handStartPos = this._helpHand.position.$clone();
                                        this._mergeableStartPos = this._mergeable.position.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.FadeInAndMoveToMergeableCoroutine());
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.MoveTogetherToTargetCoroutine(this._animationDuration));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = this.StartCoroutine$1(this.FadeOutAndMoveHandAwayCoroutine());
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this.ResetToStart();

                                        $step = 1;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.ShowAnimationCoroutine end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.ResetToStart start.*/
            ResetToStart: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#ResetToStart", this ); }

                if (UnityEngine.Component.op_Equality(this._helpHand, null) || UnityEngine.Component.op_Equality(this._mergeable, null)) {
                    return;
                }

                this._helpHand.position = this._handStartPos.$clone();
                this._mergeable.position = this._mergeableStartPos.$clone();

                this.SetAlpha(this._handImage, 0.0);
                this.SetAlpha(this._mergeableImage, 0.0);
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.ResetToStart end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.SetAlpha start.*/
            SetAlpha: function (image, alpha) {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#SetAlpha", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(image, null)) {
                    return;
                }

                var color = image.color.$clone();
                color.a = alpha;
                image.color = color.$clone();
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.SetAlpha end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.ShowAnimation start.*/
            ShowAnimation: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#ShowAnimation", this ); }

                if (this._animationCoroutine != null) {
                    this.StopAnimation();
                }

                this._animationCoroutine = this.StartCoroutine$1(this.ShowAnimationCoroutine());
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.ShowAnimation end.*/

            /*CodeBase.HelpSystem.HelpAnimationSystem.StopAnimation start.*/
            StopAnimation: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.HelpAnimationSystem#StopAnimation", this ); }

                if (this._animationCoroutine != null) {
                    this.StopCoroutine$2(this._animationCoroutine);
                    this._animationCoroutine = null;
                }

                this.ResetToStart();
            },
            /*CodeBase.HelpSystem.HelpAnimationSystem.StopAnimation end.*/


        }
    });
    /*CodeBase.HelpSystem.HelpAnimationSystem end.*/

    /*CodeBase.HelpSystem.IPlayerHelpService start.*/
    Bridge.define("CodeBase.HelpSystem.IPlayerHelpService", {
        inherits: [CodeBase.Infrastructure.Services.IService],
        $kind: 3
    });
    /*CodeBase.HelpSystem.IPlayerHelpService end.*/

    /*CodeBase.Infrastructure.AssetManagement.IAssets start.*/
    Bridge.define("CodeBase.Infrastructure.AssetManagement.IAssets", {
        inherits: [CodeBase.Infrastructure.Services.IService],
        $kind: 3
    });
    /*CodeBase.Infrastructure.AssetManagement.IAssets end.*/

    /*CodeBase.Infrastructure.Factories.IHudFactory start.*/
    Bridge.define("CodeBase.Infrastructure.Factories.IHudFactory", {
        inherits: [CodeBase.Infrastructure.Services.IService],
        $kind: 3
    });
    /*CodeBase.Infrastructure.Factories.IHudFactory end.*/

    /*CodeBase.Infrastructure.GameBootstrapper start.*/
    Bridge.define("CodeBase.Infrastructure.GameBootstrapper", {
        inherits: [UnityEngine.MonoBehaviour,CodeBase.Infrastructure.ICoroutineRunner],
        fields: {
            _game: null
        },
        alias: [
            "StartCoroutine$1", "CodeBase$Infrastructure$ICoroutineRunner$StartCoroutine",
            "StopCoroutine$2", "CodeBase$Infrastructure$ICoroutineRunner$StopCoroutine"
        ],
        methods: {
            /*CodeBase.Infrastructure.GameBootstrapper.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.GameBootstrapper#Awake", this ); }

                this._game = new CodeBase.Infrastructure.Game(this);
                this._game.StateMachine.Enter(CodeBase.Infrastructure.StateMachine.BootstrapState);

                UnityEngine.MonoBehaviour.DontDestroyOnLoad(this);
            },
            /*CodeBase.Infrastructure.GameBootstrapper.Awake end.*/


        }
    });
    /*CodeBase.Infrastructure.GameBootstrapper end.*/

    /*CodeBase.Infrastructure.StateMachine.IState start.*/
    Bridge.define("CodeBase.Infrastructure.StateMachine.IState", {
        inherits: [CodeBase.Infrastructure.StateMachine.IExitableState],
        $kind: 3
    });
    /*CodeBase.Infrastructure.StateMachine.IState end.*/

    /*CodeBase.Infrastructure.StateMachine.IPayloadedState$1 start.*/
    Bridge.definei("CodeBase.Infrastructure.StateMachine.IPayloadedState$1", function (TPayload) { return {
        inherits: [CodeBase.Infrastructure.StateMachine.IExitableState],
        $kind: 3
    }; });
    /*CodeBase.Infrastructure.StateMachine.IPayloadedState$1 end.*/

    /*CodeBase.Services.IInputService start.*/
    Bridge.define("CodeBase.Services.IInputService", {
        inherits: [CodeBase.Infrastructure.Services.IService],
        $kind: 3
    });
    /*CodeBase.Services.IInputService end.*/

    /*CodeBase.Services.UnityUIService.IUIService start.*/
    Bridge.define("CodeBase.Services.UnityUIService.IUIService", {
        inherits: [CodeBase.Infrastructure.Services.IService],
        $kind: 3
    });
    /*CodeBase.Services.UnityUIService.IUIService end.*/

    /*CodeBase.UI.DownloadGameButton start.*/
    Bridge.define("CodeBase.UI.DownloadGameButton", {
        inherits: [CodeBase.UI.BaseButton],
        methods: {
            /*CodeBase.UI.DownloadGameButton.OnButtonClicked start.*/
            OnButtonClicked: function () {
if ( TRACE ) { TRACE( "CodeBase.UI.DownloadGameButton#OnButtonClicked", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*CodeBase.UI.DownloadGameButton.OnButtonClicked end.*/


        }
    });
    /*CodeBase.UI.DownloadGameButton end.*/

    /*CodeBase.HelpSystem.PlayerHelpService start.*/
    Bridge.define("CodeBase.HelpSystem.PlayerHelpService", {
        inherits: [CodeBase.HelpSystem.IPlayerHelpService,System.IDisposable],
        statics: {
            fields: {
                IdleThreshold: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#init", this ); }

                    this.IdleThreshold = 3.0;
                }
            }
        },
        fields: {
            _helpSystem: null,
            _endGameHud: null,
            _monitoringCoroutine: null,
            _factory: null,
            _inputService: null,
            _isMonitoring: false,
            _coroutineRunner: null
        },
        alias: [
            "StartMonitoring", "CodeBase$HelpSystem$IPlayerHelpService$StartMonitoring",
            "StopMonitoring", "CodeBase$HelpSystem$IPlayerHelpService$StopMonitoring",
            "Dispose", "System$IDisposable$Dispose"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#init", this ); }

                this._isMonitoring = false;
            },
            ctor: function (runner, factory, inputService) {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#ctor", this ); }

                this.$initialize();
                this._factory = factory;
                this._inputService = inputService;
                this._coroutineRunner = runner;
            }
        },
        methods: {
            /*CodeBase.HelpSystem.PlayerHelpService.MonitorPlayerIdleCoroutine start.*/
            MonitorPlayerIdleCoroutine: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#MonitorPlayerIdleCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    idleTime,
                    helpAnimationStarted,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    idleTime = 0.0;
                                        helpAnimationStarted = false;
                                        this.GetFactoryHuds();

                                        if (UnityEngine.MonoBehaviour.op_Equality(this._helpSystem, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    if ( this._isMonitoring ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 3: {
                                    if (System.Nullable.eq((this._inputService != null ? this._inputService.CodeBase$Services$IInputService$IsPlayerInputAllowed : null), false)) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    this.ResetAndCleanup();
                                        return false;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if (UnityEngine.Input.anyKey || UnityEngine.Input.GetMouseButtonDown(0) || UnityEngine.Input.touchCount > 0) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 6: {
                                    if (helpAnimationStarted) {
                                            this._helpSystem.StopAnimation();
                                            helpAnimationStarted = false;
                                        }
                                        UnityEngine.GameObject.op_Inequality(this._endGameHud, null) ? this._endGameHud.SetActive(true) : null;
                                        return false;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    idleTime += UnityEngine.Time.deltaTime;

                                        if (idleTime >= CodeBase.HelpSystem.PlayerHelpService.IdleThreshold && !helpAnimationStarted) {
                                            helpAnimationStarted = true;
                                            this._helpSystem.ShowAnimation();
                                        }

                                        $enumerator.current = null;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 9: {
                                    if (helpAnimationStarted && UnityEngine.MonoBehaviour.op_Inequality(this._helpSystem, null)) {
                                            this._helpSystem.StopAnimation();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CodeBase.HelpSystem.PlayerHelpService.MonitorPlayerIdleCoroutine end.*/

            /*CodeBase.HelpSystem.PlayerHelpService.GetFactoryHuds start.*/
            GetFactoryHuds: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#GetFactoryHuds", this ); }

                if (this._factory == null) {
                    return;
                }

                if (UnityEngine.GameObject.op_Inequality(this._factory.CodeBase$Infrastructure$Factories$IHudFactory$PlayerHelpHud, null)) {
                    this._helpSystem = this._factory.CodeBase$Infrastructure$Factories$IHudFactory$PlayerHelpHud.GetComponentInChildren(CodeBase.HelpSystem.HelpAnimationSystem);
                }

                this._endGameHud = this._factory.CodeBase$Infrastructure$Factories$IHudFactory$EndGameHud;
            },
            /*CodeBase.HelpSystem.PlayerHelpService.GetFactoryHuds end.*/

            /*CodeBase.HelpSystem.PlayerHelpService.ResetAndCleanup start.*/
            ResetAndCleanup: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#ResetAndCleanup", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._helpSystem, null)) {
                    this._helpSystem.StopAnimation();
                }
                this._isMonitoring = false;
            },
            /*CodeBase.HelpSystem.PlayerHelpService.ResetAndCleanup end.*/

            /*CodeBase.HelpSystem.PlayerHelpService.StartMonitoring start.*/
            StartMonitoring: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#StartMonitoring", this ); }

                if (this._isMonitoring || this._coroutineRunner == null) {
                    return;
                }

                this.StopMonitoring();
                this._isMonitoring = true;
                this._monitoringCoroutine = this._coroutineRunner.CodeBase$Infrastructure$ICoroutineRunner$StartCoroutine(this.MonitorPlayerIdleCoroutine());
            },
            /*CodeBase.HelpSystem.PlayerHelpService.StartMonitoring end.*/

            /*CodeBase.HelpSystem.PlayerHelpService.StopMonitoring start.*/
            StopMonitoring: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#StopMonitoring", this ); }

                this._isMonitoring = false;

                if (this._monitoringCoroutine != null && this._coroutineRunner != null) {
                    this._coroutineRunner.CodeBase$Infrastructure$ICoroutineRunner$StopCoroutine(this._monitoringCoroutine);
                    this._monitoringCoroutine = null;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._helpSystem, null)) {
                    this._helpSystem.StopAnimation();
                }
            },
            /*CodeBase.HelpSystem.PlayerHelpService.StopMonitoring end.*/

            /*CodeBase.HelpSystem.PlayerHelpService.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "CodeBase.HelpSystem.PlayerHelpService#Dispose", this ); }

                this.StopMonitoring();
            },
            /*CodeBase.HelpSystem.PlayerHelpService.Dispose end.*/


        }
    });
    /*CodeBase.HelpSystem.PlayerHelpService end.*/

    /*CodeBase.Infrastructure.AssetManagement.AssetProvider start.*/
    Bridge.define("CodeBase.Infrastructure.AssetManagement.AssetProvider", {
        inherits: [CodeBase.Infrastructure.AssetManagement.IAssets],
        alias: [
            "Instantiate", "CodeBase$Infrastructure$AssetManagement$IAssets$Instantiate",
            "Instantiate$1", "CodeBase$Infrastructure$AssetManagement$IAssets$Instantiate$1"
        ],
        methods: {
            /*CodeBase.Infrastructure.AssetManagement.AssetProvider.Instantiate start.*/
            Instantiate: function (path) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.AssetManagement.AssetProvider#Instantiate", this ); }

                var prefab = UnityEngine.Resources.Load(UnityEngine.GameObject, path);

                return UnityEngine.GameObject.op_Inequality(prefab, null) ? UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab) : null;
            },
            /*CodeBase.Infrastructure.AssetManagement.AssetProvider.Instantiate end.*/

            /*CodeBase.Infrastructure.AssetManagement.AssetProvider.Instantiate$1 start.*/
            Instantiate$1: function (path, position) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.AssetManagement.AssetProvider#Instantiate$1", this ); }

                var prefab = UnityEngine.Resources.Load(UnityEngine.GameObject, path);

                return UnityEngine.GameObject.op_Inequality(prefab, null) ? UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, prefab, position, pc.Quat.IDENTITY.clone()) : null;
            },
            /*CodeBase.Infrastructure.AssetManagement.AssetProvider.Instantiate$1 end.*/


        },
        overloads: {
            "Instantiate(string, Vector3)": "Instantiate$1"
        }
    });
    /*CodeBase.Infrastructure.AssetManagement.AssetProvider end.*/

    /*CodeBase.Infrastructure.Factories.HudFactory start.*/
    Bridge.define("CodeBase.Infrastructure.Factories.HudFactory", {
        inherits: [CodeBase.Infrastructure.Factories.IHudFactory],
        fields: {
            _assets: null,
            _uiService: null,
            _hudPaths: null,
            EndGameHud: null,
            PlayerHelpHud: null
        },
        alias: [
            "EndGameHud", "CodeBase$Infrastructure$Factories$IHudFactory$EndGameHud",
            "PlayerHelpHud", "CodeBase$Infrastructure$Factories$IHudFactory$PlayerHelpHud",
            "CreateSceneHuds", "CodeBase$Infrastructure$Factories$IHudFactory$CreateSceneHuds"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Factories.HudFactory#init", this ); }

                this._hudPaths = function (_o1) {
                        _o1.add(CodeBase.Infrastructure.AssetManagement.AssetPath.GameHud);
                        _o1.add(CodeBase.Infrastructure.AssetManagement.AssetPath.EndGameHud);
                        _o1.add(CodeBase.Infrastructure.AssetManagement.AssetPath.PlayerHelpHud);
                        return _o1;
                    }(new (System.Collections.Generic.List$1(System.String)).ctor());
            },
            ctor: function (assets, service) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Factories.HudFactory#ctor", this ); }

                this.$initialize();
                this._assets = assets;
                this._uiService = service;
            }
        },
        methods: {
            /*CodeBase.Infrastructure.Factories.HudFactory.CreateHud start.*/
            CreateHud: function (path) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Factories.HudFactory#CreateHud", this ); }

                return this._assets.CodeBase$Infrastructure$AssetManagement$IAssets$Instantiate(path);
            },
            /*CodeBase.Infrastructure.Factories.HudFactory.CreateHud end.*/

            /*CodeBase.Infrastructure.Factories.HudFactory.CreateSceneHuds start.*/
            CreateSceneHuds: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.Factories.HudFactory#CreateSceneHuds", this ); }

                var $t;
                this._uiService.CodeBase$Services$UnityUIService$IUIService$Initialize();

                var parentPoint = this._uiService.CodeBase$Services$UnityUIService$IUIService$ParentScreenPoint;

                $t = Bridge.getEnumerator(this._hudPaths);
                try {
                    while ($t.moveNext()) {
                        var path = $t.Current;
                        var hud = this.CreateHud(path);

                        this._uiService.CodeBase$Services$UnityUIService$IUIService$SetScreenParent(hud, parentPoint);

                        if (Bridge.referenceEquals(path, CodeBase.Infrastructure.AssetManagement.AssetPath.EndGameHud)) {
                            this.EndGameHud = hud;
                            hud.gameObject.SetActive(false);
                        }

                        if (Bridge.referenceEquals(path, CodeBase.Infrastructure.AssetManagement.AssetPath.PlayerHelpHud)) {
                            this.PlayerHelpHud = hud;
                        }

                        var canvasRectTransform = hud.GetComponentInChildren(UnityEngine.Canvas).GetComponent(UnityEngine.RectTransform);

                        this._uiService.CodeBase$Services$UnityUIService$IUIService$SetStretch(canvasRectTransform);
                        UnityEngine.UI.LayoutRebuilder.ForceRebuildLayoutImmediate(canvasRectTransform);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*CodeBase.Infrastructure.Factories.HudFactory.CreateSceneHuds end.*/


        }
    });
    /*CodeBase.Infrastructure.Factories.HudFactory end.*/

    /*CodeBase.Infrastructure.StateMachine.BootstrapState start.*/
    Bridge.define("CodeBase.Infrastructure.StateMachine.BootstrapState", {
        inherits: [CodeBase.Infrastructure.StateMachine.IState],
        statics: {
            fields: {
                Bootstrap: null,
                Main: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.BootstrapState#init", this ); }

                    this.Bootstrap = "Bootstrap";
                    this.Main = "Main";
                }
            },
            methods: {
                /*CodeBase.Infrastructure.StateMachine.BootstrapState.InputService:static start.*/
                InputService: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.BootstrapState#InputService", this ); }

                    if (UnityEngine.Application.isEditor) {
                        return new CodeBase.Services.StandaloneInputService();
                    } else {
                        return new CodeBase.Services.MobileInputService();
                    }
                },
                /*CodeBase.Infrastructure.StateMachine.BootstrapState.InputService:static end.*/


            }
        },
        fields: {
            _stateMachine: null,
            _sceneLoader: null,
            _services: null,
            _runner: null
        },
        alias: [
            "Exit", "CodeBase$Infrastructure$StateMachine$IExitableState$Exit",
            "Enter", "CodeBase$Infrastructure$StateMachine$IState$Enter"
        ],
        ctors: {
            ctor: function (gameStateMachine, runner, sceneLoader, services) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.BootstrapState#ctor", this ); }

                this.$initialize();
                this._stateMachine = gameStateMachine;
                this._sceneLoader = sceneLoader;
                this._services = services;
                this._runner = runner;
                this.RegisterServices();
            }
        },
        methods: {
            /*CodeBase.Infrastructure.StateMachine.BootstrapState.RegisterServices start.*/
            RegisterServices: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.BootstrapState#RegisterServices", this ); }

                this._services.RegisterSingle(CodeBase.Services.IInputService, CodeBase.Infrastructure.StateMachine.BootstrapState.InputService());
                this._services.RegisterSingle(CodeBase.Infrastructure.AssetManagement.IAssets, new CodeBase.Infrastructure.AssetManagement.AssetProvider());
                this._services.RegisterSingle(CodeBase.Services.UnityUIService.IUIService, new CodeBase.Services.UnityUIService.UnityUIService());
                this._services.RegisterSingle(CodeBase.Infrastructure.Factories.IHudFactory, new CodeBase.Infrastructure.Factories.HudFactory(this._services.Single(CodeBase.Infrastructure.AssetManagement.IAssets), this._services.Single(CodeBase.Services.UnityUIService.IUIService)));
                this._services.RegisterSingle(CodeBase.HelpSystem.IPlayerHelpService, new CodeBase.HelpSystem.PlayerHelpService(this._runner, this._services.Single(CodeBase.Infrastructure.Factories.IHudFactory), this._services.Single(CodeBase.Services.IInputService)));
            },
            /*CodeBase.Infrastructure.StateMachine.BootstrapState.RegisterServices end.*/

            /*CodeBase.Infrastructure.StateMachine.BootstrapState.EnterLoadLevel start.*/
            EnterLoadLevel: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.BootstrapState#EnterLoadLevel", this ); }

                this._stateMachine.Enter$1(CodeBase.Infrastructure.StateMachine.LoadLevelState, System.String, CodeBase.Infrastructure.StateMachine.BootstrapState.Main);
            },
            /*CodeBase.Infrastructure.StateMachine.BootstrapState.EnterLoadLevel end.*/

            /*CodeBase.Infrastructure.StateMachine.BootstrapState.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.BootstrapState#Exit", this ); }

                System.Console.WriteLine("Bootstrap State Exited");
            },
            /*CodeBase.Infrastructure.StateMachine.BootstrapState.Exit end.*/

            /*CodeBase.Infrastructure.StateMachine.BootstrapState.Enter start.*/
            Enter: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.BootstrapState#Enter", this ); }

                this._sceneLoader.Load(CodeBase.Infrastructure.StateMachine.BootstrapState.Bootstrap, Bridge.fn.cacheBind(this, this.EnterLoadLevel));
            },
            /*CodeBase.Infrastructure.StateMachine.BootstrapState.Enter end.*/


        }
    });
    /*CodeBase.Infrastructure.StateMachine.BootstrapState end.*/

    /*CodeBase.Infrastructure.StateMachine.GameLoopState start.*/
    Bridge.define("CodeBase.Infrastructure.StateMachine.GameLoopState", {
        inherits: [CodeBase.Infrastructure.StateMachine.IState],
        fields: {
            _helpService: null
        },
        alias: [
            "Enter", "CodeBase$Infrastructure$StateMachine$IState$Enter",
            "Exit", "CodeBase$Infrastructure$StateMachine$IExitableState$Exit"
        ],
        ctors: {
            ctor: function (service) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameLoopState#ctor", this ); }

                this.$initialize();
                this._helpService = service;
            }
        },
        methods: {
            /*CodeBase.Infrastructure.StateMachine.GameLoopState.Enter start.*/
            Enter: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameLoopState#Enter", this ); }

                this._helpService.CodeBase$HelpSystem$IPlayerHelpService$StartMonitoring();
            },
            /*CodeBase.Infrastructure.StateMachine.GameLoopState.Enter end.*/

            /*CodeBase.Infrastructure.StateMachine.GameLoopState.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.GameLoopState#Exit", this ); }

                this._helpService.CodeBase$HelpSystem$IPlayerHelpService$StartMonitoring();
            },
            /*CodeBase.Infrastructure.StateMachine.GameLoopState.Exit end.*/


        }
    });
    /*CodeBase.Infrastructure.StateMachine.GameLoopState end.*/

    /*CodeBase.Infrastructure.StateMachine.LoadLevelState start.*/
    Bridge.define("CodeBase.Infrastructure.StateMachine.LoadLevelState", {
        inherits: [CodeBase.Infrastructure.StateMachine.IPayloadedState$1(System.String)],
        fields: {
            _stateMachine: null,
            _sceneLoader: null,
            _hudGameFactory: null
        },
        alias: [
            "Exit", "CodeBase$Infrastructure$StateMachine$IExitableState$Exit",
            "Enter", "CodeBase$Infrastructure$StateMachine$IPayloadedState$1$System$String$Enter"
        ],
        ctors: {
            ctor: function (stateMachine, sceneLoader, gameFactory) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.LoadLevelState#ctor", this ); }

                this.$initialize();
                this._stateMachine = stateMachine;
                this._sceneLoader = sceneLoader;
                this._hudGameFactory = gameFactory;
            }
        },
        methods: {
            /*CodeBase.Infrastructure.StateMachine.LoadLevelState.OnLoaded start.*/
            OnLoaded: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.LoadLevelState#OnLoaded", this ); }

                this._hudGameFactory.CodeBase$Infrastructure$Factories$IHudFactory$CreateSceneHuds();
                this._stateMachine.Enter(CodeBase.Infrastructure.StateMachine.GameLoopState);
            },
            /*CodeBase.Infrastructure.StateMachine.LoadLevelState.OnLoaded end.*/

            /*CodeBase.Infrastructure.StateMachine.LoadLevelState.Exit start.*/
            Exit: function () {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.LoadLevelState#Exit", this ); }

                System.Console.WriteLine("Load State Exited");
            },
            /*CodeBase.Infrastructure.StateMachine.LoadLevelState.Exit end.*/

            /*CodeBase.Infrastructure.StateMachine.LoadLevelState.Enter start.*/
            Enter: function (sceneName) {
if ( TRACE ) { TRACE( "CodeBase.Infrastructure.StateMachine.LoadLevelState#Enter", this ); }

                this._sceneLoader.Load(sceneName, Bridge.fn.cacheBind(this, this.OnLoaded));
            },
            /*CodeBase.Infrastructure.StateMachine.LoadLevelState.Enter end.*/


        }
    });
    /*CodeBase.Infrastructure.StateMachine.LoadLevelState end.*/

    /*CodeBase.Services.InputService start.*/
    Bridge.define("CodeBase.Services.InputService", {
        inherits: [CodeBase.Services.IInputService],
        fields: {
            IsPlayerInputAllowed: false
        },
        alias: ["IsPlayerInputAllowed", "CodeBase$Services$IInputService$IsPlayerInputAllowed"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.InputService#init", this ); }

                this.IsPlayerInputAllowed = true;
            }
        },
        methods: {
            /*CodeBase.Services.InputService.SetPlayerInputStatus start.*/
            SetPlayerInputStatus: function (status) {
if ( TRACE ) { TRACE( "CodeBase.Services.InputService#SetPlayerInputStatus", this ); }

                this.IsPlayerInputAllowed = status;

                if (UnityEngine.MonoBehaviour.op_Inequality(UnityEngine.EventSystems.EventSystem.current, null)) {
                    UnityEngine.EventSystems.EventSystem.current.enabled = status;
                }
            },
            /*CodeBase.Services.InputService.SetPlayerInputStatus end.*/


        }
    });
    /*CodeBase.Services.InputService end.*/

    /*CodeBase.Services.UnityUIService.UnityUIService start.*/
    Bridge.define("CodeBase.Services.UnityUIService.UnityUIService", {
        inherits: [CodeBase.Services.UnityUIService.IUIService],
        fields: {
            _currentAspectRation: 0,
            ParentScreenPoint: null
        },
        alias: [
            "ParentScreenPoint", "CodeBase$Services$UnityUIService$IUIService$ParentScreenPoint",
            "SetStretch", "CodeBase$Services$UnityUIService$IUIService$SetStretch",
            "SetScreenParent", "CodeBase$Services$UnityUIService$IUIService$SetScreenParent",
            "Initialize", "CodeBase$Services$UnityUIService$IUIService$Initialize"
        ],
        methods: {
            /*CodeBase.Services.UnityUIService.UnityUIService.SelectResolution start.*/
            SelectResolution: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.UnityUIService.UnityUIService#SelectResolution", this ); }

                var aspectRatio = UnityEngine.Screen.width / UnityEngine.Screen.height;
                var resoulutions = function (_o1) {
                        _o1.add(new pc.Vec2( 1080, 610 ));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor());

                return System.Linq.Enumerable.from(resoulutions, UnityEngine.Vector2).orderBy(function (res) {
                        return Math.abs(res.x / res.y - aspectRatio);
                    }).first();
            },
            /*CodeBase.Services.UnityUIService.UnityUIService.SelectResolution end.*/

            /*CodeBase.Services.UnityUIService.UnityUIService.ConfigureLayer start.*/
            ConfigureLayer: function (name, parentObject) {
if ( TRACE ) { TRACE( "CodeBase.Services.UnityUIService.UnityUIService#ConfigureLayer", this ); }

                var objectLayer = new UnityEngine.GameObject.$ctor2(name);
                var layerGO_rectTransform = objectLayer.AddComponent(UnityEngine.RectTransform);
                var aspectRatioFilter = objectLayer.AddComponent(UnityEngine.UI.AspectRatioFitter);

                objectLayer.layer = 5;
                layerGO_rectTransform.SetParent(parentObject.transform, false);

                aspectRatioFilter.aspectMode = UnityEngine.UI.AspectRatioFitter.AspectMode.FitInParent;
                aspectRatioFilter.aspectRatio = this._currentAspectRation;
                this.SetStretch(layerGO_rectTransform);

                return objectLayer;

            },
            /*CodeBase.Services.UnityUIService.UnityUIService.ConfigureLayer end.*/

            /*CodeBase.Services.UnityUIService.UnityUIService.SetCanvasSettings start.*/
            SetCanvasSettings: function (rootCanvas) {
if ( TRACE ) { TRACE( "CodeBase.Services.UnityUIService.UnityUIService#SetCanvasSettings", this ); }

                var canvas = rootCanvas.GetComponent(UnityEngine.Canvas);

                rootCanvas.layer = 5;
                canvas.renderMode = UnityEngine.RenderMode.ScreenSpaceOverlay;

                var currentResolution = this.SelectResolution();
                var canvasScaler = rootCanvas.AddComponent(UnityEngine.UI.CanvasScaler);

                canvasScaler.uiScaleMode = UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
                canvasScaler.screenMatchMode = UnityEngine.UI.CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
                canvasScaler.matchWidthOrHeight = 0.5;
                canvasScaler.referenceResolution = currentResolution.$clone();
                this._currentAspectRation = currentResolution.x / currentResolution.y;
            },
            /*CodeBase.Services.UnityUIService.UnityUIService.SetCanvasSettings end.*/

            /*CodeBase.Services.UnityUIService.UnityUIService.SetStretch start.*/
            SetStretch: function (rectTransform) {
if ( TRACE ) { TRACE( "CodeBase.Services.UnityUIService.UnityUIService#SetStretch", this ); }

                rectTransform.offsetMax = pc.Vec2.ZERO.clone();
                rectTransform.offsetMin = pc.Vec2.ZERO.clone();
                rectTransform.anchorMin = pc.Vec2.ZERO.clone();
                rectTransform.anchorMax = pc.Vec2.ONE.clone();
                rectTransform.pivot = new pc.Vec2( 0.5, 0.5 );
            },
            /*CodeBase.Services.UnityUIService.UnityUIService.SetStretch end.*/

            /*CodeBase.Services.UnityUIService.UnityUIService.SetScreenParent start.*/
            SetScreenParent: function (screen, parentPosition) {
if ( TRACE ) { TRACE( "CodeBase.Services.UnityUIService.UnityUIService#SetScreenParent", this ); }

                if (UnityEngine.GameObject.op_Equality(screen, null)) {
                    return;
                }

                screen.GetComponent(UnityEngine.RectTransform).SetParent(parentPosition, false);
            },
            /*CodeBase.Services.UnityUIService.UnityUIService.SetScreenParent end.*/

            /*CodeBase.Services.UnityUIService.UnityUIService.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.UnityUIService.UnityUIService#Initialize", this ); }

                var rootCanvas = new UnityEngine.GameObject.$ctor2("[ROOTCANVAS]");

                rootCanvas.AddComponent(UnityEngine.RectTransform);
                rootCanvas.tag = "CanvasParentPoint";
                rootCanvas.layer = 5;

                var canvas = rootCanvas.AddComponent(UnityEngine.Canvas);

                this.SetCanvasSettings(rootCanvas);

                var rootLayer = this.ConfigureLayer("UIScreenLayer", rootCanvas);
                this.ParentScreenPoint = rootLayer.transform;
            },
            /*CodeBase.Services.UnityUIService.UnityUIService.Initialize end.*/


        }
    });
    /*CodeBase.Services.UnityUIService.UnityUIService end.*/

    /*CodeBase.Services.MobileInputService start.*/
    Bridge.define("CodeBase.Services.MobileInputService", {
        inherits: [CodeBase.Services.InputService],
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.MobileInputService#ctor", this ); }

                this.$initialize();
                CodeBase.Services.InputService.ctor.call(this);
            }
        }
    });
    /*CodeBase.Services.MobileInputService end.*/

    /*CodeBase.Services.StandaloneInputService start.*/
    Bridge.define("CodeBase.Services.StandaloneInputService", {
        inherits: [CodeBase.Services.InputService],
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "CodeBase.Services.StandaloneInputService#ctor", this ); }

                this.$initialize();
                CodeBase.Services.InputService.ctor.call(this);
            }
        }
    });
    /*CodeBase.Services.StandaloneInputService end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.UI","UnityEngine","CodeBase.Infrastructure","CodeBase.Infrastructure.StateMachine","System.Collections","CodeBase.Infrastructure.Services","System.Collections.Generic","CodeBase.Services","CodeBase.HelpSystem","CodeBase.Infrastructure.Factories","CodeBase.Infrastructure.AssetManagement","CodeBase.Services.UnityUIService"];

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*CodeBase.UI.BaseButton start.*/
    $m("CodeBase.UI.BaseButton", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"ab":true,"a":3,"n":"OnButtonClicked","t":8,"sn":"OnButtonClicked","rt":$n[0].Void},{"a":3,"n":"Button","t":16,"rt":$n[1].Button,"g":{"a":3,"n":"get_Button","t":8,"rt":$n[1].Button,"fg":"Button"},"s":{"a":1,"n":"set_Button","t":8,"p":[$n[1].Button],"rt":$n[0].Void,"fs":"Button"},"fn":"Button"},{"a":1,"backing":true,"n":"<Button>k__BackingField","t":4,"rt":$n[1].Button,"sn":"Button"}]}; }, $n);
    /*CodeBase.UI.BaseButton end.*/

    /*CodeBase.UI.DownloadGameButton start.*/
    $m("CodeBase.UI.DownloadGameButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnButtonClicked","t":8,"sn":"OnButtonClicked","rt":$n[0].Void}]}; }, $n);
    /*CodeBase.UI.DownloadGameButton end.*/

    /*CodeBase.UI.IAnimatable start.*/
    $m("CodeBase.UI.IAnimatable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"ShowAnimation","t":8,"sn":"CodeBase$UI$IAnimatable$ShowAnimation","rt":$n[0].Void},{"ab":true,"a":2,"n":"StopAnimation","t":8,"sn":"CodeBase$UI$IAnimatable$StopAnimation","rt":$n[0].Void}]}; }, $n);
    /*CodeBase.UI.IAnimatable end.*/

    /*CodeBase.Services.IInputService start.*/
    $m("CodeBase.Services.IInputService", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"IsPlayerInputAllowed","t":16,"rt":$n[0].Boolean,"g":{"ab":true,"a":2,"n":"get_IsPlayerInputAllowed","t":8,"rt":$n[0].Boolean,"fg":"CodeBase$Services$IInputService$IsPlayerInputAllowed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CodeBase$Services$IInputService$IsPlayerInputAllowed"},{"a":1,"backing":true,"n":"<IsPlayerInputAllowed>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"CodeBase$Services$IInputService$IsPlayerInputAllowed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CodeBase.Services.IInputService end.*/

    /*CodeBase.Services.InputService start.*/
    $m("CodeBase.Services.InputService", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetPlayerInputStatus","t":8,"pi":[{"n":"status","pt":$n[0].Boolean,"ps":0}],"sn":"SetPlayerInputStatus","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"IsPlayerInputAllowed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsPlayerInputAllowed","t":8,"rt":$n[0].Boolean,"fg":"IsPlayerInputAllowed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsPlayerInputAllowed","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsPlayerInputAllowed"},"fn":"IsPlayerInputAllowed"},{"a":1,"n":"__Property__Initializer__IsPlayerInputAllowed","t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__IsPlayerInputAllowed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<IsPlayerInputAllowed>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsPlayerInputAllowed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CodeBase.Services.InputService end.*/

    /*CodeBase.Services.MobileInputService start.*/
    $m("CodeBase.Services.MobileInputService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*CodeBase.Services.MobileInputService end.*/

    /*CodeBase.Services.StandaloneInputService start.*/
    $m("CodeBase.Services.StandaloneInputService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*CodeBase.Services.StandaloneInputService end.*/

    /*CodeBase.Services.UnityUIService.IUIService start.*/
    $m("CodeBase.Services.UnityUIService.IUIService", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Initialize","t":8,"sn":"CodeBase$Services$UnityUIService$IUIService$Initialize","rt":$n[0].Void},{"ab":true,"a":2,"n":"SetScreenParent","t":8,"pi":[{"n":"screen","pt":$n[2].GameObject,"ps":0},{"n":"parentPosition","pt":$n[2].Transform,"ps":1}],"sn":"CodeBase$Services$UnityUIService$IUIService$SetScreenParent","rt":$n[0].Void,"p":[$n[2].GameObject,$n[2].Transform]},{"ab":true,"a":2,"n":"SetStretch","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0}],"sn":"CodeBase$Services$UnityUIService$IUIService$SetStretch","rt":$n[0].Void,"p":[$n[2].RectTransform]},{"ab":true,"a":2,"n":"ParentScreenPoint","t":16,"rt":$n[2].Transform,"g":{"ab":true,"a":2,"n":"get_ParentScreenPoint","t":8,"rt":$n[2].Transform,"fg":"CodeBase$Services$UnityUIService$IUIService$ParentScreenPoint"},"fn":"CodeBase$Services$UnityUIService$IUIService$ParentScreenPoint"},{"a":1,"backing":true,"n":"<ParentScreenPoint>k__BackingField","t":4,"rt":$n[2].Transform,"sn":"CodeBase$Services$UnityUIService$IUIService$ParentScreenPoint"}]}; }, $n);
    /*CodeBase.Services.UnityUIService.IUIService end.*/

    /*CodeBase.Services.UnityUIService.UnityUIService start.*/
    $m("CodeBase.Services.UnityUIService.UnityUIService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ConfigureLayer","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"parentObject","pt":$n[2].GameObject,"ps":1}],"sn":"ConfigureLayer","rt":$n[2].GameObject,"p":[$n[0].String,$n[2].GameObject]},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":1,"n":"SelectResolution","t":8,"sn":"SelectResolution","rt":$n[2].Vector2},{"a":1,"n":"SetCanvasSettings","t":8,"pi":[{"n":"rootCanvas","pt":$n[2].GameObject,"ps":0}],"sn":"SetCanvasSettings","rt":$n[0].Void,"p":[$n[2].GameObject]},{"a":2,"n":"SetScreenParent","t":8,"pi":[{"n":"screen","pt":$n[2].GameObject,"ps":0},{"n":"parentPosition","pt":$n[2].Transform,"ps":1}],"sn":"SetScreenParent","rt":$n[0].Void,"p":[$n[2].GameObject,$n[2].Transform]},{"a":2,"n":"SetStretch","t":8,"pi":[{"n":"rectTransform","pt":$n[2].RectTransform,"ps":0}],"sn":"SetStretch","rt":$n[0].Void,"p":[$n[2].RectTransform]},{"a":2,"n":"ParentScreenPoint","t":16,"rt":$n[2].Transform,"g":{"a":2,"n":"get_ParentScreenPoint","t":8,"rt":$n[2].Transform,"fg":"ParentScreenPoint"},"s":{"a":1,"n":"set_ParentScreenPoint","t":8,"p":[$n[2].Transform],"rt":$n[0].Void,"fs":"ParentScreenPoint"},"fn":"ParentScreenPoint"},{"a":1,"n":"_currentAspectRation","t":4,"rt":$n[0].Single,"sn":"_currentAspectRation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<ParentScreenPoint>k__BackingField","t":4,"rt":$n[2].Transform,"sn":"ParentScreenPoint"}]}; }, $n);
    /*CodeBase.Services.UnityUIService.UnityUIService end.*/

    /*CodeBase.Infrastructure.Game start.*/
    $m("CodeBase.Infrastructure.Game", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].ICoroutineRunner],"pi":[{"n":"coroutineRunner","pt":$n[3].ICoroutineRunner,"ps":0}],"sn":"ctor"},{"a":2,"n":"StateMachine","t":16,"rt":$n[4].GameStateMachine,"g":{"a":2,"n":"get_StateMachine","t":8,"rt":$n[4].GameStateMachine,"fg":"StateMachine"},"s":{"a":1,"n":"set_StateMachine","t":8,"p":[$n[4].GameStateMachine],"rt":$n[0].Void,"fs":"StateMachine"},"fn":"StateMachine"},{"a":1,"backing":true,"n":"<StateMachine>k__BackingField","t":4,"rt":$n[4].GameStateMachine,"sn":"StateMachine"}]}; }, $n);
    /*CodeBase.Infrastructure.Game end.*/

    /*CodeBase.Infrastructure.GameBootstrapper start.*/
    $m("CodeBase.Infrastructure.GameBootstrapper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"_game","t":4,"rt":$n[3].Game,"sn":"_game"}]}; }, $n);
    /*CodeBase.Infrastructure.GameBootstrapper end.*/

    /*CodeBase.Infrastructure.ICoroutineRunner start.*/
    $m("CodeBase.Infrastructure.ICoroutineRunner", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"StartCoroutine","t":8,"pi":[{"n":"coroutine","pt":$n[5].IEnumerator,"ps":0}],"sn":"CodeBase$Infrastructure$ICoroutineRunner$StartCoroutine","rt":$n[2].Coroutine,"p":[$n[5].IEnumerator]},{"ab":true,"a":2,"n":"StopCoroutine","t":8,"pi":[{"n":"coroutine","pt":$n[2].Coroutine,"ps":0}],"sn":"CodeBase$Infrastructure$ICoroutineRunner$StopCoroutine","rt":$n[0].Void,"p":[$n[2].Coroutine]}]}; }, $n);
    /*CodeBase.Infrastructure.ICoroutineRunner end.*/

    /*CodeBase.Infrastructure.SceneLoader start.*/
    $m("CodeBase.Infrastructure.SceneLoader", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].ICoroutineRunner],"pi":[{"n":"coroutineRunner","pt":$n[3].ICoroutineRunner,"ps":0}],"sn":"ctor"},{"a":2,"n":"Load","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"onLoaded","dv":null,"o":true,"pt":Function,"ps":1}],"sn":"Load","rt":$n[0].Void,"p":[$n[0].String,Function]},{"a":1,"n":"LoadScene","t":8,"pi":[{"n":"nextScene","pt":$n[0].String,"ps":0},{"n":"onLoaded","dv":null,"o":true,"pt":Function,"ps":1}],"sn":"LoadScene","rt":$n[5].IEnumerator,"p":[$n[0].String,Function]},{"a":1,"n":"_coroutineRunner","t":4,"rt":$n[3].ICoroutineRunner,"sn":"_coroutineRunner","ro":true}]}; }, $n);
    /*CodeBase.Infrastructure.SceneLoader end.*/

    /*CodeBase.Infrastructure.StateMachine.GameStateMachine start.*/
    $m("CodeBase.Infrastructure.StateMachine.GameStateMachine", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].ICoroutineRunner,$n[3].SceneLoader,$n[6].AllServices],"pi":[{"n":"runner","pt":$n[3].ICoroutineRunner,"ps":0},{"n":"sceneLoader","pt":$n[3].SceneLoader,"ps":1},{"n":"services","pt":$n[6].AllServices,"ps":2}],"sn":"ctor"},{"a":1,"n":"ChangeState","t":8,"tpc":1,"tprm":["TState"],"sn":"ChangeState","rt":System.Object},{"a":2,"n":"Enter","t":8,"tpc":1,"tprm":["TState"],"sn":"Enter","rt":$n[0].Void},{"a":2,"n":"Enter","t":8,"pi":[{"n":"payload","pt":System.Object,"ps":0}],"tpc":2,"tprm":["TState","TPayLoad"],"sn":"Enter$1","rt":$n[0].Void,"p":[System.Object]},{"a":1,"n":"GetState","t":8,"tpc":1,"tprm":["TState"],"sn":"GetState","rt":System.Object},{"a":1,"n":"_activeState","t":4,"rt":$n[4].IExitableState,"sn":"_activeState"},{"a":1,"n":"_states","t":4,"rt":$n[7].Dictionary$2(System.Type,CodeBase.Infrastructure.StateMachine.IExitableState),"sn":"_states","ro":true}]}; }, $n);
    /*CodeBase.Infrastructure.StateMachine.GameStateMachine end.*/

    /*CodeBase.Infrastructure.StateMachine.BootstrapState start.*/
    $m("CodeBase.Infrastructure.StateMachine.BootstrapState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].GameStateMachine,$n[3].ICoroutineRunner,$n[3].SceneLoader,$n[6].AllServices],"pi":[{"n":"gameStateMachine","pt":$n[4].GameStateMachine,"ps":0},{"n":"runner","pt":$n[3].ICoroutineRunner,"ps":1},{"n":"sceneLoader","pt":$n[3].SceneLoader,"ps":2},{"n":"services","pt":$n[6].AllServices,"ps":3}],"sn":"ctor"},{"a":2,"n":"Enter","t":8,"sn":"Enter","rt":$n[0].Void},{"a":1,"n":"EnterLoadLevel","t":8,"sn":"EnterLoadLevel","rt":$n[0].Void},{"a":2,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":1,"n":"InputService","is":true,"t":8,"sn":"InputService","rt":$n[8].IInputService},{"a":1,"n":"RegisterServices","t":8,"sn":"RegisterServices","rt":$n[0].Void},{"a":1,"n":"Bootstrap","is":true,"t":4,"rt":$n[0].String,"sn":"Bootstrap"},{"a":1,"n":"Main","is":true,"t":4,"rt":$n[0].String,"sn":"Main"},{"a":1,"n":"_runner","t":4,"rt":$n[3].ICoroutineRunner,"sn":"_runner","ro":true},{"a":1,"n":"_sceneLoader","t":4,"rt":$n[3].SceneLoader,"sn":"_sceneLoader","ro":true},{"a":1,"n":"_services","t":4,"rt":$n[6].AllServices,"sn":"_services","ro":true},{"a":1,"n":"_stateMachine","t":4,"rt":$n[4].GameStateMachine,"sn":"_stateMachine","ro":true}]}; }, $n);
    /*CodeBase.Infrastructure.StateMachine.BootstrapState end.*/

    /*CodeBase.Infrastructure.StateMachine.GameLoopState start.*/
    $m("CodeBase.Infrastructure.StateMachine.GameLoopState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].IPlayerHelpService],"pi":[{"n":"service","pt":$n[9].IPlayerHelpService,"ps":0}],"sn":"ctor"},{"a":2,"n":"Enter","t":8,"sn":"Enter","rt":$n[0].Void},{"a":2,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":1,"n":"_helpService","t":4,"rt":$n[9].IPlayerHelpService,"sn":"_helpService","ro":true}]}; }, $n);
    /*CodeBase.Infrastructure.StateMachine.GameLoopState end.*/

    /*CodeBase.Infrastructure.StateMachine.IExitableState start.*/
    $m("CodeBase.Infrastructure.StateMachine.IExitableState", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Exit","t":8,"sn":"CodeBase$Infrastructure$StateMachine$IExitableState$Exit","rt":$n[0].Void}]}; }, $n);
    /*CodeBase.Infrastructure.StateMachine.IExitableState end.*/

    /*CodeBase.Infrastructure.StateMachine.IState start.*/
    $m("CodeBase.Infrastructure.StateMachine.IState", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Enter","t":8,"sn":"CodeBase$Infrastructure$StateMachine$IState$Enter","rt":$n[0].Void}]}; }, $n);
    /*CodeBase.Infrastructure.StateMachine.IState end.*/

    /*CodeBase.Infrastructure.StateMachine.IPayloadedState$1 start.*/
    $m("CodeBase.Infrastructure.StateMachine.IPayloadedState$1", function (TPayload) { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Enter","t":8,"pi":[{"n":"payload","pt":TPayload,"ps":0}],"sn":"CodeBase$Infrastructure$StateMachine$IPayloadedState$1$" + Bridge.getTypeAlias(TPayload) + "$Enter","rt":$n[0].Void,"p":[TPayload]}]}; }, $n);
    /*CodeBase.Infrastructure.StateMachine.IPayloadedState$1 end.*/

    /*CodeBase.Infrastructure.StateMachine.LoadLevelState start.*/
    $m("CodeBase.Infrastructure.StateMachine.LoadLevelState", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].GameStateMachine,$n[3].SceneLoader,$n[10].IHudFactory],"pi":[{"n":"stateMachine","pt":$n[4].GameStateMachine,"ps":0},{"n":"sceneLoader","pt":$n[3].SceneLoader,"ps":1},{"n":"gameFactory","pt":$n[10].IHudFactory,"ps":2}],"sn":"ctor"},{"a":2,"n":"Enter","t":8,"pi":[{"n":"sceneName","pt":$n[0].String,"ps":0}],"sn":"Enter","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"Exit","t":8,"sn":"Exit","rt":$n[0].Void},{"a":1,"n":"OnLoaded","t":8,"sn":"OnLoaded","rt":$n[0].Void},{"a":1,"n":"_hudGameFactory","t":4,"rt":$n[10].IHudFactory,"sn":"_hudGameFactory","ro":true},{"a":1,"n":"_sceneLoader","t":4,"rt":$n[3].SceneLoader,"sn":"_sceneLoader","ro":true},{"a":1,"n":"_stateMachine","t":4,"rt":$n[4].GameStateMachine,"sn":"_stateMachine","ro":true}]}; }, $n);
    /*CodeBase.Infrastructure.StateMachine.LoadLevelState end.*/

    /*CodeBase.Infrastructure.Services.AllServices start.*/
    $m("CodeBase.Infrastructure.Services.AllServices", function () { return {"nested":[$n[6].AllServices.Implementation$1],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"RegisterSingle","t":8,"pi":[{"n":"implementation","pt":System.Object,"ps":0}],"tpc":1,"tprm":["TService"],"sn":"RegisterSingle","rt":$n[0].Void,"p":[System.Object]},{"a":2,"n":"Single","t":8,"tpc":1,"tprm":["TService"],"sn":"Single","rt":System.Object},{"a":2,"n":"Container","is":true,"t":16,"rt":$n[6].AllServices,"g":{"a":2,"n":"get_Container","t":8,"rt":$n[6].AllServices,"fg":"Container","is":true},"fn":"Container"},{"a":1,"n":"_instance","is":true,"t":4,"rt":$n[6].AllServices,"sn":"_instance"}]}; }, $n);
    /*CodeBase.Infrastructure.Services.AllServices end.*/

    /*CodeBase.Infrastructure.Services.AllServices+Implementation$1 start.*/
    $m("CodeBase.Infrastructure.Services.AllServices.Implementation$1", function (TService) { return {"td":$n[6].AllServices,"att":1048963,"a":1,"s":true,"m":[{"a":2,"n":"ServiceInstance","is":true,"t":4,"rt":TService,"sn":"ServiceInstance"}]}; }, $n);
    /*CodeBase.Infrastructure.Services.AllServices+Implementation$1 end.*/

    /*CodeBase.Infrastructure.Services.IService start.*/
    $m("CodeBase.Infrastructure.Services.IService", function () { return {"att":1048737,"a":2}; }, $n);
    /*CodeBase.Infrastructure.Services.IService end.*/

    /*CodeBase.Infrastructure.Factories.HudFactory start.*/
    $m("CodeBase.Infrastructure.Factories.HudFactory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[11].IAssets,$n[12].IUIService],"pi":[{"n":"assets","pt":$n[11].IAssets,"ps":0},{"n":"service","pt":$n[12].IUIService,"ps":1}],"sn":"ctor"},{"a":1,"n":"CreateHud","t":8,"pi":[{"n":"path","pt":$n[0].String,"ps":0}],"sn":"CreateHud","rt":$n[2].GameObject,"p":[$n[0].String]},{"a":2,"n":"CreateSceneHuds","t":8,"sn":"CreateSceneHuds","rt":$n[0].Void},{"a":2,"n":"EndGameHud","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_EndGameHud","t":8,"rt":$n[2].GameObject,"fg":"EndGameHud"},"s":{"a":1,"n":"set_EndGameHud","t":8,"p":[$n[2].GameObject],"rt":$n[0].Void,"fs":"EndGameHud"},"fn":"EndGameHud"},{"a":2,"n":"PlayerHelpHud","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_PlayerHelpHud","t":8,"rt":$n[2].GameObject,"fg":"PlayerHelpHud"},"s":{"a":1,"n":"set_PlayerHelpHud","t":8,"p":[$n[2].GameObject],"rt":$n[0].Void,"fs":"PlayerHelpHud"},"fn":"PlayerHelpHud"},{"a":1,"n":"_assets","t":4,"rt":$n[11].IAssets,"sn":"_assets","ro":true},{"a":1,"n":"_hudPaths","t":4,"rt":$n[7].List$1(System.String),"sn":"_hudPaths"},{"a":1,"n":"_uiService","t":4,"rt":$n[12].IUIService,"sn":"_uiService","ro":true},{"a":1,"backing":true,"n":"<EndGameHud>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"EndGameHud"},{"a":1,"backing":true,"n":"<PlayerHelpHud>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"PlayerHelpHud"}]}; }, $n);
    /*CodeBase.Infrastructure.Factories.HudFactory end.*/

    /*CodeBase.Infrastructure.Factories.IHudFactory start.*/
    $m("CodeBase.Infrastructure.Factories.IHudFactory", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"CreateSceneHuds","t":8,"sn":"CodeBase$Infrastructure$Factories$IHudFactory$CreateSceneHuds","rt":$n[0].Void},{"ab":true,"a":2,"n":"EndGameHud","t":16,"rt":$n[2].GameObject,"g":{"ab":true,"a":2,"n":"get_EndGameHud","t":8,"rt":$n[2].GameObject,"fg":"CodeBase$Infrastructure$Factories$IHudFactory$EndGameHud"},"fn":"CodeBase$Infrastructure$Factories$IHudFactory$EndGameHud"},{"ab":true,"a":2,"n":"PlayerHelpHud","t":16,"rt":$n[2].GameObject,"g":{"ab":true,"a":2,"n":"get_PlayerHelpHud","t":8,"rt":$n[2].GameObject,"fg":"CodeBase$Infrastructure$Factories$IHudFactory$PlayerHelpHud"},"fn":"CodeBase$Infrastructure$Factories$IHudFactory$PlayerHelpHud"},{"a":1,"backing":true,"n":"<EndGameHud>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"CodeBase$Infrastructure$Factories$IHudFactory$EndGameHud"},{"a":1,"backing":true,"n":"<PlayerHelpHud>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"CodeBase$Infrastructure$Factories$IHudFactory$PlayerHelpHud"}]}; }, $n);
    /*CodeBase.Infrastructure.Factories.IHudFactory end.*/

    /*CodeBase.Infrastructure.AssetManagement.AssetPath start.*/
    $m("CodeBase.Infrastructure.AssetManagement.AssetPath", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"EndGameHud","is":true,"t":4,"rt":$n[0].String,"sn":"EndGameHud"},{"a":2,"n":"GameHud","is":true,"t":4,"rt":$n[0].String,"sn":"GameHud"},{"a":2,"n":"PlayerHelpHud","is":true,"t":4,"rt":$n[0].String,"sn":"PlayerHelpHud"}]}; }, $n);
    /*CodeBase.Infrastructure.AssetManagement.AssetPath end.*/

    /*CodeBase.Infrastructure.AssetManagement.AssetProvider start.*/
    $m("CodeBase.Infrastructure.AssetManagement.AssetProvider", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Instantiate","t":8,"pi":[{"n":"path","pt":$n[0].String,"ps":0}],"sn":"Instantiate","rt":$n[2].GameObject,"p":[$n[0].String]},{"a":2,"n":"Instantiate","t":8,"pi":[{"n":"path","pt":$n[0].String,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1}],"sn":"Instantiate$1","rt":$n[2].GameObject,"p":[$n[0].String,$n[2].Vector3]}]}; }, $n);
    /*CodeBase.Infrastructure.AssetManagement.AssetProvider end.*/

    /*CodeBase.Infrastructure.AssetManagement.IAssets start.*/
    $m("CodeBase.Infrastructure.AssetManagement.IAssets", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Instantiate","t":8,"pi":[{"n":"path","pt":$n[0].String,"ps":0}],"sn":"CodeBase$Infrastructure$AssetManagement$IAssets$Instantiate","rt":$n[2].GameObject,"p":[$n[0].String]},{"ab":true,"a":2,"n":"Instantiate","t":8,"pi":[{"n":"path","pt":$n[0].String,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1}],"sn":"CodeBase$Infrastructure$AssetManagement$IAssets$Instantiate$1","rt":$n[2].GameObject,"p":[$n[0].String,$n[2].Vector3]}]}; }, $n);
    /*CodeBase.Infrastructure.AssetManagement.IAssets end.*/

    /*CodeBase.HelpSystem.HelpAnimationSystem start.*/
    $m("CodeBase.HelpSystem.HelpAnimationSystem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FadeInAndMoveToMergeableCoroutine","t":8,"sn":"FadeInAndMoveToMergeableCoroutine","rt":$n[5].IEnumerator},{"a":1,"n":"FadeOutAndMoveHandAwayCoroutine","t":8,"sn":"FadeOutAndMoveHandAwayCoroutine","rt":$n[5].IEnumerator},{"a":1,"n":"MoveTogetherToTargetCoroutine","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0}],"sn":"MoveTogetherToTargetCoroutine","rt":$n[5].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"ResetToStart","t":8,"sn":"ResetToStart","rt":$n[0].Void},{"a":1,"n":"SetAlpha","t":8,"pi":[{"n":"image","pt":$n[1].Image,"ps":0},{"n":"alpha","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[1].Image,$n[0].Single]},{"a":2,"n":"ShowAnimation","t":8,"sn":"ShowAnimation","rt":$n[0].Void},{"a":1,"n":"ShowAnimationCoroutine","t":8,"sn":"ShowAnimationCoroutine","rt":$n[5].IEnumerator},{"a":2,"n":"StopAnimation","t":8,"sn":"StopAnimation","rt":$n[0].Void},{"a":1,"n":"DefaultAlpha","is":true,"t":4,"rt":$n[0].Single,"sn":"DefaultAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_animationCoroutine","t":4,"rt":$n[2].Coroutine,"sn":"_animationCoroutine"},{"at":[new UnityEngine.HeaderAttribute("Animation Durations"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animationDuration","t":4,"rt":$n[0].Single,"sn":"_animationDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fadeDuration","t":4,"rt":$n[0].Single,"sn":"_fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_finalPositionHand","t":4,"rt":$n[2].Transform,"sn":"_finalPositionHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_finalPositionMergeable","t":4,"rt":$n[2].Transform,"sn":"_finalPositionMergeable"},{"a":1,"n":"_handImage","t":4,"rt":$n[1].Image,"sn":"_handImage"},{"a":1,"n":"_handStartPos","t":4,"rt":$n[2].Vector3,"sn":"_handStartPos"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_helpHand","t":4,"rt":$n[2].Transform,"sn":"_helpHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mergeable","t":4,"rt":$n[2].Transform,"sn":"_mergeable"},{"a":1,"n":"_mergeableImage","t":4,"rt":$n[1].Image,"sn":"_mergeableImage"},{"a":1,"n":"_mergeableStartPos","t":4,"rt":$n[2].Vector3,"sn":"_mergeableStartPos"}]}; }, $n);
    /*CodeBase.HelpSystem.HelpAnimationSystem end.*/

    /*CodeBase.HelpSystem.IPlayerHelpService start.*/
    $m("CodeBase.HelpSystem.IPlayerHelpService", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"StartMonitoring","t":8,"sn":"CodeBase$HelpSystem$IPlayerHelpService$StartMonitoring","rt":$n[0].Void},{"ab":true,"a":2,"n":"StopMonitoring","t":8,"sn":"CodeBase$HelpSystem$IPlayerHelpService$StopMonitoring","rt":$n[0].Void}]}; }, $n);
    /*CodeBase.HelpSystem.IPlayerHelpService end.*/

    /*CodeBase.HelpSystem.PlayerHelpService start.*/
    $m("CodeBase.HelpSystem.PlayerHelpService", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].ICoroutineRunner,$n[10].IHudFactory,$n[8].IInputService],"pi":[{"n":"runner","pt":$n[3].ICoroutineRunner,"ps":0},{"n":"factory","pt":$n[10].IHudFactory,"ps":1},{"n":"inputService","pt":$n[8].IInputService,"ps":2}],"sn":"ctor"},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":1,"n":"GetFactoryHuds","t":8,"sn":"GetFactoryHuds","rt":$n[0].Void},{"a":1,"n":"MonitorPlayerIdleCoroutine","t":8,"sn":"MonitorPlayerIdleCoroutine","rt":$n[5].IEnumerator},{"a":1,"n":"ResetAndCleanup","t":8,"sn":"ResetAndCleanup","rt":$n[0].Void},{"a":2,"n":"StartMonitoring","t":8,"sn":"StartMonitoring","rt":$n[0].Void},{"a":2,"n":"StopMonitoring","t":8,"sn":"StopMonitoring","rt":$n[0].Void},{"a":1,"n":"IdleThreshold","is":true,"t":4,"rt":$n[0].Single,"sn":"IdleThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_coroutineRunner","t":4,"rt":$n[3].ICoroutineRunner,"sn":"_coroutineRunner"},{"a":1,"n":"_endGameHud","t":4,"rt":$n[2].GameObject,"sn":"_endGameHud"},{"a":1,"n":"_factory","t":4,"rt":$n[10].IHudFactory,"sn":"_factory","ro":true},{"a":1,"n":"_helpSystem","t":4,"rt":$n[9].HelpAnimationSystem,"sn":"_helpSystem"},{"a":1,"n":"_inputService","t":4,"rt":$n[8].IInputService,"sn":"_inputService","ro":true},{"a":1,"n":"_isMonitoring","t":4,"rt":$n[0].Boolean,"sn":"_isMonitoring","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_monitoringCoroutine","t":4,"rt":$n[2].Coroutine,"sn":"_monitoringCoroutine"}]}; }, $n);
    /*CodeBase.HelpSystem.PlayerHelpService end.*/

    }});
