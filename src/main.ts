/*
 * Volt-DocfxV3-Theme
 *
 * Copyright (c) 2022 Voltstro-Studios
 * Copyright (c) 2020 docfx
 */
import 'bootstrap/js/dist/collapse'

import { enableAnchor } from './scripts/anchor'
import { highlight } from './scripts/highlight'
import { renderAlerts, renderLinks, renderTables, renderTabs } from './scripts/markdown'
import { renderAside, renderNavbar } from './scripts/nav'
import { enableSwitchTheme } from './scripts/theme'
import { renderToc } from './scripts/toc'

import './docfx.scss'

document.addEventListener('DOMContentLoaded', onContentLoad)

function onContentLoad() {
  enableAnchor()
  enableSwitchTheme()
  highlight()

  renderTables()
  renderAlerts()
  renderLinks()

  renderNavbar()
  renderToc()

  renderAside()
  renderTabs()
}