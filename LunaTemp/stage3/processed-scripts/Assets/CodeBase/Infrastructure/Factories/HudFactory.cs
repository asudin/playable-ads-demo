using CodeBase.Infrastructure.AssetManagement;
using CodeBase.Services.UnityUIService;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace CodeBase.Infrastructure.Factories
{
    public class HudFactory : IHudFactory
    {
        private readonly IAssets _assets;
        private readonly IUIService _uiService;
        private List<string> _hudPaths = new List<string>
        {
            AssetPath.GameHud,
            AssetPath.EndGameHud,
            AssetPath.PlayerHelpHud
        };

        public GameObject EndGameHud { get; private set; }
        public GameObject PlayerHelpHud { get; private set; }

        public HudFactory(IAssets assets, IUIService service)
        {
            _assets = assets;
            _uiService = service;
        }

        private GameObject CreateHud(string path)
        {
            return _assets.Instantiate(path);
        }

        public void CreateSceneHuds()
        {
            _uiService.Initialize();

            var parentPoint = _uiService.ParentScreenPoint;

            foreach (var path in _hudPaths)
            {
                var hud = CreateHud(path);

                _uiService.SetScreenParent(hud, parentPoint);

                if (path == AssetPath.EndGameHud)
                {
                    EndGameHud = hud;
                    hud.gameObject.SetActive(false);
                }

                if (path == AssetPath.PlayerHelpHud)
                {
                    PlayerHelpHud = hud;
                }

                var canvasRectTransform = hud.GetComponentInChildren<Canvas>().GetComponent<RectTransform>();

                _uiService.SetStretch(canvasRectTransform);
                LayoutRebuilder.ForceRebuildLayoutImmediate(canvasRectTransform);
            }
        }
    }
}
