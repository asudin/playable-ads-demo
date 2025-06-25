using CodeBase.Infrastructure.Services;

namespace CodeBase.HelpSystem
{
    public interface IPlayerHelpService : IService
    {
        void StartMonitoring();
        void StopMonitoring();
    }
}
