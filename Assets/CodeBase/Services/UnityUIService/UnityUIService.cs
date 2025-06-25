using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

namespace CodeBase.Services.UnityUIService
{
    public class UnityUIService : IUIService
    {
        private float _currentAspectRation;

        public Transform ParentScreenPoint { get; private set; }

        private Vector2 SelectResolution()
        {
            var aspectRatio = (float)Screen.width / (float)Screen.height;
            var resoulutions = new List<Vector2>()
            {
                new Vector2(1080, 610)
            };

            return resoulutions.OrderBy(res => Mathf.Abs(res.x / res.y - aspectRatio)).First();
        }

        private GameObject ConfigureLayer(string name, GameObject parentObject)
        {
            var objectLayer = new GameObject(name);
            var layerGO_rectTransform = objectLayer.AddComponent<RectTransform>();
            var aspectRatioFilter = objectLayer.AddComponent<AspectRatioFitter>();

            objectLayer.layer = 5;
            layerGO_rectTransform.SetParent(parentObject.transform, false);

            aspectRatioFilter.aspectMode = AspectRatioFitter.AspectMode.FitInParent;
            aspectRatioFilter.aspectRatio = _currentAspectRation;
            SetStretch(layerGO_rectTransform);

            return objectLayer;

        }

        private void SetCanvasSettings(GameObject rootCanvas)
        {
            var canvas = rootCanvas.GetComponent<Canvas>();

            rootCanvas.layer = 5;
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;

            var currentResolution = SelectResolution();
            var canvasScaler = rootCanvas.AddComponent<CanvasScaler>();

            canvasScaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            canvasScaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
            canvasScaler.matchWidthOrHeight = 0.5f;
            canvasScaler.referenceResolution = currentResolution;
            _currentAspectRation = currentResolution.x / currentResolution.y;
        }

        public void SetStretch(RectTransform rectTransform)
        {
            rectTransform.offsetMax = Vector2.zero;
            rectTransform.offsetMin = Vector2.zero;
            rectTransform.anchorMin = Vector2.zero;
            rectTransform.anchorMax = Vector2.one;
            rectTransform.pivot = new Vector2(0.5f, 0.5f);
        }

        public void SetScreenParent(GameObject screen, Transform parentPosition)
        {
            if (screen == null)
                return;

            screen.GetComponent<RectTransform>().SetParent(parentPosition, false);
        }

        public void Initialize()
        {
            var rootCanvas = new GameObject("[ROOTCANVAS]");

            rootCanvas.AddComponent<RectTransform>();
            rootCanvas.tag = "CanvasParentPoint";
            rootCanvas.layer = 5;

            var canvas = rootCanvas.AddComponent<Canvas>();

            SetCanvasSettings(rootCanvas);

            var rootLayer = ConfigureLayer("UIScreenLayer", rootCanvas);
            ParentScreenPoint = rootLayer.transform;
        }
    }
}
