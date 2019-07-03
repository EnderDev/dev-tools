// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// NOTE: need to be careful about adding release notes early otherwise it'll
// be shown in Canary (e.g. make sure the release notes are accurate).
// https://github.com/ChromeDevTools/devtools-frontend/wiki/Release-Notes

const continueToHereShortcut = Host.isMac() ? 'Command' : 'Control';
const networkSearchShortcut = Host.isMac() ? 'Command + F' : 'Control + F';
const commandMenuShortcut = Host.isMac() ? 'Command + Shift + P' : 'Control + Shift + P';

/** @type {!Array<!Help.ReleaseNote>} */
Help.releaseNoteText = [
  {
    version: 18,
    header: 'Highlights from the Chrome 76 update',
    highlights: [
      {
        title: 'Autocomplete with CSS keyword values',
        subtitle: 'Typing a keyword value like "bold" in the Styles pane now autocompletes to "font-weight: bold".',
        link: 'https://developers.google.com/web/updates/2019/05/devtools#values',
      },
      {
        title: 'A new UI for network settings',
        subtitle:
            'The "Use large request rows", "Group by frame", "Show overview", and "Capture screenshots" options have moved to the new Network Settings pane.',
        link: 'https://developers.google.com/web/updates/2019/05/devtools#settings',
      },
      {
        title: 'WebSocket messages in HAR exports',
        subtitle: 'Network logs downloaded from the Network panel now include WebSocket messages.',
        link: 'https://developers.google.com/web/updates/2019/05/devtools#websocket',
      },
    ],
    link: 'https://developers.google.com/web/updates/2019/05/devtools',
  }
];
