using CodeBase.Infrastructure.Services;
using UnityEngine;

namespace CodeBase.Infrastructure.Factories
{
    public interface IHudFactory : IService
    {
        GameObject EndGameHud { get; }
        GameObject PlayerHelpHud { get; }

        void CreateSceneHuds(Transform canvasParent, Transform helpAnimationParent);
    }
}
