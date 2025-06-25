using UnityEngine;
using UnityEngine.UI;

namespace CodeBase.Block
{
    public class FinalBlock : MonoBehaviour
    {
        [SerializeField] private Image _preHoveredImage;
        [SerializeField] private Image _postHoveredImage;

        private BoxCollider2D _collider;

        private void Start()
        {
            SetImageVisibility(_preHoveredImage, true);
            SetImageVisibility(_postHoveredImage, false);
        }

        private void OnCollisionEnter2D(Collision2D collision)
        {
            SetImageVisibility(_preHoveredImage, false);
            SetImageVisibility(_postHoveredImage, true);
        }

        private void SetImageVisibility(Image image, bool isVisible) =>
            image.gameObject.SetActive(isVisible);
    }
}
