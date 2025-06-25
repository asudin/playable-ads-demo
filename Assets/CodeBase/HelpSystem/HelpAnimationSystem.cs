using CodeBase.UI;
using UnityEngine;

namespace CodeBase.HelpSystem
{
    public class HelpAnimationSystem : MonoBehaviour, IAnimatable
    {
        private void OnDisable()
        {
            StopAnimation();
        }

        private void OnDestroy()
        {
            StopAnimation();
        }


        public void StartAnimation() =>
            this.gameObject.SetActive(true);

        public void StopAnimation() =>
            this.gameObject.SetActive(false);
    }
}