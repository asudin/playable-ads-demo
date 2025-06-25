using CodeBase.UI;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

namespace CodeBase.HelpSystem
{
    public class HelpAnimationSystem : MonoBehaviour, IAnimatable
    {
        [Header("Animation Durations")]
        [SerializeField] private float _animationDuration = 2.8f;
        [SerializeField] private float _fadeDuration = 0.4f;

        [Header("References")]
        [SerializeField] private Transform _helpHand;
        [SerializeField] private Transform _mergeable;
        [SerializeField] private Transform _finalPositionMergeable;
        [SerializeField] private Transform _finalPositionHand;

        private Image _handImage;
        private Image _mergeableImage;
        private Vector3 _handStartPos;
        private Vector3 _mergeableStartPos;
        private Coroutine _animationCoroutine;
        private const float DefaultAlpha = 1f;

        private void OnDisable()
        {
            StopAnimation();
        }

        private void OnDestroy()
        {
            StopAnimation();
        }

        private void Awake()
        {
            _handImage = _helpHand.GetComponentInChildren<Image>();
            _mergeableImage = _mergeable.GetComponent<Image>();

            SetAlpha(_handImage, 0f);
        }

        private IEnumerator FadeInAndMoveToMergeableCoroutine()
        {
            float elapsed = 0f;

            while (elapsed < _fadeDuration)
            {
                elapsed += Time.deltaTime;
                float time = Mathf.Clamp01(elapsed / _fadeDuration);

                _helpHand.position = Vector3.Lerp(_handStartPos, _mergeableStartPos, time);
                SetAlpha(_handImage, time);
                SetAlpha(_mergeableImage, DefaultAlpha);

                yield return null;
            }

            _helpHand.position = _mergeableStartPos;
            SetAlpha(_handImage, DefaultAlpha);
            SetAlpha(_mergeableImage, DefaultAlpha);
        }

        private IEnumerator MoveTogetherToTargetCoroutine(float duration)
        {
            float animationDuration = duration - _fadeDuration;
            float elapsed = 0f;

            Vector3 finalTarget = _finalPositionMergeable.position;

            while (elapsed < animationDuration)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.Clamp01(elapsed / animationDuration);

                _helpHand.position = Vector3.Lerp(_mergeableStartPos, finalTarget, t);
                _mergeable.position = Vector3.Lerp(_mergeableStartPos, finalTarget, t);

                yield return null; 
            }

            _helpHand.position = finalTarget;
            _mergeable.position = finalTarget;
        }

        private IEnumerator FadeOutAndMoveHandAwayCoroutine()
        {
            float elapsed = 0f;
            Vector3 handStart = _helpHand.position;
            Vector3 handTarget = _finalPositionHand.position;

            while (elapsed < _fadeDuration)
            {
                elapsed += Time.deltaTime;
                float time = Mathf.Clamp01(elapsed / _fadeDuration);

                _helpHand.position = Vector3.Lerp(handStart, handTarget, time);
                SetAlpha(_handImage, DefaultAlpha - time);
                SetAlpha(_mergeableImage, DefaultAlpha - time);

                yield return null;
            }

            _helpHand.position = handTarget;
            SetAlpha(_handImage, 0f);
            SetAlpha(_mergeableImage, 0f);
        }

        private IEnumerator ShowAnimationCoroutine()
        {
            _handStartPos = _helpHand.position;
            _mergeableStartPos = _mergeable.position;

            while (true) 
            {
                yield return StartCoroutine(FadeInAndMoveToMergeableCoroutine());

                yield return StartCoroutine(MoveTogetherToTargetCoroutine(_animationDuration));

                yield return StartCoroutine(FadeOutAndMoveHandAwayCoroutine());

                ResetToStart();
            }
        }

        private void ResetToStart()
        {
            if (_helpHand == null || _mergeable == null)
                return;

            _helpHand.position = _handStartPos;
            _mergeable.position = _mergeableStartPos;

            SetAlpha(_handImage, 0f);
            SetAlpha(_mergeableImage, 0f);
        }

        private void SetAlpha(Image image, float alpha)
        {
            if (image == null)
                return;

            var color = image.color;
            color.a = alpha;
            image.color = color;
        }

        public void ShowAnimation()
        {
            if (_animationCoroutine != null)
                StopAnimation();

            _animationCoroutine = StartCoroutine(ShowAnimationCoroutine());
        }

        public void StopAnimation()
        {
            if (_animationCoroutine != null)
            {
                StopCoroutine(_animationCoroutine);
                _animationCoroutine = null;
            }

            ResetToStart();
        }
    }
}