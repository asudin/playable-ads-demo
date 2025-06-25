using CodeBase.Infrastructure.Factories;
using CodeBase.Services;
using System;
using System.Threading;
using System.Threading.Tasks;
using UnityEngine;

namespace CodeBase.HelpSystem
{
    public class PlayerHelpService : IPlayerHelpService, IDisposable
    {
        private readonly IHudFactory _factory;
        private readonly IInputService _inputService;
        private HelpAnimationSystem _helpSystem;
        private GameObject _endGameHud;
        private CancellationTokenSource _cancellationTokenSource;
        private bool _isMonitoring = false;
        private const float IdleThreshold = 3f;
        private const int MinMillisWait = 1;

        public PlayerHelpService(IHudFactory factory, IInputService inputService)
        {
            _factory = factory;
            _inputService = inputService;
        }

        private async Task MonitorPlayerIdleAsync(CancellationToken cancellationToken)
        {
            float idleTime = 0f;
            bool helpAnimationStarted = false;

            GetFactoryHuds();

            if (_helpSystem == null)
                return;

            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    if (_inputService?.IsPlayerInputAllowed == false)
                    {
                        ResetAndCleanup();
                        return;
                    }

                    if (Input.anyKey || Input.GetMouseButtonDown(0) || Input.touchCount > 0)
                    {
                        if (helpAnimationStarted)
                        {
                            _helpSystem.StopAnimation();
                            helpAnimationStarted = false;
                        }
                        _endGameHud?.SetActive(true);
                        return;
                    }

                    idleTime += Time.deltaTime;

                    if (idleTime >= IdleThreshold && !helpAnimationStarted)
                    {
                        helpAnimationStarted = true;
                        _helpSystem.StartAnimation();
                    }

                    await Task.Delay(MinMillisWait);
                }
                catch (OperationCanceledException)
                {
                    break;
                }
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
            if (_isMonitoring)
                return;

            StopMonitoring();
            _cancellationTokenSource = new CancellationTokenSource();
            _isMonitoring = true;
            _ = MonitorPlayerIdleAsync(_cancellationTokenSource.Token);
        }

        public void StopMonitoring()
        {
            _isMonitoring = false;

            if (_cancellationTokenSource != null)
            {
                _cancellationTokenSource.Cancel();
                _cancellationTokenSource.Dispose();
                _cancellationTokenSource = null;
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