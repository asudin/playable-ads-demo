using CodeBase.Infrastructure.Factories;
using System;
using UnityEngine;

namespace CodeBase.Infrastructure.StateMachine
{
    public class LoadLevelState : IPayloadedState<string>
    {
        private readonly GameStateMachine _stateMachine;
        private readonly SceneLoader _sceneLoader;
        private const string CanvasParentPointTag = "CanvasParentPoint";
        private const string HelpAnimationParentPointTag = "HelpAnimationParentPoint";
        private readonly IHudFactory _hudGameFactory;

        public LoadLevelState(GameStateMachine stateMachine, SceneLoader sceneLoader, IHudFactory gameFactory)
        {
            _stateMachine = stateMachine;
            _sceneLoader = sceneLoader;
            _hudGameFactory = gameFactory;
        }

        private void OnLoaded()
        {
            var canvasParent = GameObject.FindWithTag(CanvasParentPointTag);
            var helpAnimationParent = GameObject.FindWithTag(HelpAnimationParentPointTag);

            _hudGameFactory.CreateSceneHuds(canvasParent.transform, helpAnimationParent.transform);

            _stateMachine.Enter<GameLoopState>();
        }

        public void Exit()
        {
            Console.WriteLine("Load State Exited");
        }

        public void Enter(string sceneName)
        {
            _sceneLoader.Load(sceneName, OnLoaded);
        }
    }
}
