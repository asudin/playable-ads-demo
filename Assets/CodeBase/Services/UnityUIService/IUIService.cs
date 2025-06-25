using CodeBase.Infrastructure.Services;
using UnityEngine;

namespace CodeBase.Services.UnityUIService
{
    public interface IUIService : IService
    {
        Transform ParentScreenPoint { get; }
        void Initialize();
        void SetStretch(RectTransform rectTransform);
        void SetScreenParent(GameObject screen, Transform parentPosition);
    }
}
