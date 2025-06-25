using CodeBase.HelpSystem;

namespace CodeBase.Infrastructure.StateMachine
{
    public class GameLoopState : IState
    {
        private readonly IPlayerHelpService _helpService;

        public GameLoopState(IPlayerHelpService service) 
        {
            _helpService = service;
        }

        public void Enter() =>
            _helpService.StartMonitoring();

        public void Exit() =>
            _helpService.StartMonitoring();
    }
}
