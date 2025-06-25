using UnityEngine;

namespace CodeBase.Infrastructure.AssetManagement
{
    public class AssetProvider : IAssets
    {
        public GameObject Instantiate(string path)
        {
            var prefab = Resources.Load<GameObject>(path);

            return prefab != null ? Object.Instantiate(prefab) : null;
        }

        public GameObject Instantiate(string path, Vector3 position)
        {
            var prefab = Resources.Load<GameObject>(path);

            return prefab != null ? Object.Instantiate(prefab, position, Quaternion.identity) : null;
        }
    }
}
