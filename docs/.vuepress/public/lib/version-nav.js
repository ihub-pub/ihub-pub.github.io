/*
 * Copyright (c) 2021 Henry 李恒 (henry.box@outlook.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
window.onload = replaceNav
document.body.onclick = replaceNav

function replaceNav() {
    if ('#/' !== window.location.hash) {
        document.querySelectorAll('.sidebar-nav a').forEach(function (a) {
            const versionHash = window.location.hash.replace(/(#\/[0-9]+\.[0-9]+\.[0-9]+).*/, '$1')
            if (a.href.endsWith('#/')) {
                a.href = '/plugins'
            } else if (versionHash.includes('.') && !a.href.includes(versionHash)) {
                a.href = a.href.replace(/(.*)#[0-9\.\/]*(\/.*)/, '$1' + versionHash + '$2').replace(/(.*)\/$/, '$1')
            }
        })
        document.querySelectorAll('.app-nav a').forEach(function (a) {
            const hash = window.location.hash.replace(/#.*(\/.*)/, '$1')
            a.href = a.href.replace(/(.*)(#\/[0-9]+\.[0-9]+\.[0-9]+).*/, '$1$2' + hash).replace(/(.*)\/$/, '$1')
        })
        document.querySelectorAll('main a').forEach(function (a) {
            const versionHash = window.location.hash.replace(/(#\/[0-9]+\.[0-9]+\.[0-9]+).*/, '$1')
            if (versionHash.includes('.') && !a.href.includes(versionHash)) {
                a.href = a.href.replace(/(.*)#[0-9\.\/]*(\/.*)/, '$1' + versionHash + '$2').replace(/(.*)\/$/, '$1')
            }
        })
    }
}
