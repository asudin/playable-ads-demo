var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSpring' )
  var i477 = data
  i476.spring = i477[0]
  i476.damper = i477[1]
  i476.targetPosition = i477[2]
  return i476
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointMotor' )
  var i479 = data
  i478.m_TargetVelocity = i479[0]
  i478.m_Force = i479[1]
  i478.m_FreeSpin = i479[2]
  return i478
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointLimits' )
  var i481 = data
  i480.m_Min = i481[0]
  i480.m_Max = i481[1]
  i480.m_Bounciness = i481[2]
  i480.m_BounceMinVelocity = i481[3]
  i480.m_ContactDistance = i481[4]
  i480.minBounce = i481[5]
  i480.maxBounce = i481[6]
  return i480
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointDrive' )
  var i483 = data
  i482.m_PositionSpring = i483[0]
  i482.m_PositionDamper = i483[1]
  i482.m_MaximumForce = i483[2]
  i482.m_UseAcceleration = i483[3]
  return i482
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i485 = data
  i484.m_Spring = i485[0]
  i484.m_Damper = i485[1]
  return i484
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i487 = data
  i486.m_Limit = i487[0]
  i486.m_Bounciness = i487[1]
  i486.m_ContactDistance = i487[2]
  return i486
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i489 = data
  i488.m_ExtremumSlip = i489[0]
  i488.m_ExtremumValue = i489[1]
  i488.m_AsymptoteSlip = i489[2]
  i488.m_AsymptoteValue = i489[3]
  i488.m_Stiffness = i489[4]
  return i488
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i491 = data
  i490.m_LowerAngle = i491[0]
  i490.m_UpperAngle = i491[1]
  return i490
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i493 = data
  i492.m_MotorSpeed = i493[0]
  i492.m_MaximumMotorTorque = i493[1]
  return i492
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i495 = data
  i494.m_DampingRatio = i495[0]
  i494.m_Frequency = i495[1]
  i494.m_Angle = i495[2]
  return i494
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i497 = data
  i496.m_LowerTranslation = i497[0]
  i496.m_UpperTranslation = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i499 = data
  i498.name = i499[0]
  i498.index = i499[1]
  i498.startup = !!i499[2]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i501 = data
  i500.position = new pc.Vec3( i501[0], i501[1], i501[2] )
  i500.scale = new pc.Vec3( i501[3], i501[4], i501[5] )
  i500.rotation = new pc.Quat(i501[6], i501[7], i501[8], i501[9])
  return i500
}

Deserializers["CodeBase.Infrastructure.GameBootstrapper"] = function (request, data, root) {
  var i502 = root || request.c( 'CodeBase.Infrastructure.GameBootstrapper' )
  var i503 = data
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i505 = data
  i504.name = i505[0]
  i504.tagId = i505[1]
  i504.enabled = !!i505[2]
  i504.isStatic = !!i505[3]
  i504.layer = i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i507 = data
  i506.ambientIntensity = i507[0]
  i506.reflectionIntensity = i507[1]
  i506.ambientMode = i507[2]
  i506.ambientLight = new pc.Color(i507[3], i507[4], i507[5], i507[6])
  i506.ambientSkyColor = new pc.Color(i507[7], i507[8], i507[9], i507[10])
  i506.ambientGroundColor = new pc.Color(i507[11], i507[12], i507[13], i507[14])
  i506.ambientEquatorColor = new pc.Color(i507[15], i507[16], i507[17], i507[18])
  i506.fogColor = new pc.Color(i507[19], i507[20], i507[21], i507[22])
  i506.fogEndDistance = i507[23]
  i506.fogStartDistance = i507[24]
  i506.fogDensity = i507[25]
  i506.fog = !!i507[26]
  request.r(i507[27], i507[28], 0, i506, 'skybox')
  i506.fogMode = i507[29]
  var i509 = i507[30]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i509[i + 0]) );
  }
  i506.lightmaps = i508
  i506.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i507[31], i506.lightProbes)
  i506.lightmapsMode = i507[32]
  i506.mixedBakeMode = i507[33]
  i506.environmentLightingMode = i507[34]
  i506.ambientProbe = new pc.SphericalHarmonicsL2(i507[35])
  i506.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i507[36])
  i506.useReferenceAmbientProbe = !!i507[37]
  request.r(i507[38], i507[39], 0, i506, 'customReflection')
  request.r(i507[40], i507[41], 0, i506, 'defaultReflection')
  i506.defaultReflectionMode = i507[42]
  i506.defaultReflectionResolution = i507[43]
  i506.sunLightObjectId = i507[44]
  i506.pixelLightCount = i507[45]
  i506.defaultReflectionHDR = !!i507[46]
  i506.hasLightDataAsset = !!i507[47]
  i506.hasManualGenerate = !!i507[48]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'lightmapColor')
  request.r(i513[2], i513[3], 0, i512, 'lightmapDirection')
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i514 = root || new UnityEngine.LightProbes()
  var i515 = data
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i523 = data
  i522.enabled = !!i523[0]
  i522.aspect = i523[1]
  i522.orthographic = !!i523[2]
  i522.orthographicSize = i523[3]
  i522.backgroundColor = new pc.Color(i523[4], i523[5], i523[6], i523[7])
  i522.nearClipPlane = i523[8]
  i522.farClipPlane = i523[9]
  i522.fieldOfView = i523[10]
  i522.depth = i523[11]
  i522.clearFlags = i523[12]
  i522.cullingMask = i523[13]
  i522.rect = i523[14]
  request.r(i523[15], i523[16], 0, i522, 'targetTexture')
  i522.usePhysicalProperties = !!i523[17]
  i522.focalLength = i523[18]
  i522.sensorSize = new pc.Vec2( i523[19], i523[20] )
  i522.lensShift = new pc.Vec2( i523[21], i523[22] )
  i522.gateFit = i523[23]
  i522.commandBufferCount = i523[24]
  i522.cameraType = i523[25]
  return i522
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i525 = data
  i524.m_RenderShadows = !!i525[0]
  i524.m_RequiresDepthTextureOption = i525[1]
  i524.m_RequiresOpaqueTextureOption = i525[2]
  i524.m_CameraType = i525[3]
  var i527 = i525[4]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 1, i526, '')
  }
  i524.m_Cameras = i526
  i524.m_RendererIndex = i525[5]
  i524.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i525[6] )
  request.r(i525[7], i525[8], 0, i524, 'm_VolumeTrigger')
  i524.m_VolumeFrameworkUpdateModeOption = i525[9]
  i524.m_RenderPostProcessing = !!i525[10]
  i524.m_Antialiasing = i525[11]
  i524.m_AntialiasingQuality = i525[12]
  i524.m_StopNaN = !!i525[13]
  i524.m_Dithering = !!i525[14]
  i524.m_ClearDepth = !!i525[15]
  i524.m_AllowXRRendering = !!i525[16]
  i524.m_AllowHDROutput = !!i525[17]
  i524.m_UseScreenCoordOverride = !!i525[18]
  i524.m_ScreenSizeOverride = new pc.Vec4( i525[19], i525[20], i525[21], i525[22] )
  i524.m_ScreenCoordScaleBias = new pc.Vec4( i525[23], i525[24], i525[25], i525[26] )
  i524.m_RequiresDepthTexture = !!i525[27]
  i524.m_RequiresColorTexture = !!i525[28]
  i524.m_Version = i525[29]
  i524.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i525[30], i524.m_TaaSettings)
  return i524
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i531 = data
  i530.m_Quality = i531[0]
  i530.m_FrameInfluence = i531[1]
  i530.m_JitterScale = i531[2]
  i530.m_MipBias = i531[3]
  i530.m_VarianceClampScale = i531[4]
  i530.m_ContrastAdaptiveSharpening = i531[5]
  return i530
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'm_FirstSelected')
  i532.m_sendNavigationEvents = !!i533[2]
  i532.m_DragThreshold = i533[3]
  return i532
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i535 = data
  i534.m_HorizontalAxis = i535[0]
  i534.m_VerticalAxis = i535[1]
  i534.m_SubmitButton = i535[2]
  i534.m_CancelButton = i535[3]
  i534.m_InputActionsPerSecond = i535[4]
  i534.m_RepeatDelay = i535[5]
  i534.m_ForceModuleActive = !!i535[6]
  i534.m_SendPointerHoverToParent = !!i535[7]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i536 = root || new pc.UnityMaterial()
  var i537 = data
  i536.name = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'shader')
  i536.renderQueue = i537[3]
  i536.enableInstancing = !!i537[4]
  var i539 = i537[5]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i539[i + 0]) );
  }
  i536.floatParameters = i538
  var i541 = i537[6]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i541[i + 0]) );
  }
  i536.colorParameters = i540
  var i543 = i537[7]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i543[i + 0]) );
  }
  i536.vectorParameters = i542
  var i545 = i537[8]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i545[i + 0]) );
  }
  i536.textureParameters = i544
  var i547 = i537[9]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i547[i + 0]) );
  }
  i536.materialFlags = i546
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i551 = data
  i550.name = i551[0]
  i550.value = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = new pc.Color(i555[1], i555[2], i555[3], i555[4])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Vec4( i559[1], i559[2], i559[3], i559[4] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'value')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i567 = data
  i566.name = i567[0]
  i566.enabled = !!i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i569 = data
  i568.pivot = new pc.Vec2( i569[0], i569[1] )
  i568.anchorMin = new pc.Vec2( i569[2], i569[3] )
  i568.anchorMax = new pc.Vec2( i569[4], i569[5] )
  i568.sizeDelta = new pc.Vec2( i569[6], i569[7] )
  i568.anchoredPosition3D = new pc.Vec3( i569[8], i569[9], i569[10] )
  i568.rotation = new pc.Quat(i569[11], i569[12], i569[13], i569[14])
  i568.scale = new pc.Vec3( i569[15], i569[16], i569[17] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i571 = data
  i570.cullTransparentMesh = !!i571[0]
  return i570
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.Image' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'm_Sprite')
  i572.m_Type = i573[2]
  i572.m_PreserveAspect = !!i573[3]
  i572.m_FillCenter = !!i573[4]
  i572.m_FillMethod = i573[5]
  i572.m_FillAmount = i573[6]
  i572.m_FillClockwise = !!i573[7]
  i572.m_FillOrigin = i573[8]
  i572.m_UseSpriteMesh = !!i573[9]
  i572.m_PixelsPerUnitMultiplier = i573[10]
  request.r(i573[11], i573[12], 0, i572, 'm_Material')
  i572.m_Maskable = !!i573[13]
  i572.m_Color = new pc.Color(i573[14], i573[15], i573[16], i573[17])
  i572.m_RaycastTarget = !!i573[18]
  i572.m_RaycastPadding = new pc.Vec4( i573[19], i573[20], i573[21], i573[22] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i575 = data
  i574.name = i575[0]
  i574.width = i575[1]
  i574.height = i575[2]
  i574.mipmapCount = i575[3]
  i574.anisoLevel = i575[4]
  i574.filterMode = i575[5]
  i574.hdr = !!i575[6]
  i574.format = i575[7]
  i574.wrapMode = i575[8]
  i574.alphaIsTransparency = !!i575[9]
  i574.alphaSource = i575[10]
  i574.graphicsFormat = i575[11]
  i574.sRGBTexture = !!i575[12]
  i574.desiredColorSpace = i575[13]
  i574.wrapU = i575[14]
  i574.wrapV = i575[15]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'animatorController')
  request.r(i577[2], i577[3], 0, i576, 'avatar')
  i576.updateMode = i577[4]
  i576.hasTransformHierarchy = !!i577[5]
  i576.applyRootMotion = !!i577[6]
  var i579 = i577[7]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.humanBones = i578
  i576.enabled = !!i577[8]
  return i576
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.Button' )
  var i583 = data
  i582.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i583[0], i582.m_OnClick)
  i582.m_Navigation = request.d('UnityEngine.UI.Navigation', i583[1], i582.m_Navigation)
  i582.m_Transition = i583[2]
  i582.m_Colors = request.d('UnityEngine.UI.ColorBlock', i583[3], i582.m_Colors)
  i582.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i583[4], i582.m_SpriteState)
  i582.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i583[5], i582.m_AnimationTriggers)
  i582.m_Interactable = !!i583[6]
  request.r(i583[7], i583[8], 0, i582, 'm_TargetGraphic')
  return i582
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i585 = data
  i584.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i585[0], i584.m_PersistentCalls)
  return i584
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i587 = data
  var i589 = i587[0]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i589.length; i += 1) {
    i588.add(request.d('UnityEngine.Events.PersistentCall', i589[i + 0]));
  }
  i586.m_Calls = i588
  return i586
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_Target')
  i592.m_TargetAssemblyTypeName = i593[2]
  i592.m_MethodName = i593[3]
  i592.m_Mode = i593[4]
  i592.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i593[5], i592.m_Arguments)
  i592.m_CallState = i593[6]
  return i592
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i595 = data
  i594.m_Mode = i595[0]
  i594.m_WrapAround = !!i595[1]
  request.r(i595[2], i595[3], 0, i594, 'm_SelectOnUp')
  request.r(i595[4], i595[5], 0, i594, 'm_SelectOnDown')
  request.r(i595[6], i595[7], 0, i594, 'm_SelectOnLeft')
  request.r(i595[8], i595[9], 0, i594, 'm_SelectOnRight')
  return i594
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i597 = data
  i596.m_NormalColor = new pc.Color(i597[0], i597[1], i597[2], i597[3])
  i596.m_HighlightedColor = new pc.Color(i597[4], i597[5], i597[6], i597[7])
  i596.m_PressedColor = new pc.Color(i597[8], i597[9], i597[10], i597[11])
  i596.m_SelectedColor = new pc.Color(i597[12], i597[13], i597[14], i597[15])
  i596.m_DisabledColor = new pc.Color(i597[16], i597[17], i597[18], i597[19])
  i596.m_ColorMultiplier = i597[20]
  i596.m_FadeDuration = i597[21]
  return i596
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_HighlightedSprite')
  request.r(i599[2], i599[3], 0, i598, 'm_PressedSprite')
  request.r(i599[4], i599[5], 0, i598, 'm_SelectedSprite')
  request.r(i599[6], i599[7], 0, i598, 'm_DisabledSprite')
  return i598
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i601 = data
  i600.m_NormalTrigger = i601[0]
  i600.m_HighlightedTrigger = i601[1]
  i600.m_PressedTrigger = i601[2]
  i600.m_SelectedTrigger = i601[3]
  i600.m_DisabledTrigger = i601[4]
  return i600
}

Deserializers["CodeBase.UI.DownloadGameButton"] = function (request, data, root) {
  var i602 = root || request.c( 'CodeBase.UI.DownloadGameButton' )
  var i603 = data
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.planeDistance = i605[1]
  i604.referencePixelsPerUnit = i605[2]
  i604.isFallbackOverlay = !!i605[3]
  i604.renderMode = i605[4]
  i604.renderOrder = i605[5]
  i604.sortingLayerName = i605[6]
  i604.sortingOrder = i605[7]
  i604.scaleFactor = i605[8]
  request.r(i605[9], i605[10], 0, i604, 'worldCamera')
  i604.overrideSorting = !!i605[11]
  i604.pixelPerfect = !!i605[12]
  i604.targetDisplay = i605[13]
  i604.overridePixelPerfect = !!i605[14]
  return i604
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i607 = data
  i606.m_UiScaleMode = i607[0]
  i606.m_ReferencePixelsPerUnit = i607[1]
  i606.m_ScaleFactor = i607[2]
  i606.m_ReferenceResolution = new pc.Vec2( i607[3], i607[4] )
  i606.m_ScreenMatchMode = i607[5]
  i606.m_MatchWidthOrHeight = i607[6]
  i606.m_PhysicalUnit = i607[7]
  i606.m_FallbackScreenDPI = i607[8]
  i606.m_DefaultSpriteDPI = i607[9]
  i606.m_DynamicPixelsPerUnit = i607[10]
  i606.m_PresetInfoIsWorld = !!i607[11]
  return i606
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i609 = data
  i608.m_IgnoreReversedGraphics = !!i609[0]
  i608.m_BlockingObjects = i609[1]
  i608.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i609[2] )
  return i608
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'panelPrefab')
  var i613 = i611[2]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i613.length; i += 1) {
    i612.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i613[i + 0]));
  }
  i610.prefabs = i612
  return i610
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i617 = data
  i616.type = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'prefab')
  return i616
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i619 = data
  i618.m_Spacing = i619[0]
  i618.m_ChildForceExpandWidth = !!i619[1]
  i618.m_ChildForceExpandHeight = !!i619[2]
  i618.m_ChildControlWidth = !!i619[3]
  i618.m_ChildControlHeight = !!i619[4]
  i618.m_ChildScaleWidth = !!i619[5]
  i618.m_ChildScaleHeight = !!i619[6]
  i618.m_ReverseArrangement = !!i619[7]
  i618.m_Padding = UnityEngine.RectOffset.FromPaddings(i619[8], i619[9], i619[10], i619[11])
  i618.m_ChildAlignment = i619[12]
  return i618
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i621 = data
  i620.m_HorizontalFit = i621[0]
  i620.m_VerticalFit = i621[1]
  return i620
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'contentHolder')
  return i622
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'nameLabel')
  request.r(i625[2], i625[3], 0, i624, 'scrollRect')
  request.r(i625[4], i625[5], 0, i624, 'viewport')
  request.r(i625[6], i625[7], 0, i624, 'Canvas')
  return i624
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i627 = data
  i626.m_IgnoreLayout = !!i627[0]
  i626.m_MinWidth = i627[1]
  i626.m_MinHeight = i627[2]
  i626.m_PreferredWidth = i627[3]
  i626.m_PreferredHeight = i627[4]
  i626.m_FlexibleWidth = i627[5]
  i626.m_FlexibleHeight = i627[6]
  i626.m_LayoutPriority = i627[7]
  return i626
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_ObjectArgument')
  i628.m_ObjectArgumentAssemblyTypeName = i629[2]
  i628.m_IntArgument = i629[3]
  i628.m_FloatArgument = i629[4]
  i628.m_StringArgument = i629[5]
  i628.m_BoolArgument = !!i629[6]
  return i628
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Text' )
  var i631 = data
  i630.m_FontData = request.d('UnityEngine.UI.FontData', i631[0], i630.m_FontData)
  i630.m_Text = i631[1]
  request.r(i631[2], i631[3], 0, i630, 'm_Material')
  i630.m_Maskable = !!i631[4]
  i630.m_Color = new pc.Color(i631[5], i631[6], i631[7], i631[8])
  i630.m_RaycastTarget = !!i631[9]
  i630.m_RaycastPadding = new pc.Vec4( i631[10], i631[11], i631[12], i631[13] )
  return i630
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.FontData' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Font')
  i632.m_FontSize = i633[2]
  i632.m_FontStyle = i633[3]
  i632.m_BestFit = !!i633[4]
  i632.m_MinSize = i633[5]
  i632.m_MaxSize = i633[6]
  i632.m_Alignment = i633[7]
  i632.m_AlignByGeometry = !!i633[8]
  i632.m_RichText = !!i633[9]
  i632.m_HorizontalOverflow = i633[10]
  i632.m_VerticalOverflow = i633[11]
  i632.m_LineSpacing = i633[12]
  return i632
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Content')
  i634.m_Horizontal = !!i635[2]
  i634.m_Vertical = !!i635[3]
  i634.m_MovementType = i635[4]
  i634.m_Elasticity = i635[5]
  i634.m_Inertia = !!i635[6]
  i634.m_DecelerationRate = i635[7]
  i634.m_ScrollSensitivity = i635[8]
  request.r(i635[9], i635[10], 0, i634, 'm_Viewport')
  request.r(i635[11], i635[12], 0, i634, 'm_HorizontalScrollbar')
  request.r(i635[13], i635[14], 0, i634, 'm_VerticalScrollbar')
  i634.m_HorizontalScrollbarVisibility = i635[15]
  i634.m_VerticalScrollbarVisibility = i635[16]
  i634.m_HorizontalScrollbarSpacing = i635[17]
  i634.m_VerticalScrollbarSpacing = i635[18]
  i634.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i635[19], i634.m_OnValueChanged)
  return i634
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i637 = data
  i636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i637[0], i636.m_PersistentCalls)
  return i636
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Mask' )
  var i639 = data
  i638.m_ShowMaskGraphic = !!i639[0]
  return i638
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_HandleRect')
  i640.m_Direction = i641[2]
  i640.m_Value = i641[3]
  i640.m_Size = i641[4]
  i640.m_NumberOfSteps = i641[5]
  i640.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i641[6], i640.m_OnValueChanged)
  i640.m_Navigation = request.d('UnityEngine.UI.Navigation', i641[7], i640.m_Navigation)
  i640.m_Transition = i641[8]
  i640.m_Colors = request.d('UnityEngine.UI.ColorBlock', i641[9], i640.m_Colors)
  i640.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i641[10], i640.m_SpriteState)
  i640.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i641[11], i640.m_AnimationTriggers)
  i640.m_Interactable = !!i641[12]
  request.r(i641[13], i641[14], 0, i640, 'm_TargetGraphic')
  return i640
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i643 = data
  i642.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i643[0], i642.m_PersistentCalls)
  return i642
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i645 = data
  var i647 = i645[0]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i647.length; i += 1) {
    i646.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i647[i + 0]));
  }
  i644.m_Delegates = i646
  return i644
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i651 = data
  i650.eventID = i651[0]
  i650.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i651[1], i650.callback)
  return i650
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i653 = data
  i652.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i653[0], i652.m_PersistentCalls)
  return i652
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'nameLabel')
  request.r(i655[2], i655[3], 0, i654, 'valueLabel')
  i654.colorDefault = new pc.Color(i655[4], i655[5], i655[6], i655[7])
  i654.colorSelected = new pc.Color(i655[8], i655[9], i655[10], i655[11])
  return i654
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'nameLabel')
  request.r(i657[2], i657[3], 0, i656, 'valueToggle')
  request.r(i657[4], i657[5], 0, i656, 'checkmarkImage')
  i656.colorDefault = new pc.Color(i657[6], i657[7], i657[8], i657[9])
  i656.colorSelected = new pc.Color(i657[10], i657[11], i657[12], i657[13])
  return i656
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i659 = data
  i658.toggleTransition = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'graphic')
  i658.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i659[3], i658.onValueChanged)
  request.r(i659[4], i659[5], 0, i658, 'm_Group')
  i658.m_IsOn = !!i659[6]
  i658.m_Navigation = request.d('UnityEngine.UI.Navigation', i659[7], i658.m_Navigation)
  i658.m_Transition = i659[8]
  i658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i659[9], i658.m_Colors)
  i658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i659[10], i658.m_SpriteState)
  i658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i659[11], i658.m_AnimationTriggers)
  i658.m_Interactable = !!i659[12]
  request.r(i659[13], i659[14], 0, i658, 'm_TargetGraphic')
  return i658
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i661 = data
  i660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i661[0], i660.m_PersistentCalls)
  return i660
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'nameLabel')
  request.r(i663[2], i663[3], 0, i662, 'valueLabel')
  i662.colorDefault = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.colorSelected = new pc.Color(i663[8], i663[9], i663[10], i663[11])
  return i662
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'nameLabel')
  request.r(i665[2], i665[3], 0, i664, 'valueLabel')
  i664.colorDefault = new pc.Color(i665[4], i665[5], i665[6], i665[7])
  i664.colorSelected = new pc.Color(i665[8], i665[9], i665[10], i665[11])
  return i664
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'nameLabel')
  request.r(i667[2], i667[3], 0, i666, 'valueLabel')
  i666.colorDefault = new pc.Color(i667[4], i667[5], i667[6], i667[7])
  i666.colorSelected = new pc.Color(i667[8], i667[9], i667[10], i667[11])
  return i666
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'nextButtonText')
  request.r(i669[2], i669[3], 0, i668, 'previousButtonText')
  request.r(i669[4], i669[5], 0, i668, 'nameLabel')
  request.r(i669[6], i669[7], 0, i668, 'valueLabel')
  i668.colorDefault = new pc.Color(i669[8], i669[9], i669[10], i669[11])
  i668.colorSelected = new pc.Color(i669[12], i669[13], i669[14], i669[15])
  return i668
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'nameLabel')
  i670.colorDefault = new pc.Color(i671[2], i671[3], i671[4], i671[5])
  i670.colorSelected = new pc.Color(i671[6], i671[7], i671[8], i671[9])
  return i670
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'nameLabel')
  request.r(i673[2], i673[3], 0, i672, 'valueToggle')
  i672.colorDefault = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.colorSelected = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  return i672
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i675 = data
  i674.toggleTransition = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'graphic')
  i674.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i675[3], i674.onValueChanged)
  request.r(i675[4], i675[5], 0, i674, 'content')
  request.r(i675[6], i675[7], 0, i674, 'arrowOpened')
  request.r(i675[8], i675[9], 0, i674, 'arrowClosed')
  request.r(i675[10], i675[11], 0, i674, 'm_Group')
  i674.m_IsOn = !!i675[12]
  i674.m_Navigation = request.d('UnityEngine.UI.Navigation', i675[13], i674.m_Navigation)
  i674.m_Transition = i675[14]
  i674.m_Colors = request.d('UnityEngine.UI.ColorBlock', i675[15], i674.m_Colors)
  i674.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i675[16], i674.m_SpriteState)
  i674.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i675[17], i674.m_AnimationTriggers)
  i674.m_Interactable = !!i675[18]
  request.r(i675[19], i675[20], 0, i674, 'm_TargetGraphic')
  return i674
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'nameLabel')
  request.r(i677[2], i677[3], 0, i676, 'valueToggle')
  request.r(i677[4], i677[5], 0, i676, 'colorImage')
  request.r(i677[6], i677[7], 0, i676, 'fieldR')
  request.r(i677[8], i677[9], 0, i676, 'fieldG')
  request.r(i677[10], i677[11], 0, i676, 'fieldB')
  request.r(i677[12], i677[13], 0, i676, 'fieldA')
  i676.colorDefault = new pc.Color(i677[14], i677[15], i677[16], i677[17])
  i676.colorSelected = new pc.Color(i677[18], i677[19], i677[20], i677[21])
  return i676
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'nameLabel')
  request.r(i679[2], i679[3], 0, i678, 'valueLabel')
  i678.colorDefault = new pc.Color(i679[4], i679[5], i679[6], i679[7])
  i678.colorSelected = new pc.Color(i679[8], i679[9], i679[10], i679[11])
  return i678
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'nameLabel')
  request.r(i681[2], i681[3], 0, i680, 'valueToggle')
  request.r(i681[4], i681[5], 0, i680, 'fieldX')
  request.r(i681[6], i681[7], 0, i680, 'fieldY')
  i680.colorDefault = new pc.Color(i681[8], i681[9], i681[10], i681[11])
  i680.colorSelected = new pc.Color(i681[12], i681[13], i681[14], i681[15])
  return i680
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'nameLabel')
  request.r(i683[2], i683[3], 0, i682, 'valueToggle')
  request.r(i683[4], i683[5], 0, i682, 'fieldX')
  request.r(i683[6], i683[7], 0, i682, 'fieldY')
  request.r(i683[8], i683[9], 0, i682, 'fieldZ')
  i682.colorDefault = new pc.Color(i683[10], i683[11], i683[12], i683[13])
  i682.colorSelected = new pc.Color(i683[14], i683[15], i683[16], i683[17])
  return i682
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'nameLabel')
  request.r(i685[2], i685[3], 0, i684, 'valueToggle')
  request.r(i685[4], i685[5], 0, i684, 'fieldX')
  request.r(i685[6], i685[7], 0, i684, 'fieldY')
  request.r(i685[8], i685[9], 0, i684, 'fieldZ')
  request.r(i685[10], i685[11], 0, i684, 'fieldW')
  i684.colorDefault = new pc.Color(i685[12], i685[13], i685[14], i685[15])
  i684.colorSelected = new pc.Color(i685[16], i685[17], i685[18], i685[19])
  return i684
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i687 = data
  i686.colorDefault = new pc.Color(i687[0], i687[1], i687[2], i687[3])
  i686.colorSelected = new pc.Color(i687[4], i687[5], i687[6], i687[7])
  return i686
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i689 = data
  i688.m_Spacing = i689[0]
  i688.m_ChildForceExpandWidth = !!i689[1]
  i688.m_ChildForceExpandHeight = !!i689[2]
  i688.m_ChildControlWidth = !!i689[3]
  i688.m_ChildControlHeight = !!i689[4]
  i688.m_ChildScaleWidth = !!i689[5]
  i688.m_ChildScaleHeight = !!i689[6]
  i688.m_ReverseArrangement = !!i689[7]
  i688.m_Padding = UnityEngine.RectOffset.FromPaddings(i689[8], i689[9], i689[10], i689[11])
  i688.m_ChildAlignment = i689[12]
  return i688
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i691 = data
  i690.colorDefault = new pc.Color(i691[0], i691[1], i691[2], i691[3])
  i690.colorSelected = new pc.Color(i691[4], i691[5], i691[6], i691[7])
  return i690
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'nameLabel')
  request.r(i693[2], i693[3], 0, i692, 'header')
  i692.colorDefault = new pc.Color(i693[4], i693[5], i693[6], i693[7])
  i692.colorSelected = new pc.Color(i693[8], i693[9], i693[10], i693[11])
  return i692
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'nameLabel')
  request.r(i695[2], i695[3], 0, i694, 'valueToggle')
  var i697 = i695[4]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i694.toggles = i696
  i694.colorDefault = new pc.Color(i695[5], i695[6], i695[7], i695[8])
  i694.colorSelected = new pc.Color(i695[9], i695[10], i695[11], i695[12])
  return i694
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'nameLabel')
  request.r(i701[2], i701[3], 0, i700, 'valueToggle')
  request.r(i701[4], i701[5], 0, i700, 'checkmarkImage')
  i700.colorDefault = new pc.Color(i701[6], i701[7], i701[8], i701[9])
  i700.colorSelected = new pc.Color(i701[10], i701[11], i701[12], i701[13])
  return i700
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'nameLabel')
  request.r(i703[2], i703[3], 0, i702, 'valueToggle')
  request.r(i703[4], i703[5], 0, i702, 'checkmarkImage')
  i702.colorDefault = new pc.Color(i703[6], i703[7], i703[8], i703[9])
  i702.colorSelected = new pc.Color(i703[10], i703[11], i703[12], i703[13])
  return i702
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'nextButtonText')
  request.r(i705[2], i705[3], 0, i704, 'previousButtonText')
  request.r(i705[4], i705[5], 0, i704, 'nameLabel')
  request.r(i705[6], i705[7], 0, i704, 'valueLabel')
  i704.colorDefault = new pc.Color(i705[8], i705[9], i705[10], i705[11])
  i704.colorSelected = new pc.Color(i705[12], i705[13], i705[14], i705[15])
  return i704
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'nameLabel')
  request.r(i707[2], i707[3], 0, i706, 'valueToggle')
  i706.colorDefault = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.colorSelected = new pc.Color(i707[8], i707[9], i707[10], i707[11])
  return i706
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'nameLabel')
  i708.colorDefault = new pc.Color(i709[2], i709[3], i709[4], i709[5])
  i708.colorSelected = new pc.Color(i709[6], i709[7], i709[8], i709[9])
  return i708
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'nameLabel')
  request.r(i711[2], i711[3], 0, i710, 'valueLabel')
  request.r(i711[4], i711[5], 0, i710, 'progressBarRect')
  i710.colorDefault = new pc.Color(i711[6], i711[7], i711[8], i711[9])
  i710.colorSelected = new pc.Color(i711[10], i711[11], i711[12], i711[13])
  return i710
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'nameLabel')
  request.r(i713[2], i713[3], 0, i712, 'valueLabel')
  i712.colorDefault = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.colorSelected = new pc.Color(i713[8], i713[9], i713[10], i713[11])
  return i712
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'nameLabel')
  request.r(i715[2], i715[3], 0, i714, 'valueLabel')
  i714.colorDefault = new pc.Color(i715[4], i715[5], i715[6], i715[7])
  i714.colorSelected = new pc.Color(i715[8], i715[9], i715[10], i715[11])
  return i714
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'nextButtonText')
  request.r(i717[2], i717[3], 0, i716, 'previousButtonText')
  request.r(i717[4], i717[5], 0, i716, 'nameLabel')
  request.r(i717[6], i717[7], 0, i716, 'valueLabel')
  i716.colorDefault = new pc.Color(i717[8], i717[9], i717[10], i717[11])
  i716.colorSelected = new pc.Color(i717[12], i717[13], i717[14], i717[15])
  return i716
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'nextButtonText')
  request.r(i719[2], i719[3], 0, i718, 'previousButtonText')
  request.r(i719[4], i719[5], 0, i718, 'nameLabel')
  request.r(i719[6], i719[7], 0, i718, 'valueLabel')
  i718.colorDefault = new pc.Color(i719[8], i719[9], i719[10], i719[11])
  i718.colorSelected = new pc.Color(i719[12], i719[13], i719[14], i719[15])
  return i718
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'panel')
  request.r(i721[2], i721[3], 0, i720, 'valuePrefab')
  return i720
}

Deserializers["CodeBase.HelpSystem.HelpAnimationSystem"] = function (request, data, root) {
  var i722 = root || request.c( 'CodeBase.HelpSystem.HelpAnimationSystem' )
  var i723 = data
  i722._animationDuration = i723[0]
  i722._fadeDuration = i723[1]
  request.r(i723[2], i723[3], 0, i722, '_helpHand')
  request.r(i723[4], i723[5], 0, i722, '_mergeable')
  request.r(i723[6], i723[7], 0, i722, '_finalPositionMergeable')
  request.r(i723[8], i723[9], 0, i722, '_finalPositionHand')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i725 = data
  i724.AdditionalLightsPerObjectLimit = i725[0]
  i724.AdditionalLightsRenderingMode = i725[1]
  i724.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i725[2], i724.LightRenderingMode)
  i724.ColorGradingLutSize = i725[3]
  i724.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i725[4], i724.ColorGradingMode)
  i724.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i725[5], i724.MainLightRenderingMode)
  i724.MainLightRenderingModeValue = i725[6]
  i724.SupportsMainLightShadows = !!i725[7]
  i724.MixedLightingSupported = !!i725[8]
  i724.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i725[9], i724.MsaaQuality)
  i724.MSAA = i725[10]
  i724.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i725[11], i724.OpaqueDownsampling)
  i724.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i725[12], i724.MainLightShadowmapResolution)
  i724.MainLightShadowmapResolutionValue = i725[13]
  i724.SupportsSoftShadows = !!i725[14]
  i724.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i725[15], i724.SoftShadowQuality)
  i724.SoftShadowQualityValue = i725[16]
  i724.ShadowDistance = i725[17]
  i724.ShadowCascadeCount = i725[18]
  i724.Cascade2Split = i725[19]
  i724.Cascade3Split = new pc.Vec2( i725[20], i725[21] )
  i724.Cascade4Split = new pc.Vec3( i725[22], i725[23], i725[24] )
  i724.CascadeBorder = i725[25]
  i724.ShadowDepthBias = i725[26]
  i724.ShadowNormalBias = i725[27]
  i724.RenderScale = i725[28]
  i724.RequireDepthTexture = !!i725[29]
  i724.RequireOpaqueTexture = !!i725[30]
  i724.SupportsHDR = !!i725[31]
  i724.SupportsTerrainHoles = !!i725[32]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i727 = data
  i726.Disabled = i727[0]
  i726.PerVertex = i727[1]
  i726.PerPixel = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i729 = data
  i728.LowDynamicRange = i729[0]
  i728.HighDynamicRange = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i731 = data
  i730.Disabled = i731[0]
  i730._2x = i731[1]
  i730._4x = i731[2]
  i730._8x = i731[3]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i733 = data
  i732.None = i733[0]
  i732._2xBilinear = i733[1]
  i732._4xBox = i733[2]
  i732._4xBilinear = i733[3]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i735 = data
  i734._256 = i735[0]
  i734._512 = i735[1]
  i734._1024 = i735[2]
  i734._2048 = i735[3]
  i734._4096 = i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i737 = data
  i736.UsePipelineSettings = i737[0]
  i736.Low = i737[1]
  i736.Medium = i737[2]
  i736.High = i737[3]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i739 = data
  var i741 = i739[0]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i741[i + 0]));
  }
  i738.ShaderCompilationErrors = i740
  i738.name = i739[1]
  i738.guid = i739[2]
  var i743 = i739[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i738.shaderDefinedKeywords = i742
  var i745 = i739[4]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i745[i + 0]) );
  }
  i738.passes = i744
  var i747 = i739[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i747[i + 0]) );
  }
  i738.usePasses = i746
  var i749 = i739[6]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i749[i + 0]) );
  }
  i738.defaultParameterValues = i748
  request.r(i739[7], i739[8], 0, i738, 'unityFallbackShader')
  i738.readDepth = !!i739[9]
  i738.isCreatedByShaderGraph = !!i739[10]
  i738.compiled = !!i739[11]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i753 = data
  i752.shaderName = i753[0]
  i752.errorMessage = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i758 = root || new pc.UnityShaderPass()
  var i759 = data
  i758.id = i759[0]
  i758.subShaderIndex = i759[1]
  i758.name = i759[2]
  i758.passType = i759[3]
  i758.grabPassTextureName = i759[4]
  i758.usePass = !!i759[5]
  i758.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[6], i758.zTest)
  i758.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[7], i758.zWrite)
  i758.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[8], i758.culling)
  i758.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i759[9], i758.blending)
  i758.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i759[10], i758.alphaBlending)
  i758.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[11], i758.colorWriteMask)
  i758.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[12], i758.offsetUnits)
  i758.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[13], i758.offsetFactor)
  i758.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[14], i758.stencilRef)
  i758.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[15], i758.stencilReadMask)
  i758.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[16], i758.stencilWriteMask)
  i758.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i759[17], i758.stencilOp)
  i758.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i759[18], i758.stencilOpFront)
  i758.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i759[19], i758.stencilOpBack)
  var i761 = i759[20]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i761[i + 0]) );
  }
  i758.tags = i760
  var i763 = i759[21]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( i763[i + 0] );
  }
  i758.passDefinedKeywords = i762
  var i765 = i759[22]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i765[i + 0]) );
  }
  i758.passDefinedKeywordGroups = i764
  var i767 = i759[23]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i767[i + 0]) );
  }
  i758.variants = i766
  var i769 = i759[24]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i769[i + 0]) );
  }
  i758.excludedVariants = i768
  i758.hasDepthReader = !!i759[25]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i771 = data
  i770.val = i771[0]
  i770.name = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i773 = data
  i772.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[0], i772.src)
  i772.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[1], i772.dst)
  i772.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[2], i772.op)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i775 = data
  i774.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[0], i774.pass)
  i774.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[1], i774.fail)
  i774.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[2], i774.zFail)
  i774.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[3], i774.comp)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i779 = data
  i778.name = i779[0]
  i778.value = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i783 = data
  var i785 = i783[0]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i782.keywords = i784
  i782.hasDiscard = !!i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i789 = data
  i788.passId = i789[0]
  i788.subShaderIndex = i789[1]
  var i791 = i789[2]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i788.keywords = i790
  i788.vertexProgram = i789[3]
  i788.fragmentProgram = i789[4]
  i788.exportedForWebGl2 = !!i789[5]
  i788.readDepth = !!i789[6]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'shader')
  i794.pass = i795[2]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i799 = data
  i798.name = i799[0]
  i798.type = i799[1]
  i798.value = new pc.Vec4( i799[2], i799[3], i799[4], i799[5] )
  i798.textureValue = i799[6]
  i798.shaderPropertyFlag = i799[7]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i801 = data
  i800.name = i801[0]
  request.r(i801[1], i801[2], 0, i800, 'texture')
  i800.aabb = i801[3]
  i800.vertices = i801[4]
  i800.triangles = i801[5]
  i800.textureRect = UnityEngine.Rect.MinMaxRect(i801[6], i801[7], i801[8], i801[9])
  i800.packedRect = UnityEngine.Rect.MinMaxRect(i801[10], i801[11], i801[12], i801[13])
  i800.border = new pc.Vec4( i801[14], i801[15], i801[16], i801[17] )
  i800.transparency = i801[18]
  i800.bounds = i801[19]
  i800.pixelsPerUnit = i801[20]
  i800.textureWidth = i801[21]
  i800.textureHeight = i801[22]
  i800.nativeSize = new pc.Vec2( i801[23], i801[24] )
  i800.pivot = new pc.Vec2( i801[25], i801[26] )
  i800.textureRectOffset = new pc.Vec2( i801[27], i801[28] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i803 = data
  i802.name = i803[0]
  i802.wrapMode = i803[1]
  i802.isLooping = !!i803[2]
  i802.length = i803[3]
  var i805 = i803[4]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i805[i + 0]) );
  }
  i802.curves = i804
  var i807 = i803[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i807[i + 0]) );
  }
  i802.events = i806
  i802.halfPrecision = !!i803[6]
  i802._frameRate = i803[7]
  i802.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i803[8], i802.localBounds)
  i802.hasMuscleCurves = !!i803[9]
  var i809 = i803[10]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i802.clipMuscleConstant = i808
  i802.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i803[11], i802.clipBindingConstant)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i813 = data
  i812.path = i813[0]
  i812.hash = i813[1]
  i812.componentType = i813[2]
  i812.property = i813[3]
  i812.keys = i813[4]
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i815[i + 0]) );
  }
  i812.objectReferenceKeys = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i819 = data
  i818.time = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'value')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i823 = data
  i822.functionName = i823[0]
  i822.floatParameter = i823[1]
  i822.intParameter = i823[2]
  i822.stringParameter = i823[3]
  request.r(i823[4], i823[5], 0, i822, 'objectReferenceParameter')
  i822.time = i823[6]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i825 = data
  i824.center = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.extends = new pc.Vec3( i825[3], i825[4], i825[5] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i829 = data
  var i831 = i829[0]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i828.genericBindings = i830
  var i833 = i829[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i828.pptrCurveMapping = i832
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i835 = data
  i834.name = i835[0]
  i834.ascent = i835[1]
  i834.originalLineHeight = i835[2]
  i834.fontSize = i835[3]
  var i837 = i835[4]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i837[i + 0]) );
  }
  i834.characterInfo = i836
  request.r(i835[5], i835[6], 0, i834, 'texture')
  i834.originalFontSize = i835[7]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i841 = data
  i840.index = i841[0]
  i840.advance = i841[1]
  i840.bearing = i841[2]
  i840.glyphWidth = i841[3]
  i840.glyphHeight = i841[4]
  i840.minX = i841[5]
  i840.maxX = i841[6]
  i840.minY = i841[7]
  i840.maxY = i841[8]
  i840.uvBottomLeftX = i841[9]
  i840.uvBottomLeftY = i841[10]
  i840.uvBottomRightX = i841[11]
  i840.uvBottomRightY = i841[12]
  i840.uvTopLeftX = i841[13]
  i840.uvTopLeftY = i841[14]
  i840.uvTopRightX = i841[15]
  i840.uvTopRightY = i841[16]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i843 = data
  i842.name = i843[0]
  var i845 = i843[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i845[i + 0]) );
  }
  i842.layers = i844
  var i847 = i843[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i847[i + 0]) );
  }
  i842.parameters = i846
  i842.animationClips = i843[3]
  i842.avatarUnsupported = i843[4]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i851 = data
  i850.name = i851[0]
  i850.defaultWeight = i851[1]
  i850.blendingMode = i851[2]
  i850.avatarMask = i851[3]
  i850.syncedLayerIndex = i851[4]
  i850.syncedLayerAffectsTiming = !!i851[5]
  i850.syncedLayers = i851[6]
  i850.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i851[7], i850.stateMachine)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i853 = data
  i852.id = i853[0]
  i852.name = i853[1]
  i852.path = i853[2]
  var i855 = i853[3]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i855[i + 0]) );
  }
  i852.states = i854
  var i857 = i853[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i857[i + 0]) );
  }
  i852.machines = i856
  var i859 = i853[5]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i859[i + 0]) );
  }
  i852.entryStateTransitions = i858
  var i861 = i853[6]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i861[i + 0]) );
  }
  i852.exitStateTransitions = i860
  var i863 = i853[7]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i863[i + 0]) );
  }
  i852.anyStateTransitions = i862
  i852.defaultStateId = i853[8]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i867 = data
  i866.id = i867[0]
  i866.name = i867[1]
  i866.cycleOffset = i867[2]
  i866.cycleOffsetParameter = i867[3]
  i866.cycleOffsetParameterActive = !!i867[4]
  i866.mirror = !!i867[5]
  i866.mirrorParameter = i867[6]
  i866.mirrorParameterActive = !!i867[7]
  i866.motionId = i867[8]
  i866.nameHash = i867[9]
  i866.fullPathHash = i867[10]
  i866.speed = i867[11]
  i866.speedParameter = i867[12]
  i866.speedParameterActive = !!i867[13]
  i866.tag = i867[14]
  i866.tagHash = i867[15]
  i866.writeDefaultValues = !!i867[16]
  var i869 = i867[17]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.behaviours = i868
  var i871 = i867[18]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i871[i + 0]) );
  }
  i866.transitions = i870
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i877 = data
  i876.fullPath = i877[0]
  i876.canTransitionToSelf = !!i877[1]
  i876.duration = i877[2]
  i876.exitTime = i877[3]
  i876.hasExitTime = !!i877[4]
  i876.hasFixedDuration = !!i877[5]
  i876.interruptionSource = i877[6]
  i876.offset = i877[7]
  i876.orderedInterruption = !!i877[8]
  i876.destinationStateId = i877[9]
  i876.isExit = !!i877[10]
  i876.mute = !!i877[11]
  i876.solo = !!i877[12]
  var i879 = i877[13]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i879[i + 0]) );
  }
  i876.conditions = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i883 = data
  i882.mode = i883[0]
  i882.parameter = i883[1]
  i882.threshold = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i889 = data
  i888.destinationStateId = i889[0]
  i888.isExit = !!i889[1]
  i888.mute = !!i889[2]
  i888.solo = !!i889[3]
  var i891 = i889[4]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i891[i + 0]) );
  }
  i888.conditions = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i895 = data
  i894.defaultBool = !!i895[0]
  i894.defaultFloat = i895[1]
  i894.defaultInt = i895[2]
  i894.name = i895[3]
  i894.nameHash = i895[4]
  i894.type = i895[5]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i899[i + 0]) );
  }
  i896.files = i898
  i896.componentToPrefabIds = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i903 = data
  i902.path = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'unityObject')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i907[i + 0]) );
  }
  i904.scriptsExecutionOrder = i906
  var i909 = i905[1]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i909[i + 0]) );
  }
  i904.sortingLayers = i908
  var i911 = i905[2]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i911[i + 0]) );
  }
  i904.cullingLayers = i910
  i904.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i905[3], i904.timeSettings)
  i904.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i905[4], i904.physicsSettings)
  i904.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i905[5], i904.physics2DSettings)
  i904.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i905[6], i904.qualitySettings)
  i904.enableRealtimeShadows = !!i905[7]
  i904.enableAutoInstancing = !!i905[8]
  i904.enableDynamicBatching = !!i905[9]
  i904.lightmapEncodingQuality = i905[10]
  i904.desiredColorSpace = i905[11]
  var i913 = i905[12]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i904.allTags = i912
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i917 = data
  i916.name = i917[0]
  i916.value = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i921 = data
  i920.id = i921[0]
  i920.name = i921[1]
  i920.value = i921[2]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i925 = data
  i924.id = i925[0]
  i924.name = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i927 = data
  i926.fixedDeltaTime = i927[0]
  i926.maximumDeltaTime = i927[1]
  i926.timeScale = i927[2]
  i926.maximumParticleTimestep = i927[3]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i929 = data
  i928.gravity = new pc.Vec3( i929[0], i929[1], i929[2] )
  i928.defaultSolverIterations = i929[3]
  i928.bounceThreshold = i929[4]
  i928.autoSyncTransforms = !!i929[5]
  i928.autoSimulation = !!i929[6]
  var i931 = i929[7]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i931[i + 0]) );
  }
  i928.collisionMatrix = i930
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i935 = data
  i934.enabled = !!i935[0]
  i934.layerId = i935[1]
  i934.otherLayerId = i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'material')
  i936.gravity = new pc.Vec2( i937[2], i937[3] )
  i936.positionIterations = i937[4]
  i936.velocityIterations = i937[5]
  i936.velocityThreshold = i937[6]
  i936.maxLinearCorrection = i937[7]
  i936.maxAngularCorrection = i937[8]
  i936.maxTranslationSpeed = i937[9]
  i936.maxRotationSpeed = i937[10]
  i936.baumgarteScale = i937[11]
  i936.baumgarteTOIScale = i937[12]
  i936.timeToSleep = i937[13]
  i936.linearSleepTolerance = i937[14]
  i936.angularSleepTolerance = i937[15]
  i936.defaultContactOffset = i937[16]
  i936.autoSimulation = !!i937[17]
  i936.queriesHitTriggers = !!i937[18]
  i936.queriesStartInColliders = !!i937[19]
  i936.callbacksOnDisable = !!i937[20]
  i936.reuseCollisionCallbacks = !!i937[21]
  i936.autoSyncTransforms = !!i937[22]
  var i939 = i937[23]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i939[i + 0]) );
  }
  i936.collisionMatrix = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i943 = data
  i942.enabled = !!i943[0]
  i942.layerId = i943[1]
  i942.otherLayerId = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i947[i + 0]) );
  }
  i944.qualityLevels = i946
  var i949 = i945[1]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( i949[i + 0] );
  }
  i944.names = i948
  i944.shadows = i945[2]
  i944.anisotropicFiltering = i945[3]
  i944.antiAliasing = i945[4]
  i944.lodBias = i945[5]
  i944.shadowCascades = i945[6]
  i944.shadowDistance = i945[7]
  i944.shadowmaskMode = i945[8]
  i944.shadowProjection = i945[9]
  i944.shadowResolution = i945[10]
  i944.softParticles = !!i945[11]
  i944.softVegetation = !!i945[12]
  i944.activeColorSpace = i945[13]
  i944.desiredColorSpace = i945[14]
  i944.masterTextureLimit = i945[15]
  i944.maxQueuedFrames = i945[16]
  i944.particleRaycastBudget = i945[17]
  i944.pixelLightCount = i945[18]
  i944.realtimeReflectionProbes = !!i945[19]
  i944.shadowCascade2Split = i945[20]
  i944.shadowCascade4Split = new pc.Vec3( i945[21], i945[22], i945[23] )
  i944.streamingMipmapsActive = !!i945[24]
  i944.vSyncCount = i945[25]
  i944.asyncUploadBufferSize = i945[26]
  i944.asyncUploadTimeSlice = i945[27]
  i944.billboardsFaceCameraPosition = !!i945[28]
  i944.shadowNearPlaneOffset = i945[29]
  i944.streamingMipmapsMemoryBudget = i945[30]
  i944.maximumLODLevel = i945[31]
  i944.streamingMipmapsAddAllCameras = !!i945[32]
  i944.streamingMipmapsMaxLevelReduction = i945[33]
  i944.streamingMipmapsRenderersPerFrame = i945[34]
  i944.resolutionScalingFixedDPIFactor = i945[35]
  i944.streamingMipmapsMaxFileIORequests = i945[36]
  i944.currentQualityLevel = i945[37]
  return i944
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[3],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[3],"100":[101],"102":[103],"104":[103],"18":[10],"42":[10],"105":[3],"5":[3],"106":[107],"108":[3],"109":[110],"111":[112],"113":[110],"114":[10],"115":[10],"20":[18],"12":[11,10],"116":[10],"19":[18],"23":[10],"117":[10],"50":[10],"118":[10],"28":[10],"119":[10],"22":[10],"31":[10],"120":[10],"121":[11,10],"122":[10],"30":[10],"27":[10],"123":[10],"26":[11,10],"35":[10],"124":[7],"125":[7],"8":[7],"126":[7],"127":[3],"128":[3],"129":[130],"131":[3],"132":[110]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","CodeBase.Infrastructure.GameBootstrapper","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","CodeBase.UI.DownloadGameButton","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.GameObject","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","CodeBase.HelpSystem.HelpAnimationSystem","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.59f1";

Deserializers.productName = "playworks_example";

Deserializers.lunaInitializationTime = "06/25/2025 09:54:01";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "playworks_example";

Deserializers.lunaAppID = "30039";

Deserializers.projectId = "138f4ed7396f9564daf26453eef123a6";

Deserializers.packagesInfo = "com.unity.postprocessing: 3.4.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.shadergraph: 14.0.12\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1556";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3612";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.playworks-example";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c006b019-666b-4f7a-a255-209a968be325";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

