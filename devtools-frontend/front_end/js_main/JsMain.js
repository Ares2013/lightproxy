// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @implements {Common.Runnable}
 */
export class JsMainImpl extends Common.Object {
  /**
   * @override
   */
  run() {
    Host.userMetrics.actionTaken(Host.UserMetrics.Action.ConnectToNodeJSDirectly);
    SDK.initMainConnection(() => {
      const target = SDK.targetManager.createTarget('main', ls`Main`, SDK.Target.Type.Node, null);
      target.runtimeAgent().runIfWaitingForDebugger();
    }, Components.TargetDetachedDialog.webSocketConnectionLost);
  }
}

/* Legacy exported object */
self.JsMain = self.JsMain || {};

/* Legacy exported object */
JsMain = JsMain || {};

/**
 * @constructor
 */
JsMain.JsMain = JsMainImpl;
