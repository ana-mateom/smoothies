import React, { useState, useEffect } from 'react';
import OneSignal from 'react-onesignal';

let oneSignalInitialized = false;

export default async function runOneSignal() {
  console.log("init");
  if (oneSignalInitialized) {
    return
  }
  oneSignalInitialized = true;
  console.log("init2");
  await OneSignal.init({ 
    appId: 'b9c41c33-8196-4883-a129-21ce0ce5df41',  
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: true,
    autoPrompt: true,
    promptOptions: {
        customlink: {
          enabled: true, /* Required to use the Custom Link */
          style: "button", /* Has value of 'button' or 'link' */
          size: "medium", /* One of 'small', 'medium', or 'large' */
          color: {
            button: '#E12D30', /* Color of the button background if style = "button" */
            text: '#FFFFFF', /* Color of the prompt's text */
          },
          text: {
            subscribe: "Subscribe to push notifications", /* Prompt's text when not subscribed */
            unsubscribe: "Unsubscribe from push notifications", /* Prompt's text when subscribed */
            explanation: "Get updates from all sorts of things that matter to you", /* Optional text appearing before the prompt button */
          },
          unsubscribeEnabled: true, /* Controls whether the prompt is visible after subscription */
        }
      }
});
  OneSignal.Slidedown.promptPush();
}

