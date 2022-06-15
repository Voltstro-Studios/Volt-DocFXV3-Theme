// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import cookie  from 'js-cookie'

let theme = cookie.get('docfx.theme') || 'dark';
let themeDataAttribute = 'data-theme';

export function enableSwitchTheme() {
  document.documentElement.setAttribute(themeDataAttribute, theme);

  let button = document.getElementById('switch-theme');
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    let targetTheme = theme === 'light' ? 'dark' : 'light';

    cookie.set('docfx.theme', targetTheme);
    document.documentElement.setAttribute(themeDataAttribute, targetTheme);
    theme = targetTheme;
  });
}
