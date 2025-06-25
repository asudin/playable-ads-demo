using CodeBase.Infrastructure.Services;
using CodeBase.Infrastructure.StateMachine;

namespace CodeBase.Infrastructure
{
    public class Game
    {
        public GameStateMachine StateMachine { get; private set; }

        public Game(ICoroutineRunner coroutineRunner)
        {
            StateMachine = new GameStateMachine(coroutineRunner, new SceneLoader(coroutineRunner), AllServices.Container);
        }
    }
}
