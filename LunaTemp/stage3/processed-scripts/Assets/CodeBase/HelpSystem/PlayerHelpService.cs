using CodeBase.Infrastructure;
using CodeBase.Infrastructure.Factories;
using CodeBase.Services;
using System;
using System.Collections;
using UnityEngine;

namespace CodeBase.HelpSystem
{
    public class PlayerHelpService : IPlayerHelpService, IDisposable
    {
        private HelpAnimationSystem _helpSystem;
        private GameObject _endGameHud;
        private Coroutine _monitoringCoroutine;
        private readonly IHudFactory _factory;
        private readonly IInputService _inputService;
        private bool _isMonitoring = false;
        private const float IdleThreshold = 3f;
        private ICoroutineRunner _coroutineRunner;

        public PlayerHelpService(ICoroutineRunner runner, IHudFactory factory, IInputService inputService)
        {
            _factory = factory;
            _inputService = inputService;
            _coroutineRunner = runner;
        }

        private IEnumerator MonitorPlayerIdleCoroutine()
        {
            float idleTime = 0f;
            bool helpAnimationStarted = false;
            GetFactoryHuds();

            if (_helpSystem == null)
                yield break;

            while (_isMonitoring)
            {
                if (_inputService?.IsPlayerInputAllowed == false)
                {
                    ResetAndCleanup();
                    yield break;
                }

                if (Input.anyKey || Input.GetMouseButtonDown(0) || Input.touchCount > 0)
                {
                    if (helpAnimationStarted)
                    {
                        _helpSystem.StopAnimation();
                        helpAnimationStarted = false;
                    }
                    _endGameHud?.SetActive(true);
                    yield break;
                }

                idleTime += Time.deltaTime;

                if (idleTime >= IdleThreshold && !helpAnimationStarted)
                {
                    helpAnimationStarted = true;
                    _helpSystem.ShowAnimation(); 
                }

                yield return null;
            }

            if (helpAnimationStarted && _helpSystem != null)
            {
                _helpSystem.StopAnimation();
            }
        }

        private void GetFactoryHuds()
        {
            if (_factory == null)
                return;

            if (_factory.PlayerHelpHud != null)
            {
                _helpSystem = _factory.PlayerHelpHud.GetComponentInChildren<HelpAnimationSystem>();
            }

            _endGameHud = _factory.EndGameHud;
        }

        private void ResetAndCleanup()
        {
            if (_helpSystem != null)
            {
                _helpSystem.StopAnimation();
            }
            _isMonitoring = false;
        }

        public void StartMonitoring()
        {
            if (_isMonitoring || _coroutineRunner == null)
                return;

            StopMonitoring();
            _isMonitoring = true;
            _monitoringCoroutine = _coroutineRunner.StartCoroutine(MonitorPlayerIdleCoroutine());
        }

        public void StopMonitoring()
        {
            _isMonitoring = false;

            if (_monitoringCoroutine != null && _coroutineRunner != null)
            {
                _coroutineRunner.StopCoroutine(_monitoringCoroutine);
                _monitoringCoroutine = null;
            }

            if (_helpSystem != null)
            {
                _helpSystem.StopAnimation();
            }
        }

        public void Dispose()
        {
            StopMonitoring();
        }
    }
}