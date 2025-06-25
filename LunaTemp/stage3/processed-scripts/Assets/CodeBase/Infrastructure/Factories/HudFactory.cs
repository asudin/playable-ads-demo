using CodeBase.Infrastructure.AssetManagement;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace CodeBase.Infrastructure.Factories
{
    public class HudFactory : IHudFactory
    {
        private readonly IAssets _assets;
        private List<GameObject> _huds = new List<GameObject>();

        public GameObject EndGameHud { get; private set; }
        public GameObject PlayerHelpHud { get; private set; }

        public HudFactory(IAssets assets)
        {
            _assets = assets;
        }

        private void SetParent(GameObject item, Transform parent)
        {
            if (item == null)
                return;

            item.transform.SetParent(parent);
        }

        private void CreateEndGameHud(Transform parent)
        {
            EndGameHud = _assets.Instantiate(AssetPath.EndGameHud);
            SetParent(EndGameHud, parent);
            EndGameHud.gameObject.SetActive(false);
            _huds.Add(EndGameHud);
        }

        private void CreatePlayerHelpHud(Transform parent)
        {
            PlayerHelpHud = _assets.Instantiate(AssetPath.HelpAnimationHud);
            SetParent(PlayerHelpHud, parent);
            _huds.Add(PlayerHelpHud);

            SetStretch(PlayerHelpHud.GetComponent<RectTransform>());
        }

        private void SetStretch(RectTransform rectTransform)
        {
            rectTransform.offsetMax = Vector2.zero;
            rectTransform.offsetMin = Vector2.zero;
            rectTransform.anchorMin = Vector2.zero;
            rectTransform.anchorMax = Vector2.one;
            rectTransform.pivot = new Vector2(0.5f, 0.5f);
        }

        public void CreateSceneHuds(Transform canvasParent, Transform animationParent)
        {
            CreateEndGameHud(canvasParent);
            CreatePlayerHelpHud(animationParent);

            foreach (var hud in _huds)
            {
                LayoutRebuilder.ForceRebuildLayoutImmediate(hud.GetComponent<RectTransform>());
            }
        }
    }
}
