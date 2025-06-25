using UnityEngine.EventSystems;

namespace CodeBase.Services
{
    public abstract class InputService : IInputService
    {
        public bool IsPlayerInputAllowed { get; private set; } = true;

        public void SetPlayerInputStatus(bool status)
        {
            IsPlayerInputAllowed = status;

            if (EventSystem.current != null)
            {
                EventSystem.current.enabled = status;
            }
        }
    }
}
