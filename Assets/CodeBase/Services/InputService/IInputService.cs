using CodeBase.Infrastructure.Services;

namespace CodeBase.Services
{
    public interface IInputService : IService
    {
        bool IsPlayerInputAllowed { get; }
    }
}
