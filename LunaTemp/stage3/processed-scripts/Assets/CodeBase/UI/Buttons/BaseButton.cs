using UnityEngine;
using UnityEngine.UI;

namespace CodeBase.UI
{
    public abstract class BaseButton : MonoBehaviour
    {
        protected Button Button { get; private set; }

        private void Awake()
        {
            Button = GetComponent<Button>();
            Button.onClick.AddListener(OnButtonClicked);
        }

        protected abstract void OnButtonClicked();
    }
}
