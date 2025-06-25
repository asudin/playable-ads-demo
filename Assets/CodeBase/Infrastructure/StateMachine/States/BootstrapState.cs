using CodeBase.HelpSystem;
using CodeBase.Infrastructure.AssetManagement;
using CodeBase.Infrastructure.Factories;
using CodeBase.Infrastructure.Services;
using CodeBase.Services;
using CodeBase.Services.UnityUIService;
using System;
using UnityEngine;

namespace CodeBase.Infrastructure.StateMachine
{
    public class BootstrapState : IState
    {
        private const string Bootstrap = "Bootstrap";
        private const string Main = "Main";

        private readonly GameStateMachine _stateMachine;
        private readonly SceneLoader _sceneLoader;
        private readonly AllServices _services;
        private readonly ICoroutineRunner _runner;

        public BootstrapState(GameStateMachine gameStateMachine, ICoroutineRunner runner, SceneLoader sceneLoader, AllServices services)
        {
            _stateMachine = gameStateMachine;
            _sceneLoader = sceneLoader;
            _services = services;
            _runner = runner;
            RegisterServices();
        }

        private void RegisterServices()
        {
            _services.RegisterSingle<IInputService>(InputService());
            _services.RegisterSingle<IAssets>(new AssetProvider());
            _services.RegisterSingle<IUIService>(new UnityUIService());
            _services.RegisterSingle<IHudFactory>(new HudFactory(_services.Single<IAssets>(), _services.Single<IUIService>()));
            _services.RegisterSingle<IPlayerHelpService>(new PlayerHelpService(_runner, _services.Single<IHudFactory>(), _services.Single<IInputService>()));
        }

        private void EnterLoadLevel()
        {
            _stateMachine.Enter<LoadLevelState, string>(Main);
        }

        private static IInputService InputService()
        {
            if (Application.isEditor)
            {
                return new StandaloneInputService();
            }
            else
            {
                return new MobileInputService();
            }
        }

        public void Exit()
        {
            Console.WriteLine("Bootstrap State Exited");
        }

        public void Enter()
        {
            _sceneLoader.Load(Bootstrap, EnterLoadLevel);
        }
    }
}
