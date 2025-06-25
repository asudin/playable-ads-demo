namespace CodeBase.UI
{
    public class DownloadGameButton : BaseButton
    {
        protected override void OnButtonClicked()
        {
            Luna.Unity.Playable.InstallFullGame();
        }
    }
}
